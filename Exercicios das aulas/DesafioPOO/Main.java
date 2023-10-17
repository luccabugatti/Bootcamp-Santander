package DesafioPOO;

import DesafioPOO.classes.Iphone;
import DesafioPOO.classes.Ipod;

public class Main {
    public static void main(String[] args) {
        Iphone meuIphone = new Iphone();
        Ipod meuIpod = new Ipod();

        System.out.println("IPHONE");
        meuIphone.ligar("555-3737");
        meuIphone.mostrarArtistas();
        meuIphone.mostrarFotos();
        meuIphone.abrirEmail();
        meuIphone.pesquisarSite("www.google.com");

        System.out.println("\nIPOD");
        meuIpod.mostrarArtistas();
        meuIpod.tocarMusica("Sunflower");
        meuIpod.pararMusica();
    }
}
