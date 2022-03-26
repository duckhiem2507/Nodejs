const course = require('../../models/courses')//1 import
class Sitecontroller {
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
  // [GET] /home
  home(req, res) {
    //1 read data in mongodb
    course.find({}, function(err, courses){
      if(!err) {
        res.json(courses);
        return;
      }
      res.status(400).json({error:'err!!!'});
    })
    //res.render('home');
  }
}
module.exports = new Sitecontroller();
