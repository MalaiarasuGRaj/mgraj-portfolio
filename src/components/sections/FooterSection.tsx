
import { MotionDiv } from "../animation/MotionDiv";

export const FooterSection = () => {
  return (
    <footer className="py-10 px-5 bg-portfolio-black border-t border-portfolio-purple/20">
      <MotionDiv
        className="text-center text-portfolio-purple-light"
        type="fade"
        direction="up"
      >
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Malaiarasu G Raj
        </p>
        <p className="italic text-sm">
          "Building the future, one line of code at a time."
        </p>
      </MotionDiv>
    </footer>
  );
};
