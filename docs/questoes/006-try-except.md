---
hide:
  - navigation
  - toc
---

# Questão 006 — Try/Except (Python)

## Enunciado

Considere o código abaixo:

```python
try:
    numero = int("10a")
    print("Convertido")
except ValueError:
    print("Erro!")
finally:
    print("Fim!")
```

Qual será a saída exibida no console?

## Alternativas

[ A) Convertido<br>&ensp;&ensp;Fim! ](#resposta){ .md-button }
[ B) Erro!<br>&ensp;&ensp;Fim! ](#resposta){ .md-button }
[ C) Erro!<br>&ensp;&ensp; ](#resposta){ .md-button }
[ D) Convertido<br>&ensp;&ensp;Fim! ](#resposta){ .md-button }

---

## Resposta

??? info "Clique para revelar a resposta"
    A resposta correta é: **B)** 🎯

**Explicação:**
`int("10a")` gera uma exceção **ValueError** pois a string não é um número válido.
O Python não executa o `print()` dentro do `try`, mas executa o `except` e SEMPRE executa o `finally`.

Saída final:

```
Erro!
Fim!
```

---

## Teste o código (Pyodide)

Clique no botão **:material-play: Run** no canto superior direito ou pressione ++ctrl+enter++ para executar o código.

```pyodide
try:
    numero = int("10a")
    print("Convertido")
except ValueError:
    print("Erro!")
finally:
    print("Fim!")
```