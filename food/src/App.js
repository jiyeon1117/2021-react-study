/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'Pasta',
    rating: 5,
    image: 'https://stuweb.s3.amazonaws.com/photo/1/2/4323eb439f67896c0a6762bdc89a6726.jpg'
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    rating: 4.9,
    image: 'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200'
  },
  {
    id: 3,
    name: 'Bibimbap',
    rating: 5,
    image: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg'
  },
  {
    id: 4,
    name: 'Doncasu',
    rating: 5,
    image: 'http://image.auction.co.kr/itemimage/22/40/1e/22401e5e06.jpg'
  },
  {
    id: 5,
    name: 'Kimbap',
    rating: 3,
    image: 'http://www.chungjungone.com/knowhow/images/blog/recipe/1084/1.jpg'
  },
];

function Food({name, image, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src = {image} width = "50%" alf = {name} />
    </div>
  );
}

function renderFood(dish){
  return <Food key={dish.id} name = {dish.name} image = {dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

Food.PropTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.string
};

export default App;
