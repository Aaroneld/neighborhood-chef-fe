import gql from 'graphql-tag';

export const UPDATE_USER = gql`
  mutation inputUser($input: UserInput!) {
    inputUser(input: $input) {
      id
    }
  }
`;

export const ADD_FAVORITE_EVENT = gql`
  mutation favoriteEventInput($favoriteEvent: FavoriteEventInput!) {
    favoriteEventInput(favoriteEvent: $favoriteEvent) {
      id
    }
  }
`;

export const REMOVE_FAVORITE_EVENT = gql`
  mutation removeFavoriteEvent($favoriteEvent: FavoriteEventInput!) {
    removeFavoriteEvent(favoriteEvent: $favoriteEvent) {
      id
    }
  }
`;
