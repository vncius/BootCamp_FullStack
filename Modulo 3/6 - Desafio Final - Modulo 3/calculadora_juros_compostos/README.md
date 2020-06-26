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

<br/>
<img width="80%" src="https://user-images.githubusercontent.com/31490903/85906729-95fcfc00-b7e5-11ea-80f5-086dc3290b2a.png"/>
<p>Tela inicial da aplicação, que indica que <strong>R$ 1.000,00</strong> aplicados a uma taxa de juros de <strong>0,5%</strong>
<strong>ao mês</strong>, rende aproximadamente <strong>0,50%</strong> ou <strong>R$ 5,00</strong> após <strong>1 mês.</strong></p>

<br/>
<img width="80%" src="https://user-images.githubusercontent.com/31490903/85906731-96959280-b7e5-11ea-97b9-55e2525ff381.png"/>
<p> Tela após mudança de estado, que indica que <strong>R$ 5.900,00</strong> aplicados a uma taxa de juros
de <strong>0,8% ao mês</strong>, rende aproximadamente <strong>10,03%</strong> ou <strong>R$ 592,00</strong> após <strong>12 meses.</strong> </p>

<br/>
<h3>Algumas dicas com base na implementação feita pelo professor, que foi feita com a utilização de React Hooks:</h3>
<ul>
  <li>
    1. Faça com que os três inputs do estado da aplicação sejam do tipo number para conseguir manipular os dados com as setas “para cima” e “para baixo” do teclado.
  </li>
  <li>
    2. Será cobrado nas questões apenas o valor do montante até 100.000 reais, taxa de juros entre -12% e 12% ao mês e parcelas de 1 a 36.
  </li>
  <li>
    3. Além dos três inputs, crie mais uma variável de estado que será responsável por controlar as “parcelas”.
  </li>
  <li>
    4. Faça a implementação do cálculo das parcelas com <strong>useEffect</strong>, utilizando como <strong>deps</strong> as variáveis de estado referentes aos três          inputs. Nesta implementação, eu (Raphael Gomide) <strong>não reaproveitei</strong> o valor atual das parcelas.</li>
  <li>Cor utilizada para a barra do salário líquido: #16a085</li>
  <li>
    5. Quebre a aplicação em quatro componentes: <App />, <Form /> (com os três
       inputs), <Installments /> e <Installment /> (parcelas/parcela, em inglês).
  </li>
  <li>
    6. Não deixem de assistir o vídeo de apresentação deste desafio, onde demonstro a aplicação em funcionamento e dou mais algumas dicas. 
  </li>
</ul>

<br/>
<h2>Procedimento de instalação do projeto:</h2>
<ul>
  <li>1 - No diretório raiz do projeto execute o comando de instalação de depedências: <strong>yarn</strong></li>
  <li>2 - No diretório raiz do projeto execute o comando de inicialização: <strong>yarn start</strong></li>
</ul>

<br/>
<h2>Aplicação em execução</h2>
<img src="https://user-images.githubusercontent.com/31490903/85907051-9cd83e80-b7e6-11ea-9eea-ffa2afbaecf4.gif">
