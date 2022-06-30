class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }


addItem(value){
  let newNode = new Node();
  if(!this.head){
      this.head = newNode;
      this.length ++ ;
  } else {
      let currentNode = this.head;
      while(currentNode && currentNode.next){
          currentNode = currentNode.next;
      }
      currentNode.next = newNode
  }
}


}