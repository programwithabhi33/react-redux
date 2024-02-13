import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <h2>Deposit/Withdraw Money</h2>
        <Shop/>
      </div>
    </>
  );
}

export default App;
