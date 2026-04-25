import swapiApp from "../../assets/projects/swapi_app-infinite_scroll-1.png";
import productExplorer from "../../assets/projects/react-product-explorer-2.png";
import facialRetouching from "../../assets/projects/facial_retouching-1.png";
import El_Silencio_de_las_Tortugas from "../../assets/projects/flayer-player-el_silencio_de_la_tortuga-1.jpg";
import InteriorDesign from "../../assets/projects/before_and_after-house-1.png";
import brochureScarecorow from "../../assets/projects/flayer-scarecrow_play-1.png";

export const projects = [
  {
    id: 1,
    title: "Star Wars App",
    description: "Infinite scroll with API integration",
    image: swapiApp,
    demo: "https://star-wars-infinite-scroll-app.vercel.app/",
    github: "https://github.com/DelPieroj10/Star-Wars-Infinite-Scroll-App",
    tags: ["React", "API", "CSS", "Infinity Scroll"],
  },
  {
    id: 2,
    title: "Product Explorer",
    description: "Dynamic filtering + pagination",
    image: productExplorer,
    demo: "https://react-product-explorer.vercel.app/",
    github: "https://github.com/DelPieroj10/React-Product-Explorer",
    tags: ["React", "API", "CSS", "Pagination"],
  },
  {
    id: 3,
    title: "Facial Retouching",
    description: "Retouching with Dodge & Burne and, High Pass technique",
    image: facialRetouching,
    demo: "#",
    github: "https://github.com/DelPieroj10/Photoshop-Projects/blob/main/Retoque%20facial.png",
    tags: ["Graphic Design", "Photoshop", "Photo", "Design"],
  },
  {
    id: 4,
    title: "El Silencio de las Tortugas",
    description: "A brochure about the play",
    image: El_Silencio_de_las_Tortugas,
    demo: "#",
    github: "https://github.com/DelPieroj10/Photoshop-Projects/blob/main/Retoque%20facial.png",
    tags: ["Graphic Design", "Illustrator", "Marketing", "Design"],
  },
  {
    id: 5,
    title: "Espantapájaros",
    description: "A story by Aquiles Nazoa",
    image: brochureScarecorow,
    demo: "#",
    github: "https://github.com/DelPieroj10/Illustrations/blob/main/El%20Espantap%C3%A1jaros%20Broadway%202.jpg",
    tags: ["Graphic Design", "Illustrator", "Marketing", "Design"],
  },
  {
    id: 6,
    title: "Interior Design",
    description: "A before and after of a client´s house",
    image: InteriorDesign,
    demo: "#",
    github: "https://github.com/DelPieroj10/Illustrations/blob/main/ESDLT%20en%20Urban%20Couple.jpg",
    tags: ["Interior Design", "Sustainable Design", "Interior Goals", "Design"],
  },
];
