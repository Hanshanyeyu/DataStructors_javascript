// 击鼓传花
function hotPotato (nameList, num) {
  let queue = new Queue();
  for(let i = 0; i<nameList.length; i++) {
    queue.enqueue(nameList[i]);
  };

  let eliminated = '';//被淘汰的
  while(queue.size()>1) {
    for(let i=0; i<num; i++) {
      queue.enqueue(queue.dequeue());
    };
    eliminated = queue.dequeue();
    console.log(eliminated+'淘汰');
  }
  return queue.dequeue();
}

function Queue() {
  var items = [];
  this.enqueue = function(ele) {
    items.push(ele);
  };
  this.dequeue = function() {
    return items.shift();
  };
  this.font = function() {
    return items[0];
  };
  this.isEmpty = function() {
    return items.length === 0;
  };
  this.size = function() {
    return items.length;
  }
};

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner =
  hotPotato(names, 7);
console.log('The winner is: ' + winner);