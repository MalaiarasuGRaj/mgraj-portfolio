import { motion } from "framer-motion";

export const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-portfolio-black">
            {/* Top Left Blob */}
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-portfolio-purple/20 rounded-full blur-[60px] md:blur-[100px] will-change-transform"
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

            {/* Top Right Blob - Hidden on Mobile */}
            <motion.div
                className="absolute top-[0%] right-[0%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] hidden md:block will-change-transform"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Bottom Left Blob - Hidden on Mobile */}
            <motion.div
                className="absolute bottom-[0%] -left-[10%] w-[40%] h-[40%] bg-portfolio-purple-light/20 rounded-full blur-[100px] hidden md:block will-change-transform"
                animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Bottom Right Blob */}
            <motion.div
                className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[60px] md:blur-[100px] will-change-transform"
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
