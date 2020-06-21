<h2>Objetivos</h2>
<p>Exercitar os seguintes conceitos trabalhados no Módulo:</p>
<ul>
  <li>Implementação de aplicações com JavaScript e React</li>
  <li>Criação de Class Components</li>
</ul>

<h2>Enunciado</h2>
<p>
  Construa, utilizando React, uma aplicação para a calcular o salário líquido a
  partir do salário bruto, considerando as regras da CLT de 2020.
</p>

<h2>Atividades</h2>
<p>Os alunos deverão desempenhar as seguintes atividades:</p>

<ul>
  <li>
    1. Implementar, utilizando React, uma aplicação denominada "react-salario"
    que possuirá um input editável e diversos outros inputs somente-leitura para
    exibir informações sobre o cálculo de salário conforme as leis da CLT em
    2020. Só devem ser considerados os cálculos de desconto de INSS e IRPF, ou
    seja, outros descontos e dependentes devem ser ignorados. Os valores a serem
    exibidos são:  Salário bruto (editável pelo usuário).  Base INSS
    (somente-leitura).  Desconto INSS (somente-leitura).  Base IRPF
    (somente-leitura).  Desconto IRPF (somente-leitura).  Salário líquido
    (somente-leitura)
  </li>
  <li>
    2. O site de referência para regras de cálculo e comparação de valores
    calculados deve ser o: https://www.todacarreira.com/calculo-salario-liquido/
    Regras para cálculo do INSS de 2020 Regras para cálculo do IRPF de 2020
  </li>
  <li>
    3. Como considerei o cálculo complexo e também que o foco deste Trabalho
    Prático é o React, disponibilizarei minha implementação do cálculo no fórum
    do módulo, mais especificamente no fórum fixado onde só o professor posta,
    referente ao Módulo 03.
  </li>
  <li>
    4. Considerando que o aluno deve ter assistido às videoaulas até a Aula 7,
    espera-se que a implementação seja feita preferencialmente com Class
    Components. Entretanto, se o aluno desejar fazer a implementação com React
    Hooks, tudo bem. De qualquer forma, aconselho que seja feita com Class
    Componentes neste momento, pois o Desafio irá focar nos React Hooks.
  </li>
  <li>
    5. Além dos cálculos, o aluno deverá implementar uma barra horizontal,
    indicando com cores diferenciadas:  Percentual de desconto de INSS 
    Percentual de desconto do IRPF  Salário líquido
  </li>
  <li>
    6. A soma dos 3 itens acima deve ser exatamente o valor do salário bruto
    (100%).
  </li>
  <li>
    7. A imagem abaixo ilustra uma possível interface para a aplicação. Estado
    inicial da aplicação Cálculo com desconto de INSS + IRPF Cálculo com o teto
    do INSS.
  </li>
</ul>

<h2>Dicas</h2>
<ul>
  <li>
    A aplicação que implementei só possui uma variável em this.state fullSalary.
  </li>
  <li>
    Isolei o cálculo do salário em um atributo de classe. O cálculo é feito em
    render(), antes de mostrar o JSX. Há alternativas mais performáticas, mas
    esta atendeu bem neste caso.
  </li>
  <li>Cor utilizada para a barra de desconto do INSS: #e67e22</li>
  <li>Cor utilizada para a barra de desconto do IRPF: #c0392b</li>
  <li>Cor utilizada para a barra do salário líquido: #16a085</li>
  <li>
    Utilizei Intl para formar os valores monetários.  Para a interface,
    utilizei o Materialize CSS.
  </li>
  <li>
    Criei os componentes <InputFullSalary /> (para o salário bruto),
    <InputReadOnly /> (para os demais valores) e <ProgressBarSalary /> (para
    mostrar a barra horizontal).
  </li>
</ul>

<h2>Procedimento de instalação do projeto:</h2>
<ul>
  <li>1 - No diretório raiz do projeto execute o comando de instalação de depedências: <strong>yarn</strong></li>
  <li>2 - No diretório raiz do projeto execute o comando de inicialização: <strong>yarn start</strong></li>
</ul>

<h2>Aplicação em execução</h2>
<img src="https://user-images.githubusercontent.com/31490903/85227949-d2c88d80-b3b6-11ea-980a-79dc346362b9.gif">
