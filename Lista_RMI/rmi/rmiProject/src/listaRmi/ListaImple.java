package listaRmi;

/*Autor: Alexandre Oliveira dos Santos
 */

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
import java.util.HashMap;
import java.util.Map;

public class ListaImple extends UnicastRemoteObject implements Lista{

	private static final long serialVersionUID = 1L;
	
	//Vari�veis a serem utilizadas
	String nome, cargo, sexo, menorMaior, categoria, nivel, status, situacao;
	double salario = 0, nota1 = 0, nota2 = 0, nota3 = 0, altura = 0, salBruto = 0, salLiquido = 0, saldoMedio =0, reajuste = 0, valCredito = 0, media =0, mediaFinal =0, pesoIdeal = 0;
	int idade = 0, numDepend = 0, tempoServ = 0;
	
	protected ListaImple() throws RemoteException{
		super();
	}
	
	public Object reajustaSalario(String nome, String cargo, double salario) throws RemoteException{
        switch (cargo){
        case "operador":
	        reajuste = salario + (salario * 0.2);
        break;
        case "programador":
        	reajuste = salario + (salario * 0.18);
        break;
        }
        
        Map<String, String> numberMappingQ1 = new HashMap<>();
		numberMappingQ1.put("Nome", nome);
		numberMappingQ1.put("Sal�rio Reajustado", Double.toString(reajuste));
                
		return numberMappingQ1;
	}
	
	public Object verificaMaioridade(String nome, String sexo, int idade) throws RemoteException{
		switch (sexo){
        case "M":
	        if(idade < 18){
		        status = "menor de Idade";
        	}
        	else{
        		status = "maior de idade";
        	}
        break;
        case "F":
        	if(idade < 21){
		        status = "menor de idade";
        	}
        	else{
        		status = "maior de idade";
        	}
        break;
        }
		
		Map<String, String> numberMappingQ2 = new HashMap<>();
		numberMappingQ2.put("Nome", nome);
		numberMappingQ2.put("Status", status);
                
		return numberMappingQ2;
	}

	public Object verificaMedia(double nota1, double nota2, double nota3) throws RemoteException{
		media = (nota1 + nota2) / 2;
        mediaFinal = ((media+nota3)/2);
        
		if(media > 7){
	        situacao = "Estudante aprovado!";
        }else if(mediaFinal > 5){
        	situacao = "Estudante realizou exame N3 e foi aprovado";
        }else if(media > 3 && media < 7){
        	situacao = "Estudante devera realizar exame N3!";
        }else{
        	situacao = "Estudante reprovado!";
        }
		
		Map<String, String> numberMappingQ3 = new HashMap<>();
		numberMappingQ3.put("Media", Double.toString(media));
		numberMappingQ3.put("Situa��o", situacao);
		
		return numberMappingQ3;
	}

	public Object calculaPesoIdeal(double altura, String sexo) throws RemoteException{
		switch(sexo){
        case "M":
        	pesoIdeal = ((72.7 * altura) - 58);
        break;
        case "F":
        	pesoIdeal = ((62.1 * altura) - 44.7);
        break;
        }
        
		Map<String, String> numberMappingQ4 = new HashMap<>();
		numberMappingQ4.put("Peso Ideal", Double.toString(pesoIdeal));
		numberMappingQ4.put("Sexo", sexo);
		
		return numberMappingQ4;
	}
	
	public Object classificaNadador(int idade) throws RemoteException{
		if(idade >= 5 && idade < 8){
        	categoria = "Infantil A";
    	}else if(idade >= 8 && idade < 11){
    		categoria = "Infantil B";
    	}else if(idade >= 11 && idade < 14){
    		categoria = " Juvenil A";
    	}else if(idade >= 14 && idade < 18){
    		categoria = "Juvenil B";
    	}else if(idade >= 18){
    		categoria = "Adulto";
    	}else{
    		categoria = "A idade informada nao pode ser relacionada a nenhuma categoria";
    	}
		
		Map<String, String> numberMappingQ5 = new HashMap<>();
		numberMappingQ5.put("Categoria", categoria);
				
		return numberMappingQ5;
	}
	
	public Object calculaSalarioLiquido(String nome, String nivel, double salario, int numDepend) throws RemoteException{
		switch(nivel){
		case "A":
			if(numDepend >= 1){
				salLiquido = (salBruto - (salBruto * 0.08));
			}else{
				salLiquido = (salBruto - (salBruto * 0.03));
			}
		break;

		case "B":
			if(numDepend >= 1){
				salLiquido = (salBruto - (salBruto * 0.1));
			}else{
				salLiquido = (salBruto - (salBruto * 0.05));
			}
		break;

		case "C":
			if(numDepend >= 1){
				salLiquido = (salBruto - (salBruto * 0.15));
			}else{
				salLiquido = (salBruto - (salBruto * 0.08));
			}
		break;

		case "D":
			if(numDepend >= 1){
				salLiquido = (salBruto - (salBruto * 0.17));
			}else{
				salLiquido = (salBruto - (salBruto * 0.1));
			}
		break;
		}
		
		Map<String, String> numberMappingQ6 = new HashMap<>();
		numberMappingQ6.put("Sal�rio liquido", Double.toString(salLiquido));
		numberMappingQ6.put("Nome", nome);
		numberMappingQ6.put("Nivel", nivel);
				
		return numberMappingQ6;
	}
	
	public Object verificaAposentadoria(String sexo, int tempoServ, int idade) throws RemoteException{
		switch(sexo){
		case "M":
			if(idade >= 65 && tempoServ >= 30){
				situacao = "Apto para aposentadoria";
			}else{
				situacao = "Inapto para aposentadoria";
			}
		break;

		case "F":
			if(idade >= 60 && tempoServ >= 25){
				situacao = "Apta para aposentadoria";
			}else{
				situacao = "Inapta para aposentadoria";
			}
		break;

		default:
			situacao = "Verifique os valores inseridos e tente novamente";
		}
		
		Map<String, String> numberMappingQ7 = new HashMap<>();
		numberMappingQ7.put("Sexo", sexo);
		numberMappingQ7.put("Idade", Integer.toString(idade));
		numberMappingQ7.put("Situa��o", situacao);
		
		return numberMappingQ7;
	}
	
	public Object concederCredito(double saldoMedio) throws RemoteException{
		if(saldoMedio < 201){
    		valCredito = 0;
    	}else if(saldoMedio >= 201 && saldoMedio < 401){
    		valCredito = (saldoMedio * 0.2);
    	}else if(saldoMedio >= 401 && saldoMedio < 601){
    		valCredito = (saldoMedio * 0.3);
    	}else if(saldoMedio >= 601){
    		valCredito = (saldoMedio * 0.4);
    	}
		
		Map<String, String> numberMappingQ8 = new HashMap<>();
		numberMappingQ8.put("Saldo M�dio", Double.toString(saldoMedio));
		numberMappingQ8.put("Cr�dito", Double.toString(valCredito));
		
		return numberMappingQ8;
	}
	
}
