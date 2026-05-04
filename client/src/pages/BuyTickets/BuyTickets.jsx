import { useState, useCallback, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { styles } from './BuyTickets.styles';
import { useGetConcert } from '../../services/api/hooks/useConcert';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const stripePromise = loadStripe("pk_test_51TT5siLAOkyP8xoUYDmgThoaRcsCiha3Qa4UnBHvM0Nl3c7LnJ7rNjUsTocNEEEATXM7q42ae1W2zgXPQIDchOeH00R6f31Dcp");

// --- Return/Success page (route: /return) ---
export function BuyTicketsReturn() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    fetch(`/api/session-status?session_id=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    navigate('/checkout');
    return null;
  }

  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        {status === 'complete' ? (
          <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
            <p style={styles.eyebrow}>Purchase Confirmed</p>
            <h1 style={styles.heading}>See you at the <span className="gradient-text">show.</span></h1>
            <p style={{ color: '#4A4A6A', marginTop: '1rem' }}>
              A confirmation will be sent to <strong>{customerEmail}</strong>.
            </p>
            <button
              onClick={() => navigate('/')} // Back to homepage
              style={styles.buyBtn}
              className="btn-primary"
            >
              Back to Concerts
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '6rem 2rem', color: '#4A4A6A' }}>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

// --- Main BuyTickets page (route: /concerts/:id/buy) ---
export default function BuyTickets() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: concert, isLoading, error } = useGetConcert(id);
  const location = useLocation();
  const quantity = location.state?.quantity || 1;

  const fetchClientSecret = useCallback(() => {
    return fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: concert?.title,
        price: concert?.price,
        concertId: concert?._id,
        quantity,
      }),
    })
      .then(res => res.json())
      .then(data => data.clientSecret);
  }, [concert?.title, concert?.price, concert?._id]);

  if (isLoading) {
    return (
      <div style={styles.page}>
        <div style={{ textAlign: 'center', padding: '6rem 2rem', color: '#4A4A6A' }} className="loading-pulse">
          Preparing your ticket...
        </div>
      </div>
    );
  }

  if (error || !concert) {
    return (
      <div style={styles.page}>
        <div style={{ textAlign: 'center', padding: '6rem 2rem', color: '#4A4A6A' }}>
          Ticket not found.{' '}
          <button onClick={() => navigate('/')} style={{ color: '#FF2E63', background: 'none', border: 'none', cursor: 'pointer' }}>
            Go back
          </button>
        </div>
      </div>
    );
  }

  const ticketNumber = `TF-${concert.id}-${Date.now().toString().slice(-5)}`;

  return (
    <div style={styles.page}>
      <div className="glow-blob-pink" style={{ width: '500px', height: '400px', top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
      <div style={styles.inner}>

        <p style={styles.eyebrow}>Your Digital Ticket</p>
        <h1 style={styles.heading}>You're going <span className="gradient-text">live.</span></h1>

        {/* Ticket — unchanged */}
        <div style={styles.ticket}>
          <div style={styles.stub}>
            <div style={styles.stubDate}>{concert.date.split(',')[0]}</div>
            <div style={styles.stubYear}>{concert.date.split(',')[1]?.trim()}</div>
            <div style={styles.stubDivider} />
            <div style={styles.stubSeat}>GA</div>
            <div style={styles.stubSeatLabel}>General<br />Admission</div>
          </div>

          <div style={styles.perforation}>
            <div style={styles.circleTop} />
            <div style={styles.dashedLine} />
            <div style={styles.circleBottom} />
          </div>

          <div style={styles.body}>
            <div style={styles.bodyTop}>
              <span style={styles.genre}>Live Music</span>
              <span style={styles.badge}>🎟️ On Sale</span>
            </div>
            <h2 style={styles.title}>{concert.title}</h2>
            <div style={styles.metaRow}>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Venue</span>
                <span style={styles.metaValue}>{concert.venue}</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Date</span>
                <span style={styles.metaValue}>{concert.date}</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Doors Open</span>
                <span style={styles.metaValue}>7:00 PM</span>
              </div>
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Price</span>
                <span style={styles.metaValueAccent}>{concert.price}</span>
              </div>
            </div>
            <div style={styles.ticketFooter}>
              <div style={styles.barcode}>
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} style={{ ...styles.bar, width: i % 3 === 0 ? '3px' : '2px', opacity: i % 5 === 0 ? 0.4 : 1 }} />
                ))}
              </div>
              <div style={styles.ticketNumber}>{ticketNumber}</div>
            </div>
          </div>

          <img src={concert.imageUrl} alt="" style={styles.bgImage} />
        </div>

        {/* Stripe Embedded Checkout — replaces the payment form */}
        <div style={styles.form}>
          <p style={styles.formTitle}>Payment Details</p>
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>

      </div>
    </div>
  );
}