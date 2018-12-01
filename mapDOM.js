HTMLCollection.prototype.mapDOM = function(callback) {
    const arr = [];
    
    for (let i = 0; i < this.length; i++) {
        this[i] && arr.push(callback(this[i], i, this));
    }
    return arr;
};

NodeList.prototype.mapDOM = function(callback) {
    const arr = [];
    
    for (let i = 0; i < this.length; i++) {
        this[i] && arr.push(callback(this[i], i, this));
    }
    return arr;
};