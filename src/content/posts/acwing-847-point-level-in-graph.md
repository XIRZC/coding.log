---
title: "AcWing 847 - 图中点的层次"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "图中点的层次"
---

## BFS 遍历图 - 邻接表法构建图

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int N = 100010;
int h[N], e[N], ne[N], idx = 0, n, m;
bool visited[N];

void insert(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b;
        cin >> a >> b;
        insert(a, b);
    }
    queue<int> q;
    q.push(1);
    int ans = 0;
    bool flag = false;
    while (!q.empty()) {
        int sz = q.size();
        for (int s = 0; s < sz; s++) {
            int f = q.front();
            q.pop();
            if (f == n) {
                flag = true;
                break;
            }
            for (int i = h[f]; i != -1; i = ne[i]) {
                if (!visited[e[i]]) {
                    q.push(e[i]);
                    visited[e[i]] = true;
                }
            }
        }
        if (flag) break;
        ans++;
    }
    if (flag) cout << ans;
    else cout << -1;
    return 0;
}
```

## 代码简化

```c++
#include <iostream>
#include <queue>
#include <cstring>

using namespace std;

const int N = 100010;
int h[N], e[N], ne[N], idx = 0, n, m, d[N];

void add(int a, int b) {
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int a, b;
        cin >> a >> b;
        add(a, b);
    }
    queue<int> q;
    q.push(1);
    memset(d, -1, sizeof d);
    d[1] = 0;
    while (q.size()) {
        int f = q.front();
        q.pop();
        for (int i = h[f]; i != -1; i = ne[i]) {
            int j = e[i];
            if (d[j] == -1) {
                d[j] = d[f] + 1;
                q.push(j);
            }
        }
    }
    cout << d[n];
    return 0;
}
```

> [https://www.acwing.com/problem/content/849/](https://www.acwing.com/problem/content/849/)
