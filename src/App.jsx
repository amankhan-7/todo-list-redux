import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Editable from './components/Editable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/addtodo" element={<AddTodo/>} />
        <Route path="/editable" element={<Editable/>} />
      </Routes>
    </Router>
  );
}

export default App;
