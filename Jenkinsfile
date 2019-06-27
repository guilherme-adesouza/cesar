pipeline {
    agent any

    stages {
        stage('[Client] Install') {
            steps {
                dir('client') {
                  sh "npm i"
                }
            }
        }

        stage('[Client] Test') {
            steps {
                dir('client') {
                  sh "npm run test"
                }
            }
        }

        stage('[Client] Build') {
            steps {
                dir('client') {
                  sh "npm run build"
                }
            }
        }
    }

}
