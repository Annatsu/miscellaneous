const mapDOM = function(callback) {
    const arr = [];
    
    for (let i = 0; i < this.length; i++)
        if (this[i])
            arr.push(callback(this[i], i, this));
    
    return arr;
}


HTMLCollection.prototype.mapDOM = mapDOM;
NodeList.prototype.mapDOM = mapDOM;
