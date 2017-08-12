var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

router.get('/api', function *(next) {
    this.body = 'test data'
});

// home - ads 
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
});

// home - recommendations
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    // params
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('current city：' + paramsCity)
    console.log('current page：' + paramsPage)

    this.body = homeListData
});



// start server generate routes 
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(8080);