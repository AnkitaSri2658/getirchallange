
import { productActions } from './product-slice';

export const fetchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'http://localhost:3000/item' //add url where item json file is hosted
       );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        productActions.replaceCart({
          products: cartData || []
        })
      );
    } catch (error) {
      
    }
  };
};

