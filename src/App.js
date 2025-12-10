import './App.css';
import { useEffect, useState } from 'react';
import List from './components/list';
import Loading from './components/Loading';
import { filterPeople } from './utils/filterPeople';
import candidatos from './data/candidatos_sample_para_business_case.json';

function App() {
  const [filters, setFilters] = useState({});
  const [filteredPeople, setFilteredPeople] = useState(candidatos);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce simple para simular carga durante el filtrado
  useEffect(() => {
    setLoading(true);
    setError(null);
    const handler = setTimeout(() => {
      try {
        const result = filterPeople(candidatos, filters);
        setFilteredPeople(result);
      } catch (err) {
        setError(err.message || 'Error al filtrar resultados');
        setFilteredPeople([]);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(handler);
  }, [filters]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Filtrado de Candidatos</h1>
        
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name or email..."
            onChange={(e) => setFilters({ ...filters, searchText: e.target.value })}
          />
          
          <select 
            onChange={(e) => setFilters({ ...filters, role: e.target.value || undefined })}
          >
            <option value="">All Roles</option>
            <option value="ventas">Ventas</option>
            <option value="atención al cliente">Atención al Cliente</option>
            <option value="soporte técnico">Soporte Técnico</option>
          </select>

          <input
            type="number"
            placeholder="Min Experience Years"
            onChange={(e) => setFilters({ ...filters, minExperience: e.target.value ? parseInt(e.target.value) : undefined })}
          />

          <label>
            <input
              type="checkbox"
              onChange={(e) => setFilters({ ...filters, hasRFC: e.target.checked || undefined })}
            />
            Has RFC
          </label>

          <label>
            <input
              type="checkbox"
              onChange={(e) => setFilters({ ...filters, isMigrant: e.target.checked || undefined })}
            />
            Is Migrant
          </label>
        </div>
        <p>Total: {filteredPeople.length} candidates</p>
      </header>

      {error ? <Loading error={error} /> : loading ? <Loading /> : filteredPeople.length === 0 ? <Loading isEmpty /> : <List people={filteredPeople} />}
    </div>
  );
}

export default App;
