const product = {
    song: 'The girl',
    author: 'Roudeep',
    genre: 'deep',
};
  
function getSong(rating) {
    console.log(this.song + '-' + this.author + ', ' + rating);
};
  
const myBind = function (func, context, ...rest) {
  
  return function (...arguments) {
    return func.call(context, ...rest.concat(arguments))
  }
};

let result = myBind(getSong, product, 'rating-5');
result();

