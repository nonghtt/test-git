// 회원

export function createMember(id, name) {
  return { id, name, grade: "BASIC", point: 0 };
}

export function addPoint(member, amount) {
  return { ...member, point: member.point + amount };
}

export function displayName(member) {
  return `${member.name} 고객님`;
}

export function gradeLabel(member) {
  const labels = { BASIC: "일반", SILVER: "실버", GOLD: "골드" };
return labels[member.grade];
}

export function earnPoint(member, price) {
  const rate = 0.01;
  return addPoint(member, Math.floor(price * rate));
}