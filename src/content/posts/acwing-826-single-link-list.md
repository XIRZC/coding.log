---
title: "AcWing 826 - 单链表"
pubDate: "2024-4-11"
categories: ["AcWing"]
description: "单链表"
---

## 数组模拟单链表

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <cstring>
#include <vector>
#include <unordered_map>

using namespace std;

string exp;
vector<char> ops;
vector<int> nums;
unordered_map<char, int> map = {{'(', 0}, {')', 0}, {'+', 1}, {'-', 1}, {'*', 2}, {'/', 2}};

void eval() {
    char op = ops.back();
    ops.pop_back();

    int num2 = nums.back();
    nums.pop_back();
    int num1 = nums.back();
    nums.pop_back();

    int ans;
    if (op == '+') ans = num1 + num2;
    else if (op == '-') ans = num1 - num2;
    else if (op == '*') ans = num1 * num2;
    else ans = num1 / num2;

    nums.push_back(ans);
}

int main() {
    cin >> exp;
    for (int i = 0; i < exp.size(); i++) {
        char ch = exp[i];
        if (isdigit(ch)) {
            int j = i, ans = 0;
            while (j < exp.size() && isdigit(exp[j])) {
                ans = ans * 10 + exp[j] - '0';
                j++;
            }
            nums.push_back(ans);
            i = j - 1;
        }
        else if (ch == '(') ops.push_back(ch);
        else if (ch == ')') {
            while (ops.back() != '(') eval();
            ops.pop_back();
        }
        else {
            while (ops.size() > 0 && map[ops.back()] >= map[ch]) eval();
            ops.push_back(ch);
        }
    }
    while (ops.size() > 0) eval();
    cout << nums.back();
    return 0;
}
```

> [https://www.acwing.com/problem/content/828/](https://www.acwing.com/problem/content/828/)
