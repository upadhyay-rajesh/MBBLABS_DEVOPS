Development
docker-compose --env-file .env.dev -f docker-compose.dev.yml up --build
Testing
docker-compose --env-file .env.test -f docker-compose.test.yml up --build
Production
docker-compose --env-file .env.prod -f docker-compose.prod.yml up -d
