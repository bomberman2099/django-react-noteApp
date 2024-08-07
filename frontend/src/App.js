import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import Header from './components/header';
import NoteListPage from './pages/noteListPage';
import NotePage from './pages/NotePage';
function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header/>
          <Routes>
            <Route path="/" exact element={<NoteListPage/>} />
            <Route path="/note/:id" exact element={<NotePage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
