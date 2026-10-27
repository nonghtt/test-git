// 주문

const MAX_ITEMS = 20;
const FREE_SHIPPING_PRICE = 30000;
const SHIPPING_FEE = 3500;
const MIN_ORDER_PRICE = 10000;

export function createOrder(memberId, items) {
  if (items.length > MAX_ITEMS) {
    throw new Error(`한 번에 ${MAX_ITEMS}개까지만 주문할 수 있습니다`);
  }
  
  if (items.length === 0) {
    throw new Error("주문할 상품이 없습니다");
  }

  return { memberId, items, status: "READY", canceledAt: null };
}

export function totalPrice(order) {
  return order.items.reduce((sum, item) => sum + item.price * item.count, 0);
}

export function shippingFee(order) {
  return totalPrice(order) >= FREE_SHIPPING_PRICE ? 0 : SHIPPING_FEE;
}

export function couponDiscount(order, rate) {
  const maxRate = 0.3;
  return Math.floor(totalPrice(order) * Math.min(rate, maxRate));
}

export function checkMinPrice(order) {
  if (totalPrice(order) < MIN_ORDER_PRICE) {
    throw new Error(`${MIN_ORDER_PRICE}원 이상부터 주문할 수 있습니다`);
  }
}

export function addMemo(order, memo) {
  if (memo.length > 200) {
    throw new Error("메모는 200자까지 쓸 수 있습니다");
  }
  
  return { ...order, memo };
}