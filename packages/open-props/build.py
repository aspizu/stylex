import contextlib
import json
import subprocess
from pathlib import Path
from typing import IO, Any

import requests
from rich import print

VERSION = "1.7.4"
URL = f"https://unpkg.com/open-props@{VERSION}/open-props.style-dictionary-tokens.json"
OUTFILE = Path("open-props.stylex.ts")


def prop_name(name: str) -> str:
    # If name is a number, return it as is
    with contextlib.suppress(ValueError):
        if str(int(name)) == name:
            return name
    # Convert kebab-case to camelCase
    words = [word[0].upper() + word[1:] for word in name.split("-")]
    name = "".join(words)
    name = name[0].lower() + name[1:]
    return repr(name)


def var_name(name: str) -> str:
    # Convert kebab-case to camelCase
    words = [word[0].upper() + word[1:] for word in name.split("-")]
    name = "".join(words)
    return name[0].lower() + name[1:]


data_path = Path(f"open-props-{VERSION}.json")
if data_path.is_file():
    with data_path.open() as json_file:
        props = json.load(json_file)
else:
    print(f"Downloading props from [blue]{URL}[/blue]")
    data = requests.get(URL).text
    props = json.loads(data)
    with data_path.open("w") as json_file:
        json_file.write(data)


def write_props(file: IO[str], prop: str, tokens: Any) -> None:
    sub_props: list[str] = []
    token_names: list[str] = []
    for token, value in tokens.items():
        if "value" not in value:
            sub_props.append(token)
        else:
            token_names.append(token)
    if token_names:
        file.write(f"export const {var_name(prop)} = stylex.defineVars({{")
        for token in token_names:
            value = tokens[token]["value"]
            file.write(f"\n  {prop_name(token)}: {value!r},")
        file.write("});")
    for sub_prop in sub_props:
        write_props(file, f"{prop}-{sub_prop}", tokens[sub_prop])


with OUTFILE.open("w") as f:
    f.write('import * as stylex from "@stylexjs/stylex";\n\n')
    for prop, tokens in props.items():
        if prop in {"color", "other"}:
            for token, value in tokens.items():
                write_props(f, token, value)
            continue
        write_props(f, prop, tokens)

subprocess.run(["prettier", "--write", OUTFILE.absolute().as_posix()], check=True)
