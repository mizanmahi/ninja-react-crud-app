import { connect } from "react-redux";

import { increaseCounter, decreaseCount } from "./redux/counter-action";

import "./App.css";

import { increament } from "./redux/counter-sagas";

function App(props) {
   const { increaseCount, decreaseCount } = props;
   return (
      <div className="App">
         <div className="container">
            <div className="counter">
               <span>Count Is {props.count}</span>
            </div>
            <button type="button" onClick={increaseCount}>
               Increase
            </button>
            <button type="button" onClick={() => decreaseCount()}>
               Decrease
            </button>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      count: state.counter.count,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      increaseCount: () => dispatch(increaseCounter()),
      decreaseCount: () => dispatch(decreaseCount()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
