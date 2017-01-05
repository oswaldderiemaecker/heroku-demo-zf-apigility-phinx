web: ls -l . | awk '{print $9}' | xargs -I X sh -c 'rm X; ln -s `find ../*/*/bin -type f -name X` X' && ./vendor/phing/phing/bin/phing setup && ./vendor/bin/heroku-php-apache2 public/
