angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject=['$routeParams', '$location', '$http'];
function BooksShowController($routeParams, $location, $http) {
  var vm = this;
  var bookId = $routeParams.id;
  vm.loadBook = function (){
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/'+bookId
    }).then(function success(response){
      vm.book = response.data
      console.log(vm.book)
    })
  }

  vm.loadBook()

  vm.editBook = function(book){
    console.log(book)
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/'+bookId,
      data: book
      // data: {
      // title: book.title,
      // author: book.author,
      // image: book.image,
      // releaseDate: book.releaseDate,
      // }
    }).then(function editSuccess(res){
      console.log(res)
      vm.book = res.data
    }, function editFail(res){
      console.log('failed', res)
    })
  }

  vm.deleteBook = function(book){
    console.log(book)
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+bookId,
    }).then(function editSuccess(res){
      console.log(res)
      vm.book = res.data
      vm.loadLibrary()
    }, function editFail(res){
      console.log('failed', res)
    })
  }

  vm.loadLibrary = function (){
    $location.path('/')
  }
};
