import './App.css'
import Description from './Description'
import DogImage from './DogImage'
import { useState } from 'react'
import Header from './Header'

export const App = () => {
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

  return (
    <>
      <Header />
      <Description fetchRandomDogImage={fetchRandomDogImage} />
      <DogImage url={dogUrl} />
    </>
  )
}

export default App;