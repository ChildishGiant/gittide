const ejs = require("ejs/ejs");
const created = require("./IssueCommentEvent/created.ejs")

export function selector (event) {

  event = event.event

  switch (event.payload.action) {
    case "created":
      return ejs.render(created, {event: event})
      break;

    default:
      return "DEFAULT ISSUESEVENT"
      break;
  }

  return "DEFAULT ISSUESEVENT"
}
