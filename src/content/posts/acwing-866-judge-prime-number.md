---
title: "AcWing 866 - 试除法判定质数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "试除法判定质数"
---

## 试除法判定质数

时间：`O(N . sqrt(N))` 空间： `O(1)`

```c++
#include <iostream>

using namespace std;

bool is_prime(int x) {
    if (x < 2) return false;
    for (int i = 2; i <= x / i; i++) {
        if (x % i == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    while (n--) {
        int x;
        cin >> x;
        cout << (is_prime(x) ? "Yes" : "No") << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/868/](https://www.acwing.com/problem/content/868/)
