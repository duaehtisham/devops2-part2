pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "devopsapp"
        IMAGE_TAG = "latest"
    }

    stages {
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
