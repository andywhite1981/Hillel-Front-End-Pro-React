import './Post.css';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function Post(props) {
  const { id, title, userId, body, handleDeletePost, handleEditPost } = props;

  return (
    <div className='post'>
      <div className='postContent'>
        <small>{id}</small>
        <h2>{title}</h2>
        <p>{body}</p>
        <h3>User ID: {userId}</h3>
      </div>
      <div className='buttons'>
        <button onClick={handleDeletePost}>
          <DeleteForeverOutlinedIcon />
        </button>
        <button onClick={handleEditPost}>
          <CreateOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Post;
