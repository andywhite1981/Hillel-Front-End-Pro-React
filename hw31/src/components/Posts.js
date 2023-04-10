import './Post.css';

import { useState, useEffect } from 'react';
import Post from './Post';
import NewPostForm from './NewPostForm';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  // const [newPostTitle, setNewPostTitle] = useState('');
  // const [newPostBody, setNewPostBody] = useState('');
  // const [formError, setFormError] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{2,7}$/.test(newPostTitle)) {
  //     setFormError('Title must have at least one uppercase letter, one lowercase letter, one number, and be between 2-7 characters long');
  //     return;
  //   }
  //   if (newPostBody.length < 2) {
  //     setFormError('Body must be at least 2 characters long');
  //     return;
  //   }
  //   const newPost = {
  //     userId: 1,
  //     id: posts[posts.length - 1].id + 1,
  //     title: newPostTitle,
  //     body: newPostBody,
  //   };
  //   setPosts([...posts, newPost]);
  //   setNewPostTitle('');
  //   setNewPostBody('');
  //   setFormError('');
  // };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((result) => result.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const handleEditPost = (id) => {
    const newTitle = prompt('Enter new post title:');
    const newBody = prompt('Enter new post body:');
    if (newTitle && newBody) {
      setPosts(
        posts.map((post) => {
          if (post.id === id) {
            return { ...post, title: newTitle, body: newBody };
          }
          return post;
        })
      );
    }
  };

  const handleDeletePost = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this post?');

    if (confirmed) {
      return setPosts(posts.filter((post) => post.id !== id));
    }
    return setPosts(posts);
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' value={newPostTitle} onChange={(event) => setNewPostTitle(event.target.value)} />
        </div>
        <div>
          <label htmlFor='body'>Body:</label>
          <textarea id='body' value={newPostBody} onChange={(event) => setNewPostBody(event.target.value)} />
        </div>
        {formError && <div>{formError}</div>}
        <button type='submit'>Submit</button>
      </form> */}
      <NewPostForm setPosts={setPosts} posts={posts} />
      {posts.map((post) => (
        <Post key={post.id} {...post} handleEditPost={() => handleEditPost(post.id)} handleDeletePost={() => handleDeletePost(post.id)} />
      ))}
    </div>
  );
}

export default Posts;
