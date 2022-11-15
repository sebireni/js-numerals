import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EastIcon from '@mui/icons-material/East';
import LightCircles from '../../components/LightCircles';
import DarkCircles from '../../components/DarkCircles';

const Footer = () => {
  return (
    <div className='footer'> 
      <LightCircles/>
      
      <a className='footer__link--github' href='https://github.com/sebireni/js-numerals.git'>
        <GitHubIcon sx={{ color: '#fcfcfc' }} />
        sebireni
      </a>

      <a className='footer__link--dina' href='https://www.digitalnatives.hu/'>
        dina
        <EastIcon className='footer__link--dina__arrow' />
      </a>
      
      <DarkCircles/>
    </div>
  );
};

export default Footer;