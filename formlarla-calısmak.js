let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit',eventHandler)
const alertDOM=document.querySelector("#alert")

const ALERT = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong>Hatalı bilgi girişi.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function eventHandler(event){
    event.preventDefault()  //default işlemini engelledi
    const USER_NAME = document.querySelector("#username")
    const SCORE =  document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)  
        USER_NAME.value=""                     //gönderdikten sonra sıfırladık 
        SCORE.value=""
    }else{
       alertDOM.innerHTML = ALERT
    }
   
}


let userListDOM =document.querySelector("#userList")

const addItem = (userName, score) => {         // func arrow
   let liDOM =document.createElement('li')
   liDOM.innerHTML=`${userName} 
   <span class="badge bg-primary rounded-pill">${score} </span>`
   liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
   userListDOM.append(liDOM)
}