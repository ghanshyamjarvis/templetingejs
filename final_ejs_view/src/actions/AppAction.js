module.exports = {

  home: function (req, res) {
    res.render('home', {
      active: req.active,
      title: 'Cognition Team',
      description: '',
      keywords: '',
      url : req.originalUrl
    });
  },

  techStack: function (req, res) {
    res.render('tech-stack', {
      active: req.active,
      title: 'Tech Stack',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  },

  whatWeDo: function (req, res) {
    res.render('what-we-do', {
      active: req.active,
      title: 'What We Do',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  },

  app: function (req, res) {
    res.render('app', {
      active: req.active,
      title: 'Our App',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  },

  careers: function (req, res) {
    res.render('careers', {
      active: req.active,
      title: 'Careers',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  },

  careersDetails: function (req, res) {
    res.render('careers-details', {
      active: req.active,
      title: 'Careers Details',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  },

  aboutUs: function (req, res) {
    res.render('about-us', {
      active: req.active,
      title: 'Cognition Team',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  },

  contactUs: function (req, res) {
    res.render('contact-us', {
      active: req.active,
      title: 'Cognition Team',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  },

  services: function (req, res) {
    res.render('services', {
      active: req.active,
      title: 'Services',
      description: '',
      keywords: '',
      url: req.originalUrl
    });
  }
};
