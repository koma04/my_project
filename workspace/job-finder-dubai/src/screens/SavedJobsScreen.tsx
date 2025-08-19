import { Container, Header, JobCard, SectionTitle } from '../components';
import { useAppState } from '../hooks';

export default function SavedJobsScreen() {
  const { state, toggleSave, isSaved } = useAppState();
  const saved = state.jobs.filter((j) => state.savedJobIds.includes(j.id));
  return (
    <div>
      <Header />
      <Container>
        <SectionTitle>Saved Jobs</SectionTitle>
        {saved.length === 0 && <div>No saved jobs yet.</div>}
        {saved.map((j) => (
          <JobCard key={j.id} job={j} onSave={toggleSave} isSaved={isSaved(j.id)} />
        ))}
      </Container>
    </div>
  );
}

