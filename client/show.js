

const cuttingList = document.querySelector('#cuttingList')

function getCuttings() {
    cuttingList.innerHTML = ''

    axios.get('http://localhost:4004/cutting/')
        .then(res => {
            res.data.forEach(elem => {
                let cuttingCard = `<div class="cuttingCard">
                    <h2>${elem.name}, ${elem.phone_number}</h2>
                    <h2>cutting id: ${elem.cutting_id}</h2>
                    <h2>cutting style: ${elem.cutting_style}</h2>
                    <h2>beef: ${elem.type_of_beef}</h2>
                    <h2>price: ${elem.price}</h2>
                    <h2>bought: ${elem.bought}</h2>
                   
                    </div>
                `

                cuttingList.innerHTML += cuttingCard
            })
        })
}

getCuttings();