import React from 'react';
import { useState } from 'react';
import { PaystackButton } from "react-paystack"


const Payment = () => {
    const bookPrice = 20
    let totalPriceInKobo = (parseInt(bookPrice) * 500) * 100
    const publicKey = "pk_test_7340a62b2cbcd7182c887b72a5d0d06c5abcae10"
    const amount = totalPriceInKobo
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

  
    const componentProps = {
      email,
      amount,
      metadata: {
        name,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
    }
    return ( 
        <div className="">
            <div className="checkout-container">
                <div className="checkout-form">
                    <form>
                        <label>Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Optional'
                                onChange={(e) => setName(e.target.value)}/>
                        <label>Email</label>
                            <input
                                type="text"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}/>
                     </form>
          <PaystackButton {...componentProps} componentProps={componentProps} />
        </div>
      </div>
        </div>
     );
}
 
export default Payment;