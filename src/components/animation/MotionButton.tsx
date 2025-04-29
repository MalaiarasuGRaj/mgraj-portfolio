
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";

interface MotionButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const MotionButton = ({
  children,
  className,
  ...props
}: MotionButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
};
