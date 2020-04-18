import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul class="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p> {comment.author}, {new Intl.DateTimeFormat("en-US", {   year: "numeric",   month: "short",   day: "2-digit",}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const dish = this.props.dish;
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}
export default DishDetail;
