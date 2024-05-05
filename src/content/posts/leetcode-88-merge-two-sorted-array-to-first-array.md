---
title: "LeetCode 27 - 移除元素"
pubDate: "2024-5-4"
categories: ["LeetCode"]
description: "移除元素"
---

## 移除元素 - 双指针交换

时间：`O(N)` 空间：`O(1)`

```c++
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int cnt = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == val) {
                int j = i + 1;
                while (j < nums.size() && nums[j] == val) j++;
                if (j < nums.size()) {
                    swap(nums[i], nums[j]);
                    cnt++;
                }
            }
            else cnt++;
        }
        return cnt;
    }
};
```

## 排序 + 二分 + 区间元素移至末尾（交换）

时间：`O(NLogN)` 空间：`O(1)`

```c++
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int n = nums.size();
        sort(nums.begin(), nums.end());
        int l = 0, r = n - 1, vall, valr;
        while (l < r) {
            int m = l + r >> 1;
            if (nums[m] >= val) r = m;
            else l = m + 1;
        }
        vall = (n && nums[l] == val) ? l : 0;
        l = 0, r = n - 1;
        while (l < r) {
            int m = l + r + 1 >> 1;
            if (nums[m] <= val) l = m;
            else r = m - 1;
        }
        valr = (n && nums[l] == val) ? l : -1;
        reverse(nums.begin() + (valr  + 1), nums.end());
        reverse(nums.begin() + vall, nums.end());
        return n - (valr - vall + 1);
    }
};
```

## 双指针 - 精简

时间：`O(N)` 空间：`O(1)`

```c++
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int left = 0;
        for (int right = 0; right < nums.size(); right++) {
            if (nums[right] != val) nums[left++] = nums[right];
        }
        return left;
    }
};
```

> [https://leetcode.cn/problems/remove-element](https://leetcode.cn/problems/remove-element)
