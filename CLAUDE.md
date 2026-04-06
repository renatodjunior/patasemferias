# CLAUDE.md — Patas em Férias Pet Resort

> Arquivo de contexto para o Claude Code.
> Leia este arquivo inteiro antes de qualquer implementação.

---

## 🐾 Sobre o Projeto

Site institucional do **Patas em Férias Pet Resort**, negócio de creche (Day Care) e hospedagem para cães localizado em Pedra de Guaratiba, Rio de Janeiro – RJ.

O site original estava no WordPress.com e foi descontinuado. Este projeto recria o site do zero via código, mantendo a identidade visual e o conteúdo originais, com estrutura moderna e escalável.

---

## 📌 Informações do Negócio

| Campo        | Valor |
|---|---|
| Nome         | Patas em Férias Pet Resort |
| Serviço      | Creche (Day Care) e Hospedagem Pet |
| Endereço     | Pedra de Guaratiba, Rio de Janeiro – RJ |
| WhatsApp     | +55 21 99720-1646 |
| Link WA CTA  | https://wa.me/5521997201646?text=Ol%C3%A1%2C%20quero%20conhecer%20seu%20pet%20resort! |
| Instagram    | @patasemferiaspetresort |
| Link IG      | https://www.instagram.com/patasemferiaspetresort/ |
| Domínio      | patasemferias.com.br (registrado no Registro.br) |

---

## 🗺️ Roadmap de Evolução (Fases)

### ✅ Fase 1 — Site Estático (ATUAL)
- HTML + CSS + JavaScript puro, sem framework
- Hospedagem gratuita no **GitHub Pages**
- Domínio personalizado: `patasemferias.com.br`
- Imagens hospedadas localmente no repositório
- Objetivo: substituir o WordPress com fidelidade visual e custo zero

### 🔜 Fase 2 — Formulário e Agendamento
- Manter o site estático no GitHub Pages
- Adicionar formulário de agendamento usando **Formspree** ou **EmailJS** (gratuito)
- Recebimento de solicitações por e-mail, sem backend próprio
- Sem migração de infraestrutura necessária

### 🔜 Fase 3 — Sistema com Backend
- Migrar para **Vercel** (suporte a funções serverless)
- Adicionar backend com **Next.js** (App Router)
- Funcionalidades: área do tutor, login, galeria de fotos por pet, histórico de estadias
- Banco de dados: **PlanetScale** (MySQL serverless) ou **Supabase** (PostgreSQL)
- Ainda no tier gratuito para volume baixo

### 🔜 Fase 4 — Plataforma Completa
- Painel administrativo para o dono do pet resort
- Sistema de pagamentos (Stripe ou Pagar.me)
- App mobile (React Native ou PWA)
- Considerar hospedagem paga dedicada nessa fase

---

## 🎨 Identidade Visual

### Paleta de Cores
```css
:root {
  --azul-header:      #0DC0DF;  /* Header, navbar, títulos em destaque */
  --amarelo-servicos: #FBDE5B;  /* Seção "Nossos Serviços" */
  --preto:            #000000;  /* Footer, botões CTA */
  --branco:           #FFFFFF;  /* Hero section background */
  --creme-bg:         #F5F2EC;  /* Background geral da página */

  /* Gradiente da seção Instagram */
  --grad-instagram: linear-gradient(135deg, #8B5CF6, #C850C0, #E91E8C);
}
```

### Tipografia
- Fonte: **Roboto** (Google Fonts), pesos 400, 700 e 900
- Import: `https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap`
- Títulos das páginas internas: uppercase, peso 900
- Título hero: cor `#0DC0DF`, tamanho ~80px desktop, ~40px mobile

---

## 📁 Estrutura de Arquivos

```
patas-em-ferias/
├── CLAUDE.md               ← Este arquivo
├── index.html              ← Homepage
├── sobre-nos.html
├── regras.html
├── daycare.html
├── hospedagem.html
├── saiba-mais.html         ← Carrossel de fotos
├── galeria.html            ← Grid de fotos
├── css/
│   └── style.css           ← Todos os estilos
├── js/
│   └── main.js             ← Menu mobile, carrossel
├── assets/
│   ├── icons/
│   │   ├── instagram.svg
│   │   ├── instagram-white.svg
│   │   └── whatsapp-white.svg
│   └── images/
│       ├── hero-pets.jpg           ← Imagem principal (gato+cachorro na espreguiçadeira)
│       ├── daycare-1.jpg           ← Foto para card do Daycare
│       ├── hospedagem-1.jpg        ← Foto para card da Hospedagem
│       ├── instagram-1.jpg         ← zara-e-ravena
│       ├── instagram-2.jpg         ← whatsapp-image-2025-01-06-at-13.54.48-2
│       ├── instagram-3.jpg         ← cachorros na piscina de bolinhas
│       └── instagram-4.jpg         ← golden retriever com brinquedo
│       └── [demais fotos]          ← 184 fotos baixadas do WordPress para galeria
└── .github/
    └── workflows/          ← (opcional) CI/CD para GitHub Pages
```

