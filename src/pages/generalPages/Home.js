import React from 'react';
import Advertised from '../../components/Advertised';
import CarModels from '../../components/CarModels';
import HomeBanner from '../../components/HomeBanner';
import QualityCar from '../../components/QualityCar';


const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <CarModels></CarModels>
      <Advertised></Advertised> 
      <QualityCar></QualityCar>
    </div>
  );
};

export default Home;
