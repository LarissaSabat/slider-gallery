let começa=1;
document.getElementById("radio1").checked=true;

setInterval(function(){
    proxImagem();
}, 3000)

function proxImagem(){
    começa++;
    if (começa>4){
        começa=1;
    }
    
    document.getElementById("radio"+começa).checked=true;
}
