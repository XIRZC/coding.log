---
title: "AcWing 872 - 最大公约数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "最大公约数"
---

## 欧几里得算法-辗转相除法-求最大公约数-递归

时间：`O(N)` 空间： `O(1)`

```c++
#include <iostream>

using namespace std;

int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}

int main() {
    int n;
    cin >> n;
    while (n--) {
        int a, b;
        cin >> a >> b;
        cout << gcd(a, b) << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/874/](https://www.acwing.com/problem/content/874/)
