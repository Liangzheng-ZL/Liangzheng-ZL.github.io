"""Preprocessing listening samples."""
from pathlib import Path
from orjson import dumps, OPT_INDENT_2

# LJSpeech MOS:

systems = [
    "Edit_DiffVoice_SDE_300_Concat", "Edit_GT", "Edit_RetrieverTTS"
]

from audios.Editing import tests


configs = []
for idx, test in enumerate(tests):
    key, text, parts = test
    for i, case in enumerate(["short", "mid", "long"]):
        fill, _, _ = parts[i]
        assert fill in text, f"{fill} not found in {text}"
        ntext = text.replace(fill, "<b><u>"+fill+"</u></b>")
        configs.append({
            "Name": f"{case} edit, {idx}",
            "TestID": f"edit_mos_{case}_{idx}",
            "Text": f"{ntext}",
            "Files": {
                system: f"audios/Editing/{system}/{case}/{idx:05d}.wav" for system in systems
            }
        })

configs_json = dumps(configs, option=OPT_INDENT_2).decode("UTF-8")


header = """var TestConfig = {
  "TestName": "Multi-Speaker TTS Naturalness Test",
  "RateScalePng": "img/new_9_mos_scale_with_digit.png",
  "RateScaleBgPng": "img/new_9_mos_scale.png",
  "RateMinValue": 1,
  "RateMaxValue": 9,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "zhijunliu@sjtu.edu.cn",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 5,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": 
"""

footer = """
}
"""

dump = header + configs_json + footer

with open("config/edit_mos.js", "w") as f:
    f.write(dump)
