// module.exports = {
//   async afterCreate(event) {
//     // Connected to "Save" button in admin panel
//     const { result } = event;
//     console.log(result.ordercart.orderCart);

//     const cartList = {};

//     try {
//       await strapi.plugins["email"].services.email.send({
//         to: `${result.email}`,
//         cc: "teckhongcs@outlook.com",
//         from: "tnchnkit@hotmail.com", // e.g. single sender verification in SendGrid
//         subject: "[CONFIRMATION] YOUR ORDER HAS BEEN PLACED!",
//         // template_id: "d-c7bab59662b540db99edd56d4cf15c45",
//         html: `
//         <html>
//   <head>
//     <style>
//       body {
//         font-family: Arial, sans-serif;
//         color: #11255d;
//         background-color: #f5f5f5;
//       }

//       h1 {
//         text-align:center;
//         color: #11255d;
//         margin-top: 50px;
//         margin-bottom: 30px;
//       }

//       table {
//         border-collapse: collapse;
//         width: 100%;
//       }

//       th, td {
//         border: 1px solid #11255d;
//         padding: 10px;
//         text-align: left;
//       }

//       th {
//         background-color: #95b3ac;
//       }

//       .order-details {
//         margin-top: 20px;
//         margin-bottom: 50px;
//       }

//       .order-number {
//         font-weight: bold;
//       }

//       .total {
//         text-align: right;
//         font-weight: bold;
//         margin-top: 50px;
//         margin-bottom: 50px;
//       }

//       .contact {
//         margin-top: 50px;
//       }
//     </style>
//   </head>
//   <body>
//     <h1>Order Confirmation</h1>
//     <p>Dear ${result.name},</p>
//     <p>Thank you for placing your order with us! We're excited to contact you regarding your order soon.</p>
//     <p>Your order number is: <span class="order-number">${result.id}</span></p>
//     <p>Here's a summary of your order:</p>
//     <table class="order-details">
//       <thead>
//         <tr>
//         <th>Image</th>
//           <th>Item Name</th>
//           <th>Quantity</th>
//           <th>Price/Unit</th>
//           <th>Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         ${result.ordercart.orderCart
//           .map(
//             (result) =>
//               `<tr><td><img src="${
//                 result.image
//               }" alt="product image" height="200" w="200"></td><td>${
//                 result.name
//               }</td><td>${result.quantity}</td><td>RM ${result.price.toFixed(
//                 2
//               )}/${result.unit}</td><td>RM ${(
//                 result.quantity * result.price
//               ).toFixed(2)}</td></tr>`
//           )
//           .join("")}
//       </tbody>
//     </table>
//     <p class="total">Total estimated cost:  <strong>
//       RM ${result.amount.toFixed(2)}
//     </strong></p>
//     <p class="contact">If you have any questions about your order, please feel free to reach out to us at teckhongcs@outlook.com</p>
//     <p>Thank you again for your order!</p>
//     <p>Best regards,</p>
//     <p>Teck Hong ColdStorage Team</p>
//   </body>
// </html>
//       `,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };
// {
//   /* <h1>Hi ${result.name}! We have received your order!</h1>
//         <p>Thank you for ordering with Teck Hong ColdStorage. We will contact you to finalize the order within 2 business days. </p>
//         <h2>Order Summary</h2> */
// }
module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    console.log(result.ordercart);
    try {
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        from: "order@teckhongcoldstorage.com", // e.g. single sender verification in SendGrid
        subject: "[CONFIRMATION] YOUR ORDER HAS BEEN PLACED!",
        // template_id: "d-c7bab59662b540db99edd56d4cf15c45",
        html: `
                <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #11255d;
                background-color: #f5f5f5;
              }

              h1 {
                text-align:center;
                color: #11255d;
                margin-top: 50px;
                margin-bottom: 30px;
              }

              table {
                border-collapse: collapse;
                width: 100%;
              }

              th, td {
                border: 1px solid #11255d;
                padding: 10px;
                text-align: left;
              }

              th {
                background-color: #95b3ac;
              }

              .order-details {
                margin-top: 20px;
                margin-bottom: 50px;
              }

              .order-number {
                font-weight: bold;
              }

              .total {
                text-align: right;
                font-weight: bold;
                margin-top: 50px;
                margin-bottom: 50px;
              }

              .contact {
                margin-top: 50px;
              }
            </style>
          </head>
          <body>
            <h1>Order Confirmation</h1>
            <p>Dear ${result.name},</p>
            <p>Thank you for placing your order with us! We're excited to contact you regarding your order soon.</p>
            <p>Your order number is: <span class="order-number">${
              result.id
            }</span></p>
            <p>Here's a summary of your order:</p>
            <table className="order-details">
            <thead>
              <tr>
              <th>Image</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price/Unit</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${result.ordercart
                .map(
                  (result) =>
                    `<tr>
                <td><img src=${
                  result.image
                } alt="product image" height="200" w="200"></td>
                      <td>${result.name}</td>
                      <td>${result.quantity}</td>
                      <td>RM ${result.price.toFixed(2)}/${result.unit}</td>
                      <td>RM ${(result.quantity * result.price).toFixed(2)}</td>
                    </tr>`
                )
                .join("")}
            </tbody>
          </table>
            <p class="total">Total estimated cost:  <strong>
              RM ${result.amount.toFixed(2)}
            </strong></p>
            <p class="contact">If you have any questions about your order, please feel free to reach out to us at teckhongcs@outlook.com</p>
            <p>Thank you again for your order!</p>
            <p>Best regards,</p>
            <p>Teck Hong ColdStorage Team</p>
          </body>
        </html>
              `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
