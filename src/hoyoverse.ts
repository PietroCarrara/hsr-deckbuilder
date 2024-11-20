import { z } from "zod";
import { panic } from "./todo";

export type PlayerInfo = z.infer<typeof playerInfoSchema>;
export type PlayerCharacterInfo = PlayerInfo["data"]["avatar_list"][number];
export type MainStat = (typeof mainStatCodes)[keyof typeof mainStatCodes];

export const playerInfoSchema = z.object({
  data: z.object({
    avatar_list: z
      .object({
        id: z.number(),
        level: z.number(),
        name: z.string(),
        element_id: z.number(),
        figure_path: z.string().url(),
        icon: z.string().url(),
        relics: z
          .object({
            id: z.number(),
            name: z.string(),
            rarity: z.number(),
            level: z.number(),
            icon: z.string().url(),
            pos: z.union([
              z.literal(1),
              z.literal(2),
              z.literal(3),
              z.literal(4),
            ]),
            main_property: z.object({
              property_type: z.number(),
              value: z.string(),
            }),
            properties: z
              .object({
                property_type: z.number(),
                value: z.string(),
                times: z.number(),
              })
              .array(),
          })
          .array(),
        ornaments: z
          .object({
            id: z.number(),
            name: z.string(),
            level: z.number(),
            icon: z.string().url(),
            pos: z.union([z.literal(5), z.literal(6)]),
            main_property: z.object({
              property_type: z.number(),
              value: z.string(),
            }),
            properties: z
              .object({
                property_type: z.number(),
                value: z.string(),
                times: z.number(),
              })
              .array(),
          })
          .array(),
      })
      .array(),
  }),
});

export type RelicSlot = (typeof relicPosToSlot)[keyof typeof relicPosToSlot];

export const relicPosToSlot = {
  1: "head",
  2: "hands",
  3: "body",
  4: "feet",
  5: "planarSphere",
  6: "linkRope",
} as const;

const mainStatCodes = {
  "27": "Flat HP",
  "32": "HP%",
  "29": "Flat ATK",
  "33": "ATK%",
  "31": "Flat DEF",
  "34": "DEF%",
  "51": "Speed",
  "52": "Crit Rate",
  "53": "Crit Damage",
  "56": "Effect Hit Rate",
  "57": "Effect RES",
  "59": "Break Effect",
  "54": "Energy Regeneration Rate",
  "55": "Outgoing Healing Boost",
  "12": "Physical Damage Boost",
  "14": "Fire Damage Boost",
  "16": "Ice Damage Boost",
  "18": "Lightning Damage Boost",
  "20": "Wind Damage Boost",
  "22": "Quantum Damage Boost",
  "24": "Imaginary Damage Boost",
} as const;

export function parseMainStatsCode(code: number) {
  const maybeKey = code.toString() as keyof typeof mainStatCodes;

  if (maybeKey in mainStatCodes) {
    return mainStatCodes[maybeKey];
  }

  return panic(`unknown main stats code: ${code}`);
}
