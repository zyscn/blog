# JavaScript字符串String提取方法比较

# JavaScript: Slice, Substring, or Substr的选择！

## 在JavaScript中，子字符串主要通过以下String方法之一提取：

```js
// slice 
// syntax: string.slice(start [, stop])
"Good news, everyone!".slice(5,9); 
// 'news'

// substring 
// syntax: string.substring(start [, stop])
"Good news, everyone!".substring(5,9); 
// 'news'

// substr
// syntax: string.substr(start [, length])
"Good news, everyone!".substr(5,4); 
// 'news'
```

## 这三种方法都采用了开始索引和可选的结束索引（或长度）参数，但它们在某些重要方面有所不同：

- substr可以给出不一致的结果。现代浏览器允许使用负数索引，但IE8和更低版本将负开始索引视为0。

- substring的参数是可逆的，因为它总是使用其最小参数值作为开始索引，最大值作为结束索引。substring将负开始索引视为0。

- slice如果开始索引为负，则从字符串末尾开始切片。

## 负数作为参数

```js
"Good news, everyone!".substring(-4);
// "Good news, everyone!"

"Good news, everyone!".substr(-4);
// "one!" modern browsers, including IE9
// "Good news, everyone!" IE8 and lower

"Good news, everyone!".slice(-4); 
// "one!"
```

由于所有三种方法都具有大致相同的性能，我的偏好是使用slice。它支持从字符串的末尾提取，我觉得在start index> stop 时返回一个空字符串更遵循常人思维，比substring的参数交换更好。我避免使用substr，因为浏览器不一致。

