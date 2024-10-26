import json
from typing import Any
from bs4 import BeautifulSoup, ResultSet, Tag
from urllib.request import urlopen

SOURCE_PAGE = "https://honkai-star-rail.fandom.com/wiki/Light_Cone/List"


def main():
    light_cone_rows = get_light_cone_data()
    result: list[Any] = []

    for cone_data in light_cone_rows[1:]:  # Skip header
        children: list[Tag] = cone_data.find_all("td")
        icon_and_name = children[0]
        rarity = children[1]
        path = children[2]
        stats = children[3]
        passive = children[4]
        featured_characters = children[5]

        result.append(
            {
                "wiki_link": "https://honkai-star-rail.fandom.com"
                + icon_and_name.find("a").get("href"),
                "name": icon_and_name.text.strip(),
                "image": icon_and_name.find("img").get("data-src"),
                "starCount": int(rarity.find("img").get("alt")[0]),
                "path": path.text.strip(),
                "stats": stats.text,
                "passiveName": passive.find("b").text,
                "passive": passive.text,
                "characters": list(
                    map(lambda li: li.text, featured_characters.find_all("li"))
                ),
            }
        )

    # Small fixes
    for i in range(len(result)):
        # Remove passive title from passive text
        result[i]["passive"] = (
            result[i]["passive"].lstrip(result[i]["passiveName"]).strip()
        )
        # Fix nbsp
        result[i]["stats"] = result[i]["stats"].replace("\xa0", " ").strip()
        # Remove ',' from numbers (thousand indicator)
        result[i]["stats"] = result[i]["stats"].replace(",", "").strip()
        # Split stats into HP/ATK/DEF
        if result[i]["stats"] == "Unknown":
            result[i]["stats"] = {
                "hp": "Unknown",
                "atk": "Unknown",
                "def": "Unknown",
            }
        else:
            atk_start = result[i]["stats"].index("ATK")
            def_start = result[i]["stats"].index("DEF")
            result[i]["stats"] = {
                "hp": result[i]["stats"][len("HP: ") : atk_start],
                "atk": result[i]["stats"][atk_start + len("ATK: ") : def_start],
                "def": result[i]["stats"][def_start + len("DEF: ") :],
            }

    print(json.dumps(result))


def get_light_cone_data() -> ResultSet[Tag]:
    document = BeautifulSoup(urlopen(SOURCE_PAGE).read(), features="lxml")
    table = document.find("table")
    if not isinstance(table, Tag):
        raise Exception("Could not find light cone table")

    body = table.find("tbody")
    if not isinstance(body, Tag):
        raise Exception("Light cone table has no body")

    return body.find_all("tr")


if __name__ == "__main__":
    main()
