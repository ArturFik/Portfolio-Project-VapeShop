import React, {useState} from 'react';
import ComponentsItem from './ComponentsItem';


const Liquid = () => {
  const [posts] = useState([
    {title: 'Картридж на charon', url:'/Pod_system', price: '350', key: '1'},
    {title: 'Картридж на charon', url:'/Pod_system', price: '350', key: '1'},
    {title: 'Картридж на charon', url:'/Pod_system', price: '350', key: '1'},
    {title: 'Картридж на charon', url:'/Pod_system', price: '350', key: '1'},
    {title: 'Картридж на charon', url:'/Pod_system', price: '350', key: '1'},
    {title: 'Картридж на charon', url:'/Pod_system', price: '350', key: '1'},
  ]);

  return (
    <catalog>
      {posts.map(post =>
        <ComponentsItem post={post}/>
      )}; 
    </catalog>
  );
};

export default Liquid;