import { Link } from 'react-router-dom';
import { Container } from '../components';

export default function WelcomeScreen() {
  return (
    <Container>
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh', textAlign: 'center' }}>
        <div>
          <h1>Job Finder Dubai</h1>
          <p style={{ color: '#555' }}>Find entry-level jobs fast. Choose your language to continue.</p>
          <div style={{ marginTop: 16 }}>
            <Link to="/jobs">
              <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 16px', borderRadius: 8 }}>English</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

