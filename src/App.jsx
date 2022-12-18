import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'

function App () {

  return (<>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}/>
        <ambientLight intensity={0.5}/>
        <FPV/>

        <Physics>
          <Cubes/>
          <Ground/>
          <Player/>
        </Physics>
      </Canvas>      <TextureSelector />
      <div className="pointer">+</div>
    </>)
}

export default App
