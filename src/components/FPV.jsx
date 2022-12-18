import { useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'

export  function  FPV () {
  const {camera,gl} = useThree()

  return(
    <PointerLockControls
      args={[camera, gl.domElement]}
      />
  )

}