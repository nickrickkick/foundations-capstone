document.querySelector("#deleteCuts").addEventListener('submit', function(event) {
    event.preventDefault()
    let cutIndex = document.getElementById('idNum').value;
    axios.delete(`http://localhost:4004/cutting/${cutIndex}`).then(function (res) {
      alert(res.data);
    })
  })