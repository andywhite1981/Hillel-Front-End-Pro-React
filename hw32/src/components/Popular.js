import { useState, useEffect } from 'react';
import { fetchPopularRepos } from './api';
import SelectedLanguage from './SelectedLanguage';
import Repos from './Repos';
import { useSearchParams } from 'react-router-dom';

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get('language') || 'All');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(selectedLanguage)
            .then((data) => setRepos(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        setSearchParams({ language: selectedLanguage });
    }, [selectedLanguage, setSearchParams]);

    useEffect(() => {
        const language = searchParams.get('language');
        setSelectedLanguage(language);
    }, [searchParams]);

    if (error) {
        return 'Error';
    }

    return (
        <>
            <SelectedLanguage selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} loading={loading} />

            {!loading ? <Repos repos={repos} /> : <h1 className='home-container'>Loading ...</h1>}
        </>
    );
};

export default Popular;
