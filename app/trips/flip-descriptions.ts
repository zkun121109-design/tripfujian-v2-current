const descriptions: Record<string, string> = {
  "/trip-xiamen-ruiyi-1.webp": "厦门瑞颐酒店坐落在鹭江岸边，隔水可望鼓浪屿，前往中山路、轮渡码头和老城区都比较方便。这里不只是第一晚休息点，也是认识厦门海港城市格局的起点：白天可看鹭江船只往来，夜间则能欣赏两岸灯光。行程参考携程网评五钻标准，最终酒店、房型和入住权益以实际房态及合同为准。",
  "/trip-xiamen-ruiyi-2.webp": "参考房型面向鹭江及鼓浪屿方向，大面积观景窗把海面、航道和岛上轮廓带入客房视野，适合结束一天步行后安静休息。我们会优先核对床型、早餐、楼层和景观方向；海景角度、是否连通房及加床条件会随出行日期变化，以最终确认方案为准。",
  "/trip-xiamen-gulangyu.webp": "鼓浪屿以“鼓浪屿：历史国际社区”列入世界文化遗产名录。近代以来，不同国家和地区的人群在岛上生活、经商与交流，留下风格多样的住宅、公共建筑和街巷空间，也孕育了深厚的钢琴与管风琴文化。红瓦别墅、花园、坡道和海岸共同组成一座保存完整的历史岛屿，见证厦门从传统港口走向近代国际城市的过程。",
  "/trip-xiamen-zhongshan-road.webp": "中山路形成于厦门近代城市与港口商业发展的进程中，是老厦门最具代表性的骑楼街区。骑楼把商铺、住宅与连续柱廊结合在一起，既适应闽南炎热多雨的气候，也保留了海港城市中西交融的建筑特点。老字号、闽南小吃和周边街巷延续着本地人的日常生活，使这里不只是一条商业街，更像一部仍在使用的厦门城市史。",
  "/trip-xiamen-botanical-garden.webp": "厦门园林植物园又称万石植物园，依托万石山的花岗岩山体、谷地与水系建成，是厦门重要的植物保护、科研与科普园地。园内汇集大量热带和亚热带植物，雨林世界以棕榈、藤本与湿润植被呈现层次丰富的生态景观，多肉植物区则收藏形态各异的仙人掌和多浆植物。自然山林、奇石与植物专类园相互交织，构成厦门山海城市中独特的绿色地标。",
  "/trip-xiamen-nanputuo.webp": "南普陀寺的历史可追溯至唐代，后经历代修建，成为闽南地区重要的佛教寺院。寺院因位于浙江普陀山之南，又同样奉祀观音菩萨而得名“南普陀”。天王殿、大雄宝殿、大悲殿等建筑沿五老峰山势展开，闽南屋脊、石刻、古树与层层院落共同形成庄严而清幽的空间，也见证了厦门佛教文化的延续。",
  "/trip-xiamen-huandao.webp": "厦门环岛路沿本岛东南海岸展开，把沙滩、海湾、礁岸、木栈道与城市公共空间连接成一条滨海景观带。它见证厦门从港口城市发展为重视海岸生活品质的现代城市，也把居民日常生活与自然海岸重新连接。城市天际线、台湾海峡与沿岸绿地共同构成厦门最具代表性的山海城市形象。",
  "/trip-xiamen-jimei.webp": "集美学村由著名爱国华侨领袖陈嘉庚先生在20世纪初倡建，是中国近代华侨兴学的重要见证。这里的“嘉庚建筑”把闽南传统屋顶、石材墙面与西式建筑构图融为一体，形成鲜明而独特的校园风貌。学校建筑、龙舟池和纪念空间共同记录陈嘉庚倾资办学、以教育振兴家乡的理想，也让集美成为厦门最具人文精神的城区之一。",
  "/trip-xiamen-shili-causeway.webp": "十里长堤位于集美海湾与学村之间，海堤、草地、跨海铁路和城市天际线共同构成厦门北部独特的滨海景观。这里曾以交通和海岸防护功能连接城市，如今又成为观察厦门海湾变迁与现代城市发展的公共空间。列车从海面一侧驶过，传统学村、现代轨道与开阔海湾同时进入视野，呈现厦门将交通、生活与滨海环境融合在一起的城市特色。",

  "/trip-zhangzhou-hotel-1.webp": "漳州芗江酒店古城店位于老城生活圈内，方便衔接夜游漳州古城及次日前往南靖的用车。参考按携程网评五钻标准安排，实际酒店、房型和入住权益以出行日期房态及合同为准。",
  "/trip-zhangzhou-hotel-2.webp": "参考商务双床房以两位成人入住为基础，兼顾行李摆放与休息空间。具体楼层、朝向、床宽、是否含景观及加床条件均可能随房态变化，预订前会在最终方案中逐项确认。",
  "/trip-zhangzhou-yunshuiyao.webp": "云水谣古镇位于福建土楼世界文化遗产分布区，溪流、古道、百年榕树与土楼聚落共同保存了闽西南山地村落的传统面貌。建在沼泽地上的方形和贵楼与装饰精美的圆形怀远楼，展现客家先民因地制宜的营造智慧。土楼不仅承担防御功能，更把家族居住、祭祀和公共生活集中在同一座建筑之中。",
  "/trip-zhangzhou-tulou-king.webp": "承启楼所在的高北土楼群是福建土楼世界文化遗产的重要组成部分。承启楼始建于明代，以四层高、四圈同心的巨大圆楼格局闻名，数百个房间围绕中心祖堂层层展开。厚实夯土外墙、木构回廊与严谨的家族空间秩序，体现客家人在山地环境中兼顾防御、聚居和宗族礼制的建筑智慧。",
  "/trip-zhangzhou-sufeng.webp": "苏峰山是东山岛东部临海山体，山势直接伸向台湾海峡，陡峭岩壁、海湾、岛礁和风力设施共同构成开阔的山海景观。环山公路沿海拔起伏展开，形成一侧是山、一侧是海的鲜明空间。这里集中呈现东山岛由花岗岩山体、季风海岸与海岛聚落共同塑造的自然地貌。",
  "/trip-zhangzhou-nanmen-bay.webp": "南门湾位于东山岛铜陵镇南端，弧形海湾顺着山坡展开，彩色民居、渔港、海堤和旧街构成层层递进的滨海聚落。这里曾是当地居民出海、停船与交易的重要生活岸线，至今仍保留渔村与老城相互交织的空间关系。海湾所呈现的不只是风景，也是东山岛长期依海而生的生活记忆。",
  "/trip-zhangzhou-ancient-city.webp": "漳州古城保存文庙、牌坊、骑楼、传统商铺与闽南民居，是认识漳州历史格局和地方文化的重要区域。红砖、燕尾脊、骑楼柱廊与曲折街巷记录不同年代的城市建设，也反映闽南、客家和侨乡文化在此交汇。古城至今仍承载居住、饮食与商业生活，因此是一片延续使用的历史城区，而不是孤立的仿古景区。",

  "/trip-quanzhou-hotel-1.webp": "泉州滨江皇冠假日酒店位于晋江滨水区域，适合连接机场、古城与沿海景点的包车行程。参考按携程网评五钻标准安排，公共空间、早餐与客房均以实际可订酒店及最终合同为准。",
  "/trip-quanzhou-hotel-2.webp": "商务房参考兼顾双人住宿、行李摆放与连续多日休息需求。具体床型、楼层、江景方向、早餐权益及加床条件会随出行日期房态变化，确认方案时会列明。",
  "/trip-quanzhou-kaiyuan.webp": "开元寺始建于唐代，是泉州古城最重要的佛教寺院之一，也是“泉州：宋元中国的世界海洋商贸中心”世界文化遗产的重要组成部分。宋代东西塔以石构仿木形式建成，是中国现存规模最大的成对石塔。寺内佛教建筑、古榕与带有异域特征的石刻遗存，共同见证宋元泉州港繁盛时期不同文化的交流与共存。",
  "/trip-quanzhou-xunpu.webp": "蟳埔村位于泉州湾沿岸，是一座长期依靠海洋生计延续下来的渔村。用牡蛎壳砌成的蚵壳厝适应潮湿多风的海岸环境，簪花围则以鲜花盘绕发髻，成为蟳埔女性身份、审美与生活传统的鲜明象征。渔业劳作、海产交易、民居和头饰习俗共同构成这里仍然鲜活的海洋社区文化。",
  "/trip-quanzhou-luoyang-bridge.webp": "洛阳桥建于北宋，是中国古代跨海梁式石桥的杰出代表，也是泉州世界文化遗产的重要组成部分。建桥者利用筏形桥基减轻潮水冲击，并借助牡蛎附着加固石基，展现对海洋环境的深刻认识。桥梁连接泉州与北方交通路线，既是古代工程奇迹，也见证宋元港口贸易网络向内陆延伸。",
  "/trip-quanzhou-chongwu.webp": "崇武古城始建于明代，是为防御东南沿海侵扰而修筑的海防城堡。花岗岩城墙依山临海，城门、街巷、民居和军事空间组成完整的滨海防御格局。古城周边延续的惠安石雕与渔业生活，使这里同时保存军事历史、石作技艺和闽南海岸聚落文化。",
  "/trip-quanzhou-luojia.webp": "洛伽寺建在泉州黄金海岸的礁石上，三面临海，寺院殿宇、闽南燕尾脊与潮汐海面形成罕见的海上宗教景观。它体现泉州沿海地区把佛教信仰、海洋敬畏与闽南建筑传统结合在一起的文化方式。潮水变化不断改变寺院与礁岸的空间关系，也让这里成为泉州海洋文化极具辨识度的象征。",
  "/trip-quanzhou-wulin.webp": "梧林传统村落形成于近代泉州华侨大规模下南洋的历史背景中，保存闽南大厝、番仔楼和中西合璧的侨乡建筑。红砖古厝、出砖入石墙体、西式柱廊与装饰图案记录华侨在海外谋生后返乡建宅的经历。不同建筑风格并置在传统村落中，浓缩了泉州人的迁徙史、家族观念与跨文化交流。",

  "/trip-fuzhou-hotel-1.webp": "福建外贸中心悦华酒店位于福州三坊七巷生活圈，方便前往西湖、福建博物院、烟台山并衔接平潭用车。参考按携程网评五钻标准安排，最终酒店及入住权益以实际房态和合同为准。",
  "/trip-fuzhou-hotel-2.webp": "标准双床房参考两位成人入住，兼顾行李收纳和城市行程后的休息需求。具体床宽、楼层、朝向、早餐权益及加床条件会随日期变化，预订前在最终方案中确认。",
  "/trip-fuzhou-changjiangao.webp": "长江澳位于平潭北部海岸，宽阔沙滩、浅海、山脊与成排风力机组组成极具辨识度的海岛景观。平潭常年受海洋季风影响，现代风电设施因此成为岛屿利用自然能源的重要象征。风车、潮滩与传统海岸村落同时出现，呈现平潭自然环境与现代建设相互交织的一面。",
  "/trip-fuzhou-beibuwan.webp": "北部湾生态廊道沿平潭北部海岸展开，把花岗岩山体、海湾、岛礁、风车和石厝村落连接成连续景观。平潭传统石厝多采用当地花岗岩砌筑，厚重墙体能够抵御强劲海风，形成独特的海岛聚落面貌。山海公路与村落共同展示平潭居民长期适应季风、石质土地与海洋环境的生活智慧。",
  "/trip-fuzhou-68hai.webp": "68海里景区由猴研岛、研后岛和限山岛等花岗岩岛礁组成，名称来自这里与台湾岛之间约68海里的距离。海浪和季风长期雕刻岩岸，形成裸露巨石、海蚀地貌与开阔海峡视野。它不仅是平潭具有代表性的自然景观，也承载海峡两岸地理相近、文化相连的象征意义。",
  "/trip-fuzhou-longwangtou.webp": "龙凤头海滨浴场紧邻平潭城区，宽阔而平缓的弧形沙滩面向台湾海峡，是平潭最具城市代表性的海岸空间之一。细沙、潮汐与开阔海面记录岛屿长期受风浪塑造的自然过程。它把居民日常休闲与平潭的海洋地理联系在一起，也展现一座海岛城市如何围绕海岸生长。",
  "/trip-fuzhou-yantaishan.webp": "烟台山位于闽江南岸，福州开埠后曾集中分布领事馆、洋行、教堂、学校和近代住宅。不同国家与时期的建筑顺着山地街巷层层展开，记录福州从传统府城走向近代通商口岸的历史。红砖建筑、石厝和坡道共同构成一片中西文化交汇的城市遗产。",
  "/trip-fuzhou-sanfangqixiang.webp": "三坊七巷保存福州古城自唐宋以来延续的里坊格局，被称为研究中国城市坊巷制度的“活化石”。白墙灰瓦、马鞍墙、木构院落与纵横巷道组成严谨的居住空间，并孕育众多影响近现代中国的历史人物。它集中体现福州传统士绅文化、家族生活与城市文脉。",

  "/trip-meizhou-chaoyin.webp": "湄屿潮音位于湄洲岛北部，花岗岩海岸经过长期风化、海浪侵蚀与潮汐作用，形成沟槽、洞穴和层叠岩体。海浪进入岩缝时产生富有节奏的回响，“潮音”因此得名。独特声景与海蚀地貌共同反映湄洲岛长期受海洋力量塑造的自然历史。",
  "/trip-meizhou-mazu.webp": "妈祖祖庙依山面海，是妈祖信俗的发源地和全球妈祖文化的重要精神中心。相传妈祖原名林默，宋代生活于湄洲岛，因护佑航海和救助海难而受到沿海民众敬仰。祖庙建筑群沿山势展开，见证妈祖信仰随海上贸易和华人迁徙传播世界；“妈祖信俗”也已列入联合国教科文组织人类非物质文化遗产代表作名录。",

  "/trip-sanming-hotel.webp": "尤溪宾馆是三明文化行程在尤溪的参考住宿，并以迎宾礼、朱子茶台和疗休养配套连接当地朱子文化主题。酒店星级、具体房型、活动内容与使用时段以最终确认方案为准。",
  "/trip-sanming-feast.webp": "朱子家宴以朱熹故里尤溪的理学文化和乡土饮食为基础，通过菜名、食材、摆盘与席间礼序表达家训、耕读和敬老重教等观念。它并非简单复刻古代宴席，而是把抽象的朱子文化转化为可以理解和品味的地方生活方式。宴席也反映闽中山区物产、家族礼仪与节庆传统之间的联系。",
  "/trip-sanming-taining.webp": "泰宁古城保存尚书第等明清建筑、传统街巷、水系与牌坊，是闽西北历史文化的重要载体。尚书第规模宏大，院落、厅堂、天井和精细木雕体现明代官宦宅第的礼制秩序。古城连续的生活空间记录地方家族、商业与儒家文化数百年的延续。",
  "/trip-sanming-dajinhu.webp": "大金湖位于泰宁丹霞地貌核心区域，所在的“中国丹霞”被列入世界自然遗产名录。赤色砂砾岩经过地壳抬升、流水切割与长期风化，形成高耸赤壁、峡谷、峰丛和岩穴。湖水深入丹霞群山，使雄伟岩壁与水面倒影结合，构成中国丹霞景观中极具辨识度的水上形态。",
  "/trip-sanming-zhuxi.webp": "南宋理学家朱熹出生于尤溪，朱子文化园以其故里历史和思想传承为主题。南溪书院、古樟与相关纪念空间呈现朱熹成长环境及后世尊师重教的文化传统。朱熹对儒家经典的整理和阐释深刻影响东亚教育与社会思想，尤溪也因此成为认识朱子文化源流的重要地点。",
  "/trip-sanming-tubao.webp": "书京土堡由光裕堡、瑞庆堡等防御性民居组成，是闽中山区家族聚居建筑的代表。厚重夯土或砖石外墙、有限的外部开口与内部院落，把居住、储藏、防御和宗族生活集中在坚固堡寨之中。它与闽西南圆形土楼形态不同，却同样反映福建山地居民应对社会动荡和自然环境的营造智慧。",
  "/trip-sanming-guifeng.webp": "桂峰村依山而建，保存大量明清古民居、石巷、院落、溪流和廊桥，是闽中传统山地聚落的典型代表。房屋顺应地形层层展开，街巷把宗祠、民居与公共空间紧密连接。村落延续耕读文化与农事生活，秋季屋前晾晒的作物更是居民真实生产方式形成的季节景象。",
  "/trip-sanming-costume.webp": "桂峰传统服饰以闽中地方审美和乡村生活为背景，纹样、色彩、头饰与穿着方式体现不同年代的民间习俗。服饰与古村建筑、家族礼仪和节庆活动相互联系，是理解当地女性手艺、审美表达与社区身份的一种文化线索。",
  "/trip-sanming-dongmen.webp": "沙县东门古街沿传统街巷保存院落、店铺、青石路与砖木雕饰，呈现闽中县城过去的生活尺度。大夫第等历史建筑通过厅堂、天井和装饰细节反映地方家族的居住秩序与匠作传统。街区也是沙县商业、饮食和城市记忆长期积累的空间。",
  "/trip-sanming-foodcity.webp": "沙县小吃文化城集中展示扁肉、拌面、烧麦等代表性饮食及其制作技艺。沙县人通过外出经营把地方小吃带到中国各地，使一套源于闽中县城的日常饮食成为广为人知的文化符号。其价值不仅在味道，也在于它记录普通家庭凭借手艺创业、迁徙和建立社区网络的社会历史。",
};

type FlipLocale = "zh-CN" | "zh-TW" | "en";

const localizedDescriptions: Partial<Record<string, Record<Exclude<FlipLocale, "zh-CN">, string>>> = {
  "/trip-xiamen-ruiyi-1.webp": {
    "zh-TW": "廈門瑞頤酒店坐落在鷺江岸邊，隔水可望鼓浪嶼，前往中山路、輪渡碼頭和老城區都相當方便。這裡不只是第一晚的休息點，也是認識廈門海港城市格局的起點：白天可看鷺江船隻往來，夜間則能欣賞兩岸燈光。行程參考攜程網評五鑽標準，最終酒店、房型與入住權益以實際房況及合約為準。",
    en: "Swiss Grand Xiamen stands beside the Lujiang waterfront, looking across to Gulangyu and offering convenient access to Zhongshan Road, the ferry terminals, and the old city. It is more than an overnight stop: the harbour traffic by day and lights across the water after dark introduce Xiamen's character as a port city. The itinerary uses Ctrip's five-diamond hotel category; the final hotel, room, and benefits depend on availability and the confirmed agreement."
  },
  "/trip-xiamen-ruiyi-2.webp": {
    "zh-TW": "參考房型面向鷺江及鼓浪嶼方向，大面積觀景窗把海面、航道與島嶼輪廓帶入客房視野，適合結束一天步行後安靜休息。我們會優先核對床型、早餐、樓層與景觀方向；海景角度、連通房及加床條件會隨出行日期變化，以最終確認方案為準。",
    en: "The reference room faces the Lujiang waterfront and Gulangyu, with broad windows framing the water, shipping channel, and island skyline. It is designed as a restful base after a day of walking. We confirm the bed type, breakfast, floor, and view preference in advance; the exact outlook, connecting-room option, and extra-bed conditions depend on availability."
  },
  "/trip-xiamen-gulangyu.webp": {
    "zh-TW": "鼓浪嶼以「鼓浪嶼：歷史國際社區」列入世界文化遺產名錄。近代以來，不同國家與地區的人群在島上生活、經商和交流，留下風格多樣的住宅、公共建築與街巷空間，也孕育出深厚的鋼琴及管風琴文化。紅瓦別墅、花園、坡道與海岸共同組成保存完整的歷史島嶼，見證廈門從傳統港口走向近代國際城市的過程。",
    en: "Gulangyu is inscribed on the UNESCO World Heritage List as Kulangsu, a Historic International Settlement. From the modern era onward, communities from different countries and regions lived, traded, and interacted here, leaving villas, public buildings, and streets in a remarkable range of architectural styles. Its red-tiled houses, gardens, sloping lanes, coastline, and celebrated piano and organ culture preserve the story of Xiamen's transformation from a traditional port into an international city."
  },
  "/trip-xiamen-zhongshan-road.webp": {
    "zh-TW": "中山路形成於廈門近代城市與港口商業發展的進程中，是老廈門最具代表性的騎樓街區。騎樓把商舖、住宅與連續柱廊結合在一起，既適應閩南炎熱多雨的氣候，也保留海港城市中西交融的建築特色。老字號、閩南小吃與周邊街巷延續著本地人的日常生活，使這裡不只是一條商業街，更像一部仍在使用的廈門城市史。",
    en: "Zhongshan Road developed with Xiamen's modern port economy and remains the old city's defining arcade district. Its qilou buildings combine shops, homes, and continuous covered walkways suited to southern Fujian's hot, rainy climate, while their façades reflect the architectural exchange of a trading port. Long-established businesses, local food, and the surrounding lanes keep everyday neighbourhood life alive, making the street a living record of Xiamen's urban history."
  },
  "/trip-xiamen-botanical-garden.webp": {
    "zh-TW": "廈門園林植物園又稱萬石植物園，依託萬石山的花崗岩山體、谷地與水系建成，是廈門重要的植物保護、科研和科普園地。園內匯集大量熱帶及亞熱帶植物，雨林世界以棕櫚、藤本與濕潤植被呈現豐富的生態層次，多肉植物區則收藏形態各異的仙人掌與多漿植物。自然山林、奇石和植物專類園彼此交織，構成廈門山海城市中獨特的綠色地標。",
    en: "Also known as Wanshi Botanical Garden, Xiamen Botanical Garden was created around the granite hills, valleys, and waterways of Wanshi Mountain. It is an important centre for plant conservation, research, and public education in Xiamen. Collections of tropical and subtropical species range from palms and climbing plants in Rainforest World to the striking cacti and succulents of the arid garden, while natural woodland and granite formations give the garden its distinctive landscape."
  },
  "/trip-xiamen-nanputuo.webp": {
    "zh-TW": "南普陀寺的歷史可追溯至唐代，後經歷代修建，成為閩南地區重要的佛教寺院。寺院因位於浙江普陀山之南，又同樣奉祀觀音菩薩而得名「南普陀」。天王殿、大雄寶殿、大悲殿等建築沿五老峰山勢展開，閩南屋脊、石刻、古樹與層層院落共同形成莊嚴而清幽的空間，也見證廈門佛教文化的延續。",
    en: "Nanputuo Temple traces its history to the Tang dynasty and grew through successive periods of rebuilding into one of southern Fujian's important Buddhist temples. Its name refers to its position south of Mount Putuo and to its devotion to Guanyin. The Heavenly Kings Hall, Mahavira Hall, Great Compassion Hall, southern Fujian rooflines, stone carvings, old trees, and layered courtyards rise against Wulao Peak, preserving a long continuity of Buddhist culture in Xiamen."
  },
  "/trip-xiamen-jimei.webp": {
    "zh-TW": "集美學村由著名愛國華僑領袖陳嘉庚先生在20世紀初倡建，是中國近代華僑興學的重要見證。這裡的「嘉庚建築」把閩南傳統屋頂、石材牆面與西式建築構圖融為一體，形成鮮明而獨特的校園風貌。學校建築、龍舟池與紀念空間共同記錄陳嘉庚傾資辦學、以教育振興家鄉的理想，也讓集美成為廈門最具人文精神的城區之一。",
    en: "Jimei School Village was founded in the early twentieth century by the prominent overseas Chinese leader and philanthropist Tan Kah Kee, making it an important monument to modern overseas Chinese support for education. Its distinctive Jiageng architecture combines traditional southern Fujian roofs, stone walls, and Western-influenced composition. The schools, Dragon Boat Pool, and memorial spaces preserve Tan Kah Kee's belief that education could strengthen his hometown and shape its future."
  },
  "/trip-xiamen-shili-causeway.webp": {
    "zh-TW": "十里長堤位於集美海灣與學村之間，海堤、草地、跨海鐵路和城市天際線共同構成廈門北部獨特的濱海景觀。這裡曾以交通與海岸防護功能連接城市，如今又成為觀察廈門海灣變遷和現代城市發展的公共空間。列車從海面一側駛過，傳統學村、現代軌道與開闊海灣同時進入視野，呈現廈門把交通、生活和濱海環境融合在一起的城市特色。",
    en: "Shili Causeway lies between Jimei Bay and the school village, where the seawall, lawns, cross-bay railway, and city skyline form a distinctive northern Xiamen landscape. Once defined mainly by transport and coastal protection, it has become a public space that reflects the changing relationship between the city and its bay. Passing trains bring the historic school village, modern rail infrastructure, and open water into one view—a concise image of how Xiamen combines transport, daily life, and the coast."
  },
  "/trip-xiamen-huandao.webp": {
    "zh-TW": "廈門環島路沿本島東南海岸展開，把沙灘、海灣、礁岸、木棧道與城市公共空間連成一條濱海景觀帶。它見證廈門從港口城市發展為重視海岸生活品質的現代城市，也把居民日常休閒與自然海岸重新連接。城市天際線、臺灣海峽與沿岸綠地共同構成廈門最具代表性的山海城市形象。",
    en: "Xiamen's Island Ring Road follows the southeastern coast, linking beaches, bays, rocky shores, boardwalks, and public waterfront spaces. It reflects Xiamen's evolution from a port into a modern city that places the coast at the centre of everyday life. The Taiwan Strait, coastal greenery, and urban skyline together form one of the clearest expressions of Xiamen's mountain-and-sea identity."
  },
  "/trip-zhangzhou-yunshuiyao.webp": {
    "zh-TW": "雲水謠古鎮位於福建土樓世界文化遺產分布區，溪流、古道、百年榕樹與土樓聚落共同保存閩西南山地村落的傳統面貌。建在沼澤地上的方形和貴樓與裝飾精美的圓形懷遠樓，展現客家先民因地制宜的營造智慧。土樓不只承擔防禦功能，更把家族居住、祭祀與公共生活集中在同一座建築之中。",
    en: "Yunshuiyao lies within the cultural landscape of the UNESCO-listed Fujian Tulou. Streams, old paths, ancient banyan trees, and earthen-building settlements preserve the character of a mountain village in southwestern Fujian. Square Hegui Lou, built on marshy ground, and the richly decorated circular Huaiyuan Lou show how Hakka communities adapted construction to local conditions and combined defence, family residence, worship, and communal life."
  },
  "/trip-zhangzhou-tulou-king.webp": {
    "zh-TW": "承啟樓所在的高北土樓群是福建土樓世界文化遺產的重要組成部分。承啟樓始建於明代，以四層高、四圈同心的巨大圓樓格局聞名，數百個房間圍繞中心祖堂層層展開。厚實夯土外牆、木構迴廊與嚴謹的家族空間秩序，體現客家人在山地環境中兼顧防禦、聚居和宗族禮制的建築智慧。",
    en: "The Gaobei Tulou Cluster, home to Chengqi Lou, is an important part of the UNESCO-listed Fujian Tulou. Begun in the Ming dynasty, Chengqi Lou is famous for its immense four-storey circular form and four concentric rings of rooms around a central ancestral hall. Its rammed-earth walls, timber galleries, and carefully ordered family spaces embody Hakka solutions for defence, communal residence, and clan ritual in a mountain environment."
  },
  "/trip-zhangzhou-sufeng.webp": {
    "zh-TW": "蘇峰山是東山島東部的臨海山體，山勢直接伸向臺灣海峽，陡峭岩壁、海灣、島礁與風力設施共同構成開闊的山海景觀。環山公路沿海拔起伏展開，形成一側是山、一側是海的鮮明空間。這裡集中呈現東山島由花崗岩山體、季風海岸與海島聚落共同塑造的自然地貌。",
    en: "Sufeng Mountain rises directly from Dongshan Island's eastern coast toward the Taiwan Strait. Granite slopes, cliffs, bays, offshore rocks, and wind-power structures form a broad mountain-and-sea landscape, while the road follows the changing elevation between land and water. The setting captures how granite geology, monsoon weather, and island settlement have shaped Dongshan's coast."
  },
  "/trip-zhangzhou-nanmen-bay.webp": {
    "zh-TW": "南門灣位於東山島銅陵鎮南端，弧形海灣順著山坡展開，彩色民居、漁港、海堤與老街構成層層遞進的濱海聚落。這裡曾是居民出海、停船和交易的重要生活岸線，至今仍保留漁村與老城彼此交織的空間關係。海灣呈現的不只是風景，也是東山島長期依海而生的生活記憶。",
    en: "Nanmen Bay curves around the southern edge of Tongling on Dongshan Island. Colourful hillside homes, the fishing harbour, seawall, and old streets create a layered coastal settlement. Once an everyday shoreline for boats, fishing, and trade, it still preserves the close spatial relationship between the old town and the sea, making the bay a record of Dongshan's long maritime way of life."
  },
  "/trip-zhangzhou-ancient-city.webp": {
    "zh-TW": "漳州古城保存文廟、牌坊、騎樓、傳統商舖與閩南民居，是認識漳州歷史格局和地方文化的重要區域。紅磚、燕尾脊、騎樓柱廊與曲折街巷記錄不同年代的城市建設，也反映閩南、客家與僑鄉文化在此交匯。古城至今仍承載居住、飲食和商業生活，因此是一片延續使用的歷史城區，而不是孤立的仿古景區。",
    en: "Zhangzhou Ancient City preserves a Confucian temple, ceremonial arches, arcades, traditional shops, and southern Fujian houses within its historic street pattern. Red brick, swallowtail roof ridges, covered walkways, and winding lanes record successive periods of urban life and the meeting of Minnan, Hakka, and overseas Chinese influences. Because people still live, eat, and trade here, it remains a functioning historic district rather than a reconstructed old town."
  },
  "/trip-quanzhou-kaiyuan.webp": {
    "zh-TW": "開元寺始建於唐代，是泉州古城最重要的佛教寺院之一，也是「泉州：宋元中國的世界海洋商貿中心」世界文化遺產的重要組成部分。宋代東西塔以石構仿木形式建成，是中國現存規模最大的成對石塔。寺內佛教建築、古榕與帶有異域特徵的石刻遺存，共同見證宋元泉州港繁盛時期不同文化的交流與共存。",
    en: "Founded in the Tang dynasty, Kaiyuan Temple is one of Quanzhou's most important Buddhist sites and a component of the UNESCO World Heritage property Quanzhou: Emporium of the World in Song-Yuan China. Its Song-dynasty East and West Pagodas are monumental stone structures modelled on timber architecture. Buddhist halls, old banyan trees, and carvings with foreign influences preserve evidence of the cultural exchange that accompanied the great maritime port."
  },
  "/trip-quanzhou-xunpu.webp": {
    "zh-TW": "蟳埔村位於泉州灣沿岸，是一座長期依靠海洋生計延續下來的漁村。以牡蠣殼砌成的蚵殼厝適應潮濕多風的海岸環境，簪花圍則以鮮花盤繞髮髻，成為蟳埔女性身份、審美與生活傳統的鮮明象徵。漁業勞作、海產交易、民居和頭飾習俗共同構成仍然鮮活的海洋社區文化。",
    en: "Xunpu is a fishing village on Quanzhou Bay whose culture has long been shaped by the sea. Oyster-shell houses respond to the damp, windy coast, while the flower-ring hairstyle uses fresh blossoms to express the identity and aesthetics of Xunpu women. Fishing work, seafood trade, domestic architecture, and women's customs remain connected in a living maritime community rather than a staged folk display."
  },
  "/trip-quanzhou-luoyang-bridge.webp": {
    "zh-TW": "洛陽橋建於北宋，是中國古代跨海梁式石橋的傑出代表，也是泉州世界文化遺產的重要組成部分。建橋者利用筏形橋基減輕潮水衝擊，並藉牡蠣附著加固石基，展現對海洋環境的深刻認識。橋梁連接泉州與北方交通路線，既是古代工程奇蹟，也見證宋元港口貿易網絡向內陸延伸。",
    en: "Built in the Northern Song dynasty, Luoyang Bridge is an outstanding ancient sea-crossing stone beam bridge and a component of Quanzhou's UNESCO World Heritage property. Raft-shaped foundations reduced tidal force, while cultivated oysters helped bind and strengthen the stone base—an ingenious response to the marine environment. The bridge linked Quanzhou with northern routes and shows how the port's trade network extended inland."
  },
  "/trip-quanzhou-chongwu.webp": {
    "zh-TW": "崇武古城始建於明代，是為防禦東南沿海侵擾而修築的海防城堡。花崗岩城牆依山臨海，城門、街巷、民居與軍事空間組成完整的濱海防禦格局。古城周邊延續的惠安石雕和漁業生活，使這裡同時保存軍事歷史、石作技藝與閩南海岸聚落文化。",
    en: "Chongwu Ancient City was founded in the Ming dynasty as a coastal fortress guarding southeastern China. Granite walls follow the shore and enclose gates, lanes, homes, and former military spaces in a coherent defensive plan. The surrounding Huian stone-carving tradition and fishing life add further layers, preserving military history, local craftsmanship, and the culture of a southern Fujian coastal settlement."
  },
  "/trip-quanzhou-luojia.webp": {
    "zh-TW": "洛伽寺建在泉州黃金海岸的礁石上，三面臨海，寺院殿宇、閩南燕尾脊與潮汐海面形成罕見的海上宗教景觀。它體現泉州沿海地區把佛教信仰、海洋敬畏與閩南建築傳統結合在一起的文化方式。潮水變化不斷改變寺院與礁岸的空間關係，也讓這裡成為泉州海洋文化極具辨識度的象徵。",
    en: "Luojia Temple stands on coastal rocks with the sea on three sides. Temple halls and southern Fujian swallowtail roofs meet the changing tide to create a rare maritime religious landscape. The setting expresses how coastal Quanzhou combines Buddhist devotion, respect for the sea, and local architectural tradition, making the temple a distinctive symbol of the region's ocean culture."
  },
  "/trip-quanzhou-wulin.webp": {
    "zh-TW": "梧林傳統村落形成於近代泉州華僑大規模下南洋的歷史背景中，保存閩南大厝、番仔樓和中西合璧的僑鄉建築。紅磚古厝、出磚入石牆體、西式柱廊與裝飾圖案記錄華僑在海外謀生後返鄉建宅的經歷。不同建築風格並置在傳統村落中，濃縮泉州人的遷徙史、家族觀念與跨文化交流。",
    en: "Wulin Traditional Village grew from the history of Quanzhou migrants who travelled to Southeast Asia and later built homes in their native village. Southern Fujian red-brick houses, fanzi lou, brick-and-stone walls, Western columns, and imported decorative ideas stand side by side. This architectural mixture condenses the region's history of migration, family ties, and cultural exchange."
  },
  "/trip-fuzhou-changjiangao.webp": {
    "zh-TW": "長江澳位於平潭北部海岸，寬闊沙灘、淺海、山脊與成排風力機組組成極具辨識度的海島景觀。平潭常年受海洋季風影響，現代風電設施因此成為島嶼利用自然能源的重要象徵。風車、潮灘與傳統海岸村落同時出現，呈現平潭自然環境與現代建設相互交織的一面。",
    en: "Changjiang'ao lies on northern Pingtan, where a broad beach, shallow sea, ridges, and rows of wind turbines create the island's signature view. Strong maritime monsoons made modern wind power a natural symbol of Pingtan's use of renewable energy. Turbines, tidal flats, and traditional coastal villages together show the meeting of the island's natural environment and modern development."
  },
  "/trip-fuzhou-beibuwan.webp": {
    "zh-TW": "北部灣生態廊道沿平潭北部海岸展開，把花崗岩山體、海灣、島礁、風車和石厝村落連接成連續景觀。平潭傳統石厝多採用當地花崗岩砌築，厚重牆體能抵禦強勁海風，形成獨特的海島聚落面貌。山海公路與村落共同展示居民長期適應季風、石質土地與海洋環境的生活智慧。",
    en: "The Beibu Gulf coastal route links granite hills, bays, offshore rocks, wind turbines, and stone-house villages along northern Pingtan. Traditional houses use local granite and heavy walls to withstand strong sea winds, giving the island its distinctive settlement pattern. The road and villages reveal how generations of residents adapted daily life to monsoons, rocky ground, and the marine environment."
  },
  "/trip-fuzhou-68hai.webp": {
    "zh-TW": "68海里景區由猴研島、研後島和限山島等花崗岩島礁組成，名稱來自這裡與臺灣島之間約68海里的距離。海浪與季風長期雕刻岩岸，形成裸露巨石、海蝕地貌和開闊海峽視野。它不只是平潭代表性的自然景觀，也承載海峽兩岸地理相近、文化相連的象徵意義。",
    en: "The 68 Nautical Miles scenic area includes granite islets such as Houyan, Yanhou, and Xianshan; its name refers to the roughly 68 nautical miles between this coast and Taiwan. Waves and monsoon winds have sculpted exposed boulders and sea-eroded formations facing the open strait. Beyond its geology, the place carries a strong symbolic meaning of geographic closeness and cultural connection across the Taiwan Strait."
  },
  "/trip-fuzhou-longwangtou.webp": {
    "zh-TW": "龍鳳頭海濱浴場緊鄰平潭城區，寬闊而平緩的弧形沙灘面向臺灣海峽，是平潭最具城市代表性的海岸空間之一。細沙、潮汐與開闊海面記錄島嶼長期受風浪塑造的自然過程。它把居民日常休閒與平潭海洋地理連接在一起，也展現一座海島城市如何圍繞海岸生長。",
    en: "Longfengtou Beach borders Pingtan's urban area, with a broad, gently curving shore facing the Taiwan Strait. Fine sand, tides, and the open sea record the island's long exposure to wind and waves. As both a natural shoreline and a daily public space, it shows how Pingtan has grown as a city whose identity remains centred on the coast."
  },
  "/trip-fuzhou-yantaishan.webp": {
    "zh-TW": "煙台山位於閩江南岸，福州開埠後曾集中分布領事館、洋行、教堂、學校和近代住宅。不同國家與時期的建築順著山地街巷層層展開，記錄福州從傳統府城走向近代通商口岸的歷史。紅磚建築、石厝和坡道共同構成一片中西文化交匯的城市遺產。",
    en: "Yantai Hill rises on the south bank of the Min River. After Fuzhou opened as a treaty port, consulates, trading houses, churches, schools, and modern residences gathered on its slopes. Buildings from different countries and periods follow the hillside streets, preserving the city's transition from a traditional prefectural centre to an international trading port."
  },
  "/trip-fuzhou-sanfangqixiang.webp": {
    "zh-TW": "三坊七巷保存福州古城自唐宋以來延續的里坊格局，被稱為研究中國城市坊巷制度的「活化石」。白牆灰瓦、馬鞍牆、木構院落與縱橫巷道組成嚴謹的居住空間，並孕育眾多影響近現代中國的歷史人物。它集中體現福州傳統士紳文化、家族生活與城市文脈。",
    en: "Three Lanes and Seven Alleys preserves an urban ward-and-lane pattern inherited from Fuzhou's Tang and Song past and is often described as a living fossil of traditional Chinese city planning. White walls, grey tiles, saddle-shaped gables, timber courtyards, and narrow lanes form a coherent residential district. The neighbourhood also produced many influential modern figures, embodying Fuzhou's scholarly culture, family life, and urban memory."
  },
  "/trip-meizhou-chaoyin.webp": {
    "zh-TW": "湄嶼潮音位於湄洲島北部，花崗岩海岸經過長期風化、海浪侵蝕與潮汐作用，形成溝槽、洞穴和層疊岩體。海浪進入岩縫時產生富有節奏的回響，「潮音」因此得名。獨特聲景與海蝕地貌共同反映湄洲島長期受海洋力量塑造的自然歷史。",
    en: "Meiyu Chaoyin lies on northern Meizhou Island, where weathering, wave erosion, and tides have carved grooves, caves, and layered forms into the granite coast. Waves entering the rock fissures create rhythmic echoes, giving the place its name, 'Sound of the Tide.' Its distinctive soundscape and sea-eroded geology record the island's long formation under ocean forces."
  },
  "/trip-meizhou-mazu.webp": {
    "zh-TW": "媽祖祖廟依山面海，是媽祖信俗的發源地和全球媽祖文化的重要精神中心。相傳媽祖原名林默，宋代生活於湄洲島，因護佑航海和救助海難而受到沿海民眾敬仰。祖廟建築群沿山勢展開，見證媽祖信仰隨海上貿易和華人遷徙傳播世界；「媽祖信俗」也已列入聯合國教科文組織人類非物質文化遺產代表作名錄。",
    en: "The Mazu Ancestral Temple is the birthplace and spiritual centre of Mazu belief. Tradition identifies Mazu as Lin Mo, a woman of Song-dynasty Meizhou Island revered for protecting sailors and rescuing people at sea. The hillside temple complex records how her worship travelled through maritime trade and Chinese migration, while Mazu belief and customs are now inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity."
  },
  "/trip-zhangzhou-hotel-1.webp": {
    "zh-TW": "漳州薌江酒店古城店位於漳州老城生活圈，建築與周邊街區相互銜接，可感受古城商業、飲食與居民生活的城市氛圍。它是漳州段行程的參考住宿，實際酒店與入住權益以出行日期房況及合約為準。",
    en: "Xiangjiang Hotel Ancient City is located within Zhangzhou's old-city neighbourhood, close to the commercial streets, food culture, and everyday life of the historic centre. It is the reference accommodation for the Zhangzhou section; the final hotel and included benefits depend on availability and the confirmed agreement."
  },
  "/trip-zhangzhou-hotel-2.webp": {
    "zh-TW": "參考商務雙床房以兩位成人入住為基礎，空間配置兼顧休息、行李收納與連續多日旅行需求。床寬、樓層、朝向、早餐與加床條件會隨實際房況變化，以最終確認內容為準。",
    en: "The reference business twin room is arranged for two adults, with practical space for rest and luggage during a multi-day journey. Bed width, floor, orientation, breakfast, and extra-bed conditions depend on actual availability and the final confirmation."
  },
  "/trip-quanzhou-hotel-1.webp": {
    "zh-TW": "泉州濱江皇冠假日酒店位於晉江濱水區域，現代酒店空間與江岸景觀相連，是銜接泉州古城、機場與沿海景點的參考住宿。酒店等級、公共設施、早餐與最終房型以實際可訂內容及合約為準。",
    en: "Crowne Plaza Quanzhou Riverside occupies a modern waterfront setting beside the Jin River and serves as the reference base for Quanzhou's old city, airport, and coastal sites. The final hotel standard, facilities, breakfast, and room type depend on availability and the confirmed agreement."
  },
  "/trip-quanzhou-hotel-2.webp": {
    "zh-TW": "參考商務房以舒適雙人住宿為核心，兼顧多日行程中的休息、工作與行李空間。床型、樓層、江景方向、早餐權益和加床條件會隨日期與房況變化，以最終方案為準。",
    en: "The reference business room is designed for a comfortable two-person stay with space for rest, work, and luggage during a multi-day itinerary. Bed type, floor, river-view orientation, breakfast, and extra-bed conditions depend on the travel date and confirmed availability."
  },
  "/trip-fuzhou-hotel-1.webp": {
    "zh-TW": "福建外貿中心悅華酒店位於福州三坊七巷生活圈，方便連接西湖、福建博物院、煙台山及福州老城。它是福州段的參考五鑽住宿，最終酒店、設施與入住權益以實際房況和合約為準。",
    en: "Fujian Foreign Trade Centre C&D Hotel is located within the wider Three Lanes and Seven Alleys area, connecting easily with West Lake, Fujian Museum, Yantai Hill, and Fuzhou's historic centre. It is the reference Ctrip five-diamond-rated hotel for the Fuzhou section; the final property and benefits depend on availability and contract."
  },
  "/trip-fuzhou-hotel-2.webp": {
    "zh-TW": "標準雙床房參考兩位成人入住，房內配置以城市行程後的休息和行李收納為重點。床寬、樓層、朝向、早餐權益與加床條件會隨日期和房況變化，以最終確認方案為準。",
    en: "The reference standard twin room is arranged for two adults, with practical space for rest and luggage after city touring. Bed width, floor, orientation, breakfast, and extra-bed conditions vary by date and availability and are confirmed in the final proposal."
  },
  "/trip-sanming-hotel.webp": {
    "zh-TW": "尤溪賓館是三明文化行程在朱熹故里尤溪的參考住宿，酒店以地方接待空間銜接朱子茶席、家宴與療休養主題。具體房型、酒店等級和文化活動內容以最終確認方案為準。",
    en: "Youxi Hotel is the reference stay in Zhu Xi's hometown and links the Sanming cultural itinerary with local tea, family-banquet, and wellness themes. The final room type, hotel standard, and included cultural activities follow the confirmed proposal."
  },
  "/trip-sanming-feast.webp": {
    "zh-TW": "朱子家宴以朱熹故里尤溪的理學文化和鄉土飲食為基礎，透過菜名、食材、擺盤與席間禮序表達家訓、耕讀和敬老重教等觀念。它並非簡單復刻古代宴席，而是把抽象的朱子文化轉化為可以理解和品味的地方生活方式。宴席也反映閩中山區物產、家族禮儀與節慶傳統之間的聯繫。",
    en: "The Zhu Xi Family Banquet interprets the Neo-Confucian heritage of Youxi through local food. Dish names, ingredients, presentation, and table etiquette express ideas of family instruction, farming and study, respect for elders, and the value of education. Rather than reproducing a historical menu, it turns Zhu Xi's intellectual legacy into a living regional food tradition rooted in the products and family customs of central Fujian."
  },
  "/trip-sanming-taining.webp": {
    "zh-TW": "泰寧古城保存尚書第等明清建築、傳統街巷、水系與牌坊，是閩西北歷史文化的重要載體。尚書第規模宏大，院落、廳堂、天井和精細木雕體現明代官宦宅第的禮制秩序。古城連續的生活空間記錄地方家族、商業與儒家文化數百年的延續。",
    en: "Taining Ancient City preserves Ming- and Qing-period architecture, traditional lanes, waterways, and ceremonial arches. Its major residence, Shangshu Di, uses halls, courtyards, light wells, and fine woodcarving to express the social order of a Ming official's household. Together, these lived-in spaces preserve centuries of local family history, commerce, craftsmanship, and Confucian culture in northwestern Fujian."
  },
  "/trip-sanming-dajinhu.webp": {
    "zh-TW": "大金湖位於泰寧丹霞地貌核心區域，所在的「中國丹霞」被列入世界自然遺產名錄。赤色砂礫岩經過地殼抬升、流水切割與長期風化，形成高聳赤壁、峽谷、峰叢和岩穴。湖水深入丹霞群山，使雄偉岩壁與水面倒影結合，構成中國丹霞景觀中極具辨識度的水上形態。",
    en: "Dajin Lake lies in the heart of Taining's Danxia landscape, part of the UNESCO World Heritage property China Danxia. Uplift, water erosion, and long weathering shaped red sandstone and conglomerate into sheer cliffs, gorges, peaks, and rock shelters. Water extends deep among the landforms, combining monumental red walls with reflections and creating one of the most distinctive lake-and-Danxia landscapes in China."
  },
  "/trip-sanming-zhuxi.webp": {
    "zh-TW": "南宋理學家朱熹出生於尤溪，朱子文化園以其故里歷史和思想傳承為主題。南溪書院、古樟與相關紀念空間呈現朱熹成長環境及後世尊師重教的文化傳統。朱熹對儒家經典的整理與闡釋深刻影響東亞教育和社會思想，尤溪也因此成為認識朱子文化源流的重要地點。",
    en: "The Southern Song philosopher Zhu Xi was born in Youxi, and the Zhu Xi Cultural Park presents the history and intellectual legacy of his native place. Nanxi Academy, old camphor trees, and memorial spaces evoke both his early environment and later traditions of scholarship. Zhu Xi's interpretation of the Confucian classics profoundly influenced education and social thought across East Asia, giving Youxi lasting cultural importance."
  },
  "/trip-sanming-tubao.webp": {
    "zh-TW": "書京土堡由光裕堡、瑞慶堡等防禦性民居組成，是閩中山區家族聚居建築的代表。厚重夯土或磚石外牆、有限的外部開口與內部院落，把居住、儲藏、防禦和宗族生活集中在堅固堡寨之中。它與閩西南圓形土樓形態不同，卻同樣反映福建山地居民應對社會動盪和自然環境的營造智慧。",
    en: "Shujing Tubao includes fortified residences such as Guangyu and Ruiqing, representative of clan settlements in central Fujian's mountains. Heavy earthen or masonry walls, limited external openings, and internal courtyards combine residence, storage, defence, and family life within a compact stronghold. Their form differs from the circular tulou of southwestern Fujian but reflects the same ingenuity in responding to insecurity and a demanding mountain environment."
  },
  "/trip-sanming-guifeng.webp": {
    "zh-TW": "桂峰村依山而建，保存大量明清古民居、石巷、院落、溪流和廊橋，是閩中傳統山地聚落的典型代表。房屋順應地形層層展開，街巷把宗祠、民居與公共空間緊密連接。村落延續耕讀文化與農事生活，秋季屋前晾曬的作物更是居民真實生產方式形成的季節景象。",
    en: "Guifeng Village climbs a mountain slope through Ming- and Qing-period houses, stone lanes, courtyards, streams, and covered bridges. Homes follow the terrain in compact layers, while lanes connect ancestral halls, domestic spaces, and shared village life. Its farming-and-learning tradition remains visible, and the autumn drying of crops is a seasonal expression of real agricultural work rather than a staged decoration."
  },
  "/trip-sanming-costume.webp": {
    "zh-TW": "桂峰傳統服飾以閩中地方審美和鄉村生活為背景，紋樣、色彩、頭飾與穿著方式體現不同年代的民間習俗。服飾與古村建築、家族禮儀和節慶活動彼此聯繫，是理解當地女性手藝、審美表達與社區身份的一種文化線索。",
    en: "Traditional clothing in Guifeng reflects the aesthetics and rural life of central Fujian. Patterns, colours, headwear, and methods of dress preserve layers of local custom and connect with village architecture, family rites, and festivals. These garments offer a cultural record of women's craft, personal expression, and community identity."
  },
  "/trip-sanming-dongmen.webp": {
    "zh-TW": "沙縣東門古街沿傳統街巷保存院落、店舖、青石路與磚木雕飾，呈現閩中縣城過去的生活尺度。大夫第等歷史建築透過廳堂、天井和裝飾細節反映地方家族的居住秩序與匠作傳統。街區也是沙縣商業、飲食和城市記憶長期積累的空間。",
    en: "Shaxian's Dongmen Old Street preserves courtyards, shops, stone paving, and brick-and-timber ornament at the intimate scale of a traditional central Fujian county town. Historic residences such as Dafu Di reveal family hierarchy and local craftsmanship through halls, light wells, and carved detail. The district also holds layers of Shaxian's commercial, culinary, and urban memory."
  },
  "/trip-sanming-foodcity.webp": {
    "zh-TW": "沙縣小吃文化城集中展示扁肉、拌麵、燒麥等代表性飲食及其製作技藝。沙縣人透過外出經營把地方小吃帶到中國各地，使一套源於閩中縣城的日常飲食成為廣為人知的文化符號。其價值不只在味道，也在於記錄普通家庭憑藉手藝創業、遷徙和建立社區網絡的社會歷史。",
    en: "Shaxian Food Culture City presents signature foods such as bianrou wontons, tossed noodles, and shaomai together with the skills used to make them. Migrants from Shaxian carried these everyday dishes across China, turning a county-town food tradition into a nationally recognised cultural symbol. Its story is as much about family enterprise, mobility, and community networks as it is about flavour."
  }
};

function placeIntroduction(text: string, locale: FlipLocale) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (locale === "en") {
    const sentences = normalized.match(/[^.!?]+[.!?](?=\s|$)|[^.!?]+$/g)?.map(sentence => sentence.trim()).filter(Boolean) ?? [normalized];
    return sentences.slice(0, 3).join(" ");
  }
  const sentences = normalized.match(/[^。！？]+[。！？]?/g)?.map(sentence => sentence.trim()).filter(Boolean) ?? [normalized];
  return sentences.slice(0, 3).map(sentence => /[。！？]$/.test(sentence) ? sentence : `${sentence}。`).join("");
}

export function flipDescription(imagePath: string, fallback: string, locale: FlipLocale = "zh-CN") {
  const description = locale === "zh-CN"
    ? descriptions[imagePath] ?? fallback
    : localizedDescriptions[imagePath]?.[locale] ?? fallback;
  return placeIntroduction(description, locale);
}
