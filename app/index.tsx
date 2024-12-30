import store from "./redux/store"
import { Provider } from "react-redux";
import Screen from "./Screen";

const App = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

export default App
