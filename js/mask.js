

/* Máscaras ER */
function mascara(value,func){
  v_obj=value
  v_fun=func
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value= v_fun(v_obj.value)
}

function telefone(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d{5})(\d{4})$/,"($1) $2-$3"); 
  return v;
}

function cpf(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4"); 
  return v;
}

function dataNascimento(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d{2})(\d{4})$/,"$1/$2/$3"); 
  return v;
}

function email(v){
  let isValid = v.match(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i); 
  
  console.log(!isValid)

  if(isValid){
    return v;
  }else{
    alert('Email inválido');}
    return '';
  }


function cep(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{5})(\d{3})$/,"$1-$2"); 
  return v;
}

function onlyNumber(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  return v;
}

function notNumber(v){
  v=v.replace(/[^a-zA-Z]/g,"");             //Remove tudo o que não é dígito
  return v;
}