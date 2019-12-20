const AXIOS = require("axios")
const axios = AXIOS.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        common: {

        }
    }
});
module.exports = async function getAppRoutes() {
    var data = [{
            url: "/",
            changefreq: "daily",
            priority: 1,
            lastmodISO: new Date()
        },
        {
            url: "/about/me",
            changefreq: "monthly",
            priority: .5,
            lastmodISO: new Date()
        },
        {
            url: "/404",
            changefreq: "never",
            priority: .2,
            lastmodISO: "2019-12-12 00:00:00"
        },
        {
            url: "/about/affilate",
            changefreq: "monthly",
            priority: .6,
            lastmodISO: new Date()
        },
        {
            url: "/about/privacy-notice",
            changefreq: "monthly",
            priority: .4,
            lastmodISO: "2019-12-12 00:00:00"
        },
        {
            url: "/about/terms-of-use",
            changefreq: "monthly",
            priority: .4,
            lastmodISO: "2019-12-12 00:00:00"
        },

    ]

    let res = await axios.get("/sitemap")
    res = res.data

    res.posts.forEach(function(item) {
        let time = ''
        if (item.updated_at != undefined) {
            time = new Date(item.updated_at)
        } else {
            time = new Date(item.created_at)
        }
        data.push({
            url: "/article/" + item.url,
            changefreq: "weekly",
            priority: .9,
            lastmodISO: time
        })
    })
    res.parent.forEach(function(item) {
        let time = ''
        if (item.updated_at != undefined) {
            time = new Date(item.updated_at)
        } else {
            time = new Date(item.created_at)
        }
        data.push({
            url: "/" + item.url,
            changefreq: "weekly",
            priority: .8,
            lastmodISO: time
        })
    })
    res.categories.forEach(function(items) {
        var data1 = data
        items.child.forEach(function(item) {
            let time = ''
            if (item.updated_at != undefined) {
                time = new Date(item.updated_at)
            } else {
                time = new Date(item.created_at)
            }
            data.push({
                url: "/" + items.parent.url + "?child=" + item.url,
                changefreq: "weekly",
                priority: .8,
                lastmodISO: time
            })
        })
    })

    return data
}