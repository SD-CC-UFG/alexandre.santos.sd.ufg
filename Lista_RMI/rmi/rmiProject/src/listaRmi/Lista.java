package listaRmi;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Lista extends Remote {
	public Object reajustaSalario(String nome, String cargo, double salario) throws RemoteException;
	public Object verificaMaioridade(String nome, String sexo, int idade) throws RemoteException;
	public Object verificaMedia(double nota1, double nota2, double nota3) throws RemoteException;
	public Object calculaPesoIdeal(double altura, String sexo) throws RemoteException;
	public Object classificaNadador(int idade) throws RemoteException;
	public Object calculaSalarioLiquido(String nome, String nivel, double salario, int numDepend) throws RemoteException;
	public Object verificaAposentadoria(String sexo, int tempoServ, int idade) throws RemoteException;
	public Object concederCredito(double saldoMedio) throws RemoteException;
}
