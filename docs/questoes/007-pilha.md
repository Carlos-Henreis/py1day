---
hide:
  - navigation
  - toc
---

# Questão 007 — Pilha (Stack em Python)

## Enunciado

Em Python, listas podem ser usadas como **pilhas**, onde o último elemento inserido é o primeiro a sair (**LIFO**).

Analise o código abaixo:

```python
pilha = []

pilha.append(1)
pilha.append(2)
pilha.append(3)

pilha.pop()
pilha.append(4)

print(pilha)
```

Qual será a saída exibida?

## Alternativas

[ A) [1, 2, 3, 4] ](#resposta){ .md-button }
[ B) [1, 2, 4] ](#resposta){ .md-button }
[ C) [1, 4] ](#resposta){ .md-button }
[ D) [2, 3, 4] ](#resposta){ .md-button }

---

## Resposta

??? info "Clique para revelar a resposta"
    A resposta correta é: **B) [1, 2, 4]**

    **Explicação rápida:**

    * `append()` adiciona no topo da pilha
    * `pop()` remove o último elemento (`3`)
    * Em seguida, `4` é adicionado

    Estado final da pilha:

    ```
    [1, 2, 4]
    ```

---

## Teste o código (Pyodide)

```pyodide
pilha = []

pilha.append(1)
pilha.append(2)
pilha.append(3)

pilha.pop()
pilha.append(4)

print(pilha)
```