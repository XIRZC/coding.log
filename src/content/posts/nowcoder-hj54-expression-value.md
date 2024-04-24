---
title: "NowCoder HJ54 - 表达式求值"
pubDate: "2024-4-24"
categories: ["NowCoder"]
description: "表达式求值"
---

## 表达式求值 - 模拟

时间：`O(N)` 空间： `O(N)`

```c++
#include <iostream>
#include <stack>
#include <unordered_map>

using namespace std;

string s;
int n;
stack<int> nums;
stack<char> ops;
unordered_map<char, int> order = {{'-', 1}, {'+', 1}, {'*', 2}, {'/', 2}};

void eval() {
    int num2 = nums.top();
    nums.pop();
    int num1 = nums.top();
    nums.pop();

    char op = ops.top();
    ops.pop();

    int res = 0;
    if (op == '+') res = num1 + num2;
    else if (op == '-') res = num1 - num2;
    else if (op == '*') res = num1 * num2;
    else res = num1 / num2;

    nums.push(res);
}

int main() {
    cin >> s;
    n = s.size();
    bool flag = false;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') ops.push(s[i]);
        else if (s[i] == ')') {
            while (ops.size() && ops.top() != '(') eval();
            ops.pop();
        }
        else if (flag) {
            while (ops.size() && order[ops.top()] >= order[s[i]]) eval();
            ops.push(s[i]);
            flag = false;
        }
        else {
            int t = 0, j = i;
            bool neg = false;
            if (s[j] == '+') j++;
            if (s[j] == '-') {
                neg = true;
                j++;
            }
            while (isdigit(s[j])) {
                t = t * 10 + (s[j] - '0');
                j++;
            }
            if (neg) t = 0 - t;
            nums.push(t);
            i = j - 1;
            flag = true;
        }
    }
    while (ops.size()) eval();
    cout << nums.top();
    return 0;
}
```

> [https://www.nowcoder.com/practice/9566499a2e1546c0a257e885dfdbf30d](https://www.nowcoder.com/practice/9566499a2e1546c0a257e885dfdbf30d)