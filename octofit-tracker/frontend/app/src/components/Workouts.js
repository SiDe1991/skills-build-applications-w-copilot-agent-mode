import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts endpoint:', endpoint);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="h4 mb-0">Allenamenti</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-warning">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {workouts.length === 0 ? (
              <tr><td colSpan="4" className="text-center">Nessun allenamento trovato</td></tr>
            ) : (
              workouts.map((workout, idx) => (
                <tr key={workout.id || idx}>
                  <td>{workout.id || idx + 1}</td>
                  <td>{workout.name || JSON.stringify(workout)}</td>
                  <td>{workout.type || '-'}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-warning">Dettagli</button>
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

export default Workouts;
