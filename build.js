const stylus = require('stylus');


// console.log(stylus.render('p{color:red}'))

module.exports = {
  getStyle: function(module){
    console.log(module)
  },
  getScript: function(module){
    return 'getScript';
  },
  getHtml: function(module){
    return 'getHtml';
  },
  getModule: function(module){
    return 'getModule';
  }
}

