import Header from './Header'
import Main from './Main'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'


class Page{
    constructor(page){
        this.page = page
    }
    render(module){

        

        const header = new Header(this.page)
        header.render()

        this.handleEvents()

        if(module === 'main'){
             const main = new Main(this.page)
             main.render()
        }

        if(module === 'menu'){
            const menu = new Menu(this.page)
            menu.render()
        }  
        
        if(module === 'contact'){
            const contact = new Contact(this.page)
            contact.render()
        }   

        const footer = new Footer(this.page)
        footer.render()
    }

    handleEvents(){
        const main = document.getElementById('home_page')
        const menu = document.getElementById('menu_page')
        const contact = document.getElementById('contact_page')

        main.addEventListener('click', (e) => {     
            e.preventDefault()
            this.page.innerHTML = ''
            this.render('main')
        })

        menu.addEventListener('click', (e) => {
            e.preventDefault()
            this.page.innerHTML = ''
            this.render('menu')
        })

        contact.addEventListener('click', (e) => {
            e.preventDefault()
            this.page.innerHTML = ''
            this.render('contact')
        })
    }
}

export default Page