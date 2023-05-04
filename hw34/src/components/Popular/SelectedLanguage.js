import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setSelectedLanguage } from '../../State/popular/popular.slice';
import { fetchPopularRepos } from '../../State/popular/popular.requests';

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Pyton'];

const SelectedLanguage = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.popular.selectedLanguage) || 'All';
    const loading = useSelector((state) => state.popular.loading);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const language = searchParams.get('language') || 'All';
        dispatch(setSelectedLanguage(language));
        dispatch(fetchPopularRepos(language));
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
                        dispatch(setSelectedLanguage(language));
                        dispatch(fetchPopularRepos(language));
                        setSearchParams({ language });
                    }}>
                    {language}
                </li>
            ))}
        </ul>
    );
};

export default SelectedLanguage;
