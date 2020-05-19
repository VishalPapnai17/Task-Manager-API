const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY) 

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'vishalpapnai@gmail.com',
        subject: 'Welcome to the Task App',
        text: `Welcome to the App ${name}. Let us know how you get along with this app`
    }).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}

const sendCancellationEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'vishalpapnai@gmail.com',
        subject: 'Cancellation of Account',
        text: `Dear ${name}, We are extremely dejected that you cancelled your account and we lost a very faithful customer like you. Please let us know why you cancelled our service so that we can improve ourselve by the valuable feedback of our beloved customers`
    }).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}




