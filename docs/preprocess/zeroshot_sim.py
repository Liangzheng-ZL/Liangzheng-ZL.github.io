"""Preprocessing listening samples."""
from pathlib import Path
from orjson import dumps, OPT_INDENT_2

# LJSpeech MOS:

systems = [
    "Zeroshot_GT", "Zeroshot_AE", "Zeroshot_HiFiGAN", "Zeroshot_MetaStyleSpeech", "Zeroshot_YourTTS",
    "Zeroshot_FastSpeech2", "Zeroshot_FastSpeech2_GST", "Zeroshot_VITS_XVectors",
    "Zeroshot_DiffVoice_ODE_100_TEMP09", "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08"
]

from audios.ZeroShot import tests, texts

configs = []

for _, _, src_key, tgt_keys in tests:
    for tgt_key in tgt_keys:
        files = {
            "Reference": f"audios/ZeroShot/Zeroshot_Ref/{src_key}.wav"
        }
        files.update(
            (system, f"audios/ZeroShot/{system}/{tgt_key}.wav")
            for system in systems
        )
        configs.append({
            "Name": tgt_key,
            "TestID": f"zeroshot_sim_{tgt_key}",
            "Text": texts[tgt_key],
            "Files": files
        })

configs_json = dumps(configs, option=OPT_INDENT_2).decode("UTF-8")

header = """var TestConfig = {
  "TestName": "Zero-shot TTS Similarity Test",
  "RateScalePng": "img/new_9_mos_scale_with_digit.png",
  "RateScaleBgPng": "img/new_9_mos_scale.png",
  "RateMinValue": 1,
  "RateMaxValue": 9,
  "RateDefaultValue": 0,
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

with open("config/zeroshot_sim.js", "w") as f:
    f.write(dump)
