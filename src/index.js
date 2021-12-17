import Page from './Page'

(function(){
    const content = document.getElementById('content')
    const page = new Page(content)
    page.render('main')
})()


