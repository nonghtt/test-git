// 공지사항

const PAGE_SIZE = 10;

export function createNotice(id, title, body) {
  return { id, title, body, createdAt: Date.now() };
}

export function latestNotices(notices) {
  return [...notices]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, PAGE_SIZE);
}

export function searchNotices(notices, keyword) {
  return notices.filter((notice) => notice.title.includes(keyword));
}
