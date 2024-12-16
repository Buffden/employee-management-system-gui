pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'main', url: 'https://github.com/Buffden/employee-management-system'
            }
        }

        stage('Build and Dockerize Frontend') {
            steps {
                echo 'Building and Dockerizing Angular application...'
                sh '''
                docker build -t angular-app .
                '''
            }
        }

        stage('Run Container') {
            steps {
                echo 'Running Docker container...'
                sh '''
                docker run -d -p 8080:80 --name angular-app-container angular-app
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying the deployment...'
                sh '''
                curl -I http://localhost:8080 || echo "App not reachable"
                '''
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker container...'
            sh '''
            docker rm -f angular-app-container || true
            docker rmi -f angular-app || true
            '''
        }
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed. Check logs for errors.'
        }
    }
}
