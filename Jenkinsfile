pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "part2project"  // Different project name for Part 2
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/duaehtisham/devops-assignment-2.git' // Your GitHub repo
            }
        }

        stage('Build and Deploy') {
            steps {
                script {
                    // Stop and remove existing containers if any
                    sh 'docker-compose -p part2project -f docker-compose.part2.yml down'
                    // Build and run containers with updated configuration for Part 2
                    sh 'docker-compose -p part2project -f docker-compose.part2.yml up -d --build'
                }
            }
        }
    }
}

