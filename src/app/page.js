import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Projects from './Components/Projects';
import Welcome from './Components/Welcome';

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Projects />
      <About />
      <Contact />
    </ Layout>
  );
}
