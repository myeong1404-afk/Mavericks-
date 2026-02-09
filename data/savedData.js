/* ===== 게임 진행 상태 기본값 ===== */
const defaultGameState = {
  bosses: {
    chill_penguin: {
      defeated: false,
      skillObtained: false
    },
    ground_scaravich: {
      defeated: false,
      skillObtained: false
    }
  }
};

/* ===== 로드 ===== */
function loadGameState() {
  let data = JSON.parse(localStorage.getItem("gameState"));

  if (!data) {
    data = JSON.parse(JSON.stringify(defaultGameState));
    localStorage.setItem("gameState", JSON.stringify(data));
  }

  return data;
}

/* ===== 저장 ===== */
function saveGameState(data) {
  localStorage.setItem("gameState", JSON.stringify(data));
}

/* ===== 보스 클리어 처리 ===== */
function markBossDefeated(bossId, skillName = null) {
  const state = loadGameState();

  if (!state.bosses[bossId]) return;

  state.bosses[bossId].defeated = true;

  if (skillName) {
    state.bosses[bossId].skillObtained = true;
  }

  saveGameState(state);
}
