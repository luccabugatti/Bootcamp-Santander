package DesafioPOO.classes;

import DesafioPOO.interfaces.AplicativoMusica;
import DesafioPOO.interfaces.Celular;
import DesafioPOO.interfaces.Email;
import DesafioPOO.interfaces.Fotos;
import DesafioPOO.interfaces.Navegador;

public class Iphone implements Celular, AplicativoMusica, Fotos, Email, Navegador{
    
    @Override
    public void ligar(String numero) {
    System.out.println("\nLigando para " + numero + "...");
    }

    @Override
    public void atender(String nomeContado) {
        System.out.println("\nRecebendo chamada de " + nomeContado); 
    }

    @Override
    public void exibirCaixaPostal(){
        System.out.println("\nExibindo caixa postal");
    }

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

    @Override
    public void mostrarContatos(){
        System.out.println("\nMostrando contatos");
    }

    @Override
    public void mudarWallpaper(){
        System.out.println("\nWallpaper alterado");
    }

    @Override
    public void mostrarFotos() {
        System.out.println("\nMostrando fotos");
    }

    @Override
    public void abrirEmail() {
        System.out.println("\nAbrindo email");
    }

    @Override
    public void pesquisarSite(String site) {
        System.out.println("\nAbrindo " + site);
    }

}