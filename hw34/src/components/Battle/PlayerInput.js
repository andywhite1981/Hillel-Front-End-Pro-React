import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerName, setPlayerImage } from '../../State/Battle/battle.slice';

const PlayerInput = ({ id, label }) => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.battle[`${id}Name`]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setPlayerName({ id, name: username }));
        dispatch(setPlayerImage({ id, image: `https://github.com/${username}.png?size200` }));
    };

    const handleChange = (event) => {
        const value = event.target.value;
        dispatch(setPlayerName({ id, name: value }));
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
                onChange={handleChange}
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
