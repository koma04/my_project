import { Link } from 'react-router-dom';
import type { Job } from './types';

export function Header() {
  return (
    <header style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #eaeaea' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#0b5' }}>Job Finder Dubai</Link>
      <nav style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>Jobs</Link>
        <Link to="/saved" style={{ textDecoration: 'none' }}>Saved</Link>
        <Link to="/add" style={{ textDecoration: 'none' }}>Add Job</Link>
      </nav>
    </header>
  );
}

export function Container(props: { children: React.ReactNode }) {
  return <div style={{ maxWidth: 920, margin: '0 auto', padding: 16 }}>{props.children}</div>;
}

export function SectionTitle(props: { children: React.ReactNode }) {
  return <h2 style={{ margin: '16px 0' }}>{props.children}</h2>;
}

export function JobCard(props: { job: Job; onSave?: (id: string) => void; isSaved?: boolean }) {
  const { job, onSave, isSaved } = props;
  return (
    <div style={{ border: '1px solid #eaeaea', borderRadius: 8, padding: 12, marginBottom: 12, background: job.isVip ? '#e6f7ff' : '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 600 }}>{job.company}</div>
          <div style={{ color: '#333' }}>{job.title}</div>
        </div>
        <button onClick={() => onSave?.(job.id)} style={{ border: '1px solid #ccc', borderRadius: 6, padding: '6px 10px', background: isSaved ? '#ffd700' : '#f7f7f7' }}>
          {isSaved ? '★ Saved' : '☆ Save'}
        </button>
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 8, color: '#444', flexWrap: 'wrap' }}>
        <span>📍 {job.district}</span>
        <span>💰 AED {job.salaryAed}</span>
        <span>📅 {new Date(job.postedAt).toLocaleDateString()}</span>
      </div>
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <Link to={`/job/${job.id}`} style={{ textDecoration: 'none' }}>
          <button style={{ background: '#0a84ff', border: 'none', color: 'white', padding: '8px 12px', borderRadius: 6 }}>Details</button>
        </Link>
        <a href={`https://${job.contact}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{ background: '#10b981', border: 'none', color: 'white', padding: '8px 12px', borderRadius: 6 }}>Apply</button>
        </a>
      </div>
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ ...props.style, padding: '8px 10px', border: '1px solid #ddd', borderRadius: 6 }} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} style={{ ...props.style, padding: '8px 10px', border: '1px solid #ddd', borderRadius: 6 }} />;
}

export function Row(props: { children: React.ReactNode; gap?: number; wrap?: boolean }) {
  return <div style={{ display: 'flex', gap: props.gap ?? 8, flexWrap: props.wrap ? 'wrap' : 'nowrap' }}>{props.children}</div>;
}

export function Label(props: { children: React.ReactNode }) {
  return <label style={{ fontSize: 12, color: '#555' }}>{props.children}</label>;
}

