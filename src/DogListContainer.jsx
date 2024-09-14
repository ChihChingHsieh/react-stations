// @ts-check
import { useState, useEffect } from 'react';
export function DogListContainer () {
  const [breeds, setBreeds] =useState([])
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breedList = Object.keys(data.message); // 2階層以降を無視して犬種一覧を取得
        setBreeds(breedList); // stateを更新
      } catch (error) {
        console.error("Error fetching breeds:", error);
      }
    };
    fetchBreeds(); 
  }, []);

  return (
  <>
<div>
      <h2>犬種を選択してください</h2>
      <select>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  </>
  );
};
