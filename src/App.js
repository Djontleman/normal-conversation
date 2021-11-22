import './App.css';
import Button from './components/Button';
import LineContainer from './containers/LineContainer';

const App = () => {


  return (
    <div className="App">
      <p className="title">completely normal conversation generator</p>
      <LineContainer number={1} />
      <LineContainer number={2} />
      <LineContainer number={1} />
      <Button />
    </div>
  );
}

export default App;
