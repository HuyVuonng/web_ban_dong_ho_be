const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const route = require("./src/route");
const db = require("./src/config/db");
const dotenv= require('dotenv');
dotenv.config()
const methodOverride = require('method-override') //để override sang method khác trong form
const app = express();
const port = 3000;
const nodemailer = require("nodemailer");

app.use(cors())
app.use(morgan("combined"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
// Cho phép lấy ảnh từ file img
app.use('/img', express.static('img'));
//connetc to db
db.connect();



app.post("/sendMail", async (req, res, next) => {
 
  let html = "";

  const priceConver = (price) => {
    return Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(price);
};
 

  req.body.data.products.map((prod, index) => {
    html += `<tr>
      <td>${prod.name}</td>
      <td>${prod.slmua}</td>
      <td>${priceConver(prod.price)}</td>
    </tr>`;
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "sendmailerservices@gmail.com",
      pass: process.env.PassEmail,
    },
  });
  const option = {
    from: '"Mona" <sendmailerservices@gmail.com>',
    to: `${req.body.data.email}`,
    subject: "Đặt hàng thành công",
    html: `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đặt hàng thành công</title>
  
  
    <style type="text/css">
      header {
       
        height: 20vh;
        background-color: #353535;
      }
  header div{
    margin: 0 auto;
    height: 100%;
    width: fit-content;
  }
      header div img {
        height: 100%;
        object-fit: cover;
      }
  
  
      div {
        margin: 0 auto;
        width: fit-content;
      }
  
      td{
        padding: 10px 40px 10px 0;
      }
    </style>
  </head>
  
  <body>
    <header>
      <div><img src="https://web-ban-dong-ho-be.onrender.com/img/logo-mona-2.png" alt="logo-mona-2"></div>
    </header>
  
    
     <div>
        <h4>Xin chào ${req.body.data.nameCustomer}, cảm ơn bạn đã đặt hàng của Mona</h4>
        <p>Đơn hàng của bạn đã được đặt thành công. Đơn hàng bao gồm: </p>
  
        <table>
          <tbody>

          ${html}
            <tr >
              <td colspan="2">Tổng tiền đơn hàng: </td>
              <td>${req.body.data.tongTien}</td>
            </tr>
            
          </tbody>
        </table>
     </div>
  </body>
  
  </html>
    `,
  };

  transporter.sendMail(option, (err, infor) => {
    if (err) {
      console.log("error" + err);
    } else {
      console.log("send" + infor.response);
      res.send("Gui tin thanh cong");
    }
  });
});



route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
