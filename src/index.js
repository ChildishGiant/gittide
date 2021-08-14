const templates = require("./templates/templates.js").Templates
import './styles.sass'

let items;

window.onload = function () {

  items = document.getElementById("items")

  // https://api.github.com/orgs/elementary/events
  fetch("https://api.github.com/orgs/elementary/events")
  .then(response => data = response.json())
  .then(json => process(json))

}
function process (data) {

  data = data.reverse();
  const keys = Object.keys(templates)

  data.forEach(event => {

    if ( keys.indexOf(event.type) > -1){
      const template = templates[event.type]
      const html = template({event: event})
      items.innerHTML += html

      console.log(`Template: ${event.type}`)
      console.log(event)

    } else {
      console.log(`No template: ${event.type}`)
      console.log(event)
    }

  })

}
