import type { NextApiRequest, NextApiResponse } from "next"
// import 
// import createTransport from "nodemailer"
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 587,
        secureConnection: false,
        auth: {
          user: process.env.EMAIL_SENDER,
          pass: process.env.PASS,
        },
        tls: {
          ciphers: "SSLv3",
        },
      });


export default async function  sendMessage({name, email, message }:{name:any, email:any, message:any}){
      // const {name, email, message } = data;
        const mailoptions = {
                from: process.env.EMAIL_SENDER,
                to: process.env.EMAIL_RECEIVER,
                subject:`New Message from ${name}`,
                text:`Name: ${name}\n Email: ${email}\n Message: ${message}`
        }
       await  transporter.sendMail(mailoptions,(e:any, info:any)=>{
            if(e){
              console.log(e)
            }else{
              console.log(info.response)
            }
       });
}