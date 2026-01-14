# 🧰 Kit de Utilidades

**Descrição**

Kit de utilidades para e-commerces — um conjunto de pequenas ferramentas de linha de comando (CLI) interativas para gerar QR Codes, senhas, textos, realizar operações matemáticas básicas e gerar números aleatórios.

---

## 🔧 Recursos

- Gerador de QR Code (mostra QR no terminal)
- Gerador de Senhas (configurável: maiúsculas, minúsculas, números, especiais e tamanho)
- Gerador de Texto (parágrafos com número de palavras configurável)
- Calculadora básica (soma, subtração, multiplicação, divisão)
- Gerador de Números Aleatórios (quantidade, intervalo)

---

## 🚀 Começando

Pré-requisitos:

- Node.js (recomendado v16+)

Instalação:

```bash
# na raiz do projeto
npm install
```

Iniciar a aplicação:

```bash
npm start
```

Ao iniciar, a aplicação abre um menu interativo. Escolha a ferramenta digitando o número correspondente (1–5) e siga as instruções.

---

## 🧭 Como usar (exemplos)

1) Gerador de QR Code

- Escolha: `1`
- Insira o link (ex: `https://example.com`)
- Escolha o tipo: `1` (grande) ou `2` (pequeno)

Saída: o QR Code será exibido no terminal.

2) Gerador de Senhas

- Escolha: `2`
- Responda as perguntas: maiúsculas, minúsculas, números, caracteres especiais (1 = Sim, 2 = Não)
- Informe o tamanho da senha (mínimo 5)

Saída: senha gerada exibida no terminal.

3) Gerador de Texto

- Escolha: `3`
- Informe a quantidade de palavras desejadas

Saída: um parágrafo gerado com o número de palavras solicitado.

4) Calculadora Básica

- Escolha: `4`
- Escolha a operação (1-4) e digite os dois números quando solicitado

Saída: resultado da operação.

5) Gerador de Números Aleatórios

- Escolha: `5`
- Informe: quantidade, mínimo e máximo

Saída: lista de números aleatórios no intervalo especificado.

---

## 🗂 Estrutura do projeto

```
package.json
src/
  index.js                # ponto de entrada e menu
  prompts-schema/         # esquemas de prompt para cada ferramenta
  services/               # implementações das ferramentas
    qr-code/
    password/
    text-gen/
    calculator/
    random/
```

---

## ✔️ Dependências principais

- `prompt` — interface de linha de comando interativa
- `qrcode-terminal` — gera QR Codes no terminal
- `jabber` — gerador de texto (parágrafo)
- `chalk` — cores e estilos no terminal

> Observação: veja `package.json` para a lista completa de dependências e versões.

---

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request com melhorias, correções ou novas ferramentas.

---

## Licença

Licença: ISC (ver `package.json`)

---

Se quiser, posso adicionar instruções de testes, badges, exemplos de uso automatizados ou traduzir o README para inglês. 💡
