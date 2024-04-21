---
title: "LeetCode 1524 - 最长回文子串"
pubDate: "2024-4-20"
categories: ["AcWing"]
description: "最长回文子串"
---

## 二维动态规划

时间：`O(N^2)` 空间：`O(N^2)`

状态转移方程：dp[l][i] = dp[l - 2][i + 1] + 2 if (l - 2 == 0 || dp[l - 2][i + 1] != 0) && s[i] == s[i + l - 1]
                    = 0 else

```c++
#include <iostream>

using namespace std;

const int N = 1010;
int dp[N][N];
string s;

int main() {
    // 一次性读取带有空格的字符串
    getline(cin, s);
    int n = s.length(), res = 0;
    for (int l = 1; l <= n; l++) {
        for (int i = 1; i <= n - l + 1; i++) {
            if (l == 1) dp[l][i] = 1;
            else {
                if ((l - 2 == 0 || dp[l - 2][i + 1] != 0) && s[i - 1] == s[i + l - 1 - 1]) dp[l][i] = dp[l - 2][i + 1] + 2;
            }
            res = max(res, dp[l][i]);
        }
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/1526/](https://www.acwing.com/problem/content/1526/)
