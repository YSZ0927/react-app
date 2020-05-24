export function getTypeSessionsApi () {
    return [
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23361024363310986.png',
            title: '内购会'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23360930389063061.png',
            title: '国际馆'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23904556792133230.png',
            title: '每日上新'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23360815090542198.png',

            title: '服饰箱包'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23360439484563961.png',
            title: '环球美食'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23360826072722145.png',
            title: '个人护理'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/22520808698990043.png',
            title: '数码家电'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23361426128292862.png',
            title: '国际轻奢'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23902488259884341.png',
            title: '我的专柜'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23360974672549351.png',
            title: '商旅'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23361395525286885.png',
            title: '今日清仓'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23360432755853149.png',
            title: '美妆护肤'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23361279887702594.png',
            title: '居家百货'
        },
        {
            url: 'https://image.sudian178.com/sd/linkDataImg/23361410841820580.png',
            title: '母婴儿童'
        },
    ]
}

export function getBannerApi () {
    return [
        'https://image.sudian178.com/sd/themeImg/23563959242835813.jpg',
        'https://image.sudian178.com/sd/themeImg/23272799654634282.jpg',
        'https://image.sudian178.com/sd/themeImg/23216808188207786.jpg',
        'https://image.sudian178.com/sd/themeImg/23561250090602203.jpg'
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