const CUSTOMER_SITES = {
    modu: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    }
    feifan: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: "http://ffzy5.tv",
    }
     didi: {
        api: 'https://api.ddapi.cc/api.php/provide/vod/?ac=list',
        name: '滴滴资源站',
    }
  };

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
