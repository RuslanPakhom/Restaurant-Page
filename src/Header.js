class Header{
    constructor(page){
        this.page = page
        this.MENU = ["home", "menu", "contact"]
    }
    render(){
        const header = document.createElement('header')
        const logo = document.createElement('img')
        logo.src = "../images/logo.svg"
        logo.alt = "Logo"

        const ul = document.createElement('ul');
        ul.classList.add("menu")

        for(let i=0; i<this.MENU.length; i++){
            const li = document.createElement('li')
            li.id = this.MENU[i] + "_page"
            const a = document.createElement('a')
            a.href = "#"
            a.textContent = this.MENU[i].toUpperCase()
            li.classList.add('menu-item')
            li.appendChild(a)
            ul.appendChild(li)
        }

        header.appendChild(logo)
        header.appendChild(ul)
        this.page.appendChild(header)
    }

}

export default Header;