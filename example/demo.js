var codemirror = require('codemirror');
require('codemirror-mode-xml')(codemirror);
require('codemirror-mode-css')(codemirror);
require('codemirror-mode-javascript')(codemirror);
require('codemirror-mode-htmlmixed')(codemirror);
var textarea = document.getElementById('source');
codemirror.fromTextArea(textarea, {mode: 'htmlmixed'});
