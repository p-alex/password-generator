import type { NextPage } from 'next';
import PasswordGenerator from '../containers/PasswordGenerator/PasswordGenerator';

const Home: NextPage = () => {
  return (
    <>
      <PasswordGenerator />
    </>
  );
};

export default Home;
