var TestConfig = {
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
  "SupervisorContact": "zhijunliu@sjtu.edu.cn",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": 
[
  {
    "Name": "LJ014-0171",
    "TestID": "ljspeech_mos_LJ014-0171",
    "Text": "I will briefly describe one or two of the more remarkable murders in the years immediately following, then pass on to another branch of crime.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ014-0171.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ014-0171.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ014-0171.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ014-0171.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ014-0171.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ014-0171.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ014-0171.wav"
    }
  }
]
}
