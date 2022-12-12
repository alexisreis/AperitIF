import React, { Component } from 'react';
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
            <img src={this.props.img}/>
     		<p>{this.props.name}</p>
     		</div>
    );
  }
}


export default CocktailCard;