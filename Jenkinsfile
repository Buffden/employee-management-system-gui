pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Buffden/employee-management-system'
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building Angular application...'
                sh 'npm install'
                sh 'ng build --prod'
            }
        }

        stage('Dockerize Frontend') {
            steps {
                echo 'Dockerizing Angular application...'
                sh 'docker build -t angular-app .'
            }
        }

        stage('Deploy Frontend') {
            steps {
                echo 'Deploying Angular application...'
                // Add deployment logic here
            }
        }
    }
}
