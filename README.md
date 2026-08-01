# Madureira Alinhamento

## Propósito do projeto

Este repositório contém o site estático da **Madureira Alinhamento**, uma oficina de manutenção automotiva no bairro **Uruguai, Salvador**.

O objetivo principal do site é:
- apresentar serviços de alinhamento, balanceamento, cambagem/caster, suspensão, troca de pneus e diagnóstico
- destacar a credibilidade local e a experiência de mais de 30 anos
- gerar contatos por **WhatsApp** e solicitar orçamento

## Arquivos críticos

- `index.html` - markup principal da página de entrada. Contém:
  - hero com copy principal e CTA
  - seção "Quem Somos"
  - lista de serviços reais
  - prova social e resultados
  - links de contato e WhatsApp
- `css/style.css` - identidade visual e espaçamento. Contém:
  - paleta de cores principal
  - tipografia `Inter`
  - layout responsivo
  - componentes de botão, cards e seções
- `js/script.js` - interações da página:
  - menu mobile
  - navegação suave
  - seções com link ativo
  - animação dos contadores
  - tracking de leads para links de WhatsApp
- `img/` - imagens reais da oficina, serviços e fachada
- `blog/` - conteúdo adicional para SEO e referências de serviço

## Conteúdo real que deve dominar o design

A partir dos textos existentes no site, o design deve priorizar:

- Hero principal:
  - "Retribua com a manutenção que ele merece."
  - "Alinhamento 3D, balanceamento, cambagem e suspensão com equipamentos modernos e atendimento rápido em Salvador."
- Credenciais locais:
  - "30 anos no bairro do Uruguai"
  - "Desde 1991"
  - "98% aprovação"
- Chamadas de ação:
  - "Agendar Agora"
  - "Nossos Serviços"
  - WhatsApp / Orçamento Online
- Serviços reais:
  - Alinhamento
  - Balanceamento
  - Cambagem / Caster
  - Suspensão
  - Troca de Pneus
  - Diagnóstico
- Prova social real:
  - avaliação de clientes
  - referências ao Google
  - satisfação no volante

## Identidade visual existente

O site já mostra uma linguagem visual definida. O redesenho deve mantê-la e reforçá-la, não substituí-la.

Paleta de cores:
- `--primary: #FFD700` (amarelo ouro)
- `--black: #0A0A0A`
- `--white: #FFFFFF`
- `--dark: #111111`
- `--dark-2: #1A1A1A`
- `--dark-3: #252525`
- acentos de verde WhatsApp: `--whatsapp: #25D366`

Tipografia e estilo:
- fonte principal: `Inter`
- títulos fortes e pesados
- botões com cantos arredondados e contraste alto
- uso de transparências e gradações escuras para camadas
- estrutura de seção em cards com bordas suaves

## Design system e padrões encontrados

- Botões:
  - `.btn-primary` para ações principais
  - `.btn-outline` para links secundários
- Seções baseadas em grid:
  - `about-grid`
  - `services-grid`
  - `proof-grid`
- Seções com tag e título:
  - `.section-tag`
  - `.section-title`
- Cards com hover suave e bordas sutis
- Uso consistente de espaçamento interno e externo para manter hierarquia visual

## Instruções para redesenho (prompt para Stitch)

Use o conteúdo existente do site como fonte de verdade. Nada inventado. O redesenho deve manter a mesma identidade de cores e reforçar a clareza do propósito.

- Produto: site da oficina **Madureira Alinhamento**.
- Oferta principal: **alinhamento 3D, balanceamento, cambagem/caster, suspensão, troca de pneus e diagnóstico automotivo**.
- Localização: **Uruguai, Salvador**.
- Objetivo: converter visitantes em contatos por **WhatsApp**.
- Principais mensagens: “Retribua com a manutenção que ele merece.”, “30 anos no bairro do Uruguai”, “98% aprovação”.
- Paleta obrigatória: preto, branco, amarelo ouro (`#FFD700`) e valores escuros como `#0A0A0A`.
- Tipografia: família `Inter` com títulos fortes.
- Elementos de apoio: cards de serviço, prova social, badge de experiência, CTA de WhatsApp.
- Não adicionar novo conteúdo inventado; use apenas termos existentes ou conteúdo explícito das páginas.
- O layout deve ser responsivo e direto, sem fricção no contato.

### Prompt sugerido para Stitch

"Redesenhe o site de `Madureira Alinhamento` mantendo a paleta atual de preto, branco e amarelo ouro (`#FFD700`). Use o texto existente do site como fonte de verdade: destaque o hero com a frase principal `Retribua com a manutenção que ele merece.`, mostre os serviços reais (`Alinhamento`, `Balanceamento`, `Cambagem / Caster`, `Suspensão`, `Troca de Pneus`, `Diagnóstico`), e enfatize a credibilidade local (`30 anos no bairro do Uruguai`, `Desde 1991`, `98% aprovação`). Priorize contato com WhatsApp e orçamento online, preserve a tipografia `Inter`, e mantenha uma estrutura clara de seções em cards. Não invente novos serviços ou slogans; só use conteúdo presente no site. Seja mobile-first e mantenha a identidade de cores e o tom automotivo profissional."