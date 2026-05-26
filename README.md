<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUS: Análise Completa e Desafios Globais</title>
    <link rel="stylesheet" href="style.css">
    <!-- Biblioteca de Gráficos -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

<header>
    <img src="bandeira-brasil.jpg" alt="Bandeira do Brasil" class="img-topo">
    <h1>O SUS no Brasil Atual</h1>
    <p>Benefícios, Desafios e Caminhos para o Futuro</p>
</header>

<nav>
    <a href="#beneficios">Benefícios</a>
    <a href="#indicadores">Indicadores</a>
    <a href="#dificuldades">Dificuldades</a>
    <a href="#solucoes">Soluções</a>
</nav>

<main>
    <!-- Seção de Benefícios e Princípios -->
    <section id="beneficios">
        <h2>Benefícios e Princípios do SUS</h2>
        <p>O sistema brasileiro é fundamentado em três pilares constitucionais que garantem a saúde como direito de todos [1]:</p>
        <div class="grid-beneficios">
            <div class="card-b"><strong>Universalidade:</strong> Acesso garantido a toda a população [1].</div>
            <div class="card-b"><strong>Integralidade:</strong> Cuidado completo, da prevenção à alta complexidade [1].</div>
            <div class="card-b"><strong>Equidade:</strong> Oferecer mais a quem mais precisa para reduzir desigualdades [1].</div>
        </div>
        <p><strong>Sucessos Reais:</strong> O Brasil é referência no PNI (vacinação), na política de HIV/AIDS, na Estratégia Saúde da Família (ESF) e no sistema de transplantes [2-4].</p>
    </section>

    <!-- Seção de Gráficos -->
    <section id="indicadores" class="highlight">
        <h2>Análise Comparativa de Indicadores</h2>
        <p>Dados mostram que o modelo de gestão importa tanto quanto o recurso financeiro [5, 6].</p>
        <div class="grid-graficos">
            <div class="chart-container">
                <h3>Médicos por 1.000 Hab.</h3>
                <canvas id="chartMedicos"></canvas>
            </div>
            <div class="chart-container">
                <h3>Investimento em Saúde (% PIB)</h3>
                <canvas id="chartPIB"></canvas>
            </div>
        </div>
    </section>

    <!-- Seção de Dificuldades -->
    <section id="dificuldades">
        <h2>Dificuldades Enfrentadas Hoje</h2>
        <div class="box-alerta">
            <ul>
                <li><strong>Financiamento Insuficiente:</strong> Recursos que nem sempre acompanham a demanda crescente [1].</li>
                <li><strong>Desigualdades Regionais:</strong> Disparidades brutais no acesso entre as regiões do país [1, 7].</li>
                <li><strong>Má Distribuição de Profissionais:</strong> Concentração de médicos em grandes centros, deixando áreas remotas desassistidas [6].</li>
                <li><strong>Filas de Espera:</strong> Gargalos no atendimento especializado e cirurgias eletivas [8].</li>
            </ul>
        </div>
    </section>

    <!-- Seção de Soluções Adquadas -->
    <section id="solucoes">
        <h2>Soluções Inspiradas em Modelos Globais</h2>
        <p>O Brasil pode e deve aprender com soluções criativas de outros países [9]:</p>
        <ul>
            <li><strong>Reino Unido:</strong> Fortalecer a Atenção Primária como porta de entrada única [10].</li>
            <li><strong>Tailândia:</strong> Priorizar a eficiência e a prevenção em contextos de orçamento limitado [10].</li>
            <li><strong>Cuba:</strong> Melhorar a distribuição territorial com foco em médicos generalistas [10].</li>
            <li><strong>Alemanha:</strong> Integrar melhor os setores público e privado com regulação forte [10].</li>
        </ul>
    </section>
</main>

<footer>
    <p>&copy; 2024 Projeto Interdisciplinar - Análise Crítica da Saúde</p>
    <img src="logo-sus.jpg" alt="Logo do SUS" class="img-rodape">
</footer>

<script src="script.js"></script>
</body>
</html>
