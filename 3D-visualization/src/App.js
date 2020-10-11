import React from 'react';
import { useParams } from 'react-router-dom'

function App() {
  const { product } = useParams()
  let image = require(`./3Dimages/${product}.glb`)

  return (
      <model-viewer src={image} alt="product" auto-rotate="" camera-controls="" background-color="#455A64"></model-viewer>
  )
}
export default App;
