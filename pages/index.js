import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingPage from '../components/LandingPage';
import QuiSuisJe from '../components/QuiSuisJe';
import PrestationsGrid from '../components/PrestationsGrid';

export default function Home() {
  return (
    <div className="container">
      <LandingPage />
      <QuiSuisJe />
      <PrestationsGrid />
    </div>
  )
}
