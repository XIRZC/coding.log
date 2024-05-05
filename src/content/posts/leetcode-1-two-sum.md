---
title: "LeetCode 1 - 两数之和"
pubDate: "2024-3-21"
categories: ["LeetCode"]
description: "给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。"
---

## 暴力枚举

时间：`O(N^2)` 空间： `O(1)`

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        vector<int> res;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) res.push_back(i), res.push_back(j);
            }
        }
        return res;
    }
};
```

## 哈希表

时间：`O(N)` 空间： `O(N)`

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        unordered_map<int, int> map;
        vector<int> res;
        for (int i = 0; i < n; i++) {
            if (map.count(target - nums[i])) {
                res.push_back(i);
                res.push_back(map[target-nums[i]]);
                break;
            }
            map[nums[i]] = i;
        }
        return res;
    }
};
```

## 双指针

时间：`O(NLogN)` 空间：`O(N)`

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        vector<int> res;
        vector<pair<int, int>> numspair;
        for (int i = 0; i < n; i++) numspair.push_back({nums[i], i});
        sort(numspair.begin(), numspair.end());
        int i = 0, j = n - 1;
        while (i < j) {
            if (numspair[i].first + numspair[j].first == target) {
                res.push_back(numspair[i].second);
                res.push_back(numspair[j].second);
                break;
            }
            else if (numspair[i].first + numspair[j].first > target) j--;
            else i++;
        }
        return res;
    }
};
```

> [https://leetcode.cn/problems/two-sum/](https://leetcode.cn/problems/two-sum/)
