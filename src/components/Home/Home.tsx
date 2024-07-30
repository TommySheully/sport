import React from 'react';
import SimpleSlider from '@/components/Home/Slider.tsx';
import Filter from '@/components/Home/Filter.tsx';
import News from '@/components/Home/News.tsx';

const Home = () => {
  return (
    <div style={{
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

      <div style={{ display: 'flex', gap: '20px', width: '90%' }}>
        <News />
        <Filter />
      </div>

    </div>
  );
};

export default Home;
