const userInput=document.getElementById("value");
const Add=document.getElementById("add");
const todoul=document.getElementById("todolist");
const Edit=document.getElementById("edit");
const Delet=document.getElementById("Delet");

let tasks=[];
let editem;
let Editing=false;


const adding=(tasks)=>{
    const {id,Uservalues}=tasks;
    console.log(Uservalues);
    const todolist=document.createElement('li')
    todolist.classList.add('awsome')
    todolist.innerHTML=`<span>${Uservalues}</span>
    <button id="edit" onclick='edittask(${id})'><i class="fa-solid fa-pen ml-44"></i></button>
      <button id="Delet" onclick='delettask(${id})'"><i class="fa-solid fa-trash ml-10"></i></button>`

    todoul.appendChild(todolist)

    userInput.value='';
}


const edittask=(id)=>{
   const editid = id;
   Add.innerHTML="Edit"
   Editing=true;
   editem=tasks.find((task)=>{
    return task.id === id;
   })

   userInput.value=editem.Uservalues;
}

const delettask=(id)=>{
   tasks=tasks.filter((task)=>{
    return task.id !== id
   })
   updateDom(tasks)
   
}

const updateDom=(tasks)=>{
    todoul.innerHTML=null;
    tasks.forEach((task)=>{
        adding(task);
    })
}

Add.addEventListener('click',(event)=>{
    event.preventDefault();

    const Uservalues=userInput.value;
    if(Uservalues){
        if(Editing){
          

       const updateTasks=tasks.map((task)=>{
        if(task.id===editem.id){
            return {id:editem.id,Uservalues}
        }else{
            return tasks
        }
       })
       updateDom(updateTasks);


       Editing=false;
       Add.innerText="Add";
       editem=null;

        }else{

        }
        const store={
            id:Date.now(),
            Uservalues
         }
         tasks.push(store);
         updateDom(tasks);
    }else{
        alert("no")
    }

})
