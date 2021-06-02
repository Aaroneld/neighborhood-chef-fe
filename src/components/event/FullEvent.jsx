import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { EVENT_BY_ID } from '../../graphql/events/event-queries';
import Card from '@material-ui/core/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addFocusedEventInfo, toggleModal } from '../../utilities/actions';
import EventDetails from './event-details/EventDetails';
import ShareCard from './share-card/ShareCard';
import CommentsCard from './comments-card/CommentsCard';
import Spinner from '../shared/spinner/Spinner';
import { fullEventStyles } from './FullEvent.styles';
import ViewEventRelatedUsersModal from './view-event-related-users-modal';

const FullEvent = ({ match }) => {
  const eventId = parseInt(match.params.id);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const styles = fullEventStyles();
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventId) {
      setLoading(true);
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(EVENT_BY_ID),
          variables: {
            queryParams: {
              id: eventId,
            },
          },
        },
      }).then(
        (res) => {
          setLoading(false);
          setEvent(res.data.data.Events[0]);
          dispatch(
            addFocusedEventInfo({
              id: res.data.data.Events[0].id,
              title: res.data.data.Events[0].title,
              eventuser: res.data.data.Events[0].User,
              attending:
                res.data.data.Events[0].EventUsers.attending.length > 0
                  ? res.data.data.Events[0].EventUsers.attending
                  : [],
              maybeGoing:
                res.data.data.Events[0].EventUsers.maybeGoing.length > 0
                  ? res.data.data.Events[0].EventUsers.maybeGoing
                  : [],
              invited:
                res.data.data.Events[0].EventUsers.invited.length > 0
                  ? res.data.data.Events[0].EventUsers.invited
                  : [],
            })
          );
        },
        (err) => {
          console.dir(err);
          setLoading(false);
        }
      );
    }
    // eslint-disable-next-line
  }, [eventId]);

  useEffect(() => {
    return () => {
      dispatch(toggleModal(true));
    };
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div
        onClick={() => {
          if (showModal) {
            dispatch(toggleModal(true));
          }
        }}
      >
        {event && (
          <>
            {showModal && <ViewEventRelatedUsersModal />}
            <Card className={styles.singleEventContainer}>
              <div className={styles.singleEventBox}>
                <>
                  <EventDetails event={event} />
                  <div className={styles.singleEventRightColumn}>
                    <div className={styles.singleEventTopRow}>
                      <ShareCard />
                    </div>
                    <div className={styles.singleEventCommentCard}>
                      <CommentsCard eventId={eventId} initialComments={event.Comments} />
                    </div>
                  </div>
                </>
              </div>
            </Card>
          </>
        )}
      </div>
    );
  }
};

export default FullEvent;
