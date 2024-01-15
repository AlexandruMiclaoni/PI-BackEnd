const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/get-all', eventController.getEvents);
router.post('/create-event', eventController.createEvent);
router.post('/confirmation/:eventId/:userMail', eventController.confirmation);
router.post('/attend/:eventId/:userMail', eventController.attend);
router.delete('/delete-event/:eventId', eventController.deleteEvent);

module.exports = router;