/* ===== 공통 플레이어 데이터 ===== */
const defaultPlayerData = {
  name: "엑스",
  job: "헌터",
  level: 1,
  money: 9999,

  baseStats: {
    hp: 100,
    attack: 10,
    defense: 0,
    agility: 5,
    magic: 8,
    mp: 50
  },

  stats: {},

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

const equipmentBonus = {
  "C급 헬멧": { magic: 2 },
  "B급 헬멧": { magic: 4 },
  "A급 헬멧": { magic: 7 },
  "S급 헬멧": { magic: 11 },

  "C급 장갑": { attack: 2 },
  "B급 장갑": { attack: 4 },
  "A급 장갑": { attack: 6 },
  "S급 장갑": { attack: 9 },

  "C급 갑옷": { defense: 1 },
  "B급 갑옷": { defense: 2 },
  "A급 갑옷": { defense: 3 },
  "S급 갑옷": { defense: 5 },

  "C급 부츠": { agility: 2 },
  "B급 부츠": { agility: 4 },
  "A급 부츠": { agility: 6 },
  "S급 부츠": { agility: 9 }
};

function loadPlayerData() {
  let data = JSON.parse(localStorage.getItem("playerData"));

  if (!data) {
    data = JSON.parse(JSON.stringify(defaultPlayerData));
  }

  // ⭐ 무조건 스탯 재계산
  recalcStats(data);
  savePlayerData(data);

  return data;
}

function savePlayerData(data) {
  localStorage.setItem("playerData", JSON.stringify(data));
}

function recalcStats(data) {
  data.stats = { ...data.baseStats };

  Object.values(data.equipment).forEach(eq => {
    if (eq && equipmentBonus[eq]) {
      for (const key in equipmentBonus[eq]) {
        data.stats[key] += equipmentBonus[eq][key];
      }
    }
  });
}
