import type { NextPage } from 'next';
import Footer from '../components/Footer';
import PasswordGenerator from '../containers/PasswordGenerator/PasswordGenerator';

const Home: NextPage = () => {
  return (
    <>
      <PasswordGenerator />
      <Footer />
    </>
  );
};

export default Home;
