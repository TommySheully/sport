import React from 'react';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', flexGrow: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', width: '100%`' }}>
        slider
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>block 1</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>block 2</div>
      </div>
    </div>
  );
};

export default Home;
