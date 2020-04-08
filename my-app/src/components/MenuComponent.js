import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import DishDetail from "./DishDetail";

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
    
  }
 
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  // renderDish(dish) {
  //   if (dish != null) {
  //     return (
  //       <Card>
  //         <CardImg width="100%" object src={dish.image}alt={dish.name} ></CardImg>
  //         <CardBody>
  //           <CardTitle heading> {dish.name} </CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   } else {
  //     return <div></div>;
  //   }
  // }


  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle> {dish.name} </CardTitle>
              {/* <CardTitle>{}</CardTitle> */}
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div>
      <div className="container">
        <div className="row">{menu}</div>
        {/* <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div> */}
      </div>
       <DishDetail selectedDish={this.state.selectedDish}></DishDetail>
       </div>
    );
  }
}

export default Menu;
