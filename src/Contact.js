class Contact{
    constructor(page){
        this.page = page
    }

    render(){
        const section = document.createElement('section')
        section.classList.add("contact")
        const h2 = document.createElement("h2");
        h2.textContent = "OUR ADDRESS:"
        const cafeName = document.createElement("p")
        cafeName.textContent = "PROCAFFÉ SPA CAFFÈ BRISTOT CAFE"

        const addr = document.createElement("p")
        addr.textContent = "Italy, Bergamo, Miranchuk A. street 59"

        const tel = document.createElement("p")
        tel.textContent = "Call us: +39 (1234) 999111"

        const txt = document.createElement("p")
        txt.textContent = "We are glad to see you!"

        const img = document.createElement('img')
        img.src = "/images/map.png"
        img.alt = "Map"

        section.appendChild(h2)
        section.appendChild(cafeName)
        section.appendChild(addr)
        section.appendChild(tel)
        section.appendChild(txt)
        section.appendChild(img)

        this.page.appendChild(section)


    }
}

export default Contact