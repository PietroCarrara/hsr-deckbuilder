import { useState } from "react";
import {
  PlayerCharacterInfo,
  PlayerInfo,
  playerInfoSchema,
} from "../hoyoverse";
import { usePersistedState } from "../persistance";
import { CharacterName, gameData, RelicSet } from "../data/game-data";
import {
  OptimalMainStats,
  optimalRelicMainStats,
  optimalRelicSets,
} from "../data/prydwen";
import { buildPlan, DiffOutput } from "./lib/planner";

type CharacterAndRelicInformation = {
  character: PlayerCharacterInfo;
  optimalRelicSet: RelicSet;
  optimalRelicMainStats: OptimalMainStats;
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
        optimalRelicMainStats: optimalRelicMainStats[name],
      };
    })
    .filter((x) => x !== undefined);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <span>
          What you need to <span className="text-green-700">farm</span>:
        </span>
        <RequiredChanges info={selectedCharacters} />
      </div>
    </div>
  );
}

function RequiredChanges({ info }: { info: CharacterAndRelicInformation[] }) {
  const plan = buildPlan(
    info.map((i) => ({
      currentCharacterState: i.character,
      targetRelicSet: i.optimalRelicSet,
      targetRelicsMainStats: i.optimalRelicMainStats,
    }))
  );

  return (
    <ul className="list-disc">
      {plan.map((x) => {
        return (
          <li key={x.currentCharacterState.id}>
            {x.currentCharacterState.name}
            <ul className="ml-4 list-disc">
              <RelicDiffDisplay
                slot="body"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetRelicSet={x.targetRelicSet}
                targetRelicsMainStats={x.targetRelicsMainStats}
              />
              <RelicDiffDisplay
                slot="feet"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetRelicSet={x.targetRelicSet}
                targetRelicsMainStats={x.targetRelicsMainStats}
              />
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function RelicDiffDisplay({
  missingMainStats,
  missingSet,
  targetRelicSet,
  targetRelicsMainStats,
  slot,
}: Omit<DiffOutput[number], "currentCharacterState"> & {
  slot: "body" | "feet";
}) {
  const set = (missingSet[slot] && (
    <span className="text-green-700">{missingSet[slot].name}</span>
  )) || <span>{targetRelicSet.name}</span>;
  const mainStats = (missingMainStats[slot] && (
    <span className="text-green-700">{missingMainStats[slot]}</span>
  )) || <span>{targetRelicsMainStats[slot]}</span>;

  return (
    (missingMainStats.body || missingSet.body) && (
      <li>
        {slot}: {set} ({mainStats})
      </li>
    )
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
