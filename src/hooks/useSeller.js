
import { useEffect, useState } from 'react';

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [sellerLoading, setSellerLoading] = useState(false);
  useEffect(() => {
    if (email) {
      setSellerLoading(true)
      fetch(`http://localhost:5000/seller/${email}`)
        .then(res=>res.json())
        .then(data => {
          console.log(data)
          setSellerLoading(false)
        })
      .catch(err=>console.log(err))
   }
  }, [email])
  return [isSeller,sellerLoading]
};

export default useSeller;