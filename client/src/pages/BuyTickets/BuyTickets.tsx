import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styles } from './BuyTickets.styles';
import { styles as common } from '../../styles/common.styles';
import { useGetConcert } from '../../services/api/hooks/useConcert';

interface PaymentForm {
  name: string;
  email: string;
  card: string;
  expiry: string;
  cvv: string;
}

export default function BuyTickets() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: concert, isLoading, error } = useGetConcert(id);

  const [form, setForm] = useState<PaymentForm>({ name: '', email: '', card: '', expiry: '', cvv: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Purchase confirmed for ${concert!.title}!`);
  };

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

        {/* Ticket */}
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
                <span style={styles.metaValueAccent}>${concert.price}</span>
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

        {/* Payment form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <p style={styles.formTitle}>Payment Details</p>

          <div style={styles.formRow}>
            <div style={common.fieldGroup}>
              <label style={common.label}>Full Name</label>
              <input style={common.input} name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
            </div>
            <div style={common.fieldGroup}>
              <label style={common.label}>Email</label>
              <input style={common.input} name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div style={common.fieldGroup}>
            <label style={common.label}>Card Number</label>
            <input style={common.input} name="card" placeholder="1234 5678 9012 3456" maxLength={19} value={form.card} onChange={handleChange} required />
          </div>

          <div style={styles.formRow}>
            <div style={common.fieldGroup}>
              <label style={common.label}>Expiry Date</label>
              <input style={common.input} name="expiry" placeholder="MM / YY" maxLength={7} value={form.expiry} onChange={handleChange} required />
            </div>
            <div style={common.fieldGroup}>
              <label style={common.label}>CVV</label>
              <input style={common.input} name="cvv" placeholder="•••" maxLength={4} value={form.cvv} onChange={handleChange} required />
            </div>
          </div>

          <div style={styles.formFooter}>
            <div style={styles.total}>
              <span style={styles.totalLabel}>Total</span>
              <span style={styles.totalValue}>${concert.price}</span>
            </div>
            <button type="submit" style={styles.buyBtn} className="btn-primary">
              🎟️ Complete Purchase
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
