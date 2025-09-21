import React from 'react';
import { getPosts } from '../features/posts/postsApi';
import { useQuery } from '@tanstack/react-query';

const Posts = () => {

  const {data,isPending,isError} = useQuery({
    queryKey:["posts"],
    queryFn:getPosts
  });

  console.log(data,isPending,isError);
  return (
    <div>Posts</div>
  )
}

export default Posts