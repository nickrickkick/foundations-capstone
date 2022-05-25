const createCuts = document.querySelector('#createCuts')
const userSelect = document.querySelector('#userSelect')
const cutting = document.getElementById('cuttingInstructions').value;
const beef = document.getElementById('typeBeef').value;
const price = document.getElementById('price').value;
const bought = document.getElementById('bought').value;
const userId = document.getElementById('userSelect').value;


const update = (cutting, beef, price, bought, userId) => axios.put(`http://localhost:4000/cutting`, {cutting, beef, price, bought, userId}).then(function (res) {
    alert(res.data)
  })

  function handleSubmit(e) {
    e.preventDefault()

    
    let body = {
        cutting: cutting, 
        beef: beef, 
        price: price,
        bought: bought, 
        userId: +userId
    }

    axios.post('http://localhost:4004/cutting', body)
        .then(() => {
            getCuttings()
        })
}

  
function getUsers() {
    axios.get('http://localhost:4004/users')
        .then(res => {
            res.data.forEach(user => {
                const option = document.createElement('option')
                option.setAttribute('value', user['user_id'])
                option.textContent = user.name
                userSelect.appendChild(option)
            })
        })
}



getUsers();
createCuts.addEventListener('submit', handleSubmit)