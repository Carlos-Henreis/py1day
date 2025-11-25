---
hide:
  - navigation
  - toc
---

# Questão 002 — Operações Mistas (Python)

## Enunciado

Considere o código abaixo:

```python
print(12 + "23" + 555)
```

Qual será a saída exibida?

## Alternativas

[ A) 553 ](#resposta){ .md-button }
[ B) 1223555 ](#resposta){ .md-button }
[ C) 2023555 ](#resposta){ .md-button }
[ D) Error ](#resposta){ .md-button }

---

## Resposta

??? info "Clique para revelar a resposta"
    A resposta correta é: **D) Error**

**Explicação:**
Python **não permite** somar números inteiros (`int`) com textos (`str`).
Na expressão:

```python
12 + "23"
```

ocorre um `TypeError: unsupported operand type(s) for +: 'int' and 'str'`.

Assim, o programa **não chega** a avaliar o restante da expressão.

---

## Teste o código (Pyodide)

Clique no botão **:material-play: Run** no canto superior direito ou pressione ++ctrl+enter++ para executar o código.

```pyodide
print(12 + "23" + 555)
```
