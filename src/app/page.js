
import React from "react";
import Navbar from "./Components/NAVABR/Navbar";
import Hero from "./Components/HERO/Hero";
import Problem from "./Components/KEYPROB/Problem";
import KeyMetrics from "./Components/KEYMETRICS/KeyMetrics";
import Reviews from "./Components/REVIEWS/Reviews";
import ProblemTarget from "./Components/PROTARGET/ProblemTarget";
import Cta from "./Components/CTA/Cta";
import Footer from "./Components/FOOTER/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Problem />
      <KeyMetrics />
      <Reviews />
      <ProblemTarget />
      <Cta />
      <Footer />
    </React.Fragment>
  );
}
