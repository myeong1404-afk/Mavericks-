/* ===== 스킬 데이터 ===== */
const skills = {
  "샷건 아이스": {
    name: "샷건 아이스",
    mp: 5,
    base: 22,
    scale: 4,
    element: "ice",
    description: "냉기를 응축한 산탄을 발사한다."
  }
};

/* ===== 스킬 데미지 계산 ===== */
function calcShotgunIceDamage(player) {
  const skill = skills["샷건 아이스"];

  return (
    skill.base +
    (player.level - 2) * skill.scale
  );
}
