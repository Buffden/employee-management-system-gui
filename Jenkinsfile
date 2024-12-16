pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'main', url: 'https://github.com/Buffden/employee-management-system'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies and Angular CLI...'
                sh '''
                curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
                apt-get install -y nodejs
                npm install -g @angular/cli
                npm install
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building the Angular application...'
                sh 'ng build --configuration production'
            }
        }

        stage('Dockerize Frontend') {
            steps {
                echo 'Dockerizing the Angular application...'
                sh '''
                docker build -t angular-app .
                docker images
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Running the Docker container...'
                sh '''
                docker rm -f angular-app-container || true
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
            echo 'Cleaning up Docker artifacts...'
            sh '''
            docker ps -a
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
