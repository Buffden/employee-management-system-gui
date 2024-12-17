pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'main', url: 'https://github.com/Buffden/employee-management-system-gui'
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
                    # Create a Docker network if it doesn't exist
                    docker network create ems-network || true

                    # Remove the existing container if it exists
                    docker rm -f angular-app-container || true

                    # Run the container in the created network
                    docker run -d --network ems-network --name angular-app-container angular-app
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying the deployment...'
                sh '''
                    # Use the container name to access the app within the Docker network
                    curl -I http://angular-app-container:80 || echo "App not reachable"
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
