import {
  CHANGE_MONTH,
  GET_EVENTS_SUCCESS,
  CREATE_EVENT_SUCCESS,
  FILTER_USERS_SUCCESS,
  DELETE_INVITATION_SUCCESS,
  RESET_INVITE_SUCCESS,
  SAVE_USER,
  CHANGE_STATUS_FOR_SINGLE_EVENT,
  DELETE_EVENT,
} from '../actions';

const initialDate = new Date();

const initialState = {
  user: {},
  loginCredentials: {},
  page: 1,
  activeEvent: null,
  selectedMonth: initialDate.setDate(15),
  neighborhoodName: 'My Neighborhood',
  errors: [],
  isGettingEvents: false,
  update: false,
  eventList: [],
  userList: [],
  inviteList: [],
  savedUserUpdateInfo: {},
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_STATUS_FOR_SINGLE_EVENT:
      const mapCallback = (event) => {
        if (payload.event_id === event.id) {
          if (payload.status === 'NOT_GOING' || payload.status === 'MAYBE_GOING')
            event.EventUsers.attending = event.EventUsers.attending.filter(
              (user) => user.id !== state.user.id
            );
          else if (payload.status === 'GOING') {
            event.EventUsers.attending.push(state.user);
          }
          return { ...event, status: payload.status };
        } else return event;
      };
      return {
        ...state,
        user: {
          ...state.user,
          UserEvents: {
            ...state.user.UserEvents,
            local: state.user.UserEvents.local.map(mapCallback),
            owned: state.user.UserEvents.owned.map(mapCallback),
            invited: state.user.UserEvents.invited.map(mapCallback),
            attending: state.user.UserEvents.attending.map(mapCallback),
          },
        },
      };

    case SAVE_USER:
      return {
        ...state,
        user: payload,
      };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        isGettingEvents: false,
        errors: [],
        eventList: payload,
      };

    case CHANGE_MONTH:
      const tempDate = new Date(state.selectedMonth);
      const month = tempDate.getMonth();
      const year = tempDate.getUTCFullYear();
      if (payload === 'previous') {
        tempDate.setMonth(month === 0 ? 11 : month - 1);
        if (month === 0) tempDate.setFullYear(year - 1);
      } else {
        tempDate.setMonth(month === 11 ? 0 : month + 1);
        if (month === 11) tempDate.setFullYear(year + 1);
      }
      return {
        ...state,
        selectedMonth: tempDate,
      };

    case CREATE_EVENT_SUCCESS:
      const filteredEvents = state.user.UserEvents.owned.filter((event) => event.id !== payload.id);

      return {
        ...state,
        user: {
          ...state.user,
          UserEvents: {
            ...state.user.UserEvents,
            owned: [
              ...filteredEvents,
              {
                ...payload,
                User: {
                  ...state.user,
                },
                Comments: [],
                EventUsers: {
                  attending: [],
                  invited: [],
                },
              },
            ],
          },
        },
      };

    case DELETE_INVITATION_SUCCESS:
      return {
        ...state,
        inviteList: payload,
      };
    case FILTER_USERS_SUCCESS:
      return {
        ...state,
        userList: payload,
      };
    case RESET_INVITE_SUCCESS:
      return {
        ...state,
        inviteList: payload,
      };
    case DELETE_EVENT:
      console.log(state.eventList);
      return {
        ...state,
        eventList: state.eventList.filter((event) => event.id !== payload),
        user: {
          ...state.user,
          UserEvents: {
            ...state.user.UserEvents,
            owned: state.user.UserEvents.owned.filter((event) => event.id !== payload),
            favorited: state.user.UserEvents.favorited.filter((id) => id !== Number(payload)),
            attending: state.user.UserEvents.attending.filter((event) => event.id !== payload),
            invited: state.user.UserEvents.invited.filter((event) => event.id !== payload),
            local: state.user.UserEvents.local.filter((event) => event.id !== payload),
          },
        },
      };
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
