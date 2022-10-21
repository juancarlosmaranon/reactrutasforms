import './App.css';
import Collatz from './components/Collatz';
import FormSimple from './components/FormSimple';
import TablaMultiplicar from './components/TablaMultiplicar';
import TablaMultiplicarPlus from './components/TablaMultiplicarPlus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormSimple/>
        <Collatz/>
        <TablaMultiplicar/>
        <TablaMultiplicarPlus/>
      </header>
    </div>
  );
}

export default App;
