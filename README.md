# FE-Alticci

O projeto foi desenvolvido com o intuito de de consumir o backEnd para verificar o valor de `n` na sequencia Alticci.

A sequencia Alticci funciona com a seguinte formula:

n=0 => a(0) = 0 <br>
n=1 => a(1) = 1 <br>
n=2 => a(2) = 1 <br>
n>2 => a(n) = a(n-3) + a(n-2) <br>

## Para rodar o projeto na sua máquina siga o passo a passo.

1º Passo -> Clonar o repositório

`git clone https://github.com/dpmqueiroz/FE-Alticci.git`

2º Passo -> Verificar se tem o Node e Angular-Cli instalado. ( Minhas configurações estão dessa maneira: `Angular Cli: 15.2.4`, `Node: 18.15.0`
`NPM 9.5.0` ).

3º Passo -> Abrir o Terminal entrar na pasta raiz do projeto e executar o seguinte comando:

`npm install` -> ( Este comando irá instalar o que é necessário para rodar o projeto ). <br>
`ng serve -o` -> (Este comando irá iniciar a aplicação e abrir uma guia do navegador com o projeto aberto).
