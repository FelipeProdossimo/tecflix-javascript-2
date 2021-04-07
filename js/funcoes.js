function AdicionarFilme(){
    
    //adicionar ID sempre com #
    //endsWith para termicar com ("tal caractere")

    let campoFilme = document.querySelector("#filme");
    let imagemFilme = campoFilme.value;
    if(imagemFilme.endsWith(".jpg")){
    ListarFilmesNaTela(imagemFilme);
    }else{
        alert("Isso não é uma imagem!");
    }

    //para pegar só o conteudo dentro do campo ---- valor do campo
    /*let imagemFilme = campoFilme.value;
    console.log(imagemFilme);*/

    function ListarFilmesNaTela(imagem){
        
        let listaFilmes = document.querySelector("#listaFilmes");
        let elementoFilme = "<img src=" + imagem + ">";
        console.log(elementoFilme);
        //listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
        listaFilmes.innerHTML += elementoFilme;
    }
}