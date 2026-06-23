# O&S Serviços – Landing Page

## 📁 Estrutura de Pastas

```
oes-servicos/
│
├── index.html          ← Página principal (HTML)
│
├── css/
│   └── style.css       ← Todos os estilos e responsividade
│
├── js/
│   └── main.js         ← Interações: menu, slider, FAQ, animações
│
└── images/             ← Coloque suas imagens aqui
    ├── hero.jpg              (foto do hero – banner principal)
    ├── about.jpg             (foto da seção Sobre)
    ├── why.jpg               (foto da seção Por que nos escolher)
    ├── faq.jpg               (foto da seção FAQ)
    ├── gallery-1.jpg         (galeria – imagem 1)
    ├── gallery-2.jpg         (galeria – imagem 2)
    ├── gallery-3.jpg         (galeria – imagem 3)
    ├── testimonial-1.jpg     (foto depoimento – João Mendes)
    ├── testimonial-2.jpg     (foto depoimento – Ana Paula)
    └── testimonial-3.jpg     (foto depoimento – Carlos Silva)
```

## 🚀 Como usar

1. Abra a pasta `oes-servicos` no VS Code
2. Instale a extensão **Live Server**
3. Clique com botão direito no `index.html` → **Open with Live Server**

## 🖼️ Substituindo imagens

Coloque suas fotos dentro da pasta `images/` com os nomes listados acima.
Tamanhos recomendados:
- **hero.jpg** → 1600 × 900px
- **about.jpg / why.jpg / faq.jpg** → 800 × 600px
- **gallery-1/2/3.jpg** → 800 × 600px
- **testimonial-1/2/3.jpg** → 200 × 200px (quadrada)

## ✏️ Editar cores

Abra `css/style.css` e altere as variáveis no topo do arquivo:

```css
:root {
  --red:        #9b3a3a;   /* cor principal */
  --red-light:  #b84848;   /* hover */
  --red-dark:   #7a2c2c;   /* rodapé */
}
```
