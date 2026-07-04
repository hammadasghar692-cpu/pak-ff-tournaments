export interface Tournament {
  id: string;
  banner: string;
  game: string;
  title: string;
  mode: 'Solo' | 'Duo' | 'Squad';
  entryFee: number;
  prizePool: number;
  date: string;
  time: string;
  joined: number;
  totalSlots: number;
  status: 'Upcoming' | 'Live' | 'Completed';
  category: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  url: string;
}
