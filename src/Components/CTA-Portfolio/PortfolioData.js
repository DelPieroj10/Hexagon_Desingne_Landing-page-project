import swapiApp from "../../assets/projects/swapi_app-infinite_scroll.png";
import productExplorer from "../../assets/projects/react-product-explorer-2.png";
import facialRetouching from "../../assets/projects/facial_retouch-1.png";
import El_Silencio_de_las_Tortugas from "../../assets/projects/flayer-player-el_silencio_de_la_tortuga-1.jpg";
import brochureScarecorow from "../../assets/projects/flayer-scarecrow_brouchure-play.png";
import KattiesApp from "../../assets/projects/katties_app_calling-2api.png";

export const projects = [
  {
    id: 1,
    featured: true,
    title: "StarWars Explorer — Infinite Scroll & API Integration",
    description: "A dynamic application that allows users to explore Star Wars characters with seamless infinite scrolling and real-time data fetching.",
    process: [
      "Implemented infinite scroll for smooth data loading",
      "Integrated multiple API endpoints (characters + planets)",
      "Managed asynchronous state and data flow",
      "Optimized rendering for better performance"
    ],
    image: swapiApp,
    demo: "https://star-wars-infinite-scroll-app.vercel.app/",
    github: "https://github.com/DelPieroj10/Star-Wars-Infinite-Scroll-App",
    tags: ["React", "SWAPI", "CSS", "JavaScript", "Infinity Scroll"],
  },
  {
    id: 2,
    title: "Shopping Cart — State Management & User Interaction",
    description: "An interactive shopping cart application focused on managing global state and improving user experience.",
    process: [
      "Managed global state using Context API",
      "Implemented dynamic product updates",
      "Handled user interactions and UI feedback",
      "Structured reusable components"
    ],
    image: productExplorer,
    demo: "https://react-product-explorer.vercel.app/",
    github: "https://github.com/DelPieroj10/React-Product-Explorer",
    tags: ["React", "API", "CSS", "Pagination"],
  },
  {
    id: 3,
    title: "Facial Retouching",
    description: "Retouching with Dodge & Burne and, High Pass technique",
    process: [
      "Applied Dodge & Burn technique for skin smoothing, enhancing facial features, lighting and shadows.",
      "Used High Pass filter through layers to enhance details like acne scars.",
    ],
    image: facialRetouching,
    demo: "#",
    github: "https://github.com/DelPieroj10/Photoshop-Projects/blob/main/Retoque%20facial.png",
    tags: ["Graphic Design", "Photoshop", "Photo", "Design"],
  },
  {
    id: 4,
    title: "El Silencio de las Tortugas",
    description: "A brochure about the play “El Silencio de las Tortugas” by Lucia Laragione, performed at Teatro Teresa Carreño in Caracas, Venezuela.",
    process: [
      "Designed a visually appealing brochure layout",
      "Incorporated thematic elements related to the play",
      "Custom lines and shadows are used to create a dramatic and deep perspective.",
      "Used a limited color palette to enhance visual impact" 
    ],
    image: El_Silencio_de_las_Tortugas,
    demo: "#",
    github: "https://github.com/DelPieroj10/Photoshop-Projects/blob/main/Retoque%20facial.png",
    tags: ["Graphic Design", "Illustrator", "Marketing", "Design"],
  },
  {
    id: 5,
    title: "Espantapájaros",
    description: "A story by Aquiles Nazoa",
    process: [
      "Designed a visually appealing brochure layout",
      "Incorporated thematic elements related to the story",
      "Lines drawn creating a custom brush.",
      "Used a limited color palette to enhance visual impact"
    ],
    image: brochureScarecorow,
    demo: "#",
    github: "https://github.com/DelPieroj10/Illustrations/blob/main/El%20Espantap%C3%A1jaros%20Broadway%202.jpg",
    tags: ["Graphic Design", "Illustrator", "Marketing", "Design"],
  },
  {
    id: 6,
    title: "Kitties infinite scroll app calling 2 APIs",
    description: "React app that consumes two public APIs to display images of cats accompanied by descriptive text, implementing infinite scroll using Intersection Observer.",
    process: [
      "Integrated two public APIs for cat images and descriptions",
      "Implemented infinite scroll using Intersection Observer",
      "Managed asynchronous data fetching and state updates",
      "Logic separation using custom hooks and reusable components"
    ],
    image: KattiesApp,
    demo: "#",
    github: "https://github.com/DelPieroj10/-Kitties-Infinite-Scroll-App-calling-2-APIs.git",
    tags: ["React", "API", "Infinity Scroll"],
  },
];
