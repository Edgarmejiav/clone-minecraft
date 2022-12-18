import { useStore } from '../hooks/useStore'
import { Cube } from './Cube'

export const Cubes = () => {
  const [cubes] = useStore(state => [state.cubes])
  return cubes.map(({id,texture,position}) => {
    return (
      <Cube key={id} id={id} texture={texture} position={position}/>
    )
  })
}