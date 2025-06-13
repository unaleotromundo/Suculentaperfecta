/**
 * Genera un nombre de archivo seguro para una foto de planta
 * a partir del nombre de la planta.
 * Ejemplo: "Graptosedum 'California Sunset'" → "graptosedum_california_sunset.jpg"
 */
function nombreArchivoSeguro(nombrePlanta, extension = "jpg") {
  return (
    nombrePlanta
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita tildes
      .replace(/['"“”‘’]/g, "") // quita comillas
      .replace(/[^a-z0-9]+/g, "_") // reemplaza todo lo que no es letra/numero por guión bajo
      .replace(/^_+|_+$/g, "") // quita guiones bajos al principio/final
    + "." + extension
  );
}

// Ejemplo de uso con un array de plantas:
function mostrarResultados(resultados) {
  const cont = document.getElementById('resultados');
  cont.innerHTML = '';
  if (resultados.length === 0) {
    cont.textContent = 'No se encontraron suculentas que coincidan.';
    return;
  }
  resultados.forEach(planta => {
    const nombreArchivo = nombreArchivoSeguro(planta.name); // genera el nombre seguro
    const rutaFoto = 'imagenes/' + nombreArchivo; // ajusta la carpeta según corresponda
    const div = document.createElement('div');
    div.className = 'planta';
    div.innerHTML = `
      <h2>${planta.name}</h2>
      <img src="${rutaFoto}" alt="${planta.name}">
      <p>${planta.description}</p>
    `;
    cont.appendChild(div);
  });
}