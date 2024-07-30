import { useState } from 'react';
import { Avatar, Button, Collapse, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

interface Comment {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  time: string;
  createdAt: string;
  icon?: string;
  replies: Comment[];
}

export const Comment = ({ comment, nested = false }: {comment: Comment, nested?: boolean} ) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div style={{ marginLeft: nested ? '32px' : '0' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={comment.name} src={comment.icon} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="span" variant="body1" color="textPrimary">
              {comment.name}
            </Typography>
          }
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                {comment.comment}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {comment.time}
              </Typography>
              <Button size="small" color="primary">
                Ответить
              </Button>
            </>
          }
        />
      </ListItem>
      {comment.replies.length > 0 && (
        <>
          <Button size="small" color="primary" onClick={() => setShowReplies(!showReplies)}>
            {showReplies ? 'Свернуть ответы' : `Смотреть ответы (${comment.replies.length})`}
          </Button>
          <Collapse in={showReplies} timeout="auto" unmountOnExit>
            <List disablePadding>
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} nested={true} />
              ))}
            </List>
          </Collapse>
        </>
      )}
    </div>
  );
};
