---
hide:
  - navigation
  - toc
---

# Questão 005 — Estrutura de Decisão (Python)

## Enunciado

Analise o código a seguir e indique qual será a saída exibida no console:

```python
a = 7
b = 3
c = 10

if a > b and a < c:
    if a % 2 == 0:
        print("Alpha")
    else:
        print("Beta")
elif b * 2 == a:
    print("Gamma")
else:
    print("Omega")
```

## Alternativas

[ A) Alpha ](#resposta){ .md-button }
[ B) Beta ](#resposta){ .md-button }
[ C) Gamma ](#resposta){ .md-button }
[ D) Omega ](#resposta){ .md-button }

---

## Resposta

??? info "Clique para revelar a resposta"
    A resposta correta é: **B) Beta**

**Explicação:**

* A condição `a > b and a < c` é verdadeira, pois `7 > 3` e `7 < 10`.
* Entramos no primeiro bloco `if`.
* Em seguida, verificamos `a % 2 == 0`.
* `7 % 2 == 1`, logo `a` é **ímpar** → cai no `else`.
* Portanto, a saída enviada ao console é **"Beta"**.

---

## Teste o código (Pyodide)

Clique no botão **:material-play: Run** no canto superior direito ou pressione ++ctrl+enter++ para executar.

```pyodide
a = 7
b = 3
c = 10

if a > b and a < c:
    if a % 2 == 0:
        print("Alpha")
    else:
        print("Beta")
elif b * 2 == a:
    print("Gamma")
else:
    print("Omega")
```