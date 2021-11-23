const templates = require("./templates/templates.js").Templates
import './styles.sass'

let items;
const EVENT_LOG = false
const IGNORE = ["CreateEvent"]

window.onload = function () {

  items = document.getElementById("items")

  // fetch("data.json")
  fetch("https://api.github.com/orgs/elementary/events")
  .then(response => data = response.json())
  .then(json => process(json))

}
function process (data) {

  // data = data.reverse();
  const keys = Object.keys(templates)

  data.forEach(event => {

    // If it's in the list of ignored events, skip it
    if (IGNORE.includes(event.type)) return

    if (keys.includes(event.type)) {
      const template = templates[event.type]
      const html = template({event: event})
      items.innerHTML += html

      if (EVENT_LOG) {
        console.log(`Template: ${event.type}`)
        console.log(event)
      }

    } else {
      // Log events missing templates
      console.log(`No template: ${event.type}`)
      console.log(event)
    }

  })

}
