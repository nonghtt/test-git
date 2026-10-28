// 쿠폰

export function isExpired(coupon, today) {
  return coupon.expireAt < today;
}
