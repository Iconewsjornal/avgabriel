function acesso(form){

    /*
    Verifica nome e senha e converte maiúsculas em minuscalas
    */
    
        form.nome.value = form.nome.value.toLowerCase ()
        form.senha.value = form.senha.value.toLowerCase ()
        if (form.nome.value == "pedro casella" && form.senha.value == "icc2018133" ) {
          location = "socio/pedro/paginasociopedro.html" }

        if (form.nome.value == "ruan souza" && form.senha.value == "eshelleytesta" ) {
          location = "socio/ruan/paginasocioruan.html" }

        if (form.nome.value == "raquel perin" && form.senha.value == "melhoramigamexma" ) {
          location = "socio/raquel/paginasocioraquel.html" }
          
        else {
          form.nome.value=""
          form.senha.value=""
          alert("Verifique se login e senha estão corretos.")
        }
      }