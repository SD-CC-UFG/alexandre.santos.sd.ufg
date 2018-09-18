package listaRmi;

import java.rmi.Naming;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.io.Serializable;

public class Client implements Serializable{
	private static final long serialVersionUID = 1L;

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Informe o numero da questao (1 - 8): ");
		int questao = scan.nextInt();
    	scan.nextLine();
		
    	//Vari�veis a serem utilizadas
    	String nome, cargo, sexo, nivel;
    	double salario = 0, nota1 = 0, nota2 = 0, nota3 = 0, altura = 0, saldoMedio =0;
    	int idade = 0, numDepend = 0, tempoServ = 0;
    	
		try{
			Lista l = (Lista) Naming.lookup("rmi://192.168.1.4:1099/ListaService");
			
			switch(questao){
			case 1:
				System.out.println("Informe o nome do Funcionario: \n");
	        	nome = scan.nextLine();
	        	System.out.println("Informe o cargo do Funcionario: \n");
	        	cargo = scan.nextLine();
	        	System.out.println("Informe o salario atual do Funcionario: \n");
	        	salario = scan.nextInt();
	        	
	        	Map<String, String> numberMappingQ1 = new HashMap<>();
            	numberMappingQ1 = (Map<String, String>) l.reajustaSalario(nome, cargo, salario);
            	System.out.println(numberMappingQ1);
	        	
			break;
			case 2:
				System.out.println("Informe o nome do usuario: \n");
            	nome = scan.nextLine();
            	System.out.println("Informe o sexo do usuario (F ou M): \n");
            	sexo = scan.nextLine();
            	System.out.println("Informe a idade do usuario: \n");
            	idade = scan.nextInt();
            	
            	Map<String, String> numberMappingQ2 = new HashMap<>();
            	numberMappingQ2 = (Map<String, String>) l.verificaMaioridade(nome, sexo, idade);
            	System.out.println(numberMappingQ2);
            	
			break;
			
			case 3:
				System.out.println("Informe a nota N1: \n");
            	nota1 = scan.nextDouble();
            	System.out.println("Informe a nota N2: \n");
            	nota2 = scan.nextDouble();
            	System.out.println("Informe a nota N3: \n");
            	nota3 = scan.nextDouble();
            	
            	Map<String, String> numberMappingQ3 = new HashMap<>();
            	numberMappingQ3 = (Map<String, String>) l.verificaMedia(nota1, nota2, nota3);
            	System.out.println(numberMappingQ3);
            	
			break;
			
			case 4:
				System.out.println("Informe o sexo: F ou M");
            	sexo = scan.nextLine();
            	System.out.println("Informe a altura: \n");
            	altura = scan.nextDouble();
            	
            	Map<String, String> numberMappingQ4 = new HashMap<>();
            	numberMappingQ4 = (Map<String, String>) l.calculaPesoIdeal(altura, sexo);
            	System.out.println(numberMappingQ4);
            	
			break;
			
			case 5:
				System.out.println("Informe a idade");
            	idade = scan.nextInt();
            	
            	Map<String, String> numberMappingQ5 = new HashMap<>();
            	numberMappingQ5 = (Map<String, String>) l.classificaNadador(idade);
            	System.out.println(numberMappingQ5);
            	
			break;
			
			case 6:
				System.out.println("Informe o nome: ");
            	nome = scan.nextLine();
            	System.out.println("Informe o n�vel (A, B, C ou D): \n");
            	nivel = scan.nextLine();
            	System.out.println("Informe o sal�rio bruto: \n");
            	salario = scan.nextDouble();
            	System.out.println("Informe o n�mero de dependentes: \n");
            	numDepend = scan.nextInt();
            	
            	Map<String, String> numberMappingQ6 = new HashMap<>();
            	numberMappingQ6 = (Map<String, String>) l.calculaSalarioLiquido(nome, nivel, salario, numDepend);
            	System.out.println(numberMappingQ6);
            	
			break;
			
			case 7:
				System.out.println("Informe o sexo (M ou F): ");
            	sexo = scan.nextLine();
            	System.out.println("Informe a idade: \n");
            	idade = scan.nextInt();
            	System.out.println("Informe o tempo de servi�o: \n");
            	tempoServ = scan.nextInt();
            	
            	Map<String, String> numberMappingQ7 = new HashMap<>();
            	numberMappingQ7 = (Map<String, String>) l.verificaAposentadoria(sexo, tempoServ, idade);
            	System.out.println(numberMappingQ7);
            	
			break;
			
			case 8:
				System.out.println("Informe o saldo medio do cliente: ");
            	saldoMedio = scan.nextDouble();
            	
            	Map<String, String> numberMappingQ8 = new HashMap<>();
            	numberMappingQ8 = (Map<String, String>) l.concederCredito(saldoMedio);
            	System.out.println(numberMappingQ8);
            	
            break;
			
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}