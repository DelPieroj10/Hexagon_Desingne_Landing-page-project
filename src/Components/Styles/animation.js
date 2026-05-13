
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40 - 60,
  },

  show: {
    opacity: 1,
    y: 0,
    
    transition: {
      duration: 0.6 - 0.9,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15 - 0.2,
      ease: "easeOut",
    },
  },
};
