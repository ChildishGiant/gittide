
const PushEvent = require('./PushEvent.ejs')
const IssuesEvent = require('./IssuesEvent.js')
const ReleaseEvent = require('./ReleaseEvent.ejs')
// const CreateEvent = require('./CreateEvent.ejs')
const IssueCommentEvent = require('./IssueCommentEvent.js')
const ejs = require("ejs/ejs");


const Templates = {
  "PushEvent": ejs.compile(PushEvent),
  "IssuesEvent": IssuesEvent.selector,
  "ReleaseEvent": ejs.compile(ReleaseEvent),
  "IssueCommentEvent": IssueCommentEvent.selector,
  // "CreateEvent": ejs.compile(CreateEvent)
}

export {Templates}
