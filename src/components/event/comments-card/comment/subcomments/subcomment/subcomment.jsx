import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../../../../utilities/axiosWithAuth';
import { cardStyles } from '../../../../../../styles';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';

import ReplyButton from './../../reply-button/ReplyButton';
import ReactButton from './../../react-buttom/ReactButton';
import ShowEmoji from './../../show-emoji/ShowEmoji';

import { ADD_COMMENT, HANDLE_REACTION } from '../../../../../../graphql/events/event-mutations';

export default function SubComment({
  subcomment,
  parent,
  dateCreated,
  commentOwner,
  root,
  id,
  eventId,
  Reactions,
  setSubComments,
}) {
  const user = useSelector((state) => state.user);
  const classes = cardStyles();
  const [reactions, setReactions] = useState(Reactions);

  const toggleEmoji = (emoji) => {
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: 'post',
      data: {
        query: print(HANDLE_REACTION),
        variables: {
          reaction: {
            comment_id: Number(id),
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
      root_id: Number(root),
      parent_id: Number(commentOwner.id),
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
        newComment.Parent = {
          id: commentOwner.id,
          firstName: commentOwner.firstName,
          lastName: commentOwner.lastName,
        };
        setSubComments((subComments) => [...subComments, newComment]);
      },
      (err) => console.dir(err)
    );
  };

  return (
    <div className={classes.singleCommentChild}>
      <div className={classes.avatarContainer}>
        {commentOwner && (
          <>
            <Avatar
              key={commentOwner.id}
              title={`${commentOwner.firstName} ${commentOwner.lastName}`}
              aria-label="avatar"
              src={!commentOwner.photo ? null : commentOwner.photo}
              className={classes.photoContainer}
            >
              {!commentOwner.photo && (
                <Typography variant="body2">
                  {`${commentOwner.firstName.split('')[0]}${commentOwner.lastName.split('')[0]}`}
                </Typography>
              )}
            </Avatar>
          </>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '100%' }}>
        <Typography
          style={{ fontWeight: 'bold' }}
          variant="body1"
        >{`${commentOwner.firstName} ${commentOwner.lastName}`}</Typography>
        <div>
          <Typography variant="caption" style={{ color: 'blue', fontSize: '1.4rem' }}>
            {parent ? `@${parent.firstName} ${parent.lastName} ` : ``}
          </Typography>
          <Typography variant="caption" style={{ fontSize: '1.4rem' }}>
            {subcomment}{' '}
          </Typography>
        </div>

        <div className={classes.replyBtnContainer}>
          <div className="buttons">
            <ReplyButton
              name={`${commentOwner.firstName} ${commentOwner.lastName}`}
              description={subcomment}
              addReply={addReply}
            />
            <ReactButton
              name={`${commentOwner.firstName} ${commentOwner.lastName}`}
              toggleEmoji={toggleEmoji}
            />
            <Typography variant="body2" color="textSecondary">
              {moment(Number(dateCreated)).fromNow()}
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
  );
}
