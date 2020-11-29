let arr = [
  {
    node:0,
    p:null
  },
  {
    node:1,
    p:0
  },
  {
    node:2,
    p:1
  },
  {
    node:3,
    p:1
  },
  {
    node:4,
    p:0
  },
  {
    node:5,
    p:2
  },
 {
    node:6,
    p:null
  }
]

function arrayToTree(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    arr[i]['children'] = [];
    if(arr[i]['p'] ==  null){
      result.push(arr[i]);
    }
    for(let j = 0; j < arr.length; j++){
      if(arr[j]['p'] == arr[i]['node']){
        arr[i]['children'].push(arr[j]);
      }
    }
    if(arr[i]['children'].length == 0){
      delete arr[i]['children'];
    }
  }

  console.log(JSON.stringify(result));

}

arrayToTree(arr);