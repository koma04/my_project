import { Link, useParams } from 'react-router-dom';
import { Container, Header, SectionTitle } from '../components';
import { useAppState } from '../hooks';

export default function JobDetailScreen() {
  const { id } = useParams();
  const { state } = useAppState();
  const job = state.jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div>
        <Header />
        <Container>
          <div>Job not found.</div>
          <Link to="/">Back</Link>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container>
        <SectionTitle>{job.title}</SectionTitle>
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
          <div style={{ fontWeight: 600 }}>{job.company}</div>
          <div style={{ marginTop: 8 }}>📍 {job.district}</div>
          <div>💰 AED {job.salaryAed}</div>
          <div>📅 {new Date(job.postedAt).toLocaleDateString()}</div>
          <div style={{ marginTop: 12 }}>
            <a href={`https://${job.contact}`} target="_blank" rel="noreferrer">
              <button style={{ background: '#10b981', border: 'none', color: 'white', padding: '10px 16px', borderRadius: 8 }}>Apply</button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

