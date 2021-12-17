class Footer{
    constructor(page){
        this.page = page
    }
    render(){
        const footer = document.createElement('footer')
        const p_footer_1 = document.createElement('p')
        p_footer_1.textContent = "Procaffé cafe"
        const p_footer_2 = document.createElement('p')
        p_footer_2.textContent = "Bergamo, Miranchuk A. street 59"
        footer.appendChild(p_footer_1)
        footer.appendChild(p_footer_2)
        this.page.appendChild(footer)
    }
}

export default Footer