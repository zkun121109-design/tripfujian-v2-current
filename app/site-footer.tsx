"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const copy = {
  "zh-CN": { brand: "TripFujian", tagline: "by Yujunyou Travel", services: "福建私人定制 · 酒店安排 · 私人用车 · 接送与当地体验", wechat: "微信客服", hint: "扫码添加好友", email: "邮箱", address: "地址", company: "与君游（厦门）国际旅游有限公司" },
  "zh-TW": { brand: "TripFujian", tagline: "by Yujunyou Travel", services: "福建私人訂製 · 飯店安排 · 私人用車 · 接送與在地體驗", wechat: "微信客服", hint: "掃碼添加好友", email: "電郵", address: "地址", company: "與君游（廈門）國際旅遊有限公司" },
  en: { brand: "TripFujian", tagline: "by Yujunyou Travel", services: "Private Fujian trips · Stays · Private transport · Transfers · Local experiences", wechat: "WeChat", hint: "Scan to add us", email: "Email", address: "Address", company: "Yujunyou (Xiamen) International Travel Co., Ltd." },
} as const;

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  const locale = pathname.startsWith("/zh-tw") ? "zh-TW" : pathname.startsWith("/en") ? "en" : "zh-CN";
  const text = copy[locale];
  const address = locale === "en" ? "Unit 2606, No. 474 Xinglinwan Road, Jimei District, Xiamen" : locale === "zh-TW" ? "廈門市集美區杏林灣路474號2606單元" : "厦门市集美区杏林湾路474号2606单元";
  const home = locale === "zh-TW" ? "/zh-tw" : locale === "en" ? "/en" : "/";
  return <footer className="global-site-footer"><div className="global-site-footer-inner">
    <div className="global-footer-intro"><a className="brand global-footer-brand" href={home}><Image src="/yujunyou-mark-v4.svg" alt="" aria-hidden="true" width={42} height={42}/><span><strong>{text.brand}</strong><small>{text.tagline}</small></span></a><p>{text.services}</p></div>
    <div className="global-footer-wechat"><Image src="/wechat-qr-yujunyou-optimized.png" alt={text.wechat + " QR code"} width={160} height={160} sizes="(max-width:700px) 96px,120px" unoptimized/><strong>{text.wechat}</strong><small>{text.hint}</small></div>
    <address className="global-footer-business"><p className="site-footer-email">{text.email}：<span>yujunyou2026</span><span aria-hidden="true">@</span><span>163.com</span></p><span>{text.address}：{address}</span><small>© 2026 {text.company}</small></address>
  </div></footer>;
}
