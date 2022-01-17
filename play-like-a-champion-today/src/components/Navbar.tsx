import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

const Navbar = () => {
  return (
    <section className='bg-domegold h-full p-10 flex flex-col justify-between items-center'>
      <Link to='/'>Home</Link>
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
      <a href='#'>Link 4</a>
      <a href='#'>Link 5</a>
    </section>
  );
};

export default Navbar;
