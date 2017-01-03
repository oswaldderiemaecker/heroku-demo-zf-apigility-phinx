var deploy = require('heroku-deploy-tarball');

var package_path = process.env.PACKAGE_PATH;

console.log(package_path);

var config = {
  app: 'heroku-demo-zf-apigility-phinx',
  tarball: package_path
}
 
deploy(config);
