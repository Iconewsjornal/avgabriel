function acesso(form){

    /*
    Verifica nome e senha e converte maiúsculas em minuscalas
    */
    
        form.nome.value = form.nome.value.toLowerCase ()
        form.senha.value = form.senha.value.toLowerCase ()
        if (form.nome.value == "pedro casella" && form.senha.value == "icc2018133" || form.nome.value == "ruan paixão" && form.senha.value == "eshelleytesta" || form.nome.value == "admin" && form.senha.value == "admin123" || form.nome.value == "marcus fragale" && form.senha.value == "iccprofessor" || form.nome.value == "fernando venâncio" && form.senha.value == "iccdiretor" || form.nome.value == "cauã murta" && form.senha.value == "batataquente" || form.nome.value == "lara beringuy" && form.senha.value == "formiguinha" || form.nome.value == "fabiano couso" && form.senha.value == "icc2018254" || form.nome.value == "igor abreu" && form.senha.value == "icc201808" ) {
          location = "socio/paginasocio.html" }
        else {
          form.nome.value=""
          form.senha.value=""
          alert("Verifique se login e senha estão corretos.")
        }
      }