import './App.css';
import Home from "./Components/Home";
import DataProvider from './Context/DataProvider';
function App() {
  return (
    <div className="App flex-center">
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}

export default App;
