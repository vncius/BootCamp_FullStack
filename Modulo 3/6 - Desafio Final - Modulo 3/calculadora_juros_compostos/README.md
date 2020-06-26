<h2>Objetivos</h2>
<p>Exercitar os seguintes conceitos trabalhados no Módulo:</p>
<ul>
  <li>Implementação de algoritmos com JavaScrip.</li>
  <li>Criação de componentes com React.</li>
  <li>Utilização de class components, functional components ou hooks.</li>
</ul>

<h2>Enunciado</h2>
<p>
  Criar uma aplicação com React, realizar cálculo de valorização/depreciação com base em
  um montante, taxa de juros mensal e quantidade de parcelas mensal, utilizando o conceito
  de juros compostos.
</p>

<h2>Atividades</h2>
<p>Os alunos deverão desempenhar as seguintes atividades:</p>

<ul>
  <li>
    1. Criar o projeto com o pacote create-react-app ou utilizar o projeto _react-projetobase já disponibilizado pelo professor no fórum do módulo. Essa última é a forma recomendada pelo professor.
  </li>
  <li>
    2.Definir os elementos que farão parte do estado da aplicação. O estado da
      aplicação deve ser composto do valor inicial, a taxa de juros mensal e o
      período. A taxa de juros pode ser tanto positiva (investimento) quanto negativa
      (depreciação). A implementação da manipulação do estado da aplicação pode ser 
      feita tanto com class components quanto hooks, ficando a escolha a critério do
      aluno. Entretanto, as questões do desafio serão elaboradas com base em
      conceitos e implementação referentes somente aos React Hooks
  </li>
  <li>
    3. O aluno deve pesquisar/investigar como deve ser feito o cálculo das prestações
      com base nas imagens abaixo e com base no vídeo de apresentação do professor.
      Há várias formas de se implementar esse cálculo.
  </li>
  <li>
    4. A interface fica a critério do aluno. O foco da avaliação serão os cálculos e
       conceitos relacionados ao React Hooks.
  </li>
  <li>
    5. As imagens abaixo podem servir de orientação para o aluno.
  </li>
</ul>

<h2 style="color:green;">Algumas dicas com base na implementação feita pelo professor, que foi feita com a
utilização de React Hooks:</h2>
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
