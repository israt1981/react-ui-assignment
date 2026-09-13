export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  experienceLevel: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  rating: number;
  badge?: string;
  officialDocs?: string;
}
