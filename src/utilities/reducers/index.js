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
  CHANGE_PAGE,
  ADD_FOCUSED_EVENT_INFO,
  UPDATE_FOCUSED_EVENT_INFO,
  UPDATE_USER,
  UPDATE_FAVORITE_EVENTS,
  SHOW_MODAL,
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
  focusedEventInfo: {},
  showModal: false,
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
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };
    case ADD_FOCUSED_EVENT_INFO:
      return {
        ...state,
        focusedEventInfo: payload,
      };
    case UPDATE_FOCUSED_EVENT_INFO:
      return {
        ...state,
        focusedEventInfo: payload,
      };
    case UPDATE_USER: {
      const callback = (e) => {
        if (e.User.id === payload.id) {
          e.User = payload;
        }
        e.EventUsers = {
          attending: e.EventUsers.attending.map((u) => {
            if (u.id === payload.id) {
              return payload;
            }
            return u;
          }),
          invited: e.EventUsers.invited.map((u) => {
            if (u.id === payload.id) {
              return payload;
            }
            return u;
          }),
        };
        return e;
      };
      return {
        ...state,
        user: {
          ...payload,
          UserEvents: {
            attending: payload.UserEvents.attending.map(callback),
            owned: payload.UserEvents.owned.map(callback),
            local: payload.UserEvents.local.map(callback),
            invited: payload.UserEvents.invited.map(callback),
            favorited: payload.UserEvents.favorited,
          },
        },
      };
    }
    case UPDATE_FAVORITE_EVENTS: {
      return {
        ...state,
        user: {
          ...state.user,
          UserEvents: {
            ...state.user.UserEvents,
            favorited: payload,
          },
        },
      };
    }
    case SHOW_MODAL: {
      if (!payload) {
        return {
          ...state,
          showModal: !state.showModal,
        };
      } else {
        return {
          ...state,
          showModal: false,
        };
      }
    }
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
