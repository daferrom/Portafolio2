//Menu 



addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    const listItems = document.querySelector('.listItem')
    
     if (btn_menu){
        btn_menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menuItems')
            menu_items.classList.toggle('show')
        })
    } 
})






