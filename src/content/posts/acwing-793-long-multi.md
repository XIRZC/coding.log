---
title: "AcWing 793 - 高精度乘法"
pubDate: "2024-4-10"
categories: ["AcWing"]
description: "给定两个非负整数（不含前导 0）A和B，请你计算 A×B的值。1≤A的长度≤100000,0≤B≤10000"
---

## 模拟

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <vector>

using namespace std;

const int N = 100010;

string a;
int b;
vector<int> av, c;

void multi(vector<int> a, int b) {
    int t = 0;
    for (int i = 0; i < a.size() || t; i++) {
        if (i < a.size()) t += a[i] * b;
        c.push_back(t % 10);
        t = t / 10;
    }
}

int main() {
    cin >> a >> b;
    for (int i = a.size() - 1; i >= 0; i--) av.push_back(a[i] - '0');

    multi(av, b);

    bool flag = false;
    for (int i = c.size() - 1; i >= 0; i--) {
        if (!flag) {
            if (c[i]) {
                cout << c[i];
                flag = true;
            }
        }
        else cout << c[i];
    }
    if (!flag) cout << 0;
    return 0;
}
```

## 优化和简化

```c++
#include <iostream>
#include <vector>

using namespace std;


vector<int> multi(string a, int b) {
    int up = 0;
    vector<int> c;
    for (int i = a.size() - 1; i >= 0 || up; i--) {
        int num = a[i] - '0';
        if (i >= 0) up += b * num;
        c.push_back(up % 10);
        up /= 10;
    }
    while (c.size() > 1 && c.back() == 0) c.pop_back();
    return c;
}

int main() {
    string a;
    int b;
    cin >> a >> b;

    vector<int> c = multi(a, b);

    for (int i = c.size() - 1; i >= 0; i--) cout << c[i];
    return 0;
}
```

## 优化模板

```c++
#include <iostream>
#include <vector>

using namespace std;

vector<int> multi(vector<int> A, vector<int> B) {
    vector<int> C(A.size() + B.size(), 0);
    for (int i = 0; i < A.size(); i++) {
        for (int j = 0; j < B.size(); j++) {
            C[i + j] += A[i] * B[j];
        }
    }
    int up = 0;
    for (int i = 0; i < C.size() || up; i++) {
        up += C[i];
        C[i] = up % 10;
        up /= 10;
    }
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}

int main() {
    string a, b;
    cin >> a >> b;
    vector<int> A, B, C;
    for (int i = a.size() - 1; i >= 0; i--) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i--) B.push_back(b[i] - '0');

    C = multi(A, B);

    for (int i = C.size() - 1; i >= 0; i--) cout << C[i];
    return 0;
}
```

> [https://www.acwing.com/problem/content/795/](https://www.acwing.com/problem/content/795/)
