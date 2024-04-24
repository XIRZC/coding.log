---
title: "NowCoder HJ29 - 字符串加解密"
pubDate: "2024-4-23"
categories: ["NowCoder"]
description: "字符串加解密"
---

## 字符串加解密

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
using namespace std;

char change(char ch) {
    if (ch >= 'a' && ch <= 'z') ch = (ch - 'a' + 1) % 26 + 'A';
    else ch = (ch - 'A' + 1) % 26 + 'a';
    return ch;
}

char invchange(char ch) {
    if (ch >= 'a' && ch <= 'z') ch = (ch - 'a' - 1 + 26) % 26 + 'A';
    else ch = (ch - 'A' - 1 + 26) % 26 + 'a';
    return ch;
}

string encode(string s) {
    int n = s.size();
    for (int i = 0; i < n; i++) {
        if (isdigit(s[i])) s[i] = (s[i] - '0' + 1) % 10 + '0';
        else s[i] = change(s[i]);
    }
    return s;
}

string decode(string s) {
    int n = s.size();
    for (int i = 0; i < n; i++) {
        if (isdigit(s[i])) s[i] = (s[i] - '0' - 1 + 10) % 10 + '0';
        else s[i] = invchange(s[i]);
    }
    return s;
}

int main() {
    string es, ds;
    cin >> es >> ds;
    cout << encode(es) << endl;
    cout << decode(ds);
    return 0;
}
```

> [https://www.nowcoder.com/practice/2aa32b378a024755a3f251e75cbf233a](https://www.nowcoder.com/practice/2aa32b378a024755a3f251e75cbf233a)