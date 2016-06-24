exports = module.exports = function() {
  
  function logIt(req, res, next) {
    console.log(req.headers);
    console.log(req.body)
    next();
  }
  
  function respond(req, res, next) {
    res.status(202).send('http://alice.host/webmentions/222')
  }
  
  // curl --data "source=http://bob.host/post-by-bob&target=http://alice.host/post-by-alice" http://127.0.0.1:8080/
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    logIt,
    respond
  ];
}

exports['@require'] = [];
