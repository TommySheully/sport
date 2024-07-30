import React from 'react';
import SimpleSlider from '@/components/Home/Slider.tsx';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '10px 0',
        maxWidth: '1160px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <SimpleSlider />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>block 1</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>block 2</div>
      </div>
    </div>
  );
};

export default Home;
