angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

// add your BooksIndexController function here!
// don't forget $http if you need to make requests
BooksIndexController.$inject = ['$http'];
function BooksIndexController ($http){
  console.log('books!');
  var vm = this;
  vm.books=[]
  vm.newBook = {image: 'http://bit.ly/2iQvmZ5'}
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function success(response){
    vm.books = response.data.books
    console.log(vm.books)
  })

  vm.saveBook = function(newBook){
    console.log("got data: ", newBook)
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books/',
      data: newBook
    }).then(function newSuccess(res){
      console.log("saved:", res)
      vm.books.push(res.data)
      vm.newBook = {image: 'http://bit.ly/2iQvmZ5'}
    }, function editFail(res){
      console.log('failed', res)
    })
  }
}
