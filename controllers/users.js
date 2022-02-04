exports.user = function(req, res, next) {
    res.render('contactinfo', { 
        title: 'Users', 
        name: 'Angel' 
    });
  }
  
  exports.contact = function(req, res, next) {
    res.render('contactinfo', { 
        title: 'Contact info', 
        name: 'contact' 
    });
  }