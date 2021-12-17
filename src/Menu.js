class Menu{
    constructor(page){
        this.page = page;
        this.coffee = []
        this.coffee.push({name: "Espresso", link: "/images/espresso.png", price:"0.99$"})
        this.coffee.push({name: "Ristretto", link: "/images/ristretto.png", price:"1.49$"})
        this.coffee.push({name: "Lungo", link: "/images/lungo.png", price:"1.99$"})
        this.coffee.push({name: "Americano", link: "/images/americano.png", price:"0.99$"})
        this.coffee.push({name: "Capuccino", link: "/images/cappucino.png", price:"0.79$"})
        this.coffee.push({name: "Latte Machiatto", link: "/images/mochiatto.png", price:"1.99$"})
        this.coffee.push({name: "Raf", link: "/images/raf.png", price:"1.49$"})
        this.coffee.push({name: "Irish Coffee", link: "/images/irish.png", price:"1.99$"})

    }

    render(){
        const section = document.createElement("section")
        const coffe_menu = document.createElement("div")
        coffe_menu.classList.add("coffe-menu");

        for(let i=0; i<this.coffee.length; i++){
            const item = document.createElement("div")
            item.classList.add("coffe-item");
            const p_name = document.createElement("p")
            const img = document.createElement("img")
            const p_price = document.createElement("p")

            p_name.textContent = this.coffee[i].name
            img.src = this.coffee[i].link
            img.alt = this.coffee[i].name
            p_price.textContent = this.coffee[i].price

            item.appendChild(p_name)
            item.appendChild(img)
            item.appendChild(p_price)

            coffe_menu.appendChild(item)
        }

        section.appendChild(coffe_menu)
        this.page.appendChild(section)
    }
}

export default Menu