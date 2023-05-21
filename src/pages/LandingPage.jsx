import landingPage from "../json/landingPage.json";
import Hero from "../parts/Hero";
import Header from "../parts/Header";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero data={landingPage.hero} />
    </>
  );
}
