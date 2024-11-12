
const btnMenu = document.getElementById('btn_menu')

const mensagem = [
    'Lesliet Marian Icer Chito, 16 anos, é de Cuba. Ela adora ler, maratonar séries, ver filmes e está sempre com uma playlist tocando suas músicas favoritas. Amante de Weezer, ela é uma pessoa incrível que deixa tudo ao seu redor muito mais especial',
    'Lesliet adora ler e escreve super bem. Passa horas vendo filmes, séries, tiktoks, brincando com as cachorras e sendo foda na cozinha.',
    `Lesliet tem duas cachorras que são uma fofura: <br> - Choe: Fofa, brincalhona e come pra caralho. Ela é um amorzinho <br>- Shenzi: Uma fofura mais de boa e desconfiada, mas adora fazer a Choe ficar brava só por diversão. <br>  Elas fazem a vida de Lesliet muito mais feliz`,
    '<a href="https://www.instagram.com/tokyo.lp?igsh=MTViMmRlYnVnYW9uNg==" class=" w-6 hover:scale-110 transition-transform duration-200">Instagram</a>'
]

const title = [
    'Sobre',
    'Hobbies',
    'Pets',
    'Contato'
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
        ${title[id - 1]}
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