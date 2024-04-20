---
title: "AcWing 902 - 最短编辑距离"
pubDate: "2024-4-19"
categories: ["AcWing"]
description: "最短编辑距离"
---

## 最短编辑距离

时间：`O(N^2)` 空间： `O(N^2)`

状态转移：dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 if a[i] != b[j]
                 = dp[i - 1][j - 1] if a[i] == b[j]

```c++
#include <iostream>
#include <cstring>

using namespace std;

const int N = 1010;
char a[N], b[N];
int dp[N][N];
int n, m;

int main() {
    cin >> n >> a + 1 >> m >> b + 1;
    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int i = 0; i <= m; i++) dp[0][i] = i;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i] != b[j]) dp[i][j] = min(dp[i - 1][j - 1], min(dp[i - 1][j], dp[i][j - 1])) + 1;
            else dp[i][j] = dp[i - 1][j - 1];
        }
    }
    cout << dp[n][m];
    return 0;
}
```

> [https://www.acwing.com/problem/content/899/](https://www.acwing.com/problem/content/899/)
