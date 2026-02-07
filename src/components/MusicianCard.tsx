import type { FC } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import './MusicianCard.css';

interface MusicianCardProps {
  name: string;
  imageSrc: string;
  link: string;
}

const MusicianCard: FC<MusicianCardProps> = ({ name, imageSrc, link }) => {
  return (
    <div className="musician-card">
      <div className="image-container">
        <OptimizedImage src={imageSrc} alt={name} className="musician-image" />
      </div>
      <div className="button-container">
        <Link to={link} className="musician-link">
          {name}
        </Link>
      </div>
    </div>
  );
};

export default MusicianCard;
