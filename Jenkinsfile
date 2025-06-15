//updation
pipeline {
  agent any

  environment {
    COMPOSE_FILE = 'docker-compose.jenkins.yml'
    PROJECT_NAME = 'devops_jenkins'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/duaehtisham/devops2-part2.git'
      }
    }

stage('Cleanup') {
  steps {
    sh 'docker-compose -p $PROJECT_NAME -f $COMPOSE_FILE down -v --remove-orphans || true'
  }
}


    stage('Build and Deploy') {
      steps {
        sh 'docker-compose -p $PROJECT_NAME -f $COMPOSE_FILE build'
        sh 'docker-compose -p $PROJECT_NAME -f $COMPOSE_FILE up -d'
      }
    }

    stage('Status') {
      steps {
        sh 'docker ps'
      }
    }
  }
}

