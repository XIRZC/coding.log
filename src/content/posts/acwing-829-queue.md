---
title: "AcWing 829 - 模拟队列"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "数组模拟队列"
---

## 数组模拟队列

时间：`O(N)` 空间： `O(N)`
查询队头：`O(1)`
插入队尾：`O(1)`
删除队头：`O(1)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int q[N], fr = 1, bk = 0, n;

void push(int x) {
    q[++bk] = x;
}

void pop() {
    fr++;
}

int query() {
    return q[fr];
}

bool empty() {
    return bk < fr;
}

int main() {
    cin >> n;
    while (n--) {
        string op;
        int x;
        cin >> op;
        if (op == "push") {
            cin >> x;
            push(x);
        }
        else if (op == "pop") pop();
        else if (op == "empty") puts(empty() ? "YES" : "NO");
        else cout << query() << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/831/](https://www.acwing.com/problem/content/831/)
