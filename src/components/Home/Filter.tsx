import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Card, CardActions, Skeleton, Typography } from '@mui/material';
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '30%' }}>
      <Card sx={{ w: '90%', borderRadius: styles.rounded.xl, padding: '20px' }}>
        <Typography gutterBottom variant="h4" component="div">
          Фильтр ленты
        </Typography>
        <CardActions>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <ButtonGroup
              variant="text"
              orientation="vertical"
              aria-label="Vertical button group"
              sx={{
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
          </Box>
        </CardActions>
      </Card>
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', w: '100%', borderRadius: styles.rounded.xl, padding: '20px', height: '540px' }}>
        <Skeleton variant="text" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={200} />
        <Skeleton variant="text" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={200} />
      </Card>
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', w: '100%', borderRadius: styles.rounded.xl, padding: '0 20px' }}>
        <Skeleton variant="text" width="100%" height={100} />
        <Skeleton variant="text" width="100%" height={100} />
      </Card>
    </div>
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
