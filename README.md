<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Comparação dos Sistemas de Saúde: Uma análise crítica do SUS no cenário global de Universalidade, Integralidade e Equidade.">
    <title>Comparação dos Sistemas de Saúde - Análise do Brasil</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Biblioteca Chart.js para os gráficos interativos -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<header class="hero">
    <div class="container">
        <span class="badge">Projeto Interdisciplinar - Curso Técnico</span>
        <h1>Comparação dos Sistemas de Saúde</h1>
        <p class="subtitle">Brasil, Países Desenvolvidos e Países em Desenvolvimento: Uma Análise Crítica Global</p>
        
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
        <p>O Sistema Único de Saúde (SUS) representa uma das maiores políticas públicas de saúde do mundo, sendo responsável por garantir acesso universal, integral e gratuito aos serviços de saúde para toda a população brasileira. Criado pela Constituição Federal de 1988, o SUS surgiu com o objetivo de assegurar que a saúde fosse reconhecida como um direito de todos e dever do Estado.</p>
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
                    <div class="chart-wrapper">
                        <canvas id="chartExpectativaVida"></canvas>
                    </div>
                </div>
                <div class="indicator-block">
                    <div class="indicator-info">
                        <h4>Mortalidade Infantil</h4>
                        <p>A taxa de mortalidade infantil no Brasil caiu drasticamente de 146,6 mortes por 1.000 nascidos em 1940 para 12,3 em 2024. Essa evolução está relacionada às campanhas de vacinação, ampliação do pré-natal, incentivo ao aleitamento materno e melhorias no saneamento básico (BRASIL, 2025).</p>
                    </div>
                    <div class="chart-wrapper">
                        <canvas id="chartMortalidadeInfantil"></canvas>
                    </div>
                </div>
                <div class="indicator-block">
                    <div class="indicator-info">
                        <h4>Médicos por Habitante (por Região)</h4>
                        <p>O Brasil possui cerca de 2,5 médicos por 1.000 habitantes. No entanto, há grande desigualdade na distribuição médica: a Região Sudeste possui cerca de 3,5 médicos/1.000 hab., enquanto a Região Norte conta com apenas 1,3 (DEMOGRAFIA MÉDICA, 2025).</p>
                    </div>
                    <div class="chart-wrapper">
                        <canvas id="chartMedicosRegiao"></canvas>
                    </div>
                </div>
                <div class="indicator-block">
                    <div class="indicator-info">
                        <h4>Participação da Saúde no PIB</h4>
                        <p>O Brasil investe cerca de 9% do Produto Interno Bruto (PIB) em saúde, considerando os gastos públicos e privados. Apesar da amplitude do SUS, o financiamento público ainda enfrenta desafios para cobrir com excelência todas as demandas da população (SBPC, 2025).</p>
                    </div>
                    <div class="chart-wrapper">
                        <canvas id="chartSaudePIB"></canvas>
                    </div>
                </div>
            </div>
        </article>
        <article id="avancos" class="card">
            <h3>2.4 Avanços do Sistema Brasileiro</h3>
            <p>O sistema de saúde brasileiro apresenta importantes avanços reconhecidos nacional e internacionalmente. O Sistema Único de Saúde (SUS) é considerado uma das maiores políticas públicas de saúde do mundo, garantindo atendimento universal e gratuito para milhões de brasileiros.</p>
            
            <p>Entre os principais avanços destacam-se:</p>
            <ul>
                <li><strong>O Programa Nacional de Imunizações (PNI):</strong> É considerado uma das principais conquistas do sistema de saúde brasileiro. Criado em 1973, o programa coordena as ações de vacinação em todo o país, garantindo acesso gratuito a dezenas de vacinas e erradicando várias doenças graves (BRASIL, 2026).</li>
                <li><strong>A Estratégia Saúde da Família (ESF):</strong> Uma das principais políticas de atenção básica do SUS. Seu objetivo é promover ações de prevenção e promoção da saúde por meio de equipes multiprofissionais que atuam diretamente no território (BRASIL, 2026).</li>
                <li><strong>Combate ao HIV/AIDS:</strong> O Brasil tornou-se referência internacional por meio do SUS. O Ministério da Saúde realiza testagem rápida, campanhas de prevenção e fornece gratuitamente medicamentos antirretrovirais, PrEP e PEP para toda a população (BRASIL, 2026).</li>
            </ul>
            <p class="quote-text">"Especialistas destacam que o SUS representa um importante pacto social e civilizatório, sendo essencial para a promoção da saúde pública e redução das desigualdades sociais no país (SBPC, 2025)."</p>
        </article>
        <article id="desafios" class="card">
            <h3>2.5 Desafios do SUS</h3>
            <p>Apesar dos avanços conquistados ao longo dos anos, o Sistema Único de Saúde (SUS) ainda enfrenta importantes desafios que dificultam a garantia de um atendimento de qualidade para toda a população. Entre os principais problemas estão as <strong>desigualdades regionais</strong>, já que algumas regiões possuem menor infraestrutura hospitalar e menor quantidade de profissionais de saúde.</p>
            <p>Além disso, o sistema enfrenta longos tempos de espera para consultas, exames e cirurgias, principalmente em serviços especializados. Outro desafio importante é o <strong>financiamento insuficiente</strong>, que limita investimentos em estrutura, equipamentos e ampliação dos serviços de saúde.</p>
            <p>Problemas relacionados à gestão pública, organização dos serviços e distribuição de recursos também impactam a eficiência do SUS, dificultando o acesso rápido e adequado da população aos atendimentos de saúde (FIOCRUZ, 2026).</p>
        </article>
        <article id="aprendizado" class="card">
            <h3>2.6 O que o Brasil pode aprender com outros países (E vice-versa)</h3>
            <p>O Brasil pode aprender com modelos internacionais de saúde, principalmente em relação à organização dos serviços, gestão eficiente e fortalecimento da atenção básica. Países como o Reino Unido possuem sistemas públicos universais que serviram de inspiração para a criação do Sistema Único de Saúde (SUS).</p>
            <p>Ao mesmo tempo, experiências brasileiras também passaram a ser reconhecidas internacionalmente. Reportagens recentes mostram que iniciativas do SUS, especialmente a <strong>Estratégia Saúde da Família (ESF)</strong> e o trabalho dos agentes comunitários de saúde, vêm sendo estudadas pelo sistema de saúde britânico (NHS) como exemplo de fortalecimento da atenção primária e prevenção de doenças. Essas ações ajudam a aproximar os serviços de saúde das comunidades, reduzir internações e melhorar os indicadores de saúde da população (COFEN, 2025).</p>
            <p class="highlight-text">Dessa forma, a troca de experiências entre países demonstra que sistemas de saúde podem evoluir por meio da adaptação de políticas públicas eficientes à realidade social e econômica de cada nação.</p>
        </article>
    </section>
    <section id="conclusao" class="card">
        <h2>3. Conclusão</h2>
        <p>O sistema de saúde brasileiro possui enorme importância social e representa uma das maiores políticas públicas do país. O SUS garante atendimento gratuito para milhões de brasileiros diariamente, desempenhando papel essencial na vacinação, transplantes e combate a epidemias.</p>
        <p>Apesar das dificuldades relacionadas ao financiamento, à superlotação e às desigualdades regionais, o Brasil apresenta avanços reconhecidos internacionalmente.</p>
        <p>Conclui-se que o sucesso de um sistema de saúde depende não apenas da riqueza econômica do país, mas também da forma como os recursos são organizados e distribuídos para atender às necessidades da população.</p>
    </section>
    <section id="referencias" class="card references-section">
        <h2>4. Referências</h2>
        <ul>
            <li>BRASIL. <strong>Constituição da República Federativa do Brasil de 1988</strong>. Brasília, DF: Senado Federal, 1988. Disponível em: Planalto – Constituição Federal de 1988. Acesso em: 20 maio 2026.</li>
            <li>PAIM, Jairnilson et al. O sistema de saúde brasileiro: história, avanços e desafios. <strong>The Lancet</strong>, Londres, v. 377, n. 9779, p. 1778-1797, 2011. Disponível em: The Lancet – Sistema de Saúde Brasileiro. Acesso em: 20 maio 2026.</li>
            <li>PESSOTO, Umberto Catalan et al. Desigualdades no acesso e utilização dos serviços de saúde na Região Metropolitana de São Paulo. <strong>Ciência & Saúde Coletiva</strong>, Rio de Janeiro, v. 12, n. 2, p. 351-362, 2007. Disponível em: SciELO – Desigualdades no acesso aos serviços de saúde. Acesso em: 20 maio 2026.</li>
            <li>BRASIL. Ministério da Saúde. <strong>Sistema Único de Saúde (SUS)</strong>. Disponível em: https://www.gov.br/saude. Acesso em: 20 maio 2026.</li>
            <li>ORGANIZAÇÃO MUNDIAL DA SAÚDE (OMS). <strong>World Health Statistics 2025</strong>. Geneva: WHO, 2025.</li>
            <li>BANCO MUNDIAL. <strong>World Development Indicators</strong>. Disponível em: https://data.worldbank.org. Acesso em: 20 maio 2026.</li>
            <li>IBGE. <strong>Indicadores sociais e de saúde</strong>. Rio de Janeiro: IBGE, 2025.</li>
            <li>FUNDAÇÃO OSWALDO CRUZ (FIOCRUZ). <strong>Desafios do SUS</strong>. Mato Grosso do Sul: Fiocruz, 2026. Disponível em: Fiocruz – Desafios do SUS. Acesso em: 20 maio 2026.</li>
        </ul>
    </section>
</main>
<footer>
    <div class="container">
        <p>&copy; 2026 - Projeto Web de Análise dos Sistemas Globais de Saúde. Desenvolvido pelo Grupo 1.</p>
    </div>
</footer>
<script src="script.js"></script>
</body>
</html>
