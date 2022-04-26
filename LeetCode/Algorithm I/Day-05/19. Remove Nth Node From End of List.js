/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pointer = head;
    let length = 0;
    let removedNode;
    
    while(pointer)
        {
            length++;
            pointer = pointer.next; 
        }
    
    pointer = head;
    
    if(length == 1)
        {
            return null;
        }
    
    if(length == n)
        {
            pointer = pointer.next;
            return pointer;
        }
    
    removedNode = length - n - 1;
    
    while(removedNode)
        {
            pointer = pointer.next;
            removedNode--;
        }
    pointer.next = pointer.next.next;
    return head;
};
