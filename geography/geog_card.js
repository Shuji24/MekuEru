const words = [
    {
        category: "地図",
        category_eng: "map",
        desc: "角度を正しく表現した地図投影法",
        hintImage: "images/mercator.png",
        hintText: "",
        answer: "メルカトル図法"
    },
    {
        category: "地図",
        category_eng: "map",
        desc: "面積を正しく表現した地図投影法",
        hintImage: "images/mollweide.png",
        hintText: "",
        answer: "モルワイデ図法"
    },
    {
        category: "地図",
        category_eng: "map",
        desc: "距離・方位を正しく表現した地図投影法",
        hintImage: "images/azimuthal equidistant.png",
        hintText: "",
        answer: "正距方位図法"
    },
// 1②の右側(バビロニアの世界地図とか)やってない
    {
        category: "地図",
        category_eng: "map",
        desc: "孝徳天皇が、国郡の境界の確定を命じたのは何の時？",
        hintImage: "",
        hintText: "646年",
        answer: "大化の改新"
    },
    {
        category: "地図",
        category_eng: "map",
        desc: "東大寺の建設に尽力した行基が作成した地図",
        hintImage: "images/gyouki.jpg",
        hintText: "江戸期まで全国地図の範とされた地図",
        answer: "行基図"
    },
    {
        category: "地図",
        category_eng: "map",
        desc: "17世紀末に活躍した浮世絵師の石川流宣が作成した地図",
        hintImage: "images/ryuusenzu.png",
        hintText: "色彩豊か、各国の記事内容も豊かで民間に広く流布した地図",
        answer: "流宣図"
    },
    {
        category: "地図",
        category_eng: "map",
        desc: "長久保赤水が作成した地図",
        hintImage: "images/sekisuizu.png",
        hintText: "日本地図として初めて経緯線が入った地図",
        answer: "改正日本輿地路程全図"
    },

    {
        category: "大地形",
        category_eng: "l_terrain",
        desc: "",
        hintImage: "",
        hintText: "",
        answer: ""
    },
    
    {
        category: "小地形",
        category_eng: "s_terrain",
        desc: "",
        hintImage: "",
        hintText: "",
        answer: ""
    },

    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "熱・光・動力などの源になるエネルギー供給する資源",
        hintImage: "",
        hintText: "",
        answer: "エネルギー資源"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "天然のままの物質を形を変えずに利用するエネルギー資源",
        hintImage: "images/p_energy.jpg",
        hintText: "薪・石炭・石油",
        answer: "一次エネルギー"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "一次エネルギーを加工して扱いやすくしたエネルギー資源",
        hintImage: "",
        hintText: "木炭・電力",
        answer: "ニ次エネルギー"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "生物の遺骸が長い時間をかけて変成してできたエネルギー源",
        hintImage: "",
        hintText: "",
        answer: "化石燃料"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "太古の植物の遺骸が体積・埋没し、変成して可燃性の固体になった化石燃料",
        hintImage: "images/coal.jpg",
        hintText: "",
        answer: "石炭"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "太古の動植物の遺骸が体積・埋没し、変成して可燃性の液体になった化石燃料",
        hintImage: "",
        hintText: "",
        answer: "石油"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "石炭の近くで多く産出する、可燃性の気体の化石燃料",
        hintImage: "",
        hintText: "",
        answer: "天然ガス"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "利用するエネルギー源の、需要上の大きな変革",
        hintImage: "images/energy_rev.gif",
        hintText: "1960年代：石炭 → 石油・天然ガス",
        answer: "エネルギー革命"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "エネルギー革命の原因は？",
        hintImage: "images/tram.gif",
        hintText: "路面電車→○○<br>○○の増加",
        answer: "車や飛行機の増加による石油利用料の増加"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "自然現象を利用したエネルギー",
        hintImage: "",
        hintText: "主に電力源として利用されるエネルギー",
        answer: "自然エネルギー(再生利用エネルギー)"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "水の落下エネルギーによってタービンを回転させる発電方法",
        hintImage: "images/water.jpg",
        hintText: "",
        answer: "水力発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "太陽電池を用い、太陽エネルギーから発電する方法",
        hintImage: "images/solar.jpg",
        hintText: "",
        answer: "太陽光発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "風の力で風車を回転させる発電方法",
        hintImage: "images/wind.jg",
        hintText: "",
        answer: "風力発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "地下の熱水から得た水蒸気でタービンを回転させる発電方法",
        hintImage: "images/geothermal.jpg",
        hintText: "",
        answer: "地熱発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "地熱発電の環境問題に関する問題点は？",
        hintImage: "images/geothermal.jpg",
        hintText: "地熱発電の適地 ≒ 国立公園",
        answer: "地熱発電は火山の近くに多く、国立公園とかぶることが多いため、森林伐採などの制限を受けることが多い。"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "生物資源を燃料とした発電方法",
        hintImage: "images/biomass.jpg",
        hintText: "",
        answer: "バイオマス発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        desc: "人為的に制御した核分裂反応の熱で発生する水蒸気でタービンを回転させる発電方法",
        hintImage: "images/nuclear.jpg",
        hintText: "",
        answer: "原子力発電"
    },
];