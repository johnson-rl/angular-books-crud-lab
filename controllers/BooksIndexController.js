angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

// add your BooksIndexController function here!
// don't forget $http if you need to make requests
BooksIndexController.$inject = ['$http'];
function BooksIndexController ($http){
  console.log('books!');
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function success(response){
    vm.books = response.data.books
  })
}