> As 184 fotos foram baixadas da biblioteca de mídia do WordPress original.
> Estão salvas localmente. Use-as na galeria e no carrossel da página Saiba Mais.

---

## 🗂️ Páginas e Conteúdo

### index.html — Homepage

**Estrutura de seções (de cima para baixo):**

1. **Header / Navbar** — fundo `#0DC0DF`, sticky no topo
   - Logo: "PATAS EM FÉRIAS" (texto bold) + imagem do logo
   - Menu: SOBRE NÓS | REGRAS | DAYCARE | HOSPEDAGEM | SAIBA MAIS | GALERIA
   - Responsivo: menu hambúrguer no mobile

2. **Hero Section** — fundo branco, imagem de pets na espreguiçadeira de praia
   - Layout: texto à esquerda, imagem à direita (50/50)
   - Subtítulo (preto, bold): "CRECHE/DAY CARE E HOSPEDAGEM PET"
   - Título (azul `#0DC0DF`, extrabold, ~80px): "PATAS EM FÉRIAS PET RESORT"
   - Botão CTA preto: "AGENDE SUA ESTADIA" → link WhatsApp

3. **Seção Instagram** — gradiente roxo/rosa (`--grad-instagram`)
   - Título branco: "VISITE NOSSO INSTAGRAM" + ícone Instagram
   - Grid 2×2 com 4 fotos em cards arredondados com borda branca translúcida
   - Todas as imagens linkam para @patasemferiaspetresort

4. **Seção Nossos Serviços** — fundo `#FBDE5B` (amarelo)
   - Título branco: "NOSSOS SERVIÇOS"
   - 2 colunas side-by-side:
     - **DAYCARE**: foto + botão "AGENDE AGORA" (WhatsApp) + lista de bullets
       - ✓ Cuidados Personalizados
       - ✓ Relatórios para os tutores com fotos e vídeos
       - ✓ Play Pet e Piscina
       - ✓ Sessões de relaxamento
     - **HOSPEDAGEM**: foto + botão "AGENDE AGORA" (WhatsApp) + lista de bullets
       - ✓ Supervisão 24h por profissionais experientes
       - ✓ Espaço amplo com Play Pet
       - ✓ Cromoterapia e Massagens Relaxantes
       - ✓ Taxi-Dog incluso

5. **Seção Mapa** — Google Maps embed, largura total
   - Query: "Pedra de Guaratiba, Rio de Janeiro - RJ"

6. **Footer** — fundo preto
   - Esquerda: "PATAS EM FÉRIAS" (bold, branco) + "Pedra de Guaratiba, Rio de Janeiro – RJ"
   - Direita: ícones Instagram e WhatsApp (brancos, linkados)

---

### sobre-nos.html
```
Título: SOBRE NÓS

Aqui, oferecemos uma experiência completa de creche e hotel para cães, com uma metodologia 100% familiar.

Nossos serviços pensados especialmente para proporcionar conforto, segurança e alegria ao seu pet!

Contamos com uma creche divertida e um hotel aconchegante, onde seu cão será tratado com todo carinho e atenção que ele merece, sempre respeitando sua personalidade e necessidades.

Buscamos promover bem-estar físico e emocional para todos os pets, através de atividades lúdicas, socialização saudável e cuidados personalizados, especialmente para cães idosos.

Nossa equipe é treinada para dar atenção especial aos pets da terceira idade, respeitando seus limites e promovendo qualidade de vida.

Além disso, contamos com o Táxi-Dog, um serviço seguro e prático para buscar e levar seu pet de forma confortável, facilitando sua rotina.

Nosso compromisso é oferecer tranquilidade aos tutores e alegria aos seus amigos de quatro patas, criando experiências positivas e melhorando a qualidade de vida dos animais.
```

---

### regras.html
```
Título: REGRAS
Subtítulo: OBSERVAÇÕES IMPORTANTES PARA ESTADIA NO HOTEL / CRECHE

Seção — Documentação e Saúde:
• Carteira de vacinação atualizada: Obrigatório apresentar vacinas como V10/V8, antirrábica.
  (vacina de proteção contra giárdia é recomendada)
• Controle de parasitas: Uso regular de antipulgas e vermífugos é exigido.
• Cães portadores ou com sintomas de doenças infectocontagiosas NÃO serão aceitos.

Seção — Comportamento e Socialização:
• Avaliação comportamental prévia: O cão deve passar por uma sessão de adaptação
  para garantir que interaja bem com outros pets e com a equipe.
• Cães agressivos ou com histórico de brigas: Não são aceitos.

Seção — Controle Reprodutivo:
• Cadelas no cio: Não são aceitas na creche durante o período.
```

---

### daycare.html
```
Título: DAYCARE

Lista de serviços inclusos:
• Socialização e interação diária com outros pets supervisionado por profissionais experientes
• Relatórios para tutores com fotos e vídeos
• Exercícios para gasto de energia e manutenção da saúde
• Alimentação personalizada conforme a orientação do tutor
• Espaço amplo com Play Pet e Piscina, seguro e higienizado regularmente
• Cromoterapia especial com massagens relaxantes
• Transporte seguro ida e volta
```

