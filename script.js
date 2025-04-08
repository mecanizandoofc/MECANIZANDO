// script.js

// Filtrar resultados com base nos inputs
function filtrarResultados() {
  const termo = document.getElementById("searchInput").value.toLowerCase();
  const marca = document.getElementById("brandFilter").value.toLowerCase();
  const modelo = document.getElementById("modelFilter").value.toLowerCase();
  const categoria = document.getElementById("categoryFilter").value.toLowerCase();

  const resultados = document.querySelectorAll(".result-item");
  resultados.forEach((item) => {
    const texto = item.innerText.toLowerCase();
    const visivel =
      texto.includes(termo) &&
      texto.includes(marca) &&
      texto.includes(modelo) &&
      texto.includes(categoria);

    item.style.display = visivel ? "block" : "none";
  });
}

// Eventos ao digitar ou trocar filtros
["searchInput", "brandFilter", "modelFilter", "categoryFilter"].forEach((id) => {
  document.getElementById(id).addEventListener("input", filtrarResultados);
});

// Buscar informações de afiliado (simulação)
function buscarAfiliado() {
  const link = document.getElementById("affiliateLink").value;
  const resultado = document.getElementById("afiliadoResultado");

  if (!link) {
    resultado.innerHTML = "<p>Por favor, cole um link válido.</p>";
    return;
  }

  // Simulação do retorno (a integração real precisa de backend)
  resultado.innerHTML = `
    <div class="result-item">
      <h3>Peça Exemplo (de ${link})</h3>
      <img src="https://via.placeholder.com/150" alt="Imagem do Produto" />
      <p>Descrição da peça vinculada ao link de afiliado.</p>
      <p><strong>Preço:</strong> R$ 199,90</p>
      <p><strong>Cupom:</strong> MECANIZANDO10</p>
    </div>
  `;
}
