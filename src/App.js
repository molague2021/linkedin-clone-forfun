import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/*Header */}
      <Header />
      {/*App Body */}
      {/* Sidebar*/}
      <div className="app__body">
        <Sidebar />
      </div>
      {/*Feed*/}
      {/*Widgets*/}
    </div>
  );
}

export default App;
