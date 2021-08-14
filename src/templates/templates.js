
const PushEvent = require('./PushEvent.ejs')
const IssuesEvent = require('./IssuesEvent.js')
const ReleaseEvent = require('./ReleaseEvent.ejs')
const ejs = require("ejs/ejs");


const Templates = {
  "PushEvent": ejs.compile(PushEvent),
  "IssuesEvent": IssuesEvent.selector,
  "ReleaseEvent": ejs.compile(ReleaseEvent)
}

export {Templates}
