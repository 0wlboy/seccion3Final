/**
 * @global regexName expresion regular para nombres
 */
const regexName = /^([A-Za-z ]){2,30}$/;
/**@global regexEmail expresion regular para correos */
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
/**@global regexPassword expresion regular para contraseñas */
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

/**@global button boton */
const button = document.getElementById('button');
/**@global inputFirstName campo de texto para el primer nombre */
const inputFirstName = document.getElementById('firstName');
/**@global valorFirst datos ingresados por el usuario */
let valorFirst;
/**@global inputLasttName campo de texto para el apellido */
const inputLasttName = document.getElementById('lastName');
/**@global valorLast apellido */
let valorLast;
/**@global inputEmail campo de texto para el correo */
const inputEmail = document.getElementById('email');
/**@global  valorEmail correo*/
let valorEmail;
/**@global inputPassword campo de texto para la contraseña */
const inputPassword = document.getElementById('password');
/**"global valorPassword contraseña*/
let valorPassword;
/**@global  againPassword campo de texto para la confirmacion de la contraseña*/
const againPassword = document.getElementById('againPassword')
/**@global  valorAgainPassword confirmacion de la contraseña*/
let valorAgainPassword;


/**
 * @function
 * comprueba si el primer nombre es en un formato valido. En caso de no serlo desactiva el boton
 */
inputFirstName.addEventListener('input',()=>{ 
  /**@global alertFirstName mensaje de alerta si el formato no es valido */
  const alertFirstName = document.getElementById('alerFirstName');
  valorFirst = inputFirstName.value;
  if(regexName.test(valorFirst)){
    alertFirstName.textContent =``;
    button.style.opacity = '1'
    button.disabled = false
  }else{
    alertFirstName.textContent = `Porfavor, evite usar numeros y que sea mayor de 2 caracteres`;
    button.style.opacity = '0.25'
    button.disabled = true
  }
})

/** 
 * @function
 * comprueba si el apellido es en un formato valido. En caso de no serlo desactiva el boton
 */
inputLasttName.addEventListener('input',()=>{
  /**@global alertLastName mensaje de alerta si el formato no es valido */
  const alertLastName = document.getElementById('alerLastName');
  valorLast = inputLasttName.value;
  if(regexName.test(valorLast)){
    alertLastName.textContent =``;
    button.style.opacity = '1'
    button.disabled = false
  }else{
    alertLastName.textContent = `Porfavor, evite usar numeros y que sea mayor de 2 caracteres`; 
    button.style.opacity = '0.25'
    button.disabled = true
  }
})

/**
 * @function
 * comprueba si el correo es un formato valido. En caso de no serlo desactiva el boton
 */
inputEmail.addEventListener('input',()=>{
  /**@global alertEmail mensaje de alerta si el formato no es valido */
  const alertEmail = document.getElementById('alertEmail');
  valorEmail = inputEmail.value;
  if(regexEmail.test(valorEmail)){
    alertEmail.textContent =``;
    button.style.opacity = '1'
    button.disabled = false
  }else{
    alertEmail.textContent = `Correo invalido`;
    button.style.opacity = '0.25'
    button.disabled = true
  }
})

/**
 * @function
 * comprueba si la contraseña cumple con los requisitos. En caso de no serlo desactiva el boton
 */
inputPassword.addEventListener('input',()=>{
  /**@global requisitos requisitos a cumplir para la contraseña*/
  const requisitos = document.getElementById('requisitos');
  valorPassword = inputPassword.value;
  if(regexPassword.test(valorPassword)){
    requisitos.innerHTML = ``;
    button.style.opacity = '1'
    button.disabled = false
  }else{
    requisitos.innerHTML = `<li class="text-red-500">Debe de tener almenos 8 caracteres</li>
          <li class="text-red-500">Debe de tener almenos una mayuscula</li>
          <li class="text-red-500">Debe de tener almenos una minuscula</li>
          <li class="text-red-500">Debe de tener almenos un numero</li>
          <li class="text-red-500">Debe de tener almenos un caracter especial (!*&$#_?%)</li>`;
    button.style.opacity = '0.25'
    button.disabled = true      
    }
})


/**
 * @function
 * comprueba si la contraseña igual a la primera contraseña. En caso de no serlo desactiva el boton
 */
againPassword.addEventListener('input',()=>{
  /**@global alertPassword mensaje de alerta si la contraseña no es igual*/
  const alertPassword = document.getElementById('alertPassword');
  valorAgainPassword = againPassword.value;
  if(valorAgainPassword === valorPassword){
    alertPassword.textContent = ``;
    button.style.opacity = '1'
    button.disabled = false
  }else{
    alertPassword.textContent = `Las contraseñas deben de coincidir`;
    button.style.opacity = '0.25'
    button.disabled = true
  }
})


/**
 * @function
 * comprueba por ultima vez los datos dados por el usuario. Si todo esta bien envia un mensaje, si hay un error envia otro mensaje.
 */
button.addEventListener('click',(event) =>{
  event.preventDefault()
  if((regexName.test(valorFirst))&&(regexName.test(valorLast))&&(regexEmail.test(valorEmail))&&(regexPassword.test(valorPassword))){
    alert(`Todo esta bien`)
  }else{
    alert(`Algo esta mal`)
  }
})

