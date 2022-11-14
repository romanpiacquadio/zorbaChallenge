import './App.css';
import Layout from './pages/Layout';
import store from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
