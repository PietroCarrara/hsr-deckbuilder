import {
  Cavern,
  CavernName,
  caverns,
  RelicSet,
  RelicSetName,
} from "../../data/game-data";
import { OptimalMainStats } from "../../data/prydwen";
import {
  MainStat,
  parseMainStatsCode,
  PlayerCharacterInfo,
  relicPosToSlot,
} from "../../hoyoverse";

export type DiffInput = Array<{
  currentCharacterState: PlayerCharacterInfo;
  targetSets: { relics: RelicSet; ornaments: RelicSet };
  targetRelicsMainStats: OptimalMainStats;
}>;

export type DiffOutput = Array<{
  currentCharacterState: PlayerCharacterInfo;
  targetSets: { relics: RelicSet; ornaments: RelicSet };
  targetRelicsMainStats: OptimalMainStats;

  missingMainStats: {
    body: MainStat | null;
    feet: MainStat | null;
    planarSphere: MainStat | null;
    linkRope: MainStat | null;
  };
  missingSet: {
    head: RelicSet | null;
    hands: RelicSet | null;
    body: RelicSet | null;
    feet: RelicSet | null;
    planarSphere: RelicSet | null;
    linkRope: RelicSet | null;
  };
}>;

export type Plan = {
  whereToFarm: Array<{
    cavern: Cavern;
    votes: number;
  }>;
};

export function buildPlan(input: DiffInput): Plan {
  const diff = diffCurrentAndTargetState(input);

  const cavernVotes: Record<CavernName, number> = {
    "Path of Gelid Wind": 0,
    "Path of Jabbing Punch": 0,
    "Path of Drifting": 0,
    "Path of Providence": 0,
    "Path of Holy Hymn": 0,
    "Path of Conflagration": 0,
    "Path of Elixir Seekers": 0,
    "Path of Darkness": 0,
    "Path of Uncertainty": 0,
    "Path of Dreamdive": 0,
    "Path of Cavalier": 0,
  };

  for (const character of diff) {
    const missingRelics = [
      character.missingSet.head,
      character.missingSet.hands,
      character.missingSet.body,
      character.missingSet.feet,

      // Relics that don't have their main stats also count when considering where to farm,
      // so let's farm their target sets
      character.missingMainStats.body === null
        ? null
        : character.targetSets.relics,
      character.missingMainStats.feet === null
        ? null
        : character.targetSets.relics,
    ].filter((x) => x !== null);

    for (const relicSet of missingRelics) {
      const cavern = cavernWhereToFarmRelic(relicSet.name);
      cavernVotes[cavern.name]++;
    }
  }

  const whereToFarm = caverns.map((cavern) => ({
    cavern,
    votes: cavernVotes[cavern.name],
  }));
  whereToFarm.sort((a, b) => -(a.votes - b.votes)); // Sort descending

  return {
    whereToFarm,
  };
}

export function diffCurrentAndTargetState(input: DiffInput): DiffOutput {
  const withMissingMainStats = input.map(
    ({ targetRelicsMainStats, currentCharacterState, ...rest }) => {
      const bodyRelic = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "body"
      );
      const feetRelic = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "feet"
      );

      return {
        currentCharacterState,
        targetRelicsMainStats,
        missingMainStats: {
          body:
            bodyRelic &&
            bodyRelic.rarity === 5 &&
            parseMainStatsCode(bodyRelic?.main_property.property_type) ===
              targetRelicsMainStats.body
              ? null
              : targetRelicsMainStats.body,
          feet:
            feetRelic &&
            feetRelic.rarity === 5 &&
            parseMainStatsCode(feetRelic?.main_property.property_type) ===
              targetRelicsMainStats.feet
              ? null
              : targetRelicsMainStats.feet,

          // TODO: Check ornaments
          planarSphere: null,
          linkRope: null,
        },
        ...rest,
      };
    }
  );

  const withMissingSets = withMissingMainStats.map(
    ({ targetSets, currentCharacterState, ...rest }) => {
      const headRelicId = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "head"
      )?.id;
      const handsRelicId = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "hands"
      )?.id;
      const bodyRelicId = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "body"
      )?.id;
      const feetRelicId = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "feet"
      )?.id;
      const sphereRelicId = currentCharacterState.ornaments.find(
        (o) => relicPosToSlot[o.pos] === "planarSphere"
      )?.id;
      const ropeRelicId = currentCharacterState.ornaments.find(
        (o) => relicPosToSlot[o.pos] === "linkRope"
      )?.id;

      const headRelicSetId = headRelicId?.toString().substring(1, 4);
      const handsRelicSetId = handsRelicId?.toString().substring(1, 4);
      const bodyRelicSetId = bodyRelicId?.toString().substring(1, 4);
      const feetRelicSetId = feetRelicId?.toString().substring(1, 4);
      const sphereRelicSetId = sphereRelicId?.toString().substring(1, 4);
      const ropeRelicSetId = ropeRelicId?.toString().substring(1, 4);

      return {
        currentCharacterState,
        targetSets,
        missingSet: {
          head:
            headRelicSetId && headRelicSetId === targetSets.relics.id
              ? null
              : targetSets.relics,
          hands:
            handsRelicSetId && handsRelicSetId === targetSets.relics.id
              ? null
              : targetSets.relics,
          body:
            bodyRelicSetId && bodyRelicSetId === targetSets.relics.id
              ? null
              : targetSets.relics,
          feet:
            feetRelicSetId && feetRelicSetId === targetSets.relics.id
              ? null
              : targetSets.relics,

          planarSphere:
            sphereRelicSetId && sphereRelicSetId === targetSets.ornaments.id
              ? null
              : targetSets.ornaments,
          linkRope:
            ropeRelicSetId && ropeRelicSetId === targetSets.ornaments.id
              ? null
              : targetSets.ornaments,
        },
        ...rest,
      };
    }
  );

  return withMissingSets;
}

function cavernWhereToFarmRelic(relicSet: RelicSetName) {
  const cavern = caverns.find((c) =>
    (c.drops as unknown as string[]).includes(relicSet)
  );

  if (cavern === undefined) {
    throw `no cavern found for relic set "${relicSet}"`;
  }

  return cavern;
}
