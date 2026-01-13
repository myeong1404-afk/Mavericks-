/* ===== 공통 플레이어 데이터 (유일한 기준) ===== */
const defaultPlayerData = {
  name: "엑스",
  job: "헌터",
  level: 1,
  money: 2000,

  stats: {
    hp: 100,
    attack: 10,
    defense: 0,
    agility: 5,
    magic: 8,
    mp: 50
  },

  equipment: {
    helmet: null,
    gloves: null,
    armor: null,
    boots: null
  },

  inventory: {
    "소형 에너지 탱크": 3,
    "중형 에너지 탱크": 0,
    "대형 에너지 탱크": 0,
    "MP 탱크": 0,
    "스페셜 탱크": 0,
    "큐어 탱크": 0
  }
};

/* ===== 로드 ===== */
function loadPlayerData() {
  const data = localStorage.getItem("playerData");
  if (!data) {
    const clone = JSON.parse(JSON.stringify(defaultPlayerData));
    localStorage.setItem("playerData", JSON.stringify(clone));
    return clone;
  }
  return JSON.parse(data);
}

/* ===== 세이브 ===== */
function savePlayerData(data) {
  localStorage.setItem("playerData", JSON.stringify(data));
}
