import './App.css';
import Message from './message';

function App(props) {
  const name = "Hello Olga!"
  return (
   <div>
    <Message name={name} />
   </div>
  );
}

export default App;
