import type { LocalizedTripCopy, LocalizedTripLocale } from "../localized-combined-trip-detail";

type ClassicCopy = Omit<LocalizedTripCopy, "routeId" | "locale"> & { description: string };

const images = [
  [["抵达厦门", "厦门海边与城市生活的第一眼"], ["海边慢下来", "根据抵达时间安排轻松散步"]],
  [["鼓浪屿", "海岛、老街与历史建筑"], ["老城街巷", "在骑楼和小店之间慢慢走"]],
  [["福建土楼", "山谷里的村落与圆楼"], ["土楼生活", "从建筑走进当地日常"]],
  [["泉州古城", "寺庙、街巷与红砖建筑"], ["闽南日常", "在古城和餐桌之间认识泉州"]],
  [["泉州市场", "把最后一天留给古城"], ["送站", "按返程时间从容结束旅程"]],
] as const;

const zhDays = [
  { title: "抵达厦门", lead: "先慢下来，认识这座海边城市。", description: "第一天不安排太满。抵达后由车辆接站，先入住酒店、休息，再根据时间去海边或老城区走走。如果是晚班机，也可以直接入住，把体力留给第二天。", stops: [{ name: "抵达与接送", text: "机场或高铁站接送；入住酒店；沙坡尾或环岛路；根据抵达时间自由调整。" }], details: [{ title: "住宿建议", lines: ["厦门"] }, { title: "当天安排", lines: ["机场 / 高铁站接送", "酒店入住与休息"] }], images: images[0] },
  { title: "厦门 → 鼓浪屿", lead: "把一天留给海岛和老街。", description: "坐船前往鼓浪屿。不急着把岛上的景点全部走完，可以在老建筑、街巷、海边和小店之间慢慢逛，下午或傍晚返回厦门。", stops: [{ name: "鼓浪屿", text: "轮渡、历史建筑、老街散步与当地小吃。" }, { name: "厦门老城", text: "根据体力在中山路或周边街区自由安排。" }], details: [{ title: "住宿建议", lines: ["厦门"] }, { title: "当天安排", lines: ["轮渡", "历史建筑", "老街散步"] }], images: images[1] },
  { title: "厦门 → 福建土楼", lead: "从海边，走进福建的山里。", description: "离开厦门，乘车进入福建山区。这一天不只是看一个土楼，而是进入村落，看看土楼为什么会出现在这里，以及当地人的生活与建筑之间有什么关系。", stops: [{ name: "私人用车前往土楼", text: "按最终路线安排跨城交通与停留时间。" }, { name: "土楼与村落", text: "代表性土楼群、村落与当地午餐。" }, { name: "山谷生活", text: "留出时间观察建筑、自然和村落日常。" }, { name: "返回或留宿", text: "根据最终路线选择土楼周边或返回厦门。" }], details: [{ title: "住宿建议", lines: ["根据最终路线选择，不写死具体住宿地点"] }, { title: "当天安排", lines: ["代表性土楼群", "村落", "当地午餐", "山谷生活"] }], images: images[2] },
  { title: "福建土楼 → 泉州", lead: "开始认识真正的闽南。", description: "前往泉州。从寺庙、街巷、红砖建筑和当地人的生活里，认识这座城市不同文化长期交汇留下的痕迹。晚上可以把时间留给古城和当地餐桌。", stops: [{ name: "泉州古城", text: "开元寺、西街、传统建筑与古城散步。" }, { name: "闽南生活", text: "在街巷和当地餐桌之间感受泉州。" }, { name: "红砖建筑", text: "按兴趣安排建筑观察与拍摄。" }, { name: "当地美食", text: "根据口味提供餐饮方向建议。" }], details: [{ title: "住宿建议", lines: ["泉州"] }, { title: "当天安排", lines: ["泉州古城", "开元寺", "西街", "当地美食"] }], images: images[3] },
  { title: "泉州", lead: "把最后一天留给古城。", description: "最后一天不急着增加很多景点。可以根据返程时间，继续在泉州古城散步、吃早餐或逛市场，随后根据航班或高铁时间安排送站，结束福建旅程。", stops: [{ name: "古城散步", text: "根据返程时间继续游览。" }, { name: "早餐 / 市场", text: "把最后的时间留给当地生活。" }, { name: "送机 / 送站", text: "按航班或高铁时间安排接送。" }], details: [{ title: "住宿建议", lines: ["泉州，视返程时间安排"] }, { title: "当天安排", lines: ["古城散步", "当地早餐 / 市场", "机场 / 高铁站送站"] }], images: images[4] },
] as const;

