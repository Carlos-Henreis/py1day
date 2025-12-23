---
hide:
  - navigation
  - toc
---

# [@Py1day](https://x.com/Py1Day)

> Uma questão de Python por dia.  
> Prática constante, evolução consistente.

---

## Questões recentes
<div class="swiper mySwiper">
    <div class="swiper-wrapper"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
</div>

---

## Sobre o projeto

Este site reúne todas as questões do [@Py1day](https://x.com/Py1Day), cada uma composta por:

- Enunciado
- Resultado esperado
- Explicação breve
- Ambiente interativo para testar o código (Pyodide)

---
## Lista de questões

```python exec="true"
from pathlib import Path

base = Path("docs/questoes")
files = sorted(base.glob("*.md"))

for f in files:
    if f.name != "index.md":
        name = f.stem.replace("-", " ").title()
        print(f"- [{name}](questoes/{f.stem}/)")
```
