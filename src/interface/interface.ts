export interface Testimony {
  id: number;
  img: string;
  name: string;
  testimony: string;
}

export interface Categories {
  id: number;
  title: string;
  topics: Array<string>;
}

export interface itemCarousel {
  id: number;
  title: string;
  image: string;
}
export interface Faq {
  id: number;
  question: string;
  answer: string;
  isShow: boolean;
}
export interface Card {
  id: number;
  img: string;
  category: string;
  title: string;
  text: string;
}
