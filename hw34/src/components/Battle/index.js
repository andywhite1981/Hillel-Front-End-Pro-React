import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPlayerNameAction, setPlayerImageAction, resetPlayerAction } from '../../State/Battle/battle.actions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

const Battle = () => {
    const dispatch = useDispatch();
    const playersData = useSelector((state) => state.battleReducer);

    const handleSubmit = (id, username) => {
        dispatch(setPlayerNameAction(id, username));
        dispatch(setPlayerImageAction(id, `https://github.com/${username}.png?size200`));
    };

    const handleReset = (id) => {
        dispatch(resetPlayerAction(id));
    };

    return (
        <div>
            <div className='row'>
                {!playersData.playerOneImage ? (
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPreview
                        avatar={playersData.playerOneImage}
                        userName={playersData.playerOneName}>
                        <button
                            className='reset'
                            onClick={() => handleReset('playerOne')}>
                            Reset
                        </button>
                    </PlayerPreview>
                )}
                {!playersData.playerTwoImage ? (
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPreview
                        avatar={playersData.playerTwoImage}
                        userName={playersData.playerTwoName}>
                        <button
                            className='reset'
                            onClick={() => handleReset('playerTwo')}>
                            Reset
                        </button>
                    </PlayerPreview>
                )}
            </div>
            {playersData.playerOneImage && playersData.playerTwoImage ? (
                <Link
                    className='button'
                    to={{
                        pathname: 'results',
                        search: `?playerOneName=${playersData.playerOneName}&playerTwoName=${playersData.playerTwoName}`
                    }}>
                    Battle
                </Link>
            ) : null}
        </div>
    );
};

export default Battle;
