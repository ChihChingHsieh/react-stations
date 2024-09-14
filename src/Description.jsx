import { useState } from 'react'
import { DogImage } from './DogImage.jsx'

export function Description() {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/shiba/shiba-18.jpg");

  const handleButtonClick = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const { message } = await response.json();  
      setDogUrl(message);  
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  return (
    <>
      <div>犬の画像を表示するサイトです</div>
      <DogImage url={dogUrl} />
      <button onClick={handleButtonClick} className="update-button">更新</button>
    </>
  );
}
