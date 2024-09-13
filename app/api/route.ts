const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.PASS,
  },
});

export async function GET(req: Request, res:Response){
    return Response.json({message:"hello ayo, you're probably the only one here"});
}
async function sendMessage({
    name,
    email,
    message,
  }: {
    name: any;
    email: any;
    message: any;
  }) {
    // const {name, email, message } = data;
    const mailoptions = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\n Email: ${email}\n Message: ${message}`,
    };
    await new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailoptions, (e: any, info: any) => {
        if (e) {
          reject(e);
        } else {
          resolve(info.response);
        }
      });
    });
  }
  
export async function POST(req:Request, res:Response){
    try {
        const data = await req.json();
        await sendMessage(data);
        return  Response.json(data);
    } catch (e) {
        console.log(e);
    }
}