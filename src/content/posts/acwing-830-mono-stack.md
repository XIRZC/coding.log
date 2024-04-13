---
title: "AcWing 830 - 单调栈"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "给定一个长度为N的整数数列，输出每个数左边第一个比它小的数，如果不存在则输出−1。"
---

## 单调栈

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int s[N], top = 0, n;

int main() {
    cin >> n;
    while (n--) {
        int x;
        cin >> x;
        while (top && s[top] >= x) top--;
        if (!top) cout << -1 << ' ';
        else cout << s[top] << ' ';
        s[++top] = x;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/832/](https://www.acwing.com/problem/content/832/)
