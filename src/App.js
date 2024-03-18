import './App.scss';
import './Components/Global/_type.scss';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
