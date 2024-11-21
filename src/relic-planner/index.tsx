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
  optimalMainStats,
  optimalSets,
} from "../data/prydwen";
import { diffCurrentAndTargetState, DiffOutput } from "./lib/planner";

type CharacterAndRelicInformation = {
  character: PlayerCharacterInfo;
  optimalSets: { relics: RelicSet; ornaments: RelicSet };
  optimalMainStats: OptimalMainStats;
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
        optimalSets: optimalSets[name],
        optimalMainStats: optimalMainStats[name],
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
  const diff = diffCurrentAndTargetState(
    info.map((i) => ({
      currentCharacterState: i.character,
      targetSets: i.optimalSets,
      targetRelicsMainStats: i.optimalMainStats,
    }))
  );

  return (
    <ul className="list-disc">
      {diff.map((x) => {
        return (
          <li key={x.currentCharacterState.id}>
            {x.currentCharacterState.name}
            <ul className="ml-4 list-disc">
              <RelicDiffDisplay
                slot="head"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetSets={x.targetSets}
                targetRelicsMainStats={x.targetRelicsMainStats}
              />
              <RelicDiffDisplay
                slot="hands"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetSets={x.targetSets}
                targetRelicsMainStats={x.targetRelicsMainStats}
              />
              <RelicDiffDisplay
                slot="body"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetSets={x.targetSets}
                targetRelicsMainStats={x.targetRelicsMainStats}
              />
              <RelicDiffDisplay
                slot="feet"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetSets={x.targetSets}
                targetRelicsMainStats={x.targetRelicsMainStats}
              />
              <RelicDiffDisplay
                slot="planarSphere"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetSets={x.targetSets}
                targetRelicsMainStats={x.targetRelicsMainStats}
              />
              <RelicDiffDisplay
                slot="linkRope"
                missingMainStats={x.missingMainStats}
                missingSet={x.missingSet}
                targetSets={x.targetSets}
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
  targetSets,
  targetRelicsMainStats,
  slot,
}: Omit<DiffOutput[number], "currentCharacterState"> & {
  slot: "head" | "hands" | "body" | "feet" | "planarSphere" | "linkRope";
}) {
  const targetSetName =
    slot === "planarSphere" || slot === "linkRope"
      ? targetSets.ornaments.name
      : targetSets.relics.name;

  const set = (missingSet[slot] && (
    <span className="text-green-700">{missingSet[slot].name}</span>
  )) || <span>{targetSetName}</span>;
  const mainStats =
    slot !== "head" &&
    slot !== "hands" &&
    ((missingMainStats[slot] && (
      <span className="text-green-700">({missingMainStats[slot]})</span>
    )) || <span>({targetRelicsMainStats[slot]})</span>);

  const needsToShow =
    missingSet[slot] !== null ||
    ((slot === "body" || slot === "feet") && missingMainStats[slot]);

  return (
    needsToShow &&
    (missingMainStats.body || missingSet.body) && (
      <li>
        {slot}: {set} {mainStats}
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
