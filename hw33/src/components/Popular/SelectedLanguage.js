import { memo } from 'react';

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Pyton'];

const SelectedLanguage = memo(({ selectedLanguage, setSelectedLanguage, loading }) => {
    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li
                    key={index}
                    style={{
                        color: language === selectedLanguage ? '#d0021b' : '#000000',
                        pointerEvents: loading && language !== selectedLanguage ? 'none' : 'auto',
                    }}
                    onClick={() => setSelectedLanguage(language)}>
                    {language}
                </li>
            ))}
        </ul>
    );
});

export default SelectedLanguage;
