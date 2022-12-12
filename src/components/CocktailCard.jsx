import React, { Component } from 'react';
import defaultCocktail from "../img/cocktail.jpg";
import './CocktailCard.css'

/*

function CocktailCard(props) {
    let name = props.name;
    let imgUrl = props.imgUrl;

    console.log("HEY IM IN");
	return (

		<div id="divCard">
		    <p>AAAAAAAH</p>
		</div>
	)
}
 */



class CocktailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
            <div id="divCard">
            <img src={this.props.img} ref={img => this.img = img} onError={(e) =>
            (e.target.onerror = null)(
              (e.target.src =
                defaultCocktail)
            )
          }/>
     		<div><p>{this.props.name}</p></div>
     		</div>
    );
  }

}


export default CocktailCard;