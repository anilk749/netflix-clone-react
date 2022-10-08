const API_KEY="485d023932c67897e7b277fdb134f24e";
const requests = {
  fetchAllCategory : `/genre/movie/list?api_key=${API_KEY}&page=1`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213&page=1`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&&with_genres=28&page=1`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=1`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=1`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=57&page=1`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=1`,
  fetchSimilarMovies: (id) => `/movie/${id}/similar?api_key=${API_KEY}&page=1`,
  fetchMoviesList: (id) => `/discover/movie?api_key=${API_KEY}&with_genres=${id}&page=1`,
}

export default requests;