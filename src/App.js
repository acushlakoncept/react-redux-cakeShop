import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainers from './components/IceCreamContaniner'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainers />
      </div>
    </Provider>
  );
}

export default App;
