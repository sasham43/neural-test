angular.module('neuralApp', []);

angular.module('neuralApp').controller('MainController', ['$http', function($http){
  var mc = this;

  var outputs = [];

  var perceptron = new synaptic.Architect.Perceptron(2,3,1);

  var results = perceptron.trainer.XOR({
    iterations: 100000,
    error: 0.0001,
    rate: 1
  });

  var validate = function(){
    outputs = [];
    outputs.push({
      input: '0 0',
      output: perceptron.activate([0,0])[0].toFixed(3),
      target: 0
    });
    outputs.push({
      input: '0 1',
      output: perceptron.activate([0,1])[0].toFixed(3),
      target: 1
    });
    outputs.push({
      input: '1 0',
      output: perceptron.activate([1,0])[0].toFixed(3),
      target: 1
    });
    outputs.push({
      input: '1 1',
      output: perceptron.activate([1,1])[0].toFixed(3),
      target: 0
    });

    console.log(outputs);
  };

  validate();

  console.log('main controller loaded.');
}]);
