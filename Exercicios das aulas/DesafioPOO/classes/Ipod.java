package DesafioPOO.classes;

import DesafioPOO.interfaces.AplicativoMusica;

public class Ipod implements AplicativoMusica{

    @Override
    public void mostrarArtistas(){

        //Exemplos de dados
        String[] artistas = {"Travis Scott", "Post Malone", "Justin Bieber"};

        System.out.println("\nArtistas: ");
        for (String artista : artistas) {
            System.out.println("-> " + artista);
        }
    }

    @Override
    public void tocarMusica(String musica) {
        System.out.println("\nTocar Musica " + musica);
    }

    @Override
    public void pararMusica() {
        System.out.println("\nMúsica pausada");
    }
    
}
