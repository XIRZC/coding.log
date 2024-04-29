---
title: "LeetCode 199 - 二叉树的右视图"
pubDate: "2024-4-26"
categories: ["LeetCode"]
description: "二叉树的右视图"
---

## 二叉树的右视图 - BFS

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

    vector<int> res;

    vector<int> rightSideView(TreeNode* root) {
        bfs(root);
        return res;
    }

    void bfs(TreeNode* root) {
        queue<TreeNode*> q;
        if (root != NULL) q.push(root);
        while (q.size()) {
            int s = q.size();
            TreeNode* f;
            for (int i = 0; i < s; i++) {
                f = q.front();
                q.pop();
                if (f->left != NULL) q.push(f->left);
                if (f->right != NULL) q.push(f->right);
            }
            res.push_back(f->val);
        }
    }
};
```

## 二叉树的右视图 - DFS

时间：`O(N)` 空间：`O(N)`

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

    vector<int> res;

    vector<int> rightSideView(TreeNode* root) {
        dfs(root, 0);
        return res;
    }

    void dfs(TreeNode* root, int depth) {
        if (root == NULL) return;
        if (depth == res.size()) res.push_back(root->val);
        dfs(root->right, depth + 1);
        dfs(root->left, depth + 1);
    }
};
```

> [https://leetcode.cn/problems/binary-tree-right-side-view](https://leetcode.cn/problems/binary-tree-right-side-view)
