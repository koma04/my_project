import { Link } from 'react-router-dom';
import { Container, Header, Input, JobCard, Label, Row, SectionTitle, Select } from '../components';
import { useAppState, useFilters, useFilteredJobs, useMotivation } from '../hooks';
import type { Job } from '../types';

export default function JobListScreen() {
  const { state, toggleSave, isSaved } = useAppState();
  const { filters, setFilters } = useFilters();
  const motivation = useMotivation();

  const jobs = useFilteredJobs(state.jobs, filters);

  const categories = Array.from(new Set(state.jobs.map((j) => j.title)));
  const districts = Array.from(new Set(state.jobs.map((j) => j.district)));

  return (
    <div>
      <Header />
      <Container>
        <div style={{ padding: '8px 12px', background: '#eefcf6', border: '1px solid #d0f0e0', borderRadius: 8, marginTop: 12 }}>{motivation}</div>
        <SectionTitle>Jobs</SectionTitle>
        <Row gap={12} wrap>
          <div>
            <Label>Search</Label>
            <Input placeholder="Search by keyword" value={filters.query} onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))} />
          </div>
          <div>
            <Label>Category</Label>
            <Select value={filters.category} onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}>
              <option value="">All</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label>District</Label>
            <Select value={filters.district} onChange={(e) => setFilters((f) => ({ ...f, district: e.target.value }))}>
              <option value="">All</option>
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label>Min Salary (AED)</Label>
            <Input type="number" placeholder="0" value={filters.minSalary} onChange={(e) => setFilters((f) => ({ ...f, minSalary: e.target.value }))} />
          </div>
          <div style={{ alignSelf: 'end' }}>
            <Link to="/add" style={{ textDecoration: 'none' }}>
              <button style={{ background: '#0a84ff', color: 'white', border: 'none', padding: '10px 16px', borderRadius: 8 }}>+ Post a Job</button>
            </Link>
          </div>
        </Row>

        <div style={{ marginTop: 16 }}>
          {jobs.length === 0 && <div>No jobs found. Try different filters.</div>}
          {jobs.map((job: Job) => (
            <JobCard key={job.id} job={job} onSave={toggleSave} isSaved={isSaved(job.id)} />
          ))}
        </div>
      </Container>
    </div>
  );
}

