# EL CÓDIGO DE LAS CURVAS - Quiz Interativo

Quiz interativo de Pilates para mulheres latinas com efeito manada social.

## 🚀 Deploy Gratuito no Vercel

### Passo 1: Preparar o Projeto
```bash
# Build do projeto
npm run build

# Inicializar Git (se ainda não tiver)
git init
git add .
git commit -m "Initial commit - EL CÓDIGO DE LAS CURVAS Quiz"
```

### Passo 2: Upload para GitHub
1. Crie um repositório no GitHub: `pilates4u-quiz`
2. Faça upload do projeto:
```bash
git remote add origin https://github.com/SEU_USERNAME/pilates4u-quiz.git
git push -u origin main
```

### Passo 3: Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: dist
   - **Install Command**: `npm install`

### Passo 4: Configurar Domínio Personalizado
1. No dashboard Vercel, vá para "Settings" → "Domains"
2. Adicione: `pilates4u.online`
3. Configure DNS na GoDaddy:
   ```
   Tipo: CNAME
   Nome: @
   Valor: cname.vercel-dns.com
   TTL: 1 hora
   ```

## 🌐 Alternativas Gratuitas

### Netlify
```bash
# Após build
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Alterar vite.config.ts para base: '/pilates4u-quiz/'
npm run build
# Upload da pasta dist para branch gh-pages
```

## 📱 Features Implementadas

- ✅ **Quiz interativo** de 42 passos
- ✅ **Toast notifications** com efeito manada
- ✅ **Nomes latinos** personalizados
- ✅ **Link Hotmart** para pagamento
- ✅ **Design responsivo** mobile-first
- ✅ **Animações suaves** e micro-interações

## 🎯 Personalização

- **Nome do produto**: "EL CÓDIGO DE LAS CURVAS"
- **Público-alvo**: Mulheres latinas 30+
- **Países**: 20 países hispano-hablantes
- **Efeito manada**: 50+ combinações de nomes

## 🛠️ Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## 📊 Analytics

Configure Google Analytics ou similar para monitorar conversões no link Hotmart.