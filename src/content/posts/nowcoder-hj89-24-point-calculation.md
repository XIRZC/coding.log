---
title: "NowCoder HJ89 - 24点运算"
pubDate: "2024-4-24"
categories: ["NowCoder"]
description: "24点运算"
---

## 24点运算 - 运算符有优先级

```c++
#include <iostream>
#include <unordered_map>
#include <vector>
#include <stack>

using namespace std;

string s[4];
int num[4];
bool st[4];
int idx = 0;
bool flag = false;
unordered_map<string, int> map = {{"10", 10}, {"J", 11}, {"Q", 12}, {"K", 13}, {"A", 1}};
unordered_map<string, int> order = {{"+", -2}, {"-", -2}, {"*", -1}, {"/", -1}};
unordered_map<string, int> op2int = {{"+", -4}, {"-", -3}, {"*", -2}, {"/", -1}};
unordered_map<int, string> int2op = {{-4, "+"}, {-3, "-"}, {-2, "*"}, {-1, "/"}};
vector<int> path, savepath;
stack<int> nums;
stack<string> ops;

void eval() {
    int num2 = nums.top();
    nums.pop();
    int num1 = nums.top();
    nums.pop();

    string op = ops.top();
    ops.pop();

    int res = 0;
    if (op == "+") res = num1 + num2;
    else if (op == "-") res = num1 - num2;
    else if (op == "*") res = num1 * num2;
    else res = num1 / num2;
    nums.push(res);
}

void backtrack(int l) {
    if (flag) return;
    if (l == idx) {
        for (auto item : path) {
            if (item >= 0) nums.push(num[item]);
            else {
                while (ops.size() && order[ops.top()] >= order[int2op[item]]) eval();
                ops.push(int2op[item]);
            }
        }
        while (ops.size()) eval();
        if (nums.top() == 24) {
            flag = true;
            savepath = path;
        }
        return;
    }
    for (int i = 0; i < idx; i++) {
        if (!st[i]) {
            st[i] = true;
            path.push_back(op2int["+"]);
            path.push_back(i);
            backtrack(l + 1);
            path.pop_back();
            path.pop_back();
            path.push_back(op2int["-"]);
            path.push_back(i);
            backtrack(l + 1);
            path.pop_back();
            path.pop_back();
            path.push_back(op2int["*"]);
            path.push_back(i);
            backtrack(l + 1);
            path.pop_back();
            path.pop_back();
            path.push_back(op2int["/"]);
            path.push_back(i);
            backtrack(l + 1);
            path.pop_back();
            path.pop_back();
            st[i] = false;
        }
    }
}

int main() {
    while (cin >> s[idx++]);
    idx--;
    for (int i = 0; i < idx; i++) {
        if (s[i] == "joker" || s[i] == "JOKER") {
            cout << "ERROR";
            return 0;
        }
    }
    for (int i = 0; i < idx; i++) {
        string ch = s[i];
        if (map[ch]) num[i] = map[ch];
        else num[i] = ch[0] - '0';
    }
    for (int i = 0; i < idx; i++) {
        path.push_back(i);
        st[i] = true;
        backtrack(1);
        if (flag) break;
        st[i] = false;
        path.pop_back();
    }
    if (flag) {
        for (auto item : savepath) {
            if (item >= 0) cout << s[item];
            else cout << int2op[item];
        }
    }
    else cout << "NONE";
    return 0;
}
```

## 运算符无优先级

```c++
#include <iostream>
#include <unordered_map>
#include <vector>
#include <stack>

using namespace std;

string s[4];
int num[4];
bool st[4];
int idx = 0;
bool flag = false;
unordered_map<string, int> map = {{"10", 10}, {"J", 11}, {"Q", 12}, {"K", 13}, {"A", 1}};
unordered_map<string, int> op2int = {{"+", -4}, {"-", -3}, {"*", -2}, {"/", -1}};
unordered_map<int, string> int2op = {{-4, "+"}, {-3, "-"}, {-2, "*"}, {-1, "/"}};
vector<int> path, savepath;
stack<int> nums;
stack<string> ops;

void backtrack(int l, int x) {
    if (flag) return;
    if (l == idx) {
        if (x == 24) {
            flag = true;
            savepath = path;
        }
        return;
    }
    for (int i = 0; i < idx; i++) {
        if (!st[i]) {
            st[i] = true;
            path.push_back(op2int["+"]);
            path.push_back(i);
            backtrack(l + 1, x + num[i]);
            path.pop_back();
            path.pop_back();
            path.push_back(op2int["-"]);
            path.push_back(i);
            backtrack(l + 1, x - num[i]);
            path.pop_back();
            path.pop_back();
            path.push_back(op2int["*"]);
            path.push_back(i);
            backtrack(l + 1, x * num[i]);
            path.pop_back();
            path.pop_back();
            path.push_back(op2int["/"]);
            path.push_back(i);
            backtrack(l + 1, x / num[i]);
            path.pop_back();
            path.pop_back();
            st[i] = false;
        }
    }
}

int main() {
    while (cin >> s[idx++]);
    idx--;
    for (int i = 0; i < idx; i++) {
        if (s[i] == "joker" || s[i] == "JOKER") {
            cout << "ERROR";
            return 0;
        }
    }
    for (int i = 0; i < idx; i++) {
        string ch = s[i];
        if (map[ch]) num[i] = map[ch];
        else num[i] = ch[0] - '0';
    }
    for (int i = 0; i < idx; i++) {
        path.push_back(i);
        st[i] = true;
        backtrack(1, num[i]);
        if (flag) break;
        st[i] = false;
        path.pop_back();
    }
    if (flag) {
        for (auto item : savepath) {
            if (item >= 0) cout << s[item];
            else cout << int2op[item];
        }
    }
    else cout << "NONE";
    return 0;
}
```

> [https://www.nowcoder.com/practice/7e124483271e4c979a82eb2956544f9d](https://www.nowcoder.com/practice/7e124483271e4c979a82eb2956544f9d)