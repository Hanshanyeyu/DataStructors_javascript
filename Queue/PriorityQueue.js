/*
 * @Author: chenyu 
 * @Date: 2018-07-15 18:34:47 
 * @Last Modified by: chenyu
 * @Last Modified time: 2018-07-15 19:27:50
 */
// 优先级队列
/* * 在插入元素时考虑该数据的优先级
 * 和其他数据进行优先级的比较 比较完成后 得出元素在队列中的位置 
 */

function PriorityQueue() {
  var items = [];

  // 新的构造函数 用于保存元素和元素的优先级
  function QueueElement(ele, priority) {
    this.ele = ele;
    this.priority = priority;
  };

  // 添加元素的方法
  this.enqueue = function(ele, priority) {
    var queueElement = new QueueElement(ele, priority);
    // 获取传入元素应该在正确的位置
    var added = false;
    for (var i = 0; i < items.length; i++) {
      // 数值越小优先级越高
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    };
    if (!added) {
      items.push(queueElement);
    }
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

  this.itemss = items;
}
var pQueue = new PriorityQueue();
pQueue.enqueue("abc", 10);
pQueue.enqueue("cba", 5);
pQueue.enqueue("nba", 12);
pQueue.enqueue("nba", 1);
var size = pQueue.size()
console.log(pQueue.itemss);
for (var i = 0; i < size; i++) {
  var item = pQueue.dequeue()
  console.log(item.ele + "-" + item.priority)
}