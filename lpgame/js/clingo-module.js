// This file is released under the MIT license.
// See LICENSE.md.
//
// The code in this file is taken (in modified form) from:
// https://github.com/potassco/potassco.github.io

var ClingoModule = {};

var stored_programs = {}
function save_stored_program(name, program) {
    stored_programs[name] = program;
}
function load_named_program(name, path) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        program = request.responseText.trim()
        save_stored_program(name, program);
      }
    }
    request.open("GET", path, true);
    request.send();
}
// load_named_program("heuristics", "stored/heuristics.lp")

var output_elem = document.getElementById('output');
var output = "";

function clearOutput() {
  output = "";
  updateOutput();
}

function addToOutput(text) {
  if (output == "") {
      output += text;
  } else {
      output += "\n" + text;
  }
  updateOutput();
}

function updateOutput() {
  if (output_elem) {
    output_elem.textContent = output;
    outputElement.scrollTop = outputElement.scrollHeight; // focus on bottom
  }
}

function solve() {

  output = "";

  options = "-n1 -Wnone";
  program = "a :- not b.\nb :- not a.\n"
  ClingoModule.ccall('run', 'number', ['string', 'string'], [program, options])

  updateOutput();
  // document.getElementById("run").disabled = false;
}

function handleOutputLine(text) {
  addToOutput(text);
  updateOutput();
}

const version = '0.3.0';

d3.require(`wasm-clingo@${version}`).then(Clingo => {
    const Module = {
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/wasm-clingo@${version}/${file}`,
        print: function(text) {
            handleOutputLine(text);
        },
        printErr: function(err) {
            Module.setStatus('Error')
            console.error(err)
        },
        setStatus: function(text) {
            output_elem.innerHTML += text + "<br>";
        },
        totalDependencies: 0,
        monitorRunDependencies: function(left) {
            this.totalDependencies = Math.max(this.totalDependencies, left);
            Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
        }
    }

    window.onerror = function(event) {
        Module.setStatus('Exception thrown, see JavaScript console');
        Module.setStatus = function(text) {
            if (text) Module.printErr('[post-exception status] ' + text);
        };
    };
    Module.setStatus('Downloading...');

    Clingo(Module).then(clingo => {
        ClingoModule = clingo;
    });

});

handleOutputLine("")
