import './App.css';
import Message from './message';

function App() {
  const name = "Hello Olga!"
  return (
   <div>
    <Message name={name} />
   </div>
  );
}

export default App;
