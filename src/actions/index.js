export const FETCH_BOARD = 'FETCH_BOARD';
export const ADD_STORY = 'ADD_STORY';
export const ADD_BOARD = 'ADD_BOARD';
export const MOVE_STORY = 'MOVE_STORY';

export function fetchBoard() {
   return {
      type: FETCH_BOARD
   };
}

export function addStory(request, parentTitle) {
   return {
      type: ADD_STORY,
      payload: {
         request,
         title: parentTitle
      }
   };
}

export function addBoard(title) {
   return {
      type: ADD_BOARD,
      payload: title
   };
}

export function moveStory(parent, id, type) {
   return {
      type: MOVE_STORY,
      payload: {
         id,
         type,
         parent
      }
   };
}
