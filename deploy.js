var deploy = require('heroku-deploy-tarball');

package_path = process.env.PACKAGE_PATH;

console.log(package_path);

/*var config = {
  app: 'heroku-demo-zf-apigility-phinx',
  tarball: process.env.PACKAGE_PATH 
}*/

config.app = 'heroku-demo-zf-apigility-phinx';
config.tarball = process.env.PACKAGE_PATH
 
deploy(config);
