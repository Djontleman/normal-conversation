import './App.css';
import LineContainer from './containers/LineContainer';

const App = () => {
  return (
    <div className="App">
      <p>completely normal conversation generator</p>
      <LineContainer number={1} />
      <LineContainer number={2} />
      <LineContainer number={1} />
    </div>
  );
}

export default App;
