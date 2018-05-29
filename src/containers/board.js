import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddPost from '../components/add_story';
import UserStory from '../components/user_story';


class Board extends React.Component {
   componentDidMount() {
      this.props.fetchBoard();
   }

   renderBoard(item) {
      return (
         <div key={item.order} className="story-list">
            <h3 className="story-header">{item.title}</h3>
            <div className="story-body">
               {item.tickets.map(story => {
                  return (<UserStory key={story.id} props={story}  />);
               })}
               <AddPost title={item.title} />
            </div>
         </div>
      );
   }

   render() {
      return (
         <div>
            {this.props.board.map(item => this.renderBoard(item))}
         </div>
      );
   }

}

function mapStateToProps(state) {
   return { 
      board: state.board
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ 
      fetchBoard
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);