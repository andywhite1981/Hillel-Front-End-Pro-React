import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPlayerName, setPlayerImage, resetPlayer } from '../../State/Battle/battle.slice';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

const Battle = () => {
    const dispatch = useDispatch();

    const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = useSelector((state) => state.battle) || {};

    const handleSubmit = (id, username) => {
        dispatch(setPlayerName(id, username));
        dispatch(setPlayerImage(id, `https://github.com/${username}.png?size200`));
    };

    const handleReset = (id) => {
        dispatch(resetPlayer({ id }));
    };

    return (
        <div>
            <div className='row'>
                {!playerOneImage ? (
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPreview
                        avatar={playerOneImage}
                        userName={playerOneName}>
                        <button
                            className='reset'
                            onClick={() => handleReset('playerOne')}>
                            Reset
                        </button>
                    </PlayerPreview>
                )}
                {!playerTwoImage ? (
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <PlayerPreview
                        avatar={playerTwoImage}
                        userName={playerTwoName}>
                        <button
                            className='reset'
                            onClick={() => handleReset('playerTwo')}>
                            Reset
                        </button>
                    </PlayerPreview>
                )}
            </div>
            {playerOneImage && playerTwoImage ? (
                <Link
                    className='button'
                    to={{
                        pathname: 'results',
                        search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                    }}>
                    Battle
                </Link>
            ) : null}
        </div>
    );
};

export default Battle;
