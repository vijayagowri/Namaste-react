import React from "react";
import ReactDOM  from "react-dom/client";
import logo from './images/logo.png';

const HeaderComponent =()=>{
    return(
        //Header Component
        <div>
        <div className='header'>
            <nav className="navbar container">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="none" viewBox="0 0 602 602"><g><path stroke="#E91E63" strokeMiterlimit="10" strokeWidth="24" d="M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z"></path><path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z"></path><path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z"></path><animateTransform attributeName="transform" attributeType="XML" dur="20s" from="0 301 301" repeatCount="indefinite" to="360 301 301" type="rotate"></animateTransform></g><path fill="#E91E63" d="M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z"></path></svg>
                </div>
                <div className='icon'>
                    <ul>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app-container">
            <HeaderComponent />
            <Body />
        </div>
    )
}

const restroList =  [
{
type: "restaurant",
data: {
type: "F",
id: "176071",
name: "Brahmins' Thatte Idli",
uuid: "125c3e04-1689-4772-ac9f-b0d40f00d15e",
city: "1",
area: "Malleshwaram",
totalRatingsString: "5000+ ratings",
cloudinaryImageId: "pe1savupw5miak1g0ylt",
cuisines: [
"South Indian"
],
tags: [ ],
costForTwo: 15000,
costForTwoString: "₹150 FOR TWO",
deliveryTime: 26,
minDeliveryTime: 26,
maxDeliveryTime: 26,
slaString: "26 MINS",
lastMileTravel: 4.900000095367432,
slugs: {
restaurant: "brahmins-thatte-idli-malleshwaram",
city: "bangalore"
},
cityState: "1",
address: "No 15, 2nd Main Rd, Vyalikaval, Lower Palace Orchards, Guttahalli, Bengaluru, Karnataka 560003, India",
locality: "Vyalikaval",
parentId: 1312,
unserviceable: false,
veg: false,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
aggregatedDiscountInfo: {
header: "25% off",
shortDescriptionList: [
{
meta: "25% off | Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "25% off up to ₹65 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
aggregatedDiscountInfoV2: {
header: "25% OFF",
shortDescriptionList: [
{
meta: "Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "25% off up to ₹65 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
ribbon: [
{
type: "PROMOTED"
}
],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 3900,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 3900,
message: "",
title: "Delivery Charge",
amount: "3900",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "cid=6467010~p=1~eid=00000187-73aa-68cb-0032-a53800b1010b",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "4.9 kms",
hasSurge: false,
sla: {
restaurantId: "176071",
deliveryTime: 26,
minDeliveryTime: 26,
maxDeliveryTime: 26,
lastMileTravel: 4.900000095367432,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: true,
avgRating: "4.5",
totalRatings: 5000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "47385",
name: "Priyadarshini Grand",
uuid: "cbca89ad-df12-4303-a7d2-baadc5700ff8",
city: "1",
area: "Basaveshwara Nagar",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "c9elzh8awx7jcx70cood",
cuisines: [
"South Indian",
"North Indian",
"Chaat",
"Chinese",
"Beverages"
],
tags: [ ],
costForTwo: 20000,
costForTwoString: "₹200 FOR TWO",
deliveryTime: 35,
minDeliveryTime: 35,
maxDeliveryTime: 35,
slaString: "35 MINS",
lastMileTravel: 7.5,
slugs: {
restaurant: "priyadarshini-grand-basaveshwaranagar",
city: "bangalore"
},
cityState: "1",
address: "315, Siddhaiah Puranik Road, Basaveshwara Nagar, Bangalore - 560020",
locality: "Siddhaiah Puranik Road",
parentId: 9727,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 6100,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 6100,
message: "",
title: "Delivery Charge",
amount: "6100",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 1,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "7.5 kms",
hasSurge: false,
sla: {
restaurantId: "47385",
deliveryTime: 35,
minDeliveryTime: 35,
maxDeliveryTime: 35,
lastMileTravel: 7.5,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "IT_IS_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.5",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "30903",
name: "Sannidhi Grand",
uuid: "3eacf224-7c6d-497e-903a-ebbd2101cc35",
city: "1",
area: "Kammanahalli",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "glun7fhhutgl0lkgekso",
cuisines: [
"South Indian",
"North Indian",
"Chinese",
"Beverages"
],
tags: [ ],
costForTwo: 15000,
costForTwoString: "₹150 FOR TWO",
deliveryTime: 38,
minDeliveryTime: 38,
maxDeliveryTime: 38,
slaString: "38 MINS",
lastMileTravel: 7.900000095367432,
slugs: {
restaurant: "sannidhi-grand-kammanahallikalyan-nagar-kammanahallikalyan-nagar",
city: "bangalore"
},
cityState: "1",
address: "#26, Nehru Road, Yadhav layout, kammanhalli, Bangalore -84",
locality: "Yadhav layout",
parentId: 21007,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
aggregatedDiscountInfo: {
header: "FLAT100 off",
shortDescriptionList: [
{
meta: "FLAT100 off | Use FLATDEAL",
discountType: "Flat",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "FLAT100 off | Use FLATDEAL",
discountType: "Flat",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
aggregatedDiscountInfoV2: {
header: "₹100 OFF",
shortDescriptionList: [
{
meta: "Use FLATDEAL",
discountType: "Flat",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "FLAT100 off | Use FLATDEAL",
discountType: "Flat",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 6100,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 6100,
message: "",
title: "Delivery Charge",
amount: "6100",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 1,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "7.9 kms",
hasSurge: false,
sla: {
restaurantId: "30903",
deliveryTime: 38,
minDeliveryTime: 38,
maxDeliveryTime: 38,
lastMileTravel: 7.900000095367432,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "IT_IS_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.1",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "684427",
name: "Cafe Amudham",
uuid: "e56f2694-6e06-4135-9c08-eb87c2496398",
city: "1",
area: "Jayanagar",
totalRatingsString: "100+ ratings",
cloudinaryImageId: "0bcdca61f3cd1e9135b98328593d044f",
cuisines: [
"South Indian",
"Snacks"
],
tags: [ ],
costForTwo: 40000,
costForTwoString: "₹400 FOR TWO",
deliveryTime: 31,
minDeliveryTime: 31,
maxDeliveryTime: 31,
slaString: "31 MINS",
lastMileTravel: 4,
slugs: {
restaurant: "cafe-amudham-jayanagar-jayanagar",
city: "bangalore"
},
cityState: "1",
address: "No. 192, , Lalbhagh  Siddapura, Jayanagar 1st Block, Ward No. 144,  Bangalore, B.B.M.P South, Karnataka-560011",
locality: "Lalbhagh  Siddapura",
parentId: 396620,
unserviceable: false,
veg: false,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
ribbon: [
{
type: "PROMOTED"
}
],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 3900,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 3900,
message: "",
title: "Delivery Charge",
amount: "3900",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "cid=6467420~p=4~eid=00000187-73aa-68cb-0032-a53900b1046e",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "4 kms",
hasSurge: false,
sla: {
restaurantId: "684427",
deliveryTime: 31,
minDeliveryTime: 31,
maxDeliveryTime: 31,
lastMileTravel: 4,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: true,
avgRating: "4.6",
totalRatings: 100,
new: true
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "2415",
name: "Veena Stores",
uuid: "450ddba7-89d1-4317-91a9-d3e559f56587",
city: "1",
area: "Malleshwaram",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "vt1mquaxmeugaf9dl5pp",
cuisines: [
"South Indian"
],
tags: [ ],
costForTwo: 10000,
costForTwoString: "₹100 FOR TWO",
deliveryTime: 32,
minDeliveryTime: 32,
maxDeliveryTime: 32,
slaString: "32 MINS",
lastMileTravel: 5.800000190734863,
slugs: {
restaurant: "veena-stores-malleshwaram",
city: "bangalore"
},
cityState: "1",
address: "#187, 15th Cross, Margosa Road, Malleshwaram",
locality: "Margosa Road",
parentId: 20940,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 4900,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 4900,
message: "",
title: "Delivery Charge",
amount: "4900",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "5.8 kms",
hasSurge: false,
sla: {
restaurantId: "2415",
deliveryTime: 32,
minDeliveryTime: 32,
maxDeliveryTime: 32,
lastMileTravel: 5.800000190734863,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.5",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "3883",
name: "Vidyarthi Bhavan",
uuid: "3f4171f1-63c4-461a-a21d-01e5aaa624c6",
city: "1",
area: "Basavanagudi",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "tvur6lwwvnd2euflpswm",
cuisines: [
"South Indian"
],
tags: [ ],
costForTwo: 15000,
costForTwoString: "₹150 FOR TWO",
deliveryTime: 33,
minDeliveryTime: 33,
maxDeliveryTime: 33,
slaString: "33 MINS",
lastMileTravel: 4.300000190734863,
slugs: {
restaurant: "vidhyarthi-bhavan-basavanagudi",
city: "bangalore"
},
cityState: "1",
address: "#32, Gandhi Bazar Main Road, Basvangudi, Bangalore-04",
locality: "Gandhi Bazaar Main Road",
parentId: 20949,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 3900,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 3900,
message: "",
title: "Delivery Charge",
amount: "3900",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "4.3 kms",
hasSurge: false,
sla: {
restaurantId: "3883",
deliveryTime: 33,
minDeliveryTime: 33,
maxDeliveryTime: 33,
lastMileTravel: 4.300000190734863,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.3",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "3369",
name: "Truffles",
uuid: "992d9ef3-bef1-4d1a-8a96-3ced9e363d43",
city: "1",
area: "St Marks Road",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
cuisines: [
"American",
"Desserts",
"Continental",
"Italian"
],
tags: [ ],
costForTwo: 45000,
costForTwoString: "₹450 FOR TWO",
deliveryTime: 24,
minDeliveryTime: 24,
maxDeliveryTime: 24,
slaString: "24 MINS",
lastMileTravel: 0.8999999761581421,
slugs: {
restaurant: "truffles-ice-spice-central-bangalore",
city: "bangalore"
},
cityState: "1",
address: "22, St. Marks Road, Bangalore",
locality: "Ashok Nagar",
parentId: 218065,
unserviceable: false,
veg: false,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
aggregatedDiscountInfo: {
header: "20% off",
shortDescriptionList: [
{
meta: "20% off | Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "20% off up to ₹50 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
aggregatedDiscountInfoV2: {
header: "20% OFF",
shortDescriptionList: [
{
meta: "Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "20% off up to ₹50 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
ribbon: [
{
type: "PROMOTED"
}
],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 2700,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 2700,
message: "",
title: "Delivery Charge",
amount: "2700",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "cid=6467054~p=7~eid=00000187-73aa-68cb-0032-a53a00b10708",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "0.8 kms",
hasSurge: false,
sla: {
restaurantId: "3369",
deliveryTime: 24,
minDeliveryTime: 24,
maxDeliveryTime: 24,
lastMileTravel: 0.8999999761581421,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: true,
avgRating: "4.4",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "607314",
name: "Namaste",
uuid: "153cd716-c7ca-436c-bd8e-825e6f08d9c8",
city: "1",
area: "Vijayanagar",
totalRatingsString: "1000+ ratings",
cloudinaryImageId: "dzacemjl8oskvogrxpyw",
cuisines: [
"South Indian",
"Thalis",
"Snacks",
"Biryani",
"Indian",
"Chinese",
"Desserts",
"Beverages"
],
tags: [ ],
costForTwo: 10000,
costForTwoString: "₹100 FOR TWO",
deliveryTime: 35,
minDeliveryTime: 35,
maxDeliveryTime: 35,
slaString: "35 MINS",
lastMileTravel: 7.400000095367432,
slugs: {
restaurant: "namaste-vijayanagar-vijayanagar",
city: "bangalore"
},
cityState: "1",
address: "#80, Marenahalli Main Road, Vijayanagar 560040",
locality: "Marenahalli Main Road",
parentId: 366271,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
aggregatedDiscountInfo: {
header: "20% off",
shortDescriptionList: [
{
meta: "20% off | Use PARTY",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "20% off | Use code PARTY",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
aggregatedDiscountInfoV2: {
header: "20% OFF",
shortDescriptionList: [
{
meta: "Use PARTY",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "20% off | Use code PARTY",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 6100,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 6100,
message: "",
title: "Delivery Charge",
amount: "6100",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 1,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "7.4 kms",
hasSurge: false,
sla: {
restaurantId: "607314",
deliveryTime: 35,
minDeliveryTime: 35,
maxDeliveryTime: 35,
lastMileTravel: 7.400000095367432,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "IT_IS_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.0",
totalRatings: 1000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "15962",
name: "A2B - Adyar Ananda Bhavan",
uuid: "5043455d-712a-48c0-bcec-18a63b7434ce",
city: "1",
area: "Frazer Town",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "pbfpu4f1h5qo1hexac0g",
cuisines: [
"South Indian",
"North Indian",
"Sweets",
"Chinese"
],
tags: [ ],
costForTwo: 30000,
costForTwoString: "₹300 FOR TWO",
deliveryTime: 33,
minDeliveryTime: 33,
maxDeliveryTime: 33,
slaString: "33 MINS",
lastMileTravel: 4.5,
slugs: {
restaurant: "a2b-adyar-ananda-bhavan-ulsoor-central-bangalore",
city: "bangalore"
},
cityState: "1",
address: "37/3, Tank Road, Civil Station, Near Ulsoor Lake, Opp. to Shanthi Sagar, Bangalore 42",
locality: "Pulikeshi Nagar",
parentId: 22,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
aggregatedDiscountInfo: {
header: "20% off",
shortDescriptionList: [
{
meta: "20% off | Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "20% off up to ₹50 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
aggregatedDiscountInfoV2: {
header: "20% OFF",
shortDescriptionList: [
{
meta: "Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "20% off up to ₹50 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
ribbon: [
{
type: "PROMOTED"
}
],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 3900,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 3900,
message: "",
title: "Delivery Charge",
amount: "3900",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "cid=6468884~p=13~eid=00000187-73aa-68cb-0032-a53c00b10d46",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "4.5 kms",
hasSurge: false,
sla: {
restaurantId: "15962",
deliveryTime: 33,
minDeliveryTime: 33,
maxDeliveryTime: 33,
lastMileTravel: 4.5,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: true,
avgRating: "4.4",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "34301",
name: "Sri Udupi Park (100ft Road)",
uuid: "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
city: "1",
area: "Indiranagar",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "jxp8y1chnqljwqylpkov",
cuisines: [
"South Indian",
"North Indian",
"Chaat",
"Beverages",
"Chinese"
],
tags: [ ],
costForTwo: 10000,
costForTwoString: "₹100 FOR TWO",
deliveryTime: 42,
minDeliveryTime: 42,
maxDeliveryTime: 42,
slaString: "42 MINS",
lastMileTravel: 6,
slugs: {
restaurant: "sri-udupi-park-indiranagar-indiranagar",
city: "bangalore"
},
cityState: "1",
address: "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
locality: "Defence Colony",
parentId: 194697,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 5500,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 5500,
message: "",
title: "Delivery Charge",
amount: "5500",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 1,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "6 kms",
hasSurge: false,
sla: {
restaurantId: "34301",
deliveryTime: 42,
minDeliveryTime: 42,
maxDeliveryTime: 42,
lastMileTravel: 6,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "IT_IS_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.4",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "56428",
name: "Puliyogare Point",
uuid: "49970568-119d-436c-9dad-042d9c07c7ff",
city: "1",
area: "Basavanagudi",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "wet9zrjusmdtkk16jlrz",
cuisines: [
"South Indian"
],
tags: [ ],
costForTwo: 15000,
costForTwoString: "₹150 FOR TWO",
deliveryTime: 29,
minDeliveryTime: 29,
maxDeliveryTime: 29,
slaString: "29 MINS",
lastMileTravel: 4.900000095367432,
slugs: {
restaurant: "puliyogare-point-basavanagudi-basavanagudi",
city: "bangalore"
},
cityState: "1",
address: "No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi",
locality: "N.R Colony",
parentId: 8409,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
aggregatedDiscountInfo: {
header: "10% off",
shortDescriptionList: [
{
meta: "10% off | Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "10% off up to ₹40 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
aggregatedDiscountInfoV2: {
header: "10% OFF",
shortDescriptionList: [
{
meta: "Use TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "10% off up to ₹40 | Use code TRYNEW",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 3900,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 3900,
message: "",
title: "Delivery Charge",
amount: "3900",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "4.9 kms",
hasSurge: false,
sla: {
restaurantId: "56428",
deliveryTime: 29,
minDeliveryTime: 29,
maxDeliveryTime: 29,
lastMileTravel: 4.900000095367432,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.5",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "296218",
name: "Hotel Dwarka",
uuid: "5d89718f-5fdf-4a78-b6f8-f8ccc9b7b6bf",
city: "1",
area: "Basavanagudi",
totalRatingsString: "5000+ ratings",
cloudinaryImageId: "aqndq5znlt3iifroa1mt",
cuisines: [
"South Indian"
],
tags: [ ],
costForTwo: 20000,
costForTwoString: "₹200 FOR TWO",
deliveryTime: 39,
minDeliveryTime: 39,
maxDeliveryTime: 39,
slaString: "39 MINS",
lastMileTravel: 6.099999904632568,
slugs: {
restaurant: "hotel-dwarka-basavanagudi-basavanagudi",
city: "bangalore"
},
cityState: "1",
address: "7th Cross Rd, NR Colony, Basavanagudi, Bengaluru, Karnataka  560004",
locality: "NR Colony",
parentId: 21130,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 5500,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 5500,
message: "",
title: "Delivery Charge",
amount: "5500",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 1,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "6 kms",
hasSurge: false,
sla: {
restaurantId: "296218",
deliveryTime: 39,
minDeliveryTime: 39,
maxDeliveryTime: 39,
lastMileTravel: 6.099999904632568,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "IT_IS_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.5",
totalRatings: 5000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "57086",
name: "Priyadarshini Veg",
uuid: "f2c8d945-8215-4f9a-a25b-4f7c57c512d4",
city: "1",
area: "Yeshwantpur",
totalRatingsString: "10000+ ratings",
cloudinaryImageId: "cdvfsusuorofg8dbocg4",
cuisines: [
"North Indian",
"South Indian",
"Chinese",
"Fast Food",
"Desserts"
],
tags: [ ],
costForTwo: 15000,
costForTwoString: "₹150 FOR TWO",
deliveryTime: 38,
minDeliveryTime: 38,
maxDeliveryTime: 38,
slaString: "38 MINS",
lastMileTravel: 8.100000381469727,
slugs: {
restaurant: "priyadarshini-veg-sanjay-nagar-new-bel-rd-yeshwanthpur-yeshwanthpur",
city: "bangalore"
},
cityState: "1",
address: "765. 1st Main Road, 5th Cross, Yeshwanthpura, Bangalore 560022",
locality: "LCR Complex",
parentId: 9726,
unserviceable: false,
veg: true,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 6900,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 6900,
message: "",
title: "Delivery Charge",
amount: "6900",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 1,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "8.1 kms",
hasSurge: false,
sla: {
restaurantId: "57086",
deliveryTime: 38,
minDeliveryTime: 38,
maxDeliveryTime: 38,
lastMileTravel: 8.100000381469727,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "IT_IS_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: false,
avgRating: "4.4",
totalRatings: 10000,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
type: "F",
id: "448012",
name: "Third Wave Coffee",
uuid: "8eebcdb0-97a9-4b17-9078-e1252ff4a974",
city: "1",
area: "Vasanth Nagar",
totalRatingsString: "100+ ratings",
cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
cuisines: [
"Beverages",
"Bakery",
"Continental"
],
tags: [ ],
costForTwo: 40000,
costForTwoString: "₹400 FOR TWO",
deliveryTime: 23,
minDeliveryTime: 23,
maxDeliveryTime: 23,
slaString: "23 MINS",
lastMileTravel: 2.799999952316284,
slugs: {
restaurant: "third-wave-coffee-roasters-central-bangalore-central-bangalore-2",
city: "bangalore"
},
cityState: "1",
address: "Third Wave Coffee, No. 18/5 'Executive Chambers'  Ground floor Cunningham Road, Bangalore Shivaji nagara, BBMP East Karnataka 560052",
locality: "Cunnigham road",
parentId: 274773,
unserviceable: false,
veg: false,
select: false,
favorite: false,
tradeCampaignHeaders: [ ],
aggregatedDiscountInfo: {
header: "40% off",
shortDescriptionList: [
{
meta: "40% off | Use GUILTFREE",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "40% off up to ₹100 | Use code GUILTFREE",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
aggregatedDiscountInfoV2: {
header: "40% OFF",
shortDescriptionList: [
{
meta: "Use GUILTFREE",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
descriptionList: [
{
meta: "40% off up to ₹100 | Use code GUILTFREE",
discountType: "Percentage",
operationType: "RESTAURANT"
}
],
subHeader: "",
headerType: 0,
superFreedel: ""
},
ribbon: [
{
type: "PROMOTED"
}
],
chain: [ ],
feeDetails: {
fees: [
{
name: "distance",
fee: 2700,
message: ""
},
{
name: "time",
fee: 0,
message: ""
},
{
name: "special",
fee: 0,
message: ""
}
],
totalFees: 2700,
message: "",
title: "Delivery Charge",
amount: "2700",
icon: ""
},
availability: {
opened: true,
nextOpenMessage: "",
nextCloseMessage: ""
},
longDistanceEnabled: 0,
rainMode: "NONE",
thirdPartyAddress: false,
thirdPartyVendor: "",
adTrackingID: "cid=6362309~p=16~eid=00000187-73aa-68cb-0032-a53d00b11035",
badges: {
imageBased: [ ],
textBased: [ ],
textExtendedBadges: [ ]
},
lastMileTravelString: "2.7 kms",
hasSurge: false,
sla: {
restaurantId: "448012",
deliveryTime: 23,
minDeliveryTime: 23,
maxDeliveryTime: 23,
lastMileTravel: 2.799999952316284,
lastMileDistance: 0,
serviceability: "SERVICEABLE",
rainMode: "NONE",
longDistance: "NOT_LONG_DISTANCE",
preferentialService: false,
iconType: "EMPTY"
},
promoted: true,
avgRating: "4.4",
totalRatings: 100,
new: false
},
subtype: "basic"
},
{
type: "restaurant",
data: {
id: "205813",
name: "Paakashala",
cloudinaryImageId: "thkhqrsskc5745ztfz2v",
cuisines: [
"South Indian",
"North Indian",
"Chinese"
],
costForTwo: 50000,
deliveryTime: 22,
avgRating: "4.3",
},
}
]

const Body = ()=>{
    const displatFlex = {"display":"flex", "flex-wrap":"wrap"}
    return(
        <>
        <div style={{'margin-top':'10px'}}>
            <button>Top Rated Restaurants</button>
        </div>
        <div style={displatFlex}>
            {
            restroList.map(restaurant=>(
                <RestoComponent resObj={restaurant} />
            ))
            }
            
        </div>
        </>
    )
}
const RestoComponent = (props)=>{
    const {resObj} = props; 
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resObj.data;
    return (
           <div className="resto-card">
           <img alt="" src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId }/> 
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
            </div> 
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)