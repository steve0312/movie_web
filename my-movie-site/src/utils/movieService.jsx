export async function fetchMovieData(api, setData) {
  try {
    const data = await api();
    const results = data.results;

    const movies = results.map((result) => {
      const { id, title, poster_path } = result;

      return (
        <li key={id} className="marginMovie">
          <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
          <div>{title}</div>
        </li>
      );
    });

    setData(movies);
  } catch (error) {
    console.error("data fetching error : ", error);
  }
}
