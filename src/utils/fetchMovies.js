const url = 'https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg';

export const fetchMovies = (url) => {
    return fetch(url).then((res) => {
        return res.json()
    })
}

