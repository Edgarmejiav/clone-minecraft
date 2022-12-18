import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useState } from 'react'
import { useStore } from '../hooks/useStore'

export const Cube = ({ id, position, texture }) => {

  const [ref] = useBox(() => ({
    type: 'Static', position
  }))
  const [removeCube] = useStore(state => [state.removeCube])
  const [isHovered, setIsHovered] = useState(false)
  const activeTexture = textures[texture + 'Texture']
  return (<mesh
    ref={ref}
    onPointerMove={e => {
      e.stopPropagation()
      setIsHovered(true)
    }}
    onPointerOut={e => {
      e.stopPropagation()
      setIsHovered(false)
    }}

    onClick={e => {
      e.stopPropagation()
      if (e.altKey) removeCube(id)
    }}
  >
    <boxBufferGeometry attach="geometry"/>
    <meshStandardMaterial color={isHovered ? 'grey' : 'white'}
                          transparent attach="material" map={activeTexture}/>
  </mesh>)
}