const ejs = require("ejs/ejs");
const closed = require("./IssuesEvent/closed.ejs")
const opened = require("./IssuesEvent/opened.ejs")

export function selector (event) {

  event = event.event

  switch (event.payload.action) {
    case "opened":
      return ejs.render(opened, {event: event})
      break;

    case "closed":
      return ejs.render(closed, {event: event})
      break;

    case "reopened":

      break;
    case "assigned":

      break;
    case "unassigned":

      break;
    case "labeled":

      break;
    case "unlabeled":

      break;
    default:
      return "DEFAULT ISSUESEVENT"
      break;
  }

  return "DEFAULT ISSUESEVENT"
}
