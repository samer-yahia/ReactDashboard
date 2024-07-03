import React from 'react';
import PageTitle from './PageTitle';
import Dashboard from './Dashboard';
import './main.css';

function MainDash() {
  return (
    <main id='main' className='main'>
        <PageTitle page = 'Dashboard' />
        <Dashboard />
    </main>
  );
}

export default MainDash;