import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  }

  handleDislike() {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  }

  render() {
    return (
      <div className="content-rating">
        <p>Text Content Rating</p>
        <div className="rating-buttons">
          <button className="like-btn" onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-btn" onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p>Total Ratings: {this.state.totalRatings}</p>
      </div>
    );
  }
}

export default ContentRating;
