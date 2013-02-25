var codemirror = require('codemirror');
require('codemirror-mode-htmlmixed')(codemirror);
var textarea = document.getElementById('source');
codemirror.fromTextArea(textarea);
