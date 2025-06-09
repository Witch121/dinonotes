import '../styles/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNotes from './CreateNote'
import PreviousNotes from './PreviousNotes';
import Home from './Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <div className="App hero bg-base-200 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/previous-notes" element={<PreviousNotes />} />
            <Route path="/create-notes" element={<CreateNotes />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
