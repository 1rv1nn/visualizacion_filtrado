const Loading = ({ isEmpty = false, error = null }) => {
  if (error) {
    return (
      <div className="loading error-state">
        <p className="error-icon">⚠️</p>
        <p className="error-message">Error inesperado</p>
        <p className="error-detail">{error}</p>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="loading">
        <p>No se encontraron resultados</p>
      </div>
    );
  }

  return (
    <div className="loading">
      <div className="spinner" aria-label="loading" />
      <p>Cargando resultados...</p>
    </div>
  );
};

export default Loading;
