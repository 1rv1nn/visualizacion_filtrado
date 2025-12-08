import './App.css';
import { useState } from 'react';
import List from './components/list'
import { filterPeople } from './utils/filterPeople';
import candidatos from './data/candidatos_sample_para_business_case.json';

function App() {
  const [filters, setFilters] = useState({});
  const filteredPeople = filterPeople(candidatos, filters);

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

      <List people={filteredPeople} />
    </div>
  );
}

export default App;
