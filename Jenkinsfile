pipeline {
    agent any

    stages {
        stage('Client') {
            steps {
                dir('client') {
                  sh "npm i"
                  sh "CI=true npm run test"
                  sh "npm run build"
                }
            }
        }

        stage('Server') {
            steps {
                dir('server') {
                  sh "npm i"
                  withEnv(["JEST_JUNIT_OUTPUT=./jest-test-results.xml"]) {
                    sh 'npm run test'
                  }
                  junit 'jest-test-results.xml'
                  sh "npm run test"
                  sh "npm run build"
                }
            }
        }

        stage('Upload') {
          steps {
              dir('scripts') {
                 sh "./uploadFtp.sh"
              }
          }
        }
    }

    post {
        always {
          junit 'server/*.xml'
        }
    }

}
