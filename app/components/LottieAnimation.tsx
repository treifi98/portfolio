// components/LottieAnimation.tsx
import React from 'react';
import Lottie, { LottieComponentProps } from 'lottie-react';

interface LottieAnimationProps extends LottieComponentProps {
  width?: number | string;
  height?: number | string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  width = '100%',
  height = '100%',
  loop = true,
  autoplay = true,
  ...props
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height }}
      {...props}
    />
  );
};

export default React.memo(LottieAnimation);
