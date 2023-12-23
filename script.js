
const list = document.querySelectorAll('.list');

 function activeLink(){
   list.forEach((item) =>

    item.classList.remove('active'));
    this.classList.add('active');
};

list.forEach((item) =>{
    item.addEventListener('click',activeLink)
});

const lightModeIcon = document.querySelector('#lightMode-icon');

lightModeIcon.onclick = () => {
    lightModeIcon.classList.toggle('fa-moon');
    document.body.classList.toggle('light-mode');
};




