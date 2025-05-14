pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "devopsapp"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/duaehtisham/devops-assignment-2.git'
            }
        }

        stage('Build and Deploy') {
            steps {
                script {
                    sh 'docker-compose -p devopsapp -f docker-compose.yml down'
                    sh 'docker-compose -p devopsapp -f docker-compose.yml up -d --build'
                }
            }
        }
    }
}
