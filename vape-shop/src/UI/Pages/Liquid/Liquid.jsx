import React, {useState} from 'react';
import LiquidItem from './LiquidItem';
import HotSpot from "./LiquidPhoto/HotSpot.png"

const Liquid = () => {
  const [posts] = useState([
    {img: {HotSpot},title: 'Husky', url:'/Pod_system', price: '350', key: '1'},
    {title: 'HotSpot', url:'/Pod_system', price: '380', key: '1'},
    {title: 'Brusko', url:'/Pod_system', price: '100', key: '1'},
    {title: 'HQD', url:'/Pod_system', price: '300', key: '1'},
    {title: 'HotSpot', url:'/Pod_system', price: '350', key: '1'},
    {title: 'Husky Premium', url:'/Pod_system', price: '450', key: '1'},
  ]);

  return (
    <catalog>
      {posts.map(post =>
        <LiquidItem post={post}/>
      )}; 
    </catalog>
  );
};

export default Liquid;