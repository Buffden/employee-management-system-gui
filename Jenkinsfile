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
                    docker run -d -P --name angular-app-container angular-app
                    export APP_PORT=$(docker port angular-app-container 80 | cut -d: -f2)
                    echo "App running on port $APP_PORT"
                    echo $APP_PORT > app_port.txt
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying the deployment...'
                sh '''
                    APP_PORT=$(cat app_port.txt)
                    curl -I http://localhost:$APP_PORT || echo "App not reachable"
                '''
            }
        }
    }

    post {
        always {
            echo 'Cleaning up Docker artifacts...'
            sh 'docker ps -a'
        }
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed. Check logs for errors.'
        }
    }
}
