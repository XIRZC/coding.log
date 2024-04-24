---
title: "NowCoder HJ61 - 放苹果"
pubDate: "2024-4-24"
categories: ["NowCoder"]
description: "放苹果"
---

## 放苹果

时间：`O(N ^ 2)` 空间： `O(N ^ 2)`

```c++
#include <iostream>
using namespace std;

const int N = 15;
int dp[N][N];

// 递归自顶向下-备忘录优化
int cal_re(int n, int m) {
    if (n == 0 || m == 1) return 1;
    if (n < m) {
        if (!dp[n][n]) dp[n][n] = cal_re(n, n);
        return dp[n][n];
    }
    if (!dp[n - m][m]) dp[n - m][m] = cal_re(n - m, m);
    if (!dp[n][m - 1]) dp[n][m - 1] = cal_re(n, m - 1);
    return dp[n - m][m] + dp[n][m - 1];
}

// 动态规划自底向上
int cal_dp(int n, int m) {
    for (int i = 0; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (i == 0) dp[i][j] = 1;
            else if (j == 1) dp[i][j] = 1;
            else {
                if (i >= j) dp[i][j] = dp[i - j][j] + dp[i][j - 1];
                else dp[i][j] = dp[i][i];
            }
        }
    }
    return dp[n][m];
}

int main() {
    int n, m;
    cin >> n >> m;
    cout << cal_dp(n, m);
    return 0;
}
```

> [https://www.nowcoder.com/practice/bfd8234bb5e84be0b493656e390bdebf](https://www.nowcoder.com/practice/bfd8234bb5e84be0b493656e390bdebf)