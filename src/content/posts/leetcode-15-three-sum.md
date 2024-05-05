---
title: "LeetCode 15 - 三数之和"
pubDate: "2024-3-21"
categories: ["LeetCode"]
description: "给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。"
---

## 排序+哈希表

哈希表很难保证不重复，仅参考

时间：`O(N^2)` 空间： `O(N)`

```c++
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> res;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < n; i++) {
            int target = 0 - nums[i];
            unordered_map<int, int> map;
            for (int j = i + 1; j < n; j++) {
                if (map.count(target - nums[j]) && map[target - nums[j] > j]) {
                    vector<int> item;
                    item.push_back(nums[i]);
                    item.push_back(nums[j]);
                    item.push_back(0 - nums[i] - nums[j]);
                    res.push_back(item);
                }
                map[nums[j]] = j;
            }
        }
        return res;
    }
};
```

## 排序+双指针

时间：`O(N^2)` 空间： `O(1)`

```c++
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> res;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < n - 2; i++) {
            if (!i || nums[i] != nums[i - 1]) {
                if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
                if (nums[i] + nums[n - 1] + nums[n - 2] < 0) continue;
                int target = 0 - nums[i];
                int j = i + 1, k = n - 1;
                while (j < k) {
                    if (nums[j] + nums[k] > target) k--;
                    else if (nums[j] + nums[k] < target) j++;
                    else {
                        vector<int> item;
                        item.push_back(nums[i]);
                        item.push_back(nums[j]);
                        item.push_back(nums[k]);
                        res.push_back(item);
                        j++;
                        while (j < k && nums[j - 1] == nums[j]) j++;
                        k--;
                        while (j < k && nums[k + 1] == nums[k]) k--;
                    }
                }
            }
        }
        return res;
    }
};
```

> [https://leetcode.cn/problems/3sum/](https://leetcode.cn/problems/3sum/)
