---
title: "AcWing 828 - 模拟栈"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "数组模拟栈"
---

## 数组模拟栈

时间：`O(N)` 空间： `O(N)`
查询栈顶：`O(1)`
插入：`O(1)`
删除：`O(1)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int s[N], top = 0, n;

void push(int x) {
    s[++top] = x;
}

int query() {
    return s[top];
}

bool empty() {
    return top == 0;
}

void pop() {
    top--;
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
        else if (op == "query") cout << query() << endl;
        else if (op == "pop") pop();
        else cout << (empty() ? "YES" : "NO") << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/830/](https://www.acwing.com/problem/content/830/)
