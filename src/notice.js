// 공지사항

const PAGE_SIZE = 10;

export function createNotice(id, title, body, category = "일반") {
  return { id, title, body, category, pinned: false, createdAt: Date.now() };
}

export function pinNotice(notice) {
  return { ...notice, pinned: true };
}

export function latestNotices(notices) {
  return [...notices]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, PAGE_SIZE);
}

export function searchNotices(notices, keyword) {
  return notices.filter((notice) => notice.title.includes(keyword));
}

export function pinnedNotices(notices) {
  return notices.filter((notice) => notice.pinned);
}

export function noticesByCategory(notices, category) {
  return notices.filter((notice) => notice.category === category);
}

export function isTitleTooLong(title) {
  return title.length > 50;
}

export function cancelOrder(order, reason) {
  if (order.status !== "READY") {
    throw new Error("배송이 시작된 주문은 취소할 수 없습니다");
  }
  return { ...order, status: "CANCELED", canceledAt: Date.now(), cancelReason: reason };
}