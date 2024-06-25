import emailjs from '@emailjs/react-native'

const sendEmail = (params: any) => {
  const templateParams = {
    brand: params.item.brand,
    model: params.item.model,
    price: params.item.price,
    city: params.city,
    first_name: params.firstName,
    last_name: params.lastName,
    email: params.email,
    date: params.date,
  }
  emailjs
    .send('service_mi14cf8', 'template_kjlbxzd', templateParams, {
      publicKey: 'P_9S5pXzYfn_T5ciZ',
    })
    .then(
      (response) => console.log(response.text),
      (error) => console.log(error.text)
    )
}
export default sendEmail
