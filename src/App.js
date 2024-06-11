
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { News } from './Components/news';
import { News1 } from './Components/news1';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Data List</h1>
      <News/>
      {/* <News1/> */}
      
    </div>
    </Provider>
  );
}

export default App;
