import React from "react";
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainers(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy cakes</button>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainers)