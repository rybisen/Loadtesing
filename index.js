const loadtest = require('loadtest');
// const autocannon = require('autocannon')

// autocannon({
//     //url: 'https://ltitool.azurewebsites.net/api/PublishContentPublicExport/publishContentPublicExports/cjznwileu13450a99vik7qkls',
//     url: 'https://moeltitool.semanoor.com/api/PublishContentPublicExport/publishContentPublicExports/cjznwileu13450a99vik7qkls',
//     connections: 200,
//     pipelining: 1,
//     duration: 5,
//     workers: 1
// }, console.log)

// var PublishIds = ["cjvdlm42e4qny0a18fttab8gk", "cjvdlkc1r4qkt0a182zvbnjsb", "cjznwileu13450a99vik7qkls", "ck85hnlkr1xuz0a76iyis891i",
//     "ckwt4zvhn11l40860l25q9u98", "ck0f2kicmd77z0a9938ng3pnd"]

var PublishIds = ["cjznwileu13450a99vik7qkls",
    "ckjtwlwgjoc5u0860x6mazedm",
    "cjvdlkc1r4qkt0a182zvbnjsb",
    "ck0f2kicmd77z0a9938ng3pnd",
    "ckwt4zvhn11l40860l25q9u98",
    "cksa8tmce7tx90860xkewl0sa",
    "ckwt327w40zxr0860omqd3a7x",
    "ckwt83a7t14qe086069mgm41h",
    "ckscuixgq0b2m08605v8j1rar",
    "ckwt6ows913at08603wisy0rv",
    "cksa89kdv7sl40860y4nqy995",
    "ckwt9ukl316qm08606h6cfvxy",
    "cksa8pf8h7ton086034bwum7i",
    "ck85hnlkr1xuz0a76iyis891i",
    "cjvdlm42e4qny0a18fttab8gk",
    "cksa8ld9p7tfw0860tcc3frp2",
    "cksd0r6el0eui0860a09sw4sq",
    "ckwtasj9d18550860287sdryl",
    "ckwub2c8n21nk0860zmudlezy",
    "ckscw7j530bwp0860nk56nogx",
    "ckscyet0o0dat0860ggyqfuy4",
    "cksd0l3qd0eqy08605zlsqfs2",
    "cksd19co00f7q0860dpzwpko4",
    "ckwuh4owy2jrn0860n07dlyzb",
    "ckwuf28sj2dr00860i3hvztjb",
    "ckwueqae42d3208603dga4gau",
    "cksd1lqfe0ffq0860y1gwg9gf",
    "ckshgxvtg2rlv0860ukl9uuks",
    "ckwtbcs3s18o10860gce5a71d",
    "ckwtbtqb119780860w44gx5tx",
    "ckwuaysbq21ed0860jx9ljebi",
    "cjzjmp6fy1fb40a21ahgr91g1",
    "ckscyr88x0djk0860a42lv9ef",
    "cksczsp1f0e6r0860ks5r3o1c",
    "cksemtgp51ahj0860fvkhq70z",
    "cksd1bmt70f910860x94bztzg",
    "ckwugsvjl2izw0860lj26eq4j",
    "cksemuwjr1aku0860bqgkxgan",
    "cjvdlnmnd4qoz0a187bykgrmd",
    "ckwudoozd2b880860shvezaox",
    "ckwugoddr2iod086078oxhq2j",
    "ckwtcb4gs19mr0860gidaz1hl",
    "ckwt9lk2816er0860pnc0n1t9",
    "cksa81dvq7s3j0860zzj1w77v",
    "cksn55ozw4hdc08605x1nbo88",
    "cksd0ygq30f1t0860ndbrv7yy",
    "cksn539yd4hcf08602jh6xx9p",
    "ckscvu25v0bsb0860knes2h5v",
    "cksa88wjz7sjf0860ugpnhvxe",
    "cksemuwja1ak108604cgorty4",
    "ckwufktu82fhf0860ah7p27u9",
    "ckwt8i90v15am0860fwhj6mrw",
    "ckwt7tg4b14jo0860szzggaml",
    "ckshkt1j52vaz0860ea2ly77j",
    "cksa8b2yw7sno0860d8lllpqd",
    "ck0dlrz7dbww60a99n9tefsu7",
    "ckwtaldj117yd0860w9ks9ldk",
    "ckscvdazq0blm0860r5mifjat",
    "ckscwiklz0c7b086017li1d0p",
    "cksd1g0ls0fc10860nzjt7ovm",
    "cksemv2ms1alz0860e3phf0se",
    "ckwoy46r9zmbz0860qocegswe",
    "ckwtb2a8318cx0860z2qu36mk",
    "ckwugd6mf2hvi0860av7d21n5",
    "cksn5f9384hf90860lx8sskq9",
    "ckshkyh6q2vgv08603joh9uar",
    "ckshl03dw2vix0860li6sm5vp",
    "cksn4neqi4gcq0860wdyitg0e",
    "cksn4pxp64gew086050dzr8wd",
    "ckwt8ly4415ce08608odv2238",
    "cksn5d2xe4he90860o9judl1d",
    "cksn4xk794h9u0860pzksmmvp",
    "ckshkuh1t2vcr0860er5rqqxw",
    "cksd16zwr0f6n08608id2ycn1",
    "ck1jd8m4lwyz60a998xng3pc8",
    "ckwug5jh52h4w086076o7pmri",
    "ckwuemwet2cyk08606ix8zrak",
    "cksa8mdd07th40860jzipt399",
    "cksa8l95y7tf00860z1tkjzov",
    "cksa8sryn7tvu0860evhp9yap",
    "cksemstek1acc08607ig6y3mb",
    "ckwtc0dr619di0860dpsyn4eq",
    "ckwubaf2a22tp0860izjt2hzd",
    "ckwufx9072gi20860qajpmehr",
    "ckwt7olvt14cb0860fsnzi4eh",
    "ckwtb9p3t18jn0860ogc2b0ee",
    "cky9xvs6f66hb0860c7wua8x9",
    "cksn1w59n4ecs0860t8prm015",
    "cksczny0m0e2u08605bnwrj0s",
    "cksmubigg4arl0860ly1qrfnp",
    "cksg1ug9a22ue0860cjrextxl",
    "cksemsyik1adp0860e30no5yo",
    "cksd0h6wy0emu0860o6t8arz2",
    "cksd0vsoj0exy0860djyqdyoi",
    "ckwt6wszl13iy0860i5ws1yoq",
    "ckwt9a910162a08603c3mqh13",
    "ckwuaw76d219d0860q6o23vbm",
    "ckwt6t1nl13ep08600aw2oazo",
    "ckwt6f0c512zz0860m2ea5rix",
    "ckscxh8k00coz0860ujz0vmjz",
    "cksg2044f23m00860bb5w9o01",
    "cksn4u8u44gka08609whpqru8",
    "cksa8fpot7sxf0860886289yh",
    "ckwtaixbz17ve0860sp7r3vtt",
    "cksa8har17t2q0860n7406why",
    "cksa8p7oz7tnr0860ss61whts",
    "ckwt4mclk115n0860958cw0yq",
    "ckwt5q55v12gx0860hl2y9p0w",
    "ckscwbgpz0bzp086015hi97gm",
    "cksa8cvoz7srx0860g1isijze",
    "cksa8576w7sa408600wf4ewjx",
    "ckwta1pev16yh0860uwfny4qi",
    "ckwtaxxst18990860wr27o8zc",
    "ckwt8g3xk157f08606lgin033",
    "ckscvowu20bqo0860bwaoyf3k",
    "ckwt5v2ac12kk0860msyttpyi",
    "ckwt3ytsf10kk086005lvur9x",
    "ckwsvnb7g0ri8086050cznygh",
    "ckwszv1uo0wec0860303r3643",
    "ckvi5ngclpcly0860qaijm42f",
    "cksa8pkz97tpj08608ump9z5u",
    "cksa7m3de7rne0860r2a2i74b",
    "ckgg9ihqgr8nz0860ujn28whf",
    "cky9xu4gj66fg0860dl0kilx6",
    "ckwuf5yfx2e0e08604745raqn",
    "ck3focvqaut6t0a994wa5muhd",
    "cksczqiwi0e5708601wpi9v8i",
    "ckshkvvgw2vds08609c5idl64",
    "ckwsu6xzo0o4h0860tfpu7dno",
    "ckwsv8qgf0qlv08601t91ljjr",
    "cksa8ellg7sv10860b2qvs9d7",
    "ckvdqrns6hzlm08602bux8sjb",
    "ckwtc62v819hf0860fqk44ywd",
    "ckwug248h2gwa0860h9iyoucw",
    "cl10luho63195086063bwoq9a",
    "ckvdqk6d2hz9o0860rsbka0x2",
    "cksg22r6223ow0860erbitogs",
    "cjlno0b7h2b4w0a22eiictopn",
    "ck0mi586tgn6g0a991br3udul",
    "ckvi1j9ltoxzq0860bekvx6lx",
    "cl1bul7ywcb4z0860uk754g1a"]

var PublicLinkPublishIds = ["cjko9oiw207hk0a3855z93y33", "cjyo1x6zp0h4j0a92jet24w2z", "cjyo130f10ffh0a92x8yinipu", "cjyo2wryi0i4v0a924ibtp0jn",
    "cjyo4kbqj0li40a92pxh7scwj", "cjyo4n1cf0liz0a923zhach7q", "cjyo5lcw80m6o0a92av9c2egg", "cjyo3etub0kht0a92yk3cu8il"]

var bookPublishId = [
    "cl5xkq0xxxg8y0860jxc087q7",
    "cl5xlflb5xgc40860bkojb61w",
    "cl5xmd3fexge508608zksc39n",
    "cl5xmmndkxgfo08607plbqurr",
    "cl5xmt790xggy0860ffi7o2mu",
    "cl5xkyu60xga10860fdznsbjs",
    "cl5xkt067xg9d08609wm77snv",
    "cl5xmaffhxgdt0860ysvn3j3c",
    "cl5xl5qr4xgad08605l4lewdb",
    "cl5xmfzs9xgex0860pf57hoce",
    "cl5xl7wmdxgb90860rg4ru0rz",
    "cl5xmf47yxgel0860j51i0v64",
    "cl6aoqaf0028j0860ungw0ck0",
    "cl6aorj1y029t0860lya7ryv1",
    "cl5xlw94zxgcz0860hddpmz0p",
    "cl5xm5ue0xgdb08605ncq09vw",
    "cl5xkx31vxg9p0860kgonttb7",
    "cl5xmqocqxgg208602a6s35qx",
    "cl6aott6u02d50860nlbaqrng",
    "cl5xmkmy6xgfc0860ewc4hixt",
    "cl5xld0jyxgbs0860uaxhxvsf",
    "cl5xmvgeyxgha0860c1aad3rb",
    "cknct1zziwn4d08609akc1dar",
    "ckxzzu1sqfvem0860mzf0c8k5",
    "cklowez16tw980860o2jexg6d",
    "ckljcu2j7ngz508601eus6as6",
    "ckljcs8lengw908602fmiqxzs",
    "ckljcq0kwngp30860k9lvczvr",
    "ckljcn6aangiw08605ksfau1o",
]

