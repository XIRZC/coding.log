---
title: "LeetCode 第396场周赛"
pubDate: "2024-5-5"
categories: ["LeetCode"]
description: "LeetCode 第396场周赛"
---

## 100284 - 有效单词

时间：`O(N)` 空间： `O(1)`

```c++
class Solution {
public:
    
    bool check(char ch) {
        ch = tolower(ch);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') return true;
        return false;
    }
    
    bool isValid(string word) {
        int n = word.size(), cnt1 = 0, cnt2 = 0;
        if (n < 3) return false;
        for (int i = 0; i < n; i++) {
            if (!isalnum(word[i])) return false;
            if (isalpha(word[i])) {
                if (check(word[i])) cnt1++;
                else cnt2++;
            }
        }
        return cnt1 >= 1 && cnt2 >= 1;
    }
};
```

## 100275 - K 周期字符串需要的最少操作次数

时间：`O(N)` 空间：`O(N)`

```c++
class Solution {
public:
    int minimumOperationsToMakeKPeriodic(string word, int k) {
        unordered_map<string, int> map;
        int n = word.size(), cnt = 0, maxval = 0;
        for (int i = 0; i < n; i+=k) {
            map[word.substr(i, k)]++;
            cnt++;
            maxval = max(maxval, map[word.substr(i, k)]);
        }
        return cnt - maxval;
    }
};
```

## 100283 - 同位字符串连接的最小长度

错误解法：540/550 样例

时间：`O(N)` 空间：`O(N)`

```c++
class Solution {
public:
    int minAnagramLength(string s) {
        int minval = INT_MAX, n = s.size(), sum = 0;
        int cnt[26];
        for (int i = 0; i < n; i++) {
            int ch = s[i] - 'a';
            cnt[ch]++;
        }
        for (int i = 0; i < 26; i++) {
            if (cnt[i]) minval = min(minval, cnt[i]);
        }
        for (int i = 0; i < 26; i++) sum += cnt[i] / minval;
        return sum;
    }
};
```

正确解法 - 按因数枚举区间依次判断

时间：`O(³√N . N)` 空间：`O(1)`

```c++
class Solution {
public:
    int minAnagramLength(string s) {
        int n = s.size();
        for (int k = 1; k <= n; k++) {
            if (n % k) continue;
            int cnt[26];
            memset(cnt, 0, sizeof cnt);
            for (int i = 0; i < k; i++) cnt[s[i] - 'a']++;
            bool flag = true;
            for (int i = k; i < n; i+=k) {
                int cntj[26];
                memset(cntj, 0, sizeof cntj);
                for (int j = i; j < k + i; j++) cntj[s[j] - 'a']++;
                for (int j = 0; j < 26; j++) {
                    if (cnt[j] != cntj[j]) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag) return k;
        }
        return 0;
    }
};
```

> [https://leetcode.cn/contest/weekly-contest-396](https://leetcode.cn/contest/weekly-contest-396)
