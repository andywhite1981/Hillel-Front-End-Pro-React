import { useDispatch, useSelector } from 'react-redux';
import { setPlayerNameAction, setPlayerImageAction } from '../../State/Battle/battle.actions';

const PlayerInput = ({ id, label }) => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.battleReducer[`${id}Name`]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setPlayerNameAction(id, username));
        dispatch(setPlayerImageAction(id, `https://github.com/${username}.png?size200`));
    };

    return (
        <form
            className='column'
            onSubmit={handleSubmit}>
            <label
                className='header'
                htmlFor='username'>
                {label}
            </label>
            <input
                type='text'
                id='username'
                placeholder='Github username'
                autoComplete='off'
                value={username}
                onChange={(event) => dispatch(setPlayerNameAction(id, event.target.value))}
            />
            <button
                className='button'
                type='submit'
                disabled={!username}>
                Submit
            </button>
        </form>
    );
};

export default PlayerInput;
