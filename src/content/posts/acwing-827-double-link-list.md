---
title: "AcWing 827 - 双链表"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "双链表"
---

## 数组模拟双链表

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>

using namespace std;

const int N = 100010;
int l[N], r[N], e[N], idx = 0, n;

void insert(int k, int x) {
    e[idx] = x;
    l[idx] = k;
    r[idx] = r[k];
    l[r[k]] = idx;
    r[k] = idx;
    idx++;
}

void del(int k) {
    l[r[k]] = l[k];
    r[l[k]] = r[k];
}

int main() {
    cin >> n;
    r[0] = 1;
    l[1] = 0;
    idx = 2;
    while (n--) {
        string op;
        int k, x;
        cin >> op;
        if (op == "L") {
            cin >> x;
            insert(0, x);
        }
        else if (op == "R") {
            cin >> x;
            insert(l[1], x);
        }
        else if (op == "D") {
            cin >> k;
            del(k + 1);
        }
        else if (op == "IL") {
            cin >> k >> x;
            insert(l[k + 1], x);
        }
        else {
            cin >> k >> x;
            insert(k + 1, x);
        }
    }
    for (int i = r[0]; i != 1; i = r[i]) cout << e[i] << ' ';
    return 0;
}
```

> [https://www.acwing.com/problem/content/829/](https://www.acwing.com/problem/content/829/)
