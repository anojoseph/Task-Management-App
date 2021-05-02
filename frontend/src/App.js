
import './App.css';
import TodoList from './TodoList'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList />
      <Footer/>
    </div>
  );
}

export default App;
