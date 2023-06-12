import { CardElement, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const Ply = () => {
    //  const stripe = useStripe();

    //  const handleSubmit=async(e)=>{
    //     e.preventDefauult();
    //  }
    return (
       
            <form>
                    {/* option={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }} */}
                <button>
                    Pay
                </button>
            </form>
    );
};

export default Ply;