const header = document.getElementById('header')
const categories = document.getElementById('categories')
const menuElements = document.querySelectorAll('nav a')
const listElements = document.querySelectorAll('#categories ul li')
const list = document.querySelector('#categories ul')
const btnClosePay = document.getElementById('btn-close-pay')
const payment = document.getElementById('payment')


menuElements.forEach((a) => {
    a.addEventListener('mouseover', ()=> {
        categories.style.display = 'flex'
    })
})

header.addEventListener('mouseout', ()=> {
    categories.style.display = 'none'
})

categories.addEventListener('mouseover', ()=> {
    categories.style.display = 'flex'
})

categories.addEventListener('mouseout', ()=> {
    categories.style.display = 'none'
})

listElements.forEach((l) => {
    l.addEventListener('click', (e)=> {
        console.log(e)
    })
})

btnClosePay.addEventListener('click', ()=> {
    payment.style.display = 'none'
})

async function getData() {
    const ft = await fetch('js/movies.json')
    const res = await ft.json()
    return res;
}

async function putData() {
    const data = await getData()
    let items = ''
    data.forEach(d=> {
        items += `
            <li value=${d.videoURL}><span class="cover" style="background-image: url(${d.cover});"></span><span>${d.title}</span></li>  
        `
    })

    list.innerHTML = items
}

putData()