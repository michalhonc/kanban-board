export const FETCH_BOARD = 'FETCH_BOARD';
export const ADD_STORY = 'ADD_STORY';

export function fetchBoard() {
   return {
      type: FETCH_BOARD
   };
}

export function addStory(request) {
   return {
      type: ADD_STORY,
      payload: request
   };
}