import React, { useState } from "react";
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakecontainer(props) {
    const [number, setNumber] = useState()
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy { number } cakes</button>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakecontainer)