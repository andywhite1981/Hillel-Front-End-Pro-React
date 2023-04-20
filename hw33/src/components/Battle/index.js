import PlayerInput from './PlayerInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

const Battle = () => {
    const [playersData, setPlayersData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null,
    });

    const handleSubmit = (id, username) => {
        setPlayersData((prevState) => ({
            ...prevState,
            [`${id}Name`]: username,
            [`${id}Image`]: `https://github.com/${username}.png?size200`,
        }));
    };

    const handleReset = (id) => {
        setPlayersData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null,
        }));
    };

    return (
        <div>
            <div className='row'>
                {!playersData.playerOneImage ? (
                    <PlayerInput id='playerOne' label='Payer 1' onSubmit={handleSubmit} />
                ) : (
                    <PlayerPreview avatar={playersData.playerOneImage} userName={playersData.playerOneName}>
                        <button className='reset' onClick={() => handleReset('playerOne')}>
                            Reset
                        </button>
                    </PlayerPreview>
                )}
                {!playersData.playerTwoImage ? (
                    <PlayerInput id='playerTwo' label='Payer 2' onSubmit={handleSubmit} />
                ) : (
                    <PlayerPreview avatar={playersData.playerTwoImage} userName={playersData.playerTwoName}>
                        <button className='reset' onClick={() => handleReset('playerTwo')}>
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
                        search: `?playerOneName=${playersData.playerOneName}&playerTwoName=${playersData.playerTwoName}`,
                    }}>
                    Battle
                </Link>
            ) : null}
        </div>
    );
};

export default Battle;
