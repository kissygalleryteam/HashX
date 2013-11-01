## 综述

HashX是。

* 版本：1.0
* 作者：飞长
* 标签：
* demo：[http://gallery.kissyui.com/HashX/1.0/demo/index.html](http://gallery.kissyui.com/HashX/1.0/demo/index.html)

## 初始化组件

    S.use('gallery/HashX/1.0/index', function (S, HashX) {
         var HashX = new HashX();
         
         //设置hash
         HashX.hash('user', '123456');
         //url: http://taobao.com#user=123456
         
         HashX.hash('user', '333333');
         //url: http://taobao.com#user=333333
         
         HashX.hash('date', '20131101');         
         //url: http://taobao.com#user=333333&date=20131101
         
         HashX.hash('user');
         //echo 333333
         
         HashX.hash('user', null);
         //url: http://taobao.com#date=20131101
         

    })

## API说明

* 设置hash
>	hash('key','val');

* 获取hash
>	hash('key')

* 删除hash
>	hash('key', null)



