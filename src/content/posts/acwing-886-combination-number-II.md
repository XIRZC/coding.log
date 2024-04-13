---
title: "AcWing 886 - 求组合数II"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "求组合数II"
---

## 求组合数 II

数据范围：n <= 10000, a, b <= 100000 时预处理阶乘和逆元阶乘数组

时间：`O(N LogK)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

typedef long long LL;

const int N = 100010, MOD = 1e9 + 7;
int fact[N], infact[N];
int n;

LL qmi(LL a, int k, int b) {
    LL res = 1;
    while (k) {
        if (k % 2) res = res * a % b;
        k /= 2;
        a = a * a % b;
    }
    return res;
}

int main() {
    cin >> n;
    // 注意这里初始化必须要从下标0开始，因为a - b可能取到0
    fact[0] = infact[0] = 1;
    for (int i = 1; i < N; i++) {
        fact[i] = (LL) fact[i - 1] * i % MOD;
        infact[i] = (LL) infact[i - 1] * qmi(i, MOD - 2, MOD) % MOD;
    }
    while (n--) {
        int a, b;
        cin >> a >> b;
        cout << (LL) fact[a] * infact[a - b] % MOD * infact[b] % MOD << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/888/](https://www.acwing.com/problem/content/888/)
