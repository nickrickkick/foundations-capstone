

const cuttingList = document.querySelector('#cuttingList')

function getCuttings() {
    cuttingList.innerHTML = ''

    axios.get('http://localhost:4004/cutting/')
        .then(res => {
            res.data.forEach(elem => {
                let cuttingCard = `<div class="cuttingCard">
                    <p>${elem.name}, ${elem.phone_number}</p>
                    <p>cutting id: ${elem.cutting_id}</p>
                    <p>cutting style: ${elem.cutting_style}</p>
                    <p>beef: ${elem.type_of_beef}</p>
                    <p>price: ${elem.price}</p>
                    <p>bought: ${elem.bought}</p>
                   
                    </div>
                `

                cuttingList.innerHTML += cuttingCard
            })
        })
}

getCuttings();