import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddPost extends React.Component {
   //props board title;
   constructor(props) {
      super(props);
      this.state = { 
         storyName: '',
         storyDesc: '',
         storyType: ''
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onTextareaChange = this.onTextareaChange.bind(this);
      this.onSelectChange = this.onSelectChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onInputChange(event) {
      this.setState({ storyName: event.target.value });
   }

   onTextareaChange(event) {
      this.setState({ storyDesc: event.target.value });
   }

   onSelectChange(event) {
      this.setState({ storyType: event.target.value });
   }

   onSubmit(event) {
      event.preventDefault();

      this.props.addStory(this.state, this.props.title);
      
      this.setState({ storyType: '' });
      this.setState({ storyDesc: '' });
      this.setState({ storyName: '' });
   }

   render() {
   
      return (
            <form className="story-form" onSubmit={this.onSubmit}>
               <select value={this.state.storyType} onChange={this.onSelectChange}>
                  <option value="user-story">User story</option>
                  <option value="defect">Defect</option>
                  <option value="task">Task</option>
                  <option value="feature">Feature</option>
               </select>
               <input type="text" name="name" onChange={this.onInputChange} />
               <textarea name="desc" onChange={this.onTextareaChange} />
               <input type="submit" name="submit" value="Submit" />
            </form>
      );
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ 
      addStory
   }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddPost);