/*
 * @Author: chenyu 
 * @Date: 2018-07-14 16:52:27 
 * @Last Modified by: chenyu
 * @Last Modified time: 2018-07-14 17:19:46
 */
// 栈 一种受限制的线性数据结构  先进后出 （区别于数组 操作自由）
// 栈操作
/** 1⃣️ push 添加元素到栈顶
 *   2⃣️ pop移除栈顶的元素  ️
 *   3⃣️ peek返回栈顶的元素 （不会移除栈元素 仅仅是返回）
 *   4⃣️ isEmpty 判断栈是否为空
 *   5⃣️ clear 清空栈
 *   6⃣️ size 返回栈里面元素个数
 */
function Stack() {
    var items = [];
    this.push = function(ele) {
        items.push(ele);
    };
    this.pop = function() {
        return items.pop();
    };
    this.peek = function() {
        return items[items.length - 1];
    };
    this.isEmpty = function() {
        return items.length === 0;
    };
    this.clear = function() {
        items = [];
    };
    this.size = function() {
        return items.length;
    }
};

// 进制转换
function dec2bin(decNum) {
    let stack = new Stack();
    let remainder; // 余数
    while (decNum > 0) {
        remainder = decNum % 2;
        decNum = Math.floor(decNum / 2);
        stack.push(remainder);
    };
    let binaryString = '';
    while (!stack.isEmpty()) {
        binaryString += stack.pop();
    };
    return binaryString;
};
console.dir(dec2bin(25));