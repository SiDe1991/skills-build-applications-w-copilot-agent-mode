import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
              <img src={logo} alt="Octofit Logo" className="App-logo" />
              Octofit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/activities">Attività</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Classifica</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Squadre</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Utenti</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Allenamenti</Link></li>
              </ul>
              <span className="navbar-text text-light">Fitness & Competizione</span>
            </div>
          </div>
        </nav>
        <div className="mb-4">
          <h1 className="display-5 fw-bold text-center text-primary">Octofit Tracker</h1>
        </div>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="text-center"><h2 className="fw-bold">Benvenuto in Octofit Tracker!</h2><p className="lead">Scegli una sezione dal menu per iniziare.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
