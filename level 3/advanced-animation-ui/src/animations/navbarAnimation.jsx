export const fadeDown = {
  hidden: {
    y: -100,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};