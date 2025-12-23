---
hide:
  - navigation
  - toc
---

# Questão 001 — Estruturas de Repetição (Python)

## Enunciado

Analise o código abaixo:

```python
contador = 0
while contador < 5:
    contador += 2
print(contador)
```

Qual será a saída exibida?

## Alternativas

[ A) 4 ](#resposta){ .md-button }
[ B) 5 ](#resposta){ .md-button }
[ C) 6 ](#resposta){ .md-button }
[ D) Loop infinito ](#resposta){ .md-button }

---


## Resposta

??? info "Clique para revelar a resposta"
    A resposta correta é: **C) 6**

    **Explicação:**  
    
    O loop soma 2 até atingir um valor ≥ 5.  
    Iterações: `2 → 4 → 6`  
    Quando `contador` chega a 6, `contador < 5` fica falso e o loop termina.  
    O `print()` é executado fora do loop e imprime **6**.

---

## Teste o código (Pyodide)

Clique no botão **:material-play: Run** no canto superior direito ou pressione ++ctrl+enter++ para executar o código.

```pyodide
contador = 0
while contador < 5:
    contador += 2
print(contador)
```