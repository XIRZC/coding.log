---
title: "AcWing 876 - 快速幂求乘法逆元"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "快速幂求乘法逆元"
---

## 快速幂求乘法逆元

时间：`O(NLogK)` 空间： `O(1)`

```c++
#include <iostream>

using namespace std;

typedef long long LL;

const int N = 100010;

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
    int n;
    cin >> n;
    while (n--) {
        int a, p;
        cin >> a >> p;
        if (a % p == 0) cout << "impossible" << endl;
        else cout << qmi(a, p - 2, p) << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/878/](https://www.acwing.com/problem/content/878/)
