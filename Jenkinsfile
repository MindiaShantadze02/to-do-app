pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo "build stage"
            }
        }

        stage("test" {
            steps{
                echo "test stage"
            }
        })

        stage("deploy") {
            steps{
                echo "deploy stage"
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}