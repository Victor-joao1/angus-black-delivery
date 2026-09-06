export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "hamburgueres" | "combos" | "acompanhamentos" | "bebidas";
  tag?: string;
  image?: string;
};

export const products: Product[] = [
  // Hambúrgueres
  {
    id: "black-cheese",
    name: "Black Cheese",
    description:
      "Pão brioche, blend Angus 160g, duas fatias de queijo e molho Angus Black Especial.",
    price: 27.9,
    category: "hamburgueres",
    tag: "Mais Pedido",
    image: "/products/black-cheese.png",
  },
  {
    id: "angus-classic",
    name: "Angus Classic",
    description:
      "Pão brioche, blend Angus 160g, queijo duplo, cebola roxa, tomate, alface fresca e molho Angus Black Especial.",
    price: 31.9,
    category: "hamburgueres",
    image: "/products/angus-classic.png",
  },
  {
    id: "brasa-prime",
    name: "Brasa Prime",
    description:
      "Pão brioche, blend Angus 160g, queijo duplo, bacon crocante, cebola caramelizada e molho Angus Black Especial.",
    price: 35.9,
    category: "hamburgueres",
    image: "/products/brasa-prime.png",
  },
  {
    id: "black-bacon",
    name: "Black Bacon",
    description:
      "Pão brioche, blend Angus 160g, queijo duplo, bacon em tiras, alface e molho Angus Black Especial.",
    price: 33.9,
    category: "hamburgueres",
    image: "/products/black-bacon.png",
  },
  {
    id: "angus-bbq",
    name: "Angus BBQ",
    description:
      "Pão brioche, 2 blends Angus 160g, 4 fatias de queijo, anéis de cebola crocantes e barbecue defumado.",
    price: 45.9,
    category: "hamburgueres",
    image: "/products/angus-bbq.png",
  },
  {
    id: "big-bull",
    name: "Big Bull",
    description:
      "Pão brioche, 3 blends Angus 160g, cheddar cremoso, farofa de bacon, barbecue e molho Angus Black Especial.",
    price: 52.9,
    category: "hamburgueres",
    tag: "Exclusivo",
    image: "/products/big-bull.png",
  },

  // Combos Solo (Hambúrguer + Batata frita + Refrigerante lata 350ml)
  {
    id: "combo-black-cheese",
    name: "Combo Black Cheese",
    description: "Black Cheese + batata frita + refrigerante lata 350ml.",
    price: 39.9,
    category: "combos",
    image: "/products/black-cheese.png",
  },
  {
    id: "combo-angus-classic",
    name: "Combo Angus Classic",
    description: "Angus Classic + batata frita + refrigerante lata 350ml.",
    price: 43.9,
    category: "combos",
    image: "/products/angus-classic.png",
  },
  {
    id: "combo-brasa-prime",
    name: "Combo Brasa Prime",
    description: "Brasa Prime + batata frita + refrigerante lata 350ml.",
    price: 47.9,
    category: "combos",
    image: "/products/brasa-prime.png",
  },
  {
    id: "combo-black-bacon",
    name: "Combo Black Bacon",
    description: "Black Bacon + batata frita + refrigerante lata 350ml.",
    price: 45.9,
    category: "combos",
    image: "/products/black-bacon.png",
  },
  {
    id: "combo-angus-bbq",
    name: "Combo Angus BBQ",
    description: "Angus BBQ + batata frita + refrigerante lata 350ml.",
    price: 56.9,
    category: "combos",
    image: "/products/angus-bbq.png",
  },
  {
    id: "combo-big-bull",
    name: "Combo Big Bull",
    description: "Big Bull + batata frita + refrigerante lata 350ml.",
    price: 63.9,
    category: "combos",
    image: "/products/big-bull.png",
  },

  // Acompanhamentos
  {
    id: "fritas-da-casa",
    name: "Fritas da Casa (P)",
    description: "Batata frita crocante.",
    price: 9.9,
    category: "acompanhamentos",
  },
  {
    id: "angus-fries",
    name: "Angus Fries (M)",
    description: "Batata + catupiry + bacon em cubos.",
    price: 26.9,
    category: "acompanhamentos",
  },
  {
    id: "argolas-da-brasa",
    name: "Argolas da Brasa",
    description: "06 unidades de onion rings crocantes.",
    price: 19.9,
    category: "acompanhamentos",
  },

  // Bebidas
  {
    id: "coca-zero",
    name: "Coca-Cola Zero",
    description: "Lata 350ml.",
    price: 8.0,
    category: "bebidas",
  },
  {
    id: "guarana",
    name: "Guaraná Antarctica",
    description: "Lata 350ml.",
    price: 8.0,
    category: "bebidas",
  },
];

export const categories: { id: Product["category"]; label: string }[] = [
  { id: "hamburgueres", label: "Hambúrgueres" },
  { id: "combos", label: "Combos Solo" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
  { id: "bebidas", label: "Bebidas" },
];

export const storeInfo = {
  name: "Angus Black",
  tagline: "Hamburgueria Artesanal",
  slogan: "Fogo. Sabor. Excelência em cada detalhe.",
  address: "Jaconé, Saquarema - RJ",
  whatsapp: "5522999079734",
  whatsappDisplay: "(22) 99907-9734",
  minOrder: 20,
  openingNote: "Aberto domingo a partir das 18h",
};
