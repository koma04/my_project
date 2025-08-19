import type { AppState, Job } from './types';

const STORAGE_KEY = 'job_finder_dubai_state_v1';

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { jobs: getSeedJobs(), savedJobIds: [] };
    }
    const parsed = JSON.parse(raw) as AppState;
    // ensure jobs exist, if empty seed initial data
    if (!parsed.jobs || parsed.jobs.length === 0) {
      parsed.jobs = getSeedJobs();
    }
    return parsed;
  } catch {
    return { jobs: getSeedJobs(), savedJobIds: [] };
  }
}

export function saveState(state: AppState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getSeedJobs(): Job[] {
  const today = new Date();
  const iso = (d: Date) => d.toISOString();
  return [
    {
      id: 'vip-1',
      company: 'Dubai Dine',
      title: 'Waiter',
      district: 'Business Bay',
      salaryAed: 2800,
      postedAt: iso(new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000)),
      contact: 'wa.me/971500000001',
      isVip: true,
    },
    {
      id: 'std-1',
      company: 'Marina Hotels',
      title: 'Receptionist',
      district: 'Marina',
      salaryAed: 3500,
      postedAt: iso(new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000)),
      contact: 'hr@marinahotels.ae',
    },
    {
      id: 'std-2',
      company: 'Speedy Wheels',
      title: 'Driver',
      district: 'Deira',
      salaryAed: 3000,
      postedAt: iso(new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000)),
      contact: 'wa.me/971500000002',
    },
    {
      id: 'std-3',
      company: 'CleanUp Dubai',
      title: 'Cleaner',
      district: 'Al Barsha',
      salaryAed: 2500,
      postedAt: iso(new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000)),
      contact: 'apply@cleanup.ae',
    },
  ];
}

