#!/bin/bash
DEV_DOCKER_COMPOSE_DIRECTORY='./deploy/docker-compose.dev.yaml'
DEV_DOCKER_ENV_DIRECTORY='./deploy/.env'

run_docker () {
    docker compose -f "${DEV_DOCKER_COMPOSE_DIRECTORY}" -p "dtek-schedule" --env-file "${DEV_DOCKER_ENV_DIRECTORY}" up
}

case $1 in 
'docker.run') 
    run_docker
    ;;
esac