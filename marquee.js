/**
 * Created by Alisdon on 2018/1/10.
 */
window.onload = function () {
    var demo = document.getElementById('marqueeContainer')
    var demo1 = demo.children[0]
    var speed = 5   // 移动速度，值越大越慢，可修改控制
    var elementNum = 2   //默认需要两个元素叠加，不可修改

    /**
     * 复制一个与滚动元素一样内容的容器
     * @type {Element}
     */
    var demo2 = demo1.cloneNode(true)
    demo.appendChild(demo2)

    /**
     * 判断滚动内容是否占满容器
     */
    while ((demo1.offsetHeight * elementNum) / (2 * demo.offsetHeight) < 1) {
        demo.appendChild(demo1.cloneNode(true))

        elementNum++
    }

    /**
     * 滚动效果
     * @constructor
     */
    function Marquee() {
        if (demo1.offsetHeight > demo.offsetHeight &&
             demo.scrollTop + demo.offsetHeight == demo1.offsetHeight + demo2.offsetHeight) {
             demo.scrollTop = 0
         } else if (demo2.offsetTop - demo.scrollTop <= 0) {
             demo.scrollTop -= demo1.offsetHeight
         } else {
             demo.scrollTop++
         }
    }

    /**
     * 设置定时器与鼠标移入移出事件
     * @type {number}
     */
    var MyMar = setInterval(Marquee, speed * 10)
    demo.onmouseover = function () {
        clearInterval(MyMar)
    }
    demo.onmouseout = function () {
        MyMar = setInterval(Marquee, speed * 10)
    }
}