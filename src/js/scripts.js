/* 
     <aside class="menu-add">
            <ul class="navigation">
                <li class="style-li">
                    Sobre
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa suscipit, facilis sit debitis pariatur distinctio corporis ducimus atque porro nulla dicta regtr
                    </span>
                </li>
                <li>Hobbies</li>
                <li>Pets</li>
                <li>Contatos</li>
            </ul>
        </aside>
*/

const btnMenu = document.getElementById('btn_menu')

const mensagem = [
    'Primeira mensagem',
    'Segunda mensagem',
    'Terceira mensagem',
    'Quarta mensagem'
]

const addMensage = (evt) => {
    const clickedLi = evt.target
    const id = evt.target.id

    // Remove a mensagem de todos os itens `li` antes de adicionar ao novo
    document.querySelectorAll('.navigation li').forEach((li) => {
        li.classList.remove('style-li')
        li.innerHTML = li.id === '01' ? 'Sobre' :
                       li.id === '02' ? 'Hobbies' :
                       li.id === '03' ? 'Pets' : 'Contatos'
    })

    // Adiciona a mensagem ao item `li` clicado
    clickedLi.classList.add('style-li')
    clickedLi.innerHTML = `
        Teste
        <span>
            ${mensagem[id - 1]}
        </span>
    `
}


const addMenu = () => {
    const aside = document.createElement('aside')
    aside.classList.add('menu-add')
    document.querySelector('body').appendChild(aside)
    aside.innerHTML = `
            <ul class="navigation">
                <li id = '01'>Sobre</li>
                <li id = '02'>Hobbies</li>
                <li id = '03'>Pets</li>
                <li id = '04'>Contatos</li>
            </ul>`
    
    const lis = aside.querySelectorAll('li').forEach((li) => li.addEventListener('click', addMensage))

    const handleClickOutSide = (evt) => {
        if (!aside.contains(evt.target) && evt.target !== btnMenu) {
            aside.remove()
            document.removeEventListener('click', handleClickOutSide);
        }
    }

    document.addEventListener('click', handleClickOutSide)
}

btnMenu.addEventListener('click', addMenu)