---
title: "AcWing 845 - 八数码"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "八数码"
---

## 走迷宫

时间：`O(4^N)` 空间： `O(N)`

```c++
#include <iostream>
#include <queue>
#include <unordered_set>

using namespace std;

int dirc[4][2] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

int main()  {
    int ans = 0;
    char str[9];
    string source = "", target = "12345678x";
    for (int i = 0; i < 9; i++) {
        cin >> str[i];
        source += str[i];
    }
    queue<string> q;
    q.push(source);
    unordered_set<string> set;
    bool flag = false;
    while (!q.empty()) {
        int size = q.size();
        for (int s = 0; s < size; s++) {
            string now = q.front();
            q.pop();
            if (now == target) {
                flag = true;
                break;
            }
            int xi = now.find('x');
            int x = xi / 3, y = xi % 3;
            for (int d = 0; d < 4; d++) {
                int nx = x + dirc[d][0], ny = y + dirc[d][1];
                if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {
                    int ni = nx * 3 + ny;
                    swap(now[xi], now[ni]);
                    if (set.find(now) == set.end()) {
                        set.insert(now);
                        q.push(now);
                    }
                    swap(now[xi], now[ni]);
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

> [https://www.acwing.com/problem/content/847/](https://www.acwing.com/problem/content/847/)
