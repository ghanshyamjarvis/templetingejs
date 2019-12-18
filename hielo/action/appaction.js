  module.exports= {
    home: function (req, res) {
      res.render('home', {
        active: req.active,
        title: 'hielo',
        description: '',
        keywords: '',
        url: req.originalUrl
      });
    },
    generic: function (req, res) {
      res.render('generic', {
        active: req.active,
        title: 'hielo',
        description: '',
        keywords: '',
        url : req.originalUrl
      });
    },
    elements: function (req, res) {
      res.render('element', {
        active: req.active,
        title: 'helio',
        description: '',
        keywords: '',
        url : req.originalUrl
      });
    },
  }
