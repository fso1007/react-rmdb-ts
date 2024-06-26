// Hooks
import { MovieState } from "../../hooks/useMovieFetch";
import { useContext } from "react";
import { Context } from "../../context";
// Components
import Thumb from "../Thumb";
import Rate from "../Rate";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
// Image
import NoImage from "../../images/no_image.jpg";

// Types
type Props = {
  movie: MovieState;
};

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const fixedRating = movie.vote_average.toFixed(1);

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <hr />
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{fixedRating}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
