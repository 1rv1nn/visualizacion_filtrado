/**
 * Filtra un array de personas según los criterios especificados
 * @param {Array} people - Array de personas
 * @param {Object} filters - Objeto con los filtros a aplicar
 * @returns {Array} - Array filtrado de personas
 */
export const filterPeople = (people, filters = {}) => {
  const {
    searchText,
    role,
    minExperience,
    hasRFC,
    isMigrant
  } = filters;

  return people.filter(person => {
    // Filtro de búsqueda de texto (busca en nombre y email)
    if (searchText) {
      const search = searchText.toLowerCase();
      const matchesName = person.name.toLowerCase().includes(search);
      const matchesEmail = person.email.toLowerCase().includes(search);
      if (!matchesName && !matchesEmail) return false;
    }

    // Filtro por role
    if (role && person.role !== role) {
      return false;
    }

    // Filtro por experiencia mínima
    if (minExperience !== undefined && person.experienceYears < minExperience) {
      return false;
    }

    // Filtro por RFC
    if (hasRFC !== undefined && person.hasRFC !== hasRFC) {
      return false;
    }

    // Filtro por Migrante
    if (isMigrant !== undefined && person.isMigrant !== isMigrant) {
      return false;
    }

    return true;
  });
};