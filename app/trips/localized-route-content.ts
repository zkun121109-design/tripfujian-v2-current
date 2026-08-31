import type { LocalizedTripCopy, LocalizedTripDayCopy, LocalizedTripLocale } from "./localized-combined-trip-detail";
import type { TripRouteId } from "./route-structure";
import { copy as xiamenZh } from "./xiamen-4-days/copy";
import { classicCopies } from "./xiamen-4-days/classic-copy";
import { copy as quanzhouZh } from "./quanzhou-4-days/copy";
import { copy as zhangzhouZh } from "./zhangzhou-3-days/copy";
import { copy as fuzhouPingtanZh } from "./fuzhou-pingtan-4-days/copy";
import { copy as sanmingZh } from "./sanming-5-days/copy";
import { copy as xiamenTulouDongshanZh } from "./xiamen-tulou-dongshan-5-days/copy";
import { copy as minnanMeizhouTulouZh } from "./minnan-meizhou-tulou-7-days/copy";
import { copy as fujianGrandTourZh } from "./fujian-grand-tour-8-days/copy";

export type LocalizedRouteId = TripRouteId;
type NonXiamenRouteId = Exclude<LocalizedRouteId, "xiamen-4-days">;
type Image = readonly [
    string,
    string
];
export type RouteConfig = Omit<LocalizedTripCopy, "routeId" | "locale" | "days"> & {
    description: string;
    days: readonly LocalizedTripDayCopy[];
};
function fullDay(title: string, lead: string, description: string, stops: LocalizedTripDayCopy["stops"], details: LocalizedTripDayCopy["details"], images: readonly Image[]): LocalizedTripDayCopy {
    return { title, lead, description, stops, details, images };
}
const enSelfPaidMeals = { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner are not included; recommendations are available"] } as const;
const twSelfPaidMeals = { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理，可由服務顧問按需要推薦"] } as const;
const zh: Record<LocalizedRouteId, RouteConfig> = {
    "xiamen-4-days": xiamenZh,
    "quanzhou-4-days": quanzhouZh,
    "zhangzhou-3-days": zhangzhouZh,
    "fuzhou-pingtan-4-days": fuzhouPingtanZh,
    "sanming-5-days": sanmingZh,
    "xiamen-tulou-dongshan-5-days": xiamenTulouDongshanZh,
    "minnan-meizhou-tulou-7-days": minnanMeizhouTulouZh,
    "fujian-grand-tour-8-days": fujianGrandTourZh,
};

const en: Record<NonXiamenRouteId, RouteConfig> = {
    "quanzhou-4-days": {
        title: "Custom Quanzhou tour · 4 days", description: "A four-day custom Quanzhou itinerary through the old city, maritime heritage, coastal villages, and local culture.",
        eyebrow: "Old-city lanes, maritime heritage, and the coast", summaryTitle: "Maritime heritage and everyday Quanzhou",
        intro: "Designed for families and culture-focused travellers, this relaxed Quanzhou journey visits the old city, diverse places of worship, the coast, and overseas-Chinese villages at a flexible pace.",
        collage: ["Luojia Temple", "Kaiyuan Temple", "Xunpu", "Chongwu Ancient City"],
        days: [
            fullDay("Arrival and hotel check-in", "Meet your private driver at Quanzhou airport or station, then transfer to the hotel for a restful first day.", "Before departure, we confirm your flight or train, luggage, group details, meeting point, vehicle, and waiting arrangements.", [
                { name: "Arrival in Quanzhou", text: "Your private driver meets you at Quanzhou airport or station and takes you to the hotel. An early arrival can include a nearby walk." },
            ], [
                { title: "Stay", lines: ["Preferred hotel: Crowne Plaza Quanzhou Riverside or comparable", "Ctrip five-diamond-rated hotel", "Reference room: Business Room", "The final hotel, room, and bed type depend on availability and the signed agreement"] },
                { title: "Meals", lines: ["Meals on arrival day are not included", "Your advisor can suggest nearby options"] },
            ], [["Crowne Plaza Quanzhou Riverside", "The reference hotel offers convenient access to the old city and later coastal visits. Final arrangements depend on availability and the signed agreement."], ["Business Room", "The floor, orientation, view, and bed type depend on availability for the travel date."]]),
            fullDay("Guandi Temple, Qingjing Mosque, Xunpu, Kaiyuan Temple, and West Street", "After breakfast, explore Quanzhou's old city, moving from diverse religious heritage and local customs to Kaiyuan Temple and West Street.", "The day focuses on old-city culture. We adjust the order around opening hours, traffic, and the group's walking pace.", [
                { name: "Tonghuai Guanyue Temple", text: "Visit one of Quanzhou's active local temples and observe traditional architecture and community beliefs." },
                { name: "Qingjing Mosque★", text: "Visit one of China's earliest surviving Islamic sites and learn how maritime trade shaped Quanzhou's diverse culture." },
                { name: "Xunpu Village", text: "Experience fishing-village life and the flower-headdress tradition. A styling session can be arranged separately." },
                { name: "Kaiyuan Temple", text: "See the twin pagodas and temple complex, a major Buddhist landmark in Quanzhou Old City." },
                { name: "West Street and the Bell Tower", text: "Walk through traditional lanes, local food stalls, and everyday old-city life at your own pace." },
            ], [
                { title: "Tickets", lines: ["Qingjing Mosque reference admission: CNY 3 per person", "Opening, reservation, and actual ticket rules follow the travel date"] },
                { title: "Stay", lines: ["Return to Crowne Plaza Quanzhou Riverside or a comparable hotel"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner: not included; recommendations are available"] },
            ], [["Kaiyuan Temple", "Kaiyuan Temple, its twin pagodas, and the surrounding old city reflect Quanzhou's maritime and religious history. The visit allows time for architecture, interpretation, and photos."], ["Xunpu Village", "Xunpu is known for fishing-village life and the local flower-headdress tradition. Styling and photography can be arranged according to personal preference."]]),
            fullDay("Intangible Heritage Museum, Luoyang Bridge, and Chongwu Ancient City", "Move from Quanzhou's intangible heritage displays to an ancient sea-crossing bridge and a coastal defence town.", "The museum is usually closed on Mondays. We confirm current opening and reservation requirements before travel.", [
                { name: "Quanzhou Intangible Heritage Museum", text: "Learn about representative crafts and traditions through the current exhibitions. Access follows official opening and reservation rules." },
                { name: "Luoyang Bridge", text: "Walk along an early stone beam bridge and observe how its structure responds to the tidal environment." },
                { name: "Chongwu Ancient City★", text: "Visit a coastal defence town with more than six centuries of history, combining stone walls, shoreline, and Hui'an culture." },
            ], [
                { title: "Tickets", lines: ["Chongwu Ancient City reference admission: CNY 40 per person", "Museum access, reservations, and attraction prices follow current rules"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner: not included; recommendations are available"] },
            ], [["Luoyang Bridge", "Luoyang Bridge is one of China's early surviving sea-crossing stone beam bridges. Its structure and tidal setting reveal Quanzhou's transport and maritime history."], ["Chongwu Ancient City", "Stone walls, stone houses, and the coast form a distinctive historic landscape shaped by Hui'an's maritime life."]]),
            fullDay("Luojia Temple, Hongta Bay, Wulin Village, and departure", "Spend the final day along Quanzhou's coast and in an overseas-Chinese village before your departure transfer.", "We work backwards from your flight or train, allowing time to collect luggage and reach the airport or station as recommended.", [
                { name: "Luojia Temple", text: "Visit the temple on its coastal rocks and enjoy the meeting of southern Fujian architecture and the sea within safe, open areas." },
                { name: "Hongta Bay", text: "Pause by the bay for a short walk when weather and departure time allow." },
                { name: "Wulin Traditional Village", text: "Explore southern Fujian mansions, hybrid residences, and architecture shaped by overseas-Chinese history." },
                { name: "Departure transfer", text: "Transfer to Quanzhou Jinjiang International Airport or Quanzhou Railway Station as confirmed in the final proposal." },
            ], [
                { title: "Luggage and departure", lines: ["Luggage can be stored at the hotel or carried in the vehicle", "Transfer time follows the confirmed service, traffic, and carrier guidance"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner depend on departure time and are not included"] },
            ], [["Luojia Temple", "Luojia Temple meets the rocky coast on three sides. Tides change the relationship between the temple and the sea; visitors must follow access and safety rules."], ["Wulin Traditional Village", "Southern Fujian mansions, hybrid residences, and overseas-Chinese architecture preserve the village's modern history."]]),
        ],
        hotels: "Crowne Plaza Quanzhou Riverside or a comparable Ctrip five-diamond-rated hotel, in a double room",
        tickets: "First-entry tickets for attractions clearly marked ★ in the final itinerary",
        excluded: [
            "Flights, high-speed rail, or other transport between your home city and Quanzhou.",
            "Hotel deposits and personal expenses, including laundry, calls, drinks, luggage handling, late check-out, and costs during free time.",
            "Additional costs caused by force majeure, personal itinerary changes, single-room supplements, or extra beds.",
            "Any item not assigned to the travel agency in the signed agreement and final itinerary.",
        ]
    },
    "zhangzhou-3-days": {
        title: "Zhangzhou Tulou Custom Tour · 3 Days", description: "A three-day custom route through Zhangzhou Old City, World Heritage tulou, and the coast of Dongshan Island.",
        eyebrow: "World Heritage tulou and the Dongshan coast", summaryTitle: "World Heritage tulou and the Dongshan coast",
        intro: "From Zhangzhou Old City and World Heritage tulou to the Dongshan coast, this three-day route brings together Minnan heritage, Hakka settlements, and seaside scenery.",
        collage: ["Zhangzhou Old City", "Yunshuiyao", "Yongding Tulou", "Nanmen Bay"],
        days: [
            fullDay("Arrival, hotel check-in, and Zhangzhou Old City", "Meet your private driver on arrival, check in, and explore Zhangzhou Old City in the evening if time and energy allow.", "Before departure, your advisor confirms the flight or train, luggage, group details, meeting point, vehicle, and waiting arrangements.", [
                { name: "Wenchang Gate", text: "Enter the old city through Wenchang Gate and use its distinctive architecture as an introduction to Zhangzhou's urban history." },
                { name: "Zhongmin Baihui viewpoint", text: "Take the sightseeing lift to the twelfth floor for a broad view over the old city's lanes, arcades, and roofs." },
                { name: "Old City Memory Museum", text: "Visit the free museum for old photographs and everyday objects that recall how life in Zhangzhou Old City has changed." },
                { name: "Zhangzhou Confucian Temple", text: "Explore one of the city's largest historic building complexes and stop at the red wall bearing the Chinese characters for Zhangzhou." },
                { name: "Weizhen Pavilion", text: "See the octagonal landmark with more than four centuries of history; evening lights normally begin around 7:30 p.m., subject to on-site arrangements." },
                { name: "Old-city specialities", text: "Try Zhangzhou braised noodles, satay noodles, tofu pudding with vermicelli, four-fruit soup, mochi, freshly blanched dishes, balut-style egg, or Pian Tze Huang sugarcane juice." },
            ], [
                { title: "Accommodation", lines: ["Xiangjiang Hotel Zhangzhou (Old City) or comparable", "Ctrip five-diamond-rated hotel", "Reference room: business twin", "Final hotel, room, and bed type depend on availability and the signed agreement"] },
                { title: "Meals", lines: ["Meals on arrival day are not included", "Your advisor can suggest old-city food according to taste, dietary needs, and opening hours"] },
            ], [["Xiangjiang Hotel Zhangzhou", "The reference hotel is convenient for an evening walk in the old city and the next day's tulou route. Final arrangements depend on availability and the signed agreement."], ["Business twin room", "Floor, orientation, bed type, and facilities depend on room availability and the final confirmed proposal."]]),
            fullDay("Yunshuiyao, Yongding Tulou, and Dongshan Island", "After breakfast, explore Yunshuiyao and the Yongding Tulou cluster before continuing to Dongshan Island.", "The reference departure time is 8:00 a.m. Yunshuiyao is visited first, followed by the Yongding Tulou scenic area; traffic, reservations, and walking ability may change the order.", [
                { name: "Yunshuiyao★", text: "Follow the old path and stream through Hegui Lou, Yunshuiyao, the tulou light display, and Huaiyuan Lou to learn about tulou architecture and village life." },
                { name: "Yongding Tulou★", text: "Visit Chengqi Lou and Qiaofu Lou, and view Shize Lou and Wuyun Lou from outside to compare different tulou forms within a traditional settlement." },
                { name: "Continue to Dongshan Island", text: "After the tulou visits, travel to Dongshan Island, check in, and rest." },
            ], [
                { title: "Admission and interpretation", lines: ["Yunshuiyao reference admission: CNY 90 per person", "Yongding Tulou reference admission: CNY 50 per person", "Tulou light display reference fee: CNY 10 per person", "Interpretation is arranged at Yunshuiyao and Yongding Tulou"] },
                { title: "Accommodation", lines: ["Dongshan Fulaixi Hotel (Jinluan Bay) or comparable", "Ctrip five-diamond-rated hotel", "Reference room: deluxe sea-view room"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner are not included; recommendations are available"] },
            ], [["Yunshuiyao", "Streams, old banyan trees, stone bridges, and tulou connect this village. The visit includes interpretation, architectural observation, and time for photographs."], ["Yongding Tulou", "The large Chengqi Lou is known as the King of Tulou. Its circular courtyards and timber structure illustrate traditional Hakka communal life."]]),
            fullDay("Jinluan Bay, Nanmen Bay, Sufeng Mountain, Fengdong Rock, and departure", "Spend the final day along Dongshan Island's coast, then transfer to the station according to your departure time.", "The reference finish is around 6:00 p.m., followed by transfer to Yunxiao or Zhangzhou Station. Stop durations are planned backwards from the train, traffic, and opening conditions.", [
                { name: "Jinluan Bay and Nanmen Bay", text: "Walk along the bays, then enter Ding Street to experience Dongshan Island's coast, lanes, and fishing-harbour life." },
                { name: "Sufeng Mountain coastal road", text: "Travel along the mountain-and-sea road and pass coastal viewpoints such as Yanya Lovers within officially open and safe areas." },
                { name: "Fengdong Rock★", text: "Visit Dongshan Island's landmark Fengdong Rock; the accessible area and rules follow on-site conditions." },
                { name: "Station transfer", text: "After the visits, transfer to Yunxiao or Zhangzhou Station. The final service range and time follow the confirmed proposal." },
            ], [
                { title: "Admission and transport", lines: ["Fengdong Rock reference admission: CNY 45 per person", "Sufeng Mountain shuttle reference fee: CNY 10 per person", "Prices, access, and shuttle rules follow the travel date"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner depend on departure time and are not included"] },
            ], [["Nanmen Bay", "Colourful hillside homes, a fishing harbour, and the curved coast give Nanmen Bay its distinctive character. Time is reserved for a waterfront walk and photographs."], ["Sufeng Mountain", "The coastal road runs between mountain and sea, opening to changing views of bays and islands. Stops depend on weather, traffic, and safety conditions."]]),
        ],
        hotels: "Xiangjiang Hotel Zhangzhou and Dongshan Fulaixi Hotel, or comparable Ctrip five-diamond-rated hotels, in double rooms",
        tickets: "First-entry tickets for attractions marked ★ and the shuttle items stated in the final itinerary",
        guide: "Interpretation at Yunshuiyao and Yongding Tulou, during the times confirmed in the final itinerary"
    },
    "fuzhou-pingtan-4-days": {
        title: "Custom Fuzhou and Pingtan tour · 4 days", description: "A four-day custom itinerary combining Pingtan's windmill coast with Fuzhou's historic districts.",
        eyebrow: "From Pingtan's coast to Fuzhou's historic lanes", summaryTitle: "Island scenery and historic Fuzhou",
        intro: "Pingtan's windmill coast and Fuzhou's traditional lanes come together in one journey, designed for families and small groups who prefer the flexibility of a private vehicle and a relaxed pace.",
        collage: ["Changjiang'ao", "Beibu Gulf", "Yantai Hill", "Three Lanes and Seven Alleys"],
        days: [
            fullDay("Arrival and hotel check-in", "Meet your private driver on arrival in Fuzhou and transfer to the hotel for a restful first day.", "Before departure, your advisor confirms the flight or train, luggage, group details, meeting point, vehicle, and waiting arrangements.", [
                { name: "Arrival in Fuzhou", text: "Your private driver meets you at Fuzhou airport or station and takes you to the hotel. An early arrival can include nearby free time." },
            ], [
                { title: "Accommodation", lines: ["Fujian Foreign Trade Centre C&D Hotel (Three Lanes and Seven Alleys) or comparable", "Ctrip five-diamond-rated hotel", "Reference room: standard twin", "Final hotel, room, and bed type depend on availability and the signed agreement"] },
                { title: "Meals", lines: ["Meals on arrival day are not included", "Your advisor can recommend places if needed"] },
            ], [["Fujian Foreign Trade Centre C&D Hotel", "The reference hotel is convenient for central Fuzhou and the Pingtan route. Final hotel and room arrangements depend on availability and the signed agreement."], ["Standard twin room", "Floor, orientation, view, and bed type depend on room availability and the final confirmed proposal."]]),
            fullDay("Changjiang'ao, Beibu Gulf Route, Heping Village, and Xianren Well", "After breakfast, travel to Pingtan for windmill beaches, a coastal route, a traditional village, and sea-eroded landscapes.", "The route follows Pingtan's northern coast. Stop order may change with traffic, opening conditions, reservations, and weather.", [
                { name: "Changjiang'ao Windmill Field", text: "Changjiang'ao is one of Pingtan's three principal coastal beaches. Begin at a viewpoint where rows of turbines follow the ridges and bay, then walk closer to the sand to frame the windmills, surf, and fishing boats together. It is a relaxed place to photograph the coast and see how island scenery and wind energy share the landscape." },
                { name: "Beibu Gulf Route", text: "Drive and stop along the roughly 33-kilometre northern coastal route. The wider corridor passes shorelines associated with Changjiang'ao, the Austronesian archaeological research base, and the Keqiutou site. Rather than viewing everything through the window, the itinerary selects open viewpoints and village stops for changing scenes of reefs, terraces, stone houses, and bays." },
                { name: "Heping Village", text: "Walk through a coastal settlement of granite houses and narrow lanes shaped by persistent sea winds. See how local builders used stone walls and weighted roof tiles, then continue towards the colourful boulders near the shore for photographs and a clear contrast between the sheltered village and open sea." },
                { name: "Xianren Well★", text: "This sea-eroded shaft was gradually opened by waves working through fractures in the rock. The sibling-site itinerary records an opening about 33 metres wide and a depth of about 37 metres. Follow the official path for views of the rock walls, surging water, and neighbouring cliffs; access remains subject to wind, waves, and on-site safety controls." },
            ], [
                { title: "Admission", lines: ["Xianren Well reference admission: CNY 35 per person", "Opening, reservations, and actual prices follow the travel date"] },
                { title: "Accommodation", lines: ["Pingtan Guohui International Hotel or comparable", "Ctrip five-diamond-rated hotel", "Reference room: standard double room"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner are not included; recommendations are available"] },
            ], [["Changjiang'ao", "Wind turbines, beach, sea, and open sky create one of Pingtan's signature coastal landscapes. The area is suited to a relaxed walk and photography."], ["Beibu Gulf Route", "The route follows Pingtan's northern coast, linking villages with natural and cultural sites. Viewpoint stops depend on weather and traffic."]]),
            fullDay("68 Nautical Miles, Tannan Bay, Longfengtou, Dafu Bay, and Haitan Ancient City", "Continue along Pingtan's coast, moving from the 68 Nautical Miles scenic area to beaches, bays, and Haitan Ancient City.", "This day includes several coastal stops. Your advisor sets the pace around weather, access, group fitness, and the return drive to Fuzhou.", [
                { name: "68 Nautical Miles★", text: "The scenic area includes Houyan, Yanhou, and Xianshan islands, with a rocky coast extending into the strait. Walk along open paths and viewpoints for layered reefs, strong-wind seascapes, and the inscribed Wanggui Stone, the principal photo stop. Shuttle use and the exact accessible area follow the day's site management." },
                { name: "Tannan Bay", text: "Tannan Bay has a continuous shoreline of about 22 kilometres, with views towards General Mountain to the east. Time here is reserved for a genuine beach walk rather than a quick photograph, taking in the curve of the sand, near-shore water, and distant hills. Seasonal natural phenomena are never presented as guaranteed." },
                { name: "Longfengtou Beach", text: "One of Pingtan's best-known urban beaches, Longfengtou has a golden shoreline recorded by the sibling itinerary at about 9.5 kilometres. Walk the promenade and sand to see how the town meets the sea, with time to rest and photograph the broad coast. Water access depends on weather, sea conditions, and individual ability." },
                { name: "Dafu Bay", text: "Hills shelter Dafu Bay on three sides while the fourth opens to the sea. Walk along the bay for views of turquoise water, pale sand, and the enclosing slopes. The exact stopping point follows road access and local opening conditions." },
                { name: "Haitan Ancient City", text: "The complex uses Pingtan history, traditional streets, and market-town imagery as its theme. Walk through gates, lanes, and courtyard-style buildings while exploring displays related to coastal defence, trade, and island customs. It provides a cultural counterpoint to the day's natural coastline and can include free time for local snacks." },
            ], [
                { title: "Admission", lines: ["68 Nautical Miles reference admission: CNY 38 per person", "Scenic-area shuttle is not included", "Prices, access, and shuttle rules follow the travel date"] },
                { title: "Accommodation", lines: ["Return to Fujian Foreign Trade Centre C&D Hotel or comparable in Fuzhou"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner are not included; recommendations are available"] },
            ], [["68 Nautical Miles", "The scenic area includes Houyan, Yanhou, and Xianshan islands. The coastline around Wanggui Stone offers open views; access follows current safety management."], ["Longfengtou Beach", "This broad urban beach is one of Pingtan's better-known coastal leisure areas. Join water activities only in officially open areas and within your abilities."]]),
            fullDay("Fujian Museum, Yantai Hill, Three Lanes and Seven Alleys, and departure", "Return to Fuzhou for a museum, a modern historic district, and traditional lanes before your departure transfer.", "Your advisor plans the day backwards from venue access, reservations, luggage collection, and the recommended airport or station arrival time.", [
                { name: "Fujian Museum", text: "Set beside West Lake, the museum holds more than 30,000 cultural objects. Follow displays that trace Fujian from early cultures and maritime exchange to regional crafts, using ceramics, painting, folk material, and temporary exhibitions to understand the province's mountainous, coastal, and culturally diverse character. Open galleries, closure days, and reservations follow the venue's rules." },
                { name: "Yantai Hill", text: "After Fuzhou opened as a treaty port in 1860, 17 countries established consulates, trading houses, and churches around Yantai Hill; more than 200 historic buildings and sites survive. Walk the sloping streets to distinguish former diplomatic buildings, churches, and residences, and see how shipping, trade, and Chinese and Western architecture converged here." },
                { name: "Three Lanes and Seven Alleys", text: "This thousand-year-old district preserves the traditional lane system often described as a living fossil of Chinese urban planning. Read the relationship between lanes, white walls, grey tiles, saddle-shaped gables, carvings, and courtyards, linking historic residences with everyday Fuzhou culture. Time permitting, taste local fish balls or rouyan wontons along the way." },
                { name: "Airport or station transfer", text: "After the visits, transfer according to the confirmed flight or train. The final service range follows the confirmed proposal." },
            ], [
                { title: "Departure", lines: ["Luggage can be stored at the hotel or carried in the vehicle", "Transfer time follows the confirmed service, traffic, and carrier guidance"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner depend on departure time and are not included"] },
            ], [["Yantai Hill", "Former consulates, trading houses, churches, and residences record Fuzhou's development after it opened as a treaty port."], ["Three Lanes and Seven Alleys", "The district preserves its traditional lane pattern and many historic buildings. Time can be divided between walking, architecture, and local food."]]),
        ],
        hotels: "Fujian Foreign Trade Centre C&D Hotel and Pingtan Guohui International Hotel, or comparable Ctrip five-diamond-rated hotels, in double rooms",
        tickets: "First-entry tickets for attractions marked ★, including Xianren Well and 68 Nautical Miles; scenic-area shuttles are not included"
    },
    "sanming-5-days": {
        title: "Custom Sanming cultural tour · 5 days", description: "A five-day custom journey through Youxi, Taining, Guifeng, and Shaxian, with local culture, landscapes, and food.",
        eyebrow: "Zhu Xi heritage, Danxia landscapes, and village life", summaryTitle: "Zhu Xi family banquet and cultural wellness",
        intro: "Visit Youxi, Taining Ancient City, Dajin Lake, Zhu Xi Cultural Park, and Shaxian at a relaxed pace suited to families, older travellers, and guests interested in culture.",
        collage: ["Taining Ancient City", "Dajin Lake", "Shujing Tulou", "Guifeng Village"],
        days: [
            fullDay("Arrival in Youxi and Zhu Xi family banquet", "Meet your driver in Youxi, check in at Youxi Hotel, experience the welcome ceremony and Zhu Xi tea table, then join the Zhu Xi family banquet.", "After dinner, an evening walk around the hotel's convalescence centre can be arranged according to arrival time and group fitness.", [
                { name: "Arrival in Youxi", text: "Your private driver meets you at the station and takes you to Youxi Hotel for check-in, the welcome ceremony, and Zhu Xi tea table." },
                { name: "Zhu Xi family banquet", text: "Join a welcome dinner shaped by Zhu Xi heritage and Youxi food traditions. The banquet is listed as Sanming intangible cultural heritage and received the China Famous Banquet title from the China Hotel Association. Dish names, serving order, and table stories introduce how family ritual entered local banquet culture; the actual menu follows the confirmed proposal." },
                { name: "Evening walk", text: "If arrival time and energy allow, walk around the Youxi Hotel staff convalescence centre for its evening scenery and a glimpse of local nightlife. Chess, tea therapy, and similar facilities are optional; availability and service hours follow the final proposal and on-site reception." },
            ], [
                { title: "Accommodation", lines: ["Youxi Hotel", "Listed four-star hotel", "Final hotel, room, and bed type depend on availability and the signed agreement"] },
                { title: "Meals", lines: ["Lunch: hotel lunch", "Dinner: Zhu Xi family banquet", "Final meal arrangements depend on arrival time and the confirmed proposal"] },
            ], [["Youxi Hotel", "The reference stay is Youxi Hotel, with a welcome ceremony, Zhu Xi tea table, and convalescence facilities supporting the first day's programme."], ["Zhu Xi family banquet", "This welcome dinner is themed around Youxi's Zhu Xi culture and local food. The menu, seating, and service follow the confirmed proposal."]]),
            fullDay("Taining Ancient City and Dajin Lake", "After breakfast, travel to Taining, explore the ancient city, and take an afternoon boat trip through Dajin Lake's Danxia scenery.", "After the visits, check in at Taining Minjiang Hotel. A herbal foot-steaming wellness experience may be arranged as confirmed.", [
                { name: "Taining Ancient City★", text: "The main focus is the Shangshu Residence complex and buildings spanning the early Ming to late Qing periods. Enter lanes and courtyards to examine gatehouses, halls, light wells, timber framing, and stone carving, and learn how a large official residence balanced ritual, family life, and fire prevention within a north-western Fujian town." },
                { name: "Dajin Lake★", text: "After the organic fish banquet, board a cruise through the waterside Danxia landscape. From lake level, watch red cliffs, gorges, caves, and forested peaks change as the boat turns through successive bays. Boarding points, route, and stops depend on water level, weather, and the scenic area's operations." },
                { name: "Herbal foot-steaming experience", text: "A foot-steaming session may be arranged after hotel check-in, creating a restful pause after walking and the cruise. The treatment, duration, suitability, and precautions are explained by the provider. Guests with medical conditions or skin sensitivity should advise the team and decide whether to participate." },
            ], [
                { title: "Accommodation", lines: ["Taining Minjiang Hotel or comparable", "Ctrip five-diamond-rated hotel", "Final room and bed type depend on availability"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch: Dajin Lake organic fish banquet", "Dinner follows the final proposal"] },
            ], [["Taining Ancient City", "The city preserves the Shangshu Residence and buildings from several periods. Streets, courtyards, woodwork, and stonework reveal north-western Fujian culture."], ["Dajin Lake", "A boat journey moves through lake bays, cliffs, and peaks, revealing the layered relationship between water and Danxia landforms."]]),
            fullDay("Zhu Xi Cultural Park and Shujing Tulou", "Return to Youxi after breakfast for Zhu Xi Cultural Park, a Zhu family precepts reading, and Shujing Tulou.", "After the visits, return to Youxi Hotel for dinner. Chess, tea therapy, and other convalescence activities are optional.", [
                { name: "Zhu Xi Cultural Park★", text: "The park follows Zhu Xi's birth and childhood in Youxi through Ziyang Park, Nanxi Academy, Ziyang Lake, and related spaces. See the old camphor, inscriptions, and academy imagery connected with his memory, and place familiar cultural references such as the half-acre pond within Youxi's local intellectual history rather than treating the site as an ordinary park." },
                { name: "Zhu family precepts reading", text: "A short guided reading introduces ideas about self-cultivation, family life, and learning that influenced later family traditions. The purpose is to understand the text in context, not stage a performance. Venue, duration, and facilitation depend on the day's reception." },
                { name: "Shujing Tulou★", text: "Shujing comprises Guangyu and Ruiqing forts, fortified homes built by the Qiu family against bandit attacks. Examine rammed-earth walls, entrances, defensive details, and living spaces, then view the compounds with the surrounding village and mountains to understand how these local forts differ from Fujian's large circular tulou." },
            ], [
                { title: "Accommodation", lines: ["Return to Youxi Hotel", "Listed four-star hotel", "Final room and bed type follow the confirmed proposal"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner follow the final confirmed proposal"] },
            ], [["Zhu Xi Cultural Park", "Ziyang Park, Nanxi Academy, and Ziyang Lake trace Zhu Xi's childhood in Youxi and his Neo-Confucian legacy."], ["Shujing Tulou", "Guangyu and Ruiqing forts, village homes, and mountains form a quiet settlement while illustrating local defensive architecture."]]),
            fullDay("Guifeng Village, village banquet, costume experience, and Shaxian", "After breakfast, visit Guifeng's historic homes, taste traditional maltose, share a village banquet, and try local costume dress-up.", "Autumn harvest displays depend on season and weather and are not guaranteed. Continue to Shaxian Mayan Villa after the visit.", [
                { name: "Guifeng historic village★", text: "Guifeng preserves thirty to forty Ming- and Qing-era homes arranged along the mountain terrain. Walk stone lanes, steps, courtyards, and rooflines while examining timber, brick, and stone details. Chilli, corn, and pumpkin harvest displays may appear in October and November, but depend on season, weather, and village production." },
                { name: "Traditional maltose", text: "Taste local maltose and learn how sprouted grain, simmering, and pulling form the traditional sweet. A live demonstration, tasting portion, and reception format depend on the day's arrangements and are not presented as guaranteed seasonal activities." },
                { name: "Guifeng village banquet", text: "Share lunch around communal tables and experience the village tradition of receiving guests through food. The advisor confirms the actual menu, table arrangement, location, and dietary needs; the website does not invent fixed dishes that have not been confirmed." },
                { name: "Costume experience", text: "Try Guifeng-style dress and take photographs among the old houses, stone lanes, and courtyards. Styles, sizes, make-up, photography, and session length depend on the provider. Participation is optional and does not prevent other guests from continuing the village visit." },
            ], [
                { title: "Accommodation", lines: ["Shaxian Mayan Villa or comparable", "Ctrip three-diamond-rated guesthouse", "Final property, room, and bed type depend on availability"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch: Guifeng village banquet", "Dinner follows the final proposal"] },
            ], [["Guifeng Village", "Dozens of Ming- and Qing-era homes follow the mountain terrain. Autumn harvest displays vary with season, weather, and village production."], ["Guifeng costume experience", "Dress-up is one of the day's optional experiences. Styles, sizes, and service times depend on on-site availability."]]),
            fullDay("Shaxian Old Street, Food Culture City, and departure", "Explore Shaxian Old Street and Food Culture City before your private station transfer.", "Your advisor plans the day backwards from luggage collection, visit duration, and the recommended station arrival time.", [
                { name: "Shaxian Old Street", text: "Walk a restored historic district whose stone-paved lanes carry roughly six centuries of local memory. Examine the scale of traditional courtyards and shops and look closely at brick carvings on the Dafu Residence, where subjects such as fishermen, woodcutters, farmers, and scholars reveal the craft and ideals of central Fujian." },
                { name: "Shaxian Food Culture City", text: "Taste well-known Shaxian snacks such as bianrou wontons and tossed noodles, then connect the food with displays on snack-making and folk culture. The visit explains not only what to eat, but how ingredients, craft, migration, and small businesses helped Shaxian food spread across China. Open exhibits and meal content follow the day's reception." },
                { name: "Station transfer", text: "After the visits, transfer to the station according to the confirmed train. The final service range follows the confirmed proposal." },
            ], [
                { title: "Departure", lines: ["Luggage can be stored at the hotel or carried in the vehicle", "Transfer time follows the confirmed service, traffic, and carrier guidance"] },
                { title: "Meals", lines: ["Breakfast: guesthouse breakfast", "Lunch and dinner depend on departure time and the final proposal"] },
            ], [["Shaxian Old Street", "Stone paving, traditional courtyards, and brick carvings preserve the scale and craft details of a central Fujian town."], ["Shaxian Food Culture City", "Food stalls and displays trace how Shaxian snacks grew from a local tradition into a nationally recognised food culture."]]),
        ],
        hotels: "Youxi Hotel, Taining Minjiang Hotel, Shaxian Mayan Villa, or comparable properties at the stated local ratings, in double rooms",
        tickets: "First-entry tickets for attractions marked ★; included experiences follow the final confirmed proposal"
    },
    "xiamen-tulou-dongshan-5-days": {
        title: "Xiamen, Tulou, and Dongshan · 5 days", description: "A five-day custom route combining Xiamen, World Heritage tulou, and Dongshan Island.",
        eyebrow: "Xiamen city, World Heritage tulou, and island scenery", summaryTitle: "Xiamen, Tulou, and Dongshan: a mountain-and-sea journey",
        intro: "Link Fujian tulou, Dongshan Island, Gulangyu Island, and Nanputuo Temple in a flexible, relaxed journey suited to families, parents with children, and small groups.",
        collage: ["Yunshuiyao", "Yongding Tulou", "Nanmen Bay", "Gulangyu"],
        days: [
            fullDay("Arrival in Xiamen and hotel check-in", "Meet your private driver at the airport or station, then transfer to the hotel to check in and rest.", "Your advisor confirms the service, luggage, and group details in advance. An early arrival can include nearby free time.", [
                { name: "Arrival in Xiamen", text: "Your private driver meets you at the airport or station and takes you to Swiss Grand Xiamen or a comparable hotel." },
            ], [
                { title: "Accommodation", lines: ["Swiss Grand Xiamen or comparable", "Ctrip five-diamond-rated hotel", "Reference room: deluxe Gulangyu sea-view room"] },
                { title: "Meals", lines: ["Meals on arrival day are not included", "Your advisor can recommend places if needed"] },
            ], [["Swiss Grand Xiamen", "This waterfront hotel faces Gulangyu and the Lujiang Channel and is convenient for the ferry terminal, Zhongshan Road, and the onward tulou route."], ["Deluxe Gulangyu sea-view room", "The reference room faces the Lujiang Channel and Gulangyu. Floor, sea-view angle, bed type, and connecting-room availability follow the confirmed proposal."]]),
            fullDay("Yunshuiyao, Yongding Tulou, and Dongshan Island", "After breakfast, travel to Nanjing and Yongding for Yunshuiyao and the Tulou King scenic area, then stay on Dongshan Island.", "The reference departure is 8:00 a.m. The route includes Hegui Lou, Yunshuiyao, the tulou light display, Huaiyuan Lou, and Chengqi Lou; order depends on traffic and reservations.", [
                { name: "Yunshuiyao★", text: "Follow old paths, streams, and banyan trees through Hegui Lou, Huaiyuan Lou, and the village centre." },
                { name: "Yongding Tulou★", text: "Visit Qiaofu Lou and Chengqi Lou, and view Shize Lou and Wuyun Lou from outside." },
                { name: "Continue to Dongshan Island", text: "After the tulou visits, travel to Dongshan Island and check in." },
            ], [
                { title: "Admission and interpretation", lines: ["Yunshuiyao: CNY 90 per person", "Yongding Tulou: CNY 50 per person", "Tulou light display: CNY 10 per person", "Interpretation is arranged at Yunshuiyao and Yongding Tulou"] },
                { title: "Accommodation", lines: ["Dongshan Fulaixi Hotel (Jinluan Bay) or comparable", "Ctrip five-diamond-rated hotel", "Reference room: deluxe sea-view room"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner are not included"] },
            ], [["Yunshuiyao", "Streams, old banyan trees, stone bridges, old paths, and tulou shape this World Heritage village and reveal the relationship between local life and architecture."], ["Chengqi Lou", "This immense four-storey circular tulou contains four concentric rings. Its courtyards and timber structure illustrate defence, communal living, and shared space."]]),
            fullDay("Dongshan coast and return to Xiamen", "After breakfast, follow Dongshan Island's coast through Jinluan Bay, Nanmen Bay, Ding Street, Sufeng Mountain, Yanya Lovers, and Fengdong Rock.", "Return to Xiamen after the visits. Stop order depends on weather, tides, traffic, and opening conditions.", [
                { name: "Jinluan Bay and Nanmen Bay", text: "Walk between open beaches, colourful fishing-village homes, and coastal lanes." },
                { name: "Sufeng Mountain coastal road", text: "Take the reference shuttle along the mountain-and-sea road, passing Yanya Lovers where access allows." },
                { name: "Fengdong Rock★", text: "Visit Dongshan Island's landmark coastal rock and surrounding scenery." },
            ], [
                { title: "Admission and transport", lines: ["Fengdong Rock: CNY 45 per person", "Sufeng Mountain shuttle: CNY 10 per person"] },
                { title: "Accommodation", lines: ["Return to Swiss Grand Xiamen or comparable", "Reference room: deluxe Gulangyu sea-view room"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner are not included"] },
            ], [["Sufeng Mountain coastal road", "Blue railings, wind turbines, cliffs, and the Taiwan Strait appear along the winding road. Stops and access depend on weather, safety, and group fitness."], ["Nanmen Bay", "Colourful hillside homes, a fishing harbour, old lanes, and the curved coast form Dongshan's distinctive landscape."]]),
            fullDay("Gulangyu Island and Zhongshan Road", "After breakfast, take the ferry to Gulangyu, then return to Xiamen for Zhongshan Road in the afternoon.", "Arrive at the terminal 30 to 60 minutes before boarding. Island stops depend on interests, walking ability, and reservations.", [
                { name: "Gulangyu★", text: "Take the return ferry and explore the Most Beautiful Corner, music-related buildings, and the area around Sunlight Rock." },
                { name: "Zhongshan Road", text: "Walk beneath the century-old arcades and explore China City and nearby lanes for local snacks." },
            ], [
                { title: "Admission", lines: ["Gulangyu return ferry: CNY 35 per person", "Other paid island attractions follow the final proposal"] },
                { title: "Accommodation", lines: ["Return to Swiss Grand Xiamen or comparable"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner are not included"] },
            ], [["Gulangyu", "The island combines coast, sloping lanes, historic architecture, and music culture. Sunlight Rock offers views across red-tiled roofs and the Lujiang Channel."], ["Zhongshan Road", "Continuous arcades reflect Xiamen's rainy climate and port-city history. The surrounding lanes are suited to an evening walk and local snacks."]]),
            fullDay("Nanputuo Temple, Huandao Road, and departure", "After breakfast, visit Nanputuo Temple and Huandao Road before your airport or station transfer.", "Your advisor plans the day backwards from luggage collection and the recommended airport or station arrival time.", [
                { name: "Nanputuo Temple", text: "Visit the temple buildings and cultural spaces under current access and reservation rules." },
                { name: "Huandao Road", text: "Follow Xiamen's coastal road and stop for a walk and photographs in officially open areas." },
                { name: "Airport or station transfer", text: "After the visits, transfer to Xiamen airport or station." },
            ], [
                { title: "Departure", lines: ["Transfer time follows the confirmed service and traffic conditions"] },
                { title: "Meals", lines: ["Breakfast: hotel breakfast", "Lunch and dinner depend on departure time and are not included"] },
            ], [["Nanputuo Temple", "Below Wulao Peak, the temple's halls and courtyards reflect southern Fujian Buddhist architecture and its relationship with the modern city."], ["Huandao Road", "The road links beaches, boardwalks, coastal parks, and fishing villages. The selected section depends on weather and departure time."]]),
        ],
        hotels: "Swiss Grand Xiamen, Dongshan Fulaixi Hotel, or comparable Ctrip five-diamond-rated hotels, in double rooms", tickets: "Yunshuiyao, Yongding Tulou, and Fengdong Rock first-entry tickets, plus the tulou light display, Sufeng Mountain shuttle, and Gulangyu return ferry", guide: "Interpretation at Yunshuiyao and Yongding Tulou, during the times confirmed in the final proposal"
    },
    "minnan-meizhou-tulou-7-days": {
        title: "Southern Fujian, Meizhou, and Tulou · 7 days", description: "A seven-day custom journey through Quanzhou, Meizhou Island, Fujian Tulou, Dongshan Island, and Xiamen.",
        eyebrow: "Maritime heritage, Mazu culture, tulou, and island coast", summaryTitle: "Southern Fujian, Meizhou Island, and Tulou",
        intro: "Link Quanzhou, Meizhou Island, Fujian tulou, Dongshan Island, and Xiamen in a relaxed multi-city journey suited to families, older travellers, and small groups of friends.",
        collage: ["Wulin Village", "Mazu Ancestral Temple", "Yongding Tulou", "Gulangyu"],
        days: [
            fullDay("Arrival in Xiamen or Quanzhou", "Meet your private driver in Xiamen or Quanzhou and transfer to the corresponding hotel.", "Your advisor confirms the arrival city, service, luggage, and group details, then arranges accommodation suited to the following Quanzhou itinerary.", [{ name: "Arrival in Xiamen or Quanzhou", text: "Your private driver meets you at the confirmed arrival point and takes you to the hotel. The first day is reserved for rest." }], [{ title: "Accommodation", lines: ["Xiamen: Swiss Grand Xiamen or comparable, deluxe Gulangyu sea-view room", "Quanzhou: Crowne Plaza Quanzhou Riverside or comparable, business room", "Both are reference Ctrip five-diamond-rated hotels"] }, { title: "Meals", lines: ["Meals on arrival day are not included"] }], [["Swiss Grand Xiamen", "This is the reference hotel when arriving in Xiamen. Final room, floor, view, and bed type depend on availability."], ["Crowne Plaza Quanzhou Riverside", "This is the reference hotel when arriving in Quanzhou. Final accommodation follows the arrival city and confirmed proposal."]]),
            fullDay("Wulin Village, Gold Coast, Luojia Temple, Kaiyuan Temple, and West Street", "After breakfast, move from an overseas-Chinese village to a coastal temple, then return to Quanzhou's Kaiyuan Temple and West Street.", "The reference departure is 9:00 a.m. The route combines architecture, coast, and old-city life; order depends on traffic, opening hours, and walking ability.", [{ name: "Wulin Traditional Village", text: "Walk along stone lanes and observe southern Fujian mansions and hybrid overseas-Chinese architecture." }, { name: "Gold Coast and Luojia Temple", text: "Follow the coast and experience the temple and rocky seascape within officially open and safe areas." }, { name: "Kaiyuan Temple, West Street, and Bell Tower", text: "Visit the East and West Pagodas and temple buildings, then walk around West Street and the Bell Tower." }], [{ title: "Accommodation", lines: ["Crowne Plaza Quanzhou Riverside or comparable", "Ctrip five-diamond-rated hotel", "Reference room: business room"] }, enSelfPaidMeals], [["Wulin Traditional Village", "Southern Fujian mansions and hybrid overseas-Chinese homes preserve Quanzhou's modern architectural and migration history."], ["Luojia Temple", "The temple meets a rocky coast on three sides. Visitors must follow current access and coastal safety rules."]]),
            fullDay("Quanzhou, Meizhou Island, and Xiamen", "After breakfast, travel to Wenjia Wharf in Putian, take the ferry to Meizhou Island, and use a private sightseeing vehicle on the island.", "Visit Meiyu Chaoyin, the Mazu Ancestral Temple, and Tianfei's Birthplace before continuing to Xiamen.", [{ name: "Meizhou Island★", text: "Take the return ferry and use the reference private sightseeing vehicle to connect the island's attractions." }, { name: "Meiyu Chaoyin", text: "Observe a coastline shaped by wind erosion, sea erosion, and tides." }, { name: "Mazu Ancestral Temple and Tianfei's Birthplace", text: "Learn about Meizhou Island's Mazu heritage and related historic sites." }], [{ title: "Admission and transport", lines: ["Meizhou Island admission and ferry: CNY 125 per person", "Reference private sightseeing vehicle: CNY 200 per vehicle"] }, { title: "Accommodation", lines: ["Swiss Grand Xiamen or comparable", "Ctrip five-diamond-rated hotel", "Reference room: deluxe Gulangyu sea-view room"] }, enSelfPaidMeals], [["Meiyu Chaoyin", "Wind, sea erosion, and tides shape this northern Meizhou Island coastline. The visit follows current access conditions."], ["Mazu Ancestral Temple", "This is an important cultural landmark on Meizhou Island. Visitors should respect local beliefs and religious-site etiquette."]]),
            fullDay("Xiamen, Yunshuiyao, Yongding Tulou, and Dongshan Island", "After breakfast, travel to Nanjing and Yongding for Yunshuiyao and the Tulou King scenic area, then stay on Dongshan Island.", "The reference route includes Hegui Lou, Huaiyuan Lou, Chengqi Lou, Qiaofu Lou, and nearby tulou; order depends on traffic and reservations.", [{ name: "Yunshuiyao★", text: "Follow old paths, streams, and banyan trees through Hegui Lou, Huaiyuan Lou, and the village centre." }, { name: "Yongding Tulou★", text: "Visit Chengqi Lou and Qiaofu Lou, and view Shize Lou and Wuyun Lou from outside." }], [{ title: "Admission and interpretation", lines: ["Yunshuiyao: CNY 90 per person", "Yongding Tulou: CNY 50 per person", "Tulou light display: CNY 10 per person", "Interpretation is included at both scenic areas"] }, { title: "Accommodation", lines: ["Dongshan Fulaixi Hotel or comparable", "Ctrip five-diamond-rated hotel", "Reference room: deluxe sea-view room"] }, enSelfPaidMeals], [["Yunshuiyao", "Streams, banyan trees, stone bridges, and tulou connect the village. Time is reserved for interpretation, architecture, and photographs."], ["Yongding Tulou", "Chengqi Lou's immense circular courtyards and timber structure illustrate traditional Hakka communal life."]]),
            fullDay("Sufeng Mountain, Jinluan Bay, Fengdong Rock, and Nanmen Bay", "After breakfast, follow Dongshan Island's coast through Sufeng Mountain, Jinluan Bay, Fengdong Rock, and Nanmen Bay, then return to Xiamen.", "Coastal stop order depends on weather, tides, traffic, and opening conditions.", [{ name: "Sufeng Mountain coastal road", text: "Take the reference shuttle along the mountain-and-sea road, passing Yanya Lovers where access allows." }, { name: "Jinluan Bay and Nanmen Bay", text: "Walk between open beaches, colourful fishing-village homes, and coastal lanes." }, { name: "Fengdong Rock★", text: "Visit Dongshan Island's landmark coastal rock." }], [{ title: "Admission and transport", lines: ["Fengdong Rock: CNY 45 per person", "Sufeng Mountain shuttle: CNY 10 per person"] }, { title: "Accommodation", lines: ["Swiss Grand Xiamen or comparable", "Ctrip five-diamond-rated hotel"] }, enSelfPaidMeals], [["Sufeng Mountain coastal road", "The road runs between mountain and sea. Stops depend on weather, traffic, and on-site safety requirements."], ["Nanmen Bay", "Colourful homes, a fishing harbour, and the curved coast form one of Dongshan Island's most distinctive views."]]),
            fullDay("Gulangyu Island and Zhongshan Road", "After breakfast, take the ferry to Gulangyu, then return to Xiamen for Zhongshan Road in the afternoon.", "Arrive at the terminal 30 to 60 minutes before boarding. Island stops depend on interests, walking ability, and reservations.", [{ name: "Gulangyu★", text: "Take the return ferry and explore the Most Beautiful Corner, music-related buildings, and the area around Sunlight Rock." }, { name: "Zhongshan Road", text: "Walk beneath the century-old arcades and explore China City and nearby lanes for local snacks." }], [{ title: "Admission", lines: ["Gulangyu return ferry: CNY 35 per person", "Other paid island attractions follow the final proposal"] }, { title: "Accommodation", lines: ["Return to Swiss Grand Xiamen or comparable"] }, enSelfPaidMeals], [["Gulangyu", "Island lanes, historic buildings, and music culture shape the visit. Other paid attractions depend on the final proposal."], ["Zhongshan Road", "Arcade architecture, local snacks, and commercial lanes form the experience of Xiamen's old city."]]),
            fullDay("Nanputuo Temple, Huandao Road, and departure", "After breakfast, visit Nanputuo Temple and Huandao Road before your airport or station transfer.", "Your advisor plans the day backwards from luggage collection and the recommended airport or station arrival time.", [{ name: "Nanputuo Temple", text: "Visit the temple buildings and cultural spaces under current access and reservation rules." }, { name: "Huandao Road", text: "Follow Xiamen's coastal road and stop for a walk and photographs in officially open areas." }, { name: "Airport or station transfer", text: "After the visits, transfer to Xiamen airport or station." }], [{ title: "Departure", lines: ["Transfer time follows the confirmed service and traffic conditions"] }, enSelfPaidMeals], [["Nanputuo Temple", "This representative Buddhist site in Xiamen must be visited according to current access rules and religious-site etiquette."], ["Huandao Road", "The road connects several coastal landscapes. The selected section depends on weather, traffic, and departure time."]]),
        ],
        hotels: "Swiss Grand Xiamen, Crowne Plaza Quanzhou Riverside, Dongshan Fulaixi Hotel, or comparable Ctrip five-diamond-rated hotels, in double rooms", tickets: "Reference admission and transport for Meizhou Island, Yunshuiyao, Yongding Tulou, Fengdong Rock, the tulou light display, Sufeng Mountain shuttle, and Gulangyu ferry", guide: "Chinese-language interpretation at Yunshuiyao and Yongding Tulou"
    },
    "fujian-grand-tour-8-days": {
        title: "Fujian Grand Tour · 8 days", description: "An eight-day custom journey through Fuzhou, Meizhou Island, Quanzhou, Fujian Tulou, Dongshan Island, and Xiamen.",
        eyebrow: "Historic Fuzhou, maritime Quanzhou, tulou, and the coast", summaryTitle: "Fuzhou, Xiamen, Zhangzhou, Quanzhou, and Putian highlights",
        intro: "Link Fuzhou, Meizhou Island, Quanzhou, Fujian tulou, Dongshan Island, and Xiamen in an in-depth, relaxed journey suited to families and small groups of friends.",
        collage: ["Yantai Hill", "Mazu Ancestral Temple", "Luojia Temple", "Gulangyu"],
        days: [
            fullDay("Arrival in Fuzhou", "Meet your private driver at Fuzhou airport or station and transfer to the hotel to rest.", "Your advisor confirms the service, luggage, and group details in advance. An early arrival can include nearby free time.", [{ name: "Arrival in Fuzhou", text: "Your private driver takes you to Fujian Foreign Trade Centre C&D Hotel or a comparable property." }], [{ title: "Accommodation", lines: ["Fujian Foreign Trade Centre C&D Hotel or comparable", "Ctrip five-diamond-rated hotel", "Reference room: standard twin"] }, { title: "Meals", lines: ["Meals on arrival day are not included"] }], [["Fujian Foreign Trade Centre C&D Hotel", "The reference first-night hotel is convenient for the next day's Fuzhou city route. Final accommodation depends on availability."], ["Standard twin room", "Floor, orientation, view, and bed type depend on room availability and the signed agreement."]]),
            fullDay("Fujian Museum, Yantai Hill, and Three Lanes and Seven Alleys", "After breakfast, move from Fujian Museum to Yantai Hill and Fuzhou's traditional lanes.", "Museum opening days and reservations follow current official rules. Visit order depends on access and traffic.", [{ name: "Fujian Museum", text: "Visit exhibitions on Fujian's history and culture; gallery access and reservations follow current rules." }, { name: "Yantai Hill", text: "Walk through a historic district of former consulates, trading houses, churches, and residences." }, { name: "Three Lanes and Seven Alleys", text: "Explore traditional lanes, historic homes, and local food in Fuzhou's old city." }], [{ title: "Accommodation", lines: ["Return to Fujian Foreign Trade Centre C&D Hotel or comparable"] }, enSelfPaidMeals], [["Yantai Hill", "Former consulates, trading houses, churches, and residences reflect Fuzhou's modern urban history."], ["Three Lanes and Seven Alleys", "The district preserves its traditional lane pattern and historic buildings, with time for architecture and local food."]]),
            fullDay("Fuzhou, Meizhou Island, and Quanzhou", "After breakfast, travel to Wenjia Wharf, take the ferry to Meizhou Island, then continue to Quanzhou.", "A reference sightseeing vehicle connects Meiyu Chaoyin, the Mazu Ancestral Temple, Tianfei's Birthplace, and other confirmed areas.", [{ name: "Meizhou Island★", text: "Take the return ferry and use the reference private sightseeing vehicle to connect the island's attractions." }, { name: "Meiyu Chaoyin", text: "Observe a coastline shaped by wind erosion, sea erosion, and tides." }, { name: "Mazu Ancestral Temple and Tianfei's Birthplace", text: "Learn about Meizhou Island's Mazu heritage and related historic sites." }], [{ title: "Admission and transport", lines: ["Meizhou Island admission and ferry: CNY 125 per person", "Reference private sightseeing vehicle: CNY 200 per vehicle"] }, { title: "Accommodation", lines: ["Crowne Plaza Quanzhou Riverside or comparable", "Ctrip five-diamond-rated hotel", "Reference room: business room"] }, enSelfPaidMeals], [["Meiyu Chaoyin", "Wind, sea erosion, and tides shape this northern Meizhou Island coastline."], ["Mazu Ancestral Temple", "Visitors should respect local beliefs and religious-site etiquette at this important cultural landmark."]]),
            fullDay("Wulin Village, Gold Coast, Luojia Temple, Kaiyuan Temple, and West Street", "After breakfast, connect overseas-Chinese village architecture, a coastal temple, and Quanzhou Old City.", "Order depends on traffic, opening hours, and walking ability.", [{ name: "Wulin Traditional Village", text: "Observe southern Fujian mansions and hybrid overseas-Chinese architecture." }, { name: "Gold Coast and Luojia Temple", text: "Follow the coast and experience the temple and rocky seascape in safe, open areas." }, { name: "Kaiyuan Temple, West Street, and Bell Tower", text: "Visit the East and West Pagodas, then walk around West Street and the Bell Tower." }], [{ title: "Accommodation", lines: ["Return to Crowne Plaza Quanzhou Riverside or comparable"] }, enSelfPaidMeals], [["Wulin Traditional Village", "Southern Fujian mansions and hybrid homes preserve Quanzhou's modern architectural history."], ["Luojia Temple", "The temple meets a rocky coast on three sides. Follow current access and coastal safety rules."]]),
            fullDay("Quanzhou, Yunshuiyao, Yongding Tulou, and Dongshan Island", "After breakfast, travel to Nanjing and Yongding for Yunshuiyao and the Tulou King scenic area, then stay on Dongshan Island.", "The route includes Hegui Lou, Huaiyuan Lou, Chengqi Lou, Qiaofu Lou, and nearby tulou; order depends on traffic and reservations.", [{ name: "Yunshuiyao★", text: "Follow old paths, streams, and banyan trees through Hegui Lou, Huaiyuan Lou, and the village centre." }, { name: "Yongding Tulou★", text: "Visit Chengqi Lou and Qiaofu Lou, and view Shize Lou and Wuyun Lou from outside." }], [{ title: "Admission and interpretation", lines: ["Yunshuiyao: CNY 90 per person", "Yongding Tulou: CNY 50 per person", "Tulou light display: CNY 10 per person", "Interpretation is included at both scenic areas"] }, { title: "Accommodation", lines: ["Dongshan Fulaixi Hotel or comparable", "Ctrip five-diamond-rated hotel", "Reference room: deluxe sea-view room"] }, enSelfPaidMeals], [["Yunshuiyao", "Streams, banyan trees, stone bridges, and tulou connect the village, with time for interpretation and photographs."], ["Yongding Tulou", "Chengqi Lou's immense circular courtyards and timber structure illustrate traditional Hakka communal life."]]),
            fullDay("Dongshan Island and Xiamen", "After breakfast, follow Dongshan Island's coast through Sufeng Mountain, Jinluan Bay, Fengdong Rock, and Nanmen Bay, then continue to Xiamen.", "Coastal stop order depends on weather, tides, traffic, and opening conditions.", [{ name: "Sufeng Mountain coastal road", text: "Take the reference shuttle along the mountain-and-sea road, passing Yanya Lovers where access allows." }, { name: "Jinluan Bay and Nanmen Bay", text: "Walk between open beaches, colourful fishing-village homes, and coastal lanes." }, { name: "Fengdong Rock★", text: "Visit Dongshan Island's landmark coastal rock." }], [{ title: "Admission and transport", lines: ["Fengdong Rock: CNY 45 per person", "Sufeng Mountain shuttle: CNY 10 per person"] }, { title: "Accommodation", lines: ["Swiss Grand Xiamen or comparable", "Ctrip five-diamond-rated hotel", "Reference room: deluxe Gulangyu sea-view room"] }, enSelfPaidMeals], [["Sufeng Mountain coastal road", "The road runs between mountain and sea. Stops depend on weather, traffic, and safety requirements."], ["Nanmen Bay", "Colourful homes, a fishing harbour, and the curved coast form a distinctive Dongshan Island view."]]),
            fullDay("Gulangyu Island and Zhongshan Road", "After breakfast, take the ferry to Gulangyu, then return to Xiamen for Zhongshan Road.", "Arrive at the terminal 30 to 60 minutes before boarding. Island stops depend on interests, walking ability, and reservations.", [{ name: "Gulangyu★", text: "Take the return ferry and explore the Most Beautiful Corner, music-related buildings, and the area around Sunlight Rock." }, { name: "Zhongshan Road", text: "Walk beneath the century-old arcades and explore China City and nearby lanes for local snacks." }], [{ title: "Admission", lines: ["Gulangyu return ferry: CNY 35 per person", "Other paid island attractions follow the final proposal"] }, { title: "Accommodation", lines: ["Return to Swiss Grand Xiamen or comparable"] }, enSelfPaidMeals], [["Gulangyu", "Island lanes, historic buildings, and music culture shape the visit. Other paid attractions follow the final proposal."], ["Zhongshan Road", "Arcade architecture, local snacks, and commercial lanes form the experience of Xiamen's old city."]]),
            fullDay("Nanputuo Temple, Huandao Road, and departure", "After breakfast, visit Nanputuo Temple and Huandao Road before your airport or station transfer.", "Your advisor plans the day backwards from luggage collection and the recommended airport or station arrival time.", [{ name: "Nanputuo Temple", text: "Visit the temple buildings and cultural spaces under current access and reservation rules." }, { name: "Huandao Road", text: "Follow Xiamen's coastal road and stop for a walk and photographs in officially open areas." }, { name: "Airport or station transfer", text: "After the visits, transfer to Xiamen airport or station." }], [{ title: "Departure", lines: ["Transfer time follows the confirmed service and traffic conditions"] }, enSelfPaidMeals], [["Nanputuo Temple", "This representative Buddhist site must be visited according to current access rules and religious-site etiquette."], ["Huandao Road", "The selected coastal section depends on weather, traffic, and departure time."]]),
        ],
        hotels: "Fujian Foreign Trade Centre C&D Hotel, Crowne Plaza Quanzhou Riverside, Dongshan Fulaixi Hotel, Swiss Grand Xiamen, or comparable Ctrip five-diamond-rated hotels, in double rooms", tickets: "Reference admission and transport for Meizhou Island, Yunshuiyao, Yongding Tulou, Fengdong Rock, the tulou light display, Sufeng Mountain shuttle, and Gulangyu ferry", guide: "Chinese-language interpretation at Yunshuiyao and Yongding Tulou"
    }
};
const tw: Record<NonXiamenRouteId, RouteConfig> = {
    "quanzhou-4-days": {
        title: "泉州四日訂製遊", description: "泉州古城、海絲文化、沿海村落與地方生活的4天3晚訂製遊行程。", eyebrow: "走進古城街巷、海絲文化與泉州海岸", summaryTitle: "海絲遺韻・煙火人間", intro: "為家庭與文化旅行者設計的泉州慢遊，以靈活節奏走訪古城、多元信仰、海岸與僑鄉村落。", collage: ["洛伽寺", "開元寺", "蟳埔村", "崇武古城"],
        days: [
            fullDay("抵達泉州・入住酒店", "抵達泉州後安排專車接機或接站，送往酒店辦理入住，第一天以休息和適應為主。", "服務顧問會提前核對航班或車次、行李數量與同行成員，並確認接送地點、車輛與等候方式。", [
                { name: "抵達泉州", text: "抵達泉州機場或車站後，由專車送往酒店休息；如較早抵達，可按體力安排附近散步。" },
            ], [
                { title: "住宿安排", lines: ["首選泉州濱江皇冠假日酒店或同級", "攜程網評五鑽酒店", "參考房型：商務房", "最終酒店、房型與床型以實際可訂情況及合約為準"] },
                { title: "餐食安排", lines: ["抵達當天餐食自理", "服務顧問可按需要推薦"] },
            ], [["泉州濱江皇冠假日酒店", "參考住宿為泉州濱江皇冠假日酒店或同等級酒店，方便銜接古城與濱海行程。最終安排以實際可訂情況及合約為準。"], ["商務房參考", "具體樓層、朝向、景觀與床型由出行日期的實際房況決定。"]]),
            fullDay("關帝廟・清淨寺・蟳埔・開元寺・西街", "酒店早餐後乘專車前往泉州古城，從多元信仰與簪花民俗走到開元寺和西街。", "當天以古城文化為主，具體順序會按開放時間、交通與同行成員步行體力調整。", [
                { name: "通淮關岳廟", text: "走進泉州香火鼎盛的關岳廟，觀察傳統廟宇建築與本地信俗。" },
                { name: "清淨寺★", text: "參觀中國現存較早的伊斯蘭教寺院之一，了解海上貿易留下的多元文化印記。" },
                { name: "蟳埔村", text: "感受漁村生活與簪花圍文化；如須安排簪花體驗，可在確認方案時另行提出。" },
                { name: "開元寺", text: "參觀東西塔與寺院建築，認識泉州古城具代表性的佛教文化空間。" },
                { name: "西街與鐘樓", text: "沿西街慢行，在傳統街巷、地方小吃與古城生活之間自由停留。" },
            ], [
                { title: "門票安排", lines: ["清淨寺參考門票：3元／人", "實際開放、預約與票價以出行日期的現場規則為準"] },
                { title: "住宿安排", lines: ["遊覽結束後返回泉州濱江皇冠假日酒店或同級休息"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理，可由服務顧問按需要推薦"] },
            ], [["開元寺", "開元寺、東西塔、寺院格局與海絲歷史共同構成泉州城市記憶。行程會保留建築觀察、講解與自由拍照時間。"], ["蟳埔村", "蟳埔村以漁村生活與簪花圍文化受到關注，可按個人意願安排簪花體驗與拍攝。"]]),
            fullDay("非遺館・洛陽橋・崇武古城", "從泉州非遺展示走向跨海古橋與海防古城，串聯手藝、交通史與濱海文化。", "泉州非遺博物館通常逢星期一閉館，會按實際開放日期調整並提前確認預約要求。", [
                { name: "泉州非遺博物館", text: "透過代表性展品了解泉州傳統工藝與非物質文化遺產；開放與預約以官方規則為準。" },
                { name: "洛陽橋", text: "步行觀察古代跨海樑式石橋的結構與周邊水域，認識泉州交通及海洋文明。" },
                { name: "崇武古城★", text: "參觀擁有六百年歷史的海防古城，感受石城、海岸與惠安地方文化。" },
            ], [
                { title: "門票安排", lines: ["崇武古城參考門票：40元／人", "博物館開放、預約及景區票價以出行日期的實際規則為準"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理，可由服務顧問按需要推薦"] },
            ], [["洛陽橋", "洛陽橋是中國現存較早的跨海樑式石橋之一，可從橋樑結構與潮汐環境認識泉州古代交通及海洋文明。"], ["崇武古城", "城牆、石厝與濱海景觀共同形成獨特空間，也承載惠安地區長期的海洋生活記憶。"]]),
            fullDay("洛伽寺・紅塔灣・梧林傳統村落・返程", "最後一天沿泉州海岸與僑鄉村落遊覽，再按航班或車次安排送機送站。", "顧問會把酒店取行李、景點停留與建議抵達機場或車站的時間一併納入安排。", [
                { name: "洛伽寺", text: "寺院位於海邊礁石之上，可在安全開放範圍內感受海岸與閩南建築相接的景觀。" },
                { name: "紅塔灣", text: "沿海灣短暫停留，天氣合適時可散步看海；具體時間以返程安排為準。" },
                { name: "梧林傳統村落", text: "走進保留閩南大厝、中西合璧民居與僑鄉建築的傳統村落。" },
                { name: "專車送機或送站", text: "遊覽結束後送往泉州晉江國際機場或泉州站，具體範圍以最終方案為準。" },
            ], [
                { title: "行李與返程", lines: ["行李可安排酒店寄存或隨車攜帶", "送機送站時間按實際班次、路況與承運方建議確認"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：按返程時間自理"] },
            ], [["洛伽寺", "洛伽寺三面臨海，寺院建築與礁石海岸相接。潮汐會改變寺院與海面的空間關係，參觀時須遵守開放與安全要求。"], ["梧林傳統村落", "村落保留閩南大厝、中西合璧民居與僑鄉建築，可從街巷認識泉州近現代建築文化與華僑歷史。"]]),
        ],
        hotels: "泉州濱江皇冠假日酒店或同等級攜程網評五鑽酒店雙人房",
        tickets: "最終行程中明確標註★的景點首道門票",
        excluded: [
            "出發地至泉州的大交通費用，包括機票、高鐵票等。",
            "酒店押金、洗衣、電話、飲品、行李搬運、延遲退房及自由活動期間的個人消費。",
            "因不可抗力、個人行程變更、單房差或加床產生的額外費用。",
            "合約及最終行程中未約定由旅行社承擔的項目。",
        ]
    },
    "zhangzhou-3-days": {
        title: "漳州土樓三日訂製遊", description: "漳州3天2晚訂製遊參考行程，包含漳州古城、雲水謠、永定土樓與東山島海岸。", eyebrow: "走進世遺土樓與東山海岸，感受漳州古城、客家聚落和閩南山海", summaryTitle: "世遺土樓・東山海岸", intro: "從漳州古城到世界遺產土樓，再走向東山島海岸，以三天時間串聯閩南古城、客家聚落與山海風光。", collage: ["漳州古城", "雲水謠", "永定土樓", "南門灣"],
        days: [
            fullDay("抵達漳州・入住酒店・夜遊古城", "抵達漳州後安排專車接機或接站，送往酒店辦理入住；傍晚可按抵達時間與體力夜遊漳州古城。", "服務顧問會提前核對航班或車次、行李數量及同行成員，並在出發前確認接送地點、車輛與等候方式。", [
                { name: "文昌門", text: "從建築風格獨特的文昌門進入古城，在城門與街巷銜接處認識漳州古城的發展變遷。" },
                { name: "中閩百匯觀景台", text: "乘觀光電梯到十二樓，從高處俯瞰漳州古城的街巷、騎樓與屋頂全景。" },
                { name: "古城記憶館", text: "免費參觀古城記憶館，透過老照片與生活陳設了解漳州古城過去的城市生活。" },
                { name: "漳州文廟", text: "參觀漳州城內規模較大的古建築群，並在寫有「漳州」的紅牆前停留拍照。" },
                { name: "威鎮閣", text: "走訪擁有四百多年歷史的八卦樓，夜間通常約七點半亮燈，實際以現場安排為準。" },
                { name: "古城特色小吃", text: "可按喜好品嘗漳州滷麵、沙茶麵、豆花粉絲、四果湯、麻糍、生燙、雞仔胎與片仔癀甘蔗汁。" },
            ], [
                { title: "住宿安排", lines: ["參考漳州薌江酒店（古城店）或同級", "攜程網評五鑽酒店", "參考房型：商務雙床房", "最終酒店、房型和床型以實際可訂情況及合約為準"] },
                { title: "餐食安排", lines: ["抵達當天餐食自理", "服務顧問可按口味、飲食禁忌與營業情況推薦古城周邊小吃"] },
            ], [["漳州薌江酒店", "參考住宿為漳州薌江酒店古城店或同等級酒店，方便銜接夜遊古城和次日土樓行程。最終酒店與房型以實際可訂情況及合約為準。"], ["商務雙床房參考", "參考房型為商務雙床房，具體樓層、朝向、床型及設施以出行日期的實際房況和最終確認方案為準。"]]),
            fullDay("雲水謠古鎮・永定土樓・入住東山島", "酒店早餐後前往南靖雲水謠與永定土樓群，在古鎮水岸、夯土建築與客家聚落之間展開一天。", "參考上午8時出發，先遊雲水謠，再前往永定土樓王景區；實際順序會按交通、預約及團隊步行體力調整。", [
                { name: "雲水謠古鎮★", text: "沿古道與溪流遊覽和貴樓、雲水謠古鎮、土樓之光與懷遠樓，認識土樓建築及聚落生活。" },
                { name: "永定土樓王★", text: "參觀承啟樓、僑福樓，並從外部觀察世澤樓與五雲樓，感受不同形制土樓組成的傳統聚落。" },
                { name: "前往東山島", text: "結束土樓遊覽後乘車前往東山島，辦理酒店入住並休息。" },
            ], [
                { title: "門票與講解", lines: ["雲水謠參考門票：90元／人", "永定土樓王參考門票：50元／人", "土樓之光參考費用：10元／人", "安排雲水謠及永定土樓景區講解"] },
                { title: "住宿安排", lines: ["參考東山福萊喜酒店金鑾灣店或同級", "攜程網評五鑽酒店", "參考房型：豪華海景房"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理，可由服務顧問按需要推薦"] },
            ], [["雲水謠古鎮", "雲水謠以溪流、古榕、石橋與土樓聚落相連。行程串聯和貴樓、懷遠樓及古鎮核心區域，保留講解、建築觀察與自由拍照時間。"], ["永定土樓王", "承啟樓規模宏大，被稱為土樓王。透過圓樓院落、木構空間與周邊土樓群，可更完整地理解客家聚族而居的生活方式。"]]),
            fullDay("金鑾灣・南門灣・頂街・蘇峰山・風動石・返程", "最後一天沿東山島海岸展開，從金鑾灣、南門灣走到蘇峰山與風動石，再按返程班次安排送站。", "參考傍晚18時前後結束遊覽並送往雲霄站或漳州站，實際停留時間會按車次、路況及景區開放情況倒推。", [
                { name: "金鑾灣與南門灣", text: "沿海灣觀景散步，再走進頂街，感受東山島海岸、街巷與漁港生活。" },
                { name: "蘇峰山環島路", text: "沿山海相接的環島路遊覽，並在安全開放範圍內經過巖雅戀人等海岸景觀。" },
                { name: "風動石★", text: "參觀東山島代表性景點風動石，具體遊覽範圍與開放規則以當天現場為準。" },
                { name: "專車送站", text: "遊覽結束後送往雲霄站或漳州站，具體接送範圍和時間以最終方案為準。" },
            ], [
                { title: "門票與交通", lines: ["風動石參考門票：45元／人", "蘇峰山參考接駁費用：10元／人", "實際票價、開放和接駁規則以出行日期為準"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：按返程時間自理"] },
            ], [["南門灣", "南門灣沿山臨海，彩色民居、漁港與彎曲海岸線共同形成東山島具辨識度的濱海景觀。行程會留出沿岸散步和拍照時間。"], ["蘇峰山", "蘇峰山環島路一側臨山、一側向海，可從不同高度觀察海灣與島嶼輪廓。實際停靠位置會按天氣、交通和現場安全要求調整。"]]),
        ],
        hotels: "漳州薌江酒店、東山福萊喜酒店或同等級攜程網評五鑽酒店雙人房",
        tickets: "最終行程中明確標註★的景點首道門票及列明的接駁項目",
        guide: "雲水謠及永定土樓景區講解，具體服務時段以最終行程為準"
    },
    "fuzhou-pingtan-4-days": {
        title: "福州平潭四日訂製遊", description: "結合平潭風車海岸與福州歷史街區的4天3晚訂製遊行程。", eyebrow: "從平潭風車海岸走進福州千年坊巷", summaryTitle: "海島風光・古城人文", intro: "把平潭的風車海岸與福州的傳統坊巷放在同一段旅程裡，適合希望以私人車輛靈活慢遊的家庭及朋友小團。", collage: ["長江澳", "北部灣", "煙台山", "三坊七巷"],
        days: [
            fullDay("抵達福州・入住酒店", "抵達福州後安排專車接機或接站，送往酒店辦理入住，第一天以休息和適應為主。", "服務顧問會提前核對航班或車次、行李數量及同行成員，並在出發前確認接送地點、車輛與等候方式。", [
                { name: "抵達福州", text: "抵達福州機場或車站後，由專車送往酒店休息；較早抵達時可按體力安排附近自由活動。" },
            ], [
                { title: "住宿安排", lines: ["參考福建外貿中心悅華酒店（三坊七巷店）或同級", "攜程網評五鑽酒店", "參考房型：標準雙床房", "最終酒店、房型和床型以實際可訂情況及合約為準"] },
                { title: "餐食安排", lines: ["抵達當天餐食自理", "服務顧問可按需要推薦"] },
            ], [["福建外貿中心悅華酒店", "參考住宿為福建外貿中心悅華酒店三坊七巷店或同等級酒店，方便銜接福州市區與平潭行程。最終酒店和房型以實際可訂情況及合約為準。"], ["標準雙床房參考", "參考房型為標準雙床房，具體樓層、朝向、景觀及床型由出行日期的實際房態決定，並以最終確認方案為準。"]]),
            fullDay("長江澳風車田・北部灣廊道・和平村・仙人井", "酒店早餐後前往平潭，在風車海岸、濱海廊道、傳統村落與海蝕奇觀之間展開一天。", "當天路線沿平潭北部海岸展開，具體遊覽順序會按交通、景區開放、預約和天氣情況調整。", [
                { name: "長江澳風車田", text: "長江澳是平潭三大濱海沙灘之一。先從海岸觀景位置看成排風力機組沿山脊與海灣展開，再走到沙灘近距離欣賞風車、浪線和漁船形成的層次；這裡適合沿海慢行、拍攝風車海岸，也能看見平潭如何把海島風貌與風力能源結合在一起。" },
                { name: "北部灣廊道", text: "沿約33公里的北部濱海廊道行駛與停靠，沿線可見長江澳風車田、南島語族考古研究基地及殼丘頭遺址相關區域。行程不會只在車上經過，而會按天氣與路況選擇視野開闊的觀景台和村落節點下車，看礁石海岸、梯田、石厝與海灣連續變化。" },
                { name: "和平村", text: "和平村保留平潭海島村落的石厝、窄巷和面向海風的聚落形態。可在村中慢行，觀察居民如何用花崗岩砌牆、壓瓦以抵禦強風，再到彩色巨石與海岸相接的區域拍照，感受安靜村落與開闊海面的反差。" },
                { name: "仙人井★", text: "仙人井是海浪沿岩體裂隙長期沖刷形成的海蝕豎井，兄弟站資料標示井口約33米寬、約37米深。沿正式開放步道可觀察井壁、浪湧與周邊海蝕崖，從不同角度理解海蝕洞穴逐漸坍塌、擴大成豎井的地貌過程；大風或浪高時以現場安全管理為準。" },
            ], [
                { title: "門票安排", lines: ["仙人井參考門票：35元／人", "景區開放、預約及實際票價以出行日期為準"] },
                { title: "住宿安排", lines: ["參考平潭國惠國際酒店或同級", "攜程網評五鑽酒店", "參考房型：標準雙人房"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理，可由服務顧問按需要推薦"] },
            ], [["長江澳風車田", "長江澳是平潭具代表性的濱海沙灘，風車、海岸與開闊天空共同形成富有層次的山海景觀，也是適合慢行和攝影的區域。"], ["北部灣廊道", "北部灣廊道沿平潭北部海岸延伸，連接多個濱海村落和自然、人文節點。行程會按天氣與交通選擇合適的觀景位置。"]]),
            fullDay("68海里・壇南灣・龍鳳頭・大福灣・海壇古城", "繼續沿平潭海岸遊覽，從68海里景區走向壇南灣、龍鳳頭、大福灣與海壇古城。", "當天海岸停留較多，顧問會按天氣、景區開放及同行成員體力安排節奏，並預留返回福州的車程。", [
                { name: "68海里★", text: "景區由猴研島、研後島和限山島等區域組成，核心看點是伸向海峽的礁石海岸與望歸石。沿開放棧道和觀景區行走，可看層疊礁岩、強風海面與海島地形；望歸石上的「68海里」題刻是主要拍照點，景區接駁與實際開放範圍按當天管理執行。" },
                { name: "壇南灣", text: "壇南灣擁有約22公里連續海岸線，東側可眺望將軍山方向。這裡不只匆忙拍照，而是在開闊沙灘留出散步和自由活動時間，看沙岸弧線、近岸海水與遠處山體；季節性自然現象只按當晚實際情況觀察，不作固定承諾。" },
                { name: "龍鳳頭海濱浴場", text: "龍鳳頭是平潭具代表性的城市海灘之一，兄弟站資料記載金色沙岸綿延約9.5公里。可沿海濱步道和沙灘散步，觀察城市天際線與海岸如何相接，並在正式開放區域休息、拍照；是否親水須考慮天氣、海況和個人身體狀況。" },
                { name: "大福灣", text: "大福灣三面靠山、一面向海，海灣尺度比外海更收攏。可從岸邊看青綠色海水、淺色沙岸和山體圍合出的層次，沿灣慢行並安靜看海；實際停留位置按道路與開放情況選擇。" },
                { name: "海壇古城", text: "海壇古城以平潭歷史文化和傳統街市意象為遊覽主線，可在城門、街巷與院落式建築之間步行，認識海防、商貿和海島民俗相關展示。這裡與自然海岸的體驗不同，適合作為當天後段的文化補充，也可按時間安排地方小吃與自由活動。" },
            ], [
                { title: "門票安排", lines: ["68海里參考門票：38元／人", "參考價格不含景區電瓶車", "實際票價、開放和接駁規則以出行日期為準"] },
                { title: "住宿安排", lines: ["返回福建外貿中心悅華酒店（三坊七巷店）或同級休息"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理，可由服務顧問按需要推薦"] },
            ], [["68海里", "68海里景區由猴研島、研後島和限山島等區域組成，望歸石所在海岸視野開闊。遊覽範圍以當天開放和現場安全管理為準。"], ["龍鳳頭海濱浴場", "龍鳳頭擁有開闊的城市海灘與海岸線，是平潭較具代表性的海濱休閒區域。親水活動須在正式開放場所並按個人身體狀況參加。"]]),
            fullDay("福建博物院・煙台山・三坊七巷・返程", "最後一天回到福州，從博物館、近代建築街區走到傳統坊巷，再按航班或車次安排送機送站。", "顧問會按場館開放、預約、酒店取行李及建議提前抵達機場或車站的時間，倒推當天行程。", [
                { name: "福建博物院", text: "博物院坐落於福州西湖之畔，館藏三萬餘件文物。參觀重點放在福建從史前文化、海洋交流到地方工藝的發展線索，透過陶瓷、書畫、民俗與專題展認識福建為何形成多山臨海、文化多元的地域面貌；具體開放展廳、閉館日與預約要求以場館規則為準。" },
                { name: "煙台山", text: "福州1860年開埠後，曾有17個國家在煙台山一帶設立領事館、洋行和教堂，現存歷史建築與遺跡超過200處。沿坡地街巷辨認領事館舊址、教堂、近代住宅與城市空間，理解商貿、航運和中西建築如何在同一片街區交會，而不是只把這裡當作拍照商業街。" },
                { name: "三坊七巷", text: "三坊七巷延續千餘年的里坊格局，被稱為中國城市里坊制度的「活化石」。遊覽會從坊與巷的空間關係看白牆灰瓦、馬鞍牆、木雕和院落，並結合名人故居及福州生活傳統理解老城文化；途中可按時間品嘗魚丸、肉燕等地方小吃。" },
                { name: "專車送機或送站", text: "遊覽結束後按實際航班或車次送往機場或車站，具體接送範圍以最終方案為準。" },
            ], [
                { title: "返程安排", lines: ["行李可安排酒店寄存或隨車攜帶", "送機送站時間按實際班次、路況及承運方建議確認"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：按返程時間自理"] },
            ], [["煙台山", "煙台山保留福州開埠後形成的領事館、洋行、教堂和近代民居，建築與街巷共同呈現城市多元文化交會的歷史。"], ["三坊七巷", "三坊七巷保留傳統里坊格局與大量歷史建築。行程兼顧坊巷漫步、建築觀察與地方小吃體驗，並可按返程時間調整停留。"]]),
        ],
        hotels: "福建外貿中心悅華酒店、平潭國惠國際酒店或同等級攜程網評五鑽酒店雙人房",
        tickets: "最終行程中明確標註★的景點首道門票，參考包含仙人井及68海里門票；不含景區觀光車"
    },
    "sanming-5-days": {
        title: "三明文化五日訂製遊", description: "串聯尤溪、泰寧、桂峰與沙縣的人文、山水和地方飲食行程。", eyebrow: "從朱子故里到丹霞湖山與閩中古村", summaryTitle: "朱子家宴・人文康養", intro: "走訪尤溪、泰寧古城、大金湖、朱子文化園與沙縣，適合家庭、長輩及文化旅行者慢遊。", collage: ["泰寧古城", "大金湖", "書京土堡", "桂峰古民居"],
        days: [
            fullDay("抵達尤溪・朱子家宴・入住尤溪", "抵達尤溪後專車接站，入住尤溪賓館並體驗迎賓禮與朱子茶台，傍晚參加朱子家宴。", "晚餐後可夜遊尤溪賓館職工療休養基地，感受當地夜景；具體安排會按抵達時間與同行成員體力調整。", [
                { name: "抵達尤溪", text: "專車接站後送往尤溪賓館辦理入住，體驗迎賓禮和朱子茶台。" },
                { name: "朱子家宴", text: "傍晚參加以朱子文化與尤溪地方飲食編排的歡迎宴席。朱子家宴被列入三明市非物質文化遺產，並獲中國飯店協會「中國名宴」稱號；用餐不只是品嘗菜式，也會從菜名、上菜次序和席間故事理解家禮文化如何進入當地宴席，具體菜單以確認方案為準。" },
                { name: "夜遊療休養基地", text: "晚餐後按抵達時間和體力在尤溪賓館職工療休養基地散步，欣賞園區夜景並感受當地夜間生活。棋牌、茶療等配套屬自選體驗，是否安排、開放時段和服務內容以最終方案及現場接待為準。" },
            ], [
                { title: "住宿安排", lines: ["參考尤溪賓館", "掛牌四星級酒店", "最終酒店、房型和床型以實際可訂情況及合約為準"] },
                { title: "餐食安排", lines: ["午餐：酒店午餐", "晚餐：朱子家宴", "具體用餐以抵達時間及最終方案為準"] },
            ], [["尤溪賓館", "尤溪行程參考入住尤溪賓館，並以迎賓禮、朱子茶台和療休養配套銜接第一天活動。最終住宿和房型以實際可訂情況及合約為準。"], ["朱子家宴", "朱子家宴以尤溪朱子文化和地方飲食為主題，是當天的歡迎晚宴。具體菜式、席位與用餐安排以最終確認方案為準。"]]),
            fullDay("尤溪・泰寧古城・大金湖・入住泰寧", "酒店早餐後前往泰寧，上午遊覽泰寧古城，午餐後乘船遊覽大金湖水上丹霞。", "結束遊覽後入住泰寧閩江飯店，並參考安排中藥燻足等健康理療體驗；實際項目按最終方案確認。", [
                { name: "泰寧古城★", text: "古城的重點是尚書第建築群及從明初延續至清末的傳統建築。沿街巷進入院落，可看明代官宅的門樓、廳堂、天井、木構與石雕，理解大型家族住宅如何同時滿足禮制、居住與防火需要；遊覽也會連結泰寧作為閩西北古城的歷史，而不是只在外牆拍照。" },
                { name: "大金湖★", text: "午餐品嘗大金湖有機魚宴後，乘船進入水上丹霞景觀。航行中從湖面觀察赤壁、峽谷、洞穴和被水體分隔的峰林，看丹霞岩體與森林、湖灣在不同轉彎處連續變化；上下船、航線和停靠點以當天水位、天氣及景區營運為準。" },
                { name: "中藥燻足體驗", text: "入住泰寧酒店後參考安排中藥燻足，讓連續步行與乘船後有一段放鬆時間。體驗項目、時長、適用人群和注意事項由接待方說明；有基礎疾病、皮膚敏感或其他顧慮時應提前告知並自行決定是否參加。" },
            ], [
                { title: "住宿安排", lines: ["參考泰寧閩江飯店或同級", "攜程網評五鑽酒店", "最終房型與床型以實際可訂情況為準"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐：大金湖有機魚宴", "晚餐：按最終方案安排"] },
            ], [["泰寧古城", "泰寧古城保留尚書第建築群及多個歷史時期的傳統建築，可從街巷、院落與木石構件中認識閩西北古城文化。"], ["泰寧大金湖", "大金湖以水上丹霞景觀見長，乘船可在湖灣、岩壁與峰林之間移動，從不同角度感受山環水繞的地貌層次。"]]),
            fullDay("朱子文化園・尤溪書京土堡・入住尤溪", "酒店早餐後返回尤溪，上午參觀朱子文化園並體驗誦讀朱子家訓，下午走訪書京土堡。", "遊覽結束後返回尤溪賓館並用晚餐，可按個人意願選擇棋牌或茶療等療休養配套項目。", [
                { name: "朱子文化園★", text: "園區以朱熹在尤溪出生並度過童年的經歷為主線，串聯紫陽公園、南溪書院、紫陽湖等空間。遊覽時可看與朱子相關的古樟、題刻和書院意象，理解「半畝方塘」等文化記憶與尤溪地方文脈的關係，而不是把園區當作普通公園走一圈。" },
                { name: "誦讀朱子家訓", text: "在園區安排朱子家訓主題誦讀，透過簡短文本了解修身、治家和讀書觀念如何影響後世家風。體驗重在結合現場講解理解內容，不追求表演形式；具體場地、時長與是否含帶領人員以當天接待為準。" },
                { name: "書京土堡★", text: "書京土堡由光裕堡與瑞慶堡組成，是邱氏家族為防禦匪患修建的堡寨式民居。參觀時重點看夯土牆體、出入口、防禦構造與內部生活空間，再走到周邊村落觀察土堡、傳統民居和群山之間的關係，理解它與大型圓形福建土樓不同的地方防禦智慧。" },
            ], [
                { title: "住宿安排", lines: ["返回尤溪賓館入住", "掛牌四星級酒店", "最終房型與床型以確認方案為準"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：按最終確認方案安排"] },
            ], [["朱子文化園", "朱子文化園由紫陽公園、南溪書院、紫陽湖等空間組成，以朱子在尤溪的成長經歷和理學文化為遊覽主線。"], ["尤溪書京土堡", "書京土堡由光裕堡與瑞慶堡組成，土堡、傳統民居和群山共同構成安靜的鄉村聚落景觀，也呈現當地防禦性民居特色。"]]),
            fullDay("桂峰古民居・桂峰百家宴・民族服飾換裝・入住沙縣", "酒店早餐後前往桂峰村，參觀古民居、品嘗非遺麥芽糖和桂峰百家宴，並體驗特色服飾換裝。", "秋季曬秋景觀受季節與天氣影響，不作為固定保證項目；遊覽結束後前往沙縣馬岩山莊入住。", [
                { name: "桂峰古民居★", text: "桂峰村現存三四十座明清古民居，房屋順山勢分布，石巷、台階、院落與屋簷高低錯落。遊覽會進入村落肌理觀察木構、磚石和傳統生活空間；10至11月可能看見辣椒、玉米、南瓜等曬秋景象，但是否出現取決於季節、天氣與村民生產。" },
                { name: "非遺麥芽糖", text: "參考安排品嘗當地麥芽糖，了解穀物發芽、熬製與拉糖等傳統工序如何形成地方甜食。是否有現場製作展示、品嘗份量及接待方式以當天安排為準，不把季節性或臨時活動寫成固定保證。" },
                { name: "桂峰百家宴", text: "午餐品嘗桂峰百家宴，以多人圍席的方式體驗村落待客與共享飲食傳統。顧問會在確認方案時說明實際菜單、桌數、用餐地點和忌口處理；網頁只保留已確認的文化體驗，不虛構固定菜式。" },
                { name: "民族服飾換裝", text: "下午體驗桂峰特色服飾換裝，可在古民居、石巷與院落環境中拍照。服裝款式、尺碼、妝造、拍攝服務及使用時長以現場接待為準，換裝是自願體驗，不影響不參加者繼續遊覽古村。" },
            ], [
                { title: "住宿安排", lines: ["參考沙縣馬岩山莊或同級", "攜程網評三鑽民宿", "最終住宿、房型與床型以實際可訂情況為準"] },
                { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐：桂峰百家宴", "晚餐：按最終方案安排"] },
            ], [["桂峰古民居", "桂峰村保留數十座明清古民居，傳統建築順應山勢分布。秋季可能出現曬秋景觀，實際效果取決於季節、天氣與村民生產安排。"], ["桂峰服飾換裝", "桂峰特色服飾換裝為當天的體驗項目之一，可在古村環境中拍照留念。服裝款式、尺碼和服務時間以現場接待為準。"]]),
            fullDay("沙縣東門古街・沙縣小吃文化城・返程", "最後一天遊覽沙縣東門古街和沙縣小吃文化城，再按航班或車次安排專車送站。", "顧問會按酒店取行李、景點停留時間和建議提前抵達車站的時間，倒推當天行程。", [
                { name: "沙縣東門古街", text: "東門古街是三明現存修繕較完整的歷史文化街區之一，青石板路承載約600年的街巷記憶。漫步時重點看傳統院落、店舖尺度與大夫第磚雕，其中「漁樵耕讀」等題材能看出閩中匠人如何把生活理想刻進建築細節。" },
                { name: "沙縣小吃文化城", text: "這裡不僅能集中品嘗扁肉、拌麵等沙縣地方小吃，也設有小吃科技與民俗相關展示。行程會把「吃什麼」和「為什麼沙縣小吃走向全國」結合起來，認識原料、手藝、經營與遷徙傳播的關係；實際開放展館和用餐內容以當天接待為準。" },
                { name: "專車送站", text: "行程結束後按實際航班或車次提前送往車站，具體接送範圍以最終方案為準。" },
            ], [
                { title: "返程安排", lines: ["行李可安排酒店寄存或隨車攜帶", "送站時間按實際班次、路況及承運方建議確認"] },
                { title: "餐食安排", lines: ["早餐：民宿早餐", "午餐、晚餐：按返程時間及最終方案安排"] },
            ], [["沙縣東門古街", "東門古街是沙縣歷史文化街區，青石板路、傳統院落與磚雕裝飾保留閩中街巷的空間尺度和地方建築細節。"], ["沙縣小吃文化城", "沙縣小吃文化城集中呈現地方小吃與相關民俗，透過餐飲和展示空間了解沙縣小吃從地方飲食走向全國的文化脈絡。"]]),
        ],
        hotels: "尤溪賓館、泰寧閩江飯店、沙縣馬岩山莊或同級，按頁面標示的當地評級安排雙人房",
        tickets: "最終行程中明確標註★的景點首道門票；體驗項目是否包含以確認方案為準"
    },
    "xiamen-tulou-dongshan-5-days": {
        title: "廈門・土樓・東山島5日訂製遊", description: "結合廈門、世遺土樓與東山島的5天4晚訂製遊行程。", eyebrow: "落地廈門，走進世遺土樓與東山海島", summaryTitle: "廈門＋土樓／東山島・山海畫廊", intro: "串聯福建土樓、東山島、鼓浪嶼與南普陀寺，適合家庭、親子及親友小團彈性慢遊。", collage: ["雲水謠", "永定土樓", "南門灣", "鼓浪嶼"],
        days: [
            fullDay("抵達廈門・入住酒店", "抵達廈門後專車接機或接站，送往酒店辦理入住並休息。", "服務顧問會提前核對班次、行李和同行成員；較早抵達時可按體力安排附近自由活動。", [{ name: "抵達廈門", text: "抵達機場或車站後，由專車送往廈門瑞頤酒店或同級酒店。" }], [{ title: "住宿安排", lines: ["參考廈門瑞頤酒店或同級", "攜程網評五鑽酒店", "參考房型：豪華鼓浪嶼海景房"] }, { title: "餐食安排", lines: ["抵達當天餐食自理", "服務顧問可按需要推薦"] }], [["廈門瑞頤酒店", "酒店位於廈門本島臨海區域，面向鼓浪嶼與鷺江水域，方便前往輪渡碼頭、中山路及銜接後續土樓行程。"], ["豪華鼓浪嶼海景房", "參考房型面向鷺江與鼓浪嶼方向；樓層、海景角度、床型和連通房以最終確認方案為準。"]]),
            fullDay("雲水謠古鎮・永定土樓・入住東山島", "酒店早餐後前往南靖與永定，遊覽雲水謠和土樓王景區，晚上入住東山島。", "參考上午8時出發，依次參觀和貴樓、雲水謠、土樓之光、懷遠樓及承啟樓等土樓；實際順序按交通和預約調整。", [{ name: "雲水謠古鎮★", text: "沿古道、溪流和古榕遊覽和貴樓、懷遠樓與雲水謠核心區域。" }, { name: "永定土樓王★", text: "參觀僑福樓、承啟樓，並從外部觀察世澤樓和五雲樓。" }, { name: "前往東山島", text: "結束土樓遊覽後乘車前往東山島，辦理酒店入住。" }], [{ title: "門票與講解", lines: ["雲水謠：90元／人", "永定土樓王：50元／人", "土樓之光：10元／人", "參考包含雲水謠及永定土樓講解"] }, { title: "住宿安排", lines: ["東山福萊喜大酒店（金鑾灣店）或同級", "攜程網評五鑽酒店", "參考房型：豪華海景房"] }, { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理"] }], [["雲水謠古鎮", "溪流、古榕、石橋、古道與土樓共同構成世遺聚落，可沿水岸觀察居民生活與土樓的關係。"], ["永定土樓王・承啟樓", "承啟樓以四層、四圈同心的巨大圓樓格局聞名，呈現土樓防禦、宗族居住與公共空間。"]]),
            fullDay("金鑾灣・南門灣・頂街・蘇峰山・巖雅戀人・風動石・入住廈門", "酒店早餐後沿東山島海岸遊覽，串聯金鑾灣、南門灣、頂街、蘇峰山與風動石。", "當天結束後乘車返回廈門入住酒店；海岸停留順序按天氣、潮汐、交通和景區開放情況調整。", [{ name: "金鑾灣與南門灣", text: "在開闊沙灘、彩色漁村與海岸街巷之間散步拍照。" }, { name: "蘇峰山環島路", text: "乘坐參考接駁車沿山海公路遊覽，並順路經過巖雅戀人。" }, { name: "風動石景區★", text: "參觀東山島代表性海岸奇石與周邊景觀。" }], [{ title: "門票與交通", lines: ["風動石：45元／人", "蘇峰山接駁：10元／人"] }, { title: "住宿安排", lines: ["返回廈門瑞頤酒店或同級", "參考房型：豪華鼓浪嶼海景房"] }, { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理"] }], [["蘇峰山環島路", "藍色護欄、風車、懸崖和臺灣海峽在連續彎道中交替出現；停靠及遊覽範圍按開放、安全與體力調整。"], ["南門灣", "弧形海灣依山坡民居與漁港展開，可沿海堤慢行至頂街，感受漁村日常與海島街巷。"]]),
            fullDay("廈門鼓浪嶼・中山路", "酒店早餐後前往碼頭，乘輪渡登鼓浪嶼，下午返回廈門市區遊覽中山路。", "參考提前30分鐘至1小時抵達碼頭檢票；島上景點按興趣、步行體力和預約情況安排。", [{ name: "鼓浪嶼★", text: "乘往返輪渡上島，走訪最美轉角、音樂文化建築與日光巖周邊。" }, { name: "中山路", text: "沿百年騎樓街區慢行，可在中華城與周邊街巷自由品嘗小吃。" }], [{ title: "門票安排", lines: ["鼓浪嶼往返船票：35元／人", "島上其他收費景點按最終方案確認"] }, { title: "住宿安排", lines: ["返回廈門瑞頤酒店或同級休息"] }, { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：自理"] }], [["鼓浪嶼", "海岸、坡道街巷、近代建築與音樂文化構成完整島嶼空間；可按體力選擇日光巖。"], ["中山路", "連續騎樓記錄近代港口城市發展，傍晚可沿老街巷散步並品嘗地方小吃。"]]),
            fullDay("南普陀寺・環島路・送機回程", "酒店早餐後遊覽南普陀寺與環島路，再按航班或車次安排送機送站。", "顧問會按酒店取行李、景點停留時間與建議提前抵達機場或車站的時間，倒推當天行程。", [{ name: "南普陀寺", text: "在現場開放和預約規則下參觀寺院建築與文化空間。" }, { name: "環島路", text: "沿廈門濱海公路遊覽，在安全開放區域安排散步和拍照。" }, { name: "專車送機或送站", text: "遊覽結束後送往廈門機場或車站。" }], [{ title: "返程安排", lines: ["送機送站時間按實際班次和路況確認"] }, { title: "餐食安排", lines: ["早餐：酒店早餐", "午餐、晚餐：按返程時間自理"] }], [["南普陀寺", "南普陀寺背靠五老峰，寺院建築展現閩南佛教空間與現代城市相鄰的特色。"], ["環島路", "環島路串聯沙灘、木棧道、濱海公園與漁村，可按天氣和返程時間選擇合適路段。"]])
        ], hotels: "廈門瑞頤酒店、東山福萊喜大酒店或同等級攜程網評五鑽酒店雙人房", tickets: "雲水謠、永定土樓王、風動石首道門票，以及土樓之光、蘇峰山接駁與鼓浪嶼往返船票", guide: "雲水謠古鎮與永定土樓王講解服務，具體服務時段以最終方案為準"
    },
    "minnan-meizhou-tulou-7-days": {
        title: "閩南・湄洲島・土樓7日訂製遊", description: "串聯泉州、湄洲島、福建土樓、東山島與廈門的7天6晚訂製遊行程。", eyebrow: "海絲文化、媽祖文化、土樓與海島風光", summaryTitle: "閩南＋莆田湄洲島＋土樓", intro: "串聯泉州、湄洲島、福建土樓、東山島與廈門，適合家庭、長輩及朋友小團慢遊。", collage: ["梧林古村", "媽祖祖廟", "永定土樓", "鼓浪嶼"],
        days: [
            fullDay("抵達廈門或泉州・入住酒店", "抵達廈門或泉州後安排專車接機或接站，送往對應酒店休息。", "顧問會提前確認抵達城市、班次、行李和同行成員，並安排適合後續泉州行程的住宿與接送。", [{ name: "抵達廈門或泉州", text: "按實際抵達地點由專車接送入住，第一天以休息和適應為主。" }], [{ title: "住宿安排", lines: ["廈門：瑞頤酒店或同級，豪華鼓浪嶼海景房", "泉州：濱江皇冠假日酒店或同級，商務房", "均為參考攜程網評五鑽酒店"] }, { title: "餐食安排", lines: ["抵達當天餐食自理"] }], [["廈門瑞頤酒店", "從廈門抵達時參考入住廈門瑞頤酒店或同級，具體房型、樓層、景觀與床型以實際可訂情況為準。"], ["泉州濱江皇冠假日酒店", "從泉州抵達時參考入住泉州濱江皇冠假日酒店或同級，最終住宿按抵達城市和確認方案安排。"]]),
            fullDay("梧林古村落・黃金海岸・洛伽寺・開元寺・西街鐘樓", "酒店早餐後從僑鄉古村走向海岸寺院，再回到泉州古城的開元寺與西街。", "參考上午9時出發，行程串聯建築、海岸與古城生活；具體順序按交通、開放時間和步行體力調整。", [{ name: "梧林古村落", text: "漫步青石板路，觀察閩南大厝與中西合璧僑鄉建築。" }, { name: "黃金海岸與洛伽寺", text: "沿海岸遊覽，在安全開放範圍內感受寺院與礁石海景。" }, { name: "開元寺與西街鐘樓", text: "參觀東西塔與寺院建築，傍晚沿西街、鐘樓周邊自由慢行。" }], [{ title: "住宿安排", lines: ["泉州濱江皇冠假日酒店或同級", "攜程網評五鑽酒店", "參考房型：商務房"] }, twSelfPaidMeals], [["梧林傳統村落", "梧林保留閩南大厝、中西合璧民居與僑鄉建築，可從村落街巷認識泉州近現代建築文化。"], ["洛伽寺", "洛伽寺三面臨海，寺院建築與礁石海岸相接；遊覽時須遵守現場開放和海岸安全要求。"]]),
            fullDay("泉州・莆田湄洲島・入住廈門", "泉州酒店早餐後前往莆田文甲碼頭，乘船登湄洲島並搭乘島上觀光車遊覽。", "參考遊覽湄嶼潮音、媽祖祖廟與天妃故里，結束後乘車前往廈門入住酒店。", [{ name: "湄洲島★", text: "乘往返輪渡登島，並搭乘參考包車觀光車銜接島上景點。" }, { name: "湄嶼潮音", text: "觀察風蝕、海蝕地貌與潮汐共同形成的海岸景觀。" }, { name: "媽祖祖廟與天妃故里", text: "了解湄洲島媽祖文化及相關歷史遺跡。" }], [{ title: "門票與交通", lines: ["湄洲島參考門票及船票：125元／人", "島上參考觀光車包車：200元／部"] }, { title: "住宿安排", lines: ["廈門瑞頤酒店或同級", "攜程網評五鑽酒店", "參考房型：豪華鼓浪嶼海景房"] }, twSelfPaidMeals], [["湄嶼潮音", "湄嶼潮音位於湄洲島北部，風蝕、海蝕地貌在潮汐作用下形成獨特海岸景觀，參觀範圍以當天開放為準。"], ["媽祖祖廟", "媽祖祖廟是湄洲島重要文化地標，參觀時請尊重當地信俗與宗教場所禮儀。"]]),
            fullDay("廈門・雲水謠古鎮・永定土樓・入住東山島", "廈門酒店早餐後前往南靖與永定，遊覽雲水謠和土樓王景區，晚上入住東山島。", "參考參觀和貴樓、懷遠樓、承啟樓、僑福樓及周邊土樓；實際順序按交通和預約調整。", [{ name: "雲水謠古鎮★", text: "沿古道、溪流和古榕遊覽和貴樓、懷遠樓與古鎮核心區域。" }, { name: "永定土樓王★", text: "參觀承啟樓與僑福樓，並從外部觀察世澤樓和五雲樓。" }], [{ title: "門票與講解", lines: ["雲水謠：90元／人", "永定土樓王：50元／人", "土樓之光：10元／人", "參考包含兩處景區中文講解"] }, { title: "住宿安排", lines: ["東山福萊喜大酒店或同級", "攜程網評五鑽酒店", "參考房型：豪華海景房"] }, twSelfPaidMeals], [["雲水謠古鎮", "雲水謠將溪流、古榕、石橋與土樓聚落相連，行程保留講解、建築觀察和自由拍照時間。"], ["永定土樓王", "承啟樓規模宏大，透過圓樓院落與木構空間可認識客家聚族而居的傳統生活方式。"]]),
            fullDay("蘇峰山・金鑾灣・風動石・南門灣・入住廈門", "酒店早餐後沿東山島海岸遊覽蘇峰山、金鑾灣、風動石與南門灣，結束後返回廈門。", "海岸停留順序會按天氣、潮汐、交通與景區開放情況調整。", [{ name: "蘇峰山環島路", text: "乘參考接駁車沿山海公路遊覽，並順路經過巖雅戀人。" }, { name: "金鑾灣與南門灣", text: "在開闊沙灘、彩色漁村和海岸街巷之間散步拍照。" }, { name: "風動石景區★", text: "參觀東山島代表性海岸奇石。" }], [{ title: "門票與交通", lines: ["風動石：45元／人", "蘇峰山接駁：10元／人"] }, { title: "住宿安排", lines: ["廈門瑞頤酒店或同級", "攜程網評五鑽酒店"] }, twSelfPaidMeals], [["蘇峰山環島路", "蘇峰山環島路一側臨山、一側向海，實際停靠位置會按天氣、交通和現場安全要求調整。"], ["南門灣", "南門灣沿山臨海，彩色民居、漁港與海岸線共同形成東山島具辨識度的濱海景觀。"]]),
            fullDay("廈門鼓浪嶼・中山路・入住廈門", "酒店早餐後前往碼頭，乘輪渡登鼓浪嶼，下午返回廈門市區遊覽中山路。", "參考提前30分鐘至1小時抵達碼頭檢票；島上景點按興趣、步行體力與預約情況安排。", [{ name: "鼓浪嶼★", text: "乘往返輪渡上島，走訪最美轉角、音樂文化建築與日光巖周邊。" }, { name: "中山路", text: "沿百年騎樓街區慢行，可在中華城與周邊街巷自由品嘗小吃。" }], [{ title: "門票安排", lines: ["鼓浪嶼往返船票：35元／人", "島上其他收費景點按最終方案確認"] }, { title: "住宿安排", lines: ["返回廈門瑞頤酒店或同級休息"] }, twSelfPaidMeals], [["鼓浪嶼", "鼓浪嶼匯集海島街巷、歷史建築與音樂文化；島上其他收費項目以最終確認方案為準。"], ["中山路", "中山路以騎樓建築和城市商業街巷為主，傳統小吃與市井生活共同構成廈門老城體驗。"]]),
            fullDay("廈門南普陀寺・環島路・送站回程", "酒店早餐後遊覽南普陀寺與環島路，再按航班或車次安排送機送站。", "顧問會按酒店取行李、景點停留和建議提前抵達機場或車站的時間，倒推當天行程。", [{ name: "南普陀寺", text: "按現場開放和預約規則參觀寺院建築與文化空間。" }, { name: "環島路", text: "沿廈門濱海公路遊覽，在安全開放區域安排散步和拍照。" }, { name: "專車送機或送站", text: "遊覽結束後送往廈門機場或車站。" }], [{ title: "返程安排", lines: ["送機送站時間按實際班次與路況確認"] }, twSelfPaidMeals], [["南普陀寺", "南普陀寺是廈門代表性佛教文化空間，參觀時請遵守現場開放與宗教場所禮儀要求。"], ["環島路", "環島路連接廈門多段濱海景觀，可按天氣、交通與返程時間選擇合適路段停留。"]])
        ], hotels: "廈門瑞頤酒店、泉州濱江皇冠假日酒店、東山福萊喜大酒店或同等級攜程網評五鑽酒店雙人房", tickets: "雲水謠、永定土樓王、風動石、湄洲島船票門票，以及土樓之光、蘇峰山接駁、鼓浪嶼往返船票和湄洲島觀光車包車", guide: "雲水謠古鎮與永定土樓王中文講解服務"
    },
    "fujian-grand-tour-8-days": {
        title: "福建全景8日訂製遊", description: "串聯福州、湄洲島、泉州、福建土樓、東山島與廈門的8天7晚訂製遊行程。", eyebrow: "從福州坊巷到閩南山海，深度環遊福建", summaryTitle: "福州＋廈門＋漳州＋泉州＋莆田精選", intro: "串聯福州、湄洲島、泉州、福建土樓、東山島與廈門，適合家庭及朋友小團深度慢遊。", collage: ["福州煙台山", "媽祖祖廟", "泉州洛伽寺", "廈門鼓浪嶼"],
        days: [
            fullDay("抵達福州・入住酒店", "抵達福州後安排專車接機或接站，送往酒店辦理入住並休息。", "服務顧問會提前核對班次、行李與同行成員；較早抵達時可按體力安排附近自由活動。", [{ name: "抵達福州", text: "抵達機場或車站後，由專車送往福建外貿中心悅華酒店或同級。" }], [{ title: "住宿安排", lines: ["福建外貿中心悅華酒店（三坊七巷店）或同級", "攜程網評五鑽酒店", "參考房型：標準雙床房"] }, { title: "餐食安排", lines: ["抵達當天餐食自理"] }], [["福建外貿中心悅華酒店", "首晚參考入住福建外貿中心悅華酒店三坊七巷店或同級，方便銜接次日福州市區行程。"], ["標準雙床房參考", "具體樓層、朝向、景觀與床型以實際房態和最終合約為準。"]]),
            fullDay("福建博物院・煙台山・三坊七巷", "酒店早餐後從福建博物院走向煙台山與三坊七巷，認識福州從地方歷史到近代城市的文化脈絡。", "博物館開放、閉館日期與預約規則以出行當天官方資料為準，遊覽順序會按開放與交通調整。", [{ name: "福建博物院", text: "參觀福建歷史文化相關展覽，實際展廳開放與預約以當天規則為準。" }, { name: "煙台山", text: "漫步保留領事館、洋行與教堂等近代建築的歷史街區。" }, { name: "三坊七巷", text: "走進傳統坊巷，在白牆灰瓦、歷史宅院與地方小吃之間慢遊。" }], [{ title: "住宿安排", lines: ["返回福建外貿中心悅華酒店或同級休息"] }, twSelfPaidMeals], [["煙台山", "煙台山保留福州開埠後形成的領事館、洋行、教堂和近代民居，呈現多元文化交會的城市歷史。"], ["三坊七巷", "三坊七巷保留傳統里坊格局與歷史建築，行程兼顧坊巷漫步、建築觀察和地方小吃。"]]),
            fullDay("福州・湄洲島・入住泉州", "福州酒店早餐後前往莆田文甲碼頭，乘輪渡登湄洲島，遊覽後前往泉州入住酒店。", "島上參考安排觀光車銜接湄嶼潮音、媽祖祖廟、天妃故里與鵝尾神石園等區域。", [{ name: "湄洲島★", text: "乘往返輪渡登島，並搭乘參考包車觀光車銜接島上景點。" }, { name: "湄嶼潮音", text: "觀察風蝕、海蝕地貌與潮汐共同形成的海岸景觀。" }, { name: "媽祖祖廟與天妃故里", text: "了解湄洲島媽祖文化及相關歷史遺跡。" }], [{ title: "門票與交通", lines: ["湄洲島參考門票及船票：125元／人", "島上參考觀光車包車：200元／部"] }, { title: "住宿安排", lines: ["泉州濱江皇冠假日酒店或同級", "攜程網評五鑽酒店", "參考房型：商務房"] }, twSelfPaidMeals], [["湄嶼潮音", "湄嶼潮音位於湄洲島北部，風蝕、海蝕地貌在潮汐作用下形成獨特海岸景觀。"], ["媽祖祖廟", "媽祖祖廟是湄洲島重要文化地標，參觀時請尊重當地信俗與宗教場所禮儀。"]]),
            fullDay("梧林・黃金海岸・洛伽寺・開元寺・西街鐘樓", "酒店早餐後遊覽梧林傳統村落、黃金海岸與洛伽寺，再回到泉州古城的開元寺和西街鐘樓。", "當天串聯僑鄉建築、海岸寺院與古城生活，實際順序會按交通、開放時間與步行體力調整。", [{ name: "梧林傳統村落", text: "觀察閩南大厝、中西合璧民居與僑鄉建築。" }, { name: "黃金海岸與洛伽寺", text: "沿海岸遊覽，在安全開放範圍內感受寺院與礁石海景。" }, { name: "開元寺與西街鐘樓", text: "參觀東西塔與寺院建築，傍晚沿西街、鐘樓周邊自由慢行。" }], [{ title: "住宿安排", lines: ["返回泉州濱江皇冠假日酒店或同級休息"] }, twSelfPaidMeals], [["梧林傳統村落", "梧林保留閩南大厝、中西合璧民居與僑鄉建築，可從街巷認識泉州近現代建築文化。"], ["洛伽寺", "洛伽寺三面臨海，寺院建築與礁石海岸相接；遊覽時須遵守現場開放和海岸安全要求。"]]),
            fullDay("泉州・雲水謠・永定土樓・入住東山島", "泉州酒店早餐後前往南靖與永定，遊覽雲水謠和土樓王景區，晚上入住東山島。", "參考參觀和貴樓、懷遠樓、承啟樓、僑福樓及周邊土樓；實際順序按交通和預約調整。", [{ name: "雲水謠古鎮★", text: "沿古道、溪流和古榕遊覽和貴樓、懷遠樓與古鎮核心區域。" }, { name: "永定土樓王★", text: "參觀承啟樓與僑福樓，並從外部觀察世澤樓和五雲樓。" }], [{ title: "門票與講解", lines: ["雲水謠：90元／人", "永定土樓王：50元／人", "土樓之光：10元／人", "參考包含兩處景區中文講解"] }, { title: "住宿安排", lines: ["東山福萊喜大酒店或同級", "攜程網評五鑽酒店", "參考房型：豪華海景房"] }, twSelfPaidMeals], [["雲水謠古鎮", "雲水謠將溪流、古榕、石橋與土樓聚落相連，行程保留講解、建築觀察和自由拍照時間。"], ["永定土樓王", "承啟樓規模宏大，透過圓樓院落與木構空間可認識客家聚族而居的傳統生活方式。"]]),
            fullDay("東山島・入住廈門酒店", "酒店早餐後沿東山島海岸遊覽蘇峰山、金鑾灣、風動石和南門灣，結束後前往廈門入住。", "海岸停留順序會按天氣、潮汐、交通和景區開放情況調整。", [{ name: "蘇峰山環島路", text: "乘參考接駁車沿山海公路遊覽，並順路經過巖雅戀人。" }, { name: "金鑾灣與南門灣", text: "在開闊沙灘、彩色漁村和海岸街巷之間散步拍照。" }, { name: "風動石景區★", text: "參觀東山島代表性海岸奇石。" }], [{ title: "門票與交通", lines: ["風動石：45元／人", "蘇峰山接駁：10元／人"] }, { title: "住宿安排", lines: ["廈門瑞頤酒店或同級", "攜程網評五鑽酒店", "參考房型：豪華鼓浪嶼海景房"] }, twSelfPaidMeals], [["蘇峰山環島路", "蘇峰山環島路一側臨山、一側向海，實際停靠位置會按天氣、交通和現場安全要求調整。"], ["南門灣", "彩色民居、漁港與海岸線共同形成東山島具辨識度的濱海景觀。"]]),
            fullDay("廈門鼓浪嶼・中山路", "酒店早餐後前往碼頭，乘輪渡登鼓浪嶼，下午返回廈門市區遊覽中山路。", "參考提前30分鐘至1小時抵達碼頭檢票；島上景點按興趣、步行體力與預約情況安排。", [{ name: "鼓浪嶼★", text: "乘往返輪渡上島，走訪最美轉角、音樂文化建築與日光巖周邊。" }, { name: "中山路", text: "沿百年騎樓街區慢行，可在中華城與周邊街巷自由品嘗小吃。" }], [{ title: "門票安排", lines: ["鼓浪嶼往返船票：35元／人", "島上其他收費景點按最終方案確認"] }, { title: "住宿安排", lines: ["返回廈門瑞頤酒店或同級休息"] }, twSelfPaidMeals], [["鼓浪嶼", "鼓浪嶼匯集海島街巷、歷史建築與音樂文化；島上其他收費項目以最終確認方案為準。"], ["中山路", "騎樓、小吃與商業街巷共同構成廈門老城體驗。"]]),
            fullDay("廈門南普陀寺・環島路・送站回程", "酒店早餐後遊覽南普陀寺與環島路，再按航班或車次安排送機送站。", "顧問會按酒店取行李、景點停留和建議提前抵達機場或車站的時間，倒推當天行程。", [{ name: "南普陀寺", text: "按現場開放和預約規則參觀寺院建築與文化空間。" }, { name: "環島路", text: "沿廈門濱海公路遊覽，在安全開放區域安排散步和拍照。" }, { name: "專車送機或送站", text: "遊覽結束後送往廈門機場或車站。" }], [{ title: "返程安排", lines: ["送機送站時間按實際班次與路況確認"] }, twSelfPaidMeals], [["南普陀寺", "南普陀寺是廈門代表性佛教文化空間，參觀時請遵守現場開放與宗教場所禮儀要求。"], ["環島路", "可按天氣、交通與返程時間選擇合適的濱海路段停留。"]])
        ], hotels: "福建外貿中心悅華酒店、泉州濱江皇冠假日酒店、東山福萊喜大酒店、廈門瑞頤酒店或同等級攜程網評五鑽酒店雙人房", tickets: "雲水謠、永定土樓王、風動石、湄洲島船票門票，以及土樓之光、蘇峰山接駁、鼓浪嶼往返船票和湄洲島觀光車包車", guide: "雲水謠古鎮與永定土樓王中文講解服務"
    }
};
export function getLocalizedRoute(locale: LocalizedTripLocale, id: LocalizedRouteId): RouteConfig {
    if (id === "xiamen-4-days") return classicCopies[locale];
    if (locale === "zh-CN") return zh[id];
    return locale === "en" ? en[id] : tw[id];
}
