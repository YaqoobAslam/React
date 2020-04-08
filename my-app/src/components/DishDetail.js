import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card >
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
    const dish = this.props.selectedDish    

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;


