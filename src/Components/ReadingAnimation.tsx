import Lottie from "react-lottie";
import ReadingAnimation from "../assets/lotties/readingAnimation/Fudicia(Transparent).json";

const ReadingAnimationLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ReadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width="400px" height="400px" />;
};

export default ReadingAnimationLottie;
