import React from 'react';
import Advertised from '../../components/Advertised';
import CarModels from '../../components/CarModels';
import HomeBanner from '../../components/HomeBanner';


const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <CarModels></CarModels>
      <Advertised></Advertised> 
    </div>
  );
};

export default Home;
