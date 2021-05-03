import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { buttonStyles } from '../../../../../styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import emojiHeartEyesFill from '@iconify-icons/bi/emoji-heart-eyes-fill';

import { Icon } from '@iconify/react';
import emojiLaughingFill from '@iconify-icons/bi/emoji-laughing-fill';
import emojiFrownFill from '@iconify-icons/bi/emoji-frown-fill';
import emojiAngryFill from '@iconify-icons/bi/emoji-angry-fill';
import emojiSmileFill from '@iconify-icons/bi/emoji-smile-fill';

const ReactButton = ({ name, toggleEmoji }) => {
  const classes = buttonStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          border: 'none',
          background: 'none',
          padding: 0,
        }}
        onClick={handleClickOpen}
      >
        React
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`React to ${name}'s comment`}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              onClick={() => {
                toggleEmoji('heart');
                handleClose();
              }}
            >
              <Icon icon={emojiHeartEyesFill} style={{ color: '#58D573' }} height="1.5em" />
            </IconButton>
            <IconButton
              onClick={() => {
                toggleEmoji('Happy');
                handleClose();
              }}
            >
              <Icon icon={emojiSmileFill} style={{ color: '#58D573' }} height="1.5em" />
            </IconButton>
            <IconButton
              onClick={() => {
                toggleEmoji('Laugh');
                handleClose();
              }}
            >
              <Icon icon={emojiLaughingFill} style={{ color: '#58D573' }} height="1.5em" />
            </IconButton>
            <IconButton
              onClick={() => {
                toggleEmoji('Sad');
                handleClose();
              }}
            >
              <Icon icon={emojiFrownFill} style={{ color: '#58D573' }} height="1.5em" />
            </IconButton>
            <IconButton
              onClick={() => {
                toggleEmoji('Angry');
                handleClose();
              }}
            >
              <Icon icon={emojiAngryFill} style={{ color: '#58D573' }} height="1.5em" />
            </IconButton>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={`${classes.root} ${classes.warn}`} onClick={handleClose}>
            <Typography>Cancel</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ReactButton;
