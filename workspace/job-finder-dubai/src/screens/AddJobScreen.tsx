import { useState } from 'react';
import { Container, Header, Input, Label, Row, SectionTitle, Select } from '../components';
import { useAppState } from '../hooks';
import type { Job } from '../types';
import { Link, useNavigate } from 'react-router-dom';

export default function AddJobScreen() {
  const { addJob } = useAppState();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: '',
    title: '',
    district: '',
    salaryAed: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.title || !form.district || !form.salaryAed || !form.contact) return;
    const job: Job = {
      id: String(Date.now()),
      company: form.company,
      title: form.title,
      district: form.district,
      salaryAed: Number(form.salaryAed),
      contact: form.contact,
      postedAt: new Date().toISOString(),
    };
    addJob(job);
    navigate('/jobs');
  };

  const setField = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const districts = ['Deira', 'Burjuman', 'Business Bay', 'Marina', 'JLT', 'JBR', 'Al Barsha', 'Al Qusais', 'Al Nahda'];
  const categories = ['Waiter', 'Receptionist', 'Driver', 'Cleaner', 'Delivery', 'Cashier', 'Security', 'Sales', 'Kitchen Helper'];

  return (
    <div>
      <Header />
      <Container>
        <SectionTitle>Add Job</SectionTitle>
        <form onSubmit={handleSubmit}>
          <Row gap={16} wrap>
            <div style={{ minWidth: 260 }}>
              <Label>Company</Label>
              <Input value={form.company} onChange={(e) => setField('company', e.target.value)} placeholder="Company name" />
            </div>
            <div style={{ minWidth: 220 }}>
              <Label>Position</Label>
              <Select value={form.title} onChange={(e) => setField('title', e.target.value)}>
                <option value="">Select</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </div>
            <div style={{ minWidth: 200 }}>
              <Label>District</Label>
              <Select value={form.district} onChange={(e) => setField('district', e.target.value)}>
                <option value="">Select</option>
                {districts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </Select>
            </div>
            <div style={{ minWidth: 160 }}>
              <Label>Salary (AED)</Label>
              <Input type="number" value={form.salaryAed} onChange={(e) => setField('salaryAed', e.target.value)} placeholder="0" />
            </div>
            <div style={{ minWidth: 260 }}>
              <Label>Contact (WhatsApp/email)</Label>
              <Input value={form.contact} onChange={(e) => setField('contact', e.target.value)} placeholder="wa.me/9715xxxxxxx or email" />
            </div>
          </Row>
          <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
            <button type="submit" style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 16px', borderRadius: 8 }}>Publish</button>
            <Link to="/jobs">Cancel</Link>
          </div>
        </form>
      </Container>
    </div>
  );
}

