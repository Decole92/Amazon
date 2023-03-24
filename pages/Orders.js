import React from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import { getSession, useSession } from "next-auth/react";
import db from "../firebase";
import { getDocs, query, collection, orderBy } from "firebase/firestore";
import moment from "moment";

function Orders({ orders }) {
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-2 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h2> {orders?.length} Order(s) </h2>
        ) : (
          <h2> Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(({ id, amount, items, timestamp, images }) => (
            <Order
              key={id}
              id={id}
              amount={amount}
              items={items}
              timestamp={timestamp}
              images={images}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // GET SESSION
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  //firebase db

  const sequence = query(
    collection(db, "users", session.user.email, "orders"),
    orderBy("timestamp", "desc")
  );
  const stripeOrders = await getDocs(sequence);

  // stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: { orders },
  };
}
