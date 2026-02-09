const defaultGameState = {
  bosses: {
    chill_penguin: {
      defeated: false,
      skillObtained: false
      const state = loadGameState();
state.bosses.chill_penguin.defeated = true;
state.bosses.chill_penguin.skillObtained = true;
saveGameState(state);
    }
  }
};

function loadGameState() {
  let data = JSON.parse(localStorage.getItem("gameState"));
  if (!data) {
    data = JSON.parse(JSON.stringify(defaultGameState));
    localStorage.setItem("gameState", JSON.stringify(data));
  }
  return data;
}

function saveGameState(data) {
  localStorage.setItem("gameState", JSON.stringify(data));
}
