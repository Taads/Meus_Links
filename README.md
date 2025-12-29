# 🎨 Gerenciador de Links para Divulgação

Um site moderno e elegante para divulgar seus links profissionais com efeitos visuais incríveis!

## ✨ Características

- 🖼️ Espaço para sua foto de perfil
- 📱 Links para Instagram, LinkedIn, Portfolio e GitHub
- 🎭 Animações suaves e efeitos visuais
- 📱 Design totalmente responsivo
- 🌈 Gradientes e cores vibrantes
- ⚡ Efeitos de hover interativos

## 🚀 Como Usar

### 1. Adicione sua foto
Coloque sua foto na pasta do projeto com o nome `foto.jpg`. A foto será exibida automaticamente em formato circular com efeito de brilho.

### 2. Personalize seus links
Edite o arquivo `index.html` e substitua os links pelos seus:

- **Instagram**: Procure por `https://instagram.com/seu_perfil` e substitua
- **LinkedIn**: Procure por `https://linkedin.com/in/seu_perfil` e substitua
- **Portfolio**: Procure por `https://seuportfolio.com` e substitua
- **GitHub**: Procure por `https://github.com/seu_perfil` e substitua

### 3. Personalize seu nome e bio
No arquivo `index.html`, encontre:
- `<h1 class="name">Seu Nome</h1>` - Altere para seu nome
- `<p class="bio">Desenvolvedor | Criador de Conteúdo | Entusiasta de Tecnologia</p>` - Altere para sua descrição

### 4. Abra o site
Simplesmente abra o arquivo `index.html` no seu navegador!

## 🎨 Personalização

### Cores
Você pode personalizar as cores editando as variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --instagram-gradient: linear-gradient(45deg, #f09433 0%, #e6683c 25%, ...);
    --linkedin-color: #0077b5;
    --github-color: #333;
}
```

### Animações
Todas as animações podem ser ajustadas no arquivo `style.css`. Procure por `@keyframes` para personalizar os efeitos.

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 💻 Desktop
- 📱 Tablets
- 📱 Smartphones

## 🌟 Efeitos Incluídos

- ✨ Animação de entrada suave
- 🎯 Efeito de hover nos cards
- 💫 Formas flutuantes no fundo
- 🌊 Efeito ripple ao clicar
- 🔆 Brilho pulsante na foto
- ➡️ Animação da seta nos links

## 📝 Notas

- Se você não adicionar uma foto, será exibido um placeholder
- Todos os links abrem em nova aba
- O design é otimizado para performance

---

Feito com ❤️ para sua divulgação profissional!

