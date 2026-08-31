import FaqSection from "./faq-section";

export type FaqLocale = "zh-CN" | "zh-TW" | "en";

const copy = {
  "zh-CN": {
    lang: "zh-Hans", label: "出发前", title: "常见问题", intro: "把定制范围、费用与调整方式先说清楚。", cta: "填写旅行需求", href: "/plan",
    items: [
      ["只做福建旅游吗？", "福建是我们的本地优势，也接受全国定制旅行咨询；具体安排会结合日期、人数和当地资源确认。"],
      ["这些路线是固定团吗？", "不是。网站展示的是灵感路线，我们会按照航班、天数、预算和同行成员重新组合。"],
      ["会安排购物点或额外收费吗？", "方案会写明已包含、可选和自理项目；未确认的购物安排不会默认加入，新增费用会先沟通。"],
      ["酒店、包车和导游能一起安排吗？", "可以按需要统一协调住宿、接送、用车和当地导游，最终以出发前确认的方案为准。"],
      ["带长辈或孩子，行程可以调整吗？", "可以。我们会根据步行能力和休息需求调整节奏；途中变更也会先说明预订及费用影响。"],
      ["遇到恶劣天气或景点临时关闭怎么办？", "会以安全和官方通知为准，协助调整顺序、替换可行安排或取消受影响项目。相关退改费用按实际预订规则、确认方案和合同处理。"],
      ["确认后需要取消或改期怎么办？", "请尽早联系我们。可退金额和改期费用取决于已经预订的酒店、车辆、门票等实际规则，并以确认方案和合同约定为准。"],
      ["咨询、报价和付款如何进行？", "提交咨询不等于下单。确认路线、服务和费用后再进入付款流程，网站示例不是最终报价。"],
    ],
  },
  "zh-TW": {
    lang: "zh-Hant", label: "出發前", title: "常見問題", intro: "先說清楚訂製範圍、費用與調整方式。", cta: "填寫旅遊需求", href: "/zh-tw/plan",
    items: [
      ["只提供福建旅遊嗎？", "福建是我們的在地優勢，也接受全中國訂製旅行諮詢；具體安排會按日期、人數與當地資源確認。"],
      ["網站路線是固定團嗎？", "不是。網站展示的是參考行程，我們會按航班、天數、預算與同行成員重新組合。"],
      ["會安排購物點或額外收費嗎？", "方案會列明已包含、可選與自理項目；未確認的購物安排不會預設加入，新增費用會先溝通。"],
      ["酒店、包車與導遊可以一起安排嗎？", "可以按需要統一協調住宿、接送、用車與當地導遊，最終以出發前確認的方案為準。"],
      ["帶長輩或兒童，行程可以調整嗎？", "可以。我們會按步行能力與休息需要調整節奏；途中變更也會先說明預訂與費用影響。"],
      ["遇到惡劣天氣或景點臨時關閉怎麼辦？", "會以安全與官方通知為準，協助調整次序、替換可行安排或取消受影響項目。退改費用按實際預訂規則、確認方案與合約處理。"],
      ["確認後需要取消或改期怎麼辦？", "請盡早聯絡我們。可退金額與改期費用取決於已預訂酒店、車輛、門票等實際規則，並以確認方案與合約為準。"],
      ["諮詢、報價與付款如何進行？", "提交諮詢不等於下單。確認路線、服務與費用後才進入付款流程，網站示例並非最終報價。"],
    ],
  },
  en: {
    lang: "en", label: "BEFORE YOU TRAVEL", title: "Frequently asked questions", intro: "Clear answers about planning, pricing, changes, and support.", cta: "Tell us your travel needs", href: "/en/plan",
    items: [
      ["Do you only arrange trips in Fujian?", "Fujian is our strongest local destination, but we also plan custom trips across China. Each proposal depends on your dates, group size, and local availability."],
      ["Are these fixed group tours?", "No. The itineraries are starting points. We adjust them around your flights, trip length, budget, and travelling party."],
      ["Will shopping stops or extra charges be added?", "The proposal clearly separates included, optional, and self-paid items. Shopping stops are never added without agreement, and any new cost is discussed first."],
      ["Can you arrange hotels, private vehicles, and guides together?", "Yes. We can coordinate accommodation, transfers, private vehicles, and local guides. Final services follow the confirmed pre-departure proposal."],
      ["Can the pace be adapted for children or older travellers?", "Yes. We adjust walking and rest time to the group. If plans change during the trip, we explain any booking or cost impact first."],
      ["What happens if severe weather closes an attraction?", "Safety and official notices come first. We help reorder the itinerary, offer a practical alternative, or cancel the affected item. Refunds and change fees follow the supplier rules and signed agreement."],
      ["What if I need to cancel or change my dates?", "Contact us as early as possible. Refunds and change fees depend on the rules for hotels, vehicles, tickets, and other confirmed bookings, as well as the signed agreement."],
      ["How do enquiries, quotations, and payment work?", "Sending an enquiry is not a booking. Payment begins only after the itinerary, services, and price are confirmed. Website prices are examples, not final quotations."],
    ],
  },
} as const;

export default function LocalizedFaqPage({ locale }: { locale: FaqLocale }) {
  const t = copy[locale];
  return <main lang={t.lang} className="standalone-info-page"><FaqSection label={t.label} title={t.title} intro={t.intro} items={t.items} ctaLabel={t.cta} ctaHref={t.href} headingLevel="h1" /></main>;
}
