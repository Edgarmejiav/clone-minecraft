import { useStore } from '../hooks/useStore'
import { useKeyboard } from '../hooks/useKeyboard'
import { useEffect, useState } from 'react'
import * as images from '../images/images.js'

export const TextureSelector = () => {

  const [visible, setVisible] = useState(false)
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

  const {
    dirt, grass, glass, wood, log
  } = useKeyboard()

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 1000)

    setVisible(true)

    return () => {
      clearTimeout(visibilityTimeout)
    }
  }, [texture])


  useEffect(() => {
    const options = {
      dirt, grass, glass, wood, log
    }
    const selectedTexture = Object
      .entries(options)
      .find(([texture, isEnabled]) => isEnabled)

    console.log(selectedTexture)
    if (selectedTexture) {
      const [textureName] = selectedTexture
      setTexture(textureName)
    }
  }, [dirt, grass, glass, wood, log])

  //comillar inveridas


  return (
    <div className={`texture-selector ${visible ? '': "hidden"}`}>
      {
        Object
          .entries(images)
          .map(([imgKey, img]) => {
            return (
              <img
                className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                key={imgKey}
                src={img}
                alt={imgKey}
              />
            )
          })
      }
    </div>
  )
}