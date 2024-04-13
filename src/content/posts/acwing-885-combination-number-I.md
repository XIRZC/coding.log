---
title: "AcWing 885 - 求组合数I"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "求组合数I"
---

## 求组合数 I

数据范围：n <= 10000, a, b <= 2000 时使用动态规划递推去求

时间：`O(N^2)` 空间： `O(N^2)`

```c++
#include <iostream>

using namespace std;

const int N = 2010, MOD = 1e9 + 7;
int c[N][N];
int n;

int main() {
    cin >> n;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j <= i; j++) {
            if (!j) c[i][j] = 1;
            else c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % MOD;
        }
    }
    while (n--) {
        int a, b;
        cin >> a >> b;
        cout << c[a][b] << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/887/](https://www.acwing.com/problem/content/887/)
