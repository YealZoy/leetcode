// sum(1,2,3,4) 
// curry(sum)
// curry(1)(2)(3)(4)

// function curry(fn){
//    let args = [];
//    let context = this;

//    return function inner(value){
//     args.push(value);
//     if(args.length == fn.length){
//       return fn.apply(context,args);
//     }else{
//       return inner;
//     }
//    }
// }


function add(a,b,c,d){
  console.log('----');
  return a + b + c + d;
}


let curry = (func,args=[]) => func.length === args.length ? func(args) : (...args) => curry(func,[arguments,...args]); 


let curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)(4));