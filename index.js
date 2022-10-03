var BOB = {
    odCode: '2961234',
    h5Url: 'https://www.p61qb4.com:9960/entry/register?agent_code=2961234',
    pcUrl: 'https://www.on4xgo.com/?agent_code=2961234',
}
var boyu = {
    odCode: '9797176',
    h5Url: 'https://www.boyu382.com:30112/entry/register/?i_code=9797176',
    pcUrl: 'https://www.boyu1065.com:34225/register/?i_code=9797176',
    }

    //域名复制 
    //h5Url: 'https://www.aqjup.com:9960/entry/register?agent_code=2961234',
    //pcUrl: 'https://www.ad1wu.com/entry/register?agent_code=2961234',
var easy_domain = "bob33.org";

    //判断是否是移动设备
var ua = navigator.userAgent;
var UA = {
    Android: function() { //安卓
        return ua.match(/Android/i) ? true : false;
    },
    BlackBerry: function() { //黑莓
        return ua.match(/BlackBerry/i) ? true : false;
    },
    IOS: function() { //IOS
        return ua.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    //这个其实没啥必要了,可以不用判断这个，毕竟IE是一种古老的东西
    Windows: function() {
        return ua.match(/IEMobile/i) ? true : false;
    },
    isMobile: function() { //移动设备
        return UA.Android() || UA.BlackBerry() || UA.IOS() || UA.Windows();
    }
}
function bob_fun() {
    if (UA.isMobile()) {
           window.open(BOB.h5Url, '_blank')
        // window.location.href = BOB.h5Url;
    } else {
        window.open(BOB.pcUrl, '_blank')
        // window.location.href = BOB.pcUrl;
    }
}


function boyu_fun() {
    if (UA.isMobile()) {
        window.open(boyu.h5Url, '_blank')
        // window.location.href = boyu.h5Url;
    } else {
        window.open(boyu.pcUrl, '_blank')
        // window.location.href = boyu.pcUrl;
    }
}
