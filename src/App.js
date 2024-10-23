import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Kellton" />
    <div className="container">
        <h1>Enter the text here please:</h1>
        <TextForm />
    </div>
    
    </>
  );
}

export default App;
