//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://dev.to/builderio/safe-data-fetching-in-modern-javascript-dp4

//https://redux-toolkit.js.org/usage/usage-with-typescript

//URL
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

// using

async function logMovies() {
  const response = await fetch('http://example.com/movies.json');
  const movies = await response.json();
  console.log(movies);
}

// why use export instead export default
//https://scriptdev.ru/book/tips/defaultIsBad/#_1
