# 🐾 Patas em Férias — Plano de Recriação do Site

> Documento gerado após análise completa do site no WordPress.
> Use este arquivo no VS Code para guiar toda a recriação.

---

## 📌 Informações do Negócio

| Campo | Valor |
|---|---|
| Nome | Patas em Férias Pet Resort |
| Tipo | Creche/Day Care e Hospedagem Pet |
| Endereço | Pedra de Guaratiba, Rio de Janeiro – RJ |
| WhatsApp | +55 21 99720-1646 |
| Instagram | @patasemferiaspetresort |
| Link WA | https://wa.me/5521997201646?text=Ol%C3%A1%2C%20quero%20conhecer%20seu%20pet%20resort! |
| Link IG | https://www.instagram.com/patasemferiaspetresort/ |

---

## 🎨 Identidade Visual

### Paleta de Cores
```css
/* Cores principais */
--azul-header:    #0DC0DF;   /* Header, navbar, títulos destaque */
--amarelo-servicos: #FBDE5B; /* Seção de serviços */
--preto-footer:   #000000;   /* Footer e botões CTA */
--branco:         #FFFFFF;   /* Hero section background */
--creme-bg:       #F5F2EC;   /* Background geral da página */

/* Gradiente da seção Instagram */
--grad-instagram: linear-gradient(135deg, #8B5CF6, #C850C0, #E91E8C);
```

### Tipografia
```css
font-family: 'Roboto', sans-serif;
/* Importar no HTML: */
/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"> */
```

---

## 📁 Estrutura de Arquivos a Criar

```
patas-em-ferias/
├── index.html
├── sobre-nos.html
├── regras.html
├── daycare.html
├── hospedagem.html
├── saiba-mais.html
├── galeria.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── logo.png          ← baixar do WordPress (Mídia)
    └── images/
        ├── hero-pets.jpg         ← imagem da hero (gato+cachorro na praia)
        ├── daycare-1.jpg
        ├── hospedagem-1.jpg
        ├── instagram-1.jpg       ← zara-e-ravena.jpeg
        ├── instagram-2.jpg       ← whatsapp-image-2025-01-06-at-13.54.48-2
        ├── instagram-3.jpg       ← cachorros na piscina de bolinhas
        └── instagram-4.jpg       ← golden retriever com brinquedo
```

### ⚠️ AÇÃO URGENTE: Salvar as imagens do WordPress
1. Acesse: https://patasemferias.wordpress.com/wp-admin/upload.php
2. Selecione todas as imagens e faça download antes que o site saia do ar.

---

## 🗂️ Conteúdo de Cada Página

### HOME (index.html)

**Seção 1 — Header/Nav**
- Logo: "PATAS EM FÉRIAS" (texto bold) + imagem do logo
- Menu: SOBRE NÓS | REGRAS | DAYCARE | HOSPEDAGEM | SAIBA MAIS | GALERIA
- Fundo: #0DC0DF

