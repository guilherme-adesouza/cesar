pipeline {

    agent any

    options {
        disableConcurrentBuilds()
    }

    stages {
        stage('Install') {
            steps {
                sh 'cd ./client'
                sh "npm i"
            }
        }

        stage('Build') {
            steps {
                sh 'cd ./client'
                sh "npm run build"
            }
        }
    }

}
