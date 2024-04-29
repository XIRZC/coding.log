---
title: "LeetCode 437 - 路径总和III"
pubDate: "2024-4-27"
categories: ["LeetCode"]
description: "路径总和III"
---

## 路径总和III - 递归解法

时间：`O(N^2)` 空间： `O(N^2)`

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
    // 注意targetSum使用long类型，不然会导致整数减法上溢
    int rootSum(TreeNode* root, long targetSum) {
        if (root == NULL) return 0;
        int cnt = 0;
        if (root->val == targetSum) cnt++;
        cnt += rootSum(root->left, targetSum - root->val);
        cnt += rootSum(root->right, targetSum - root->val);
        return cnt;
    }

    int pathSum(TreeNode* root, int targetSum) {
        if (root == NULL) return 0;
        int cnt = rootSum(root, targetSum);
        cnt += pathSum(root->left, targetSum);
        cnt += pathSum(root->right, targetSum);
        return cnt;
    }
};
```

## 时间优化 - 前缀和

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

    unordered_map<long long, int> map;
    long long preSum = 0;

    int dfs(TreeNode* root, int targetSum) {
        if (root == NULL) return 0;
        int cnt = 0;
        preSum += root->val;
        cnt += map[preSum - targetSum];
        map[preSum]++;
        cnt += dfs(root->left, targetSum);
        cnt += dfs(root->right, targetSum);
        map[preSum]--;
        preSum -= root->val;
        return cnt;
    }

    int pathSum(TreeNode* root, int targetSum) {
        map[0] = 1;
        return dfs(root, targetSum);
    }
};
```

> [https://leetcode.cn/problems/path-sum-iii/](https://leetcode.cn/problems/path-sum-iii/)