**Seção 2 — Hero**
- Fundo branco com imagem de pets (gato + cachorro na espreguiçadeira)
- Subtítulo: "CRECHE/DAY CARE E HOSPEDAGEM PET" (preto, bold)
- Título: "PATAS EM FÉRIAS PET RESORT" (azul #0DC0DF, extra-bold, fonte grande ~80px)
- Botão: "AGENDE SUA ESTADIA" → link WhatsApp

**Seção 3 — Instagram**
- Fundo: gradiente roxo/rosa
- Título: "VISITE NOSSO INSTAGRAM" + ícone Instagram
- Grid 2×2 com 4 fotos de pets em cards arredondados
- Links: https://www.instagram.com/patasemferiaspetresort/

**Seção 4 — Nossos Serviços**
- Fundo: #FBDE5B (amarelo)
- Título: "NOSSOS SERVIÇOS"
- 2 colunas:
  - **DAYCARE**: foto + botão "AGENDE AGORA" (WhatsApp)
    - ✓ Cuidados Personalizados
    - ✓ Relatórios para os tutores com fotos e vídeos
    - ✓ Play Pet e Piscina
    - ✓ Sessões de relaxamento
  - **HOSPEDAGEM**: foto + botão "AGENDE AGORA" (WhatsApp)
    - ✓ Supervisão 24h por profissionais experientes
    - ✓ Espaço amplo com Play Pet
    - ✓ Cromoterapia e Massagens Relaxantes
    - ✓ Taxi-Dog incluso

**Seção 5 — Mapa**
- Google Maps embed: "Pedra de Guaratiba, Rio de Janeiro - RJ"
- Embed: https://maps.google.com/maps?q=Pedra+de+Guaratiba,+Rio+de+Janeiro+-+RJ&output=embed

**Seção 6 — Footer**
- Fundo: #000000
- Texto branco: "PATAS EM FÉRIAS" (bold)
- "Pedra de Guaratiba, Rio de Janeiro – RJ"
- Ícones: Instagram + WhatsApp (lado direito, brancos)

---

### SOBRE NÓS (sobre-nos.html)

```
Título: SOBRE NÓS

Aqui, oferecemos uma experiência completa de creche e hotel para cães,
com uma metodologia 100% familiar.

Nossos serviços pensados especialmente para proporcionar conforto,
segurança e alegria ao seu pet!

Contamos com uma creche divertida e um hotel aconchegante, onde seu cão
será tratado com todo carinho e atenção que ele merece, sempre respeitando
sua personalidade e necessidades.

Buscamos promover bem-estar físico e emocional para todos os pets, através
de atividades lúdicas, socialização saudável e cuidados personalizados,
especialmente para cães idosos.

Nossa equipe é treinada para dar atenção especial aos pets da terceira
idade, respeitando seus limites e promovendo qualidade de vida.

Além disso, contamos com o Táxi-Dog, um serviço seguro e prático para
buscar e levar seu pet de forma confortável, facilitando sua rotina.

Nosso compromisso é oferecer tranquilidade aos tutores e alegria aos seus
amigos de quatro patas, criando experiências positivas e melhorando a
qualidade de vida dos animais.
```

---

### REGRAS (regras.html)

```
Título: REGRAS

OBSERVAÇÕES IMPORTANTES PARA ESTADIA NO HOTEL / CRECHE

## Documentação e Saúde
• Carteira de vacinação atualizada: Obrigatório apresentar vacinas como
  V10/V8, antirrábica. (vacina de proteção contra giárdia é recomendada)
• Controle de parasitas: Uso regular de antipulgas e vermífugos é exigido.
• Cães portadores ou com sintomas de doenças infectocontagiosas NÃO serão aceitos.

## Comportamento e Socialização
• Avaliação comportamental prévia: O cão deve passar por uma sessão de
  adaptação para garantir que interaja bem com outros pets e com a equipe.
• Cães agressivos ou com histórico de brigas: Não são aceitos.

## Controle Reprodutivo
• Cadelas no cio: Não são aceitas na creche durante o período.
```

---

### DAYCARE (daycare.html)

```
Título: DAYCARE

Serviços inclusos:
• Socialização e interação diária com outros pets supervisionado por
  profissionais experientes
• Relatórios para tutores com fotos e vídeos
• Exercícios para gasto de energia e manutenção da saúde
• Alimentação personalizada conforme a orientação do tutor
• Espaço amplo com Play Pet e Piscina seguro para brincadeiras e
  higienizado regularmente
• Cromoterapia especial com massagens relaxantes
• Transporte seguro ida e volta
```

---

### HOSPEDAGEM (hospedagem.html)

```
Título: HOSPEDAGEM

Serviços inclusos:
• Monitoramento 24h por profissionais experientes
• Aplicação preventiva de antipulgas e vermífugos (residentes)
• Metodologia 100% familiar
• Acomodações confortáveis e acolhedoras
• Serviço de Taxi-Dog incluso
• Rotina estruturada com horários de alimentação, lazer e descanso
• Socialização e brincadeiras garantindo entretenimento e bem-estar
• Enriquecimento ambiental e atividades para reduzir ansiedade
• Espaço amplo com Play Pet e Piscina
• Banho
• Cromoterapia especial e Massagens para promover relaxamento e conforto
• Alimentação Adaptada as necessidades do pet
• Descontos especiais para estadias prolongadas e pacotes personalizados
```

---

### SAIBA MAIS (saiba-mais.html)

```
Título: SAIBA MAIS
Conteúdo: Carrossel/Slideshow com fotos do espaço/pets
(usar as imagens baixadas do WordPress)
```

---

### GALERIA (galeria.html)

```
Título: GALERIA
Conteúdo: Grid de fotos em 4 colunas
(usar todas as imagens baixadas do WordPress)
```

---

## 💻 Código Base — index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patas em Férias — Pet Resort</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="nav-container">
      <div class="logo">PATAS EM FÉRIAS</div>
      <button class="menu-toggle" id="menuToggle">☰</button>
      <nav class="nav" id="mainNav">
        <a href="sobre-nos.html">SOBRE NÓS</a>
        <a href="regras.html">REGRAS</a>
        <a href="daycare.html">DAYCARE</a>
        <a href="hospedagem.html">HOSPEDAGEM</a>
        <a href="saiba-mais.html">SAIBA MAIS</a>
        <a href="galeria.html">GALERIA</a>
      </nav>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <p class="hero-subtitle">CRECHE/DAY CARE E HOSPEDAGEM PET</p>
      <h1 class="hero-title">PATAS<br>EM<br>FÉRIAS<br>PET RESORT</h1>
      <a href="https://wa.me/5521997201646?text=Ol%C3%A1%2C%20quero%20conhecer%20seu%20pet%20resort!"
         class="btn-cta" target="_blank">AGENDE SUA ESTADIA</a>
    </div>
    <div class="hero-image">
      <img src="assets/images/hero-pets.jpg" alt="Pets no resort">
    </div>
  </section>

  <!-- INSTAGRAM -->
  <section class="instagram-section">
    <h2>VISITE NOSSO INSTAGRAM
      <a href="https://www.instagram.com/patasemferiaspetresort/" target="_blank">
        <img src="assets/icons/instagram.svg" alt="Instagram">
      </a>
    </h2>
    <div class="instagram-grid">
      <a href="https://www.instagram.com/patasemferiaspetresort/" target="_blank" class="ig-card">
        <img src="assets/images/instagram-1.jpg" alt="Pet 1">
      </a>
      <a href="https://www.instagram.com/patasemferiaspetresort/" target="_blank" class="ig-card">
        <img src="assets/images/instagram-2.jpg" alt="Pet 2">
      </a>
      <a href="https://www.instagram.com/patasemferiaspetresort/" target="_blank" class="ig-card">
        <img src="assets/images/instagram-3.jpg" alt="Pet 3">
      </a>
      <a href="https://www.instagram.com/patasemferiaspetresort/" target="_blank" class="ig-card">
        <img src="assets/images/instagram-4.jpg" alt="Pet 4">
      </a>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section class="services-section">
    <h2>NOSSOS SERVIÇOS</h2>
    <div class="services-grid">

      <div class="service-card">
        <h3>DAYCARE</h3>
        <img src="assets/images/daycare-1.jpg" alt="Daycare">
        <a href="https://wa.me/5521997201646?text=Ol%C3%A1%2C%20quero%20conhecer%20seu%20pet%20resort!"
           class="btn-agende" target="_blank">AGENDE AGORA</a>
        <ul>
          <li>✓ Cuidados Personalizados</li>
          <li>✓ Relatórios para os tutores com fotos e vídeos</li>
          <li>✓ Play Pet e Piscina</li>
          <li>✓ Sessões de relaxamento</li>
        </ul>
      </div>

      <div class="service-card">
        <h3>HOSPEDAGEM</h3>
        <img src="assets/images/hospedagem-1.jpg" alt="Hospedagem">
        <a href="https://wa.me/5521997201646?text=Ol%C3%A1%2C%20quero%20conhecer%20seu%20pet%20resort!"
           class="btn-agende" target="_blank">AGENDE AGORA</a>
        <ul>
          <li>✓ Supervisão 24h por profissionais experientes</li>
          <li>✓ Espaço amplo com Play Pet</li>
          <li>✓ Cromoterapia e Massagens Relaxantes</li>
          <li>✓ Taxi-Dog incluso</li>
        </ul>
      </div>

    </div>
  </section>

  <!-- MAPA -->
  <section class="map-section">
    <iframe
      src="https://maps.google.com/maps?q=Pedra+de+Guaratiba,+Rio+de+Janeiro+-+RJ&output=embed"
      width="100%" height="450" style="border:0;" allowfullscreen loading="lazy">
    </iframe>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <p class="footer-name">PATAS EM FÉRIAS</p>
        <p>Pedra de Guaratiba, Rio de Janeiro – RJ</p>
      </div>
      <div class="footer-social">
        <a href="https://www.instagram.com/patasemferiaspetresort/" target="_blank">
          <img src="assets/icons/instagram-white.svg" alt="Instagram">
        </a>
        <a href="https://wa.me/5521997201646" target="_blank">
          <img src="assets/icons/whatsapp-white.svg" alt="WhatsApp">
        </a>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

---

## 🎨 Código Base — css/style.css

```css
/* Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* Variáveis */
:root {
  --azul: #0DC0DF;
  --amarelo: #FBDE5B;
  --preto: #000000;
  --branco: #FFFFFF;
  --creme: #F5F2EC;
  --grad-ig: linear-gradient(135deg, #8B5CF6, #C850C0, #E91E8C);
  --font: 'Roboto', sans-serif;
}

body { font-family: var(--font); background: var(--creme); }

/* HEADER */
.header { background: var(--azul); padding: 16px 32px; position: sticky; top: 0; z-index: 100; }
.nav-container { display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; }
.logo { color: white; font-weight: 900; font-size: 1.2rem; letter-spacing: 1px; }
.nav a { color: white; text-decoration: none; font-weight: 700; font-size: 0.85rem; margin-left: 24px; }
.nav a:hover { opacity: 0.8; }
.menu-toggle { display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }

/* HERO */
.hero { display: flex; align-items: center; background: var(--branco); min-height: 500px; overflow: hidden; }
.hero-content { padding: 48px; flex: 1; }
.hero-subtitle { font-size: 1.2rem; font-weight: 700; margin-bottom: 16px; }
.hero-title { font-size: 5rem; font-weight: 900; color: var(--azul); line-height: 1; margin-bottom: 32px; text-transform: uppercase; }
.hero-image { flex: 1; }
.hero-image img { width: 100%; height: 500px; object-fit: cover; }
.btn-cta { display: inline-block; background: var(--preto); color: white; padding: 16px 32px; font-weight: 700; text-decoration: none; font-size: 0.9rem; letter-spacing: 1px; }
.btn-cta:hover { opacity: 0.85; }

/* INSTAGRAM */
.instagram-section { background: var(--grad-ig); padding: 48px 32px; text-align: center; }
.instagram-section h2 { color: white; font-size: 2rem; font-weight: 900; margin-bottom: 32px; display: flex; align-items: center; justify-content: center; gap: 16px; }
.instagram-section h2 img { width: 40px; }
.instagram-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 700px; margin: 0 auto; }
.ig-card img { width: 100%; border-radius: 24px; border: 3px solid rgba(255,255,255,0.5); aspect-ratio: 1; object-fit: cover; }

/* SERVIÇOS */
.services-section { background: var(--amarelo); padding: 48px 32px; }
.services-section h2 { text-align: center; font-size: 2rem; font-weight: 900; color: white; margin-bottom: 32px; }
.services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 1000px; margin: 0 auto; }
.service-card { background: var(--amarelo); padding: 24px; }
.service-card h3 { font-size: 1.8rem; font-weight: 900; color: var(--preto); margin-bottom: 16px; }
.service-card img { width: 100%; height: 200px; object-fit: cover; margin-bottom: 16px; }
.btn-agende { display: block; background: var(--preto); color: white; padding: 14px; text-align: center; text-decoration: none; font-weight: 700; letter-spacing: 1px; margin-bottom: 16px; }
.service-card ul { list-style: none; }
.service-card li { color: white; font-weight: 500; margin-bottom: 8px; }

/* MAPA */
.map-section { width: 100%; }
.map-section iframe { display: block; }

/* FOOTER */
.footer { background: var(--preto); padding: 32px; }
.footer-content { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }
.footer-info { color: white; }
.footer-name { font-weight: 900; font-size: 1rem; letter-spacing: 1px; margin-bottom: 8px; }
.footer-social { display: flex; gap: 16px; }
.footer-social img { width: 40px; filter: invert(1); }

/* RESPONSIVO */
@media (max-width: 768px) {
  .hero { flex-direction: column; }
  .hero-title { font-size: 3rem; }
  .hero-image img { height: 300px; }
  .services-grid { grid-template-columns: 1fr; }
  .instagram-grid { grid-template-columns: 1fr 1fr; }
  .nav { display: none; flex-direction: column; position: absolute; top: 60px; left: 0; width: 100%; background: var(--azul); padding: 16px; }
  .nav.open { display: flex; }
  .menu-toggle { display: block; }
  .footer-content { flex-direction: column; gap: 16px; text-align: center; }
}
```

---

## ⚙️ Código Base — js/main.js

```javascript
// Menu mobile toggle
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
```

---

## 📋 Checklist de Desenvolvimento

- [ ] Baixar TODAS as imagens do WordPress (wp-admin/upload.php)
- [ ] Criar estrutura de pastas
- [ ] Criar index.html com todas as seções
- [ ] Criar css/style.css
- [ ] Criar js/main.js
- [ ] Criar sobre-nos.html
- [ ] Criar regras.html
- [ ] Criar daycare.html
- [ ] Criar hospedagem.html
- [ ] Criar saiba-mais.html (com carrossel)
- [ ] Criar galeria.html (com grid + lightbox)
- [ ] Testar responsividade mobile
- [ ] Testar todos os links de WhatsApp
- [ ] Testar todos os links de navegação
- [ ] Revisar textos e conteúdos
- [ ] Deploy (Vercel / Netlify / GitHub Pages)

---

## 🚀 Como fazer Deploy gratuito

### Opção 1 — Vercel (recomendado)
```bash
npm i -g vercel
cd patas-em-ferias
vercel
```

### Opção 2 — Netlify (drag & drop)
1. Acesse https://app.netlify.com
2. Arraste a pasta do projeto para "Drop your project here"
3. Pronto! URL gerada automaticamente.

### Opção 3 — GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/patas-em-ferias.git
git push -u origin main
# Ativar GitHub Pages nas Settings do repositório
```

---

*Análise realizada em: 05/04/2026*
*Site original: https://patasemferias.wordpress.com*
