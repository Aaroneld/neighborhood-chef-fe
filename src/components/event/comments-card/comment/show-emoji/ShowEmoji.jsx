import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { Icon } from '@iconify/react';

import emojiHeartEyesFill from '@iconify-icons/bi/emoji-heart-eyes-fill';
import emojiLaughingFill from '@iconify-icons/bi/emoji-laughing-fill';
import emojiFrownFill from '@iconify-icons/bi/emoji-frown-fill';
import emojiAngryFill from '@iconify-icons/bi/emoji-angry-fill';
import emojiSmileFill from '@iconify-icons/bi/emoji-smile-fill';
import { Translate } from '@material-ui/icons';

const styles = makeStyles((theme) => ({
  container: {
    '& svg': {},

    marginRight: (props) => `${props.count > 999 ? '31px' : '25px'}`,
    position: 'relative',

    '&::before': {
      display: (props) => `${props.count < 2 ? 'none' : 'default'}`,
      content: (props) => `"\u00A0\u00A0${props.count <= 9999 ? props.count : '9999+'}\u00A0\u00A0"`,
      background: '#58D573',
      color: 'white',
      position: 'absolute',
      bottom: '0%',
      right: '0%',
      fontSize: '60%',
      whiteSpace: 'pre',
      borderRadius: '20px',
      zIndex: 10,
      padding: '15% .5px 1% .5px',
      textAlign: 'center',
      verticleAlign: 'center',
      transform: (props) => `${props < 1000 ? 'translateX(72%)' : 'translateX(80%)'}`,
      border: '.5px solid white',
    },
  },
}));

const ShowEmoji = ({ item }) => {
  const classes = styles({ count: item[1] });

  const returnEmoji = () => {
    switch (item[0]) {
      case 'heart':
        return (
          <div className={classes.container}>
            <Icon icon={emojiHeartEyesFill} style={{ color: '#58D573' }} height="1.3em" />
          </div>
        );
      case 'Happy':
        return (
          <div className={classes.container}>
            <Icon icon={emojiSmileFill} style={{ color: '#58D573' }} height="1.3em" />
          </div>
        );
      case 'Laugh':
        return (
          <div className={classes.container}>
            <Icon icon={emojiLaughingFill} style={{ color: '#58D573' }} height="1.3em" />
          </div>
        );
      case 'Sad':
        return (
          <div className={classes.container}>
            <Icon icon={emojiFrownFill} style={{ color: '#58D573' }} height="1.3em" />
          </div>
        );
      case 'Angry':
        return (
          <div className={classes.container}>
            <Icon icon={emojiAngryFill} style={{ color: '#58D573' }} height="1.3em" />
          </div>
        );
      default:
        break;
    }
  };

  return <div>{item && returnEmoji()}</div>;
};

export default ShowEmoji;
