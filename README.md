# chatRoom
聊天室功能


代码下载到本地，解压，当前目录cmd 安装所需插件
npm install 

安装好直接启动即可
npm start

浏览器输入 http://localhost:3000/
可以多个标签打开，看每个用户进入的情况


1、WebSocket是什么？

WebScoket是一种让客户端和服务器之间能进行双向实时通信的技术。它是HTML5的一个协议规范，本质上是个基于TCP的协议，它通过HTTP/HTTPS协议发送一条特殊的请求进行握手后创建了一个TCP连接，此后浏览器/客户端和服务器之间便可以通过此连接来进行双向实时通信。

2、为什么要用WebSocket？

1）一直以来，HTTP协议是无状态、单向通信的，即客户端请求一次，服务器回复一次。如果想让服务器消息及时下发到客户端，需要采用类似于轮询的机制，即客户端定时频繁的向服务器发出请求，这样效率很低，而且HTTP数据包头本身的字节量较大，浪费了大量带宽和服务器资源；

2）为提高效率，出现了AJAX/Comet技术，它实现了双向通信且节省了一定带宽，但仍然需要发出请求，本质上仍然是轮询；

3）新一代HTML标准HTML5推出了WebSocket技术，它使客户端和服务器之间能通过HTTP协议建立TCP连接，之后便可以随时随地进行双向通信，且交换的数据包头信息量很小；

3、如何使用WebSocket？

在支持WebSocket的浏览器中，创建Socket之后，通过onopen、onmessage、onclose、onerror四个事件的实现来处理Socket的响应；

4、WebSocket与HTTP、TCP的关系

WebSocket和HTTP都属于应用层协议，且都是基于TCP的，它们的send函数最终也是通过TCP系统接口来做数据传输。那么WebSocket和HTTP的关系呢？WebSocket在建立握手连接时，数据是通过HTTP协议传输的，但是在连接建立后，真正的数据传输阶段则不需要HTTP协议的参与。它们之间的关系如下图：

5、什么情况下使用WebSocket？

如果游戏需要同时支持手机端、Web端，那毫无疑问应该使用WebSocket，现在各个平台都提供了相应的WebSocket实现。如果游戏不需要支持Web端，且对实时性要求比较高，如多人射击、MMORPG之类，那么使用TCP/UDP结合的原生Socket会比较好。

6、SocketIO

WebSocket是HTML5最新提出的规范，虽然主流浏览器都已经支持，但仍然可能有不兼容的情况，为了兼容所有浏览器，给程序员提供一致的编程体验，SocketIO将WebSocket、AJAX和其它的通信方式全部封装成了统一的通信接口，也就是说，我们在使用SocketIO时，不用担心兼容问题，底层会自动选用最佳的通信方式。因此说，WebSocket是SocketIO的一个子集。

 
