//alert("welcome")
const toggleButton = document.getElementById('toggle-btn')
//const toggleButton = document.querySelector('#toggle-btn').addEventListener 
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close') //The toggle() method toggles between hide() and show() for the selected elements
  toggleButton.classList.toggle('rotate') //The classList property returns the CSS classnames of an element

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

window.addEventListener("load", function() {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").style.display = "block";
    },
    1000
  )
})
document.querySelector("#close").addEventListener
("click", function() {
  document.querySelector(".popup").style.display = "none";
}
)
