(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/templates/PushEvent.ejs
  var require_PushEvent = __commonJS({
    "src/templates/PushEvent.ejs"(exports, module) {
      module.exports = `<article class="media">

  <figure class="media-left">
    <a href="https://github.com/<%= event.actor.display_login %>">
      <figure class="image is-32x32 is-inline-block is-vertically-middle">
        <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">
      </figure>
    </a>
  </figure>

  <div class="media-content">

    <a href="https://github.com/<%= event.actor.display_login %>" class="has-text-weight-semibold"><%= event.actor.display_login %></a>

    pushed to

    <a href="https://github.com/<%= event.repo.name %>" class="has-text-weight-semibold"><%= event.repo.name %></a>
    <span class="is-size-7">
      <%= new Date(event.created_at).toLocaleString() %>
    </span>

    <div class="card">
      <div class="card-content">
        <% if (event.payload.size == 1) { %>
        <span>1 commit to</span>
        <%} else if (event.payload.size > 1) { %>
          <span><%= event.payload.size %> commits to</span>
        <%}%>
        <a href="https://github.com/<%= event.repo.name %>/tree/<%= event.payload.ref.split("/")[2] %>"><%= event.payload.ref.split("/")[2] %></a>

        <div>
          <ul>
              <li>
                <a alt="@<%= event.actor.display_login %>" href="https://github.com/<%= event.actor.display_login %>">
                  <figure class="image is-16x16 is-inline-block is-vertically-middle">
                    <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">
                  </figure>
                </a>

                <a class="hash" href="https://github.com/<%= event.repo.name %>/commit/<%= event.payload.commits[0].sha %>"><%= event.payload.commits[0].sha.substring(0,7) %></a>
                <blockquote class="is-inline">
                  <%= event.payload.commits[0].message.split("\\n")[0] %>
                </blockquote>


                <!-- If there's more than one do it all again
                  This could probably be neater but fuck it
                -->
                <% if (event.payload.size > 1) { %>
                  <br>
                  <a alt="@<%= event.actor.display_login %>" href="https://github.com/<%= event.actor.display_login %>">
                    <figure class="image is-16x16 is-inline-block is-vertically-middle">
                      <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">
                    </figure>
                  </a>
                  <a class="hash" href="https://github.com/<%= event.repo.name %>/commit/<%= event.payload.commits[1].sha %>"><%= event.payload.commits[1].sha.substring(0,7) %></a>
                  <blockquote class="is-inline">
                    <%= event.payload.commits[1].message.split("\\n")[0] %>
                  </blockquote>
                <%}%>

                <% if (event.payload.size > 2) { %>
                  <br>
                  <a class="more"><%= event.payload.size - 2 %> more commits \xBB</a>
                <% } %>

              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</article>
`;
    }
  });

  // node_modules/ejs/ejs.js
  var require_ejs = __commonJS({
    "node_modules/ejs/ejs.js"(exports, module) {
      (function(f) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (typeof define === "function" && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== "undefined") {
            g = window;
          } else if (typeof global !== "undefined") {
            g = global;
          } else if (typeof self !== "undefined") {
            g = self;
          } else {
            g = this;
          }
          g.ejs = f();
        }
      })(function() {
        var define2, module2, exports2;
        return function() {
          function r(e, n, t) {
            function o(i2, f) {
              if (!n[i2]) {
                if (!e[i2]) {
                  var c = typeof __require == "function" && __require;
                  if (!f && c)
                    return c(i2, true);
                  if (u)
                    return u(i2, true);
                  var a = new Error("Cannot find module '" + i2 + "'");
                  throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i2] = { exports: {} };
                e[i2][0].call(p.exports, function(r2) {
                  var n2 = e[i2][1][r2];
                  return o(n2 || r2);
                }, p, p.exports, r, e, n, t);
              }
              return n[i2].exports;
            }
            for (var u = typeof __require == "function" && __require, i = 0; i < t.length; i++)
              o(t[i]);
            return o;
          }
          return r;
        }()({ 1: [function(require2, module3, exports3) {
          "use strict";
          var fs = require2("fs");
          var path = require2("path");
          var utils = require2("./utils");
          var scopeOptionWarned = false;
          var _VERSION_STRING = require2("../package.json").version;
          var _DEFAULT_OPEN_DELIMITER = "<";
          var _DEFAULT_CLOSE_DELIMITER = ">";
          var _DEFAULT_DELIMITER = "%";
          var _DEFAULT_LOCALS_NAME = "locals";
          var _NAME = "ejs";
          var _REGEX_STRING = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";
          var _OPTS_PASSABLE_WITH_DATA = [
            "delimiter",
            "scope",
            "context",
            "debug",
            "compileDebug",
            "client",
            "_with",
            "rmWhitespace",
            "strict",
            "filename",
            "async"
          ];
          var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat("cache");
          var _BOM = /^\uFEFF/;
          exports3.cache = utils.cache;
          exports3.fileLoader = fs.readFileSync;
          exports3.localsName = _DEFAULT_LOCALS_NAME;
          exports3.promiseImpl = new Function("return this;")().Promise;
          exports3.resolveInclude = function(name, filename, isDir) {
            var dirname = path.dirname;
            var extname = path.extname;
            var resolve = path.resolve;
            var includePath = resolve(isDir ? filename : dirname(filename), name);
            var ext = extname(name);
            if (!ext) {
              includePath += ".ejs";
            }
            return includePath;
          };
          function resolvePaths(name, paths) {
            var filePath;
            if (paths.some(function(v) {
              filePath = exports3.resolveInclude(name, v, true);
              return fs.existsSync(filePath);
            })) {
              return filePath;
            }
          }
          function getIncludePath(path2, options) {
            var includePath;
            var filePath;
            var views = options.views;
            var match = /^[A-Za-z]+:\\|^\//.exec(path2);
            if (match && match.length) {
              path2 = path2.replace(/^\/*/, "");
              if (Array.isArray(options.root)) {
                includePath = resolvePaths(path2, options.root);
              } else {
                includePath = exports3.resolveInclude(path2, options.root || "/", true);
              }
            } else {
              if (options.filename) {
                filePath = exports3.resolveInclude(path2, options.filename);
                if (fs.existsSync(filePath)) {
                  includePath = filePath;
                }
              }
              if (!includePath && Array.isArray(views)) {
                includePath = resolvePaths(path2, views);
              }
              if (!includePath && typeof options.includer !== "function") {
                throw new Error('Could not find the include file "' + options.escapeFunction(path2) + '"');
              }
            }
            return includePath;
          }
          function handleCache(options, template) {
            var func;
            var filename = options.filename;
            var hasTemplate = arguments.length > 1;
            if (options.cache) {
              if (!filename) {
                throw new Error("cache option requires a filename");
              }
              func = exports3.cache.get(filename);
              if (func) {
                return func;
              }
              if (!hasTemplate) {
                template = fileLoader(filename).toString().replace(_BOM, "");
              }
            } else if (!hasTemplate) {
              if (!filename) {
                throw new Error("Internal EJS error: no file name or template provided");
              }
              template = fileLoader(filename).toString().replace(_BOM, "");
            }
            func = exports3.compile(template, options);
            if (options.cache) {
              exports3.cache.set(filename, func);
            }
            return func;
          }
          function tryHandleCache(options, data2, cb) {
            var result;
            if (!cb) {
              if (typeof exports3.promiseImpl == "function") {
                return new exports3.promiseImpl(function(resolve, reject) {
                  try {
                    result = handleCache(options)(data2);
                    resolve(result);
                  } catch (err) {
                    reject(err);
                  }
                });
              } else {
                throw new Error("Please provide a callback function");
              }
            } else {
              try {
                result = handleCache(options)(data2);
              } catch (err) {
                return cb(err);
              }
              cb(null, result);
            }
          }
          function fileLoader(filePath) {
            return exports3.fileLoader(filePath);
          }
          function includeFile(path2, options) {
            var opts = utils.shallowCopy({}, options);
            opts.filename = getIncludePath(path2, opts);
            if (typeof options.includer === "function") {
              var includerResult = options.includer(path2, opts.filename);
              if (includerResult) {
                if (includerResult.filename) {
                  opts.filename = includerResult.filename;
                }
                if (includerResult.template) {
                  return handleCache(opts, includerResult.template);
                }
              }
            }
            return handleCache(opts);
          }
          function rethrow(err, str, flnm, lineno, esc) {
            var lines = str.split("\n");
            var start = Math.max(lineno - 3, 0);
            var end = Math.min(lines.length, lineno + 3);
            var filename = esc(flnm);
            var context = lines.slice(start, end).map(function(line, i) {
              var curr = i + start + 1;
              return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
            }).join("\n");
            err.path = filename;
            err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
            throw err;
          }
          function stripSemi(str) {
            return str.replace(/;(\s*$)/, "$1");
          }
          exports3.compile = function compile(template, opts) {
            var templ;
            if (opts && opts.scope) {
              if (!scopeOptionWarned) {
                console.warn("`scope` option is deprecated and will be removed in EJS 3");
                scopeOptionWarned = true;
              }
              if (!opts.context) {
                opts.context = opts.scope;
              }
              delete opts.scope;
            }
            templ = new Template(template, opts);
            return templ.compile();
          };
          exports3.render = function(template, d, o) {
            var data2 = d || {};
            var opts = o || {};
            if (arguments.length == 2) {
              utils.shallowCopyFromList(opts, data2, _OPTS_PASSABLE_WITH_DATA);
            }
            return handleCache(opts, template)(data2);
          };
          exports3.renderFile = function() {
            var args = Array.prototype.slice.call(arguments);
            var filename = args.shift();
            var cb;
            var opts = { filename };
            var data2;
            var viewOpts;
            if (typeof arguments[arguments.length - 1] == "function") {
              cb = args.pop();
            }
            if (args.length) {
              data2 = args.shift();
              if (args.length) {
                utils.shallowCopy(opts, args.pop());
              } else {
                if (data2.settings) {
                  if (data2.settings.views) {
                    opts.views = data2.settings.views;
                  }
                  if (data2.settings["view cache"]) {
                    opts.cache = true;
                  }
                  viewOpts = data2.settings["view options"];
                  if (viewOpts) {
                    utils.shallowCopy(opts, viewOpts);
                  }
                }
                utils.shallowCopyFromList(opts, data2, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
              }
              opts.filename = filename;
            } else {
              data2 = {};
            }
            return tryHandleCache(opts, data2, cb);
          };
          exports3.Template = Template;
          exports3.clearCache = function() {
            exports3.cache.reset();
          };
          function Template(text, opts) {
            opts = opts || {};
            var options = {};
            this.templateText = text;
            this.mode = null;
            this.truncate = false;
            this.currentLine = 1;
            this.source = "";
            options.client = opts.client || false;
            options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
            options.compileDebug = opts.compileDebug !== false;
            options.debug = !!opts.debug;
            options.filename = opts.filename;
            options.openDelimiter = opts.openDelimiter || exports3.openDelimiter || _DEFAULT_OPEN_DELIMITER;
            options.closeDelimiter = opts.closeDelimiter || exports3.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
            options.delimiter = opts.delimiter || exports3.delimiter || _DEFAULT_DELIMITER;
            options.strict = opts.strict || false;
            options.context = opts.context;
            options.cache = opts.cache || false;
            options.rmWhitespace = opts.rmWhitespace;
            options.root = opts.root;
            options.includer = opts.includer;
            options.outputFunctionName = opts.outputFunctionName;
            options.localsName = opts.localsName || exports3.localsName || _DEFAULT_LOCALS_NAME;
            options.views = opts.views;
            options.async = opts.async;
            options.destructuredLocals = opts.destructuredLocals;
            options.legacyInclude = typeof opts.legacyInclude != "undefined" ? !!opts.legacyInclude : true;
            if (options.strict) {
              options._with = false;
            } else {
              options._with = typeof opts._with != "undefined" ? opts._with : true;
            }
            this.opts = options;
            this.regex = this.createRegex();
          }
          Template.modes = {
            EVAL: "eval",
            ESCAPED: "escaped",
            RAW: "raw",
            COMMENT: "comment",
            LITERAL: "literal"
          };
          Template.prototype = {
            createRegex: function() {
              var str = _REGEX_STRING;
              var delim = utils.escapeRegExpChars(this.opts.delimiter);
              var open = utils.escapeRegExpChars(this.opts.openDelimiter);
              var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
              str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
              return new RegExp(str);
            },
            compile: function() {
              var src;
              var fn;
              var opts = this.opts;
              var prepended = "";
              var appended = "";
              var escapeFn = opts.escapeFunction;
              var ctor;
              var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : "undefined";
              if (!this.source) {
                this.generateSource();
                prepended += '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n';
                if (opts.outputFunctionName) {
                  prepended += "  var " + opts.outputFunctionName + " = __append;\n";
                }
                if (opts.destructuredLocals && opts.destructuredLocals.length) {
                  var destructuring = "  var __locals = (" + opts.localsName + " || {}),\n";
                  for (var i = 0; i < opts.destructuredLocals.length; i++) {
                    var name = opts.destructuredLocals[i];
                    if (i > 0) {
                      destructuring += ",\n  ";
                    }
                    destructuring += name + " = __locals." + name;
                  }
                  prepended += destructuring + ";\n";
                }
                if (opts._with !== false) {
                  prepended += "  with (" + opts.localsName + " || {}) {\n";
                  appended += "  }\n";
                }
                appended += "  return __output;\n";
                this.source = prepended + this.source + appended;
              }
              if (opts.compileDebug) {
                src = "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + sanitizedFilename + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n";
              } else {
                src = this.source;
              }
              if (opts.client) {
                src = "escapeFn = escapeFn || " + escapeFn.toString() + ";\n" + src;
                if (opts.compileDebug) {
                  src = "rethrow = rethrow || " + rethrow.toString() + ";\n" + src;
                }
              }
              if (opts.strict) {
                src = '"use strict";\n' + src;
              }
              if (opts.debug) {
                console.log(src);
              }
              if (opts.compileDebug && opts.filename) {
                src = src + "\n//# sourceURL=" + sanitizedFilename + "\n";
              }
              try {
                if (opts.async) {
                  try {
                    ctor = new Function("return (async function(){}).constructor;")();
                  } catch (e) {
                    if (e instanceof SyntaxError) {
                      throw new Error("This environment does not support async/await");
                    } else {
                      throw e;
                    }
                  }
                } else {
                  ctor = Function;
                }
                fn = new ctor(opts.localsName + ", escapeFn, include, rethrow", src);
              } catch (e) {
                if (e instanceof SyntaxError) {
                  if (opts.filename) {
                    e.message += " in " + opts.filename;
                  }
                  e.message += " while compiling ejs\n\n";
                  e.message += "If the above error is not helpful, you may want to try EJS-Lint:\n";
                  e.message += "https://github.com/RyanZim/EJS-Lint";
                  if (!opts.async) {
                    e.message += "\n";
                    e.message += "Or, if you meant to create an async function, pass `async: true` as an option.";
                  }
                }
                throw e;
              }
              var returnedFn = opts.client ? fn : function anonymous(data2) {
                var include = function(path2, includeData) {
                  var d = utils.shallowCopy({}, data2);
                  if (includeData) {
                    d = utils.shallowCopy(d, includeData);
                  }
                  return includeFile(path2, opts)(d);
                };
                return fn.apply(opts.context, [data2 || {}, escapeFn, include, rethrow]);
              };
              if (opts.filename && typeof Object.defineProperty === "function") {
                var filename = opts.filename;
                var basename = path.basename(filename, path.extname(filename));
                try {
                  Object.defineProperty(returnedFn, "name", {
                    value: basename,
                    writable: false,
                    enumerable: false,
                    configurable: true
                  });
                } catch (e) {
                }
              }
              return returnedFn;
            },
            generateSource: function() {
              var opts = this.opts;
              if (opts.rmWhitespace) {
                this.templateText = this.templateText.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
              }
              this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
              var self2 = this;
              var matches = this.parseTemplateText();
              var d = this.opts.delimiter;
              var o = this.opts.openDelimiter;
              var c = this.opts.closeDelimiter;
              if (matches && matches.length) {
                matches.forEach(function(line, index) {
                  var closing;
                  if (line.indexOf(o + d) === 0 && line.indexOf(o + d + d) !== 0) {
                    closing = matches[index + 2];
                    if (!(closing == d + c || closing == "-" + d + c || closing == "_" + d + c)) {
                      throw new Error('Could not find matching close tag for "' + line + '".');
                    }
                  }
                  self2.scanLine(line);
                });
              }
            },
            parseTemplateText: function() {
              var str = this.templateText;
              var pat = this.regex;
              var result = pat.exec(str);
              var arr = [];
              var firstPos;
              while (result) {
                firstPos = result.index;
                if (firstPos !== 0) {
                  arr.push(str.substring(0, firstPos));
                  str = str.slice(firstPos);
                }
                arr.push(result[0]);
                str = str.slice(result[0].length);
                result = pat.exec(str);
              }
              if (str) {
                arr.push(str);
              }
              return arr;
            },
            _addOutput: function(line) {
              if (this.truncate) {
                line = line.replace(/^(?:\r\n|\r|\n)/, "");
                this.truncate = false;
              }
              if (!line) {
                return line;
              }
              line = line.replace(/\\/g, "\\\\");
              line = line.replace(/\n/g, "\\n");
              line = line.replace(/\r/g, "\\r");
              line = line.replace(/"/g, '\\"');
              this.source += '    ; __append("' + line + '")\n';
            },
            scanLine: function(line) {
              var self2 = this;
              var d = this.opts.delimiter;
              var o = this.opts.openDelimiter;
              var c = this.opts.closeDelimiter;
              var newLineCount = 0;
              newLineCount = line.split("\n").length - 1;
              switch (line) {
                case o + d:
                case o + d + "_":
                  this.mode = Template.modes.EVAL;
                  break;
                case o + d + "=":
                  this.mode = Template.modes.ESCAPED;
                  break;
                case o + d + "-":
                  this.mode = Template.modes.RAW;
                  break;
                case o + d + "#":
                  this.mode = Template.modes.COMMENT;
                  break;
                case o + d + d:
                  this.mode = Template.modes.LITERAL;
                  this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")\n';
                  break;
                case d + d + c:
                  this.mode = Template.modes.LITERAL;
                  this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")\n';
                  break;
                case d + c:
                case "-" + d + c:
                case "_" + d + c:
                  if (this.mode == Template.modes.LITERAL) {
                    this._addOutput(line);
                  }
                  this.mode = null;
                  this.truncate = line.indexOf("-") === 0 || line.indexOf("_") === 0;
                  break;
                default:
                  if (this.mode) {
                    switch (this.mode) {
                      case Template.modes.EVAL:
                      case Template.modes.ESCAPED:
                      case Template.modes.RAW:
                        if (line.lastIndexOf("//") > line.lastIndexOf("\n")) {
                          line += "\n";
                        }
                    }
                    switch (this.mode) {
                      case Template.modes.EVAL:
                        this.source += "    ; " + line + "\n";
                        break;
                      case Template.modes.ESCAPED:
                        this.source += "    ; __append(escapeFn(" + stripSemi(line) + "))\n";
                        break;
                      case Template.modes.RAW:
                        this.source += "    ; __append(" + stripSemi(line) + ")\n";
                        break;
                      case Template.modes.COMMENT:
                        break;
                      case Template.modes.LITERAL:
                        this._addOutput(line);
                        break;
                    }
                  } else {
                    this._addOutput(line);
                  }
              }
              if (self2.opts.compileDebug && newLineCount) {
                this.currentLine += newLineCount;
                this.source += "    ; __line = " + this.currentLine + "\n";
              }
            }
          };
          exports3.escapeXML = utils.escapeXML;
          exports3.__express = exports3.renderFile;
          exports3.VERSION = _VERSION_STRING;
          exports3.name = _NAME;
          if (typeof window != "undefined") {
            window.ejs = exports3;
          }
        }, { "../package.json": 6, "./utils": 2, "fs": 3, "path": 4 }], 2: [function(require2, module3, exports3) {
          "use strict";
          var regExpChars = /[|\\{}()[\]^$+*?.]/g;
          exports3.escapeRegExpChars = function(string) {
            if (!string) {
              return "";
            }
            return String(string).replace(regExpChars, "\\$&");
          };
          var _ENCODE_HTML_RULES = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&#34;",
            "'": "&#39;"
          };
          var _MATCH_HTML = /[&<>'"]/g;
          function encode_char(c) {
            return _ENCODE_HTML_RULES[c] || c;
          }
          var escapeFuncStr = `var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;
          exports3.escapeXML = function(markup) {
            return markup == void 0 ? "" : String(markup).replace(_MATCH_HTML, encode_char);
          };
          exports3.escapeXML.toString = function() {
            return Function.prototype.toString.call(this) + ";\n" + escapeFuncStr;
          };
          exports3.shallowCopy = function(to, from) {
            from = from || {};
            for (var p in from) {
              to[p] = from[p];
            }
            return to;
          };
          exports3.shallowCopyFromList = function(to, from, list) {
            for (var i = 0; i < list.length; i++) {
              var p = list[i];
              if (typeof from[p] != "undefined") {
                to[p] = from[p];
              }
            }
            return to;
          };
          exports3.cache = {
            _data: {},
            set: function(key, val) {
              this._data[key] = val;
            },
            get: function(key) {
              return this._data[key];
            },
            remove: function(key) {
              delete this._data[key];
            },
            reset: function() {
              this._data = {};
            }
          };
          exports3.hyphenToCamel = function(str) {
            return str.replace(/-[a-z]/g, function(match) {
              return match[1].toUpperCase();
            });
          };
        }, {}], 3: [function(require2, module3, exports3) {
        }, {}], 4: [function(require2, module3, exports3) {
          (function(process2) {
            function normalizeArray(parts, allowAboveRoot) {
              var up = 0;
              for (var i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                if (last === ".") {
                  parts.splice(i, 1);
                } else if (last === "..") {
                  parts.splice(i, 1);
                  up++;
                } else if (up) {
                  parts.splice(i, 1);
                  up--;
                }
              }
              if (allowAboveRoot) {
                for (; up--; up) {
                  parts.unshift("..");
                }
              }
              return parts;
            }
            exports3.resolve = function() {
              var resolvedPath = "", resolvedAbsolute = false;
              for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? arguments[i] : process2.cwd();
                if (typeof path !== "string") {
                  throw new TypeError("Arguments to path.resolve must be strings");
                } else if (!path) {
                  continue;
                }
                resolvedPath = path + "/" + resolvedPath;
                resolvedAbsolute = path.charAt(0) === "/";
              }
              resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
                return !!p;
              }), !resolvedAbsolute).join("/");
              return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
            };
            exports3.normalize = function(path) {
              var isAbsolute = exports3.isAbsolute(path), trailingSlash = substr(path, -1) === "/";
              path = normalizeArray(filter(path.split("/"), function(p) {
                return !!p;
              }), !isAbsolute).join("/");
              if (!path && !isAbsolute) {
                path = ".";
              }
              if (path && trailingSlash) {
                path += "/";
              }
              return (isAbsolute ? "/" : "") + path;
            };
            exports3.isAbsolute = function(path) {
              return path.charAt(0) === "/";
            };
            exports3.join = function() {
              var paths = Array.prototype.slice.call(arguments, 0);
              return exports3.normalize(filter(paths, function(p, index) {
                if (typeof p !== "string") {
                  throw new TypeError("Arguments to path.join must be strings");
                }
                return p;
              }).join("/"));
            };
            exports3.relative = function(from, to) {
              from = exports3.resolve(from).substr(1);
              to = exports3.resolve(to).substr(1);
              function trim(arr) {
                var start = 0;
                for (; start < arr.length; start++) {
                  if (arr[start] !== "")
                    break;
                }
                var end = arr.length - 1;
                for (; end >= 0; end--) {
                  if (arr[end] !== "")
                    break;
                }
                if (start > end)
                  return [];
                return arr.slice(start, end - start + 1);
              }
              var fromParts = trim(from.split("/"));
              var toParts = trim(to.split("/"));
              var length = Math.min(fromParts.length, toParts.length);
              var samePartsLength = length;
              for (var i = 0; i < length; i++) {
                if (fromParts[i] !== toParts[i]) {
                  samePartsLength = i;
                  break;
                }
              }
              var outputParts = [];
              for (var i = samePartsLength; i < fromParts.length; i++) {
                outputParts.push("..");
              }
              outputParts = outputParts.concat(toParts.slice(samePartsLength));
              return outputParts.join("/");
            };
            exports3.sep = "/";
            exports3.delimiter = ":";
            exports3.dirname = function(path) {
              if (typeof path !== "string")
                path = path + "";
              if (path.length === 0)
                return ".";
              var code = path.charCodeAt(0);
              var hasRoot = code === 47;
              var end = -1;
              var matchedSlash = true;
              for (var i = path.length - 1; i >= 1; --i) {
                code = path.charCodeAt(i);
                if (code === 47) {
                  if (!matchedSlash) {
                    end = i;
                    break;
                  }
                } else {
                  matchedSlash = false;
                }
              }
              if (end === -1)
                return hasRoot ? "/" : ".";
              if (hasRoot && end === 1) {
                return "/";
              }
              return path.slice(0, end);
            };
            function basename(path) {
              if (typeof path !== "string")
                path = path + "";
              var start = 0;
              var end = -1;
              var matchedSlash = true;
              var i;
              for (i = path.length - 1; i >= 0; --i) {
                if (path.charCodeAt(i) === 47) {
                  if (!matchedSlash) {
                    start = i + 1;
                    break;
                  }
                } else if (end === -1) {
                  matchedSlash = false;
                  end = i + 1;
                }
              }
              if (end === -1)
                return "";
              return path.slice(start, end);
            }
            exports3.basename = function(path, ext) {
              var f = basename(path);
              if (ext && f.substr(-1 * ext.length) === ext) {
                f = f.substr(0, f.length - ext.length);
              }
              return f;
            };
            exports3.extname = function(path) {
              if (typeof path !== "string")
                path = path + "";
              var startDot = -1;
              var startPart = 0;
              var end = -1;
              var matchedSlash = true;
              var preDotState = 0;
              for (var i = path.length - 1; i >= 0; --i) {
                var code = path.charCodeAt(i);
                if (code === 47) {
                  if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                  }
                  continue;
                }
                if (end === -1) {
                  matchedSlash = false;
                  end = i + 1;
                }
                if (code === 46) {
                  if (startDot === -1)
                    startDot = i;
                  else if (preDotState !== 1)
                    preDotState = 1;
                } else if (startDot !== -1) {
                  preDotState = -1;
                }
              }
              if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                return "";
              }
              return path.slice(startDot, end);
            };
            function filter(xs, f) {
              if (xs.filter)
                return xs.filter(f);
              var res = [];
              for (var i = 0; i < xs.length; i++) {
                if (f(xs[i], i, xs))
                  res.push(xs[i]);
              }
              return res;
            }
            var substr = "ab".substr(-1) === "b" ? function(str, start, len) {
              return str.substr(start, len);
            } : function(str, start, len) {
              if (start < 0)
                start = str.length + start;
              return str.substr(start, len);
            };
          }).call(this, require2("_process"));
        }, { "_process": 5 }], 5: [function(require2, module3, exports3) {
          var process2 = module3.exports = {};
          var cachedSetTimeout;
          var cachedClearTimeout;
          function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
          }
          function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
          }
          (function() {
            try {
              if (typeof setTimeout === "function") {
                cachedSetTimeout = setTimeout;
              } else {
                cachedSetTimeout = defaultSetTimout;
              }
            } catch (e) {
              cachedSetTimeout = defaultSetTimout;
            }
            try {
              if (typeof clearTimeout === "function") {
                cachedClearTimeout = clearTimeout;
              } else {
                cachedClearTimeout = defaultClearTimeout;
              }
            } catch (e) {
              cachedClearTimeout = defaultClearTimeout;
            }
          })();
          function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
              return setTimeout(fun, 0);
            }
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
              cachedSetTimeout = setTimeout;
              return setTimeout(fun, 0);
            }
            try {
              return cachedSetTimeout(fun, 0);
            } catch (e) {
              try {
                return cachedSetTimeout.call(null, fun, 0);
              } catch (e2) {
                return cachedSetTimeout.call(this, fun, 0);
              }
            }
          }
          function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
              return clearTimeout(marker);
            }
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
              cachedClearTimeout = clearTimeout;
              return clearTimeout(marker);
            }
            try {
              return cachedClearTimeout(marker);
            } catch (e) {
              try {
                return cachedClearTimeout.call(null, marker);
              } catch (e2) {
                return cachedClearTimeout.call(this, marker);
              }
            }
          }
          var queue = [];
          var draining = false;
          var currentQueue;
          var queueIndex = -1;
          function cleanUpNextTick() {
            if (!draining || !currentQueue) {
              return;
            }
            draining = false;
            if (currentQueue.length) {
              queue = currentQueue.concat(queue);
            } else {
              queueIndex = -1;
            }
            if (queue.length) {
              drainQueue();
            }
          }
          function drainQueue() {
            if (draining) {
              return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
              currentQueue = queue;
              queue = [];
              while (++queueIndex < len) {
                if (currentQueue) {
                  currentQueue[queueIndex].run();
                }
              }
              queueIndex = -1;
              len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
          }
          process2.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
              for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
              }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
              runTimeout(drainQueue);
            }
          };
          function Item(fun, array) {
            this.fun = fun;
            this.array = array;
          }
          Item.prototype.run = function() {
            this.fun.apply(null, this.array);
          };
          process2.title = "browser";
          process2.browser = true;
          process2.env = {};
          process2.argv = [];
          process2.version = "";
          process2.versions = {};
          function noop() {
          }
          process2.on = noop;
          process2.addListener = noop;
          process2.once = noop;
          process2.off = noop;
          process2.removeListener = noop;
          process2.removeAllListeners = noop;
          process2.emit = noop;
          process2.prependListener = noop;
          process2.prependOnceListener = noop;
          process2.listeners = function(name) {
            return [];
          };
          process2.binding = function(name) {
            throw new Error("process.binding is not supported");
          };
          process2.cwd = function() {
            return "/";
          };
          process2.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
          };
          process2.umask = function() {
            return 0;
          };
        }, {}], 6: [function(require2, module3, exports3) {
          module3.exports = {
            "name": "ejs",
            "description": "Embedded JavaScript templates",
            "keywords": [
              "template",
              "engine",
              "ejs"
            ],
            "version": "3.1.6",
            "author": "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
            "license": "Apache-2.0",
            "bin": {
              "ejs": "./bin/cli.js"
            },
            "main": "./lib/ejs.js",
            "jsdelivr": "ejs.min.js",
            "unpkg": "ejs.min.js",
            "repository": {
              "type": "git",
              "url": "git://github.com/mde/ejs.git"
            },
            "bugs": "https://github.com/mde/ejs/issues",
            "homepage": "https://github.com/mde/ejs",
            "dependencies": {
              "jake": "^10.6.1"
            },
            "devDependencies": {
              "browserify": "^16.5.1",
              "eslint": "^6.8.0",
              "git-directory-deploy": "^1.5.1",
              "jsdoc": "^3.6.4",
              "lru-cache": "^4.0.1",
              "mocha": "^7.1.1",
              "uglify-js": "^3.3.16"
            },
            "engines": {
              "node": ">=0.10.0"
            },
            "scripts": {
              "test": "mocha"
            }
          };
        }, {}] }, {}, [1])(1);
      });
    }
  });

  // src/templates/IssuesEvent/closed.ejs
  var require_closed = __commonJS({
    "src/templates/IssuesEvent/closed.ejs"(exports, module) {
      module.exports = '<article class="media">\n  <figure class="media-left">\n    <a href="https://github.com/<%= event.actor.display_login %>">\n      <figure class="image is-32x32 is-inline-block is-vertically-middle">\n        <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">\n      </figure>\n    </a>\n  </figure>\n\n  <div class="media-content">\n\n    <a href="https://github.com/<%= event.actor.display_login %>" class="has-text-weight-semibold"><%= event.actor.display_login %></a>\n\n      closed an issue on\n\n    <a href="https://github.com/<%= event.repo.name %>" class="has-text-weight-semibold"><%= event.repo.name %></a>\n    <span class="is-size-7">\n      <%= new Date(event.created_at).toLocaleString() %>\n    </span>\n\n    <div class="card">\n      <div class="card-content">\n\n        <figure class="image is-16x16 is-inline-block is-vertically-middle">\n          <img class="is-rounded" src="imgs/closed-issue.svg">\n        </figure>\n\n        <a class="has-text-weight-semibold" href="<%= event.payload.issue.html_url %>"><%= event.payload.issue.title %></a>\n\n      </div>\n    </div>\n  </div>\n</article>\n';
    }
  });

  // src/templates/IssuesEvent/opened.ejs
  var require_opened = __commonJS({
    "src/templates/IssuesEvent/opened.ejs"(exports, module) {
      module.exports = '<article class="media">\n  <figure class="media-left">\n    <a href="https://github.com/<%= event.actor.display_login %>">\n      <figure class="image is-32x32 is-inline-block is-vertically-middle">\n        <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">\n      </figure>\n    </a>\n  </figure>\n\n  <div class="media-content">\n\n    <a href="https://github.com/<%= event.actor.display_login %>" class="has-text-weight-semibold"><%= event.actor.display_login %></a>\n\n      opened an issue on\n\n    <a href="https://github.com/<%= event.repo.name %>" class="has-text-weight-semibold"><%= event.repo.name %></a>\n    <span class="is-size-7">\n      <%= new Date(event.created_at).toLocaleString() %>\n    </span>\n\n    <div class="card">\n      <div class="card-content">\n\n        <figure class="image is-16x16 is-inline-block is-vertically-middle">\n          <img class="is-rounded" src="imgs/open-issue.svg">\n        </figure>\n\n        <a class="has-text-weight-semibold" href="<%= event.payload.issue.html_url %>"><%= event.payload.issue.title %></a>\n\n      </div>\n    </div>\n  </div>\n</article>\n';
    }
  });

  // src/templates/IssuesEvent.js
  var IssuesEvent_exports = {};
  __export(IssuesEvent_exports, {
    selector: () => selector
  });
  function selector(event) {
    event = event.event;
    switch (event.payload.action) {
      case "opened":
        return ejs.render(opened, { event });
        break;
      case "closed":
        return ejs.render(closed, { event });
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
        return "DEFAULT ISSUESEVENT";
        break;
    }
    return "DEFAULT ISSUESEVENT";
  }
  var ejs, closed, opened;
  var init_IssuesEvent = __esm({
    "src/templates/IssuesEvent.js"() {
      ejs = require_ejs();
      closed = require_closed();
      opened = require_opened();
    }
  });

  // src/templates/ReleaseEvent.ejs
  var require_ReleaseEvent = __commonJS({
    "src/templates/ReleaseEvent.ejs"(exports, module) {
      module.exports = '<article class="media">\n\n  <figure class="media-left">\n    <a href="https://github.com/<%= event.actor.display_login %>">\n      <figure class="image is-32x32 is-inline-block is-vertically-middle">\n        <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">\n      </figure>\n    </a>\n  </figure>\n\n  <div class="media-content">\n\n    <a href="https://github.com/<%= event.actor.display_login %>" class="has-text-weight-semibold"><%= event.actor.display_login %></a>\n\n    released\n\n    <a href="<%= event.payload.release.html_url %>" class="has-text-weight-semibold"><%= event.payload.release.name %></a>\n\n    of\n\n    <a href="https://github.com/<%= event.repo.name %>" class="has-text-weight-semibold"><%= event.repo.name %></a>\n    <span class="is-size-7">\n      <%= new Date(event.created_at).toLocaleString() %>\n    </span>\n\n    <div class="card">\n      <div class="card-content">\n        <div>\n\n                <a alt="@<%= event.actor.display_login %>" href="https://github.com/<%= event.actor.display_login %>">\n                  <figure class="image is-16x16 is-inline-block is-vertically-middle">\n                    <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">\n                  </figure>\n                </a>\n\n                <a class="has-text-weight-semibold" href="https://github.com/<%= event.repo.name.split("/")[0] %>"><%= event.repo.name.split("/")[0] %></a>\n\n                /\n\n                <a class="has-text-weight-semibold" href="https://github.com/<%= event.repo.name %>"><%= event.repo.name.split("/")[1] %></a>\n\n                <br>\n\n                <a class="is-size-5 has-text-weight-semibold is-block mt-2" href="<%= event.payload.release.html_url %>"> <%= event.payload.release.name %></a>\n\n\n                <%- event.payload.release.short_description_html %>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</article>\n';
    }
  });

  // src/templates/IssueCommentEvent/created.ejs
  var require_created = __commonJS({
    "src/templates/IssueCommentEvent/created.ejs"(exports, module) {
      module.exports = '<article class="media">\n  <figure class="media-left">\n    <a href="https://github.com/<%= event.actor.display_login %>">\n      <figure class="image is-32x32 is-inline-block is-vertically-middle">\n        <img class="is-rounded" src="<%= event.actor.avatar_url %>" alt="@<%= event.actor.display_login %>">\n      </figure>\n    </a>\n  </figure>\n\n  <div class="media-content">\n\n    <a href="https://github.com/<%= event.actor.display_login %>" class="has-text-weight-semibold"><%= event.actor.display_login %></a>\n\n      commented on\n\n      <figure class="image is-16x16 is-inline-block is-vertically-middle">\n        <img class="is-rounded" src="imgs/open-issue.svg">\n      </figure>\n      <a class="has-text-weight-semibold" href="<%= event.payload.issue.html_url %>"><%= event.payload.issue.title %></a>\n      in\n      <a href="https://github.com/<%= event.repo.name %>" class="has-text-weight-semibold"><%= event.repo.name %></a>\n    <span class="is-size-7">\n      <%= new Date(event.created_at).toLocaleString() %>\n    </span>\n\n    <div class="card">\n      <div class="card-content">\n\n\n\n        <a class="has-text-weight-semibold" href="<%= event.payload.issue.html_url %>"><%= event.payload.issue.title %></a>\n\n      </div>\n    </div>\n  </div>\n</article>\n';
    }
  });

  // src/templates/IssueCommentEvent.js
  var IssueCommentEvent_exports = {};
  __export(IssueCommentEvent_exports, {
    selector: () => selector2
  });
  function selector2(event) {
    event = event.event;
    switch (event.payload.action) {
      case "created":
        return ejs2.render(created, { event });
        break;
      default:
        return "DEFAULT ISSUESEVENT";
        break;
    }
    return "DEFAULT ISSUESEVENT";
  }
  var ejs2, created;
  var init_IssueCommentEvent = __esm({
    "src/templates/IssueCommentEvent.js"() {
      ejs2 = require_ejs();
      created = require_created();
    }
  });

  // src/templates/templates.js
  var templates_exports = {};
  __export(templates_exports, {
    Templates: () => Templates
  });
  var PushEvent, IssuesEvent, ReleaseEvent, IssueCommentEvent, ejs3, Templates;
  var init_templates = __esm({
    "src/templates/templates.js"() {
      PushEvent = require_PushEvent();
      IssuesEvent = (init_IssuesEvent(), IssuesEvent_exports);
      ReleaseEvent = require_ReleaseEvent();
      IssueCommentEvent = (init_IssueCommentEvent(), IssueCommentEvent_exports);
      ejs3 = require_ejs();
      Templates = {
        "PushEvent": ejs3.compile(PushEvent),
        "IssuesEvent": IssuesEvent.selector,
        "ReleaseEvent": ejs3.compile(ReleaseEvent),
        "IssueCommentEvent": IssueCommentEvent.selector
      };
    }
  });

  // src/index.js
  var templates = (init_templates(), templates_exports).Templates;
  var items;
  var EVENT_LOG = false;
  var IGNORE = ["CreateEvent"];
  window.onload = function() {
    items = document.getElementById("items");
    fetch("https://api.github.com/orgs/elementary/events").then((response) => data = response.json()).then((json) => process(json));
  };
  function process(data2) {
    const keys = Object.keys(templates);
    data2.forEach((event) => {
      if (IGNORE.includes(event.type))
        return;
      if (keys.includes(event.type)) {
        const template = templates[event.type];
        const html = template({ event });
        items.innerHTML += html;
        if (EVENT_LOG) {
          console.log(`Template: ${event.type}`);
          console.log(event);
        }
      } else {
        console.log(`No template: ${event.type}`);
        console.log(event);
      }
    });
  }
})();
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */
//# sourceMappingURL=bundle.js.map
