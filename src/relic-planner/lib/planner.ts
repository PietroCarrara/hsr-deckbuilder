import { RelicSet } from "../../data/game-data";
import { OptimalMainStats } from "../../data/prydwen";
import {
  MainStat,
  parseMainStatsCode,
  PlayerCharacterInfo,
  relicPosToSlot,
} from "../../hoyoverse";

export type DiffInput = Array<{
  currentCharacterState: PlayerCharacterInfo;
  targetRelicSet: RelicSet;
  targetRelicsMainStats: OptimalMainStats;
  // TODO: maybe targetRelicSubstats?
}>;

export type DiffOutput = Array<{
  currentCharacterState: PlayerCharacterInfo;
  targetRelicSet: RelicSet;
  targetRelicsMainStats: OptimalMainStats;

  missingMainStats: {
    body: MainStat | null;
    feet: MainStat | null;
    planarSphere: MainStat | null;
    linkRope: MainStat | null;
  };
  missingSet: {
    body: RelicSet | null;
    feet: RelicSet | null;
    planarSphere: RelicSet | null;
    linkRope: RelicSet | null;
  };
}>;

// TODO: Actually plan where to farm and what main stats to look out for
export function buildPlan(input: DiffInput): DiffOutput {
  return diffCurrentAndTargetState(input);
}

function diffCurrentAndTargetState(input: DiffInput): DiffOutput {
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
    ({ targetRelicSet, currentCharacterState, ...rest }) => {
      const bodyRelicId = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "body"
      )?.id;
      const feetRelicId = currentCharacterState.relics.find(
        (r) => relicPosToSlot[r.pos] === "feet"
      )?.id;

      const bodyRelicSetId = bodyRelicId?.toString().substring(1, 4);
      const feetRelicSetId = feetRelicId?.toString().substring(1, 4);

      return {
        currentCharacterState,
        targetRelicSet,
        missingSet: {
          body:
            bodyRelicSetId && bodyRelicSetId === targetRelicSet.id
              ? null
              : targetRelicSet,
          feet:
            feetRelicSetId && feetRelicSetId === targetRelicSet.id
              ? null
              : targetRelicSet,

          // TODO: Check ornaments
          planarSphere: null,
          linkRope: null,
        },
        ...rest,
      };
    }
  );

  return withMissingSets;
}
