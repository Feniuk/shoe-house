import mongoose from "mongoose";
import dotenv from "dotenv";
import connectToDB from "./database/db.js";
import Shoe from "./models/shoe.js";

dotenv.config();
await connectToDB();

const product_list = [
  {
    image: "/frontend/images/stone-shoes.jpg",
    title: "Stone Island X New Balance",
    price: "400.00",
    description:
      "The 574 sneakers returns in a fully monochromatic suede construction inspired by the ethos of Stone Island Ghost. This release revisits one of New Balance’s most enduring models through a partnership rooted in material research and forward-thinking design",
  },
  {
    image: "/frontend/images/barefoot.jpg",
    title: "Vibram FiveFingers",
    price: "149.99",
    description:
      "Vibram FiveFingers are minimalist shoes with five toes that are lightweight and breathable and feature a durable rubber sole that utilizes several Vibram technologies",
  },
  {
    image: "/frontend/images/on-cloud.avif",
    title: "On Cloud 6",
    price: "160.00",
    description:
      "The Cloud 6 trainers from On offer you unrivalled levels of comfort and cushioning thanks to their innovative CloudTec midsole. This technology, developed by On in Switzerland, ensures soft landings and powerful push-offs by absorbing shocks and reducing stress.",
  },
  {
    image: "/frontend/images/onitsuka.webp",
    title: "Onitsuka Mexico 66",
    price: "120.00",
    description:
      "The MEXICO 66, crafted in jacquard mesh shoe seamlessly combines the charm of pumps and sneakers. Design A slip-on style with straps that features a slim, elegant silhouette and flower-cut Onitsuka Tiger Stripes.",
  },
  {
    image: "/frontend/images/puma.avif",
    title: "Puma X Fast & Furious",
    price: "129.99",
    description:
      "Hit the court like it’s the streets of LA. MB.05, Melo’s latest signature shoe, gets a Fast & Furious redesign inspired by the film franchise’s home turf. With flame-like graphics, high-voltage colors, and Melo details hidden throughout the design, this pair brings street-racing energy to your game",
  },
  {
    image: "/frontend/images/cp-shoes2.avif",
    title: "C.P. Company X Asics",
    price: "200.00",
    description:
      "C.P. Company leans into the Urban Agility concept from The Metropolis Series, using natural shapes and intertwined structures as creative influences. A redesigned mesh upper features 5D print details and TRUSSTIC™ technology for enhanced stability.",
  },
  {
    image: "/frontend/images/jordane.avif",
    title: "Jordan 1",
    price: "95.00",
    description:
      "‘The Air Jordan 1 is one of the most iconic and influential sneakers ever released, as well as being one of the most storied,’ says Zack Schlemmer, a curator behind luxury sneaker marketplace, Stadium Goods. ‘In hindsight, Nike took a huge leap of faith in creating a signature shoe for an — at the time — unproven rookie before he’d ever even played in an NBA game.",
  },
  {
    image: "/frontend/images/salomon2.webp",
    title: "Salomon",
    price: "129.00",
    description:
      "The XT-4 OG has been resurrected from the archives to bring new energy to the city streets. With vintage style, proven comfort, stability, and refreshing colors, the XT-4 OG celebrates the rebirth of a legend. This timeless model shapes culture today, just as it always has, through style, authenticity, and the expression of personality.",
  },
  {
    image: "/frontend/images/birkenstock.avif",
    title: "Birkenstock Boston",
    price: "160.00",
    description:
      "Slip it on for instant well-being and snugness! The BIRKENSTOCK Zermatt is our first slipper with a removable footbed, allowing you to choose between two different insoles. The classic is now available in a particularly cozy premium design. Its natural design is down to the upper made from especially soft suede, which hugs the foot like a second skin",
  },
  {
    image: "/frontend/images/air-force1.avif",
    title: "Nike Air Force 1",
    price: "119.99",
    description:
      "Air Force 1 shoes, the AF1, are still used for street play as well as for professional play. NBA players Jerry Stackhouse and Rasheed Wallace wore AF1s on the court. The shoe is also used for fashion and casual wear.",
  },
  {
    image: "/frontend/images/nocta2.jpg",
    title: "Nike X Nocta",
    price: "170.00",
    description:
      "When Drake and Nike collaborate, nothing ordinary comes out. NOCTA stands for clean design, performance vibes, and limited-edition pieces. It's doubly worth being quick.",
  },
  {
    image: "/frontend/images/air-max.webp",
    title: "Nike Air Max",
    price: "119.99",
    description:
      "Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled with pressurized gas, visible from the exterior of the shoe and intended to provide cushioning to the underfoot. Air Max was conceptualized by Tinker Hatfield, who initially worked for Nike designing stores.",
  },
];

const importData = async () => {
  try {
    await Shoe.deleteMany();
    await Shoe.insertMany(product_list);

    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
