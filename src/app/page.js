import About from './Components/About';
import Layout from './Components/Layout';
import Welcome from './Components/Welcome';

export default function Home() {
  return (
    <Layout>
      <Welcome/>
      <About />
    </ Layout>
  );
}
