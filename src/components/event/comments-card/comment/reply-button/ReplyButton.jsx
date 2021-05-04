import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { buttonStyles } from '../../../../../styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ReplyButton = ({ name, description, addReply }) => {
  const classes = buttonStyles();
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReply('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReply(reply);
    handleClose();
  };

  return (
    <div>
      <button
        style={{
          width: '140%',
          height: '18px',
          border: 'none',
          padding: '2% 8%',
          borderRadius: '4px',
          fontSize: '50%',
        }}
        onClick={handleClickOpen}
      >
        Reply
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Reply to {name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              fullWidth
              placeholder="Write comment..."
              style={{ minWidth: '280px' }}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button className={`${classes.root} ${classes.warn}`} onClick={handleClose}>
            <Typography>Cancel</Typography>
          </Button>
          <Button
            disabled={!reply}
            className={`${classes.root} ${classes.single}`}
            type="submit"
            onClick={handleSubmit}
          >
            <Typography>Submit</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ReplyButton;
