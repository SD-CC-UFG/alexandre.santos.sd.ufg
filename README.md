# alexandre.santos.sd.ufg

<strong> Licença GNU - GPL :</strong> "É permitido o uso de parte dos códigos aqui publicados sem autorização prévia, desde que identificada a fonte e o autor".

<strong>Autor:</strong> Alexandre Oliveira dos Santos - Matrícula: 201407237 <br>
<strong>Título:</strong> Arquivos da disciplina de Sistemas Distribuídos - Universidade Federal de Goiás - 2018-2. <br>

<strong>Entrega 1 - Descrição: Implementação da Lista de Exercícios utilizando Node.JS e HTTP - (Solução Cliente-Servidor)</strong><br>
<strong>Pré-Requisitos:</strong> NPM, Node.JS - Express, BodyParser, Pug Template Engine.<br>
<strong>Linguagens e Tecnologias:</strong> Javascript, HTML, Sublime Text<br>
<strong>OBS:</strong> Para executar o projeto inicie o servidor através do arquivo "server.js". No diretório do projeto 
há ainda o documento PDF contendo a descrição dos exercícios e também capturas de tela do projeto em funcionamento
em um dispositivo IOS através do navegador Safari.<br> Para verificar edições anteriores referentes a essa atividade consulte: https://github.com/alexandreoliveirasantos/SD_Lista1

<strong>Entrega 2 - Descrição: Implementação da Lista de Exercícios com a utilização de Remote Procedure Calls - (Solução RPC)</strong><br>
<strong>Linguagens e Tecnlogias:</strong> Java, XML-RPC Protocol, IDE Eclipse<br>
<strong>OBS:</strong> Para executar o projeto inicie o servidor através do arquivo "JavaServer" e em seguida o cliente através do arquivo "JavaClient". No diretório do projeto 
"Lista_Node" há o documento PDF contendo a descrição dos exercícios. Dentro do diretório desta implementação você pode encontrar capturas de tela do projeto em funcionamento (Client / Server) utilizando a IDE Eclipse para execução.

<strong>Entrega 3 - Descrição: Implementação da Lista de Exercícios com a utilização de Remote Method Invocation - (Solução RMI)</strong><br>
<strong>Linguagens e Tecnlogias:</strong> Java, RMI, IDE Eclipse<br>
<strong>OBS:</strong> Para executar o projeto inicie o servidor através do arquivo "Server" e em seguida o cliente através do arquivo "Client". No diretório do projeto "Lista_Node" há o documento PDF contendo a descrição dos exercícios.

<strong>Entrega 4 - Projeto Final - Descrição: Implementação do Projeto Final da disciplina "DigiEscola" - (Em edição)</strong><br>
<strong>Proposta:</strong> Implementar uma solução de invocação remota com arquitetura do tipo request-reply REST-Based e com o uso de operações CRUD. <br>
<strong>Justificativa:</strong>  Senders (Clients) serão Broswers e o Receiver (Server) será implementado com a utilização de Node.JS devido a algumas vantagens fornecidas por essa tecnologia, como:<br>
- IO não-bloqueante devido ao event loop nativo que nunca para de executar e controla todas as requisições lidando com tarefas em concorrência; simplicidade; Javascript everywhere (Client and Server side) que reduz a curva de aprendizado; Alta capacidade de escala; Comunidade ativa; Adequação à proposta do projeto, entre outros.<br><br>

<strong>OBS:</strong> Para suportar as necessidades do projeto algumas tecnologias que usaremos (Back) serão:<br>
- MySQL Database; Redis; Passport; Express; BodyParser; Crypto; Nodemon; Loadtest; etc.<br>
- Além de tecnologias secundárias (Front):<br>
- Pug Template Engine; Jquery; Bootstrap.<br>

<strong>Funcionalidades:</strong> - (Em edição)<br>
As funcionalidades passíveis de serem realizadas neste sistema são: (Editar)<br>
1-Login e Autenticação de usuarios do tipo Secretaria e Responsável com dados persistidos no banco de dados MySQL com o uso do Passport.JS <br> 
2- Estabelecimento de Sessão após Login para os tipos Secretaria e Responsável com o uso do Express Session<br>
3- Cadastro de estudantes e responsáveis (persistência em base de dados MySQL) restrito apenas a usuários do tipo Secretaria<br>
4- Consulta de turmas (relação de alunos da turma) persistidas no banco de dados MySQL restrito apenas a usuários do tipo Secretaria<br>
5- Consulta de frequencia de um dependente (estudante) restrito ao responsável de aluno cadastrado<br>
6- Chat Real Time para realização de reuniões com o uso da tecnologia Socket.io<br>

<strong>Não funcionais</strong> - (Em edição)<br>
1- A senha dos usuários será persistida de forma criptografada na base de dados em SAH1 com chave e com o uso do Crypto.<br>
2- Para manter e impedir que o servidor saia do ar será utilizado a ferramenta Forever que monitora o servidor realizando pings e a reestarta caso verifique que a mesma esta "fora do ar"<br>
3- Para instanciar novos processos da aplicação e trabalhar de forma distribuída usando a mesma porta da rede e melhorando a perfomance será utilizado o módulo cluster para instanciar um maior nº de processos (quantidade de núcleos do processador do servidor).<br>
4- Será realizado um comparativo (benchmark) para analisar e mensurar o desempenho e comportamento da aplicação em dois cenários: Utilizando cluster e também sem cluster, levando-se em conta concorrência (clientes iniciados em paralelo), número de requisições por segundo e outros parâmetros. Será utilizada a ferramenta loadtest para a ação.<br>
5- <br>

<strong>Contato:</strong> alexandresantosti@hotmail.com
