import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Container className='h-100'>
        <div className='home-main'>
          <h1 className='home-main-title'>Unlimited Train</h1>
          <p className='home-main--text'>
          Extend the limits of your workouts by exercising
                 your strength, resistance and flexibility where you want
                 and at the intensity you want
          </p>
          <NavLink to=''>shop feom us</NavLink>
        </div>
      </Container>
    </div>
  )
}

export default Home