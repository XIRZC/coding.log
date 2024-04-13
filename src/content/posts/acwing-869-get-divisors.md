---
title: "AcWing 869 - 试除法求约数"
pubDate: "2024-4-13"
categories: ["AcWing"]
description: "试除法求约数"
---

## 试除法求约数

时间：`O(N . sqrt(A))` 空间： `O(N)`

```c++
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int n;
    cin >> n;
    while (n--) {
        int x;
        cin >> x;
        vector<int> res;
        for (int i = 1; i <= x / i; i++) {
            if (x % i == 0) {
                res.push_back(i);
                if (i != x / i) res.push_back(x / i);
            }
        }
        sort(res.begin(), res.end());
        for (auto item : res) cout << item << ' ';
        cout << endl;
    }
    return 0;
}
```

> [https://www.acwing.com/problem/content/871/](https://www.acwing.com/problem/content/871/)
