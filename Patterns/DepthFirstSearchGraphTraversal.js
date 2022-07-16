const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

const dfs = (graph, BeginingSource) => {
    const stack = [BeginingSource];

    while(stack.length > 0){
        let current = stack.pop() ;
        console.log(current) ;

        for(let value of graph[current]) {
            stack.push(value)
        }
    }

}

// Recursive DFS

const recursiveDFS = (graph,source) => {
    console.log(source)
    // No need for a base case because we have empty arrays which are considered as dead ends e and f
    for(let neigbor of graph[source]) {
        recursiveDFS(graph, neigbor)
    }
}