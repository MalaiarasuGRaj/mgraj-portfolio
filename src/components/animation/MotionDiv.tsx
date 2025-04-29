
import { motion } from "framer-motion";

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "fade" | "slide" | "scale" | "none";
}

export const MotionDiv = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  type = "fade",
}: MotionDivProps) => {
  const getAnimation = () => {
    const animations = {
      fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      },
      none: {
        hidden: {},
        visible: {},
      },
    };

    const directionOffset = {
      up: { y: 40 },
      down: { y: -40 },
      left: { x: 40 },
      right: { x: -40 },
    };

    const baseAnimation = animations[type];
    
    // Add direction based offset to hidden state if type is not 'none'
    if (type !== "none" && direction) {
      return {
        hidden: { ...baseAnimation.hidden, ...directionOffset[direction] },
        visible: { ...baseAnimation.visible, y: 0, x: 0 },
      };
    }

    return baseAnimation;
  };

  const animation = getAnimation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};
