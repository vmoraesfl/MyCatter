# My Catter- 2020
### IMElog / Logística

![](https://github.com/hackingrio/hackrio-logistica-2020-imelog/blob/master/Ativo%2015%404x-100.jpg)

#### Apresentação 

   Observando as dificuldades enfrentadas por empresas do ramo de comércio em fornecer informações de maneira rápida e prática, foi criado o MyCatter, um aplicativo mobile com funcionalidades aplicadas em sistema web que traz transparência do serviço logístico de entrega aliado à personalização de sua plataforma para uma maior conexão cliente-empresa


#### O Produto

   Esta aplicação é focada em apresentar ao usuário as informações relativas a localização no caminho logístico (Etapas de entrega já concluídas, localização em tempo real)  e situação de faturamento da compra.
   
   Aliando  o acompanhamento de processos logísticos e da situação de faturamento com uma plataforma de visualização simples e de fácil navegação, o MyCatter revoluciona a experiência do seu cliente na hora da consulta.
   
   Buscando personalizar a experiência do usuário, o aplicativo traz detalhes específicos da empresa contratante. A Sotreq - consolidada empresa de soluções em infraestrutura - entende, por exemplo, que o Chat integrado facilita a comunicação entre cliente e empresa, garantindo uma comunicação ágil e objetiva na confirmação de dados, local e data de entrega e outras preferências e quaisquer observações relacionadas ao processo.
   
   No caso da Sotreq, o agendamento da entrega técnica é opcional e realizado no momento em que a máquina é despachada para a transportadora. Independente do agendamento da visita técnica, é disponibilizado um tour virtual em plataforma Web com recursos 3D para as devidas explicações técnicas acerca do produto. O Tour fica disponível mesmo depois da entrega final , para eventuais consultas acerca do funcionamento da máquina. O serviço personalizado do MyCatter é fundamental, então, para que o usuário tenha a máxima experiência Sotreq.

#### Informações adicionais 

   Foi implementada uma estrutura de autorização para login no aplicativo com um banco de dados funcional em Firebase, **para obter acesso ao resto do aplicativo basta se registrar no botão de registro presente na interface de login**. Seus dados de acesso serão gravados no banco de dados de forma criptografada. Esse login quando em produção estaria integrado com o login da empresa contratante.
   
   Como dito anteriormente, nosso produto se baseia num aplicativo mobile e num sistema web voltado para a visualização 3D dos equipamentos que porventura foram adquiridos. Porém, para que os sistemas cumpram seus objetivos de forma coesa, é importante que as duas aplicações sejam iniciadas simultaneamente. 

   Ao iniciar a **aplicação mobile**, para que a visualização 3D seja feita, é essencial que a pasta `3D-visualizations` seja acessada, iniciando o **sistema web** por meio o comando `npm start`. Sendo assim, com os dois sistemas sendo executados, o usuário poderá atingir a experiência que propomos nesse desafio. O padrão de visualização do site é o link: `localhost:3000/#/escavadeira`, por exemplo.

