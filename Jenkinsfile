pipeline {
    agent any

    tools {
        nodejs "NodeJS 23"
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test -- --watchAll=false --coverage'
            }
        }

        stage('Build project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Publish Jest report') {
            steps {
                publishHTML(target: [
                    reportDir: 'coverage/lcov-report',
                    reportFiles: 'index.html',
                    reportName: 'Jest Test Coverage'
                ])
            }
        }
    }
}
