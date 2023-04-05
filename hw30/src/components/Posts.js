import { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

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
      {posts.map((post) => (
        <Post key={post.id} {...post} handleEditPost={() => handleEditPost(post.id)} handleDeletePost={() => handleDeletePost(post.id)} />
      ))}
    </div>
  );
}

export default Posts;
