const updateCuts = document.querySelector('#updateCuts')
const idCut = document.querySelector('#idCut')
const cutting = document.getElementById('updateCuttingInstructions');
const beef = document.getElementById('updateTypeBeef');
const price = document.getElementById('updatePrice');
const bought = document.getElementById('updateBought');
const userId = document.getElementById('userSelect');


  function handleSubmit(e) {
    e.preventDefault()

    let body = {
        cutting: cutting.value, 
        beef: beef.value, 
        price: price.value,
        bought: bought.value, 
    }

    axios.put(`http://localhost:4004/cutting/${idCut.value}`, body)
        .then(() => {   
        })
}

updateCuts.addEventListener('submit', handleSubmit)