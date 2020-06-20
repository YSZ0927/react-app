import session1 from '../assets/images/session1.png'
import session2 from '../assets/images/session2.png'
import session3 from '../assets/images/session3.png'
import session4 from '../assets/images/session4.png'
import session5 from '../assets/images/session5.png'
import session6 from '../assets/images/session6.png'
import session7 from '../assets/images/session7.png'
import session8 from '../assets/images/session8.png'
import session9 from '../assets/images/session9.png'
import session10 from '../assets/images/session10.png'
import session11 from '../assets/images/session11.png'
import session12 from '../assets/images/session12.png'
export function getTypeSessionsApi () {
    return [
        {
            url: session1,
            title: '内购会'
        },
        {
            url: session2,
            title: '国际馆'
        },
        {
            url: session3,
            title: '每日上新'
        },
        {
            url: session4,
            title: '服饰箱包'
        },
        {
            url: session5,
            title: '环球美食'
        },
        {
            url: session6,
            title: '个人护理'
        },
        {
            url: session7,
            title: '数码家电'
        },
        {
            url: session8,
            title: '国际轻奢'
        },
        {
            url: session9,
            title: '我的专柜'
        },
        {
            url: session10,
            title: '商旅'
        },
        {
            url: session11,
            title: '今日清仓'
        },
        {
            url: session12,
            title: '美妆护肤'
        },
        {
            url: session4,
            title: '居家百货'
        },
        {
            url: session5,
            title: '母婴儿童'
        },
    ]
}

export function getBannerApi () {
    return [
        'http://mpic.tiankong.com/930/854/93085409058bd7eb20a44fecd38c95ed/640.jpg@!240h',
        'http://pic.qjimage.com/ph117/high/ph7664-p00279.jpg',
        'http://mpic.tiankong.com/2a5/717/2a5717b2ef6bc5100ac48c309ba0ee03/640.jpg@!240h',
        'http://mpic.tiankong.com/91c/b21/91cb21c4adaa51447ce91f30fe3f4824/640.jpg@!240h'
    ]
}

export function getGoodsListApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                isLastPage: false,
                list: [
                    {
                        appPrice: 29.9,
                        brandName: "THE SAEM/得鲜",
                        countryBrandName: "韩国品牌",
                        countryIcon: "https://image.sudian178.com/sd/goodsCountryImg/8607370908661994.png",
                        description: "补水保湿",
                        goodsId: "258123870107992",
                        goodsName: "THE SAEM/得鲜 济州岛鲜鲜芦荟胶 300ML",
                        goodAction: 0,
                        imgUrl: "https://image.sudian178.com/sd/middleImg/20190708181440288.jpg",
                        marketPrice: 59,
                    },
                    {
                        appPrice: 29.9,
                        brandName: "ESTEE LAUDER/雅诗兰黛",
                        countryBrandName: "韩国品牌",
                        countryIcon: "https://image.sudian178.com/sd/goodsCountryImg/8607370908661994.png",
                        description: "补水保湿",
                        goodsId: "258123870107992",
                        goodsName: "ESTEE LAUDER/雅诗兰黛 小棕瓶抗蓝光眼霜 15ML",
                        goodAction: 1,
                        imgUrl: "https://image.sudian178.com/sd/goodsImg/23374642490973621.jpg",
                        marketPrice: 59,
                    },
                    {
                        appPrice: 29.9,
                        brandName: "超级玛丽",
                        countryBrandName: "韩国品牌",
                        countryIcon: "https://image.sudian178.com/sd/goodsCountryImg/8607370908661994.png",
                        description: "补水保湿",
                        goodsId: "258123870107992",
                        goodsName: "【多规格】超级玛丽 广西北海红树林红心流油海鸭蛋真空包装 20枚",
                        goodAction: 3,
                        imgUrl: "https://image.sudian178.com/sd/goodsRealImg/20191105104721394824.jpg",
                        marketPrice: 59,
                    },
                    {
                        appPrice: 29.9,
                        brandName: "金雅涵",
                        countryBrandName: "韩国品牌",
                        countryIcon: "https://image.sudian178.com/sd/goodsCountryImg/8607370908661994.png",
                        description: "补水保湿",
                        goodsId: "258123870107992",
                        goodsName: "金雅涵  超声波万能驱蚊器家用室内多功能智能电子驱虫苍蝇老鼠灭蚊器神器",
                        goodAction: 2,
                        imgUrl: "https://image.sudian178.com/sd/middleImg/20190605103643000.jpg",
                        marketPrice: 59,
                    }
                ]
            }) 
        },100)
    })
    
}