// implemenation of a graph

class Graph {
constructor(){
    this.verticesCount  = 0 ;
    this.adjacencyList = new Map();

}

addVertice(vertex){
this.adjacencyList.set(vertex, [])
this.verticesCount ++ ;
}

addEdge(source,destination) {
    this.adjacencyList.get(source).push(destination);
    this.adjacencyList.get(destination).push(source);
}

printVertices(){

}

}