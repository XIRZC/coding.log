---
title: "AcWing 2 - 01背包问题"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "01背包问题"
---

## 01 背包问题 - 动态规划

DP[i][j] = max(DP[i - 1]j - v[i]] + w[i], DP[i - 1][j]) 选择：选择第 i 件物品和不选择第 i 件物品从而划分集合，形成状态转换

时间：`O(N^2)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 1010;
int dp[N], v[N], w[N];

int main() {
    int n, V;
    cin >> N >> V;
    for (int i = 1; i <= n; i++) {
        int vi, wi;
        cin >> vi >> wi;
        v[i] = vi;
        w[i] = wi;
    }
    for (int i = 1; i <= n; i++) {
        for (int j = V; j >= v[i]; j--) {
            dp[j] = max(dp[j - v[i]] + w[i], dp[j]);
        }
    }
    cout << dp[V];
}
```

> [https://www.acwing.com/problem/content/871/](https://www.acwing.com/problem/content/871/)
