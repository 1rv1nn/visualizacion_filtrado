import { filterPeople } from './filterPeople';

describe('filter utility', () => {
  const mockPeople = [
   {"id":"c1","name":"Ana Rodríguez","email":"ana.rodriguez@example.com","role":"ventas","experienceYears":2,"hasRFC":true,"isMigrant":false,"createdAt":"2024-10-10T15:23:00Z"},
   {"id":"c2","name":"Luis Hernández","email":"luis.hdz@example.com","role":"atención al cliente","experienceYears":1,"hasRFC":false,"isMigrant":true,"createdAt":"2024-11-02T11:10:00Z"},
    {"id":"c17","name":"Julieta Ramos","email":"jramos@example.com","role":"atención al cliente","experienceYears":2,"hasRFC":false,"isMigrant":true,"createdAt":"2024-12-29T17:56:00Z"},
  ];

  // 🔴 RED - Test 1: Sin filtros devuelve todas las personas
  test('returns all people when no filters applied', () => {
    const result = filterPeople(mockPeople, {});
    expect(result.length).toBe(3);
  });

  // 🔴 RED - Test 2: Filtrar por nombre
  test('filters by name (case insensitive)', () => {
    const result = filterPeople(mockPeople, { searchText: 'ana' });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Ana Rodríguez');
  });

  // 🔴 RED - Test 3: Filtrar por role
  test('filters by role', () => {
    const result = filterPeople(mockPeople, { role: 'atención al cliente' });
    expect(result.length).toBe(2);
    expect(result.map(p => p.name)).toContain('Luis Hernández');
    expect(result.map(p => p.name)).toContain('Julieta Ramos');
  });

  // 🔴 RED - Test 4: Filtrar por experiencia mínima
  test('filters by minimum experience years', () => {
    const result = filterPeople(mockPeople, { minExperience: 2 });
    expect(result.length).toBe(2);
    expect(result.map(p => p.name)).toContain('Ana Rodríguez');
    expect(result.map(p => p.name)).toContain('Julieta Ramos');
  });

  // 🔴 RED - Test 5: Filtrar por hasRFC
  test('filters by hasRFC', () => {
    const result = filterPeople(mockPeople, { hasRFC: true });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Ana Rodríguez');
  });

  // 🔴 RED - Test 6: Filtrar por isMigrant
  test('filters by isMigrant', () => {
    const result = filterPeople(mockPeople, { isMigrant: true });
    expect(result.length).toBe(2);
    expect(result.map(p => p.name)).toContain('Luis Hernández');
    expect(result.map(p => p.name)).toContain('Julieta Ramos');
  });

  // 🔴 RED - Test 7: Múltiples filtros simultáneos
  test('applies multiple filters simultaneously', () => {
    const result = filterPeople(mockPeople, {
      hasRFC: true,
      minExperience: 2
    });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Ana Rodríguez');
  });

  // 🔴 RED - Test 8: Búsqueda por email
  test('searches in email field', () => {
    const result = filterPeople(mockPeople, { searchText: 'luis.hdz' });
    expect(result.length).toBe(1);
    expect(result[0].email).toBe('luis.hdz@example.com');
  });
});