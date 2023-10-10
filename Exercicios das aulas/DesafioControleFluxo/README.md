
# Desafio - Controle de Fluxo

__Enunciado:__

O sistema deverá receber dois parâmetros via terminal que representarão dois números inteiros, com estes dois números você deverá obter a quantidade de interações (for) e realizar a impressão no console (System.out.print) dos números incrementados, exemplo:

* Se você passar os números 12 e 30, logo teremos uma interação (for) com 18 ocorrências para imprimir os números, exemplo: "Imprimindo o número 1", "Imprimindo o número 2" e assim por diante.
* Se o primeiro parâmetro for MAIOR que o segundo parâmetro, você deverá lançar a exceção customizada chamada de ParametrosInvalidosException com a segunda mensagem: "O segundo parâmetro deve ser maior que o primeiro"

__Resolução:__

Usei o template original mas fiz algumas alterações e melhorias nele.

* No método **validarEntrada** é solicitado os dois números e logo em seguida validado se o _parametroDois_ é maior que o _parametroUm_, caso for _true_ é lançada uma exceção dizendo _"O segundo parâmetro deve ser maior que o primeiro"_. No final o retorno é a diferença entre os valores.

``` 
static int validarEntrada(Scanner scanner) throws ParametrosInvalidosException{

		System.out.println("Digite o primeiro parâmetro");
		int parametroUm = scanner.nextInt();

		System.out.println("Digite o segundo parâmetro");
		int parametroDois = scanner.nextInt();

		if (parametroUm > parametroDois) {
            throw new ParametrosInvalidosException("O segundo parâmetro deve ser maior que o primeiro.");
        }else{
			return parametroDois - parametroUm;
		}	
	}
```

* Existe o método **contar** que recebe de parâmetro um valores inteiro e imprime todos os números até chegar nesse valor.

```
static void contar(int diferenca){
        for(int i = 1; i <= diferenca; i++){
            System.out.println("Imprimindo o número " + i);
        }
	}
```
* O método **main** que é o principal do código, nele contém:

    1. Iniciando o Scanner
    2. _Try catch_ que começa rodando o método **contar** passando o método **validarEntrada** como parâmetro
    3. Caso dispare a exceção _InputMismatchException_, a mensagem de retorno é _"Entrada inválida. Por favor, digite números inteiros."_
    4. Caso dispare a exceção _ParametrosInvalidosException_, a mensagem de retorno é _"O segundo parâmetro deve ser maior que o primeiro."_
    5. No _finally_ o scanner é encerrado.

```
public static void main(String[] args) {		
		Scanner terminal = new Scanner(System.in);
        
		try{
			contar(validarEntrada(terminal));
		}catch (java.util.InputMismatchException e){
			System.out.println("Entrada inválida. Por favor, digite números inteiros.");
		}catch (ParametrosInvalidosException e){			
			System.out.println(e.getMessage());
		}finally{
			terminal.close();
		}
	}
```
* Foi criado um novo arquivo para tratar a exceção de parâmetro inválido. 

    OBS: Poderia estar no mesmo arquivo da **main**.

```
public class ParametrosInvalidosException extends Exception{

    public ParametrosInvalidosException(String mensagem){
        super(mensagem);
    }
}
```

__Exemplo:__

* Caso seja passado o valor 5 e 10: 

![Exemplos com dados corretos](https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioControleFluxo/Exemplos/Exemplo1.png)

* Caso seja passado 10 e 5 _(Número um não pode ser maior que o número dois)_

![Exemplos com valor 1 maior que o valor 2](https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioControleFluxo/Exemplos/Exemplo2.png)

* Caso seja passado 10 e A _(A é um valor inválido)_

![Exemplos com dado inválido](https://github.com/luccabugatti/Bootcamp-Santander/blob/main/Exercicios%20das%20aulas/DesafioControleFluxo/Exemplos/Exemplo3.png)
