import Image from "next/image";

export type CompanyAboutLocale = "zh-CN" | "zh-TW" | "en";

const content = {
  "zh-CN": {
    lang: "zh-CN", brandSub: "中国定制旅行服务", nav: ["我们的服务", "定制路线", "文化体验", "关于我们", "联系我们"],
    label: "ABOUT YUJUNYOU", title: "关于与君游", lead: "从厦门出发，以福建在地经验为优势，为来自不同国家和地区的旅行者规划中国定制行程。",
    facts: [["公司名称", "与君游（厦门）国际旅游有限公司"], ["所在地", "中国福建・厦门"], ["服务范围", "福建在地优势・全国定制旅行"], ["网站用途", "行程咨询・暂不提供在线支付"]],
    profileLabel: "认识与君游", profileTitle: "与君游（厦门）国际旅游有限公司", profileLead: "以福建在地优势为起点，提供覆盖全国的中国定制旅行服务。", profileBody: ["与君游是一家位于厦门的国际旅游公司，面向东南亚华人、台湾及国际游客提供中国旅行咨询与定制服务。我们熟悉厦门、泉州、漳州、福州、平潭及福建土楼等目的地，也可根据客人的出行计划，协助安排福建以外的中国城市与跨城市行程。", "我们的行程适合家庭亲子、亲友小团、长辈慢游及第一次来到中国的旅客。规划前会先了解出行日期、人数、兴趣、预算、体力与饮食习惯，再结合交通时间和当地实际条件，设计更符合同行成员节奏的路线，而不是直接套用固定团模板。", "服务可涵盖路线规划、酒店建议、包车与接送、当地用车、地陪导游及文化体验等内容。路线、住宿、车辆与当地服务尽量由同一个窗口协调，让客人在出发前清楚知道如何衔接，也方便旅途中有变化时及时沟通。", "我们重视纯粹、自在的旅行体验，不会把未经确认的购物安排默认加入行程。网站主要用于了解需求和建立联系，暂不提供在线支付；最终服务内容、可选项目与费用，会在双方确认方案后安排。"], profilePoints: ["福建在地经验", "全国定制旅行", "华语与英语沟通"], nameLabel: "名字里的旅行观", nameTitle: "与君同行，游有所感。", nameIntro: "“与君游”不是一句距离感很远的口号，而是我们希望建立的旅行关系：有人认真听你想去哪里，也有人把沿途的衔接和细节照顾好。", nameIdeas: [["与", "代表同行与协作。路线不是单方面安排，而是在沟通中一起完成。"], ["君", "代表对每一位旅行者的尊重。家庭、长辈、孩子与朋友，都应有适合自己的节奏。"], ["游", "代表自在地走近一座城市。除了看风景，也理解地方文化、生活与人与人之间的故事。"]], addressLabel: "公司地址", address: "厦门市集美区杏林湾路474号2606单元", galleryLabel: "授权旅行记录", galleryCaption: "真实的同行与真实的旅程，比任何宣传话术更能说明我们重视的旅行方式。",
    essenceTitle: "让旅行回归本质，探索真正的文化与风景", essenceSub: "TRAVEL WITH LOCAL KNOWLEDGE, AT YOUR OWN PACE", whyLabel: "WHY YUJUNYOU", whyTitle: "为什么选择与君游", reasons: [["专属定制", "按人数、时间与兴趣规划，不套用固定团。"], ["福建在地", "从厦门出发，熟悉闽南城市、海岸与文化。"], ["全国可安排", "福建以外的中国目的地也可咨询。"], ["行程一体沟通", "路线、住宿、用车与当地服务集中协调。"], ["面向入境旅客", "服务东南亚华人、台湾及国际游客。"]],
    storyLabel: "我们是谁", storyTitle: "先理解同行的人，\n再开始规划旅程。", story: ["与君游位于厦门。我们熟悉福建的城市、海岸、古城与村落，也接受中国其他目的地的定制旅行咨询。", "我们服务东南亚华人、台湾及国际游客。每次咨询会先了解日期、人数、兴趣、预算、体力与旅行节奏，再讨论路线是否适合。"],
    scopeLabel: "我们的坚持", scopeTitle: "以福建为起点，认真完成每一次中国旅行。", scopes: [["先理解，再规划", "结合航班、天数与同行成员设计行程，不直接套用固定团。"], ["一个窗口沟通", "住宿、接送、包车与行程衔接，尽量减少多方反复沟通。"], ["服务边界说清楚", "行前说明包含、可选与自理项目，重要安排先确认再继续。"]],
    methodLabel: "合作方式", methodTitle: "从咨询到出发，\n每一步都先确认。", methods: [["01", "告诉我们基本需求", "日期、人数、目的地和同行成员不必一次完全确定。"], ["02", "收到可讨论的行程建议", "路线、住宿、用车和可选体验会根据实际情况组合。"], ["03", "确认服务内容与费用", "已包含、可选和需要自理的项目，会在继续安排前说明。"]],
    note: "网站展示的是行程灵感，不是固定团、最终报价或在线付款页面。具体服务以双方确认的方案和当地可用资源为准。",
    credentialsLabel: "企业资料", credentialsTitle: "资质与授权文件", credentialsText: "这里预留正式文件展示位置。取得清晰扫描件并确认可公开后，再上传营业执照及相关许可或合作授权。", credentialItems: ["企业登记文件", "业务许可或合作授权", "保险与服务文件"], pending: "文件待上传",
    ctaTitle: "先说想去哪里，我们再一起把行程安排清楚。", ctaText: "填写目的地、出行时间、人数与同行需求，我们会结合交通、住宿和游览节奏，整理适合你的定制游建议。", cta: "填写旅行需求",
    footer: "全国定制 · 福建在地服务 · 酒店安排 · 包车接送",
  },
  "zh-TW": {
    lang: "zh-Hant", brandSub: "中國訂製旅行", nav: ["服務項目", "行程靈感", "文化體驗", "關於我們", "聯絡我們"],
    label: "ABOUT YUJUNYOU", title: "關於與君游", lead: "從廈門出發，以福建在地經驗為優勢，為來自不同國家與地區的旅客規劃中國訂製行程。",
    facts: [["公司登記名稱", "與君游（廈門）國際旅遊有限公司"], ["所在地", "中國福建・廈門"], ["服務範圍", "福建在地優勢・全中國訂製旅行"], ["網站用途", "行程諮詢・暫不提供線上付款"]],
    profileLabel: "認識與君游", profileTitle: "與君游（廈門）國際旅遊有限公司", profileLead: "以福建在地優勢為起點，提供涵蓋全中國的訂製旅行服務。", profileBody: ["與君游是一家位於廈門的國際旅遊公司，面向東南亞華人、台灣及國際旅客提供中國旅行諮詢與訂製服務。我們熟悉廈門、泉州、漳州、福州、平潭及福建土樓等目的地，也可依照旅客的出行計畫，協助安排福建以外的中國城市與跨城市行程。", "我們的行程適合家庭親子、親友小團、長輩慢遊及第一次來到中國的旅客。規劃前會先了解出行日期、人數、興趣、預算、體力與飲食習慣，再結合交通時間和當地實際條件，設計更符合同行成員節奏的路線，而不是直接套用固定團範本。", "服務可涵蓋路線規劃、飯店建議、包車與接送、當地用車、地陪導遊及文化體驗等內容。路線、住宿、車輛與當地服務盡量由同一個窗口協調，讓旅客在出發前清楚知道如何銜接，也方便旅途中有變化時及時溝通。", "我們重視純粹、自在的旅行體驗，不會把未經確認的購物安排預設加入行程。網站主要用於了解需求和建立聯絡，暫不提供線上付款；最終服務內容、可選項目與費用，會在雙方確認方案後安排。"], profilePoints: ["福建在地經驗", "全中國訂製旅行", "華語與英語溝通"], nameLabel: "名字裡的旅行觀", nameTitle: "與君同行，遊有所感。", nameIntro: "「與君游」不是一句有距離的口號，而是我們希望建立的旅行關係：有人認真聽你想去哪裡，也有人把沿途的銜接與細節照顧好。", nameIdeas: [["與", "代表同行與協作。路線不是單方面安排，而是在溝通中一起完成。"], ["君", "代表對每一位旅客的尊重。家庭、長輩、孩子與朋友，都應有適合自己的節奏。"], ["游", "代表自在地走近一座城市。除了看風景，也理解地方文化、生活與人與人之間的故事。"]], addressLabel: "公司地址", address: "廈門市集美區杏林灣路474號2606單元", galleryLabel: "授權旅行紀錄", galleryCaption: "真實的同行與真實的旅程，比任何宣傳話術更能說明我們重視的旅行方式。",
    essenceTitle: "讓旅行回歸本質，探索真正的文化與風景", essenceSub: "TRAVEL WITH LOCAL KNOWLEDGE, AT YOUR OWN PACE", whyLabel: "WHY YUJUNYOU", whyTitle: "為什麼選擇與君游", reasons: [["專屬訂製", "依人數、時間與興趣規劃，不套用固定團。"], ["福建在地", "從廈門出發，熟悉閩南城市、海岸與文化。"], ["全中國可安排", "福建以外的中國目的地也可諮詢。"], ["行程一體溝通", "路線、住宿、用車與當地服務集中協調。"], ["面向入境旅客", "服務東南亞華人、台灣及國際旅客。"]],
    storyLabel: "我們是誰", storyTitle: "先理解同行的人，\n再開始規劃旅程。", story: ["與君游位於廈門。我們熟悉福建的城市、海岸、古城與村落，也接受中國其他目的地的訂製旅行諮詢。", "我們服務東南亞華人、台灣及國際旅客。每次諮詢會先了解日期、人數、興趣、預算、體力與旅行節奏，再討論路線是否合適。"],
    scopeLabel: "我們的堅持", scopeTitle: "以福建為起點，認真完成每一次中國旅行。", scopes: [["先理解，再規劃", "結合航班、天數與同行成員設計行程，不直接套用固定團。"], ["一個窗口溝通", "住宿、接送、包車與行程銜接，盡量減少多方反覆溝通。"], ["服務邊界說清楚", "行前說明包含、可選與自理項目，重要安排先確認再繼續。"]],
    methodLabel: "合作方式", methodTitle: "從諮詢到出發，\n每一步都先確認。", methods: [["01", "告訴我們基本需求", "日期、人數、目的地與同行成員不必一次完全確定。"], ["02", "收到可討論的行程建議", "路線、住宿、用車與可選體驗會依實際情況組合。"], ["03", "確認服務內容與費用", "已包含、可選與需要自理的項目，會在繼續安排前說明。"]],
    note: "網站展示的是行程靈感，不是固定團、最終報價或線上付款頁面。具體服務以雙方確認的方案與當地可用資源為準。",
    credentialsLabel: "企業資料", credentialsTitle: "資質與授權文件", credentialsText: "此處預留正式文件展示位置。取得清晰掃描檔並確認可公開後，再上傳營業執照及相關許可或合作授權。", credentialItems: ["企業登記文件", "業務許可或合作授權", "保險與服務文件"], pending: "文件待上傳",
    ctaTitle: "先說想去哪裡，我們再一起把行程安排清楚。", ctaText: "填寫目的地、出行時間、人數與同行需求，我們會結合交通、住宿和遊覽節奏，整理適合你的訂製遊建議。", cta: "填寫旅遊需求",
    footer: "全中國訂製 · 福建在地服務 · 飯店安排 · 包車接送",
  },
  en: {
    lang: "en", brandSub: "Custom China Travel", nav: ["Services", "Trip Ideas", "Experiences", "About", "Contact"],
    label: "ABOUT YUJUNYOU", title: "About Yujunyou", lead: "Based in Xiamen, we use our local Fujian knowledge to plan custom journeys across China.",
    facts: [["Registered company", "Yujunyou (Xiamen) International Travel Co., Ltd."], ["Based in", "Xiamen, Fujian, China"], ["Planning scope", "Local Fujian expertise · Custom trips across China"], ["Website purpose", "Trip inquiries · No online payment"]],
    profileLabel: "MEET YUJUNYOU", profileTitle: "Yujunyou (Xiamen) International Travel Co., Ltd.", profileLead: "Local in Fujian, with custom trip planning across China.", profileBody: ["Yujunyou is based in Xiamen. We know Xiamen, Quanzhou, Zhangzhou, Fuzhou, Pingtan, and the Fujian tulou, and we also help connect destinations elsewhere in China.", "We plan for families, small groups, senior travellers, and first-time visitors. Before suggesting a route, we ask about your dates, group, interests, budget, mobility, and dietary needs.", "Services may include route planning, hotel suggestions, private transport, transfers, local guides, and cultural experiences—all coordinated through one point of contact where practical.", "This website is for inquiries and does not accept online payments. Final services, options, and costs are confirmed in your proposal."], profilePoints: ["Local Fujian knowledge", "Custom trips across China", "Chinese and English support"], nameLabel: "THE IDEA BEHIND OUR NAME", nameTitle: "Travel together. Feel the place.", nameIntro: "Yujunyou expresses the kind of relationship we want to build: listening before planning, respecting each traveller, and making room to understand the places along the way.", nameIdeas: [["Together", "A journey is shaped through conversation, not handed over as a fixed template."], ["You", "Every traveller deserves a pace that suits their family, interests, and comfort."], ["Journey", "Travel can reveal local culture, daily life, and human stories—not only landmarks."]], addressLabel: "Office address", address: "Unit 2606, No. 474 Xinglinwan Road, Jimei District, Xiamen, Fujian, China", galleryLabel: "AUTHORIZED TRAVEL RECORDS", galleryCaption: "Real people and real journeys say more about thoughtful travel than promotional claims.",
    essenceTitle: "Travel for culture, place, and the right pace.", essenceSub: "TRAVEL WITH LOCAL KNOWLEDGE, AT YOUR OWN PACE", whyLabel: "WHY YUJUNYOU", whyTitle: "Why travel with Yujunyou", reasons: [["Custom planning", "Built around your group, dates, and interests rather than a fixed tour."], ["Fujian knowledge", "Based in Xiamen with practical knowledge of southern Fujian."], ["China-wide inquiries", "Custom journeys beyond Fujian are also welcome."], ["One clear contact", "Routes, stays, transport, and local support coordinated together."], ["Inbound traveller focus", "Serving travellers from Southeast Asia, Taiwan, and beyond."]],
    storyLabel: "WHO WE ARE", storyTitle: "Understand the people first.\nThen shape the journey.", story: ["Yujunyou is based in Xiamen. Fujian is our strongest local focus, and we also plan custom journeys to destinations across China.", "We begin with your dates, group, interests, budget, mobility, and preferred pace before suggesting a suitable route."],
    scopeLabel: "WHAT WE VALUE", scopeTitle: "Local in Fujian. Thoughtful across China.", scopes: [["Understand first", "Shape the journey around your flights, available days, and travel party—not a fixed group template."], ["One clear contact", "Bring stays, transfers, transport, and trip coordination into one practical conversation."], ["Clear service boundaries", "Explain what is included, optional, or paid separately before booking."]],
    methodLabel: "HOW IT WORKS", methodTitle: "From inquiry to departure,\nwe confirm each step.", methods: [["01", "Share the basics", "Your dates, destinations, and group details do not need to be final."], ["02", "Review a practical trip idea", "We combine routes, stays, transport, and optional experiences around your needs."], ["03", "Confirm services and costs", "We explain what is included, optional, or paid separately before booking." ]],
    note: "The website presents trip inspiration, not fixed group tours, final quotes or an online payment page. Services remain subject to the confirmed proposal and local availability.",
    credentialsLabel: "COMPANY DOCUMENTS", credentialsTitle: "Licenses and authorizations", credentialsText: "Verified company documents will be added here only after they are cleared for public display.", credentialItems: ["Company registration", "Service license or partner authorization", "Insurance and service documents"], pending: "Document pending",
    ctaTitle: "Start with where you want to go.", ctaText: "Share your dates, group size, and travel needs. We will shape a practical custom itinerary around your preferred pace.", cta: "Plan my trip",
    footer: "Custom China trips · Local Fujian support · Hotels · Private transport",
  },
} as const;

export default function CompanyAboutPage({ locale }: { locale: CompanyAboutLocale }) {
  const t = content[locale];
  const planPath = locale === "zh-CN" ? "/plan" : locale === "zh-TW" ? "/zh-tw/plan" : "/en/plan";

  return <main className="company-page" lang={t.lang}>
    <section className="company-masthead">
      <div className="shell company-masthead-inner"><p className="overline">{t.label}</p><h1>{t.title}</h1><p>{t.lead}</p></div>
    </section>

    <section className="shell company-about-intro"><img src="/about-xiamen-skyline-authorized.jpg" alt={locale === "en" ? "Xiamen skyline" : locale === "zh-TW" ? "廈門城市天際線" : "厦门城市天际线"} /><div><p className="overline dark">{t.profileLabel}</p><h2>{t.profileTitle}</h2><p className="company-profile-lead">{t.profileLead}</p><div className="company-profile-body">{t.profileBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

    <section className="company-name-story"><div className="shell"><div className="company-name-copy"><p className="overline dark">{t.nameLabel}</p><h2>{t.nameTitle}</h2><p>{t.nameIntro}</p></div><div className="company-name-ideas">{t.nameIdeas.map(([character, text]) => <article key={character}><strong>{character}</strong><p>{text}</p></article>)}</div></div></section>

    <section className="company-essence"><div className="shell"><h2>{t.essenceTitle}</h2><p>{t.essenceSub}</p></div></section>

    <section className="shell company-why"><div><p className="overline dark">{t.whyLabel}</p><h2>{t.whyTitle}</h2><div className="company-reasons">{t.reasons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div><img src="/about-xiamen-cultural-authorized.jpg" alt={locale === "en" ? "Xiamen cultural landmark" : locale === "zh-TW" ? "廈門城市文化地標" : "厦门城市文化地标"} /></section>

    <section className="company-credentials"><div className="company-credentials-band"><div className="shell"><p className="overline dark">{t.credentialsLabel}</p><h2>{t.credentialsTitle}</h2><p>{t.credentialsText}</p><address className="company-registered-address"><small>{t.addressLabel}</small><strong>{t.profileTitle}</strong><span>{t.address}</span></address></div></div><div className="shell company-credential-grid">{t.credentialItems.map((item, index) => <article key={item}><div className="company-document-placeholder"><span>0{index + 1}</span><b>YUJUNYOU</b></div><h3>{item}</h3><p>{t.pending}</p></article>)}</div></section>

    <section className="company-about-contact"><div className="shell"><Image className="company-about-logo" src="/yujunyou-mark-v4.svg" width={72} height={72} alt={locale === "en" ? "Yujunyou logo" : locale === "zh-TW" ? "與君游品牌標誌" : "与君游品牌标志"}/><p className="overline dark">YUJUNYOU INTERNATIONAL TRAVEL</p><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><a href={planPath}>{t.cta}<b>→</b></a></div></section>
  </main>;
}
