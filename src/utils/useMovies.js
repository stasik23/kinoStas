import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useMovies = () => {
    const { data, error } = useSWR('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg', fetcher);
    return {
        movies: data ? data.slice(0, 8) : [],
        recentlyUpdated: data ? data.slice(0, 4) : [],
        isLoading: !error && !data,
        isError: error
    };
};