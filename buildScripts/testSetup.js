require('babel-register')(); //run balbe before mocha

require.extensions['.css']=function(){}; //make mocha ignore css 