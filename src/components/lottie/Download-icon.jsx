import { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

import InboxDownAnimation from "../lottie/inbox-down/InboxDown.json";
import InboxDownLightAnimation from "../lottie/inbox-down/InboxDownLight.json";

const Download = () => {
  const { isDark } = useTheme();
  const downloadContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadLottie = async () => {
      const lottie = await import("lottie-web");

      if (!downloadContainer.current || !isMounted) return;

      // Destroy previous animation if any
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }

      animationInstance.current = lottie.default.loadAnimation({
        name: "DownloadIcon",
        container: downloadContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: isDark ? InboxDownLightAnimation : InboxDownAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMinYMin slice",
        },
      });
    };

    loadLottie();

    return () => {
      isMounted = false;
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [isDark]);

  const handleHover = () => {
    if (animationInstance.current) {
      animationInstance.current.play();
    }
  };

  const handleLeave = () => {
    if (animationInstance.current) {
      animationInstance.current.stop();
    }
  };

  return (
    <a href="/swastik_pratik_resume.pdf" download className="relative z-10">
      <div
        ref={downloadContainer}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="h-8 w-8 opacity-80 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default Download;
