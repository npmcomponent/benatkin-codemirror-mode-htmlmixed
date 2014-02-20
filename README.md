*This repository is a mirror of the [component](http://component.io) module [benatkin/codemirror-mode-htmlmixed](http://github.com/benatkin/codemirror-mode-htmlmixed). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/benatkin-codemirror-mode-htmlmixed`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# codemirror-mode-htmlmixed

  HTML highlighting for the 
  [CodeMirror](https://github.com/benatkin/codemirror) 
  [component](https://github.com/component/component)
  with support for highlighting within style and script tags

## Getting Started

Check out the example to learn how to use this.

    $ cd example
    $ npm install -g component
    $ component install
    $ component build
    $ npm install -g serve
    $ serve

After running the above commands, open up http://localhost:3000/ to see it in action.

## API

To use, call it with the codemirror object you want the mode added to.

    var codemirror = require('codemirror');
    require('codemirror-mode-xml')(codemirror);
    require('codemirror-mode-css')(codemirror);
    require('codemirror-mode-javascript')(codemirror);
    require('codemirror-mode-html')(codemirror);
    var textarea = document.getElementById('source');
    codemirror.fromTextArea(textarea, {mode: 'htmlmixed'});

## License

Copyright (C) 2013 Ben Atkin <ben@benatkin.com>

Copyright (C) 2013 by Marijn Haverbeke <marijnh@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Please note that some subdirectories of the CodeMirror distribution
include their own LICENSE files, and are released under different
licences.
