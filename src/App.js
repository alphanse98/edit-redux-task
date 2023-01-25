// import "./App.css";
import Home from "./component/Home";
import { store } from "./component/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
