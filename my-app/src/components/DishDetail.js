import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {

   componentDidMount(){
    console.log('DishDetail Component componentDidMount Invoked');
  }
  componentDidUpdate(){
        console.log('DishDetail Component componentDidUpdate Invoked');
  }
  renderComments(comments) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul class="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {   year: "numeric",   month: "short",   day: "2-digit",}).format(new Date(Date.parse(comment.date)))}</p>
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
        <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
   console.log('DishDetail  render Invoked');
    if(this.props.dish !=null)
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
    else 
    return(
      <div></div>
    )
  }
}
export default DishDetail;
