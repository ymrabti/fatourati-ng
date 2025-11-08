export interface Service {
  id: number;
  name: string;
  category: string;
  region: string;
  logo: string;
  url: string;
  description: string;
  branches?: ServiceBranch[];
}

export interface ServiceBranch {
  name: string;
  url: string;
}