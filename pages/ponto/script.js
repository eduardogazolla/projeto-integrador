function obterDataHoraAtual() {
  fetch("https://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      const dataAtual = new Date(data.datetime);

      const hora = dataAtual.getHours().toString().padStart(2, "0");
      const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
      const dia = dataAtual.getDate().toString().padStart(2, "0");
      const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0");
      const ano = dataAtual.getFullYear();

      document.getElementById(
        "data_hora_atual"
      ).textContent = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    })
    .catch((error) => {
      console.error("Erro ao obter data e hora atual:", error);
    });
}

obterDataHoraAtual();

setInterval(obterDataHoraAtual, 1000);

var proximoCampo = 1; // Inicia com o primeiro campo

document.getElementById("btnRegistrar").addEventListener("click", function () {
  var data = new Date();
  var hora = pad(data.getHours());
  var minutos = pad(data.getMinutes());
  var horario = hora + ":" + minutos;

  // Atualiza o campo de acordo com o próximoCampo
  document.getElementById("horario" + proximoCampo).value = horario;

  // Incrementa o próximoCampo para o próximo clique
  proximoCampo++;

  // Se atingir o último campo, reinicia para o primeiro
  if (proximoCampo > 4) {
    proximoCampo = 1;
  }
});

function pad(n) {
  return n < 10 ? "0" + n : n;
}
