import './App.scss';
import Detail from './components/Detail/Detail';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">

      <Sidebar/>      

      <Main/>

      <Detail/>

    </div>
  );
}

export default App;
