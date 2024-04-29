---
title: "LeetCode 32 - 最长有效括号"
pubDate: "2024-4-29"
categories: ["LeetCode"]
description: "最长有效括号"
---

## 最长有效括号 - 暴力栈判断有效括号长度 - 228/231

时间：`O(N^3)` 空间： `O(N)`

```c++
class Solution {
public:
    int longestValidParentheses(string s) {
        int n = s.size(), res = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j += 2) {
                vector<int> stack;
                int k;
                for (k = i; k <= j; k++) {
                    if (s[k] == '(') stack.push_back(s[k]);
                    else {
                        if (stack.size() && stack.back() == '(') stack.pop_back();
                        else break;
                    }
                }
                if (k > j && stack.size() == 0) res = max(res, j - i + 1);
            }
        }
        return res;
    }
};
```

## 最长有效括号 - 动态规划

时间：`O(N)` 空间： `O(N)`

状态转移：dp[i] = dp[i - 2] + 2 if s[i] == ')' && s[i - 1] == '('
              = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2 if s[i - dp[i - 1] - 1] == '(' s[i] == ')'
              = 0 else

```c++
const int N = 30010;

class Solution {
public:

    int dp[N];

    int longestValidParentheses(string s) {
        int n = s.size(), res = 0;
        for (int i = 2; i <= n; i++) {
            if (s[i - 1] == ')') {
                if (s[i - 1 - 1] == '(') dp[i] = dp[i - 2] + 2;
                else {
                    if (i - dp[i - 1] - 1 > 0 && s[i - dp[i - 1] - 1 - 1] == '(') {
                        dp[i] = dp[i - 1] + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0) + 2;
                    }
                }
            }
            res = max(res, dp[i]);
        }
        return res;
    }
};
```

## 栈

时间：`O(N)` 空间：`O(N)`

```c++
class Solution {
public:
    int longestValidParentheses(string s) {
        int res = 0;
        stack<int> st;
        st.push(-1);
        for (int i = 0; i < s.size(); i++) {
            if (s[i] == '(') st.push(i);
            else {
                st.pop();
                if (st.size()) res = max(res, i - st.top());
                else st.push(i);
            }
        }
        return res;
    }
};
```

> [https://leetcode.cn/problems/longest-valid-parentheses](https://leetcode.cn/problems/longest-valid-parentheses)
