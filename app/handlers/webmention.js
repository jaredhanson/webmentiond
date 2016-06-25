exports = module.exports = function(server) {
  
  function logIt(req, res, next) {
    console.log(req.headers);
    console.log(req.body)
    next();
  }
  
  function handle(req, res, next) {
    server.ping(req.body.source, req.body.target, function(err) {
      // TODO: handle errors
      res.status(202).send('http://alice.host/webmentions/222')
    });
  }
  
  // curl --data "source=http://bob.host/post-by-bob&target=http://alice.host/post-by-alice" http://127.0.0.1:8080/
  
  return [
    require('body-parser').urlencoded({ extended: false }),
    logIt,
    handle
  ];
}

exports['@require'] = [
  'http://schemas.jaredhanson.me/js/social/linkback/Server'
];
