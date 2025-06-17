// src/data/mockData.ts
export const towers = [
  {
    id: 'A',
    name: 'Tower A',
    thumbnail: '/Tower-A.jpg'
  },
  {
    id: 'B',
    name: 'Tower B',
    thumbnail: '/Tower-B.jpg'
  },
  {
    id: 'C',
    name: 'Tower C',
    thumbnail: '/Tower-C.jpg'
  }
];


export const floors = Array.from({ length: 15 }, (_, i) => 15 - i); // Floors 15 to 1

export const layouts = [
  {
    id: "1",
    area: "110 sqm",
    unitType: "2BHK",
    roomCount: 3,
    image: "/Room3.jpg",
  },
  {
    id: "2",
    area: "130 sqm",
    unitType: "3BHK",
    roomCount: 4,
    image: "/Room4.jpg",
  },
  {
    id: "3",
    area: "90 sqm",
    unitType: "1BHK",
    roomCount: 5,
    image: "/Room5.jpg",
  },
];
