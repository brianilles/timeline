import React from 'react';
import Authenticate from '../Auth/Authenticate.js';

function Home() {
  return (
    <div>
      <p>hello world from home</p>
    </div>
  );
}

export default Authenticate(Home);
