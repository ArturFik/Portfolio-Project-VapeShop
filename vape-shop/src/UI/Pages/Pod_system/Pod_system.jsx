import React, {useState} from 'react';
import PostItem from './PostItem';

const Pod_system = () => {
  const [posts] = useState([
    {title: 'Чаха', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Чаха+', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Кнайт', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Манта', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Пасик', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Пасик2', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Ватрушка', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Хрос', url:'/Pod_system', price: '1400', key: '1'},
    {title: 'Хрос', url:'/Pod_system', price: '1400', key: '1'},
  ]);

  return (
    <catalog>
      {posts.map(post =>
        <PostItem post={post}/>
      )}; 
    </catalog>
  );
};

export default Pod_system;
