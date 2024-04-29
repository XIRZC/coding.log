---
title: "LeetCode 236 - 二叉树的最近公共祖先"
pubDate: "2024-4-27"
categories: ["LeetCode"]
description: "二叉树的最近公共祖先"
---

## 二叉树的最近公共祖先 - DFS

时间：`O(N)` 空间： `O(N)`

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:

    int lp, lq, level = 0;
    unordered_map<TreeNode*, TreeNode*> map;

    void dfs(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == NULL) return;
        if (root->left != NULL) map[root->left] = root;
        if (root->right != NULL) map[root->right] = root;
        level++;
        if (root == p) lp = level;
        if (root == q) lq = level;
        dfs(root->left, p, q);
        dfs(root->right, p, q);
        level--;
    }

    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        dfs(root, p, q);
        int i = lp, j = lq;
        while(i >= 1 && j >= 1) {
            if (i < j) {
                j--;
                q = map[q];
            }
            else if (i > j) {
                i--;
                p = map[p];
            }
            else {
                if (p == q) return p;
                else {
                    i--;
                    j--;
                    p = map[p];
                    q = map[q];
                }
            }
        }
        return NULL;
    }
};
```

## 递归解法

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == NULL || root == p || root == q) return root;
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        if (left == NULL && right == NULL) return NULL;
        if (left == NULL) return right;
        if (right == NULL) return left;
        return root;
    }
};
```

> [https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree)
