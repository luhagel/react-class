import React from 'react';

export default class AwesomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      likesCount: 0,
    };
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    this.setState({likesCount: this.state.likesCount + 1});
  }

  render() {
    return (
      <div>
        Likes: <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like</button></div>
      </div>
    );
  }
}
