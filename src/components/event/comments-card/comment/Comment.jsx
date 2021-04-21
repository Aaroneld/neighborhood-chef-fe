import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import { cardStyles } from '../../../../styles';
import Avatar from '@material-ui/core/Avatar';
import SubComments from './subcomments/subcomments';

import ReplyButton from './reply-button/ReplyButton';
import ReactButton from './react-buttom/ReactButton';
import ShowEmoji from './show-emoji/ShowEmoji';
import moment from 'moment';
import { pickRandomColor } from '../../../../utilities/functions';

import { ADD_COMMENT, HANDLE_REACTION } from '../../../../graphql/events/event-mutations';

const Comment = (props) => {
  const user = useSelector((state) => state.user);
  const classes = cardStyles();
  const [reactions, setReactions] = useState(props.Reactions);
  const [subComments, setSubComments] = useState(props.Subcomments ? props.Subcomments : []);
  const [randomColor] = useState(pickRandomColor());

  const toggleEmoji = (emoji) => {
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: 'post',
      data: {
        query: print(HANDLE_REACTION),
        variables: {
          reaction: {
            comment_id: Number(props.id),
            user_id: Number(user.id),
            reaction: emoji,
          },
        },
      },
    })
      .then((res) => {
        setReactions(res.data.data.handleReaction);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  const addReply = (reply) => {
    const newComment = {
      comment: reply,
      root_id: Number(props.id),
      parent_id: Number(props.User.id),
      event_id: Number(props.eventId),
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
        newComment.Parent = {
          id: props.User.id,
          firstName: props.User.firstName,
          lastName: props.User.lastName,
        };
        newComment.dateCreated = Date.now();
        setSubComments([...subComments, newComment]);
      },
      (err) => console.dir(err)
    );
  };

  return (
    <>
      <div className={classes.singleCommentParent}>
        <div className={classes.avatarContainer}>
          <Avatar
            key={props.User.id}
            title={`${props.User.firstName} ${props.User.lastName}`}
            aria-label="avatar"
            src={!props.User.photo ? null : props.User.photo}
            className={classes.photoContainer}
            style={{ background: randomColor, color: 'white' }}
          >
            {!props.User.photo && (
              <Typography variant="body2">
                {`${props.User.firstName.split('')[0].toUpperCase()}${props.User.lastName
                  .split('')[0]
                  .toUpperCase()}`}
              </Typography>
            )}
          </Avatar>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '100%' }}
        >
          {user && (
            <Typography
              style={{ fontWeight: 'bold' }}
              variant="body1"
            >{`${props.User.firstName} ${props.User.lastName}`}</Typography>
          )}
          <Typography variant="caption" style={{ fontSize: '1.4rem' }}>
            {props.comment}
          </Typography>
          <div className={classes.replyBtnContainer}>
            <div className="buttons">
              <ReplyButton
                name={`${props.User.firstName} ${props.User.lastName}`}
                description={props.comment}
                addReply={addReply}
              />
              <ReactButton
                name={`${props.User.firstName} ${props.User.lastName}`}
                toggleEmoji={toggleEmoji}
              />
              <Typography variant="body2" color="textSecondary">
                {moment(Number(props.dateCreated)).fromNow()}
              </Typography>
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '2px' }}>
            {reactions &&
              reactions.map((item, index) => {
                return <ShowEmoji key={index} item={item} />;
              })}
          </div>
        </div>
      </div>
      <SubComments setSubComments={setSubComments} subcomments={subComments} eventId={props.eventId} />
    </>
  );
};

export default Comment;
