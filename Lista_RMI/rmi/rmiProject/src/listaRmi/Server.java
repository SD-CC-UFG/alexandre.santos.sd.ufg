package listaRmi;

import java.rmi.Naming;
import java.rmi.Remote;
import java.rmi.registry.LocateRegistry;

public class Server {
	static String IP = "192.168.1.4";
	static int PORTA = 1099;
	
	Server() {
		try{
			System.setProperty("java.rmi.server.hostname", IP);
			LocateRegistry.createRegistry(PORTA);
			Lista l = new ListaImple();
			Naming.bind("ListaService", (Remote) l);
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
	
	public static void main(String[] args) {
		new Server();
		System.out.println("Server em funcionamento no endere�o: " +IP +". Porta: " + PORTA);
	}
	
}
