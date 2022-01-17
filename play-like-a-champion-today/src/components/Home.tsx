import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className='bg-irish bg-cover h-screen'>
      <section className='bg-ndblue bg-opacity-75 h-screen w-full flex'>
        <Sidebar />
        <section className='main-content text-domegold w-full h-screen p-10 flex flex-col items-center'>
          <h1 className='text-4xl mb-20'>NOTRE DAME FIGHTING IRISH</h1>
          <div className='w-3/4 flex flex-col items-center'>
            <p className='text-xl'>
              I’ve been a fan of Notre Dame from my middle school days in Fort
              Wayne, Indiana. I felt inspired by watching the athletes, who were
              also competing at a high-level academically, strive each week to,
            </p>
            <p className='text-2xl mt-10'>“PLAY LIKE A CHAMPION TODAY”</p>
          </div>
          <button className='btn my-20'>Learn More</button>
        </section>
      </section>
    </div>
  );
};

export default Home;
