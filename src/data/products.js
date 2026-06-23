const products = [
 {
  id: 1,
  name: "Geometric signet ring YG",
  price: 800,
  requiresSize: true,
  category: "signet-rings",
  image: "/images/geometric signet ringYG.jpeg",
  description: `Unique 14K Gold Signet Ring for Women.
Thin, modern, geometric, and beautifully unconventional.

This handmade signet ring is shaped like a tiny modern sculpture — delicate, architectural, and full of character. At first glance, its form feels unexpected: not perfectly round, not completely straight, and not quite like any traditional ring. But once you wear it, the shape makes perfect sense. It sits beautifully on the finger and has a natural, effortless presence that makes it hard to take off.

This ring is especially loved by women who usually feel that classic rings do not suit their hands. Its soft geometric shape is flattering, modern, and quietly bold — a unique choice for everyday wear, a meaningful gift, or an alternative wedding ring.

The design is inspired by the beauty of imperfection. None of us are perfectly symmetrical. No line is completely straight, and no circle is truly perfect. This ring celebrates that idea — the relationship between lines, curves, and forms, and the beauty that appears when everything is allowed to be exactly as it is.

The ring is usually finished with a delicate matte texture. If you prefer a shiny polished finish, please leave a note when ordering.

Measurements:
Max width: 3 mm
Max height from finger: 3 mm

Product Details:
• One solid gold signet ring
• Suitable as an alternative wedding band
• 100% handmade
• Made with care and attention to detail
• Arrives beautifully wrapped in a jewelry box, ready to give as a gift

Size:
Available in US sizes 4–10.
Whole, half, and quarter sizes are available.
Please select your ring size from the dropdown menu when ordering.
For sizes outside the listed range, please contact me before placing your order.

Material & Color:
Available in:
• 14K yellow gold, rose gold, or white gold

Please select your preferred gold color when ordering.

Shipping:
DHL Express shipping is available.

Please note: buyers may be responsible for import taxes, customs fees, VAT, handling fees, or other local charges. Please check your country’s regulations before ordering.`,
},
  {
    id: 2,
    name: "Geometric drop ring YG",
    price: 800,
    requiresSize: true,
     category: "wedding-rings",
    image: "/images/thin geometric drop ringYG.jpeg",
    description: "Unique geometric drop ring for men & woman.",
  },
  {
    id: 3,
    name: "Thin square ring YG",
    price: 800,
    requiresSize: true,
     category: "wedding-rings",
    image: "/images/thin square ringYG.jpeg",
    description: "Unique geometric square ring for men & woman.",
  },
  {
    id: 4,
    name: "Geometric drop ring with diamonds YG",
    price: 800,
    requiresSize: true,
     category: "engagement-rings",
    image: "/images/thin drop ring with diamondsYG.jpeg",
    description: "Unique geometric drop ring set with white diamonds.",
  },
  {
    id: 5,
    name: "Delicate lace ring YG",
    price: 800,
    requiresSize: true,
     category: "wedding-rings",
    image: "/images/delicate lace ringYG.jpeg",
    description: "Delicate lace ring for women.",
  },
  {
    id: 6,
    name: "Dainty floral wedding ring YG",
    price: 800,
    requiresSize: true,
     category: "wedding-rings",
    image: "/images/dainty floral wedding ringYG.jpeg",
    description: "Dainty floral wedding ring for women.",
  },
  {
    id: 7,
    name: "Dainty arcs wedding ring YG",
    price: 800,
    requiresSize: true,
     category: "wedding-rings",
    image: "/images/thin arcs ringYG.jpeg",
    description: "Dainty arcs wedding ring for women.",
  },
  {
    id: 8,
    name: "Dainty drops ring YG",
    price: 800,
    requiresSize: true,
     category: "wedding-rings",
    image: "/images/dainty drops ringYG.jpeg",
    description: "Dainty gold wedding ring for women.",
  },
   {
    id: 9,
    name: "Crown necklace YG",
    price: 800,
     requiresSize: false,
     category: "necklaces",
    image: "/images/CrownNecklace.JPG",
    description: "Dainty crown necklace for women.",
  },
  {
   id: 10,
    name: "Drop earrings YG",
    price: 800,
     requiresSize: false,
     category: "earrings",
    image: "/images/Henna Drop Earrings.JPG",
    description: "Dainty drop earrings for women.",
  },
   {
   id: 11,
    name: "Heart earrings YG",
    price: 800,
     requiresSize: false,
     category: "earrings",
    image: "/images/SpikedHeartsStuds.JPG",
    description: "Spiky hearts stud earrings for women.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p)=>p.id===Number(id));
}
