import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingPage from '../components/LandingPage';
import QuiSuisJe from '../components/QuiSuisJe';
import PrestationsGrid from '../components/PrestationsGrid';
import BonsCadeaux from '../components/BonsCadeauxContainer';
import ContactContainer from '../components/ContactContainer';

export default function Home() {
  return (
    <div className="container">
      <LandingPage />
      <QuiSuisJe />
      <PrestationsGrid />
      <BonsCadeaux />
      <ContactContainer />
    </div>
  )
}
