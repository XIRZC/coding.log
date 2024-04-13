---
title: "AcWing 852 - spfa判断负环"
pubDate: "2024-4-12"
categories: ["AcWing"]
description: "SPFA判断负环"
---

## SPFA 判断负环

时间：`O(NM)` 空间： `O(M)`

```c++
#include <iostream>
#include <cstring>
#include <queue>

using namespace std;

const int N = 2010, M = 100010, INF = 0x3f3f3f3f;
int h[N], e[M], w[M], ne[M], idx = 0;
int d[N], cnt[N];
bool st[N];
int n, m;

void add(int x, int y, int z) {
    e[idx] = y;
    w[idx] = z;
    ne[idx] = h[x];
    h[x] = idx++;
}

bool spfa() {
    memset(d, 0x3f, sizeof d);
    queue<int> q;
    for (int i = 1; i <= n; i++) {
        q.push(i);
        st[i] = true;
    }
    while (q.size()) {
        auto f = q.front();
        q.pop();
        st[f] = false;
        for (int i = h[f]; i != -1; i = ne[i]) {
            int j = e[i];
            int wx = w[i];
            if (d[f] + wx < d[j]) {
                d[j] = d[f] + wx;
                cnt[j] = cnt[f] + 1;
                if (cnt[j] >= n) return true;
                if (!st[j]) {
                    q.push(j);
                    st[j] = true;
                }
            }
        }
    }
    return false;
}

int main() {
    cin >> n >> m;
    memset(h, -1, sizeof h);
    while (m--) {
        int x, y, z;
        cin >> x >> y >> z;
        add(x, y, z);
    }
    if (spfa()) cout << "Yes";
    else cout << "No";
    return 0;
}
```

> [https://www.acwing.com/problem/content/854/](https://www.acwing.com/problem/content/854/)
