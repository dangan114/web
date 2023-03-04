import React from 'react';
import CarouselComp from '../components/Carousel/CarouselComp';
import CardComp from "../components/Card/CardComp";
import ScheduleComp from "../components/Schedule/MassScheduleComp";

//import PropTypes from 'prop-types';

export default function Home() {

  return (
    <div>
      <CarouselComp />
      <ScheduleComp />
      <CardComp />
    </div>
  )

}
