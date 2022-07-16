const graph = {
    a:[],
    b:[],
    c:[],
    d:[],
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