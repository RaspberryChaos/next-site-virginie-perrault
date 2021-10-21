import LandingPage from '../components/LandingPage';
import QuiSuisJe from '../components/QuiSuisJe';
import PrestationsGrid from '../components/PrestationsGrid';
import Avis from '../components/Avis';
import BonsCadeaux from '../components/BonsCadeauxContainer';
import ContactContainer from '../components/ContactContainer';

export default function Home() {
  return (
    <div className="container">
      <LandingPage />
      <QuiSuisJe />
      <PrestationsGrid />
      <Avis />
      <BonsCadeaux />
      <ContactContainer />
    </div>
  )
}
