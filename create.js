const shell = require("shelljs");

shell.rm("-f", ".clasp.json");
require("@google/clasp logout");
require("@google/clasp login");
