const userSelect = document.querySelector('#userSelect')




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