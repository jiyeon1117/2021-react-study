import React, { useState } from 'react';
import './App.css'

function App() {
  let [title, setTitle] = useState(['남자 농구 추천', '드라마 관련', '디저트 관련']);
  let [day, setDay] = useState(['7월 20일 발행', '7월 28일 발행', '8월 13일 발행']);
  let [like, setLike] = useState(0);

  const onIncreaseLike = () => {
    setLike(like + 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>Jiyeon's Blog</div>
      </div>

      <div className="list">
        <h2>{title[0]}</h2>
        <span onClick={onIncreaseLike}>💖</span> {like}
        <h4>{day[0]}</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <hr/>
      </div>

      <div className="list">
        <h2>{title[1]}</h2>
        <span onclick={onIncreaseLike}>💘</span> {like}
        <h4>{day[1]}</h4>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <hr/>
      </div>

      <div className="list">
        <h2>{title[2]}</h2>
        <span onclick={onIncreaseLike}>💗</span> {like}
        <h4>{day[2]}</h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
