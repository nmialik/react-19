import './List.css';
import { Item } from './Item';
import { topMovies } from './movies';

export const List = () => {
  return (
    <div className="list">
      {topMovies.map((movie) => {
        return <Item key={movie.id} movie={movie} />;
      })}
    </div>
  );
};
