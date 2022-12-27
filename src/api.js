import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getPopularMovies = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return movie.data.results;
}

export const searchMovies = async(query) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${query}&api_key=${apiKey}`);
    return search.data;
}