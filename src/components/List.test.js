import { render, screen } from '@testing-library/react';
import List from './List';

describe('List Component', () => {
  const mockPeople = [
 {"id":"c1","name":"Ana Rodríguez","email":"ana.rodriguez@example.com","role":"ventas","experienceYears":2,"hasRFC":true,"isMigrant":false,"createdAt":"2024-10-10T15:23:00Z"},
 {"id":"c2","name":"Luis Hernández","email":"luis.hdz@example.com","role":"atención al cliente","experienceYears":1,"hasRFC":false,"isMigrant":true,"createdAt":"2024-11-02T11:10:00Z"}
  ];

  // 🔴 RED - Test 1: Renderizar la lista vacía
  test('renders empty state when no people provided', () => {
    render(<List people={[]} />);
    expect(screen.getByText(/no people found/i)).toBeInTheDocument();
  });

  // 🔴 RED - Test 2: Renderizar lista con personas
  test('renders list of people', () => {
    render(<List people={mockPeople} />);
    expect(screen.getByText('Ana Rodríguez')).toBeInTheDocument();
    expect(screen.getByText('Luis Hernández')).toBeInTheDocument();
  });

  // 🔴 RED - Test 3: Mostrar información de cada persona
  test('displays person details correctly', () => {
    render(<List people={mockPeople} />);
    expect(screen.getByText('ventas')).toBeInTheDocument();
    expect(screen.getByText('ana.rodriguez@example.com')).toBeInTheDocument();
    expect(screen.getByText(/2 years/i)).toBeInTheDocument();
  });

  // 🔴 RED - Test 4: Mostrar badges para RFC y Migrante
  test('displays RFC and Migrant badges', () => {
    render(<List people={mockPeople} />);
    const rfcBadges = screen.getAllByText(/RFC/i);
    expect(rfcBadges.length).toBeGreaterThan(0);
    
    const migrantBadge = screen.getByText(/Migrant/i);
    expect(migrantBadge).toBeInTheDocument();
  });

  // 🔴 RED - Test 5: Renderizar el número correcto de personas
  test('renders correct number of people', () => {
    const { container } = render(<List people={mockPeople} />);
    const peopleCards = container.querySelectorAll('[data-testid="person-card"]');
    expect(peopleCards.length).toBe(2);
  });
});