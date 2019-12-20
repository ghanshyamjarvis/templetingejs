const express = require('express');
const router = express.Router();
const AppAction = require('../actions/AppAction');

router.get('/', AppAction.home);

router.get('/about-us', AppAction.aboutUs);

router.get('/contact-us', AppAction.contactUs);

router.get('/tech-stack', AppAction.techStack);

router.get('/what-we-do', AppAction.whatWeDo);

router.get('/app', AppAction.app);

router.get('/careers', AppAction.careers);

router.get('/careers-details', AppAction.careersDetails);

router.get('/services', AppAction.services);

module.exports = router;
