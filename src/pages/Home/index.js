import React from 'react';
import './Home.css';
import Form from '../../components/Form';
import background from '../../assets/images/background.png';
import wave from '../../assets/images/wave.svg';

const Home = () => {
  return (
    <main className='main-container'>
      <section className='desktop'>
        <img src={background} className='desktop__background' alt='island background' />
        <img src={wave} className='desktop__background--wave' alt='white wave' />
        <div className='desktop__title'>
          <h1 className='desktop__title__h1'>Digital Natives<br/>First Assessment</h1>
          <h1 className='desktop__title__h1 desktop__title__h1--candidate'>sebireni</h1>
        </div> 
        <svg className='desktop__bgcircle'></svg>
      </section>

      <section className='mobile'>
        <div className='mobile__title'>
          <h2 className='mobile__title__h2'>Numbers to<br/>Words</h2>
        </div>
        <Form />
      </section>
    </main>
  );
};

export default Home;