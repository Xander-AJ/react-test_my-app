
import './App.css';
import { Button } from './components/button';
import { Navbar } from './components/navbar';
import { Ticker } from './components/Ticker';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen gap-4">
        <Button text="Click Me" />
        <Ticker/>
      </div>
    </>

  );
}

export default App;
