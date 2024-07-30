import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Skeleton, Typography } from '@mui/material';
import styles from '@/config/styles.ts';
import { comments } from '@/assets';
import styled from 'styled-components';

const buttons = [
  {
    key: 'all',
    label: 'Все',
    icon: comments,
  },
  {
    key: 'result',
    label: 'Результаты соревнований',
    icon: comments,
  },
  {
    key: 'video',
    label: 'Видео',
    icon: comments,
  },
  {
    key: 'result-all',
    label: 'Достижения',
    icon: comments,
  },
];

const Filter = () => {
  const [activeButton, setActiveButton] = useState<string | null>('all');

  return (
    <ContentWrapper >
      <FilterCard>
        <Typography gutterBottom variant="h4" component="div" style={{padding: '10px'}}>
          Фильтр ленты
        </Typography>

          <ButtonGroup
            variant="text"
            orientation="vertical"
            aria-label="Vertical button group"
            fullWidth={true}
            sx={{
              margin: '10px',
              '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                borderColor: 'transparent',
              },
            }}
          >
            {buttons.map((btn) => (
              <ColorButton
                key={btn.key}
                active={activeButton === btn.key}
                onClick={() => setActiveButton(btn.key)}
              >
                <Typography
                  variant="body2"
                  style={{ display: 'flex', alignItems: 'center', gap: '3px' }}
                  color="text.secondary"
                >
                  <img src={btn.icon} alt="icon" width={20} height={20} />
                  {btn.label}
                </Typography>
              </ColorButton>
            ))}
          </ButtonGroup>
      </FilterCard>
      <CustomCard>
        <Skeleton variant="text" width="90%" height={100} style={{margin: '10px 0'}} />
        <Skeleton variant="text" width="90%" height={200} style={{margin: '10px'}} />
        <Skeleton variant="text" width="90%" height={100} style={{margin: '10px 0'}}/>
        <Skeleton variant="text" width="90%" height={200} style={{margin: '10px 0'}}/>
      </CustomCard>
      <CustomCard >
        <Skeleton variant="text" width="90%" height={100} style={{margin: '10px 0'}}/>
        <Skeleton variant="text" width="90%" height={100} style={{margin: '10px 0'}}/>
      </CustomCard>
    </ContentWrapper>
  );
};

export default Filter;

const ColorButton = styled(Button)<{ active?: boolean }>`
    && {
        background-color: ${(props) => (props.active ? styles.colors.activeBackground : 'rgba(6,8,44,0)')};
        color: ${(props) => (props.active ? styles.colors.active : styles.colors.disable)};
        border-radius: ${styles.rounded.xl};
        gap: 10px;
        justify-content: flex-start;
        &:hover {
            background-color: ${(props) => (props.active ? styles.colors.activeHover : styles.colors.backgroundHover)};
        }
    }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 30%;
  flex-direction: column;

  @media (max-width: 750px) {
    gap: 10px;
      width: 100%;
  }
`;

const FilterCard = styled(Card)`
    width: 100%;

  border-radius: ${styles.rounded.xl};

  @media (max-width: 750px) {
      width: 100%;
  }
`;

const CustomCard = styled(Card)`
  width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
  border-radius: ${styles.rounded.xl};


  @media (max-width: 750px) {
display: none;
  }
`;
