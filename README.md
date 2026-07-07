<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Comparação dos Sistemas de Saúde: Uma análise crítica do SUS no cenário global de Universalidade, Integralidade e Equidade.">
    <title>Comparação dos Sistemas de Saúde - Análise do Brasil</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<header class="hero">
    <div class="container">
        <span class="badge">Projeto Interdisciplinar - Curso Técnico</span>
        <h1>Comparação dos Sistemas de Saúde</h1>
        <p class="subtitle" style="color: #ffdf00 !important; opacity: 1 !important; font-weight: 600;">Brasil, Países Desenvolvidos e Países em Desenvolvimento: Uma Análise Crítica Global</p>
        
        <div class="team-box">
            <h3>Componentes do Grupo:</h3>
            <ul class="team-list">
                <li>Breno Santos</li>
                <li>Daniele da Silva</li>
                <li>Deivid Lima</li>
                <li>Flavia Fonseca</li>
                <li>Jamile Santos</li>
                <li>Kelly Cristina</li>
            </ul>
        </div>
    </div>
</header>
<nav class="navbar">
    <div class="container">
        <a href="#introducao">Introdução</a>
        <a href="#sus">O SUS</a>
        <a href="#publico-privado">Público vs Privado</a>
        <a href="#indicadores">Indicadores</a>
        <a href="#avancos">Avanços</a>
        <a href="#desafios">Desafios</a>
        <a href="#aprendizado">Troca Global</a>
        <a href="#conclusao">Conclusão</a>
    </div>
</nav>
<main class="container">
    <section id="introducao" class="card">
        <h2>1. Introdução</h2>
        <p>O Sistema Único de Saúde (SUS) representa uma das maiores políticas públicas de saúde do mundo, sendo responsible por garantir acesso universal, integral e gratuito aos serviços de saúde para toda a população brasileira. Criado pela Constituição Federal de 1988, o SUS surgiu com o objetivo de assegurar que a saúde fosse reconhecida como um direito de todos e dever do Estado.</p>
        <p>O sistema brasileiro de saúde possui características únicas devido à dimensão territorial do país, à diversidade social e às desigualdades econômicas existentes entre as regiões. Mesmo diante de desafios como filas de espera, superlotação hospitalar e dificuldades de financiamento, o SUS desempenha papel fundamental em programas de vacinação, transplantes de órgãos, atendimento de urgência e atenção básica à saúde.</p>
        <p>Este trabalho tem como objetivo analisar o funcionamento do sistema de saúde brasileiro, identificando suas principais características, avanços, desafios e impactos na qualidade de vida da população.</p>
    </section>
    <section id="desenvolvimento">
        <div class="section-title">
            <h2>2. Desenvolvimento</h2>
            <hr>
        </div>
        <article id="sus" class="card">
            <h3>2.1 O Sistema Único de Saúde (SUS)</h3>
            <p>O Sistema Único de Saúde foi criado em 1988 pela Constituição Federal Brasileira. Seu principal objetivo é garantir atendimento gratuito e universal para toda a população.</p>
            <p>O SUS funciona com base em três princípios fundamentais que garantem o acesso à saúde para toda a população brasileira (BRASIL, 1988):</p>
            
            <div class="principles-grid">
                <div class="principle-item">
                    <h4>Universalidade</h4>
                    <p>Garante que todas as pessoas tenham direito ao atendimento de saúde, independentemente de renda, classe social, emprego ou qualquer outra condição.</p>
                </div>
                <div class="principle-item">
                    <h4>Integralidade</h4>
                    <p>Assegura que o cidadão receba atendimento completo, incluindo ações de prevenção, diagnóstico, tratamento e reabilitação da saúde.</p>
                </div>
                <div class="principle-item">
                    <h4>Equidade</h4>
                    <p>Busca reduzir as desigualdades no acesso à saúde, oferecendo mais atenção e recursos para as populações que apresentam maiores necessidades.</p>
                </div>
            </div>
            
            <p class="highlight-text">O sistema oferece consultas médicas, vacinação, atendimento hospitalar, transplantes, distribuição de medicamentos, atendimento de urgência e programas de prevenção.</p>
        </article>
        <article id="publico-privado" class="card">
            <h3>2.2 Saúde Pública e Privada no Brasil</h3>
            <p>O sistema de saúde brasileiro é dividido entre o setor público (SUS) e o setor privado.</p>
            
            <div class="comparison-grid">
                <div class="sector-box public">
                    <h4>Setor Público (SUS)</h4>
                    <p>Oferece atendimento gratuito para toda a população brasileira. Entre suas vantagens estão a cobertura nacional, campanhas de vacinação e programas de prevenção. Entretanto, o sistema enfrenta desafios como filas, superlotação e falta de profissionais em algumas regiões (PAIM; TRAVASSOS; ALMEIDA; BAHIA; MACINKO, 2011).</p>
                </div>
                <div class="sector-box private">
                    <h4>Setor Privado</h4>
                    <p>Oferece atendimento mais rápido e maior acesso a especialistas, especialmente para a população que possui planos de saúde. Porém, possui alto custo, dificultando o acesso para grande parte da população (PESSOTO et al., 2007).</p>
                </div>
            </div>
        </article>
        <article id="indicadores" class="card">
            <h3>2.3 Indicadores de Saúde do Brasil</h3>
            <p>Os indicadores de saúde ajudam a avaliar a qualidade do sistema de saúde brasileiro de maneira objetiva, confrontando mitos e comparando a eficiência dos gastos públicos.</p>
            <div class="indicator-blocks-container">
                <div class="indicator-block">
                    <div class="indicator-info">
                        <h4>Expectativa de Vida no Brasil</h4>
                        <p>A expectativa de vida da população brasileira chegou a 76,6 anos em 2024, apresentando crescimento em relação aos anos anteriores após a recuperação dos impactos causados pela pandemia da Covid-19 (BRASIL, 2025).</p>
                    </div>
                    <div class="image-placeholder">
                        <canvas id="chartExpectativaVida"></canvas>
                    </div>
                </div>
                <div class="indicator-block">
                    <div
