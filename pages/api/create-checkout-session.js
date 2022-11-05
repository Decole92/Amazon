import { getProductData } from '../../components/ProductArray';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

console.log(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {

const {arr3, email } = req.body;


 
const transformedItems = arr3.map((item) => ({

    quantity: item.quantity, 
    price_data: {
        currency: 'czk',
        unit_amount: item.price * 25 * 100,
        product_data: {
          name: item.title,
          description: item.description, //description here
          images: [item.image],
        },
    },
}));

const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
   // shipping_options:["shr_1Luw9aGxwPgIIb5AE5shdTFW"],
   /// shipping_address_collection: {
    //allowed_countries: ['GB','US','SK','CZ']
    //},


    line_items: transformedItems,
    mode: "payment",
    success_url:`${process.env.HOST}/Success`,
    cancel_url:`${process.env.HOST}/Checkout`,
    metadata: {
        email,
        images:JSON.stringify(arr3.map((item) => item.image))
    },
});
 
  res.status(200).json({id: session.id})
};