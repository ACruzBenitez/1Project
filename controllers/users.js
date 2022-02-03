exports.user = function(req, res, next) {
    res.render('useres', { 
        title: 'Users', 
        name: 'Angel' 
    });
  }

exports.angel = function(req, res, next) {
    res.render('useres', { 
        title: 'Users Page', 
        name: 'Angel Cruz' 
    });
  }
  
  exports.contact = function(req, res, next) {
    res.render('useres', { 
        title: 'Contact info', 
        name: 'contact' 
    });
  }