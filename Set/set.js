let mySet = function(){
    //the var collection will hold the set
    var collection = [];

    //this method will check for the presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

    //this method will return all the values in the set
    this.values = function(){
        return collection;
    }

    //this method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    //this method will remove an element from the set
    this.delete = function(element){
        if(this.has(element)){
            var index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    //this method will return the size of the set
    this.size = function(){
        return collection.length;
    }

    //Following methods are not part of the Sets in ES6

    //this method will return the union of the two sets as a new set
    this.union = function(otherSet){
      var unionSet = new mySet();
      var firstSet = this.values();
      var secondSet = otherSet.values();

      firstSet.map(value => unionSet.add(value));
      secondSet.map(value => unionSet.add(value));

      return unionSet;
    }

    //this method will return the intersection of the two sets as a new set
    this.intersection = function(otherSet){
      var intersectionSet = new mySet();
      var firstSet = this.values();

      firstSet.map(value => {
        if(otherSet.has(value)){
          intersectionSet.add(value);
        }
      });

      return intersectionSet;
    }

    //this method will return the difference of the two sets as a new set
    this.difference = function(otherSet){
      var differenceSet = new mySet();
      var firstSet = this.values();
      
      firstSet.map(value => {
        if(!otherSet.has(value)){
          differenceSet.add(value);
        }
      })

      return differenceSet;
    }

    //this method will check if the set is subset of different set
    this.subset = function(otherSet){
      var firstSet = this.values();
      return firstSet.every(value => {
        return otherSet.has(value);
      })
    }
}

let set = new mySet();
console.log(set.add('a'));
console.log(set.add('b'));
console.log(set.add('c'));
console.log(set.add('d'));
console.log(set.values());
console.log(set.add('a'));
console.log(set.values());
console.log(set.delete('b'));
console.log(set.values());
console.log(set.size());

let secondSet = new mySet();
console.log(secondSet.add('b'));
console.log(secondSet.add('c'));
console.log(secondSet.add('d'));

console.log(set.union(secondSet).values());
console.log(set.intersection(secondSet).values());
console.log(set.difference(secondSet).values());
console.log(secondSet.difference(set).values());
console.log(set.subset(secondSet));
console.log(set.intersection(secondSet).subset(secondSet));