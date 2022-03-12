/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let l = new ListNode()
    let c = l
    let jw = 0
    while (l1 || l2) {
        const x = l1 ? l1.val : 0
        const y = l2 ? l2.val : 0
        
        const total = x + y + jw
        c.next = new ListNode(total % 10)
        c = c.next
        jw = Math.floor(total / 10)

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (jw) c.next = new ListNode(jw)
    return l.next
};

const main = ()=>{
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    const rst = addTwoNumbers(l1, l2)
    console.log(rst);
}

main();