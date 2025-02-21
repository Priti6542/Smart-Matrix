import React from 'react'
import AboutHero from '../component/about/abouthero/AboutHero'
import AboutCard from '../component/about/aboutcard/AboutCard'
import VisionMissionValue from '../component/about/visionmisionvalue/VisionMissionValue'
import Counter from '../component/about/counter/Counter'

function AboutPage() {
  return (
    <div>
      
        <AboutHero /> 
        <AboutCard/>
        <VisionMissionValue/>
        <Counter/>
      
    </div>
  )
}

export default AboutPage
