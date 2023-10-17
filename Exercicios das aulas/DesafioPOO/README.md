# Desafio - POO

__Enunciado:__

Modelagem e diagramação da representação em UML e Código no que se refere ao componente iPhone.

Com base no vídeo de lançamento do iPhone conforme link abaixo, elabore em uma ferramenta de UML de sua preferência a diagramação das classes e interfaces com a proposta de representar os papéis do iPhone de: Reprodutor Musicial, Aparelho Telefônico e Navegador na Internet. Em seguida crie as classes e interfaces no formato de arquivos .java

[Link de lançamento Iphone](https://www.youtube.com/watch?v=9ou608QQRq8)

__Resolução:__

Assistindo a apresentação eu criei a modelagem UML abaixo:

![Modelo UML](https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioPOO/assets/UML.png)

A partir dai comecei a implementar varias interfaces referente a parte do celular, fotos, email, navegador e aplicativo de música. Depois criei a classe Iphone que implementa todos essas features: 

![Classe Iphone implementando interfaces](https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioPOO/assets/iphoneImplements.png)

Depois criei a classe Ipod, diferente do Iphone pois ela só implementa a interface AplicativoMusica.

![Classe Ipod implementando interfaces](https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioPOO/assets/ipodImplements.png)

Criei uma classe main para instanciar as duas classe _(Iphone e Ipod)_ Iphone pode usar todos os métodos das interfaces e a do Ipod apenas do AplicativoMusica.

<p float="left">
  <img src="https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioPOO/assets/mainIphone.png" width="400" style="margin-right: 10px;" alt="Chamada de métodos Iphone"/>
  <img src="https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioPOO/assets/mainIphoneResultado.png" width="250" alt="Resultado Iphone"/> 
</p>

<p float="left">
  <img src="https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioPOO/assets/mainIpod.png" width="400" style="margin-right: 10px;" alt="Chamada de métodos Ipod"/>
  <img src="https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioPOO/assets/mainIpodResultado.png" width="250" alt="Resultado Ipod"/> 
</p>
