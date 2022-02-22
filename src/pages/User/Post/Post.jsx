import React from 'react';
import PostCard from '../components/PostCard/PostCard';
import Proposal from './components/Proposal';

const Post = () => {
  return <>
    <PostCard />
    <div className='space-y-4'>
      <h3 className='text-xl font-bold uppercase'>Ofertas Recibidas:</h3>
      {
        [1,2,3,4,5].map(item => <Proposal key={item} />)
      }
    </div>
  </>;
};

export default Post;
