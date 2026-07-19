var preorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    const stack = [root];
    while(stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res;
};