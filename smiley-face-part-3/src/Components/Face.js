import BackgroundCircle from './BackgroundCircle'
import Eyes from './Eyes'
import Mouth from './Mouth'
import FaceContainer from './FaceContainer'

function Face({ width, height, centerX, centerY, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthRadius, mouthWidth }) {
  return (
    <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>  
        <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
        <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius} />
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
}

export default Face