import React, { useState, useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

//style imports
import { cardStyles, buttonStyles } from '../../../styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Comment from './comment/Comment';

import { ADD_COMMENT } from '../../../graphql/events/event-mutations';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';

const CommentsCard = ({ initialComments, eventId }) => {
  const user = useSelector((state) => state.user);
  const classes = cardStyles();
  const buttonClass = buttonStyles();
  const [commentFormInput, setCommentFormInput] = useState('');
  const [comments, setComments] = useState(initialComments);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [comments]);

  const handleChange = (e) => {
    setCommentFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      comment: commentFormInput,
      root_id: 0,
      parent_id: 0,
      event_id: Number(eventId),
      user_id: Number(user.id),
    };

    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: 'post',
      data: {
        query: print(ADD_COMMENT),
        variables: {
          comment: newComment,
        },
      },
    }).then(
      (res) => {
        newComment.id = res.data.data.inputComment.id;
        newComment.User = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        newComment.dateCreated = Date.now();
        setComments([...comments, newComment]);
        setCommentFormInput('');
      },
      (err) => console.dir(err)
    );
  };

  return (
    <div style={{ height: '100%' }}>
      <Card className={`${classes.root} ${classes.comments}`}>
        <CardContent className={classes.commentsActual} ref={containerRef}>
          <div>
            {comments &&
              comments.map((comment) => <Comment key={comment.id} {...comment} eventId={eventId} />)}
          </div>
        </CardContent>
        <CardContent>
          <form noValidate autoComplete="off" className={classes.commentForm} onSubmit={handleSubmit}>
            <TextField
              name="comment"
              required
              placeholder="Write a comment..."
              style={{ width: '70%' }}
              onChange={handleChange}
              value={commentFormInput}
              InputProps={{ disableUnderline: true }}
            />
            <Button
              type="submit"
              disabled={!commentFormInput}
              className={`${buttonClass.root} ${buttonClass.single}`}
            >
              <Typography>Comment</Typography>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentsCard;
