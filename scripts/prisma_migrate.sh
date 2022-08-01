#! /bin/bash
if [ -z "$1" ]
then
  sudo docker exec -it banking_api_backend npx prisma migrate dev --skip-seed
else
  sudo docker exec -it banking_api_backend npx prisma migrate dev --name "$1" --skip-seed
fi