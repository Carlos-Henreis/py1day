---
hide:
  - navigation
  - toc
---

# Questão 003 — Listas (Python)

## Enunciado

Analise o código abaixo:

```python
nums = [1, 2, 3]
nums.append(nums)
print(len(nums))
```

Qual será a saída exibida?

## Alternativas

[ A) 3 ](#resposta){ .md-button }
[ B) 4 ](#resposta){ .md-button }
[ C) 2 ](#resposta){ .md-button }
[ D) 5 ](#resposta){ .md-button }

---

## Resposta

??? info "Clique para revelar a resposta"
    A resposta correta é: **B) 4**

    **Explicação:**

    `nums.append(nums)` adiciona **a própria lista como elemento dentro dela**, criando uma referência circular.
    Mas isso **não gera erro**.
    A nova lista fica assim:

    ```
    [1, 2, 3, [...]]
    ```

    Ou seja: **4 elementos**.

---

## Teste o código (Pyodide)

```pyodide
nums = [1, 2, 3]
nums.append(nums)
print(len(nums))
```