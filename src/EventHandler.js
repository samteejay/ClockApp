import React from 'react';

class EventHandler extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          foo: 'Click me'
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
        foo: 'bar'
      });

      console.log(this);
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.foo}
        </button>
      );
    }
  }
  
export default EventHandler;
  