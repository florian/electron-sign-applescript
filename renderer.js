as = require('./applescript')

setInterval(() => {
  as((n) => {
    document.getElementById('number').innerHTML = n
  })
}, 1000)
