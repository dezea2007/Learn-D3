import './App.css';
import Face from './Components/Face'

const width = 320
const height = 320

var array = []

for (var i = 0; i < 8; i++) {
  array.push(i)
}

function App() {
  return (
    array.map(() => (
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={12 + Math.random() * 6}
        eyeOffsetX={40 + Math.random() * 18}
        eyeOffsetY={40 + Math.random() * 30}
        eyeRadius={10 + Math.random() * 20}
        mouthWidth={14 + Math.random() * 18}
        mouthRadius={60 + Math.random() * 20}
      />
    ))
  )
}

export default App;
