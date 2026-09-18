
import { MotionDiv } from "../animation/MotionDiv";
import claudeLogo from "@/logo/claude.png";
import microsoftLogo from "@/logo/microsoft.png";
import googleLogo from "@/logo/google.png";
import databricksLogo from "@/logo/databricks.png";

interface Certification {
  name: string;
  credential?: string;
  logoSrc: string;
}

// TODO: add credential titles/years once provided.
const certifications: Certification[] = [
  { name: "Claude", logoSrc: claudeLogo },
  { name: "Microsoft", logoSrc: microsoftLogo },
  { name: "Google", logoSrc: googleLogo },
  { name: "Databricks", logoSrc: databricksLogo },
];

export const CertificationsSection = () => {
  return (
    <div>
      <MotionDiv type="fade" direction="up">
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-6">
          Certified Across the AI Ecosystem
        </p>
      </MotionDiv>
      <div className="flex flex-nowrap items-start justify-center gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-4xl mx-auto px-2">
        {certifications.map((cert, index) => (
          <MotionDiv
            key={cert.name}
            type="fade"
            delay={index * 0.1}
            className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0 transition-all duration-300"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img
                src={cert.logoSrc}
                alt={`${cert.name} certification`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-white text-center whitespace-nowrap">{cert.name}</span>
            {cert.credential && (
              <span className="text-[10px] sm:text-xs text-gray-500 text-center whitespace-nowrap">{cert.credential}</span>
            )}
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};
