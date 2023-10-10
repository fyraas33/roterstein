



export const pVariants ={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      staggerChildren:0.01,
    }
  },
};



export const spanVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1
  },
};

export const rotVariants = {
  hidden:{
    scale: 0,
  },
  visible:{
     rotate: 360, scale: 1 ,
  
    type: "spring",
    stiffness: 260,
    damping: 20
  },
  };



 export const contVariants= {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
    
  export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }