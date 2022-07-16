// Implemantation is almost similar to DFS  main difference is that 
// one would use a queueu instead  of a stack.

const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

const bfs = (graph, source) => {
  let queue = [source];

  while(queue.length > 0){
      let current = queue.shift() ;
      console.log(current) ;

     for(let neighbor of graph[current]){
         queue.push(neighbor) ;
     }
  }
}