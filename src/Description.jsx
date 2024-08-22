// @ts-check

import { useState } from 'react'
import DogImage from './DogImage'

const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/affenpinscher/n02110627_8099.jpg")

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await response.json()
      setDogUrl(data.message)
    } catch (error) {
      console.error("Error fetching dog image:", error)
    }
  }

  const handleButtonClick = () => {
    fetchRandomDogImage()
  }

  return (
    <>
      <div>犬の画像を表示するサイトです</div>
      <DogImage url={dogUrl} />
      <button onClick={handleButtonClick} className="update-button">更新</button>
    </>
  )
}

export default Description