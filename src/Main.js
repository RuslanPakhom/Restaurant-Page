class Main{
    constructor(page){
        this.page = page
    }
    render(){
        const section = document.createElement('section')
        section.classList.add("main")

        const h2 = document.createElement('h2')
        h2.textContent = "BRISTOT COFFEE"
        const p_top = document.createElement('p')
        p_top.textContent = "Born more than 100 years ago at the foot of the dolomites, we are a community united by a single passion: for coffee."
        const img_coffee = document.createElement('img')
        img_coffee.src = "../images/coffee.png"
        img_coffee.alt = "Coffee"

        const p_bottom = document.createElement('p')
        p_bottom.textContent = "We look for the perfect in every detail"

        section.appendChild(h2)
        section.appendChild(p_top)
        section.appendChild(img_coffee)
        section.appendChild(p_bottom)       
        this.page.appendChild(section)
    }
}

export default Main;