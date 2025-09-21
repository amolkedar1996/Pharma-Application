import React from 'react';
import { usePosts } from '../features/posts/usePosts';

const Posts = () => {

  const {data,isPending,isError} = usePosts();

  console.log(data,isPending,isError);

  if(isPending) {
  return <p>Loading......</p>
  }
  return (
    <>
    <h1>Posts :</h1>
    {
      data.map((post,ind) => {
        return <div style={{border:"1px solid green",margin:"20px 40px"}}>
          <h2>ID : {post.id}</h2>
          <h3>User ID : {post.userId}</h3>
          <h4>Title : {post.title}</h4>
          <p>Body : {post.body}</p>
        </div>
      })
    }
    </>
  )
}

export default Posts