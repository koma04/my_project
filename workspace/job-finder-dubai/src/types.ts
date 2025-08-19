export type District =
  | 'Deira'
  | 'Burjuman'
  | 'Business Bay'
  | 'Marina'
  | 'JLT'
  | 'JBR'
  | 'Al Barsha'
  | 'Al Qusais'
  | 'Al Nahda';

export type JobCategory =
  | 'Waiter'
  | 'Receptionist'
  | 'Driver'
  | 'Cleaner'
  | 'Delivery'
  | 'Cashier'
  | 'Security'
  | 'Sales'
  | 'Kitchen Helper';

export interface Job {
  id: string;
  company: string;
  title: JobCategory | string;
  district: District | string;
  salaryAed: number;
  postedAt: string; // ISO date
  contact: string; // WhatsApp or email
  isVip?: boolean; // for future monetization
}

export interface Filters {
  query: string;
  category: string; // JobCategory | ''
  district: string; // District | ''
  minSalary: string; // keep as string for controlled input
}

export interface AppState {
  jobs: Job[];
  savedJobIds: string[];
}

