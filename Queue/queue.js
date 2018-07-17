/*
 * @Author: chenyu 
 * @Date: 2018-07-15 17:54:13 
 * @Last Modified by: chenyu
 * @Last Modified time: 2018-07-15 18:15:04
 */

/**一种操作受限的线性数据结构 
 * 先进先出 在前端删除  后端进行插入操作
 * 常用操作：
 * ① enqueue (ele) 向队列尾部插入一个或多个项
 * ② dequeue () 移除队列(队列最前面)的项，并返回被移除的元素
 * ③ front () 返回队列的第一个元素--最先被添加也是最先被移除的元素(不改变原始队列  只是返回)
 * ④ isEmpty () 如果队列不包含任何元素 返回true 否则返回false
 * ⑤ size () 返回队列包含的元素个数 
 */
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

let queue = new Queue();
queue.enqueue('abc');
queue.enqueue('cba');
queue.enqueue('bac');

console.log(queue.font());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.dequeue());