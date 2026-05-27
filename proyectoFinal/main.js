/* ============================================================
   SALUD QUINDÍO — Scripts
   Proyecto: Método de los 7 Pasos del Ingeniero
   Autores: Yoan Sebastian Bermudez Martinez
            Santiago Cortez Valencia
   ============================================================ */

/**
 * togglePaso
 * Abre o cierra el cuerpo de un paso al hacer clic en su cabecera.
 * @param {HTMLElement} header - El elemento .paso-header que fue clickeado
 */
function togglePaso(header) {
  const paso = header.parentElement;
  paso.classList.toggle('open');
}
