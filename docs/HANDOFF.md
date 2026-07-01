# Guia de Handoff — Bangalô Design

Este documento orienta a próxima equipe que assumir o projeto. A intenção é facilitar manutenção, adição de fotos, cadastro de novos projetos e troca do visualizador 3D por modelos reais.

## Visão geral

Stack principal:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- React Three Fiber
- Drei
- React Hook Form
- Zod

Comandos principais:

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

Antes de publicar qualquer alteração, rode pelo menos:

```bash
npm run typecheck
npm run lint
npm run build
```

## Estrutura do projeto

Pastas mais importantes:

- `app/`: rotas e páginas principais.
- `components/`: componentes genéricos de layout e interface.
- `features/`: componentes ligados a áreas específicas do site.
- `lib/content.ts`: conteúdo centralizado de navegação, projetos, serviços, processo e métricas.
- `types/`: tipos TypeScript usados no conteúdo.
- `public/brand/`: logo e ícone da Bangalô.
- `public/projects/`: fotos usadas no portfólio.
- `public/models/`: local previsto para modelos 3D `.glb` ou `.gltf`.
- `assets/`: assets importados diretamente pelo código, como a logo da Koru no footer.

## Como adicionar novas fotos

1. Otimize a imagem antes de inserir no projeto.
   - Preferência: `.webp` ou `.avif`.
   - Tamanho recomendado para fotos de portfólio: entre `1600px` e `2400px` no maior lado.
   - Evite imagens muito pesadas. Como referência, tente manter cada imagem abaixo de `500 KB` quando possível.

2. Coloque o arquivo em:

```txt
public/projects/
```

3. Use nomes descritivos em minúsculas, sem acentos e sem espaços:

```txt
public/projects/quiosque-shopping-marca-x-01.webp
public/projects/loja-conceito-marca-y-hero.webp
```

4. Referencie a imagem no código usando caminho público:

```ts
"/projects/quiosque-shopping-marca-x-01.webp"
```

Não use `public/` no caminho da imagem dentro dos componentes.

## Como adicionar um novo projeto ao portfólio

Os projetos base ficam em:

```txt
lib/content.ts
```

Procure o array:

```ts
export const projects = [...]
```

Adicione um novo item seguindo este formato:

```ts
{
  name: "Nome do projeto",
  category: "Quiosques",
  city: "Cidade ou região",
  description:
    "Descrição curta explicando objetivo, solução e valor comercial do projeto.",
  image: "/projects/nome-da-imagem.webp",
  alt: "Descrição acessível da imagem",
  highlights: ["Destaque 1", "Destaque 2", "Destaque 3"]
}
```

Categorias aceitas hoje:

- `Quiosques`
- `Lojas`
- `Mobiliário Comercial`
- `Ambientes Corporativos`
- `Fachadas`
- `Projetos Personalizados`

Essas categorias estão tipadas em:

```txt
types/content.ts
```

Se for criar uma categoria nova, atualize também o tipo `ProjectCategory`.

## Galeria interativa da página Projetos

A experiência interativa fica em:

```txt
features/projects/project-gallery-experience.tsx
```

A montagem editorial da página fica em:

```txt
app/projetos/page.tsx
```

Hoje, `app/projetos/page.tsx` transforma os projetos de `lib/content.ts` em `galleryProjects`, adicionando:

- `role`: frase editorial do projeto em destaque.
- `result`: texto explicando resultado/intenção.
- `gallery`: lista de imagens do mosaico.

Ao adicionar projetos reais, o ideal é mover esses dados extras para `lib/content.ts` ou criar um arquivo dedicado, por exemplo:

```txt
lib/projects.ts
```

Isso deixa o portfólio mais fácil de manter quando houver muitos cases.

## Como adicionar ou substituir o projeto 3D

O visualizador 3D está em:

```txt
features/showroom3d/showroom-section.tsx
features/showroom3d/showroom-viewer.tsx
```

Hoje o site usa um modelo procedural simples criado com geometrias do Three.js. Ele serve como placeholder visual até existir um modelo real.

### Onde colocar modelos 3D

Coloque arquivos em:

```txt
public/models/
```

Formato recomendado:

```txt
.glb
```

Exemplo:

```txt
public/models/quiosque-bangalo.glb
```

No código, o caminho público será:

```ts
"/models/quiosque-bangalo.glb"
```

### Exemplo de troca para GLB

Em `features/showroom3d/showroom-viewer.tsx`, importe `useGLTF`:

```tsx
import { useGLTF } from "@react-three/drei";
```

Crie um componente para o modelo:

```tsx
function KioskGlbModel() {
  const { scene } = useGLTF("/models/quiosque-bangalo.glb");

  return <primitive object={scene} scale={1} position={[0, -0.8, 0]} />;
}
```

Depois substitua:

```tsx
<KioskModel />
```

por:

```tsx
<KioskGlbModel />
```

Opcionalmente, adicione preload:

```tsx
useGLTF.preload("/models/quiosque-bangalo.glb");
```

### Recomendações para o modelo 3D

- Preferir `.glb`.
- Centralizar o modelo na origem no Blender.
- Conferir escala antes de exportar.
- Reduzir polígonos quando possível.
- Comprimir texturas.
- Evitar texturas acima de `2K` sem necessidade.
- Testar em celular antes de publicar.
- Manter o arquivo o mais leve possível. Para web, tente ficar abaixo de `5 MB` quando viável.

## SEO e metadados

Metadados globais ficam em:

```txt
app/layout.tsx
```

Metadados por página ficam no próprio arquivo da página, por exemplo:

```txt
app/projetos/page.tsx
app/servicos/page.tsx
app/processo/page.tsx
app/sobre/page.tsx
app/contato/page.tsx
```

Ao adicionar uma página nova, inclua:

```ts
export const metadata = {
  title: "Título da página",
  description: "Descrição curta para SEO."
};
```

## Contato e links comerciais

O link principal do WhatsApp fica em:

```txt
lib/utils.ts
```

O formulário de contato fica em:

```txt
features/contact/contact-form.tsx
```

Se o número mudar, atualize os dois pontos caso necessário:

- `whatsappUrl` em `lib/utils.ts`
- URL montada no `window.open` do formulário

## Footer e crédito de desenvolvimento

O footer fica em:

```txt
components/layout/footer.tsx
```

O crédito da Koru Company usa:

```txt
assets/empresa.png
```

Link atual:

```txt
https://site-koru-company.vercel.app
```

## Deploy na Vercel

Configuração recomendada:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: deixar em branco
- Node.js Version: `22.x`

Arquivos importantes para deploy:

- `.nvmrc`: define Node 22.
- `.vercelignore`: evita enviar arquivos locais e a pasta de referência.
- `package.json`: scripts e versão de Node.

## O que não deve ir para produção

Não versionar nem enviar:

- `node_modules/`
- `.next/`
- `referencia-site-atual/`
- arquivos `.env`
- logs
- caches locais

Esses itens já estão cobertos por `.gitignore` e `.vercelignore`.

## Checklist antes de entregar uma alteração

1. Adicionou imagens otimizadas em `public/projects/`.
2. Atualizou `alt` das imagens.
3. Atualizou conteúdo em `lib/content.ts` ou arquivo equivalente.
4. Testou responsividade básica em desktop e mobile.
5. Rodou:

```bash
npm run typecheck
npm run lint
npm run build
```

6. Verificou se links de WhatsApp, email e CTAs continuam funcionando.
