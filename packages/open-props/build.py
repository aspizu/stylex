import subprocess
from pathlib import Path

import msgspec.json

INFILE = Path("open-props.json")
OUTFILE = Path("open-props.stylex.ts")


def conv_prop(prop: str) -> tuple[str, str]:
    prop = prop.removeprefix("--")
    words = prop.split("-")
    prop = "".join(word[0].upper() + word[1:] for word in words[:-1])
    prop = prop[0].lower() + prop[1:]
    variant = words[-1]
    return prop, variant


def key(name: str) -> str:
    try:
        if str(int(name)) == name:
            return name
    except ValueError:
        pass
    return repr(name)


open_props: list[tuple[str, str]] = msgspec.json.decode(INFILE.read_bytes())

props_dict: dict[str, dict[str, str]] = {}

for prop, value in open_props:
    if prop.endswith("@"):
        continue
    prop, variant = conv_prop(prop)
    props_dict[prop] = props_dict.get(prop, {})
    props_dict[prop][variant] = value

with OUTFILE.open("w") as f:
    f.write('import * as stylex from "@stylexjs/stylex";\n\n')
    for prop, variants in props_dict.items():
        f.write(f"const {prop} = stylex.defineVars({{")
        for variant, value in variants.items():
            f.write(f"{key(variant)}: {value!r},")
        f.write("});\n\n")

subprocess.run(["prettier", "--write", OUTFILE], check=True)