---

### hospedagem.html
```
Título: HOSPEDAGEM

Lista de serviços inclusos:
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
• Alimentação adaptada às necessidades do pet
• Descontos especiais para estadias prolongadas e pacotes personalizados
```

---

### saiba-mais.html
- Título: SAIBA MAIS
- Conteúdo: carrossel/slideshow com fotos do espaço e dos pets
- Usar as fotos baixadas da biblioteca do WordPress
- Implementar com JS puro (sem biblioteca externa) ou com Swiper.js se preferir

---

### galeria.html
- Título: GALERIA
- Conteúdo: grid de fotos em 3–4 colunas
- Usar todas as fotos disponíveis em `assets/images/`
- Implementar lightbox ao clicar (JS puro ou GLightbox)
- Layout responsivo: 4 colunas desktop → 2 colunas mobile

---

## ⚙️ Regras de Implementação

- **Sem frameworks CSS** (não usar Bootstrap, Tailwind etc.)
- **Sem frameworks JS** (não usar React, Vue, Angular etc.) — Fase 1 é vanilla
- **CSS em arquivo único** `css/style.css` com variáveis CSS no `:root`
- **JS em arquivo único** `js/main.js`
- **Mobile-first** no CSS, breakpoint principal em `768px`
- **Sem jQuery**
- Todos os botões CTA ("AGENDE AGORA", "AGENDE SUA ESTADIA") linkam para WhatsApp
- Header sticky no topo com `position: sticky; top: 0; z-index: 100`
- Imagens com `loading="lazy"` para performance
- Usar `<meta name="description">` em cada página para SEO básico

---

## 🚀 Deploy — GitHub Pages

### Configuração do repositório
```bash
git init
git add .
git commit -m "feat: initial site structure"
git remote add origin https://github.com/SEU_USUARIO/patas-em-ferias.git
git push -u origin main
```

### Ativar GitHub Pages
1. Repositório → Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `/ (root)`
4. Save

### Domínio personalizado
1. Criar arquivo `CNAME` na raiz com o conteúdo: `patasemferias.com.br`
2. No Registro.br, configurar os seguintes registros DNS:
```
Tipo A    @    185.199.108.153
Tipo A    @    185.199.109.153
Tipo A    @    185.199.110.153
Tipo A    @    185.199.111.153
Tipo AAAA @    2606:50c0:8000::153
Tipo AAAA @    2606:50c0:8001::153
Tipo AAAA @    2606:50c0:8002::153
Tipo AAAA @    2606:50c0:8003::153
Tipo CNAME www patasemferias.com.br
```
3. No GitHub Pages Settings → Custom domain → digitar `patasemferias.com.br`
4. Marcar "Enforce HTTPS"

---

## 📋 Checklist de Desenvolvimento — Fase 1

### Estrutura base
- [ ] Criar estrutura de pastas
- [ ] Criar `css/style.css` com variáveis e reset
- [ ] Criar `js/main.js` com menu mobile

### Páginas
- [ ] `index.html` — Homepage completa com todas as 6 seções
- [ ] `sobre-nos.html`
- [ ] `regras.html`
- [ ] `daycare.html`
- [ ] `hospedagem.html`
- [ ] `saiba-mais.html` — com carrossel funcional
- [ ] `galeria.html` — com grid e lightbox

### Qualidade
- [ ] Testar responsividade em 375px, 768px e 1280px
- [ ] Testar todos os links de WhatsApp
- [ ] Testar todos os links de navegação entre páginas
- [ ] Verificar que todas as imagens carregam
- [ ] Adicionar `alt` descritivo em todas as imagens
- [ ] Validar HTML no validator.w3.org

### Deploy
- [ ] Criar repositório no GitHub
- [ ] Push do código
- [ ] Ativar GitHub Pages
- [ ] Criar arquivo `CNAME`
- [ ] Configurar DNS no Registro.br
- [ ] Confirmar HTTPS ativo
- [ ] Testar domínio `patasemferias.com.br` no browser

---

## 📋 Checklist — Fase 2 (Futuro)

- [ ] Adicionar formulário de contato/agendamento com Formspree
- [ ] Criar página de confirmação de agendamento
- [ ] Integrar mapa com localização exata (Google Maps API ou embed melhorado)
- [ ] Adicionar WhatsApp flutuante fixo na tela

## 📋 Checklist — Fase 3 (Futuro)

- [ ] Migrar para Next.js (App Router)
- [ ] Migrar hospedagem para Vercel
- [ ] Implementar área do tutor (login com NextAuth)
- [ ] Banco de dados com Supabase
- [ ] Dashboard administrativo para o pet resort

---

*Projeto iniciado em: 05/04/2026*
*Site original analisado: https://patasemferias.wordpress.com*
*Domínio registrado: patasemferias.com.br (Registro.br)*
