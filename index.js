window.addEventListener('load', async () => {
    const result = await fetch('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/2020/2039/kaz')
    const res = await result.json()

    const div = document.querySelector('#div')

    let out = '<h1>Temperature models for Kaz from 2020 to 2039</h1>'
    out += `<div class='main' style='width: 80vw; display:flex; flex-wrap: wrap; justify-content: space-between;'>`
    res.forEach(e => {
        out += `<div class='model' style='margin-right: 10px'>`
        out += `<h3>Model: ${e.gcm}</h3>`
        e['monthVals'].forEach((el, index) => {
            out += `<div style='display: flex; justify-content: space-between;'><p>${getMonth(index)}</p><p>-></p><p>${el.toFixed(2)} °C</p></div>`
        })
        out += `</div>`
    })
    out += `</div>`

    div.innerHTML = out
})

function getMonth(num) {
    const monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]
    return monthNames[num]
}