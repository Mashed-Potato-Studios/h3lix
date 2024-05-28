// export async function sendEmail({
//     from,
//     to,
//     subject,
//     html,
// }: {
//     from: string;
//     to: string;
//     subject: string;
//     html: string;
// }) {
//     const transporter = nodemailer.createTransport({
//         host: process.env.EMAIL_HOST,
//         port: process.env.EMAIL_PORT,
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASSWORD,
//         },
//     });

//     const mailOptions = {
//         from,
//         to,
//         subject,
//         html,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//     } catch (error) {
//         console.error('Error sending email:', error);
//         throw error;
//     }
// }
import {defineNitroPlugin} from 'nitropack/dist/runtime/plugin';
import nodemailer from 'nodemailer';

async function sendEmail({
                             from,
                             to,
                             subject,
                             html,
                         }, user: any, template: string) {
    const transporter = nodemailer.createTransport({
        host: process.env.NITRO_EMAIL_HOST,
        port: process.env.NITRO_EMAIL_PORT,
        auth: {
            user: process.env.NITRO_EMAIL_USER,
            pass: process.env.NITRO_EMAIL_PASSWORD,
        },
    });

    const options = {
        from: process.env.NITRO_SMTP_MAIL,
        to: user.email,
        subject: "Account activation",
        html: template,
    };

}

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook("request", (event) => {
        console.log("request", event)
    })
})
