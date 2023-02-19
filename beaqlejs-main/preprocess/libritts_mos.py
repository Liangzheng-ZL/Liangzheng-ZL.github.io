"""Preprocessing listening samples."""
from pathlib import Path
from orjson import dumps, OPT_INDENT_2

# LJSpeech MOS:

systems = [
    "LibriTTS_GT", "LibriTTS_HiFiGAN", "LibriTTS_AE", "LibriTTS_FastSpeech2", "LibriTTS_VITS_TEMP33",
    "LibriTTS_Grad_ODE_100_TEMP20", "LibriTTS_Diff_SDE_100_TEMP90", "LibriTTS_Diff_SDE_300_TEMP80"
]

from audios.LibriTTS import tests


configs = []
for key, text in tests:
    spk = key.split("_")[0]
    configs.append({
        "Name": f"{key}",
        "TestID": f"libritts_mos_{key}",
        "Text": f"{text}",
        "Files": {
            system: f"audios/LibriTTS/{system}/{spk}.wav" for system in systems
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
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": 
"""

footer = """
}
"""

dump = header + configs_json + footer

with open("config/libritts_mos.js", "w") as f:
    f.write(dump)
