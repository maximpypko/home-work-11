const product = {
  song: 'The girl',
  author: 'Roudeep',
  genre: 'deep',
};

function getSong(rating) {
  console.log(this.song + '-' + this.author + ', ' + rating);
};

function myBind(func, context, ...rest) {

  return function (...arguments) {
    
    context.func = func;
    const result = context.func(...rest, ...arguments);
    delete context.func;

    return result;
  }
}

myBind(getSong, product, 'rating-5')();