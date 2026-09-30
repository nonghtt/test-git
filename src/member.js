// 회원

export function createMember(id, name) {
  return { id, name, grade: "BASIC", point: 0 };
}

export function addPoint(member, amount) {
  return { ...member, point: member.point + amount };
}

export function displayName(member) {
  return `${member.name} 님`;
}
