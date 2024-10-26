export type LightCone = {
  wiki_link: string;
  name: string;
  image: string;
  starCount: 3 | 4 | 5;
  path:
    | "Destruction"
    | "The Hunt"
    | "Erudition"
    | "Nihility"
    | "Preservation"
    | "Harmony"
    | "Abundance";
  stats: {
    hp: `${number}~${number}` | "Unknown";
    atk: `${number}~${number}` | "Unknown";
    def: `${number}~${number}` | "Unknown";
  };
  passiveName: string;
  passive: string;
  characters: string[];
};

export const lightCones: LightCone[] = [
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/A_Secret_Vow",
    name: "A Secret Vow",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a2/Light_Cone_A_Secret_Vow.png/revision/latest/scale-to-width-down/50?cb=20230719025735",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "48~1058", atk: "21~476", def: "12~264" },
    passiveName: "Spare No Effort",
    passive:
      "Increases DMG dealt by the wearer by 20~40%. The wearer also deals an extra 20~40% of DMG to enemies whose current HP percentage is equal to or higher than the wearer's current HP percentage.",
    characters: ["Arlan"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Adversarial",
    name: "Adversarial",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f7/Light_Cone_Adversarial.png/revision/latest/scale-to-width-down/50?cb=20230719025231",
    starCount: 3,
    path: "The Hunt",
    stats: { hp: "33~740", atk: "16~370", def: "12~264" },
    passiveName: "Alliance",
    passive:
      "When the wearer defeats an enemy, increases SPD by 10~18% for 2 turn(s).",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/After_the_Charmony_Fall",
    name: "After the Charmony Fall",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/50/Light_Cone_After_the_Charmony_Fall.png/revision/latest/scale-to-width-down/50?cb=20240607171011",
    starCount: 4,
    path: "Erudition",
    stats: { hp: "38~846", atk: "21~476", def: "18~396" },
    passiveName: "Quiescence",
    passive:
      "Increases the wearer's Break Effect by 28~56%. After the wearer uses Ultimate, increases SPD by 8~16%, lasting for 2 turn(s).",
    characters: ["Sunday"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Along_the_Passing_Shore",
    name: "Along the Passing Shore",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/08/Light_Cone_Along_the_Passing_Shore.png/revision/latest/scale-to-width-down/50?cb=20240327025150",
    starCount: 5,
    path: "Nihility",
    stats: { hp: "48~1058", atk: "28~635", def: "18~396" },
    passiveName: "Steerer",
    passive:
      "Increases the wearer's CRIT DMG by 36~60%. When the wearer hits an enemy target, inflicts Mirage Fizzle on the enemy, lasting for 1 turn. Each time the wearer attacks, this effect can only trigger 1 time on each target. The wearer deals 24~40% increased DMG to targets afflicted with Mirage Fizzle, and the DMG dealt by Ultimate additionally increases by 24~40%.",
    characters: ["Acheron"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Amber_(Light_Cone)",
    name: "Amber",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/4/42/Light_Cone_Amber.png/revision/latest/scale-to-width-down/50?cb=20230719024934",
    starCount: 3,
    path: "Preservation",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Stasis",
    passive:
      "Increases the wearer's DEF by 16~32%. If the wearer's current HP is lower than 50%, increases their DEF by a further 16~32%.",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/An_Instant_Before_A_Gaze",
    name: "An Instant Before A Gaze",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/2/24/Light_Cone_An_Instant_Before_A_Gaze.png/revision/latest/scale-to-width-down/50?cb=20231206040430",
    starCount: 5,
    path: "Erudition",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "A Knight's Pilgrimage",
    passive:
      "Increases the wearer's CRIT DMG by 36~60%. When the wearer uses Ultimate, increases DMG dealt by the wearer's Ultimate based on their Max Energy. Each point of Energy increases DMG dealt by Ultimate by 0.36~0.60%. A max of 180 points of Energy will be taken into account for this.",
    characters: ["Argenti", "Idrila"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Arrows",
    name: "Arrows",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/79/Light_Cone_Arrows.png/revision/latest/scale-to-width-down/50?cb=20230719024846",
    starCount: 3,
    path: "The Hunt",
    stats: { hp: "38~846", atk: "14~317", def: "12~264" },
    passiveName: "Crisis",
    passive:
      "At the start of the battle, the wearer's CRIT Rate increases by 12~24% for 3 turn(s).",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Baptism_of_Pure_Thought",
    name: "Baptism of Pure Thought",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5a/Light_Cone_Baptism_of_Pure_Thought.png/revision/latest/scale-to-width-down/50?cb=20240117041243",
    starCount: 5,
    path: "The Hunt",
    stats: { hp: "43~952", atk: "26~582", def: "24~529" },
    passiveName: "Mental Training",
    passive:
      "Increases the wearer's CRIT DMG by 20~32%. For every debuff on the enemy target, the wearer's CRIT DMG dealt against this target additionally increases by 8~12%, stacking up to 3 times. When using Ultimate to attack the enemy target, the wearer receives the Disputation effect, which increases DMG dealt by 36~60% and enables their follow-up attacks to ignore 24~40% of the target's DEF. This effect lasts for 2 turns.",
    characters: ["Dr. Ratio"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Before_Dawn",
    name: "Before Dawn",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/2/26/Light_Cone_Before_Dawn.png/revision/latest/scale-to-width-down/50?cb=20230719030610",
    starCount: 5,
    path: "Erudition",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Long Night",
    passive:
      "Increases the wearer's CRIT DMG by 36~60%. Increases DMG dealt by the wearer's Skill and Ultimate by 18~30%. After the wearer uses Skill or Ultimate, gains Somnus Corpus. Upon triggering a follow-up attack, consumes Somnus Corpus, and increases DMG dealt by follow-up attack by 48~80%.",
    characters: ["Jing Yuan"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Before_the_Tutorial_Mission_Starts",
    name: "Before the Tutorial Mission Starts",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/76/Light_Cone_Before_the_Tutorial_Mission_Starts.png/revision/latest/scale-to-width-down/50?cb=20230719030345",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Quick on the Draw",
    passive:
      "Increases the wearer's Effect Hit Rate by 20~40%. When the wearer attacks DEF-reduced enemies, regenerates 4~8 Energy.",
    characters: ["Blade", "Kafka", "Owlbert", "Silver Wolf"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Boundless_Choreo",
    name: "Boundless Choreo",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Light_Cone_Boundless_Choreo.png/revision/latest/scale-to-width-down/50?cb=20240508030705",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Scrutinize",
    passive:
      "Increase the wearer's CRIT Rate by 8~16%. The wearer deals 24~48% more CRIT DMG to enemies that are currently Slowed or have reduced DEF.",
    characters: ["Acheron", "Black Swan"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Brighter_Than_the_Sun",
    name: "Brighter Than the Sun",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d0/Light_Cone_Brighter_Than_the_Sun.png/revision/latest/scale-to-width-down/50?cb=20230830022603",
    starCount: 5,
    path: "Destruction",
    stats: { hp: "48~1058", atk: "28~635", def: "18~396" },
    passiveName: "Defiant Till Death",
    passive:
      "Increases the wearer's CRIT Rate by 18~30%. When the wearer uses their Basic ATK, they will gain 1 stack of Dragon's Call, lasting for 2 turns. Each Stack of Dragon's Call increases the wearer's ATK by 18~30% and Energy Regeneration Rate by 6.0~10.0%. Dragon's Call can be stacked up to 2 times.",
    characters: ["Dan Heng \u2022 Imbibitor Lunae"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/But_the_Battle_Isn%27t_Over",
    name: "But the Battle Isn't Over",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/2/29/Light_Cone_But_the_Battle_Isn%27t_Over.png/revision/latest/scale-to-width-down/50?cb=20230719030450",
    starCount: 5,
    path: "Harmony",
    stats: { hp: "52~1164", atk: "24~529", def: "21~463" },
    passiveName: "Heir",
    passive:
      "Increases the wearer's Energy Regeneration Rate by 10~18% and regenerates 1 Skill Point when the wearer uses their Ultimate on an ally. This effect can be triggered once after every 2 uses of the wearer's Ultimate. When the wearer uses their Skill, the next ally taking action (except the wearer) deals 30~50% more DMG for 1 turn(s).",
    characters: ["Bronya", "Silvermane Lieutenant"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Carve_the_Moon,_Weave_the_Clouds",
    name: "Carve the Moon, Weave the Clouds",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/1f/Light_Cone_Carve_the_Moon%2C_Weave_the_Clouds.png/revision/latest/scale-to-width-down/50?cb=20230719030257",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Secret",
    passive:
      "At the start of the battle and whenever the wearer's turn begins, one of the following effects is applied randomly: All allies' ATK increases by 10~20%, all allies' CRIT DMG increases by 12~24%, or all allies' Energy Regeneration Rate increases by 6~12%. The applied effect cannot be identical to the last effect applied, and will replace the previous effect. The applied effect will be removed when the wearer has been knocked down. Effects of the same type cannot be stacked.",
    characters: ["Tingyun"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Chorus",
    name: "Chorus",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e2/Light_Cone_Chorus.png/revision/latest/scale-to-width-down/50?cb=20230719025007",
    starCount: 3,
    path: "Harmony",
    stats: { hp: "38~846", atk: "14~317", def: "12~264" },
    passiveName: "Concerted",
    passive:
      "After entering battle, increases the ATK of all allies by 8~12%. Abilities of the same type cannot stack.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Collapsing_Sky",
    name: "Collapsing Sky",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d0/Light_Cone_Collapsing_Sky.png/revision/latest/scale-to-width-down/50?cb=20230719024918",
    starCount: 3,
    path: "Destruction",
    stats: { hp: "38~846", atk: "16~370", def: "9~198" },
    passiveName: "Havoc",
    passive: "The wearer's Basic ATK and Skill deal 20~40% more DMG.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Concert_for_Two",
    name: "Concert for Two",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/3/35/Light_Cone_Concert_for_Two.png/revision/latest/scale-to-width-down/50?cb=20240417060149",
    starCount: 4,
    path: "Preservation",
    stats: { hp: "43~952", atk: "16~370", def: "21~463" },
    passiveName: "Inspire",
    passive:
      "creases the wearer's DEF by 16~32%. For every on-field character that has a Shield, the DMG dealt by the wearer increases by 4~8%.",
    characters: ["Robin", "Sunday"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Cornucopia",
    name: "Cornucopia",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/4/46/Light_Cone_Cornucopia.png/revision/latest/scale-to-width-down/50?cb=20230719024902",
    starCount: 3,
    path: "Abundance",
    stats: { hp: "43~952", atk: "12~264", def: "12~264" },
    passiveName: "Prosperity",
    passive:
      "When the wearer uses their Skill or Ultimate, their Outgoing Healing increases by 12~24%.",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Cruising_in_the_Stellar_Sea",
    name: "Cruising in the Stellar Sea",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2a/Light_Cone_Cruising_in_the_Stellar_Sea.png/revision/latest/scale-to-width-down/50?cb=20230719030715",
    starCount: 5,
    path: "The Hunt",
    stats: { hp: "43~952", atk: "24~529", def: "21~463" },
    passiveName: "Chase",
    passive:
      "Increases the wearer's CRIT rate by 8~16%, and increases their CRIT rate against enemies with HP less than or equal to 50% by an extra 8~16%. When the wearer defeats an enemy, their ATK is increased by 20~40% for 2 turn(s).",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Dance_at_Sunset",
    name: "Dance at Sunset",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/c/ce/Light_Cone_Dance_at_Sunset.png/revision/latest/scale-to-width-down/50?cb=20240802010821",
    starCount: 5,
    path: "Destruction",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Deeply Engrossed",
    passive:
      "Greatly increases the wearer's chance of getting attacked and increases CRIT DMG by 36~60%. After the wearer uses Ultimate, receives 1 stack of Firedance, lasting for 2 turns and stacking up to 2 time(s). Each stack of Firedance increases the DMG dealt by the wearer's follow-up attack by 36~60%.",
    characters: ["Yunli"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Dance!_Dance!_Dance!",
    name: "Dance! Dance! Dance!",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/6/64/Light_Cone_Dance%21_Dance%21_Dance%21.png/revision/latest/scale-to-width-down/50?cb=20230719025912",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Cannot Stop It!",
    passive:
      "When the wearer uses their Ultimate, all allies' actions are Advanced Forward by 16~24%.",
    characters: ["Clara", "Hook", "Svarog"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Darting_Arrow",
    name: "Darting Arrow",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/51/Light_Cone_Darting_Arrow.png/revision/latest/scale-to-width-down/50?cb=20230719025039",
    starCount: 3,
    path: "The Hunt",
    stats: { hp: "33~740", atk: "16~370", def: "12~264" },
    passiveName: "War Cry",
    passive:
      "hen the wearer defeats an enemy, increases ATK by 24~48% for 3 turn(s).",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Data_Bank_(Light_Cone)",
    name: "Data Bank",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/ac/Light_Cone_Data_Bank.png/revision/latest/scale-to-width-down/50?cb=20230719025023",
    starCount: 3,
    path: "Erudition",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Learned",
    passive: "Increases DMG dealt by the wearer's Ultimate by 28~56%.",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Day_One_of_My_New_Life",
    name: "Day One of My New Life",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/6/61/Light_Cone_Day_One_of_My_New_Life.png/revision/latest/scale-to-width-down/50?cb=20230719025454",
    starCount: 4,
    path: "Preservation",
    stats: { hp: "43~952", atk: "16~370", def: "21~463" },
    passiveName: "At This Very Moment",
    passive:
      "Increases the wearer's DEF by 16~24%. After entering battle, increases All-Type RES of all allies by 8~12%. Abilities of the same type cannot stack.",
    characters: ["March 7th", "Pom-Pom"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Defense",
    name: "Defense",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/9/96/Light_Cone_Defense.png/revision/latest/scale-to-width-down/50?cb=20230719025127",
    starCount: 3,
    path: "Preservation",
    stats: { hp: "43~952", atk: "12~264", def: "12~264" },
    passiveName: "Revitalization",
    passive:
      "When the wearer unleashes their Ultimate, they restore HP by 18~30% of their Max HP.",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Destiny%27s_Threads_Forewoven",
    name: "Destiny's Threads Forewoven",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/ba/Light_Cone_Destiny%27s_Threads_Forewoven.png/revision/latest/scale-to-width-down/50?cb=20240206022449",
    starCount: 4,
    path: "Preservation",
    stats: { hp: "43~952", atk: "16~370", def: "21~463" },
    passiveName: "Insight",
    passive:
      "creases the wearer's Effect RES by 12~20%. For every 100 of DEF the wearer has, increases the wearer's DMG dealt by 0.8~1.2%, up to a maximum DMG increase of 32~48%.",
    characters: ["Aventurine", "Black Swan", "Firefly", "Sparkle"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Dream%27s_Montage",
    name: "Dream's Montage",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/2/25/Light_Cone_Dream%27s_Montage.png/revision/latest/scale-to-width-down/50?cb=20241025210403",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Academy-Style Edit",
    passive:
      "Increases the wearer's SPD by 8~12%. After attacking enemy targets that are Weakness Broken, regenerates 3~5 Energy. This effect can trigger up to 2 time(s) per turn.",
    characters: ["Mr. Reca"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Dreamville_Adventure",
    name: "Dreamville Adventure",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/73/Light_Cone_Dreamville_Adventure.png/revision/latest/scale-to-width-down/50?cb=20240206022506",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Solidarity",
    passive:
      "After the wearer uses a certain type of ability such as Basic ATK, Skill, or Ultimate, all allies gain Childishness, which increases allies' DMG for the same type of ability as used by the wearer by 12~20%. Childishness only takes effect for the most recent type of ability the wearer used and cannot be stacked.",
    characters: [
      "Boss Stone",
      "Clockie",
      "Hamster Ball Knight",
      "Hanu",
      "Origami Bird",
    ],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Earthly_Escapade",
    name: "Earthly Escapade",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Light_Cone_Earthly_Escapade.png/revision/latest/scale-to-width-down/50?cb=20240206022523",
    starCount: 5,
    path: "Harmony",
    stats: { hp: "52~1164", atk: "24~529", def: "21~463" },
    passiveName: "Capriciousness",
    passive:
      "Increases the wearer's CRIT DMG by 32~60%. At the start of the battle, the wearer gains Mask, lasting for 3 turn(s). While the wearer has Mask, the wearer's allies have their CRIT Rate increased by 10~14% and their CRIT DMG increased by 28~56%. For every 1 Skill Point the wearer recovers (including Skill Points that exceed the limit), they gain 1 stack of Radiant Flame. And when the wearer has 4 stacks of Radiant Flame, all the stacks are removed, and they gain Mask, lasting for 4 turn(s).",
    characters: ["Sparkle"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Echoes_of_the_Coffin",
    name: "Echoes of the Coffin",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c0/Light_Cone_Echoes_of_the_Coffin.png/revision/latest/scale-to-width-down/50?cb=20230719030554",
    starCount: 5,
    path: "Abundance",
    stats: { hp: "52~1164", atk: "26~582", def: "18~396" },
    passiveName: "Thorns",
    passive:
      "Increases the wearer's ATK by 24~40%. After the wearer uses an attack, for each different enemy target the wearer hits, regenerates 3.0~5.0 Energy. Each attack can regenerate Energy up to 3 time(s) this way. After the wearer uses their Ultimate, all allies gain 12~20 SPD for 1 turn.",
    characters: ["Luocha"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Eternal_Calculus",
    name: "Eternal Calculus",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/d/de/Light_Cone_Eternal_Calculus.png/revision/latest/scale-to-width-down/50?cb=20240607171009",
    starCount: 5,
    path: "Erudition",
    stats: { hp: "48~1058", atk: "24~529", def: "18~396" },
    passiveName: "Boundless Thought",
    passive:
      "Increases the wearer's ATK by 8~12%. After using an attack, for each enemy target hit, additionally increases ATK by 4~8%. This effect can stack up to 5 times and last until the next attack. If there are 3 or more enemy targets hit, this unit's SPD increases by 8~16%, lasting for 1 turn(s).",
    characters: ["Nous"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Eyes_of_the_Prey",
    name: "Eyes of the Prey",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/8/87/Light_Cone_Eyes_of_the_Prey.png/revision/latest/scale-to-width-down/50?cb=20230719025631",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Self-Confidence",
    passive:
      "Increases the wearer's Effect Hit Rate by 20~40% and increases DoT by 24~48%.",
    characters: ["Sampo"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Fermata",
    name: "Fermata",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/1b/Light_Cone_Fermata.png/revision/latest/scale-to-width-down/50?cb=20230719030016",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Semibreve Rest",
    passive:
      "Increases the wearer's Break Effect by 16~32%, and increases their DMG to enemies afflicted with Shock or Wind Shear by 16~32%. This also applies to DoT.",
    characters: ["Kafka"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Final_Victor",
    name: "Final Victor",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5a/Light_Cone_Final_Victor.png/revision/latest/scale-to-width-down/50?cb=20240206022542",
    starCount: 4,
    path: "The Hunt",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "All In",
    passive:
      "creases the wearer's ATK by 12~20%. When the wearer lands a CRIT hit on enemies, gains 1 stack of Good Fortune. This can stack up to 4 time(s). Every stack of Good Fortune increases the wearer's CRIT DMG by 8~12%. Good Fortune will be removed at the end of the wearer's turn.",
    characters: ["Aventurine", "Dr. Ratio"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Fine_Fruit",
    name: "Fine Fruit",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/70/Light_Cone_Fine_Fruit.png/revision/latest/scale-to-width-down/50?cb=20230719025055",
    starCount: 3,
    path: "Abundance",
    stats: { hp: "43~952", atk: "14~317", def: "9~198" },
    passiveName: "Savor",
    passive:
      "At the start of the battle, immediately regenerates 6~12 Energy for all allies.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Flames_Afar",
    name: "Flames Afar",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/4/46/Light_Cone_Flames_Afar.png/revision/latest/scale-to-width-down/50?cb=20240206022259",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "48~1058", atk: "21~476", def: "12~264" },
    passiveName: "Deflagration",
    passive:
      "When the wearer's cumulative HP loss during one attack exceeds 25% of their Max HP, or if the amount of their own HP consumed at one time is greater than 25% of their Max HP, immediately heals the wearer for 15% of their Max HP, and at the same time, increases the DMG they deal by 25~50% for 2 turn(s). This effect can only be triggered once every 3 turn(s).",
    characters: ["Firefly", "Sam"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Flowing_Nightglow",
    name: "Flowing Nightglow",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f2/Light_Cone_Flowing_Nightglow.png/revision/latest/scale-to-width-down/50?cb=20240508030636",
    starCount: 5,
    path: "Harmony",
    stats: { hp: "43~952", atk: "28~635", def: "21~463" },
    passiveName: "Pacify",
    passive:
      "Every time an ally attacks, the wearer gains 1 stack of Cantillation. Each stack of Cantillation increases the wearer's Energy Regeneration Rate by 3.0~5.0%, stacking up to 5 time(s). When the wearer uses their Ultimate, removes Cantillation and gains Cadenza. Cadenza increases the wearer's ATK by 48~96% and increases all allies' DMG dealt by 24~40%, lasting for 1 turn(s).",
    characters: ["Robin"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/For_Tomorrow%27s_Journey",
    name: "For Tomorrow's Journey",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/aa/Light_Cone_For_Tomorrow%27s_Journey.png/revision/latest/scale-to-width-down/50?cb=20240508033226",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Bonds",
    passive:
      "Increases the wearer's ATK by 16~32%. After the wearer uses their Ultimate, increases their DMG dealt by 18~30%, lasting for 1 turn(s).",
    characters: ["Mikhail", "Pom-Pom", "Razalina", "Tiernan"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Geniuses%27_Repose",
    name: "Geniuses' Repose",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b9/Light_Cone_Geniuses%27_Repose.png/revision/latest/scale-to-width-down/50?cb=20230719025944",
    starCount: 4,
    path: "Erudition",
    stats: { hp: "38~846", atk: "21~476", def: "18~396" },
    passiveName: "Each Now Has a Role to Play",
    passive:
      "Increases the wearer's ATK by 16~32%. When the wearer defeats an enemy, the wearer's CRIT DMG increases by 24~48% for 3 turn(s).",
    characters: ["Herta", "Ruan Mei", "Screwllum"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Good_Night_and_Sleep_Well",
    name: "Good Night and Sleep Well",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/e/ef/Light_Cone_Good_Night_and_Sleep_Well.png/revision/latest/scale-to-width-down/50?cb=20230719025438",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Toiler",
    passive:
      "For every debuff the target enemy has, the DMG dealt by the wearer increases by 12~24%, stacking up to 3 time(s). This effect also applies to DoT.",
    characters: ["Pela", "Serval"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Hey,_Over_Here",
    name: "Hey, Over Here",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/4/45/Light_Cone_Hey%2C_Over_Here.png/revision/latest/scale-to-width-down/50?cb=20231115024207",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "I'm Not Afraid!",
    passive:
      "ncreases the wearer's Max HP by 8~12%. When the wearer uses their Skill, increases Outgoing Healing by 16~28%, lasting for 2 turn(s).",
    characters: ["Diting", "Guinaifen", "Huohuo", "Sushang", "Tail"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Hidden_Shadow",
    name: "Hidden Shadow",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/19/Light_Cone_Hidden_Shadow.png/revision/latest/scale-to-width-down/50?cb=20230719025335",
    starCount: 3,
    path: "Nihility",
    stats: { hp: "38~846", atk: "14~317", def: "12~264" },
    passiveName: "Mechanism",
    passive:
      "After using Skill, the wearer's next Basic ATK deals Additional DMG equal to 60~120% of ATK to the target enemy.",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/I_Shall_Be_My_Own_Sword",
    name: "I Shall Be My Own Sword",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c7/Light_Cone_I_Shall_Be_My_Own_Sword.png/revision/latest/scale-to-width-down/50?cb=20231011030715",
    starCount: 5,
    path: "Destruction",
    stats: { hp: "52~1164", atk: "26~582", def: "18~396" },
    passiveName: "With This Evening Jade",
    passive:
      "Increases the wearer's CRIT DMG by 20~32%. When an ally (excluding the wearer) gets attacked or loses HP, the wearer gains 1 stack of Eclipse, up to a max of 3 stack(s). Each stack of Eclipse increases the DMG of the wearer's next attack by 14.0~24.0%. When 3 stack(s) are reached, additionally enables that attack to ignore 12~20% of the enemy's DEF. This effect will be removed after the wearer uses an attack.",
    characters: ["Jingliu"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/I_Venture_Forth_to_Hunt",
    name: "I Venture Forth to Hunt",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/13/Light_Cone_I_Venture_Forth_to_Hunt.png/revision/latest/scale-to-width-down/50?cb=20240910183947",
    starCount: 5,
    path: "The Hunt",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Intimidation",
    passive:
      'creases the wearer\'s CRIT Rate by 15~25%. When the wearer launches a follow-up attack, gains 1 stack of "Luminflux," stacking up to 2 time(s). Each stack of "Luminflux" enables the Ultimate DMG dealt by the wearer to ignore 27~39% of the target\'s DEF. When the wearer\'s turn ends, removes 1 stack of "Luminflux."',
    characters: ["Feixiao"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/In_the_Name_of_the_World",
    name: "In the Name of the World",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b7/Light_Cone_In_the_Name_of_the_World.png/revision/latest/scale-to-width-down/50?cb=20230719030506",
    starCount: 5,
    path: "Nihility",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Inheritor",
    passive:
      "creases the wearer's DMG to debuffed enemies by 24~40%. When the wearer uses their Skill, the Effect Hit Rate for this attack increases by 18~30%, and ATK increases by 24~40%.",
    characters: ["Welt"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/In_the_Night",
    name: "In the Night",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Light_Cone_In_the_Night.png/revision/latest/scale-to-width-down/50?cb=20230719030418",
    starCount: 5,
    path: "The Hunt",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Flowers and Butterflies",
    passive:
      "Increases the wearer's CRIT Rate by 18~30%. While the wearer is in battle, for every 10 SPD that exceeds 100, increases DMG dealt by Basic ATK and Skill by 6~10%. At the same time, increases the CRIT DMG of Ultimate by 12~20%. This effect can stack up to 6 time(s).",
    characters: ["Seele"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Incessant_Rain",
    name: "Incessant Rain",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0b/Light_Cone_Incessant_Rain.png/revision/latest/scale-to-width-down/50?cb=20230719030538",
    starCount: 5,
    path: "Nihility",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Mirage of Reality",
    passive:
      "Increases the wearer's Effect Hit Rate by 24~40%. When the wearer deals DMG to an enemy that currently has 3 or more debuffs, increases the wearer's CRIT Rate by 12~20%. After the wearer uses their Basic ATK, Skill, or Ultimate, there is a 100% base chance to implant Aether Code on a random hit target that does not yet have it. Targets with Aether Code receive 12~20% increased DMG for 1 turn.",
    characters: ["Silver Wolf"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Indelible_Promise",
    name: "Indelible Promise",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/73/Light_Cone_Indelible_Promise.png/revision/latest/scale-to-width-down/50?cb=20240206022314",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Inheritance",
    passive:
      "ses the wearer\u2019s Break Effect by 28~56%. When the wearer uses their Ultimate, increases CRIT Rate by 15~30%, lasting for 2 turn(s).",
    characters: ["Misha", "The Watchmaker"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Inherently_Unjust_Destiny",
    name: "Inherently Unjust Destiny",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f9/Light_Cone_Inherently_Unjust_Destiny.png/revision/latest/scale-to-width-down/50?cb=20240417060129",
    starCount: 5,
    path: "Preservation",
    stats: { hp: "48~1058", atk: "19~423", def: "30~661" },
    passiveName: "All-In",
    passive:
      "creases the wearer's DEF by 40~64%. When the wearer provides a Shield to an ally, the wearer's CRIT DMG increases by 40~64%, lasting for 2 turn(s). When the wearer's follow-up attack hits an enemy target, there is a 100~160% base chance to increase the DMG taken by the attacked enemy target by 10.0~16.0%, lasting for 2 turn(s).",
    characters: ["Aventurine"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/It%27s_Showtime",
    name: "It's Showtime",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f3/Light_Cone_It%27s_Showtime.png/revision/latest/scale-to-width-down/50?cb=20240206022334",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "48~1058", atk: "21~476", def: "12~264" },
    passiveName: "Self-Amusement",
    passive:
      "When the wearer inflicts a debuff on an enemy, gains a stack of Trick. Every stack of Trick increases the wearer's DMG dealt by 6~10%, stacking up to 3 time(s). This effect lasts for 1 turn(s). When the wearer's Effect Hit Rate is 80% or higher, increases ATK by 20~36%.",
    characters: ["Sampo", "Sparkle"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Landau%27s_Choice",
    name: "Landau's Choice",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b7/Light_Cone_Landau%27s_Choice.png/revision/latest/scale-to-width-down/50?cb=20230719025647",
    starCount: 4,
    path: "Preservation",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Time Fleets Away",
    passive:
      "he wearer is more likely to be attacked, and DMG taken is reduced by 16~24%.",
    characters: ["Gepard", "Serval"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Loop",
    name: "Loop",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d8/Light_Cone_Loop.png/revision/latest/scale-to-width-down/50?cb=20230719025143",
    starCount: 3,
    path: "Nihility",
    stats: { hp: "38~846", atk: "14~317", def: "12~264" },
    passiveName: "Pursuit",
    passive: "Increases DMG dealt from its wearer to Slowed enemies by 24~48%.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Make_the_World_Clamor",
    name: "Make the World Clamor",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0b/Light_Cone_Make_the_World_Clamor.png/revision/latest/scale-to-width-down/50?cb=20230719025751",
    starCount: 4,
    path: "Erudition",
    stats: { hp: "38~846", atk: "21~476", def: "18~396" },
    passiveName: "The Power of Sound",
    passive:
      "arer regenerates 20~32 Energy immediately upon entering battle, and increases DMG dealt by the wearer's Ultimate by 32~64%.",
    characters: ["Serval"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Mediation",
    name: "Mediation",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/2/28/Light_Cone_Mediation.png/revision/latest/scale-to-width-down/50?cb=20230719025351",
    starCount: 3,
    path: "Harmony",
    stats: { hp: "38~846", atk: "14~317", def: "12~264" },
    passiveName: "Family",
    passive:
      "Upon entering battle, increases SPD of all allies by 12~20 points for 1 turn(s).",
    characters: ["The Family"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Memories_of_the_Past",
    name: "Memories of the Past",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/15/Light_Cone_Memories_of_the_Past.png/revision/latest/scale-to-width-down/50?cb=20230719025527",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Old Photo",
    passive:
      "Increases the wearer's Break Effect by 28~56%. When the wearer attacks, additionally regenerates 4~8 Energy. This effect cannot be repeatedly triggered in a single turn.",
    characters: ["Bronya", "Cocolia"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Meshing_Cogs",
    name: "Meshing Cogs",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png/revision/latest/scale-to-width-down/50?cb=20230719025159",
    starCount: 3,
    path: "Harmony",
    stats: { hp: "38~846", atk: "14~317", def: "12~264" },
    passiveName: "Fleet Triumph",
    passive:
      "After the wearer uses attacks or gets hit, additionally regenerates 4~8 Energy. This effect cannot be repeatedly triggered in a single turn.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Moment_of_Victory",
    name: "Moment of Victory",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a1/Light_Cone_Moment_of_Victory.png/revision/latest/scale-to-width-down/50?cb=20230719030522",
    starCount: 5,
    path: "Preservation",
    stats: { hp: "48~1058", atk: "21~476", def: "27~595" },
    passiveName: "Verdict",
    passive:
      "Increases the wearer's DEF by 24~40% and Effect Hit Rate by 24~40%. Increases the chance for the wearer to be attacked by enemies. When the wearer is attacked, increase their DEF by an extra 24~40% until the end of the wearer's turn.",
    characters: ["Gepard"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Multiplication",
    name: "Multiplication",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/70/Light_Cone_Multiplication.png/revision/latest/scale-to-width-down/50?cb=20230719025247",
    starCount: 3,
    path: "Abundance",
    stats: { hp: "43~952", atk: "14~317", def: "9~198" },
    passiveName: "Denizens of Abundance",
    passive:
      "ter the wearer uses their Basic ATK, their next action will be Advanced Forward by 12~20%.",
    characters: ["Denizens of Abundance"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Mutual_Demise",
    name: "Mutual Demise",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a0/Light_Cone_Mutual_Demise.png/revision/latest/scale-to-width-down/50?cb=20230719025303",
    starCount: 3,
    path: "Destruction",
    stats: { hp: "38~846", atk: "16~370", def: "9~198" },
    passiveName: "Legion",
    passive:
      "If the wearer's current HP is lower than 80%, CRIT Rate increases by 12~24%.",
    characters: ["Antimatter Legion"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Night_of_Fright",
    name: "Night of Fright",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/d/df/Light_Cone_Night_of_Fright.png/revision/latest/scale-to-width-down/50?cb=20231115024040",
    starCount: 5,
    path: "Abundance",
    stats: { hp: "52~1164", atk: "21~476", def: "24~529" },
    passiveName: "Deep, Deep Breaths",
    passive:
      "Increases the wearer's Energy Regeneration Rate by 12~20%. When any ally uses their Ultimate, the wearer restores HP for the ally currently with the lowest HP percentage by an amount equal to 10~14% of the healed ally's Max HP. When the wearer provides healing for an ally, increases the healed ally's ATK by 2.4~4.0%. This effect can stack up to 5 times and lasts for 2 turn(s).",
    characters: ["Huohuo", "Tail"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Night_on_the_Milky_Way",
    name: "Night on the Milky Way",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d4/Light_Cone_Night_on_the_Milky_Way.png/revision/latest/scale-to-width-down/50?cb=20230719030401",
    starCount: 5,
    path: "Erudition",
    stats: { hp: "52~1164", atk: "26~582", def: "18~396" },
    passiveName: "Meteor Swarm",
    passive:
      "For every enemy on the field, increases the wearer's ATK by 9.0~15.0%, up to 5 stacks. When an enemy is inflicted with Weakness Break, the DMG dealt by the wearer increases by 30~50% for 1 turn.",
    characters: ["Himeko"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Ninja_Record:_Sound_Hunt",
    name: "Ninja Record: Sound Hunt",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/1c/Light_Cone_Ninja_Record_Sound_Hunt.png/revision/latest/scale-to-width-down/50?cb=20241025211441",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Curtains Up!",
    passive:
      "Increases the wearer's Max HP by 12~24%. When losing or restoring this unit's HP, increases CRIT DMG by 18~36%, lasting for 2 turn(s). This effect can only trigger once per turn.",
    characters: ["Mr. Reca", "Rappa", "Robin"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Ninjutsu_Inscription:_Dazzling_Evilbreaker",
    name: "Ninjutsu Inscription: Dazzling Evilbreaker",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/ac/Light_Cone_Ninjutsu_Inscription_Dazzling_Evilbreaker.png/revision/latest/scale-to-width-down/50?cb=20241025210738",
    starCount: 5,
    path: "Erudition",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Exorcism",
    passive:
      'Increases the wearer\'s Break Effect by 60~100%. When entering battle, immediately regenerates 30~40 Energy. After the wearer uses Ultimate, obtains "Raiton." After using 2 Basic ATKs, advances the wearer\'s action by 50~70% and removes "Raiton." After the wearer uses Ultimate, resets "Raiton."',
    characters: ["Rappa"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Nowhere_to_Run",
    name: "Nowhere to Run",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/4/42/Light_Cone_Nowhere_to_Run.png/revision/latest/scale-to-width-down/50?cb=20230719030313",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "43~952", atk: "24~529", def: "12~264" },
    passiveName: "Desperate Times",
    passive:
      "Increases the wearer's ATK by 24~48%. Whenever the wearer defeats an enemy, they restore HP equal to 12~24% of their ATK.",
    characters: ["Blade", "Dan Heng"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/On_the_Fall_of_an_Aeon",
    name: "On the Fall of an Aeon",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Light_Cone_On_the_Fall_of_an_Aeon.png/revision/latest/scale-to-width-down/50?cb=20230719030658",
    starCount: 5,
    path: "Destruction",
    stats: { hp: "48~1058", atk: "24~529", def: "18~396" },
    passiveName: "Moth To Flames",
    passive:
      "When the wearer attacks, increases their ATK by 8~16% in this battle. This effect can stack up to 4 time(s). After the wearer breaks an enemy's Weakness, increases DMG dealt by 12~24%, lasting for 2 turn(s).",
    characters: ["Tayzzyronth", "The Swarm"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Only_Silence_Remains",
    name: "Only Silence Remains",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e2/Light_Cone_Only_Silence_Remains.png/revision/latest/scale-to-width-down/50?cb=20230719025510",
    starCount: 4,
    path: "The Hunt",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Record",
    passive:
      "Increases the wearer's ATK by 16~32%. If there are 2 or fewer enemies on the field, increases wearer's CRIT Rate by 12~24%.",
    characters: ["Dan Heng"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Passkey",
    name: "Passkey",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a4/Light_Cone_Passkey.png/revision/latest/scale-to-width-down/50?cb=20230719025215",
    starCount: 3,
    path: "Erudition",
    stats: { hp: "33~740", atk: "16~370", def: "12~264" },
    passiveName: "Epiphany",
    passive:
      "After the wearer uses their Skill, additionally regenerates 8~12 Energy. This effect cannot be repeatedly triggered in a single turn.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Past_Self_in_Mirror",
    name: "Past Self in Mirror",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a4/Light_Cone_Past_Self_in_Mirror.png/revision/latest/scale-to-width-down/50?cb=20231227021316",
    starCount: 5,
    path: "Harmony",
    stats: { hp: "48~1058", atk: "24~529", def: "24~529" },
    passiveName: "The Plum Fragrance In My Bones",
    passive:
      "the wearer's Break Effect by 60~100%. When the wearer uses their Ultimate, increases all allies' DMG by 24~40%, lasting for 3 turn(s). Should the wearer's Break Effect exceed or equal 150%, 1 Skill Point will be recovered.At the start of each wave, all allies regenerate 10.0~20.0 Energy immediately. Abilities of the same type cannot stack.",
    characters: ["Ruan Mei"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Past_and_Future",
    name: "Past and Future",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b0/Light_Cone_Past_and_Future.png/revision/latest/scale-to-width-down/50?cb=20230719030105",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Kites From the Past",
    passive:
      "When the wearer uses their Skill, the next ally taking action (except the wearer) deals 16~32% increased DMG for 1 turn(s).",
    characters: ["Yukong"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Patience_Is_All_You_Need",
    name: "Patience Is All You Need",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/8/87/Light_Cone_Patience_Is_All_You_Need.png/revision/latest/scale-to-width-down/50?cb=20230809041852",
    starCount: 5,
    path: "Nihility",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Spider Web",
    passive:
      "Increases DMG dealt by the wearer by 24~40%. After every attack launched by wearer, their SPD increases by 4.8~8.0%, stacking up to 3 times.If the wearer hits an enemy target that is not afflicted by Erode, there is a 100% base chance to inflict Erode to the target. Enemies afflicted with Erode are also considered to be Shocked and will receive Lightning DoT at the start of each turn equal to 60~100% of the wearer's ATK, lasting for 1 turn(s).",
    characters: ["Kafka"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Perfect_Timing",
    name: "Perfect Timing",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/77/Light_Cone_Perfect_Timing.png/revision/latest/scale-to-width-down/50?cb=20230719025807",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Refraction of Sightline",
    passive:
      "Increases the wearer's Effect RES by 16~32% and increases Outgoing Healing by an amount that is equal to 33~45% of Effect RES. Outgoing Healing can be increased this way by up to 15~27%.",
    characters: ["Jing Yuan", "Luocha"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Pioneering",
    name: "Pioneering",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/fa/Light_Cone_Pioneering.png/revision/latest/scale-to-width-down/50?cb=20230719025320",
    starCount: 3,
    path: "Preservation",
    stats: { hp: "43~952", atk: "12~264", def: "12~264" },
    passiveName: "IPC",
    passive:
      "When the wearer Breaks an enemy's Weakness, the wearer restores HP by 12~20% of their Max HP.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Planetary_Rendezvous",
    name: "Planetary Rendezvous",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b0/Light_Cone_Planetary_Rendezvous.png/revision/latest/scale-to-width-down/50?cb=20230719025719",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "48~1058", atk: "19~423", def: "15~330" },
    passiveName: "Departure",
    passive:
      "After entering battle, if an ally deals the same DMG Type as the wearer, DMG dealt increases by 12~24%.",
    characters: ["Asta"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Poised_to_Bloom",
    name: "Poised to Bloom",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/19/Light_Cone_Poised_to_Bloom.png/revision/latest/scale-to-width-down/50?cb=20240821090957",
    starCount: 4,
    path: "Harmony",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Lose Not, Forget Not",
    passive:
      "Increases the wearer's ATK by 16~32%. Upon entering battle, if two or more characters follow the same Path, then these characters' CRIT DMG increases by 16~32%. Abilities of the same type cannot stack.",
    characters: ["March 7th"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Post-Op_Conversation",
    name: "Post-Op Conversation",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/03/Light_Cone_Post-Op_Conversation.png/revision/latest/scale-to-width-down/50?cb=20230719025422",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "48~1058", atk: "19~423", def: "15~330" },
    passiveName: "Mutual Healing",
    passive:
      "Increases the wearer's Energy Regeneration Rate by 8~16% and increases Outgoing Healing when they use their Ultimate by 12~24%.",
    characters: ["Natasha"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Quid_Pro_Quo",
    name: "Quid Pro Quo",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/71/Light_Cone_Quid_Pro_Quo.png/revision/latest/scale-to-width-down/50?cb=20230719030000",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Enjoy With Rapture",
    passive:
      "At the start of the wearer's turn, regenerates 8~16 Energy for a randomly chosen ally (excluding the wearer) whose current Energy is lower than 50%.",
    characters: ["Bailu", "Tingyun"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Reforged_Remembrance",
    name: "Reforged Remembrance",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f7/Light_Cone_Reforged_Remembrance.png/revision/latest/scale-to-width-down/50?cb=20240206022354",
    starCount: 5,
    path: "Nihility",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Crystallize",
    passive:
      "Increases the wearer's Effect Hit Rate by 40~60%. When the wearer deals DMG to an enemy inflicted with Wind Shear, Burn, Shock, or Bleed, each respectively grants 1 stack of Prophet, stacking up to 4 time(s). In a single battle, only 1 stack of Prophet can be granted for each type of DoT. Every stack of Prophet increases wearer's ATK by 5~9% and enables the DoT dealt to ignore 7.2~10.0% of the target's DEF.",
    characters: ["Black Swan"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Resolution_Shines_As_Pearls_of_Sweat",
    name: "Resolution Shines As Pearls of Sweat",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Light_Cone_Resolution_Shines_As_Pearls_of_Sweat.png/revision/latest/scale-to-width-down/50?cb=20230719025824",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Glance Back",
    passive:
      "When the wearer hits an enemy and if the hit enemy is not already Ensnared, then there is a 60~100% base chance to Ensnare the hit enemy. Ensnared enemies' DEF decreases by 12~16% for 1 turn(s).",
    characters: ["Luka"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Return_to_Darkness",
    name: "Return to Darkness",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e0/Light_Cone_Return_to_Darkness.png/revision/latest/scale-to-width-down/50?cb=20230719030241",
    starCount: 4,
    path: "The Hunt",
    stats: { hp: "38~846", atk: "24~529", def: "15~330" },
    passiveName: "Raging Waves",
    passive:
      "Increases the wearer's CRIT Rate by 12~24%. After a CRIT Hit, there is a 16~32% fixed chance to dispel 1 buff on the target enemy. This effect can only trigger 1 time per attack.",
    characters: ["Hanya", "Xueyi"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/River_Flows_in_Spring",
    name: "River Flows in Spring",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b3/Light_Cone_River_Flows_in_Spring.png/revision/latest/scale-to-width-down/50?cb=20230719030048",
    starCount: 4,
    path: "The Hunt",
    stats: { hp: "38~846", atk: "21~476", def: "18~396" },
    passiveName: "Stave Off the Lingering Cold",
    passive:
      "After entering battle, increases the wearer's SPD by 8~12% and DMG by 12~24%. When the wearer takes DMG, this effect will disappear. This effect will resume after the end of the wearer's next turn.",
    characters: ["Yanqing"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Sagacity",
    name: "Sagacity",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/70/Light_Cone_Sagacity.png/revision/latest/scale-to-width-down/50?cb=20230719025407",
    starCount: 3,
    path: "Erudition",
    stats: { hp: "33~740", atk: "16~370", def: "12~264" },
    passiveName: "Genius",
    passive:
      "When the wearer uses their Ultimate, increases ATK by 24~48% for 2 turn(s).",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Sailing_Towards_a_Second_Life",
    name: "Sailing Towards a Second Life",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/e/eb/Light_Cone_Sailing_Towards_a_Second_Life.png/revision/latest/scale-to-width-down/50?cb=20240603054042",
    starCount: 5,
    path: "The Hunt",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Rough Water",
    passive:
      "Increases the wearer's Break Effect by 60~100%. The Break DMG dealt by the wearer ignores 20~32% of the target's DEF. When the wearer's Break Effect in battle is at 150% or greater, increases their SPD by 12~20%.",
    characters: ["Boothill"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Scent_Alone_Stays_True",
    name: "Scent Alone Stays True",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/e/eb/Light_Cone_Scent_Alone_Stays_True.png/revision/latest/scale-to-width-down/50?cb=20241002192322",
    starCount: 5,
    path: "Abundance",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Contentment",
    passive:
      'Increases the wearer\'s Break Effect by 60~100%. After the wearer uses Ultimate to attack enemy targets, inflicts the targets with the "Woefree" state, lasting for 2 turn(s). While in "Woefree," enemy targets take 10~18% increased DMG. The effect of increasing DMG taken is additionally boosted by 8~16% if the wearer\'s current Break Effect is 150% or higher.',
    characters: ["Lingsha"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Shadowed_by_Night",
    name: "Shadowed by Night",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b5/Light_Cone_Shadowed_by_Night.png/revision/latest/scale-to-width-down/50?cb=20241002192237",
    starCount: 4,
    path: "The Hunt",
    stats: { hp: "Unknown", atk: "Unknown", def: "Unknown" },
    passiveName: "Concealment",
    passive:
      "Increases the wearer's Break Effect by 28~56%. When entering battle or after dealing Break DMG, increases SPD by 8~12%, lasting for 2 turn(s). This effect can only trigger once per turn.",
    characters: ["Moze"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Shared_Feeling",
    name: "Shared Feeling",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/3/35/Light_Cone_Shared_Feeling.png/revision/latest/scale-to-width-down/50?cb=20230719025615",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "43~952", atk: "19~423", def: "18~396" },
    passiveName: "Cure and Repair",
    passive:
      "Increases the wearer's Outgoing Healing by 10~20%. When using Skill, regenerates 2.0~4.0 Energy for all allies.",
    characters: ["Clara", "Natasha"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Shattered_Home",
    name: "Shattered Home",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/6/62/Light_Cone_Shattered_Home.png/revision/latest/scale-to-width-down/50?cb=20230719025111",
    starCount: 3,
    path: "Destruction",
    stats: { hp: "38~846", atk: "16~370", def: "9~198" },
    passiveName: "Eradication",
    passive:
      "The wearer deals 20~40% more DMG to enemy targets whose HP percentage is greater than 50%.",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/She_Already_Shut_Her_Eyes",
    name: "She Already Shut Her Eyes",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0a/Light_Cone_She_Already_Shut_Her_Eyes.png/revision/latest/scale-to-width-down/50?cb=20230920055423",
    starCount: 5,
    path: "Preservation",
    stats: { hp: "57~1270", atk: "19~423", def: "24~529" },
    passiveName: "Visioscape",
    passive:
      "Increases the wearer's Max HP by 24~40% and Energy Regeneration Rate by 12~20%. When the wearer's HP is reduced, all allies' DMG dealt increases by 9.0~15.0%, lasting for 2 turn(s).At the start of every wave, restores HP to all allies by an amount equal to 80~100% of their respective lost HP.",
    characters: ["Fu Xuan"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Sleep_Like_the_Dead",
    name: "Sleep Like the Dead",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Light_Cone_Sleep_Like_the_Dead.png/revision/latest/scale-to-width-down/50?cb=20230719030626",
    starCount: 5,
    path: "The Hunt",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "Sweet Dreams",
    passive:
      "Increases the wearer's CRIT DMG by 30~50%. When the wearer's Basic ATK or Skill DMG does not result in a CRIT Hit, increases their CRIT Rate by 36~60%, lasting for 1 turn(s). This effect can only trigger once every 3 turn(s).",
    characters: ["Jing Yuan", "Yanqing"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Solitary_Healing",
    name: "Solitary Healing",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Light_Cone_Solitary_Healing.png/revision/latest/scale-to-width-down/50?cb=20230830022551",
    starCount: 5,
    path: "Nihility",
    stats: { hp: "48~1058", atk: "24~529", def: "18~396" },
    passiveName: "Chaos Elixir",
    passive:
      "Increases the wearer's Break Effect by 20~40%. When the wearer uses their Ultimate, increases DoT dealt by the wearer by 24~48%, lasting for 2 turn(s). When a target enemy suffering from DoT imposed by the wearer is defeated, regenerates 4.0~6.0 Energy for the wearer.",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Something_Irreplaceable",
    name: "Something Irreplaceable",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7a/Light_Cone_Something_Irreplaceable.png/revision/latest/scale-to-width-down/50?cb=20230719030434",
    starCount: 5,
    path: "Destruction",
    stats: { hp: "52~1164", atk: "26~582", def: "18~396" },
    passiveName: "Kinship",
    passive:
      "Increases the wearer's ATK by 24~40%. When the wearer defeats an enemy or is hit, immediately restores HP equal to 8~12% of the wearer's ATK. At the same time, the wearer's DMG is increased by 24~40% until the end of their next turn. This effect cannot stack and can only trigger 1 time per turn.",
    characters: ["Clara", "Svarog"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Subscribe_for_More!",
    name: "Subscribe for More!",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/57/Light_Cone_Subscribe_for_More%21.png/revision/latest/scale-to-width-down/50?cb=20230719025856",
    starCount: 4,
    path: "The Hunt",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Like Before You Leave!",
    passive:
      "The wearer's Basic ATK and Skill deals 24~48% more DMG. This effect increases by an extra 24~48% when the wearer's current Energy reaches its max level.",
    characters: ["Guinaifen", "Sushang"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Swordplay",
    name: "Swordplay",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b9/Light_Cone_Swordplay.png/revision/latest/scale-to-width-down/50?cb=20230719025703",
    starCount: 4,
    path: "The Hunt",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Answers of Their Own",
    passive:
      "For each time the wearer hits the same target, DMG dealt increases by 8~16%, stacking up to 5 time(s). This effect will be dispelled when the wearer changes targets.",
    characters: ["Sushang"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Texture_of_Memories",
    name: "Texture of Memories",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/1/1e/Light_Cone_Texture_of_Memories.png/revision/latest/scale-to-width-down/50?cb=20230719024830",
    starCount: 5,
    path: "Preservation",
    stats: { hp: "48~1058", atk: "19~423", def: "24~529" },
    passiveName: "Treasure",
    passive:
      "Increases the wearer's Effect RES by 8~16%. If the wearer is attacked and has no Shield, they gain a Shield equal to 16~32% of their Max HP for 2 turn(s). This effect can only be triggered once every 3 turn(s). If the wearer has a Shield when attacked, the DMG they receive decreases by 12~24%.",
    characters: [],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/The_Birth_of_the_Self",
    name: "The Birth of the Self",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f1/Light_Cone_The_Birth_of_the_Self.png/revision/latest/scale-to-width-down/50?cb=20230719025559",
    starCount: 4,
    path: "Erudition",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "The Maiden in the Painting",
    passive:
      "Increases DMG dealt by the wearer's follow-up attacks by 24~48%. If the current HP of the target enemy is below or equal to 50%, increases DMG dealt by follow-up attacks by an extra 24~48%.",
    characters: ["Herta"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/The_Day_The_Cosmos_Fell",
    name: "The Day The Cosmos Fell",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/fe/Light_Cone_The_Day_The_Cosmos_Fell.png/revision/latest/scale-to-width-down/50?cb=20240206022414",
    starCount: 4,
    path: "Erudition",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Stratagem",
    passive:
      "Increases the wearer's ATK by 16~24%. When the wearer uses an attack and at least 2 attacked enemies have the corresponding Weakness, the wearer's CRIT DMG increases by 20~40%, lasting for 2 turn(s).",
    characters: ["Gray Bean Paste", "Molten Cheese Tart", "Salty Rimeplume"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/The_Moles_Welcome_You",
    name: "The Moles Welcome You",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5a/Light_Cone_The_Moles_Welcome_You.png/revision/latest/scale-to-width-down/50?cb=20230719025543",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "48~1058", atk: "21~476", def: "12~264" },
    passiveName: "Fantastic Adventure",
    passive:
      "When the wearer uses Basic ATK, Skill, or Ultimate to attack enemies, the wearer gains one stack of Mischievous. Each stack increases the wearer's ATK by 12~24%.",
    characters: ["Alina", "Hook", "Julian", "The Moles"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/The_Seriousness_of_Breakfast",
    name: "The Seriousness of Breakfast",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d6/Light_Cone_The_Seriousness_of_Breakfast.png/revision/latest/scale-to-width-down/50?cb=20230719030137",
    starCount: 4,
    path: "Erudition",
    stats: { hp: "38~846", atk: "21~476", def: "18~396" },
    passiveName: "Get Ready",
    passive:
      "Increases the wearer's DMG by 12~24%. For every enemy defeated by the wearer, the wearer's ATK increases by 4~8%, stacking up to 3 time(s).",
    characters: ["Pom-Pom"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/The_Unreachable_Side",
    name: "The Unreachable Side",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b7/Light_Cone_The_Unreachable_Side.png/revision/latest/scale-to-width-down/50?cb=20230719023309",
    starCount: 5,
    path: "Destruction",
    stats: { hp: "57~1270", atk: "26~582", def: "15~330" },
    passiveName: "Unfulfilled Yearning",
    passive:
      "Increases the wearer's CRIT rate by 18~30% and increases their Max HP by 18~30%. When the wearer is attacked or consumes their own HP, their DMG increases by 24~40%. This effect is removed after the wearer uses an attack.",
    characters: ["Blade"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/This_Is_Me!",
    name: "This Is Me!",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/c/cb/Light_Cone_This_Is_Me%21.png/revision/latest/scale-to-width-down/50?cb=20230719030225",
    starCount: 4,
    path: "Preservation",
    stats: { hp: "38~846", atk: "16~370", def: "24~529" },
    passiveName: "New Chapter",
    passive:
      "Increases the wearer's DEF by 16~32%. Increases the DMG of the wearer when they use their Ultimate by 60~120% of the wearer's DEF. This effect only applies 1 time per enemy target during each use of the wearer's Ultimate.",
    characters: ["Himeko", "March 7th"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Those_Many_Springs",
    name: "Those Many Springs",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/4/40/Light_Cone_Those_Many_Springs.png/revision/latest/scale-to-width-down/50?cb=20240821090652",
    starCount: 5,
    path: "Nihility",
    stats: { hp: "43~952", atk: "26~582", def: "24~529" },
    passiveName: "Wordly Affairs Leave No Mark",
    passive:
      'Increases the wearer\'s Effect Hit Rate by 60~100%. After the wearer uses Basic ATK, Skill, or Ultimate to attack an enemy target, there is a 60% base chance to inflict "Unarmored" on the target. While in the Unarmored state, the enemy target receives 10~18% increased DMG, lasting for 2 turn(s). If the target is under a DoT state inflicted by the wearer, there is a 60% base chance to upgrade the "Unarmored" state inflicted by the wearer to the "Cornered" state, which additionally increases the DMG the enemy target receives by 14~22%, lasting for 2 turn(s). During this period, the wearer cannot inflict "Unarmored" on the target.',
    characters: ["Jiaoqiu"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Time_Waits_for_No_One",
    name: "Time Waits for No One",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/b/b1/Light_Cone_Time_Waits_for_No_One.png/revision/latest/scale-to-width-down/50?cb=20230719030642",
    starCount: 5,
    path: "Abundance",
    stats: { hp: "57~1270", atk: "21~476", def: "21~463" },
    passiveName: "Morn, Noon, Dusk, and Night",
    passive:
      "Increases the wearer's Max HP by 18~30% and Outgoing Healing by 12~20%. When the wearer heals allies, record the amount of Outgoing Healing. When any ally launches an attack, a random attacked enemy takes Additional DMG equal to 36~60% of the recorded Outgoing Healing value. The type of this Additional DMG is of the same Type as the wearer's. This Additional DMG is not affected by other buffs, and can only occur 1 time per turn.",
    characters: ["Bailu"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Today_Is_Another_Peaceful_Day",
    name: "Today Is Another Peaceful Day",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c3/Light_Cone_Today_Is_Another_Peaceful_Day.png/revision/latest/scale-to-width-down/50?cb=20230719030329",
    starCount: 4,
    path: "Erudition",
    stats: { hp: "38~846", atk: "24~529", def: "15~330" },
    passiveName: "A Storm Is Coming",
    passive:
      "fter entering battle, increases the wearer's DMG based on their Max Energy. Each point of Energy increases DMG by 0.20~0.40%. A max of 160 Energy will be taken into account for this.",
    characters: ["Fu Xuan", "Qingque"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Trend_of_the_Universal_Market",
    name: "Trend of the Universal Market",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8a/Light_Cone_Trend_of_the_Universal_Market.png/revision/latest/scale-to-width-down/50?cb=20230719025840",
    starCount: 4,
    path: "Preservation",
    stats: { hp: "48~1058", atk: "16~370", def: "18~396" },
    passiveName: "A New Round of Shuffling",
    passive:
      "Increases the wearer's DEF by 16~32%. When the wearer is attacked, there is a 100~120% base chance to Burn the enemy. For each turn, the wearer deals DoT that is equal to 40~80% of the wearer's DEF for 2 turn(s).",
    characters: ["Aventurine", "Topaz"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Under_the_Blue_Sky",
    name: "Under the Blue Sky",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/01/Light_Cone_Under_the_Blue_Sky.png/revision/latest/scale-to-width-down/50?cb=20230719025928",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Rye Under the Sun",
    passive:
      "Increases the wearer's ATK by 16~32%. When the wearer defeats an enemy, the wearer's CRIT Rate increases by 12~24% for 3 turn(s).",
    characters: ["Hanya", "Xueyi"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Void",
    name: "Void",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/3/37/Light_Cone_Void.png/revision/latest/scale-to-width-down/50?cb=20230719024951",
    starCount: 3,
    path: "Nihility",
    stats: { hp: "38~846", atk: "14~317", def: "12~264" },
    passiveName: "Fallen",
    passive:
      "At the start of the battle, the wearer's Effect Hit Rate increases by 20~40% for 3 turn(s).",
    characters: [],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Warmth_Shortens_Cold_Nights",
    name: "Warmth Shortens Cold Nights",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a2/Light_Cone_Warmth_Shortens_Cold_Nights.png/revision/latest/scale-to-width-down/50?cb=20230719030153",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "48~1058", atk: "16~370", def: "18~396" },
    passiveName: "Tiny Light",
    passive:
      "Increases the wearer's Max HP by 16~32%. When using Basic ATK or Skill, restores all allies' HP by an amount equal to 2.0~4.0% of their respective Max HP.",
    characters: ["Lynx", "Pela"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/We_Are_Wildfire",
    name: "We Are Wildfire",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c2/Light_Cone_We_Are_Wildfire.png/revision/latest/scale-to-width-down/50?cb=20230719030032",
    starCount: 4,
    path: "Preservation",
    stats: { hp: "33~740", atk: "21~476", def: "21~463" },
    passiveName: "Teary-Eyed",
    passive:
      "At the start of the battle, the DMG dealt to all allies decreases by 8~16% for 5 turn(s). At the same time, immediately restores HP to all allies equal to 30~50% of the respective HP difference between the characters' Max HP and current HP.",
    characters: ["Oleg", "Seele"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/We_Will_Meet_Again",
    name: "We Will Meet Again",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c1/Light_Cone_We_Will_Meet_Again.png/revision/latest/scale-to-width-down/50?cb=20230719030209",
    starCount: 4,
    path: "Nihility",
    stats: { hp: "38~846", atk: "24~529", def: "15~330" },
    passiveName: "A Discourse in Arms",
    passive:
      "fter the wearer uses Basic ATK or Skill, deals Additional DMG equal to 48~96% of the wearer's ATK to a random enemy that has been attacked.",
    characters: ["Screwllum", "Silver Wolf"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/What_Is_Real%3F",
    name: "What Is Real?",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0c/Light_Cone_What_Is_Real.png/revision/latest/scale-to-width-down/50?cb=20240206022433",
    starCount: 4,
    path: "Abundance",
    stats: { hp: "48~1058", atk: "19~423", def: "15~330" },
    passiveName: "Hypothesis",
    passive:
      "Increases the wearer's Break Effect by 24~48%. After using Basic ATK, restores HP for the wearer by an amount equal to 2.0~4.0% of Max HP plus 800.",
    characters: ["Gallagher"],
  },
  {
    wiki_link:
      "https://honkai-star-rail.fandom.com/wiki/Whereabouts_Should_Dreams_Rest",
    name: "Whereabouts Should Dreams Rest",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0e/Light_Cone_Whereabouts_Should_Dreams_Rest.png/revision/latest/scale-to-width-down/50?cb=20240607171003",
    starCount: 5,
    path: "Destruction",
    stats: { hp: "52~1164", atk: "21~476", def: "24~529" },
    passiveName: "Metamorphosis",
    passive:
      "Increases the wearer's Break Effect by 60~100%. When the wearer deals Break DMG to an enemy target, inflicts Routed on the enemy, lasting for 2 turn(s). Targets afflicted with Routed receive 24.0~40.0% increased Break DMG from the wearer, and their SPD is lowered by 20%. Effects of the same type cannot be stacked.",
    characters: ["Firefly"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Woof!_Walk_Time!",
    name: "Woof! Walk Time!",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/f/f2/Light_Cone_Woof%21_Walk_Time%21.png/revision/latest/scale-to-width-down/50?cb=20230719030121",
    starCount: 4,
    path: "Destruction",
    stats: { hp: "43~952", atk: "21~476", def: "15~330" },
    passiveName: "Run!",
    passive:
      "Increases the wearer's ATK by 10~20%, and increases their DMG to enemies afflicted with Burn or Bleed by 16~32%. This also applies to DoT.",
    characters: ["Arlan", "Asta", "Peppy"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Worrisome,_Blissful",
    name: "Worrisome, Blissful",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/3/37/Light_Cone_Worrisome%2C_Blissful.png/revision/latest/scale-to-width-down/50?cb=20231029050253",
    starCount: 5,
    path: "The Hunt",
    stats: { hp: "48~1058", atk: "26~582", def: "21~463" },
    passiveName: "One At A Time",
    passive:
      "Increase the wearer's CRIT Rate by 18~30% and increases DMG dealt by follow-up attack by 30~50%. After the wearer uses a follow-up attack, inflicts the target with the Tame state, stacking up to 2 time(s). When allies hit enemy targets under the Tame state, each Tame stack increases the CRIT DMG dealt by 12~20%.",
    characters: ["Topaz & Numby"],
  },
  {
    wiki_link: "https://honkai-star-rail.fandom.com/wiki/Yet_Hope_Is_Priceless",
    name: "Yet Hope Is Priceless",
    image:
      "https://static.wikia.nocookie.net/houkai-star-rail/images/5/52/Light_Cone_Yet_Hope_Is_Priceless.png/revision/latest/scale-to-width-down/50?cb=20240607171006",
    starCount: 5,
    path: "Erudition",
    stats: { hp: "43~952", atk: "26~582", def: "24~529" },
    passiveName: "Promise",
    passive:
      "Increases the wearer's CRIT Rate by 16~28%. While the wearer is in battle, for every 20% CRIT DMG that exceeds 120%, the DMG dealt by follow-up attack increases by 12~20%. This effect can stack up to 4 time(s). When the battle starts or after the wearer uses their Basic ATK, enables the DMG dealt by Ultimate or follow-up attack to ignore 20~36% of the target's DEF, lasting for 2 turn(s).",
    characters: ["Jade"],
  },
];
