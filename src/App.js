import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainers from './components/IceCreamContaniner'
import ItemContainer from './components/ItemContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <IceCreamContainers />
      </div>
    </Provider>
  );
}

export default App;
