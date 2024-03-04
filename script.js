$(document).ready(function() {
    let começa = 1;
    $("#radio1").prop("checked", true);

    setInterval(function() {
        proxImagem();
    }, 2000);

    function proxImagem() {
        começa++;
        if (começa > 4) {
            começa = 1;
        }

        $("#radio" + começa).prop("checked", true);
    }
});
