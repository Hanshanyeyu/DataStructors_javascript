/*
 * @Author: chenyu 
 * @Date: 2018-07-16 15:51:56 
 * @Last Modified by: chenyu
 * @Last Modified time: 2018-07-16 20:15:29
 */
// 数组 在内存中是一段连续的内存看见 大小固定
// 插入元素的成本较高 需要进行大量元素的位移

// 链表不同于数组 载内存中不必是连续的空间 每一个元素又一个存储元素本身的节点和一个指向下一个元素的引用（指针）组成
// 相比于数组 链表的有点在于 空间不是连续的 可以充分利用计算机内存
// 不必在创建时就确定大小 并且大小可以无限的延伸下去
// 链表在出入和删除数据时 效率高（添加或移除元素的时候不需要移动其他元素）
// 缺点：要想访问链表中间的一个元素，需要从起点(表头)开始迭代列表直到找到 所需的元素   无法通过下标直接访问元素

/** 常见操作
 * 1⃣️ append(ele) 向链表尾部加入新的项
 * 2⃣️ insert(insert,ele) 想链表的特定位置插入一个新的项
 * 3⃣️ remove(ele) 从链表中移除一项
 * 4⃣️ indexOf(ele) 返回元素在链表重的索引 如果不存在 返回 -1
 * 5⃣️ removeAt(position) 从特定位置删除一项
 * 6⃣️ isEmpty() 如果链表不包含任何元素 发挥true否则返回false
 * 7⃣️ size() 返回链表项的个数 
 * 8⃣️ toString() 重写继承自JS对象默认的toString 方法 让其只输出元素的值
 */
function LinkedList() {
    // node 类 保存节点信息
    function Node(ele) {
        this.ele = ele;
        this.next = null;
    };
    let length = 0;
    let head = null; // 链表的第一个节点

    // 1⃣️链表尾部追加元素的方法
    this.append = function(ele) {
        let node = new Node(ele),
            current;
        // 1.列表为空 向列表添加第一个元素 让head指向node元素（链表的最后一个元素始终为null）
        if (head === null) {
            head = node;
        } else { // 2.不为空
            current = head;
            // 循环列表 直到找到最后一项
            while (current.next) {
                current = current.next;
            };
            // 找到最后一项 将next赋值为node建立链接
            current.next = node;
        };
        // 更新链表长度
        length++;
    };

    // 2⃣  移除指定位置元素
    this.removeAt = function(position) {
        // 检查越界值
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;

            // 移除第一项
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // 将 previous与current的下一项连接起来 跳过current 从而移除它
                previous.next = current.next;
            }
            length--;
            return current.ele;
        } else {
            return null;
        }
    };

    // 3⃣️ 任意位置插入元素
    this.insert = function(position, ele) {
        // 检查越界值 
        if (position >= 0 && position <= length) {
            let node = new Node(ele),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //第一个位置添加
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++; //更新列表长度
            return true;
        } else {
            return false;
        }
    };
    // 4⃣️ toString 方法
    this.toString = function() {
        let current = head;
        string = ' ';
        while (current) {
            string += current.ele + (current.next ? 'n' : ' ');
            current = current.next;
        }
        return string;
    };
    // 5⃣️ indexOf方法
    this.indexOf = function(ele) {
        let current = head;
        index = 0;
        while (current) {
            if (ele === current.ele) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.remove = function(ele) {
        let index = this.indexOf(ele);
        return this.removeAt(index);
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    this.getHead = function() {
        return head;
    }
}
var list = new LinkedList()

// 2.追加元素
list.append(15)
list.append(10)
list.append(20)
// 4.测试insert方法
list.insert(0, 100)
list.insert(4, 200)
list.insert(2, 300)
list.removeAt(0)
list.removeAt(1)
list.removeAt(3)
// 3.打印链表的结果
console.log(list)
console.log(list.indexOf(20));