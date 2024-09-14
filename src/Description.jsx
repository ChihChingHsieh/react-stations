// @ts-check

const Description = ({ fetchRandomDogImage }) => {
  return (
    <>
      <div>犬の画像を表示するサイトです</div>
      <button onClick={fetchRandomDogImage} className="update-button">更新</button>
    </>
  )
}

export default Description;