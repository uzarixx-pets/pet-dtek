#!/bin/bash
DEV_DOCKER_COMPOSE_DIRECTORY='./deploy/docker-compose.dev.yaml'
DEV_DOCKER_ENV_DIRECTORY='./deploy/.env'

run_docker () {
    docker compose -f "${DEV_DOCKER_COMPOSE_DIRECTORY}" -p "dtek-schedule" --env-file "${DEV_DOCKER_ENV_DIRECTORY}" up
}

initialization_project () {
    npm i -g @nestjs/cli
    install_dep
    
}

install_dependecies () {
    aliases=("backend")
    for alias in "${aliases[@]}"; do 
        run_path="./${alias}/"
        npm i $run_path
    done 
}

usage () {
    echo "Available options:"
    echo
    echo "gr docker.dev.run                              Started development docker compose."
    echo "gr init.project                                Installed dependecies in all directories, downliad cli, and required dependencies"
    echo "gr i                                           Downloaded dependecies in all directories"                                        
}

case $1 in 
'docker.dev.run') 
    run_docker
    ;;
'init.project') 
    initialization_project 
    ;;
'i')
    install_dependecies
    ;;
*) 
    usage
    ;;
esac