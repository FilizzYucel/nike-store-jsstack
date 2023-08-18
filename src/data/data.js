import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Bahçıvan Peynirleriyle",
  subtitle: "Güzel Bir Güne Hazırsın",
  img: heroimg,
  btntext: "Ürünleri keşfet",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Çok Satanlar",
  items: [
    {
      id: "0p0x1",
      title: "Tam Yağlı Taze Beyaz Peynir",
      text: "Beyaz Peynirler",
      rating: "4.9",
      btn: "Hemen Al",
      img: psale2,
      price: "200",
      color: "from-green-600 to-green-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0p0x2",
      title: "Taze Kaşar Peyniri",
      text: "Kaşar Peynirleri",
      rating: "4.5",
      btn: "Hemen Al",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Labne",
      text: "Sürülebilir peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "LAKTOZSUZ PEYNİRLER",
  title: "Laktozsuz Peynirlerle Sindirim Kolay",
  text: "Laktozsuz süt ve süt ürünleri, sütteki laktozu sindiremeyen ve süt içince şişkinlik, ağrı, gaz ve bulantı sıkıntılarını yaşadığı için süt tüketemeyen kişilerin, sütün besin değerlerinden faydalanmalarını sağlamaya yardımcı olur.",
  btn: "Daha fazlasını keşfet",
  url: "https://www.bahcivanpeynir.com/tr/iste-o-peynirler/laktozsuz-peynirler",
  img: hightlightimg,
};

const sneaker = {
  heading: "GURME PEYNİRLER",
  title: "YENİ LEZZETLER DENEYİMLEYİN",
  text: "İtalya’dan ithal edilen Grana Padano Parmesan peynirimiz artizan tariflerin ilk isimlerindendir. Makarnaların, salataların ve pizzaların üstüne kolayca rendeleyerek ve dilimleyerek kullanabilirsiniz.",
  btn: "Daha Fazlasını Keşfet",
  url: "https://www.bahcivanpeynir.com/tr/iste-o-peynirler/gurme-peynirler",
  img: sneakershoe,
};

const toprateslaes = {
  title: "ÜRÜNLERİMİZ",
  items: [
    {
      id: "0M0x1",
      title: "Krem Peynir",
      text: "Sürülebilir Peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: product7,
      price: "150",
      color: "from-red-500 to-rose-300",
      shadow: "shadow-lg shadow-rose-500",
      category: 'Sürülebilir Peynirler'
    },
    {
      id: "0M0x2",
      title: "Gurme Beyaz Peynir",
      text: "Gurme Peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: product2,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
      category: 'Gurme Peynirler'
    },
    {
      id: "0M0x3",
      title: "Dilimli Tost Peyniri",
      text: "Tost Peynirleri",
      rating: "5+",
      btn: "Hemen Al",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-300",
      shadow: "shadow-lg shadow-rose-500",
      category: 'Tost Peynirleri'
    },
    {
      id: "0M0x4",
      title: "Lezzetli Peynir Toplerı",
      text: "Eğlenceli Peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: product4,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
      category: 'Eğlenceli Peynirler'
    },
    {
      id: "0M0x5",
      title: "Probiyotikli Süzme Peynir",
      text: "Süzme Peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: product5,
      price: "150",
      color: "from-rose-900 to-white-500",
      shadow: "shadow-lg shadow-rose-300",
      category: 'Süzme Peynirler'
    },
    {
      id: "0M0x6",
      title: "Süzme Peynir",
      text: "Süzme Peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: product6,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
      category: 'Süzme Peynirler'
    },
    {
      id: "0M0x7",
      title: "Laktossuz Dilimli Beyaz Peynir",
      text: "Laktossuz Peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-300",
      shadow: "shadow-lg shadow-yellow-500",
      category: 'Laktossuz Peynirler'
    },
    {
      id: "0M0x8",
      title: "Çeçil Peyniri",
      text: "Yöresel Lezzetler",
      rating: "5+",
      btn: "Hemen Al",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-800",
      shadow: "shadow-lg shadow-orange-800",
      category: 'Yöresel Peynirler'
    },
    {
      id: "0M0x9",
      title: "Örgü Peyniri",
      text: "Yöresel Lezzetler",
      rating: "5+",
      btn: "Hemen Al",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-violet-600",
      shadow: "shadow-lg shadow-violet-500",
      category: 'Yöresel Peynirler'
    },
    {
      id: "0M0x10",
      title: "Rende Mozzarella Peyniri",
      text: "Mozzarella",
      rating: "5+",
      btn: "Hemen Al",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
      category: 'Mozzarella'
    },
    {
      id: "0M0x11",
      title: "Hellim Peyniri",
      text: "Yöresel Lezzetler",
      rating: "5+",
      btn: "Hemen Al",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
      category: 'Yöresel Peynirler'
    },
    {
      id: "0M0x12",
      title: "Laktossuz Labne",
      text: "Laktossuz peynirler",
      rating: "5+",
      btn: "Hemen Al",
      img: product8,
      price: "150",
      color: "from-rose-900 to-white-500",
      shadow: "shadow-lg shadow-rose-300",
      category: 'Laktossuz Peynirler'
    },
  ],
};


const story = {
  title: "MEDYA",
  news: [
    {
      title: "Yazın Favori İkilisi",
      text: "Beyaz Peynirler",
      img: "https://www.bahcivanpeynir.com/uploads/image/83d1cb27e179040c40aed6c92fe39453-1602592511094.png",
      url: "https://www.bahcivanpeynir.com/tr/iste-o-peynirler/suzme-peynirler",
      like: "",
      time: "",
      by: "Bahçıvan",
      btn: "İncele"
    },
    {
      title: "Probiyotik Süzme Peynir Yenilikçilik Ödülü",
      text: "Probiyotik süzme peynir ile en yenilikçi probiyotik içerikli ürün ödülü aldık.",
      img: "https://www.endustriliderleri.com/wp-content/uploads/2022/03/Odul-Takdimi-Oyku-Guvenc_111517532.jpg",
      time: "",
      like: "",
      url: "https://www.bahcivanpeynir.com/tr/iste-o-peynirler/suzme-peynirler",
      by: "Bahçıvan",
      btn: "İncele"
    },
    {
      title: "Serpme Beyaz Peynir",
      text: "Lezzeti Herşeyin Üstünde",
      img: "https://www.bahcivanpeynir.com/uploads/image/41f12221fa62f234bfd082babf27504f-1634650436913.png",
      time: "",
      url: "https://www.bahcivanpeynir.com/tr/iste-o-peynirler/beyaz-peynir",
      like: "",
      by: "Bahçıvan",
      btn: "İncele"
    },
    {
      title: "Bahçıvan Tereyağı ",
      text: "Geleneksel tatlardan vazgeçmeyenlere",
      img: "https://images.deliveryhero.io/image/product-information-management/64870f54c228b68a296e13fd.jpg?height=480",
      time: "",
      url: "https://www.bahcivanpeynir.com/tr/bahcivanin-tarifi/cocuklarim-icin/tum-tarifler",
      like: "",
      by: "Bahçıvan",
      btn: "İncele"
    },
    {
      title: "Rende Mozzarella ",
      text: "Yardımcı şefin burda",
      img: "https://cdn.getir.com/product/5f199bfc9e35ab6255dd54ca_e120aa4f-745c-413a-bb0a-fffc6cbd5965.jpeg",
      time: "",
      url: "https://www.bahcivanpeynir.com/tr/iste-o-peynirler/mozzarella",
      like: "",
      by: "Bahçıvan",
      btn: "İncele"
    },
    {
      title: "Laktossuz Labne",
      text: "Tatlılara sağlıklı dokunuşlar",
      img: "https://www.bahcivanpeynir.com/uploads/image/939d20421184aacc825ce6cb5ea9b206-1597747915448.jpg",
      time: "",
      url: "https://www.bahcivanpeynir.com/tr/iste-o-peynirler/surulebilir-peynirler",
      like: "",
      by: "Bahçıvan",
      btn: "İncele"
    },
    {
      title: "Lezzet üretimi",
      text: "Peynirin başladığı yer",
      img: "https://www.bahcivanpeynir.com/uploads/image/2cfe1e3b944600e8aef08eb13a709b87-1597843504399.png",
      url: "https://www.bahcivanpeynir.com/tr/peynirin-merkezi/surdurulebilir-peynircilik",
      time: "",
      like: "",
      by: "Bahçıvan",
      btn: "İncele"
    },
    {
      title: "Sürdürebilirlik",
      text: "Sürdülebilir Peynircilik",
      img: "https://www.bahcivanpeynir.com/uploads/image/60b7b4114891798e5863beb9bb6f82f1-1597991830629.png",
      url: "https://www.bahcivanpeynir.com/tr/peynirin-merkezi/surdurulebilir-peynircilik",
      time: "",
      like: "",
      by: "Bahçıvan",
      btn: "İncele"
    },
    
  ],
};


const footerAPI = {
  titles: [ {title: "BAHÇIVAN HAKKINDA"},{title: "DESTEK"},{title: "ŞİRKET"} ],
  links: [
    [
      {link: "Yeniler"},
      {link: "Kariyer"},
      {link: "Yatırımcılar"},
      {link: "Amaç"},
      {link: "Sürdürebilirlik"},
    ],
    [
      {link: "Sipariş Durumu"},
      {link: "Kargo & Teslimat"},
      {link: "Ödeme opsiyonları"},
      {link: "İndirim kodları"},
      {link: "Bize Ulaş"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Hediye Kartları"},
      {link: "Promosyonlar"},
      {link: "Mağaza Bul"},
      {link: "Giriş"},
      {link: "Bahçıvan"},
      {link: "Geri bildirim"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
