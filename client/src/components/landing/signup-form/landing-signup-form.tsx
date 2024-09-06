import React from 'react';
import './styles.css';
import { FaAngleRight } from 'react-icons/fa';
import envData from './../../../../../config/env.json';

const { apiLocation } = envData;

function LandingSignupForm() {
  return (
    <section className='w-full gap flex items-center justify-center'>
      <a
        href={`${apiLocation}/signin`}
        className='flex signin-link items-center justify-center rounded-md bg-primary text-white'
      >
        <span className='text-white'>S&apos;inscrire</span>
        <span className='flex h-full text-white items-center'>
          <FaAngleRight />
        </span>
      </a>
    </section>
  );
}

export default LandingSignupForm;
