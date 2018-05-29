import { FETCH_BOARD, ADD_STORY } from '../actions/index';

const defaultState = 
   [{
      order: 0,
      title: 'backlog',
      tickets: [
         {
            id: '13',
            name: 'Integration',
            desc: 'The integration of this provider',
            status: 'New',
            type: 'user-story',
         },
         {
            id: '15',
            name: 'provider',
            desc: 'The integration of this provider',
            status: 'New',
            type: 'defect',
         }
      ]
   },
   {
      order: 1,
      title: 'nolog',
      tickets: [
         {
            id: '13',
            name: 'Integration',
            desc: 'The integration of this provider',
            status: 'New',
            type: 'user-story',
         }
      ]
   }]

export default function(state = defaultState, action) {
   switch (action.type) {
      case FETCH_BOARD:
            return state;
   
      case ADD_STORY:
            /*
            action.payload = {
                  ticket: [{...}],
                  board: title
            }
            */
           console.log(action.payload);
      //      const payload = state.map(i => {
      //            if(i.title === action.payload.board) {
      //                   return i.tickets.concat(action.payload.ticket);
      //            }
      //            return i;
      //      });
      //       return payload;
            return state;

      default:
         return state;
   }
}