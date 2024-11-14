import { Provider } from "react-redux"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Home />
      </div>
    </Provider>
  )
}

export default App
