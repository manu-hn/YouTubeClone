import React from 'react';

const App = () => {
  console.log(import.meta.env.VITE_NAME)
  return (
    <div className='text-5xl'>App</div>
  )
}

export default App