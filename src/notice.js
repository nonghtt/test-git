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
