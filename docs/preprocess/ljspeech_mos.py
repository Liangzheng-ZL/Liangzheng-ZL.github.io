"""Preprocessing listening samples."""
from pathlib import Path
from orjson import dumps, OPT_INDENT_2

# LJSpeech MOS:

systems = [
    "LJSpeech_GT", "LJSpeech_HiFiGAN", "LJSpeech_AE", "LJSpeech_FastSpeech2", "LJSpeech_Grad_ODE_100_TEMP13",
    "LJSpeech_VITS", "LJSpeech_Diff_SDE_100_TEMP09"
]

from audios.LJSpeech import tests as ljspeech_tests


configs = []
for key, text in ljspeech_tests:
    configs.append({
        "Name": f"{key}",
        "TestID": f"ljspeech_mos_{key}",
        "Text": f"{text}",
        "Files": {
            system: f"audios/LJSpeech/{system}/{key}.wav" for system in systems
        }
    })

configs_json = dumps(configs, option=OPT_INDENT_2).decode("UTF-8")


header = """var TestConfig = {
  "TestName": "Single-Speaker TTS Naturalness Test",
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
  "SupervisorContact": "zhenglianglz@sjtu.edu.cn",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": 
"""

footer = """
}
"""

dump = header + configs_json + footer

with open("config/ljspeech_mos.js", "w") as f:
    f.write(dump)
