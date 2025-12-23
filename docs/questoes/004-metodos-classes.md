---
hide:
  - navigation
  - toc
---

# Questão 004 — Métodos em Classes (Python)

## Enunciado

Observe o código:

```python
class X:
    def __init__(self):
        self.valor = 10

    def duplica(self):
        self.valor *= 2

x = X()
x.duplica()
print(x.valor)
```

Qual será a saída exibida?

## Alternativas

[ A) 5 ](#resposta){ .md-button }
[ B) 10 ](#resposta){ .md-button }
[ C) 20 ](#resposta){ .md-button }
[ D) Erro ](#resposta){ .md-button }

---

## Resposta

??? info "Clique para revelar a resposta"
    A resposta correta é: **C) 20**

    **Explicação:**
    
    O método `duplica()` multiplica o atributo `valor` por 2.

    Fluxo:

    * valor inicial = 10
    * depois de `duplica()`: 20
    * `print()` imprime **20**

---

## Teste o código (Pyodide)

```pyodide
class X:
    def __init__(self):
        self.valor = 10

    def duplica(self):
        self.valor *= 2

x = X()
x.duplica()
print(x.valor)
```