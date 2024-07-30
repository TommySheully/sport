import React from 'react';
import SimpleSlider from '@/components/Home/Slider.tsx';
import Filter from '@/components/Home/Filter.tsx';
import News from '@/components/Home/News.tsx';
import styled from 'styled-components';

const Home = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '1160px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'start',
      margin: '10px 0',
      }}
    >
      <SimpleSlider />

      <ContentWrapper>
        <News />
        <Filter />
      </ContentWrapper>

    </div>
  );
};

export default Home;

const ContentWrapper = styled.div`
  display: flex;
    justify-content: space-between;
  gap: 20px;
    margin: 20px;
  width: 90%;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;