function statusCallback(error, result, latency) {
    // console.log(result);
    // console.log('Current latency %j, result %j, error %j', latency, result, error);
    console.log('Current latency %j ', latency);
    console.log('\nerror %j ', error);
    // console.log('Request elapsed milliseconds: ', result.requestElapsed);
    // console.log('Request index: ', result.requestIndex);
    // console.log('Request loadtest() instance index: ', result.instanceIndex);
}

var options = {};
var pubId = bookPublishId[0];
//for (let index = 0; index <= 10; index++) {
//pubId = PublicLinkPublishIds[Math.floor(Math.random() * PublicLinkPublishIds.length)];
//console.log("Index started :=> ", pubId)
options = {
    //url: 'https://ltit.semanoor.com/api/PublicLink/publicLinks/' + pubId + '',
    //url: 'https://ltit.semanoor.com/api/PublishContentPublicExport/publishContentPublicExports/' + pubId + '',
    url: 'https://moeltitool.semanoor.com',
    concurrency: 1,
    method: 'GET',
    requestsPerSecond:100,
    //timelimit:20,
    maxSeconds: 60,
    //maxRequests: 10000,
    statusCallback: statusCallback,
    requestGenerator: (params, options, client, callback) => {
        //pubId = PublishIds[Math.floor(Math.random() * PublishIds.length)];
        pubId = bookPublishId[Math.floor(Math.random() * bookPublishId.length)];
        console.log("PublishId => ", pubId)
        options.headers['token'] = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYW1pbHlfbmFtZSI6IldpZ2xleSIsImlzcyI6IjMzMTA4OTIzMTJiNTA3ZWUiLCJzdWIiOiIzMzEwODkyMzEyYjUwN2VlIiwiYXVkIjoiaHR0cHM6Ly9sdGlwLnNlbWFub29yLmNvbS9jb25uZWN0L3Rva2VuIiwiaWF0IjoiMTY3NTMyMzI3MiIsIm5iZiI6IjE2NzUzMjMyNjciLCJleHAiOiIxNjc3OTE1MjcyIiwianRpIjoiaG9BYjZZQTNuUXRZcWYzVHZFQUF0SzJ4anMxSVdrZURCRVlQL0Y3REhDOD0ifQ.foFu5tI4na-Acb1dYhtQI6TCxO6IZh_PqMmBOmG3wVHjE0MMTkJBD-weavhKBXkKIBISo51WuCk4TiwrC6OfHqIPKfdtFupM3yXkRb3ukorj8F-w_jlG0uidQFIMNKpTlw1xA-EKY8NEJ7kKyYt2yrIcrRn8N1O1_mm5Gm6IrjKSXe4yxpWtdh7pa-j2zJ46QKXaxQD9uJpWkbCHLHc_Hzsvki4js3DcpG7uXKwlKTdxFd2q_AB_K37bCXydnzzTk-Q4-ZjJTiqsIX7gBemzCKqv6dbnu02XwND2xPyF_9zVjVxOt5t9mHlDlKqvcYLaWNTrxKsD0N2PtkcEePn4IA';
        //options.path = '/api/PublishContentPublicExport/publishContentPublicExports/' + pubId + '';
        options.path = '/api/Content/publishContent/' + pubId + '';
        options.headers['Content-Type'] = 'application/json';
        const request = client(options, callback);
        return request;
    }
};

loadtest.loadTest(options, (error, gLatency) => {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    //console.log(gLatency);
    console.info("\n=========================================================================================================\n")
    console.info("Total Requests :", gLatency.totalRequests);
    //console.info("Total Requests :", gLatency.);
    console.info("Total Failures :", gLatency.totalErrors);
    console.info("Requests Per Second :", gLatency.rps);
    console.info("Requests Per Hour :", (gLatency.rps * 3600));
    console.info("Average Request Time(Mills) :", gLatency.meanLatencyMs);
    console.info("Minimum Request Time(Mills) :", gLatency.minLatencyMs);
    console.info("Maximum Request Time(Mills) :", gLatency.maxLatencyMs);
    console.info("Percentiles :", gLatency.percentiles)
    console.info("\n=========================================================================================================\n")

    console.log('Tests run successfully');
});
//}