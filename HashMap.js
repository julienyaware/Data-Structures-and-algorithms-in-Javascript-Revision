// Hashmap example with hash key that may likely cause collission

class NaiveHashMap {
    constructor (initialValue = 2){
    this.bucketList = new Array(initialValie)
    }
    
    get(key) {
    let value = this.bucketList[key] ;
    return value ;
    }
    
    set(key,value){
    let indexOfHashMap =  getKey(key)
    this.bucketList[indexOfHashMap] =  value ;
    }
    
    getKey(key) {
    let keyString = key.toString();
    
    
    }
    }