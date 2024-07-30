import React, { useState } from 'react';
import { Button, ButtonProps, Card, CardActions, CardContent, CardMedia, List, Skeleton, Typography } from '@mui/material';
import styles from '@/config/styles.ts';
import { artem, body, comments, eye, konstantin, vadim } from '@/assets';
import { Comment } from '@/components/Home/Comment.tsx';
import styled from 'styled-components';

const text = 'Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...'

const commentsMock = [
  {
    id: 1,
    name: 'Вадим Давыдов',
    avatar: 'https://via.placeholder.com/40',
    comment: 'Наконец-то! Рад, что он вернулся в спорт',
    time: '15 минут назад',
    createdAt: '2023-07-29T15:00:00Z',
    icon: vadim,
    replies: [
      {
        id: 2,
        name: 'Артем Еременко',
        avatar: 'https://via.placeholder.com/40',
        comment: 'Вадим, согласен! Уже давно ждал интервью!',
        time: '30 секунд назад',
        createdAt: '2023-07-29T15:01:00Z',
        icon: artem,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Константин Романов',
    avatar: 'https://via.placeholder.com/40',
    comment: 'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.',
    time: '20 минут назад',
    createdAt: '2023-07-29T15:05:00Z',
    icon: konstantin,
    replies: [],
  },
  {
    id: 4,
    name: 'Анастасия Осипова',
    avatar: 'https://via.placeholder.com/40',
    comment: 'Наш чемпион! Горжусь! 💗',
    time: '20 минут назад',
    createdAt: '2023-07-29T15:10:00Z',
    icon: artem,
    replies: [],
  },
];

const News = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '70%' }}>
      <Card sx={{ w: '100%', borderRadius: styles.rounded.xl, padding: '20px' }}>
        <div style={{ display: 'flex', width: '100%', gap: '5px' }}>
          <Typography gutterBottom variant="body2" component="div" color="text.secondary">
            Спортивная Борьба
          </Typography>
          <Typography gutterBottom variant="body2" component="div" color="text.secondary">
            ·
          </Typography>
          <Typography gutterBottom variant="body2" component="div" color="text.secondary">
            12 марта, 2024 в 16:03
          </Typography>
        </div>

        <Typography gutterBottom variant="h5" component="div" color={styles.colors.active}>
          Илья Бессонов дал интервью для телеканала Россия-1
        </Typography>

        <div>
          <Typography variant="body2" paragraph>
            {expanded ? text : `${text.substring(0, 100)}...`}
            <Button onClick={handleToggle} color="secondary">
              {expanded ? 'Свернуть' : 'Читать больше'}
            </Button>
          </Typography>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', gap: '10px' }}>
          <img src={body} alt="body news" style={{ width: '100%' }} />
          <div style={{ display: 'flex', width: '100%', gap: '5px' }}>
            <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                        color="text.secondary">
              <img src={comments} alt="ru" width={20} height={20} />
              4.1 K
            </Typography>
            <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                        color="text.secondary">
              <img src={eye} alt="ru" width={20} height={20} />
              4
            </Typography>
          </div>
        </div>

        <div>
          <List>
            {commentsMock.map((comment) => (
              <Comment key={comment.id} comment={comment} nested={false} />
            ))}
          </List>
          <ColorButton variant="contained">
            Смотреть все комментарии
          </ColorButton>
        </div>
      </Card>

      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', w: '100%', borderRadius: styles.rounded.xl, padding: '20px', height: '540px' }}>
        <Skeleton variant="text" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={200} />
        <Skeleton variant="text" width="100%" height={100} />
        <Skeleton variant="rectangular" width="100%" height={200} />
      </Card>

    </div>
  );
};

export default News;

const ColorButton = styled(Button)<ButtonProps>`
  && {
    background-color: ${styles.colors.background};
    gap: 10px;
    color: ${styles.colors.active};
    border-radius: ${styles.rounded.md};
    &:hover {
      background-color: ${styles.colors.background};
    }
  }
`;
