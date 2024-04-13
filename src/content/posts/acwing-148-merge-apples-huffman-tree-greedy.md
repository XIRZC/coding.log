---
title: "AcWing 148 - 合并果子"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "合并果子"
---

## 合并果子-贪心

时间：`O(NLogN)` 空间： `O(N)`

```c++
#include <iostream>
#include <queue>

using namespace std;

int main() {
    int n;
    cin >> n;
    priority_queue<int, vector<int>, greater<int>> heap;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        heap.push(x);
    }
    int res = 0;
    while (heap.size() > 1) {
        int a = heap.top(); heap.pop();
        int b = heap.top(); heap.pop();
        res += (a + b);
        heap.push(a + b);
    }
    cout << res;
    return 0;
}
```

> [https://www.acwing.com/problem/content/150/](https://www.acwing.com/problem/content/150/)
