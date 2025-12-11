import React from 'react';

const List = ({ people }) => {
  // Mostrar mensaje si no hay personas
  if (!people || people.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-xl">No people found</p>
      </div>
    );
  }

  return (
    <div className="people-list">
      {people.map(person => (
        <div key={person.id} className="person-card" data-testid="person-card">
          <h3>{person.name}</h3>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>Role:</strong> {person.role}</p>
          <p><strong>Experience:</strong> {person.experienceYears} years</p>
          <p><strong>RFC:</strong> {person.hasRFC ? 'Yes' : 'No'}</p>
          <p><strong>Migrant:</strong> {person.isMigrant ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default List;