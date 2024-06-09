let totalVotos = 0;
const votos = {
    partido1: 0,
    partido2: 0,
    partido3: 0,
    partido4: 0,
    partido5: 0,
    partido6: 0,
    partido7: 0,
    partido8: 0,
    partido9: 0
};

function cambiarVotos(partido, cambio) {
    votos[partido] += cambio;
    if (votos[partido] < 0) votos[partido] = 0;
    document.getElementById(`${partido}-votos`).textContent = votos[partido];
    calcularTotalVotos();
}

function calcularTotalVotos() {
    totalVotos = Object.values(votos).reduce((a, b) => a + b, 0);
    document.getElementById('total-votos').textContent = totalVotos;
}
