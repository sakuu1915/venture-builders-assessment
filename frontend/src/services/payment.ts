import { bookingAPI } from "./api";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const openRazorpay = async (
  bookingId: string
) => {
  // Create Order

  const orderRes = await bookingAPI.post(
    "/payment/create-order",
    {
      amount: 499,
    }
  );

  const order = orderRes.data.order;

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

    amount: order.amount,

    currency: order.currency,

    name: "Venture Builders",

    description: "AI Consultation",

    order_id: order.id,

    theme: {
      color: "#2563EB",
    },

    handler: async (response: any) => {
      await bookingAPI.post(
        "/payment/verify",
        {
          razorpay_order_id:
            response.razorpay_order_id,

          razorpay_payment_id:
            response.razorpay_payment_id,

          razorpay_signature:
            response.razorpay_signature,

          bookingId,
        }
      );

      alert("Payment Successful 🎉");
    },
  };

  const razor = new window.Razorpay(options);

  razor.open();
};