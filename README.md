
## Consideration for Lambda Functions Structure
1. Using TypeScript Type Checking 
2. Devloping and Deploying in Same Way (Without Build or Change Code Structure)
3. Using Node.JS Local Modules for Private Modules
4. All of Lambda Function in Same Folder

## Prerequirements
1. Docker
2. Serverless Framework

## For developing
0. Switch to Lambda Folder
```
cd lambda
```

1. Install Node Modules
```
$ docker run -v "$PWD":/var/task/ lambci/lambda:build-nodejs8.10 npm install
```

2. Run Your Lambda Function with Lambda Event and Env Variable
```
$ cat tests/data/event1.json | docker run --env-file ./env/env.variable -v "$PWD":/var/task/ -i -e DOCKER_LAMBDA_USE_STDIN=1 lambci/lambda:nodejs8.10 functions/handler.hello
```

3. Run Your Lambda Function without Lambda Event
```
$ docker run --env-file ./env/env.variable -v "$PWD":/var/task/ -i -e DOCKER_LAMBDA_USE_STDIN=1 lambci/lambda:nodejs8.10 functions/handler.hello
```

4. Run Your Lambda Function without Lambda Event and Env Variable
```
$ docker run "$PWD":/var/task/ lambci/lambda:nodejs8.10 functions/handler.hello
```


## For deploying
0. Switch to Project Root Folder 
1. Install Node Modules
```
$ docker run -v "$PWD":/var/task/ lambci/lambda:build-nodejs8.10 npm install
```

2. Deploy Function with Serverless
```
$ sls deploy function -f hello
```

3. Deploy Service with Serverless By Different Env
stage could be:
* dev
* qa
* prod

```
$ sls deploy --stage qa -v
```