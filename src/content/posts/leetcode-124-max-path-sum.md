---
title: "LeetCode 124 - 二叉树中的最大路径"
pubDate: "2024-4-28"
categories: ["LeetCode"]
description: "二叉树中的最大路径和"
---

## 二叉树中的最大路径和

时间：`O(N)` 空间： `O(N)`

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    int res = INT_MIN;

    int dfs(TreeNode* root) {
        if (root == NULL) return 0;
        int left = max(dfs(root->left), 0);
        int right = max(dfs(root->right), 0);
        int ret = root->val;
        res = max(res, root->val + left + right);
        return max(ret, root->val + max(left, right));
    }

    int maxPathSum(TreeNode* root) {
        dfs(root);
        return res;
    }
};
```

> [https://leetcode.cn/problems/binary-tree-maximum-path-sum](https://leetcode.cn/problems/binary-tree-maximum-path-sum)
