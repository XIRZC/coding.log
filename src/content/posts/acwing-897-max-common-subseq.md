---
title: "AcWing 897 - 最长公共子序列"
pubDate: "2024-4-19"
categories: ["AcWing"]
description: "最长公共子序列"
---

## 最长公共子序列

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + (a[i] == b[j]))

```c++
#include <iostream>

using namespace std;

const int N = 1010;
int dp[N][N];
int n, m, res = 0;
char a[N], b[N];

int main() {
    cin >> n >> m >> a + 1 >> b + 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            dp[i][j] = max(max(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1] + (a[i] == b[j]));
            res = max(res, dp[i][j]);
        }
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/899/](https://www.acwing.com/problem/content/899/)
