document.addEventListener('DOMContentLoaded', () => {
    // Configurações Globais do Chart.js para Tipografia e Tooltips
    Chart.defaults.font.family = "'Inter', system-ui, -apple-system, sans-serif";
    Chart.defaults.color = '#64748b';
    const commonTooltipOptions = {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#ffffff',
        titleFont: { weight: '600', size: 13 },
        bodyColor: '#e2e8f0',
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        boxWidth: 8,
        boxHeight: 8,
        usePointStyle: true
    };
    // 1. Gráfico de Expectativa de Vida no Brasil (Line Chart)
    const ctxExpectativa = document.getElementById('chartExpectativaVida');
    if (ctxExpectativa) {
        const ctx = ctxExpectativa.getContext('2d');
        
        // Criando gradiente para preenchimento abaixo da linha
        const fillGradient = ctx.createLinearGradient(0, 0, 0, 240);
        fillGradient.addColorStop(0, 'rgba(56, 189, 248, 0.25)'); // azul sutil
        fillGradient.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Expectativa de Vida (Anos)',
                    data: [74.8, 72.8, 74.3, 75.5, 76.6],
                    borderColor: '#0ea5e9', // Azul brilhante
                    borderWidth: 3,
                    pointBackgroundColor: '#0ea5e9',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.4, // Curva suave
                    fill: true,
                    backgroundColor: fillGradient
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: commonTooltipOptions
                },
                scales: {
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    },
                    y: {
                        min: 70,
                        max: 80,
                        grid: { color: 'rgba(226, 232, 240, 0.6)' },
                        border: { display: false, dash: [4, 4] }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    // 2. Gráfico de Mortalidade Infantil (Line Chart)
    const ctxMortalidade = document.getElementById('chartMortalidadeInfantil');
    if (ctxMortalidade) {
        const ctx = ctxMortalidade.getContext('2d');
        // Gradiente para área de preenchimento
        const fillGradient = ctx.createLinearGradient(0, 0, 0, 240);
        fillGradient.addColorStop(0, 'rgba(239, 68, 68, 0.2)'); // Vermelho sutil
        fillGradient.addColorStop(1, 'rgba(239, 68, 68, 0.0)');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1940', '1980', '2000', '2024'],
                datasets: [{
                    label: 'Mortes / 1.000 nascidos',
                    data: [146.6, 70.1, 30.1, 12.3],
                    borderColor: '#ef4444', // Vermelho Coral
                    borderWidth: 3,
                    pointBackgroundColor: '#ef4444',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.35,
                    fill: true,
                    backgroundColor: fillGradient
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: commonTooltipOptions
                },
                scales: {
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    },
                    y: {
                        grid: { color: 'rgba(226, 232, 240, 0.6)' },
                        border: { display: false, dash: [4, 4] }
                    }
                },
                animation: {
                    duration: 1600,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    // 3. Gráfico de Médicos por Região (Bar Chart)
    const ctxMedicos = document.getElementById('chartMedicosRegiao');
    if (ctxMedicos) {
        const ctx = ctxMedicos.getContext('2d');
        // Criação de um gradiente vertical para as barras
        const barGradient = ctx.createLinearGradient(0, 0, 0, 240);
        barGradient.addColorStop(0, '#10b981'); // Verde esmeralda claro
        barGradient.addColorStop(1, '#047857'); // Verde escuro
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sul', 'Sudeste'],
                datasets: [{
                    label: 'Médicos por 1.000 hab.',
                    data: [1.3, 1.9, 2.8, 3.1, 3.5],
                    backgroundColor: barGradient,
                    hoverBackgroundColor: '#047857',
                    borderRadius: 6,
                    borderSkipped: false,
                    maxBarThickness: 40
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: commonTooltipOptions
                },
                scales: {
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    },
                    y: {
                        max: 4,
                        grid: { color: 'rgba(226, 232, 240, 0.6)' },
                        border: { display: false, dash: [4, 4] }
                    }
                },
                animation: {
                    duration: 1400,
                    easing: 'easeOutBack',
                    delay: (context) => context.dataIndex * 120 // Efeito cascata suave
                }
            }
        });
    }
    // 4. Gráfico de Participação da Saúde no PIB (Doughnut Chart)
    const ctxPIB = document.getElementById('chartSaudePIB');
    if (ctxPIB) {
        const ctx = ctxPIB.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Gastos em Saúde', 'Outros Setores do PIB'],
                datasets: [{
                    data: [9.0, 91.0],
                    backgroundColor: [
                        '#10b981', // Verde Esmeralda
                        '#e2e8f0'  // Slate suave para outros setores
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%', // Estilo rosca fina
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 16,
                            font: { size: 11, weight: '500' },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: commonTooltipOptions
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1800,
                    easing: 'easeOutBack'
                }
            }
        });
    }
});

