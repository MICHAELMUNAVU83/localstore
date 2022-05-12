let input = document.querySelector('.storage')
let namee = document.querySelector('.name')
let button = document.querySelector('.save')

input.addEventListener('keyup', function(){
    namee.textContent= input.value
    
    
})
button.addEventListener('click', function(e){
    e.preventDefault
})

button.addEventListener('click', function(){
    localStorage.setItem('name', namee.textContent)
    
    
})

