import { Movie } from "./../../type";
import Youtube from "react-youtube";

type LayoutProps = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;

  trailerUrl: string | null;
  handleClick: (movie: Movie) => void;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Layout = ({ title, movies, isLargeRow, handleClick, trailerUrl}: LayoutProps) => {
  const image_url = "https://image.tmdb.org/t/p/original/";
  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="ml-5 text-white">
      <h2>{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`object-contain w-full m-2 transform transition-transform duration-450 ${
              isLargeRow ? "max-h-60" : "max-h-24"
            } hover:scale-110`}
            src={` ${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            onClick={() => handleClick(movie)}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
