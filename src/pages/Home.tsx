import type { FC } from 'react';
import './Home.css';
import Countdown from '../components/Countdown';
import FadeIn from '../components/FadeIn';
import OptimizedImage from '../components/OptimizedImage';

const Home: FC = () => {
  return (
    <div className="home-page">
      <div className="hero-container">
        <OptimizedImage 
          src="https://images.squarespace-cdn.com/content/v1/69586da7d6ff99271b20b83e/47b394fa-28df-47a6-909c-609017346213/Adolph_Menzel_-_Fl%C3%B6tenkonzert_Friedrichs_des_Gro%C3%9Fen_in_Sanssouci_-_Google_Art_Project.jpg" 
          alt="Compagnia Hero" 
          className="hero-image fill"
        />
        <div className="hero-content">
          <FadeIn direction="none">
            <div className="hero-logo-wrapper">
              <OptimizedImage 
                src="https://images.squarespace-cdn.com/content/v1/69586da7d6ff99271b20b83e/6f036fff-8eae-47ac-b330-68f2e21306b1/Compagnia+Logo+%285%29.png" 
                alt="Compagnia Logo" 
                className="hero-logo"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.3} direction="none">
            <p className="hero-subtitle">Traditional chamber music masterpieces in a unique artistic gathering space.</p>
          </FadeIn>
          <FadeIn delay={0.6} direction="none">
            <Countdown />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Home;