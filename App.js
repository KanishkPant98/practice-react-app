import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
  -Logo
  -Nav Items
*Body
  -Search
  -Retraunt Contaner
    -Restrant Card
      -img
      -Name,Rating,cuisines,Delivery Name
*Footer
  -Copyrights
  -Link
  -Contact Info
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resData = [
  {
    id: "796289",
    resName: "Pizza Hut",
    cuisines: ["Pizzas"],
    avgRating: 4,
    deliveryTime: 63,
    costForTwo: "₹350 for two",
    img_id: "490629b70f89da8a5b93fc199ece335e",
  },
  {
    id: "691733",
    resName: "Chinese Wok",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.2,
    deliveryTime: 53,
    costForTwo: "₹250 for two",
    img_id: "e0839ff574213e6f35b3899ebf1fc597",
  },
  {
    id: "38925",
    resName: "Domino's Pizza",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    deliveryTime: 25,
    costForTwo: "₹400 for two",
    img_id: "d0450ce1a6ba19ea60cd724471ed54a8",
  },
  {
    id: "804724",
    resName: "KFC",
    cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
    avgRating: 3.9,
    deliveryTime: 48,
    costForTwo: "₹400 for two",
    img_id:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804724.JPG",
  },
  {
    id: "253765",
    resName: "McDonald's",
    cuisines: ["American"],
    avgRating: 4.3,
    deliveryTime: 48,
    costForTwo: "₹400 for two",
    img_id: "535fc9f9c135f7982317bbb6a64a1ffc",
  },
  {
    id: "807783",
    resName: "Burger King",
    cuisines: ["Burgers", "American"],
    avgRating: 3.9,
    deliveryTime: 67,
    costForTwo: "₹350 for two",
    img_id:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_807783.JPG",
  },
  {
    id: "365634",
    resName: "Wow! Momo",
    cuisines: [
      "Tibetan",
      "Healthy Food",
      "Asian",
      "Chinese",
      "Snacks",
      "Continental",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
    deliveryTime: 60,
    costForTwo: "₹300 for two",
    img_id: "64fd45fd9f44c1737bc446e470bed666",
  },
  {
    id: "107452",
    resName: "Chaayos Chai+Snacks=Relax",
    cuisines: [
      "Bakery",
      "Beverages",
      "Chaat",
      "Desserts",
      "Home Food",
      "Italian",
      "Maharashtrian",
      "Snacks",
      "Street Food",
      "Sweets",
    ],
    avgRating: 4.5,
    deliveryTime: 58,
    costForTwo: "₹250 for two",
    img_id:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_107452.JPG",
  },
  {
    id: "467130",
    resName: "Cheesecake & Co.",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.6,
    deliveryTime: 38,
    costForTwo: "₹300 for two",
    img_id: "b318c0b4bc2169550145ace1d6e791a2",
  },
  {
    id: "691734",
    resName: "Big Bowl",
    cuisines: ["Chinese", "Tibetan", "Desserts"],
    avgRating: 4.4,
    deliveryTime: 50,
    costForTwo: "₹250 for two",
    img_id:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/17/155daa0a-1440-49a2-a978-c8299ac111db_691734.JPG",
  },
  {
    id: "831441",
    resName: "Pastas By Pizza Hut",
    cuisines: ["Pastas"],
    avgRating: 3.2,
    deliveryTime: 54,
    costForTwo: "₹400 for two",
    img_id: "80ca62f0de020f8cbe39fd034d3325d5",
  },
  {
    id: "801226",
    resName: "Makhani Darbar",
    cuisines: [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.5,
    deliveryTime: 51,
    costForTwo: "₹500 for two",
    img_id: "c583da4b69d264ffe705e5918fad0e98",
  },
  {
    id: "669431",
    resName: "Smoke House Deli",
    cuisines: [
      "Italian",
      "Continental",
      "Fast Food",
      "Salads",
      "Healthy Food",
      "Pizzas",
      "Desserts",
    ],
    avgRating: 4,
    deliveryTime: 58,
    costForTwo: "₹800 for two",
    img_id: "d9816f9441d02f053fb8c90bf43c3fd2",
  },
  {
    id: "566209",
    resName: "Faasos Signature Wraps & Rolls",
    cuisines: ["Fast Food", "Snacks", "North Indian", "Desserts", "Beverages"],
    avgRating: 4.1,
    deliveryTime: 59,
    costForTwo: "₹350 for two",
    img_id: "c583ca6ce40b426797a78ae2ac91f2ec",
  },
  {
    id: "691735",
    resName: "The Momo Co.",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.6,
    deliveryTime: 51,
    costForTwo: "₹250 for two",
    img_id: "9668a5819fcba35364dcff30d5f5cfbb",
  },
  {
    id: "574972",
    resName: "Veg Daawat by Behrouz",
    cuisines: [
      "Biryani",
      "North Indian",
      "Kebabs",
      "Mughlai",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.6,
    deliveryTime: 50,
    costForTwo: "₹700 for two",
    img_id: "2b579171cefc545ce6479e21c0016798",
  },
  {
    id: "865596",
    resName: "Costa Coffee",
    cuisines: ["Beverages"],
    avgRating: 4.3,
    deliveryTime: 67,
    costForTwo: "₹450 for two",
    img_id:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/12/b5a50792-7a44-41c2-9957-9942d6f50214_865596.jpg",
  },
  {
    id: "263663",
    resName: "Pure Veg Meals by LunchBox",
    cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
    avgRating: 4.3,
    deliveryTime: 46,
    costForTwo: "₹200 for two",
    img_id: "y2oysbch5umyyagezvwj",
  },
  {
    id: "837805",
    resName: "The Pizza Project by Oven Story",
    cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.1,
    deliveryTime: 52,
    costForTwo: "₹400 for two",
    img_id: "f1b907b0b8f86c62e4fc347c6b1434e6",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search container</div>
      <div className="res-container">
        {/* Retraunt-Cards */}
        {resData.map((res) => (
          <RestrantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const RestrantCard = (props) => {
  const { resName, cuisines, avgRating, deliveryTime, costForTwo, img_id } =
    props.resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-logo-container">
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            img_id
          }
        ></img>
      </div>
      <h3>{resName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>Delivery Time: {deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
