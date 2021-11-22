import './App.css';
import LineContainer from './containers/LineContainer';

const App = () => {
  return (
    <div className="App">
      <p>completely normal conversation generator</p>
      <LineContainer />
      <LineContainer />
      <LineContainer />
    </div>
  );
}

export default App;
