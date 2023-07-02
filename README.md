![Result of Unit Testing](https://github.com/prime4567/firebase-function-template/actions/workflows/run-unit-test.yml/badge.svg)

# FIREBASE Function Template
This is the template to use firebase function.

Source code is available in ```src```

To run, execute the following command:
```
npm install -g firebase-tools
firebase login
firebase init functions
```

Demo function is in ```/getHelloWorld```

## Testing detail
Testing is performed using [Mocha](https://mochajs.org/).

To run test, type ```npm run test```