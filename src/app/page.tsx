'use client';
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import OfferSection from "./components/offerSection/OfferSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Carousel />
        <OfferSection/>
      </div>
      <Footer />
    </div>
  );
}
