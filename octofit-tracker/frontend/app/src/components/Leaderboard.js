import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaders(data.results || data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-success text-white">
        <h2 className="h4 mb-0">Classifica</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Punteggio</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {leaders.length === 0 ? (
              <tr><td colSpan="4" className="text-center">Nessun leader trovato</td></tr>
            ) : (
              leaders.map((leader, idx) => (
                <tr key={leader.id || idx}>
                  <td>{leader.id || idx + 1}</td>
                  <td>{leader.name || JSON.stringify(leader)}</td>
                  <td>{leader.score || leader.points || '-'}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success">Dettagli</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
