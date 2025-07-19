import { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import EyeAnimation from "../lottie/eye/Eye.json";
import EyeLightAnimation from "../lottie/eye/EyeLight.json";

const SendIcon = () => {
  const { isDark } = useTheme();
  const sendIconContainer = useRef(null);

  // Load the Lottie animation dynamically
  const getLottie = async () => {
    const lottie = await import("lottie-web");

    if (!sendIconContainer.current) return;

    lottie.default.loadAnimation({
      name: "SendIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isDark ? EyeAnimation : EyeLightAnimation,
      container: sendIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  };

  // Cleanup the Lottie animation
  const destroyLottie = async () => {
    const lottie = await import("lottie-web");
    lottie.default.destroy("SendIcon");
  };

  // Initialize or update the animation on theme change
  useEffect(() => {
    getLottie();
    return () => {
      destroyLottie();
    };
  }, [isDark]);

  // Hover animation handlers
  const lottieHover = async () => {
    const lottie = await import("lottie-web");
    lottie.default.play("SendIcon");
  };

  const lottieLeave = async () => {
    const lottie = await import("lottie-web");
    lottie.default.stop("SendIcon");
  };

  return (
    <a
      href="/swastik_pratik_resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="relative z-10"
    >
      <div
        ref={sendIconContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className="h-8 w-8 opacity-80 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default SendIcon;
