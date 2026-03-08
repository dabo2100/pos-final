import Swal from 'sweetalert2';
import { useCart } from '../store';

export default function useLogic() {
  const { cart, setCart } = useCart();

  const addToCart = (el) => {
    let index = cart.findIndex((product) => product.documentId == el.documentId);
    let copy = [...cart];
    if (index == -1) {
      copy.push({ ...el, qty: 1 });
    } else {
      copy[index].qty++;
    }
    setCart(copy);
  };

  const clearCart = () => {
    Swal.fire({
      icon: 'question',
      showCancelButton: true,
      text: 'Are you sure you want to clear cart ?',
    }).then((res) => {
      if (res.isConfirmed) {
        setCart([]);
        Swal.fire({ icon: 'success', text: 'Cart Cleared Successfully' });
      }
    });
  };

  return { addToCart, clearCart };
}
