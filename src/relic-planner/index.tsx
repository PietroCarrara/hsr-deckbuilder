import { useState } from "react";
import {
  PlayerCharacterInfo,
  PlayerInfo,
  playerInfoSchema,
} from "../hoyoverse";
import { usePersistedState } from "../persistance";
import { CharacterName, gameData, RelicSet } from "../data/game-data";
import { optimalRelicSets } from "../data/prydwen";

type CharacterAndRelicInformation = {
  character: PlayerCharacterInfo;
  optimalRelicSet: RelicSet;
};

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
      const character = playerInfo.data.avatar_list.find((c) => c.id === id);
      if (character === undefined) {
        return undefined;
      }

      return {
        character,
        optimalRelicSet: optimalRelicSets[name],
      };
    })
    .filter((x) => x !== undefined);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <span>Your current account:</span>
        <AccountState info={selectedCharacters} />
      </div>
      <div>
        <span>What you should change:</span>
        <RequiredChanges info={selectedCharacters} />
      </div>
    </div>
  );
}

function AccountState({ info }: { info: CharacterAndRelicInformation[] }) {
  return (
    <ul className="list-disc">
      {info.map(({ character }) => (
        <li key={character.id}>
          {character.name}
          <ul className="ml-4 list-disc">
            {character.relics.map((relic) => (
              <li key={relic.id}>
                {relic.name} (+{relic.level})
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

function RequiredChanges({ info }: { info: CharacterAndRelicInformation[] }) {
  const changeStyle = "text-rose-700";
  const keepStyle = "text-green-700";

  return (
    <ul className="list-disc">
      {info.map(({ character, optimalRelicSet }) => (
        <li key={character.id}>
          {character.name}
          <ul className="ml-4 list-disc">
            {character.relics.map((relic) => {
              const setId = relic.id.toString().substring(1, 4);
              // TODO: Take into account main stat
              const keep = relic.rarity === 5 && optimalRelicSet.id === setId;
              const style = keep ? keepStyle : changeStyle;

              return (
                <li className={style} key={relic.id}>
                  {relic.name} (+{relic.level})
                </li>
              );
            })}
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
