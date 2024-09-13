import './item.css';
import { Movie } from '../movies';

export const Item = ({ movie: { title, year, rating } }: { movie: Movie }) => {
  return (
    <div className="item">
      <p className="item__title">{title}</p>
      <p>{year}</p>
      <p className="item__rating">{rating}</p>
    </div>
  );
};
