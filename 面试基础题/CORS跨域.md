# 两种请求
浏览器将CORS请求分为两类： 简单请求(simple request)和非简单请求（not-simple-request）

只要同时满足以下两大条件，就属于简单请求
1. 请求方法是 HEAD、PUT、POST
2. HTTP的头信息不超过以下几种字段：
  Accept
  Accept-Language
  Content-Language
  Last-Event-ID
  Content-Type：只限于application/x-www-form-urlencoded、multipart/form-data、text/plain


# 简单请求

## 基本流程
对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，曾加一个Origin字段

```http

GET /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...

```

上面的头信息中，Origin字段是用来说明，本次请求来自哪个源（协议+域名+端口）。服务器根据这个值，决定是否同意这次请求

如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应，浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为HTTP回应的状态码可能是200

如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段

```http

Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Header: FoorBar
Content-Type: text/html; charset=utf-8

```

1. Access-Control-Allow-Origin
该字段是必须的，它的值要么是请求Origin字段的值，要么是一个*，表示接收任意域名的请求

2. Access-Control-Allow-Credentials
该字段可选，它是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器，这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可



## withCredentials属性
上面说到，CORS请求默认不发送Cookie和Http认证信息。如果要把Cookie发送到服务器，一方面要服务器同意，指定Access-Control-Allow-Credentials字段

另一方面开发者必须在Ajax请求中打开withCredentials属性

var xhr = new XMLHttpRequest()
xhr.withCredentials = true

否则，即使服务器同意发送Cookie，浏览器也不会发送。或者，服务器要求设置Cookie，浏览器也不会处理

# 非简单请求

## 预检请求
非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json

非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为‘预检’请求(preflight)

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用那些HTTP动词和头信息字段。只要得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就会报错


```http

var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();

```

上面代码中，HTTP请求的方法是PUT。并且发送一个自定义信息X-Custom-Header
浏览器发现，这个是一个非简单请求，就自动发送一个预检请求，要求服务器确认可以这样请求，下面是这个预检请求的HTTP头信息

```http

OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...

```

预检请求用的请求方法是OPTION，表示这个请求是用来询问的。头信息里面，关键字是Origin，表示请求来自哪个源

除了Origin字段，预检的请求的头信息包括了两个特殊字段

1. Access-Control-Request-Method
该字段是必须的，用来列出浏览其的CORS请求会用到那些HTTP方法，上例是PUT

2. Access-Control-Request-Headers
该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息，上例是X-Custom-Header

## 预检请求的回应

服务器收到‘预检’请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers，确认允许跨域请求，就可以作出回应


```http

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

```

上面的HTTP回应中，关键的是Access-Control-Allow-Origin字段，表示http://api.bob.com可以请求数据。该字段也可以设为星号，表示同意任意跨源请求

如果服务器否定了‘预检’请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。这时，浏览器会认定，服务器不同意预检请求，因此触发一个错误，被XMLHttpRequest对象的onerror回调函数捕获。控制台会打印如下报错信息

XMLHttpRequest cannot load http://api.alice.com.
Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.

