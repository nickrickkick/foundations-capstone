const createCuts = document.querySelector('#createCuts')
const userSelect = document.querySelector('#userSelect')
const cutting = document.getElementById('cuttingInstructions');
const beef = document.getElementById('typeBeef');
const price = document.getElementById('price');
const bought = document.getElementById('bought');
const userId = document.getElementById('userSelect');


const update = (cutting, beef, price, bought, userId) => axios.put(`http://localhost:4000/cutting`, {cutting, beef, price, bought, userId}).then(function (res) {
    alert(res.data)
  })

  function handleSubmit(e) {
    e.preventDefault()

    console.log(userId.value);
    let body = {
        cutting: cutting.value, 
        beef: beef.value, 
        price: price.value,
        bought: bought.value, 
        userId: +userId.value
    }

    axios.post('http://localhost:4004/cutting', body)
        .then(() => {
           
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