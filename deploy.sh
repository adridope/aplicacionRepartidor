#!/bin/bash

npm run build
scp -r -P 443 dist/* deploy-dealer@reparto.g03.batoilogic.es:/var/www/html/003-reparto