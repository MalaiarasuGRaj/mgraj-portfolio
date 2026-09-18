import { motion } from "framer-motion";

export const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-portfolio-black">
            {/* Top Left Blob */}
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-portfolio-purple/10 rounded-full blur-[60px] md:blur-[100px] will-change-transform"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Bottom Right Blob */}
            <motion.div
                className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-portfolio-purple/10 rounded-full blur-[60px] md:blur-[100px] will-change-transform"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};