const enDays = zhDays.map((day, index) => ({ ...day, title: ["Arrive in Xiamen", "Xiamen → Gulangyu", "Xiamen → Fujian Tulou", "Fujian Tulou → Quanzhou", "Quanzhou"][index], lead: ["Slow down and settle into the coastal city.", "Leave a full day for the island and old lanes.", "From the coast into Fujian’s mountains.", "Begin to understand southern Fujian.", "Keep the last day for the old city."][index], description: ["The first day stays light: transfer, check in, rest, and an easy coastal or old-city walk if time allows.", "Take the ferry to Gulangyu and explore historic lanes, the coast, and small local shops without rushing.", "Drive into the mountains and enter the villages around the tulou, not just a single photo stop.", "Walk through temples, lanes, red-brick buildings, and local tables to understand Quanzhou.", "Keep the final hours flexible for a market, breakfast, another old-city walk, and departure transfer."][index], stops: day.stops.map((stop, stopIndex) => ({ name: [["Arrival transfer"], ["Gulangyu", "Xiamen old city"], ["Private vehicle to tulou", "Tulou and village", "Mountain life", "Return or stay"], ["Quanzhou old city", "Southern Fujian life", "Red-brick architecture", "Local food"], ["Old-city walk", "Breakfast / market", "Departure transfer"]][index][stopIndex], text: stop.text })), details: day.details.map((detail, detailIndex) => ({ ...detail, title: detailIndex === 0 ? "Stay suggestion" : "Today" })) }));

const twDays = zhDays.map((day, index) => ({ ...day, title: ["抵達廈門", "廈門 → 鼓浪嶼", "廈門 → 福建土樓", "福建土樓 → 泉州", "泉州"][index], lead: ["先慢下來，認識這座海邊城市。", "把一天留給海島與老街。", "從海邊走進福建的山裡。", "開始認識真正的閩南。", "把最後一天留給古城。"][index] }));

const base = (locale: LocalizedTripLocale, days: typeof zhDays): ClassicCopy => locale === "en" ? {
  title: "Classic Fujian · 5 days", eyebrow: "5 DAYS · PRIVATE FUJIAN JOURNEY", summaryTitle: "From Xiamen’s coast to Quanzhou’s old city", intro: "Five days from Xiamen and Gulangyu into the tulou valleys, then onward to Quanzhou and southern Fujian. A calm first journey with room to adjust.", hotels: "Stay suggestions are based on budget, location, room needs, and the confirmed route. No fixed hotel is required.", tickets: "Tickets, meals, guiding, and special experiences are confirmed with the final proposal.", description: "A five-day private Fujian journey for first-time visitors.", collage: ["Gulangyu", "Coastal Fujian", "Fujian Tulou", "Quanzhou"], days: enDays,
} : locale === "zh-TW" ? {
  title: "福建經典 · 5日", eyebrow: "5 DAYS · PRIVATE FUJIAN JOURNEY", summaryTitle: "從廈門的海走到泉州的古城", intro: "五天時間，從廈門與鼓浪嶼開始，走進福建土樓的山谷，再到泉州認識真正的閩南。適合第一次來福建，也保留調整空間。", hotels: "住宿會按預算、位置、房型、家庭需求與確認路線提供建議，不綁定固定酒店。", tickets: "門票、餐食、導遊與特殊體驗，會在最終方案中確認。", description: "適合第一次來福建的五日私人訂製旅程。", collage: ["鼓浪嶼", "福建海岸", "福建土樓", "泉州"], days: twDays,
} : { title: "福建经典 · 5日", eyebrow: "5 DAYS · PRIVATE FUJIAN JOURNEY", summaryTitle: "第一次来福建，从厦门的海走到泉州的古城。", intro: "五天时间，从厦门和鼓浪屿开始，走进福建土楼的山谷，再到泉州认识真正的闽南。这是一条适合第一次来福建的路线，不追求一天打卡很多景点。", hotels: "住宿根据预算、位置、房型、家庭需求和最终路线提供建议，不绑定固定酒店。", tickets: "景点门票、餐食、导游与特殊体验，在确认行程时说明。", description: "适合第一次来福建的五日私人定制旅程。", collage: ["鼓浪屿", "福建海岸", "福建土楼", "泉州"], days,
};

export const classicCopies: Record<LocalizedTripLocale, ClassicCopy> = { "zh-CN": base("zh-CN", zhDays), en: base("en", zhDays), "zh-TW": base("zh-TW", zhDays) };
