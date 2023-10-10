package DesafioControleFluxo;

import java.util.Scanner;

public class Contador {
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

	static void contar(int diferenca){
		//realizar o for para imprimir os números com base na variável contagem
        for(int i = 1; i <= diferenca; i++){
            System.out.println("Imprimindo o número " + i);
        }
	}

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
}