import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Projects from './Components/Projects';
import Welcome from './Components/Welcome';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

export default function Home() {
  return (
    <>
      <GoogleAnalytics measurementId='G-QW92SHWWYM'/>
      <Layout>
        <Welcome />
        <Projects />
        <About />
        <Contact />
      </ Layout>
    </>
  );
}
