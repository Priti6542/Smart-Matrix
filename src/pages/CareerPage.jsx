import React from 'react'
import CareerHero from '../component/career/hero/CareerHero'
import Card from '../component/career/card/Card'
import WorkWith from '../component/career/workwith/WorkWith'
import Internship from '../component/career/internship/Internship'

function CareerPage() {
  return (
    <div>
      <CareerHero/>
      <Card/>
      <WorkWith/>
      <Internship/>
    </div>
  )
}

export default CareerPage
