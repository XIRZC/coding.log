---
title: "AcWing 867 - 分解质因数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "分解质因数"
---

## 试除法判定质数

时间：`O(N . sqrt(N))` 空间： `O(1)`

```c++
#include <iostream>

using namespace std;

void prime(int n) {
    // n只会有一个大于sqrt(n)的质因数，因此只枚举2到sqrt(n)，如果存在两个，则这个数想乘就会大于n
    for (int i = 2; i <= n / i; i++) {
        int s = 0;
        // 枚举n的所有因数，如果n % i == 0，代表此时n中没有2~i-1之间的因数，又n % i == 0即n为i的倍数，则i中也没有2~i-1之间的因数，因此i为质数
        while (n % i == 0) {
            n /= i;
            s++;
        }
        if (s > 0) cout << i << ' ' << s << endl;
    }
    // 如果n > 1代表此时n就为n的唯一的大于sqrt(n)的质因数
    if (n > 1) cout << n << ' ' << 1 << endl;
}

int main() {
    int n;
    cin >> n;
    while (n--) {
        int x;
        cin >> x;
        prime(x);
        cout << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/869/](https://www.acwing.com/problem/content/869/)
