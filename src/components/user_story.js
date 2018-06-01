import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { moveStory } from '../actions/index';

class UserStory extends React.Component {
   render() {
      return (
         <div id={this.props.story.index} className={`story-item ${this.props.story.status} ${this.props.story.type}`}>
            <h4>{this.props.story.name}</h4>
            <span>{this.props.story.desc}</span>
            <button className="button button-left" onClick={() => this.props.moveStory(this.props.parent, this.props.story.id, 'left')}></button>
            <button className="button button-right" onClick={() => this.props.moveStory(this.props.parent, this.props.story.id, 'right')}></button>
         </div>
      );
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ moveStory }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserStory);