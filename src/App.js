import React from 'react';

function MyButton() {
    return (
      <button>
        I&#39;m a button
      </button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }