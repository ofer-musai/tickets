require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');

const concertsRouter = require('./routes/concerts');
const statsRouter = require('./routes/stats');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- Routes ---
app.use('/api/concerts', concertsRouter);
app.use('/api/stats', statsRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// --- Stripe Routes ---
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const YOUR_DOMAIN = process.env.YOUR_DOMAIN || 'http://localhost:3000';
    const { title, price } = req.body;

    // price convertion: $49 to 4900 cents
    const amount = Math.round(parseFloat(price.replace(/[^0-9.]/g, '')) * 100);

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded_page',
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: amount,
          product_data: { name: title },
        },
        quantity: 1,
      }],
      mode: 'payment',
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ error: 'Unable to create checkout session' });
  }
});

app.get('/api/session-status', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

    res.json({
      status: session.status,
      customer_email: session.customer_details?.email || null,
    });
  } catch (error) {
    console.error('Stripe session status error:', error);
    res.status(500).json({ error: 'Unable to retrieve session status' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));