## LeadsHook Dev environment setup

### Requirements

- Docker https://www.docker.com/products/docker-desktop/
- docker-compose https://docs.docker.com/compose/install/
- Nodejs 10 use https://github.com/nvm-sh/nvm to be able to switch between different node version
- Bower `npm install -g bower`
- AWS CLI version 2 https://docs.aws.amazon.com/cli/latest/userguide/getting-started-version.html

if you are using other porjects that require other version of nodejs then you migh need to use https://github.com/nvm-sh/nvm

### Installation

#### AWS ECR

In order to be able to pull docker images from Amazon Elastic Container Registry you will need to have your AWS CLI
configure with your aws access key and access secret. And in case you have more than one AWS CLI profile make sure
to use the approriate profile. Reffer to documentation here:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

You can see the full list of profiles at ~/.aws/credentials (Linux & Mac) or %USERPROFILE%\.aws\credentials (Windows)

Please refer to AWS documentation here: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

Please make sure to configure your aws cli by running the command ` aws configure` and using the AWS key/secret
provided to you

#### Setting up hosts for tenants

LeadsHook is a multi tenant application, each tenant is required to have on subdomain. To mimic that behavior in local
machine we will need to adjust the hosts file in your local machine. In Linux/macOS it is located at /etc/hosts in windows
it is located at C:\Windows\System32\Drivers\etc\hosts

We need the following entries to be added to the hosts file

```
127.0.0.1 redis
127.0.0.1 espconnector.test
127.0.0.1 db
127.0.0.1 test1.leadshook.test
127.0.0.1 account-manager.test
127.0.0.1 leadshookdts.test
```

if you are using macOS or linux you can use the script under dev-env/scripts/init-dev.sh, Please note that you only need
to run this once, and you will need root access. For windows please locate the hosts file and add the above entries manually.

#### Running

First you will need to login to ECR using this comand

`aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 441015278518.dkr.ecr.us-east-1.amazonaws.com`

Open terminal, change your working directory to /dev-env and run
` docker-compose up -d` Or without the -d flag is you want to see the log in your console.

You can also use the exiting command called start in the dev-env folder.

The apps will be running on this urls:

test1.leadshook.test
account-manager.test
espconnector.test

Please read comments in the .env files

### Install bower dependencies

Bower files must be present on your local machine. To install the dependencies please run this command.

```
docker run -it -v `pwd`:/app --rm dev-env_leadshook bower install --allow-root
```

### How to build the app

In case you need to build the app in local either for testing the build process or debugging a build runtime issue
please use this command
```
docker exec -it leadshook npm run build
```

### to run migration just run the ini-dev again

Please make sure the env var DROP_DATABASE is set to 0 or your db will be removed and environment will be reset to starting point

Your LeadsHook dev env must be up and running for the following command to work
```
docker run -it --rm -v `pwd`:/app -v /app/node_modules  dev-env_leadshook npm run app:init-dev
```

### Reset or update existing accounts fields 

Sometimes we add new fields during dev or remove exsiting fields to test code changes. 

In order to reset an account fields please edit the file dev-env/scripts/fix-account-custom-fields.js 
and add the account id in the variable `accountId`

Then run the following command 

```
 node dev-env/scripts/fix-account-custom-fields.js
 ```
