import { useState } from 'react';
import './NewPostForm.css';

function NewPostForm(props) {
  const { posts, setPosts } = props;
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  const [formTitleError, setFormTitleError] = useState('');
  const [formBodyError, setFormBodyError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const titleRegex = /^(?=.*[a-z])(?=.*[A-Z]).{2,7}$/;
    const bodyRegex = /^(?=.*[a-z])(?=.*[A-Z]).{7,140}$/;

    if (!titleRegex.test(newPostTitle)) {
      setFormTitleError('Title must have at least one uppercase letter, one lowercase letter, and be between 2 and 7 characters long.');
      return;
    }

    if (!bodyRegex.test(newPostBody)) {
      setFormBodyError('Body must have at least one uppercase letter, one lowercase letter, and be between 7 and 140 characters long.');
      return;
    }

    const newPost = {
      userId: 1,
      id: posts[posts.length - 1].id + 1,
      title: newPostTitle,
      body: newPostBody,
    };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostBody('');
    setFormTitleError('');
    setFormBodyError('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label htmlFor='title' className='label'>
          Title:
        </label>
        <input className='input' type='text' id='title' value={newPostTitle} onChange={(event) => setNewPostTitle(event.target.value)} />
      </div>
      {formTitleError && <div className='error'>{formTitleError}</div>}
      <div>
        <label htmlFor='body' className='label'>
          Body:
        </label>
        <textarea className='textarea' id='body' value={newPostBody} onChange={(event) => setNewPostBody(event.target.value)} />
      </div>
      {formBodyError && <div className='error'>{formBodyError}</div>}
      <button type='submit' className='button'>
        Create new post
      </button>
    </form>
  );
}

export default NewPostForm;
