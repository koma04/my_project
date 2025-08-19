import { useEffect, useMemo, useState } from 'react';
import type { AppState, Filters, Job } from './types';
import { loadState, saveState } from './storage';

export function useAppState() {
  const [state, setState] = useState<AppState>(() => loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  const addJob = (job: Job) => {
    setState((prev) => ({ ...prev, jobs: [job, ...prev.jobs] }));
  };

  const toggleSave = (jobId: string) => {
    setState((prev) => {
      const exists = prev.savedJobIds.includes(jobId);
      return {
        ...prev,
        savedJobIds: exists
          ? prev.savedJobIds.filter((id) => id !== jobId)
          : [jobId, ...prev.savedJobIds],
      };
    });
  };

  const isSaved = (jobId: string) => state.savedJobIds.includes(jobId);

  return { state, addJob, toggleSave, isSaved, setState };
}

export function useFilters() {
  const [filters, setFilters] = useState<Filters>({
    query: '',
    category: '',
    district: '',
    minSalary: '',
  });
  return { filters, setFilters };
}

export function useFilteredJobs(jobs: Job[], filters: Filters) {
  return useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const minSalary = Number(filters.minSalary) || 0;
    return jobs
      .slice()
      .sort((a, b) => Number(!!b.isVip) - Number(!!a.isVip))
      .filter((j) =>
        (!filters.category || j.title.toLowerCase().includes(filters.category.toLowerCase())) &&
        (!filters.district || j.district.toLowerCase().includes(filters.district.toLowerCase())) &&
        (!minSalary || j.salaryAed >= minSalary) &&
        (!query ||
          j.company.toLowerCase().includes(query) ||
          j.title.toLowerCase().includes(query) ||
          j.district.toLowerCase().includes(query))
      );
  }, [jobs, filters]);
}

export function useMotivation() {
  const messages = [
    "Don’t give up, your job is waiting for you in Dubai!",
    'Small steps every day lead to big opportunities.',
    'Keep learning, keep applying, keep moving forward.',
    'Your persistence is your superpower.',
  ];
  const [message, setMessage] = useState('');
  useEffect(() => {
    const idx = Math.floor(Math.random() * messages.length);
    setMessage(messages[idx]);
  }, []);
  return message;
}

