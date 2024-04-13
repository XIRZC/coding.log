---
title: "AcWing 875 - 快速幂"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "快速幂"
---

## 二进制分解求快速幂

时间：`O(NLogK)` 空间： `O(1)`

```c++
#include <iostream>

using namespace std;

typedef long long LL;

LL qmi(LL a, int k, int b) {
    LL res = 1;
    while (k) {
        if (k % 2) res = (res * a) % b;
        k /= 2;
        a = (a * a) % b;
    }
    return res;
}

int main() {
    int n;
    cin >> n;
    while (n--) {
        int a, b, p;
        cin >> a >> b >> p;
        cout << qmi(a, b, p) << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/877/](https://www.acwing.com/problem/content/877/)
