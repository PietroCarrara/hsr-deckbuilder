import { useState } from "react";
import { PlayerInfo, playerInfoSchema } from "../hoyoverse";
import { usePersistedState } from "../persistance";
import { CharacterName, gameData } from "../data/game-data";

export function RelicPlanner() {
  const [playerInfo, setPlayerInfo] = usePersistedState<null | PlayerInfo>(
    null,
    "playerInfo"
  );

  if (playerInfo === null) {
    return <ImportPlayerInfo onSetPlayerInfo={setPlayerInfo} />;
  }

  // TODO: Replace this with UI controls
  const selectedCharactersNames: CharacterName[] = [
    "Sushang",
    "Welt",
    "Sparkle",
    "Gallagher",
    "Clara",
    "Topaz & Numby",
    "Moze",
    "Aventurine",
    "Acheron",
    "Pela",
  ];
  const selectedCharacters = selectedCharactersNames
    .map((name) => {
      const id = gameData.characters[name].id;
      return playerInfo.data.avatar_list.find((c) => c.id === id);
    })
    .filter((x) => x !== undefined);

  return (
    <ul>
      {selectedCharacters.map((char) => (
        <li>
          {char.name}
          <ul>
            {char.relics.map((relic) => (
              <li>
                {relic.name} (+{relic.level})
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function ImportPlayerInfo({
  onSetPlayerInfo,
}: {
  onSetPlayerInfo: (info: PlayerInfo) => void;
}) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const playerInfo = playerInfoSchema.parse(JSON.parse(text));
        onSetPlayerInfo(playerInfo);
      }}
    >
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Import</button>
    </form>
  );
}
