// icons
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

//img
import img1 from '../image/avatar1.jpg';
import img2 from '../image/avatar2.jpg';
import img3 from '../image/avatar3.jpg';



export const SidebadIconData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    id: "1",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    id: "2",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    id: "3",
  },
  {
    icon: UilPackage,
    heading: "Products",
    id: "4",
  },
  {
    icon: UilChart,
    heading: "Analytics",
    id: "5",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg,#bb67ff 0%,#c484fc 100%)",
      boxShadow: "0 10px 20px 0 #e0c6f5",
    },
    id: "1",
    barValue: 70,
    value: "25,160",
    icon: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg,#FF919d 0%,#Fc929d 100%)",
      boxShadow: "0 10px 20px 0 #FDC0c7",
    },
    id: "2",
    barValue: 80,
    value: "11,402",
    icon: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(284,212,154) -146.42%,rgb(255,202,113) -46.42%)",
      boxShadow: "0 10px 20px 0 #F9D59B",
    },
    id: "3",
    barValue: 60,
    value: "2,321",
    icon: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];







export const UpdatesData = [
  {
    img:img1,
    name:'Androw',
    note:'Highly trained and motivated administrative assistant',
    time:'25 secounds ago',
  },
  {
    img:img2,
    name:'Emilia Clarke',
    note:'Self-sufficient and organized custodian with over nine years',
    time:'35 minutes ago',

  },
  {
    img:img3,
    name:'Nima Mohamamdi',
    note:'Engaging and encouraging teaching professional who provides a strong educational',
    time:'2 hours ago',

  },
]