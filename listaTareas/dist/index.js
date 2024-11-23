/**
 * @class
 * @name Tareas 
 * @param title
 * @param description
 * @property {boolean} completed 
 */
class Tareas{
  constructor(title,description){
    this.title = title,
    this.description = description,
    this.completed = false
  }
}

/**
 * @function addTask
 * @description Añade una tarea utilizando el valor del titutlo y la descripcion dado por el usuario. El titulo es el unico valor obligatorio
 */
const addtask = () =>{
  const titleValue = title.value.trim()
  const descriptionValue = description.value.trim()

  if(!titleValue.length){
    alert(`Porfavor introduzca un tarea`)
  }else{
    const tarea = new Tareas(titleValue,descriptionValue)
    task.push(tarea)
    alert(`se introdujo una tarea`)
    updateTask();
    updateStats();
  }
}

/**
 * @function toggleTaskComplete
 * @param {number} index 
 * @description cambia el valor booleano completed de la tarea true cuando el usuario checkea la tarea
 */
const toggleTaskComplete = (index) =>{
  task[index].completed = !task[index].completed;
  console.log({ task })
  updateTask();
  updateStats();
}

/**
 * @function deleteTask
 * @param {number} index
 * @description borra la tarea cuando el usuario le da click al icono de borrado 
 */
const deleteTask = (index) =>{
  task.splice(index,1);
  updateTask();
  updateStats();
}

/**
 * @function updateStats
 * @description actualiza las estadisticas de la tarea. Revisa cuantas tareas completadas hay y cuantas no completadas para actualizar su numero en el contador
 */
const updateStats = () =>{
  const completedTask = task.filter((task) => task.completed).length
  const totalTask = task.length

  numbers.innerText = ``
  numbers.innerText = `${completedTask} / ${totalTask}`
}

/**
 * @function updateTask
 * @description Añade y quita tarea en el html para que el usuario las visualice
 */
const updateTask = () =>{
  lista.innerHTML = '';

  task.forEach((element, index) =>{
    const listaItem = document.createElement('li');
    listaItem.innerHTML = `
    <div class="relative flex w-full bg-purple-600 p-4 border-solid border-2 border-purple-700 rounded-xl ${element.completed?'completed':''}">
        <div type="button" id='exit' class='absolute top-1 right-1 rounded-bl-lg cursor-pointer' onClick='deleteTask(${index})'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </div>
        <div class="flex items-center h-5">
            <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" ${element.completed ? 'checked' : ''}>
        </div>
        <div class="ms-2 text-sm">
            <label for="helper-checkbox" class="font-medium text-gray-100"}>${element.title}</label>
            <p id="helper-checkbox-text" class="text-xs font-normal text-gray-100">${element.description}</p>
        </div>
      </div>
    `;
    listaItem.addEventListener('change',() => toggleTaskComplete(index));
    lista.append(listaItem)
  })
}

//array en donde se almacen las tareas
let task = [];

//ventana
const taskWindow = document.getElementById('addTask')
//botones 
const buttonWindow = document.getElementById('showWindow')
const buttonAdd = document.getElementById('Añadir')
const exit = document.getElementById('exit')
//inputs
const title = document.getElementById('title');
const description = document.getElementById('description')
//lista en el html
const lista = document.getElementById('lista')
//contador de tareas
const numbers = document.getElementById('numbers')

//eventos de botones
buttonWindow.addEventListener('click', ()=>{
  taskWindow.style.display = 'block'
})

exit.addEventListener('click',()=>{
  taskWindow.style.display = 'none'
})

buttonAdd.addEventListener('click', ()=>{
  addtask();
 
})