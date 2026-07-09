export const fadeUp = {

    hidden:{

        opacity:0,

        y:60

    },

    visible:{

        opacity:1,

        y:0,

        transition:{

            duration:0.8,

            ease:"easeOut"

        }

    }

};

export const fadeLeft={

    hidden:{

        opacity:0,

        x:-80

    },

    visible:{

        opacity:1,

        x:0,

        transition:{

            duration:.8

        }

    }

};

export const fadeRight={

    hidden:{

        opacity:0,

        x:80

    },

    visible:{

        opacity:1,

        x:0,

        transition:{

            duration:.8

        }

    }

};

export const zoomIn={

    hidden:{

        opacity:0,

        scale:.8

    },

    visible:{

        opacity:1,

        scale:1,

        transition:{

            duration:.8

        }

    }

};
export const staggerContainer = {

    hidden:{},

    visible:{

        transition:{

            staggerChildren:0.2

        }

    }

};

export const cardVariant={

    hidden:{

        opacity:0,

        y:60

    },

    visible:{

        opacity:1,

        y:0,

        transition:{

            duration:.7,

            ease:"easeOut"

        }

    }

};