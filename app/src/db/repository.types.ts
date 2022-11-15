type Company = {
  id: string;
  name: string;
  created_at: string;
}

export type Repository = {
  getCompanies: () => Promise<Company[]>
}