import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import styles from '@/config/styles.ts';
import { kz, left, right, ru } from '@/assets';
import { Button, ButtonProps, Typography } from '@mui/material';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SimpleSlider() {
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <Slide>
          <BoxSlider>
            <ImageWrapper>
              <img src={left} alt="Abama"   style={{ borderBottomLeftRadius: styles.rounded.md }} />
            </ImageWrapper>
            <TextWrapper>
              <OrangeButton>
                <SvgIcon width="17" height="12" viewBox="0 0 17 12" color="white" fill="none">
                  <path
                    d="M11.5628 2.82054C13.3202 4.5779 13.3202 7.42714 11.5628 9.1845M5.19888 9.18447C3.44152 7.42711 3.44152 4.57787 5.19888 2.82051M3.07756 11.3058C0.148626 8.37689 0.148626 3.62815 3.07756 0.699219M13.6842 0.699253C16.6131 3.62819 16.6131 8.37692 13.6842 11.3059M9.88086 6.00252C9.88086 6.83095 9.20929 7.50252 8.38086 7.50252C7.55243 7.50252 6.88086 6.83095 6.88086 6.00252C6.88086 5.17409 7.55243 4.50252 8.38086 4.50252C9.20929 4.50252 9.88086 5.17409 9.88086 6.00252Z"
                    stroke="currentColor"
                    stroke-width="1.38462"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </SvgIcon>{' '}
                LIVE
              </OrangeButton>
              <div style={{ gap: '15px', display: 'flex', justifyItems: 'center' }}>
                <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                  <img src={kz} alt="kz" width={33} height={24} />
                  <Typography variant="h5" sx={{ margin: '0 4px', color: styles.colors.white }}>
                    Матвеев
                  </Typography>
                </div>
                <Typography variant="h5" sx={{ margin: '0 4px', color: styles.colors.background }}>
                  VS
                </Typography>
                <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                  <img src={ru} alt="ru" width={33} height={24} />
                  <Typography variant="h5" sx={{ margin: '0 4px', color: styles.colors.white }}>
                    Романов
                  </Typography>
                </div>
              </div>
              <Typography variant="h4" sx={{ margin: '0 4px', color: styles.colors.white, textAlign: 'center' }}>
                Финальный матч - вольная борьба
              </Typography>
              <ColorButton>
                <Typography
                  variant="body2"
                  sx={{ margin: '4px 10px', color: styles.colors.active, textAlign: 'center' }}
                >
                  Смотреть трансляцию
                </Typography>
              </ColorButton>
            </TextWrapper>
            <ImageWrapper>
              <img src={right} alt="Macgregor"   style={{ borderBottomRightRadius: styles.rounded.md }} />
            </ImageWrapper>
          </BoxSlider>
        </Slide>

        <Slide>
          <BoxSlider>
            <ImageWrapper>
              <img src={left} alt="Abama"   style={{ borderBottomLeftRadius: styles.rounded.md }} />
            </ImageWrapper>
            <TextWrapper>
              <OrangeButton>
                <SvgIcon width="17" height="12" viewBox="0 0 17 12" color="white" fill="none">
                  <path
                    d="M11.5628 2.82054C13.3202 4.5779 13.3202 7.42714 11.5628 9.1845M5.19888 9.18447C3.44152 7.42711 3.44152 4.57787 5.19888 2.82051M3.07756 11.3058C0.148626 8.37689 0.148626 3.62815 3.07756 0.699219M13.6842 0.699253C16.6131 3.62819 16.6131 8.37692 13.6842 11.3059M9.88086 6.00252C9.88086 6.83095 9.20929 7.50252 8.38086 7.50252C7.55243 7.50252 6.88086 6.83095 6.88086 6.00252C6.88086 5.17409 7.55243 4.50252 8.38086 4.50252C9.20929 4.50252 9.88086 5.17409 9.88086 6.00252Z"
                    stroke="currentColor"
                    stroke-width="1.38462"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </SvgIcon>{' '}
                LIVE
              </OrangeButton>
              <div style={{ gap: '15px', display: 'flex', justifyItems: 'center' }}>
                <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                  <img src={kz} alt="kz" width={33} height={24} />
                  <Typography variant="h5" sx={{ margin: '0 4px', color: styles.colors.white }}>
                    Макарян
                  </Typography>
                </div>
                <Typography variant="h5" sx={{ margin: '0 4px', color: styles.colors.background }}>
                  VS
                </Typography>
                <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                  <img src={ru} alt="ru" width={33} height={24} />
                  <Typography variant="h5" sx={{ margin: '0 4px', color: styles.colors.white }}>
                    Стэтхэм
                  </Typography>
                </div>
              </div>
              <Typography variant="h4" sx={{ margin: '0 4px', color: styles.colors.white, textAlign: 'center' }}>
                ВТОРОЙ ФИНАЛ - вольная борьба
              </Typography>
              <ColorButton>
                <Typography
                  variant="body2"
                  sx={{ margin: '4px 10px', color: styles.colors.active, textAlign: 'center' }}
                >
                  Смотреть трансляцию
                </Typography>
              </ColorButton>
            </TextWrapper>
            <ImageWrapper>
              <img src={right} alt="Macgregor"  style={{ borderBottomRightRadius: styles.rounded.md }}  />
            </ImageWrapper>
          </BoxSlider>
        </Slide>
      </Slider>
    </SliderWrapper>
  );
}

const Slide = styled.div`
  height: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${styles.colors.slider};
  border-radius: ${styles.rounded.md};
`;

const BoxSlider = styled.div`
  height: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${styles.rounded.md};

  border-radius: ${styles.rounded.md};
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${styles.colors.slider};
  height: 100%;
`;

const SliderWrapper = styled.div`
    width: 90%;
    max-width: 1160px;
    margin: 0 auto;
    overflow: hidden;
    
    @media (max-width: 1060px) {
        display: none;
    }
`;

const OrangeButton = styled(Button)<ButtonProps>`
  && {
    background-color: ${styles.colors.orange};
    color: white;
    gap: 10px;
    border-radius: ${styles.rounded.md};
    &:hover {
      background-color: ${styles.colors.orange};
    }
  }
`;

const ColorButton = styled(Button)<ButtonProps>`
  && {
    background-color: ${styles.colors.background};
    gap: 10px;
    border-radius: ${styles.rounded.md};
    &:hover {
      background-color: ${styles.colors.background};
    }
  }
`;

const SvgIcon = styled.svg`
  color: ${({ color }) => color || 'currentColor'};
`;
