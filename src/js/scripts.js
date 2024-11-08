const btnMenu = document.getElementById('btn_menu')

const addMenu = () => {
    const aside = document.createElement('aside')
    aside.classList.add('menu-add')
    document.querySelector('body').appendChild(aside)
    aside.innerHTML = `
            <ul class="navigation">
                <li>Sobre</li>
                <li>Hobbies</li>
                <li>Pets</li>
                <li>Contatos</li>
            </ul>`
    
    const handleClickOutSide = (evt) => {
        if (!aside.contains(evt.target) && evt.target !== btnMenu) {
            aside.remove()
            document.removeEventListener('click', handleClickOutSide);
        }
    }

    document.addEventListener('click', handleClickOutSide)
}

btnMenu.addEventListener('click', addMenu)