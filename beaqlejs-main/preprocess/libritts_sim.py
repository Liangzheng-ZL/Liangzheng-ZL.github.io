"""Preprocessing listening samples."""
from pathlib import Path
from orjson import dumps, OPT_INDENT_2

# LJSpeech MOS:

systems = [
    "LibriTTS_HiFiGAN", "LibriTTS_AE", "LibriTTS_FastSpeech2", "LibriTTS_VITS_TEMP33",
    "LibriTTS_Grad_ODE_100_TEMP20", "LibriTTS_Diff_SDE_100_TEMP90", "LibriTTS_Diff_SDE_300_TEMP80"
]

from audios.LibriTTS import tests


configs = []
for key, text in tests:
    spk = key.split("_")[0]
    files = {
        "Reference": f"audios/LibriTTS/LibriTTS_GT/{spk}.wav"
    }
    files.update(
        (system, f"audios/LibriTTS/{system}/{spk}.wav") for system in systems
    )
    configs.append({
        "Name": f"{key}",
        "Text": f"{text}",
        "TestID": f"libritts_sim_{key}",
        "Files": files
    })

configs_json = dumps(configs, option=OPT_INDENT_2).decode("UTF-8")


header = """var TestConfig = {
  "TestName": "Multi-Speaker TTS Similarity Test",
  "RateScalePng": "img/new_9_mos_scale_with_digit.png",
  "RateScaleBgPng": "img/new_9_mos_scale.png",
  "RateMinValue": 1,
  "RateMaxValue": 9,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
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

with open("config/libritts_sim.js", "w") as f:
    f.write(dump)
