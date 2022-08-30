import profile from "../assets/images/faqImg.png";
import photo01 from "../assets/images/photo01.png";
import photo02 from "../assets/images/photo02.png";
import photo03 from "../assets/images/photo03.png";
import photo04 from "../assets/images/photo04.png";
import photo05 from "../assets/images/photo05.png";
import card01 from "../assets/images/card01.png";
import {
  Testimony,
  Categories,
  itemCarousel,
  Faq,
  Card,
} from "../interface/interface";

export const dataTestimony: Testimony[] = [
  {
    id: 1,
    img: profile,
    name: "nombre 1",
    testimony: "Colapso mental: cuando siento el peso del mundo sobre mí",
  },
  {
    id: 2,
    img: profile,
    name: "nombre 2",
    testimony: "Colapso mental: cuando siento el peso del mundo sobre mí",
  },
  {
    id: 3,
    img: profile,
    name: "nombre 3",
    testimony: "Colapso mental: cuando siento el peso del mundo sobre mí",
  },
  {
    id: 4,
    img: profile,
    name: "nombre 4",
    testimony: "Colapso mental: cuando siento el peso del mundo sobre mí",
  },
  {
    id: 5,
    img: profile,
    name: "nombre 5",
    testimony: "Colapso mental: cuando siento el peso del mundo sobre mí",
  },
];

export const dataCategories: Categories[] = [
  {
    id: 1,
    title: "Psicologia",
    topics: [
      "Psicología clínica",
      "Psicología de la personalidad",
      "Psicología del deporte",
      "Psicología educativa y desarrollo",
      "Psicología forense",
    ],
  },
  {
    id: 2,
    title: "Relaciones",
    topics: ["Comunicacion", "Sexo", "Pareja", "Confictos", "Familia"],
  },
  {
    id: 3,
    title: "Relaciones",
    topics: ["Comunicacion", "Sexo", "Pareja", "Confictos", "Familia"],
  },
  {
    id: 4,
    title: "Relaciones",
    topics: ["Comunicacion", "Sexo", "Pareja", "Confictos", "Familia"],
  },
  {
    id: 5,
    title: "Relaciones",
    topics: ["Comunicacion", "Sexo", "Pareja", "Confictos", "Familia"],
  },
  {
    id: 6,
    title: "Relaciones",
    topics: ["Comunicacion", "Sexo", "Pareja", "Confictos", "Familia"],
  },
];

export const dataCarousel: itemCarousel[] = [
  {
    id: 1,
    title: "photo01",
    image: photo01,
  },
  {
    id: 2,
    title: "photo02",
    image: photo02,
  },
  {
    id: 3,
    title: "photo03",
    image: photo03,
  },
  {
    id: 4,
    title: "photo04",
    image: photo04,
  },
  {
    id: 5,
    title: "photo05",
    image: photo05,
  },
];

export const dataFaq: Faq[] = [
  {
    id: 1,
    question: "Colapso mental: cuando siento el peso del mundo sobre mí?",
    answer:
      "A veces nos sentimos como Atras, aquel titán al que Zeus castigó y le obligó a llever el peso del mundo.",
    isShow: false,
  },
  {
    id: 2,
    question: "Colapso mental: cuando siento el peso del mundo sobre mí?",
    answer:
      "A veces nos sentimos como Atras, aquel titán al que Zeus castigó y le obligó a llever el peso del mundo.",
    isShow: false,
  },
  {
    id: 3,
    question: "Colapso mental: cuando siento el peso del mundo sobre mí?",
    answer:
      "A veces nos sentimos como Atras, aquel titán al que Zeus castigó y le obligó a llever el peso del mundo.",
    isShow: false,
  },
  {
    id: 4,
    question: "Colapso mental: cuando siento el peso del mundo sobre mí?",
    answer:
      "A veces nos sentimos como Atras, aquel titán al que Zeus castigó y le obligó a llever el peso del mundo.",
    isShow: false,
  },
  {
    id: 5,
    question: "Colapso mental: cuando siento el peso del mundo sobre mí?",
    answer:
      "A veces nos sentimos como Atras, aquel titán al que Zeus castigó y le obligó a llever el peso del mundo.",
    isShow: false,
  },
];

export const dataCards: Card[] = [
  {
    id: 1,
    img: card01,
    category: "nutrición",
    title: "Colapso mental: cuando siento el peso del mundo sobre mí",
    text: "A veces nos sentimos como Atras, aquel titán al que Zeus castigó y le obligó a llever el peso del mundo.",
  },
  {
    id: 2,
    img: card01,
    category: "maternidad",
    title: "Embarazo seguro: recomendaciones a tener en cuenta",
    text: "A veces nos sentimos como Atras, aquel titán al que Zeus castigó y le obligó a llever el peso del mundo.",
  },
];
