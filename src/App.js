import './App.css';
import Users from './components/Users';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>Prueba de despliegue</h2>
      </header>
      <div>
        <Users />
      </div>
      <Footer />
    </div>
  );
}

export default App;
