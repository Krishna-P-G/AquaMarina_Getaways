import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import landing_animation_1 from "../assets/landing_animation_1.json";
import landing_animation_2 from "../assets/landing_animation_2.json";
import landing_animation_3 from "../assets/landing_animation_3.json";
import landing_animation_4 from "../assets/landing_animation_4.json";
import landing_animation_5 from "../assets/landing_animation_5.json";
import PropTypes from "prop-types";

interface LazyLoadingProps {
  onLoadComplete: () => void;
}

const LazyLoading: React.FC<LazyLoadingProps> = ({ onLoadComplete }) => {
  const lazyRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <Lottie
        // onComplete={() => {
        //   lazyRef.current?.setDirection(-1);
        //   lazyRef.current?.play();
        //   onLoadComplete();
        // }}
        animationData={landing_animation_2}
      />
    </div>
  );
};

LazyLoading.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};

export default LazyLoading;
