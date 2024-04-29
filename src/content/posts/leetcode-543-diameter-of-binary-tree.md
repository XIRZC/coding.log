---
title: "LeetCode 124 - 二叉树中的直径"
pubDate: "2024-3-15"
categories: ["LeetCode"]
description: "二叉树中的直径"
---

## 二叉树中的直径

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

    int diameter = INT_MIN;

    int dfs(TreeNode* root) {
        if (root == NULL) return 0;
        int left = dfs(root->left);
        int right = dfs(root->right);
        diameter = max(diameter, left + right + 1);
        return max(left, right) + 1;
    }

    int diameterOfBinaryTree(TreeNode* root) {
        dfs(root);
        return diameter - 1;
    }
};
```

> [https://leetcode.cn/problems/diameter-of-binary-tree/](https://leetcode.cn/problems/diameter-of-binary-tree/)
