import { z } from "zod";

export type PlayerInfo = z.infer<typeof playerInfoSchema>;
export type HoyoCharacterInfo = PlayerInfo["data"]["avatar_list"][number];

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
