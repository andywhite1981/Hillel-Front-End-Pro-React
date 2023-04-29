import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getRepos } from '../../State/popular/popular.thunk';

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Pyton'];

const SelectedLanguage = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.popularReducer.selectedLanguage);
    const loading = useSelector((state) => state.popularReducer.loading);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const language = searchParams.get('language') || 'All';
        dispatch(getRepos(language));
        setSearchParams({ language });
    }, [dispatch, searchParams, setSearchParams]);

    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li
                    key={index}
                    style={{
                        color: language === selectedLanguage ? '#d0021b' : '#000000',
                        pointerEvents: loading && language !== selectedLanguage ? 'none' : 'auto'
                    }}
                    onClick={() => {
                        dispatch(getRepos(language));
                        setSearchParams({ language });
                    }}>
                    {language}
                </li>
            ))}
        </ul>
    );
};

export default SelectedLanguage;
