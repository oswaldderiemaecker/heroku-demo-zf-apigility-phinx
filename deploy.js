var deploy = require('heroku-deploy-tarball');
 
var config = {
  app: 'heroku-demo-zf-apigility-phinx',
  tarball: process.env.PACKAGE_PATH
}
 
deploy(config);
