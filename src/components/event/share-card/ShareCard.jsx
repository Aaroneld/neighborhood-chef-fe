import React, { useState } from 'react';

//style imports
import { cardStyles } from '../../../styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkIcon from '@material-ui/icons/Link';

import IconButton from '@material-ui/core/IconButton';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useLocation } from 'react-router-dom';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  TumblrShareButton,
} from 'react-share';

const shareButtons = [
  {
    name: 'Facebook',
    icon: FacebookIcon,
  },
  {
    name: 'Twitter',
    icon: TwitterIcon,
  },
  {
    name: 'Text',
    icon: MessageIcon,
  },
  {
    name: 'Email',
    icon: EmailIcon,
  },
  {
    name: 'Pinterest',
    icon: PinterestIcon,
  },
];

const Components = {
  Facebook: FacebookShareButton,
  Twitter: TwitterShareButton,
  Text: WhatsappShareButton,
  Email: EmailShareButton,
  Tumblr: TumblrShareButton,
  Pinterest: PinterestShareButton,
};

const ParticipantCard = () => {
  const classes = cardStyles();
  const location = useLocation();
  const url = `https://ourneighborhoodchef.com${location.pathname}`;
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Card className={`${classes.root} ${classes.share}`}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {shareButtons.map((b) => {
              const TagName = Components[b.name];
              return (
                <span key={b.name} title={b.name} className={cardStyles({ name: b.name }).shareButtons}>
                  <TagName url={url} hashtag="#neighborhoodchef" key={b.name}>
                    <b.icon fontSize="large" />
                  </TagName>
                </span>
              );
            })}
          </div>

          <div className="share-link-container">
            <Typography variant="caption">Event Link:</Typography>
            <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
              {copied ? (
                <input disabled placeholder="Copied!" />
              ) : (
                <input placeholder={window.location.href} />
              )}
            </CopyToClipboard>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ParticipantCard;
