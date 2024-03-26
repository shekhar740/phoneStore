import { IoSync } from "react-icons/io5";
import { FaBell, FaBullhorn, FaCashRegister, FaChartBar, FaChartLine, FaUserFriends } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

export const Fea = [
    {
        title: "Real-Time Inventory Updates",
        desc: "Provide functionality for retailers to track their inventory in real-time, including additions, deletions, and adjustments. This ensures accurate inventory counts throughout the day.",
        icon: IoSync
    },
    {
        title: "Daily Sales Reporting",
        desc: "Offer a feature to generate daily sales reports, detailing products sold, revenue generated, and trends in customer purchases. This helps retailers analyze daily performance and make informed decisions.",
        icon: FaChartLine
    },
    {
        title: "Customer Engagement Tracking",
        desc: "Implement tools to track customer interactions, such as purchases made, inquiries submitted, and feedback received. This data can inform personalized marketing strategies and improve customer relationships.",
        icon: FaUserFriends
    },
    {
        title: "Inventory Replenishment Alerts",
        desc: "Set up automated alerts to notify retailers when inventory levels for specific products fall below a certain threshold. This helps prevent stockouts and ensures timely replenishment.",
        icon: FaBell
    },
    {
        title: "Customer Purchase History",
        desc: "Enable retailers to view individual customer purchase histories, including past purchases, preferences, and frequency of visits. This facilitates personalized recommendations and targeted marketing efforts.",
        icon: FaHistory
    },
    {
        title: "Daily Activity Dashboard",
        desc: "Create a dashboard summarizing daily activities, such as total sales, inventory movements, and customer interactions. This provides a quick overview of daily operations for retailers to monitor.",
        icon: FaChartBar
    },
    {
        title: "Promotional Campaign Management",
        desc: "Allow retailers to create and manage promotional campaigns targeting specific customer segments or products. Track the effectiveness of these campaigns through metrics like sales uplift and customer engagement.",
        icon: FaBullhorn
    },
    {
        title: "Integration with POS Systems",
        desc: "Integrate with point-of-sale (POS) systems to automatically sync sales data and inventory changes in real-time. This streamlines data management and ensures accuracy across all systems.",
        icon: FaCashRegister
    }
];

export const info = [
    {
        title : "Happy Clients",
        num : 2089,
    },
    {
        title : "Ratings",
        num : "⭐ 4.5"
    },
    {
        title : "Total Users",
        num : "4000"
    },
    {
        title : "Winning Awards",
        num : "5"
    }
]

// week and dates of month
// export const getWeekNamesAndDatesOfMonth = (year, month) => {
//     const weekNames = [];
//     const weekDates = [];
  
//     const firstDayOfMonth = new Date(year, month, 1);
//     const lastDayOfMonth = new Date(year, month + 1, 0);
  
//     let currentDate = new Date(firstDayOfMonth);
//     let currentWeekDates = [];
  
//     // Iterate through each day of the month
//     while (currentDate <= lastDayOfMonth) {
//       const weekName = currentDate.toLocaleString('default', { weekday: 'long' });
  
//       // If a new week starts, add the current week's dates to the array and reset it
//       if (!weekNames.includes(weekName)) {
//         if (currentWeekDates.length > 0) {
//           weekDates.push(currentWeekDates);
//         }
//         weekNames.push(weekName);
//         currentWeekDates = [];
//       }
  
//       // Add the current date to the current week's dates array
//       currentWeekDates.push(currentDate.getDate());
  
//       // Move to the next day
//       currentDate.setDate(currentDate.getDate() + 1);
//     }
  
//     // Add the last week's dates to the array
//     if (currentWeekDates.length > 0) {
//       weekDates.push(currentWeekDates);
//     }
  
//     return { weekNames, weekDates };
//   };

export const getWeekNamesAndDatesOfMonth = (year, month) => {
    const weekNames = [];
    const weekDates = [];
  
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
  
    let currentDate = new Date(firstDayOfMonth);
    let currentWeekDates = [];
  
    // Iterate through each day of the month
    while (currentDate <= lastDayOfMonth) {
      const weekName = currentDate.toLocaleString('default', { weekday: 'long' });
  
      // If a new week starts, add the current week's dates to the array and reset it
      if (!weekNames.includes(weekName)) {
        if (currentWeekDates.length > 0) {
          weekDates.push(currentWeekDates);
        }
        weekNames.push(weekName);
        currentWeekDates = [];
      }
  
      // Add the current date to the current week's dates array
      currentWeekDates.push(currentDate.getDate());
  
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    // Add the last week's dates to the array
    if (currentWeekDates.length > 0) {
      weekDates.push(currentWeekDates);
    }
  
    return { weekNames, weekDates };
  };
  
  // Example usage
//   const year = 2024;
//   const month = 2; // March (0-indexed)
//   const { weekNames, weekDates } = getWeekNamesAndDatesOfMonth(year, month);
//   console.log(weekNames);
//   console.log(weekDates);
  
