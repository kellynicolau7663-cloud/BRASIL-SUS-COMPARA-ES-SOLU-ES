// Configuração dos Gráficos Interativos (Baseado nos indicadores das fontes)

// 1. Gráfico de Médicos por 1.000 Habitantes
// Este gráfico destaca o "Mito #2" das fontes: Cuba tem alta densidade de médicos apesar do PIB baixo.
const ctxMedicos = document.getElementById('chartMedicos').getContext('2d');
new Chart(ctxMedicos, {
    type: 'bar',
    data: {
        labels: ['Brasil', 'Cuba', 'EUA'],
        datasets: [{
            label: 'Médicos por 1.000 habitantes',
            data: [2.3, 8.4, 2.6], // Dados para comparação crítica (Ref: Fontes do Projeto)
            backgroundColor: ['#009c3b', '#ffdf00', '#002776'] // Cores da Bandeira
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// 2. Gráfico de Investimento em Saúde (% do PIB)
// Este gráfico ilustra que "o volume de dinheiro, sozinho, não explica nada" (Ref: Mito #1).
const ctxPIB = document.getElementById('chartPIB').getContext('2d');
new Chart(ctxPIB, {
    type: 'doughnut',
    data: {
        labels: ['Brasil', 'EUA', 'Outros'],
        datasets: [{
            data: [9.5, 17, 73.5], // EUA como o maior gasto per capita (Ref: Fontes do Projeto)
            backgroundColor: ['#009c3b', '#002776', '#ddd']
        }]
    },
    options: {
        responsive: true
    }
});
