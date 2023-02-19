var TestConfig = {
  "TestName": "Zero-shot TTS Naturalness Test",
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
    "Name": "p225_064",
    "TestID": "zeroshot_mos_p225_064",
    "Text": "It could take some time.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p225_064.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p225_064.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p225_064.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p225_064.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p225_064.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p225_064.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p225_064.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p225_064.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p225_064.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p225_064.wav"
    }
  },
  {
    "Name": "p225_310",
    "TestID": "zeroshot_mos_p225_310",
    "Text": "What are they for?",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p225_310.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p225_310.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p225_310.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p225_310.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p225_310.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p225_310.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p225_310.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p225_310.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p225_310.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p225_310.wav"
    }
  },
  {
    "Name": "p225_166",
    "TestID": "zeroshot_mos_p225_166",
    "Text": "Like last month, it is simply too early to make a call.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p225_166.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p225_166.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p225_166.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p225_166.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p225_166.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p225_166.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p225_166.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p225_166.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p225_166.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p225_166.wav"
    }
  },
  {
    "Name": "p225_314",
    "TestID": "zeroshot_mos_p225_314",
    "Text": "We believe the world has too many refugees already.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p225_314.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p225_314.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p225_314.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p225_314.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p225_314.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p225_314.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p225_314.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p225_314.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p225_314.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p225_314.wav"
    }
  },
  {
    "Name": "p225_007",
    "TestID": "zeroshot_mos_p225_007",
    "Text": "The rainbow is a division of white light into many beautiful colors.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p225_007.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p225_007.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p225_007.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p225_007.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p225_007.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p225_007.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p225_007.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p225_007.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p225_007.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p225_007.wav"
    }
  },
  {
    "Name": "p234_069",
    "TestID": "zeroshot_mos_p234_069",
    "Text": "The market is appalling for initial public offerings.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p234_069.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p234_069.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p234_069.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p234_069.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p234_069.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p234_069.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p234_069.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p234_069.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p234_069.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p234_069.wav"
    }
  },
  {
    "Name": "p234_189",
    "TestID": "zeroshot_mos_p234_189",
    "Text": "It is simply not true.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p234_189.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p234_189.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p234_189.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p234_189.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p234_189.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p234_189.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p234_189.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p234_189.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p234_189.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p234_189.wav"
    }
  },
  {
    "Name": "p234_164",
    "TestID": "zeroshot_mos_p234_164",
    "Text": "Alice, the girl, was said by doctors to be in good condition.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p234_164.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p234_164.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p234_164.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p234_164.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p234_164.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p234_164.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p234_164.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p234_164.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p234_164.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p234_164.wav"
    }
  },
  {
    "Name": "p234_234",
    "TestID": "zeroshot_mos_p234_234",
    "Text": "It was served by sheriff officers, not by the council.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p234_234.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p234_234.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p234_234.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p234_234.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p234_234.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p234_234.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p234_234.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p234_234.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p234_234.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p234_234.wav"
    }
  },
  {
    "Name": "p234_176",
    "TestID": "zeroshot_mos_p234_176",
    "Text": "I was in a hole.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p234_176.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p234_176.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p234_176.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p234_176.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p234_176.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p234_176.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p234_176.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p234_176.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p234_176.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p234_176.wav"
    }
  },
  {
    "Name": "p238_262",
    "TestID": "zeroshot_mos_p238_262",
    "Text": "Alex has been a huge influence on the club.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p238_262.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p238_262.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p238_262.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p238_262.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p238_262.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p238_262.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p238_262.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p238_262.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p238_262.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p238_262.wav"
    }
  },
  {
    "Name": "p238_425",
    "TestID": "zeroshot_mos_p238_425",
    "Text": "We decided we would go for a specialist inside centre.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p238_425.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p238_425.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p238_425.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p238_425.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p238_425.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p238_425.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p238_425.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p238_425.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p238_425.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p238_425.wav"
    }
  },
  {
    "Name": "p238_104",
    "TestID": "zeroshot_mos_p238_104",
    "Text": "That would be the case with Dundee.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p238_104.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p238_104.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p238_104.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p238_104.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p238_104.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p238_104.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p238_104.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p238_104.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p238_104.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p238_104.wav"
    }
  },
  {
    "Name": "p238_069",
    "TestID": "zeroshot_mos_p238_069",
    "Text": "The partnership was set up during the summer.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p238_069.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p238_069.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p238_069.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p238_069.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p238_069.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p238_069.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p238_069.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p238_069.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p238_069.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p238_069.wav"
    }
  },
  {
    "Name": "p238_419",
    "TestID": "zeroshot_mos_p238_419",
    "Text": "Either way, the investor retains the premium.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p238_419.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p238_419.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p238_419.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p238_419.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p238_419.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p238_419.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p238_419.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p238_419.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p238_419.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p238_419.wav"
    }
  },
  {
    "Name": "p245_214",
    "TestID": "zeroshot_mos_p245_214",
    "Text": "At the time, he was a living legend.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p245_214.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p245_214.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p245_214.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p245_214.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p245_214.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p245_214.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p245_214.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p245_214.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p245_214.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p245_214.wav"
    }
  },
  {
    "Name": "p245_029",
    "TestID": "zeroshot_mos_p245_029",
    "Text": "Several other countries are also reported to be interested in the format.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p245_029.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p245_029.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p245_029.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p245_029.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p245_029.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p245_029.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p245_029.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p245_029.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p245_029.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p245_029.wav"
    }
  },
  {
    "Name": "p245_074",
    "TestID": "zeroshot_mos_p245_074",
    "Text": "Every woman deserves to live without this type of fear.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p245_074.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p245_074.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p245_074.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p245_074.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p245_074.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p245_074.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p245_074.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p245_074.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p245_074.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p245_074.wav"
    }
  },
  {
    "Name": "p245_329",
    "TestID": "zeroshot_mos_p245_329",
    "Text": "Hopefully, it will come from someone on our side.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p245_329.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p245_329.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p245_329.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p245_329.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p245_329.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p245_329.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p245_329.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p245_329.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p245_329.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p245_329.wav"
    }
  },
  {
    "Name": "p245_044",
    "TestID": "zeroshot_mos_p245_044",
    "Text": "But it took a lot of bottle.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p245_044.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p245_044.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p245_044.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p245_044.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p245_044.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p245_044.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p245_044.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p245_044.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p245_044.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p245_044.wav"
    }
  },
  {
    "Name": "p248_033",
    "TestID": "zeroshot_mos_p248_033",
    "Text": "They should have a major rethink about the event for next year.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p248_033.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p248_033.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p248_033.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p248_033.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p248_033.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p248_033.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p248_033.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p248_033.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p248_033.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p248_033.wav"
    }
  },
  {
    "Name": "p248_274",
    "TestID": "zeroshot_mos_p248_274",
    "Text": "I feel pretty good.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p248_274.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p248_274.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p248_274.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p248_274.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p248_274.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p248_274.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p248_274.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p248_274.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p248_274.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p248_274.wav"
    }
  },
  {
    "Name": "p248_321",
    "TestID": "zeroshot_mos_p248_321",
    "Text": "Her husband was very concerned that it might be fatal.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p248_321.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p248_321.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p248_321.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p248_321.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p248_321.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p248_321.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p248_321.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p248_321.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p248_321.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p248_321.wav"
    }
  },
  {
    "Name": "p248_164",
    "TestID": "zeroshot_mos_p248_164",
    "Text": "I was in the train station overnight.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p248_164.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p248_164.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p248_164.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p248_164.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p248_164.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p248_164.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p248_164.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p248_164.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p248_164.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p248_164.wav"
    }
  },
  {
    "Name": "p248_042",
    "TestID": "zeroshot_mos_p248_042",
    "Text": "I was scared.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p248_042.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p248_042.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p248_042.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p248_042.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p248_042.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p248_042.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p248_042.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p248_042.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p248_042.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p248_042.wav"
    }
  },
  {
    "Name": "p261_164",
    "TestID": "zeroshot_mos_p261_164",
    "Text": "Last weekend in Germany, he missed the cut.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p261_164.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p261_164.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p261_164.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p261_164.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p261_164.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p261_164.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p261_164.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p261_164.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p261_164.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p261_164.wav"
    }
  },
  {
    "Name": "p261_064",
    "TestID": "zeroshot_mos_p261_064",
    "Text": "He becomes the new Minister for Sport and Culture.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p261_064.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p261_064.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p261_064.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p261_064.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p261_064.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p261_064.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p261_064.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p261_064.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p261_064.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p261_064.wav"
    }
  },
  {
    "Name": "p261_378",
    "TestID": "zeroshot_mos_p261_378",
    "Text": "But they have taken the lesson to heart.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p261_378.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p261_378.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p261_378.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p261_378.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p261_378.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p261_378.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p261_378.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p261_378.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p261_378.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p261_378.wav"
    }
  },
  {
    "Name": "p261_155",
    "TestID": "zeroshot_mos_p261_155",
    "Text": "The strong pound also took its toll.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p261_155.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p261_155.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p261_155.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p261_155.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p261_155.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p261_155.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p261_155.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p261_155.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p261_155.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p261_155.wav"
    }
  },
  {
    "Name": "p261_113",
    "TestID": "zeroshot_mos_p261_113",
    "Text": "He thought she was amazing.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p261_113.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p261_113.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p261_113.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p261_113.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p261_113.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p261_113.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p261_113.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p261_113.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p261_113.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p261_113.wav"
    }
  },
  {
    "Name": "p294_338",
    "TestID": "zeroshot_mos_p294_338",
    "Text": "No-one else was hurt.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p294_338.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p294_338.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p294_338.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p294_338.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p294_338.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p294_338.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p294_338.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p294_338.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p294_338.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p294_338.wav"
    }
  },
  {
    "Name": "p294_050",
    "TestID": "zeroshot_mos_p294_050",
    "Text": "In fact, it is deeply unpleasant.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p294_050.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p294_050.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p294_050.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p294_050.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p294_050.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p294_050.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p294_050.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p294_050.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p294_050.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p294_050.wav"
    }
  },
  {
    "Name": "p294_398",
    "TestID": "zeroshot_mos_p294_398",
    "Text": "No other vehicle was involved in the accident.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p294_398.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p294_398.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p294_398.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p294_398.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p294_398.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p294_398.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p294_398.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p294_398.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p294_398.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p294_398.wav"
    }
  },
  {
    "Name": "p294_396",
    "TestID": "zeroshot_mos_p294_396",
    "Text": "We are on the path of change.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p294_396.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p294_396.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p294_396.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p294_396.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p294_396.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p294_396.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p294_396.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p294_396.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p294_396.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p294_396.wav"
    }
  },
  {
    "Name": "p294_201",
    "TestID": "zeroshot_mos_p294_201",
    "Text": "All options are on the table.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p294_201.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p294_201.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p294_201.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p294_201.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p294_201.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p294_201.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p294_201.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p294_201.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p294_201.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p294_201.wav"
    }
  },
  {
    "Name": "p302_184",
    "TestID": "zeroshot_mos_p302_184",
    "Text": "No, it's actually in a block of flats.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p302_184.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p302_184.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p302_184.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p302_184.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p302_184.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p302_184.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p302_184.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p302_184.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p302_184.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p302_184.wav"
    }
  },
  {
    "Name": "p302_272",
    "TestID": "zeroshot_mos_p302_272",
    "Text": "I'm not sure how they got there, but they are.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p302_272.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p302_272.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p302_272.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p302_272.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p302_272.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p302_272.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p302_272.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p302_272.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p302_272.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p302_272.wav"
    }
  },
  {
    "Name": "p302_144",
    "TestID": "zeroshot_mos_p302_144",
    "Text": "You were the kidnappers.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p302_144.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p302_144.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p302_144.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p302_144.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p302_144.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p302_144.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p302_144.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p302_144.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p302_144.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p302_144.wav"
    }
  },
  {
    "Name": "p302_114",
    "TestID": "zeroshot_mos_p302_114",
    "Text": "It is time for a more honest approach.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p302_114.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p302_114.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p302_114.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p302_114.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p302_114.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p302_114.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p302_114.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p302_114.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p302_114.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p302_114.wav"
    }
  },
  {
    "Name": "p302_052",
    "TestID": "zeroshot_mos_p302_052",
    "Text": "He served in the Gulf, the Falklands, and Northern Ireland.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p302_052.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p302_052.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p302_052.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p302_052.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p302_052.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p302_052.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p302_052.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p302_052.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p302_052.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p302_052.wav"
    }
  },
  {
    "Name": "p326_061",
    "TestID": "zeroshot_mos_p326_061",
    "Text": "Mr Blunkett was convinced.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p326_061.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p326_061.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p326_061.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p326_061.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p326_061.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p326_061.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p326_061.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p326_061.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p326_061.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p326_061.wav"
    }
  },
  {
    "Name": "p326_311",
    "TestID": "zeroshot_mos_p326_311",
    "Text": "It's a record label, not a form of music.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p326_311.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p326_311.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p326_311.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p326_311.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p326_311.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p326_311.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p326_311.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p326_311.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p326_311.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p326_311.wav"
    }
  },
  {
    "Name": "p326_274",
    "TestID": "zeroshot_mos_p326_274",
    "Text": "However, within five minutes they were able to celebrate.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p326_274.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p326_274.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p326_274.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p326_274.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p326_274.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p326_274.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p326_274.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p326_274.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p326_274.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p326_274.wav"
    }
  },
  {
    "Name": "p326_271",
    "TestID": "zeroshot_mos_p326_271",
    "Text": "Maybe it helps us.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p326_271.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p326_271.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p326_271.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p326_271.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p326_271.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p326_271.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p326_271.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p326_271.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p326_271.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p326_271.wav"
    }
  },
  {
    "Name": "p326_205",
    "TestID": "zeroshot_mos_p326_205",
    "Text": "As agreed, the prime minister was driven to Westminster Hall.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p326_205.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p326_205.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p326_205.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p326_205.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p326_205.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p326_205.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p326_205.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p326_205.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p326_205.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p326_205.wav"
    }
  },
  {
    "Name": "p335_335",
    "TestID": "zeroshot_mos_p335_335",
    "Text": "I don't have any more contact with Airdrie.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p335_335.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p335_335.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p335_335.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p335_335.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p335_335.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p335_335.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p335_335.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p335_335.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p335_335.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p335_335.wav"
    }
  },
  {
    "Name": "p335_022",
    "TestID": "zeroshot_mos_p335_022",
    "Text": "The actual primary rainbow observed is said to be the effect of super-imposition of a number of bows.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p335_022.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p335_022.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p335_022.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p335_022.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p335_022.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p335_022.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p335_022.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p335_022.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p335_022.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p335_022.wav"
    }
  },
  {
    "Name": "p335_359",
    "TestID": "zeroshot_mos_p335_359",
    "Text": "It is like a theatre of the absurd.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p335_359.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p335_359.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p335_359.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p335_359.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p335_359.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p335_359.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p335_359.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p335_359.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p335_359.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p335_359.wav"
    }
  },
  {
    "Name": "p335_037",
    "TestID": "zeroshot_mos_p335_037",
    "Text": "There were no proposals on the table.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p335_037.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p335_037.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p335_037.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p335_037.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p335_037.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p335_037.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p335_037.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p335_037.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p335_037.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p335_037.wav"
    }
  },
  {
    "Name": "p335_154",
    "TestID": "zeroshot_mos_p335_154",
    "Text": "Where is the anthrax?",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p335_154.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p335_154.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p335_154.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p335_154.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p335_154.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p335_154.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p335_154.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p335_154.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p335_154.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p335_154.wav"
    }
  },
  {
    "Name": "p347_127",
    "TestID": "zeroshot_mos_p347_127",
    "Text": "It is just part of modern day life.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p347_127.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p347_127.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p347_127.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p347_127.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p347_127.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p347_127.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p347_127.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p347_127.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p347_127.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p347_127.wav"
    }
  },
  {
    "Name": "p347_098",
    "TestID": "zeroshot_mos_p347_098",
    "Text": "What's it got to do with art?",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p347_098.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p347_098.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p347_098.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p347_098.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p347_098.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p347_098.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p347_098.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p347_098.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p347_098.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p347_098.wav"
    }
  },
  {
    "Name": "p347_058",
    "TestID": "zeroshot_mos_p347_058",
    "Text": "From our point of view, the player is free to leave.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p347_058.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p347_058.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p347_058.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p347_058.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p347_058.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p347_058.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p347_058.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p347_058.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p347_058.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p347_058.wav"
    }
  },
  {
    "Name": "p347_315",
    "TestID": "zeroshot_mos_p347_315",
    "Text": "We hope this scheme will change that.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p347_315.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p347_315.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p347_315.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p347_315.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p347_315.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p347_315.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p347_315.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p347_315.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p347_315.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p347_315.wav"
    }
  },
  {
    "Name": "p347_151",
    "TestID": "zeroshot_mos_p347_151",
    "Text": "I just wasn't very good.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/p347_151.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/p347_151.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/p347_151.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/p347_151.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/p347_151.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/p347_151.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/p347_151.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/p347_151.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/p347_151.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/p347_151.wav"
    }
  },
  {
    "Name": "121_121726_000029_000003",
    "TestID": "zeroshot_mos_121_121726_000029_000003",
    "Text": "In Germany, they generally \"Hock the Kaiser.\"",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/121_121726_000029_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/121_121726_000029_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/121_121726_000029_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/121_121726_000029_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/121_121726_000029_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/121_121726_000029_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/121_121726_000029_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/121_121726_000029_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/121_121726_000029_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/121_121726_000029_000003.wav"
    }
  },
  {
    "Name": "121_121726_000034_000001",
    "TestID": "zeroshot_mos_121_121726_000034_000001",
    "Text": "Also, a draft on futurity, sometimes honored, but generally extended.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/121_121726_000034_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/121_121726_000034_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/121_121726_000034_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/121_121726_000034_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/121_121726_000034_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/121_121726_000034_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/121_121726_000034_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/121_121726_000034_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/121_121726_000034_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/121_121726_000034_000001.wav"
    }
  },
  {
    "Name": "121_121726_000005_000001",
    "TestID": "zeroshot_mos_121_121726_000005_000001",
    "Text": "The beggar's plea, the politician's sceptre and the drummer's ablest assistant.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/121_121726_000005_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/121_121726_000005_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/121_121726_000005_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/121_121726_000005_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/121_121726_000005_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/121_121726_000005_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/121_121726_000005_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/121_121726_000005_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/121_121726_000005_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/121_121726_000005_000001.wav"
    }
  },
  {
    "Name": "121_121726_000025_000000",
    "TestID": "zeroshot_mos_121_121726_000025_000000",
    "Text": "A transferable ticket to the Haul of Fame.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/121_121726_000025_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/121_121726_000025_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/121_121726_000025_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/121_121726_000025_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/121_121726_000025_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/121_121726_000025_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/121_121726_000025_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/121_121726_000025_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/121_121726_000025_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/121_121726_000025_000000.wav"
    }
  },
  {
    "Name": "121_121726_000025_000001",
    "TestID": "zeroshot_mos_121_121726_000025_000001",
    "Text": "Once held by Hobson and Dewey, now carried by Mother Eddy and Brother Dowie.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/121_121726_000025_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/121_121726_000025_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/121_121726_000025_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/121_121726_000025_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/121_121726_000025_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/121_121726_000025_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/121_121726_000025_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/121_121726_000025_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/121_121726_000025_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/121_121726_000025_000001.wav"
    }
  },
  {
    "Name": "237_126133_000023_000000",
    "TestID": "zeroshot_mos_237_126133_000023_000000",
    "Text": "But Polly couldn't speak; and if Jasper hadn't caught her just in time, she would have tumbled over backward from the stool, Phronsie and all!",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/237_126133_000023_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/237_126133_000023_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/237_126133_000023_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/237_126133_000023_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/237_126133_000023_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/237_126133_000023_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/237_126133_000023_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/237_126133_000023_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/237_126133_000023_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/237_126133_000023_000000.wav"
    }
  },
  {
    "Name": "237_126133_000014_000001",
    "TestID": "zeroshot_mos_237_126133_000014_000001",
    "Text": "So, with a great many chucklings and shruggings when no one was by, he had departed after breakfast one day, simply saying he shouldn't be back to lunch.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/237_126133_000014_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/237_126133_000014_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/237_126133_000014_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/237_126133_000014_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/237_126133_000014_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/237_126133_000014_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/237_126133_000014_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/237_126133_000014_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/237_126133_000014_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/237_126133_000014_000001.wav"
    }
  },
  {
    "Name": "237_126133_000005_000000",
    "TestID": "zeroshot_mos_237_126133_000005_000000",
    "Text": "Every chance she could steal after practice hours were over, and after the clamorous demands of the boys upon her time were fully satisfied, was seized to fly on the wings of the wind, to the flowers.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/237_126133_000005_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/237_126133_000005_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/237_126133_000005_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/237_126133_000005_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/237_126133_000005_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/237_126133_000005_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/237_126133_000005_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/237_126133_000005_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/237_126133_000005_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/237_126133_000005_000000.wav"
    }
  },
  {
    "Name": "237_126133_000002_000003",
    "TestID": "zeroshot_mos_237_126133_000002_000003",
    "Text": "At night, when no one knew it, the tears would come racing over the poor, forlorn little face, and would not be squeezed back.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/237_126133_000002_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/237_126133_000002_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/237_126133_000002_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/237_126133_000002_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/237_126133_000002_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/237_126133_000002_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/237_126133_000002_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/237_126133_000002_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/237_126133_000002_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/237_126133_000002_000003.wav"
    }
  },
  {
    "Name": "237_126133_000049_000000",
    "TestID": "zeroshot_mos_237_126133_000049_000000",
    "Text": "But the chubby face didn't look up brightly, as usual: and the next moment, without a bit of warning, Phronsie sprang past them all, even Polly, and flung herself into mr King's arms, in a perfect torrent of sobs.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/237_126133_000049_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/237_126133_000049_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/237_126133_000049_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/237_126133_000049_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/237_126133_000049_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/237_126133_000049_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/237_126133_000049_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/237_126133_000049_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/237_126133_000049_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/237_126133_000049_000000.wav"
    }
  },
  {
    "Name": "260_123286_000058_000001",
    "TestID": "zeroshot_mos_260_123286_000058_000001",
    "Text": "Its body is entirely covered with a thick armour of scales, and its neck, as flexible as a swan's, rises thirty feet above the waves.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/260_123286_000058_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/260_123286_000058_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/260_123286_000058_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/260_123286_000058_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/260_123286_000058_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/260_123286_000058_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/260_123286_000058_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/260_123286_000058_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/260_123286_000058_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/260_123286_000058_000001.wav"
    }
  },
  {
    "Name": "260_123286_000061_000006",
    "TestID": "zeroshot_mos_260_123286_000061_000006",
    "Text": "But soon the reptile's agony draws to an end; its movements become fainter, its contortions cease to be so violent, and the long serpentine form lies a lifeless log on the labouring deep.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/260_123286_000061_000006.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/260_123286_000061_000006.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/260_123286_000061_000006.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/260_123286_000061_000006.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/260_123286_000061_000006.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/260_123286_000061_000006.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/260_123286_000061_000006.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/260_123286_000061_000006.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/260_123286_000061_000006.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/260_123286_000061_000006.wav"
    }
  },
  {
    "Name": "260_123286_000024_000000",
    "TestID": "zeroshot_mos_260_123286_000024_000000",
    "Text": "But when the pick was shipped again, Hans pointed out on its surface deep prints as if it had been violently compressed between two hard bodies.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/260_123286_000024_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/260_123286_000024_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/260_123286_000024_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/260_123286_000024_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/260_123286_000024_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/260_123286_000024_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/260_123286_000024_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/260_123286_000024_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/260_123286_000024_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/260_123286_000024_000000.wav"
    }
  },
  {
    "Name": "260_123286_000045_000002",
    "TestID": "zeroshot_mos_260_123286_000045_000002",
    "Text": "They were of supernatural dimensions; the smallest of them would have crunched our raft, crew and all, at one snap of its huge jaws.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/260_123286_000045_000002.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/260_123286_000045_000002.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/260_123286_000045_000002.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/260_123286_000045_000002.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/260_123286_000045_000002.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/260_123286_000045_000002.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/260_123286_000045_000002.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/260_123286_000045_000002.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/260_123286_000045_000002.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/260_123286_000045_000002.wav"
    }
  },
  {
    "Name": "260_123286_000040_000000",
    "TestID": "zeroshot_mos_260_123286_000040_000000",
    "Text": "Hans pointed with his finger at a dark mass six hundred yards away, rising and falling alternately with heavy plunges.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/260_123286_000040_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/260_123286_000040_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/260_123286_000040_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/260_123286_000040_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/260_123286_000040_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/260_123286_000040_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/260_123286_000040_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/260_123286_000040_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/260_123286_000040_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/260_123286_000040_000000.wav"
    }
  },
  {
    "Name": "908_157963_000034_000000",
    "TestID": "zeroshot_mos_908_157963_000034_000000",
    "Text": "She wandered in the land of clouds thro' valleys dark, listning Dolors and lamentations: waiting oft beside the dewy grave She stood in silence, listning to the voices of the ground, Till to her own grave plot she came, and there she sat down. And heard this voice of sorrow breathed from the hollow pit.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/908_157963_000034_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/908_157963_000034_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/908_157963_000034_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/908_157963_000034_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/908_157963_000034_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/908_157963_000034_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/908_157963_000034_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/908_157963_000034_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/908_157963_000034_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/908_157963_000034_000000.wav"
    }
  },
  {
    "Name": "908_31957_000017_000002",
    "TestID": "zeroshot_mos_908_31957_000017_000002",
    "Text": "The second passed in height The first, and sought the forehead, and half missed, Half falling on the hair.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/908_31957_000017_000002.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/908_31957_000017_000002.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/908_31957_000017_000002.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/908_31957_000017_000002.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/908_31957_000017_000002.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/908_31957_000017_000002.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/908_31957_000017_000002.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/908_31957_000017_000002.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/908_31957_000017_000002.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/908_31957_000017_000002.wav"
    }
  },
  {
    "Name": "908_157963_000004_000000",
    "TestID": "zeroshot_mos_908_157963_000004_000000",
    "Text": "Does the Eagle know what is in the pit? Or wilt thou go ask the Mole: Can Wisdom be put in a silver rod? Or Love in a golden bowl?",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/908_157963_000004_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/908_157963_000004_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/908_157963_000004_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/908_157963_000004_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/908_157963_000004_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/908_157963_000004_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/908_157963_000004_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/908_157963_000004_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/908_157963_000004_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/908_157963_000004_000000.wav"
    }
  },
  {
    "Name": "908_31957_000007_000000",
    "TestID": "zeroshot_mos_908_31957_000007_000000",
    "Text": "Yes, call me by my pet name! let me hear The name I used to run at, when a child, From innocent play, and leave the cowslips plied, To glance up in some face that proved me dear With the look of its eyes.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/908_31957_000007_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/908_31957_000007_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/908_31957_000007_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/908_31957_000007_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/908_31957_000007_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/908_31957_000007_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/908_31957_000007_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/908_31957_000007_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/908_31957_000007_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/908_31957_000007_000000.wav"
    }
  },
  {
    "Name": "908_31957_000011_000001",
    "TestID": "zeroshot_mos_908_31957_000011_000001",
    "Text": "Shall I never miss Home talk and blessing and the common kiss That comes to each in turn, nor count it strange, When I look up, to drop on a new range Of walls and floors, another home than this? Nay, wilt thou fill that place by me which is Filled by dead eyes too tender to know change That's hardest.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/908_31957_000011_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/908_31957_000011_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/908_31957_000011_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/908_31957_000011_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/908_31957_000011_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/908_31957_000011_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/908_31957_000011_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/908_31957_000011_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/908_31957_000011_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/908_31957_000011_000001.wav"
    }
  },
  {
    "Name": "1089_134686_000014_000003",
    "TestID": "zeroshot_mos_1089_134686_000014_000003",
    "Text": "If ever his soul, re entering her dwelling shyly after the frenzy of his body's lust had spent itself, was turned towards her whose emblem is the morning star, BRIGHT AND MUSICAL, TELLING OF HEAVEN AND INFUSING PEACE, it was when her names were murmured softly by lips whereon there still lingered foul and shameful words, the savour itself of a lewd kiss.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1089_134686_000014_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1089_134686_000014_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1089_134686_000014_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1089_134686_000014_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1089_134686_000014_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1089_134686_000014_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1089_134686_000014_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1089_134686_000014_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1089_134686_000014_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1089_134686_000014_000003.wav"
    }
  },
  {
    "Name": "1089_134686_000034_000003",
    "TestID": "zeroshot_mos_1089_134686_000034_000003",
    "Text": "A saint who has great power in heaven, remember: power to intercede for us in our grief; power to obtain whatever we pray for if it be for the good of our souls; power above all to obtain for us the grace to repent if we be in sin.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1089_134686_000034_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1089_134686_000034_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1089_134686_000034_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1089_134686_000034_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1089_134686_000034_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1089_134686_000034_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1089_134686_000034_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1089_134686_000034_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1089_134686_000034_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1089_134686_000034_000003.wav"
    }
  },
  {
    "Name": "1089_134686_000024_000001",
    "TestID": "zeroshot_mos_1089_134686_000024_000001",
    "Text": "If a man had stolen a pound in his youth and had used that pound to amass a huge fortune how much was he obliged to give back, the pound he had stolen only or the pound together with the compound interest accruing upon it or all his huge fortune?",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1089_134686_000024_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1089_134686_000024_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1089_134686_000024_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1089_134686_000024_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1089_134686_000024_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1089_134686_000024_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1089_134686_000024_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1089_134686_000024_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1089_134686_000024_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1089_134686_000024_000001.wav"
    }
  },
  {
    "Name": "1089_134686_000011_000002",
    "TestID": "zeroshot_mos_1089_134686_000011_000002",
    "Text": "On Sunday mornings as he passed the church door he glanced coldly at the worshippers who stood bareheaded, four deep, outside the church, morally present at the mass which they could neither see nor hear. Their dull piety and the sickly smell of the cheap hair oil with which they had anointed their heads repelled him from the altar they prayed at.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1089_134686_000011_000002.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1089_134686_000011_000002.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1089_134686_000011_000002.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1089_134686_000011_000002.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1089_134686_000011_000002.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1089_134686_000011_000002.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1089_134686_000011_000002.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1089_134686_000011_000002.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1089_134686_000011_000002.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1089_134686_000011_000002.wav"
    }
  },
  {
    "Name": "1089_134686_000002_000004",
    "TestID": "zeroshot_mos_1089_134686_000002_000004",
    "Text": "Yet as he prowled in quest of that call, his senses, stultified only by his desire, would note keenly all that wounded or shamed them; his eyes, a ring of porter froth on a clothless table or a photograph of two soldiers standing to attention or a gaudy playbill; his ears, the drawling jargon of greeting:",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1089_134686_000002_000004.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1089_134686_000002_000004.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1089_134686_000002_000004.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1089_134686_000002_000004.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1089_134686_000002_000004.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1089_134686_000002_000004.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1089_134686_000002_000004.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1089_134686_000002_000004.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1089_134686_000002_000004.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1089_134686_000002_000004.wav"
    }
  },
  {
    "Name": "1188_133604_000012_000004",
    "TestID": "zeroshot_mos_1188_133604_000012_000004",
    "Text": "And one of the chief delights which any one who really enjoys painting finds in that art as distinct from sculpture is in this exquisite inlaying or joiner's work of it, the fitting of edge to edge with a manual skill precisely correspondent to the close application of crowded notes without the least slur, in fine harp or piano playing.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1188_133604_000012_000004.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1188_133604_000012_000004.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1188_133604_000012_000004.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1188_133604_000012_000004.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1188_133604_000012_000004.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1188_133604_000012_000004.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1188_133604_000012_000004.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1188_133604_000012_000004.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1188_133604_000012_000004.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1188_133604_000012_000004.wav"
    }
  },
  {
    "Name": "1188_133604_000021_000003",
    "TestID": "zeroshot_mos_1188_133604_000021_000003",
    "Text": "Of course, I cannot do so myself; yet in these sketches of mine, made for the sake of color, there is enough to show you the nature and the value of the method. They are two pieces of study of the color of marble architecture, the tints literally \"edified,\" and laid edge to edge as simply on the paper as the stones are on the walls.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1188_133604_000021_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1188_133604_000021_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1188_133604_000021_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1188_133604_000021_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1188_133604_000021_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1188_133604_000021_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1188_133604_000021_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1188_133604_000021_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1188_133604_000021_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1188_133604_000021_000003.wav"
    }
  },
  {
    "Name": "1188_133604_000018_000002",
    "TestID": "zeroshot_mos_1188_133604_000018_000002",
    "Text": "There are just four touches-fine as the finest penmanship-to do that beak; and yet you will find that in the peculiar paroquettish mumbling and nibbling action of it, and all the character in which this nibbling beak differs from the tearing beak of the eagle, it is impossible to go farther or be more precise.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1188_133604_000018_000002.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1188_133604_000018_000002.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1188_133604_000018_000002.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1188_133604_000018_000002.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1188_133604_000018_000002.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1188_133604_000018_000002.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1188_133604_000018_000002.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1188_133604_000018_000002.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1188_133604_000018_000002.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1188_133604_000018_000002.wav"
    }
  },
  {
    "Name": "1188_133604_000033_000001",
    "TestID": "zeroshot_mos_1188_133604_000033_000001",
    "Text": "You might more easily fill a house with pictures like Constable's from garret to cellar, than imitate one cluster of leaves by Van Eyck or Giotto; and among all the efforts that have been made to paint our common wild flowers, I have only once-and that in this very year, just in time to show it to you-seen the thing done rightly.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1188_133604_000033_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1188_133604_000033_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1188_133604_000033_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1188_133604_000033_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1188_133604_000033_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1188_133604_000033_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1188_133604_000033_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1188_133604_000033_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1188_133604_000033_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1188_133604_000033_000001.wav"
    }
  },
  {
    "Name": "1188_133604_000011_000003",
    "TestID": "zeroshot_mos_1188_133604_000011_000003",
    "Text": "And therefore, primarily, they must be able to divide; so that elementary exercises in color must be directed, like first exercises in music, to the clear separation of notes; and the final perfections of color are those in which, of innumerable notes or hues, every one has a distinct office, and can be fastened on by the eye, and approved, as fulfilling it.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1188_133604_000011_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1188_133604_000011_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1188_133604_000011_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1188_133604_000011_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1188_133604_000011_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1188_133604_000011_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1188_133604_000011_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1188_133604_000011_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1188_133604_000011_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1188_133604_000011_000003.wav"
    }
  },
  {
    "Name": "1284_1180_000006_000002",
    "TestID": "zeroshot_mos_1284_1180_000006_000002",
    "Text": "For a long time he had wished to explore the beautiful Land of Oz in which they lived.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1284_1180_000006_000002.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1284_1180_000006_000002.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1284_1180_000006_000002.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1284_1180_000006_000002.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1284_1180_000006_000002.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1284_1180_000006_000002.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1284_1180_000006_000002.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1284_1180_000006_000002.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1284_1180_000006_000002.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1284_1180_000006_000002.wav"
    }
  },
  {
    "Name": "1284_1180_000007_000000",
    "TestID": "zeroshot_mos_1284_1180_000007_000000",
    "Text": "At the foot of the mountain that separated the Country of the Munchkins from the Country of the Gillikins, the path divided.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1284_1180_000007_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1284_1180_000007_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1284_1180_000007_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1284_1180_000007_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1284_1180_000007_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1284_1180_000007_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1284_1180_000007_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1284_1180_000007_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1284_1180_000007_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1284_1180_000007_000000.wav"
    }
  },
  {
    "Name": "1284_1180_000024_000001",
    "TestID": "zeroshot_mos_1284_1180_000024_000001",
    "Text": "There was a savory stew, smoking hot, a dish of blue peas, a bowl of sweet milk of a delicate blue tint and a blue pudding with blue plums in it.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1284_1180_000024_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1284_1180_000024_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1284_1180_000024_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1284_1180_000024_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1284_1180_000024_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1284_1180_000024_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1284_1180_000024_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1284_1180_000024_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1284_1180_000024_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1284_1180_000024_000001.wav"
    }
  },
  {
    "Name": "1284_1180_000004_000004",
    "TestID": "zeroshot_mos_1284_1180_000004_000004",
    "Text": "Instead of shoes, the old man wore boots with turnover tops and his blue coat had wide cuffs of gold braid.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1284_1180_000004_000004.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1284_1180_000004_000004.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1284_1180_000004_000004.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1284_1180_000004_000004.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1284_1180_000004_000004.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1284_1180_000004_000004.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1284_1180_000004_000004.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1284_1180_000004_000004.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1284_1180_000004_000004.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1284_1180_000004_000004.wav"
    }
  },
  {
    "Name": "1284_1180_000008_000001",
    "TestID": "zeroshot_mos_1284_1180_000008_000001",
    "Text": "Then they started on again and two hours later came in sight of the house of dr Pipt.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1284_1180_000008_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1284_1180_000008_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1284_1180_000008_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1284_1180_000008_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1284_1180_000008_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1284_1180_000008_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1284_1180_000008_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1284_1180_000008_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1284_1180_000008_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1284_1180_000008_000001.wav"
    }
  },
  {
    "Name": "1580_141083_000006_000002",
    "TestID": "zeroshot_mos_1580_141083_000006_000002",
    "Text": "He shrugged his shoulders in ungracious acquiescence, while our visitor in hurried words and with much excitable gesticulation poured forth his story.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1580_141083_000006_000002.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1580_141083_000006_000002.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1580_141083_000006_000002.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1580_141083_000006_000002.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1580_141083_000006_000002.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1580_141083_000006_000002.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1580_141083_000006_000002.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1580_141083_000006_000002.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1580_141083_000006_000002.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1580_141083_000006_000002.wav"
    }
  },
  {
    "Name": "1580_141083_000006_000001",
    "TestID": "zeroshot_mos_1580_141083_000006_000001",
    "Text": "Without his scrapbooks, his chemicals, and his homely untidiness, he was an uncomfortable man.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1580_141083_000006_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1580_141083_000006_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1580_141083_000006_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1580_141083_000006_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1580_141083_000006_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1580_141083_000006_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1580_141083_000006_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1580_141083_000006_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1580_141083_000006_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1580_141083_000006_000001.wav"
    }
  },
  {
    "Name": "1580_141083_000061_000001",
    "TestID": "zeroshot_mos_1580_141083_000061_000001",
    "Text": "As a matter of fact, the drawn curtain disclosed nothing but three or four suits of clothes hanging from a line of pegs.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1580_141083_000061_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1580_141083_000061_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1580_141083_000061_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1580_141083_000061_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1580_141083_000061_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1580_141083_000061_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1580_141083_000061_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1580_141083_000061_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1580_141083_000061_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1580_141083_000061_000001.wav"
    }
  },
  {
    "Name": "1580_141083_000015_000003",
    "TestID": "zeroshot_mos_1580_141083_000015_000003",
    "Text": "A large sum of money is at stake, for the scholarship is a very valuable one, and an unscrupulous man might very well run a risk in order to gain an advantage over his fellows.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1580_141083_000015_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1580_141083_000015_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1580_141083_000015_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1580_141083_000015_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1580_141083_000015_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1580_141083_000015_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1580_141083_000015_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1580_141083_000015_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1580_141083_000015_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1580_141083_000015_000003.wav"
    }
  },
  {
    "Name": "1580_141083_000009_000004",
    "TestID": "zeroshot_mos_1580_141083_000009_000004",
    "Text": "I found that the key was indeed his, that he had entered my room to know if I wanted tea, and that he had very carelessly left the key in the door when he came out.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1580_141083_000009_000004.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1580_141083_000009_000004.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1580_141083_000009_000004.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1580_141083_000009_000004.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1580_141083_000009_000004.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1580_141083_000009_000004.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1580_141083_000009_000004.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1580_141083_000009_000004.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1580_141083_000009_000004.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1580_141083_000009_000004.wav"
    }
  },
  {
    "Name": "1995_1826_000004_000003",
    "TestID": "zeroshot_mos_1995_1826_000004_000003",
    "Text": "Nevertheless, when the end of the summer came and the only opening facing her was the teaching of children at Miss Smith's experiment in the Alabama swamps, it must be frankly confessed that Miss Taylor was disappointed.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1995_1826_000004_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1995_1826_000004_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1995_1826_000004_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1995_1826_000004_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1995_1826_000004_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1995_1826_000004_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1995_1826_000004_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1995_1826_000004_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1995_1826_000004_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1995_1826_000004_000003.wav"
    }
  },
  {
    "Name": "1995_1826_000016_000012",
    "TestID": "zeroshot_mos_1995_1826_000016_000012",
    "Text": "She felt out of the world, shut in and mentally anaemic; great as the \"Negro Problem\" might be as a world problem, it looked sordid and small at close range.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1995_1826_000016_000012.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1995_1826_000016_000012.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1995_1826_000016_000012.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1995_1826_000016_000012.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1995_1826_000016_000012.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1995_1826_000016_000012.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1995_1826_000016_000012.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1995_1826_000016_000012.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1995_1826_000016_000012.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1995_1826_000016_000012.wav"
    }
  },
  {
    "Name": "1995_1826_000016_000001",
    "TestID": "zeroshot_mos_1995_1826_000016_000001",
    "Text": "But here in Alabama, brought closely and intimately in touch with these dark skinned children, their color struck her at first with a sort of terror-it seemed ominous and forbidding.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1995_1826_000016_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1995_1826_000016_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1995_1826_000016_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1995_1826_000016_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1995_1826_000016_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1995_1826_000016_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1995_1826_000016_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1995_1826_000016_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1995_1826_000016_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1995_1826_000016_000001.wav"
    }
  },
  {
    "Name": "1995_1826_000005_000003",
    "TestID": "zeroshot_mos_1995_1826_000005_000003",
    "Text": "But from the offer that came to teach Negroes-country Negroes, and little ones at that-she shrank, and, indeed, probably would have refused it out of hand had it not been for her queer brother, john.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1995_1826_000005_000003.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1995_1826_000005_000003.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1995_1826_000005_000003.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1995_1826_000005_000003.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1995_1826_000005_000003.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1995_1826_000005_000003.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1995_1826_000005_000003.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1995_1826_000005_000003.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1995_1826_000005_000003.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1995_1826_000005_000003.wav"
    }
  },
  {
    "Name": "1995_1826_000042_000000",
    "TestID": "zeroshot_mos_1995_1826_000042_000000",
    "Text": "His eyes lighted, for cotton was to him a very real and beautiful thing, and a life-long companion, yet not one whose friendship had been coarsened and killed by heavy toil.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/1995_1826_000042_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/1995_1826_000042_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/1995_1826_000042_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/1995_1826_000042_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/1995_1826_000042_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/1995_1826_000042_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/1995_1826_000042_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/1995_1826_000042_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/1995_1826_000042_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/1995_1826_000042_000000.wav"
    }
  },
  {
    "Name": "2300_131720_000023_000000",
    "TestID": "zeroshot_mos_2300_131720_000023_000000",
    "Text": "In this connection it should be mentioned that the Association of Edison Illuminating Companies in the same year adopted resolutions unanimously to the effect that the Edison meter was accurate, and that its use was not expensive for stations above one thousand lights; and that the best financial results were invariably secured in a station selling current by meter.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/2300_131720_000023_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/2300_131720_000023_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/2300_131720_000023_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/2300_131720_000023_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/2300_131720_000023_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/2300_131720_000023_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/2300_131720_000023_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/2300_131720_000023_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/2300_131720_000023_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/2300_131720_000023_000000.wav"
    }
  },
  {
    "Name": "2300_131720_000032_000000",
    "TestID": "zeroshot_mos_2300_131720_000032_000000",
    "Text": "Returning to the more specific subject of pioneer plants of importance, that at Brockton must be considered for a moment, chiefly for the reason that the city was the first in the world to possess an Edison station distributing current through an underground three wire network of conductors-the essentially modern contemporaneous practice, standard twenty five years later.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/2300_131720_000032_000000.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/2300_131720_000032_000000.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/2300_131720_000032_000000.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/2300_131720_000032_000000.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/2300_131720_000032_000000.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/2300_131720_000032_000000.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/2300_131720_000032_000000.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/2300_131720_000032_000000.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/2300_131720_000032_000000.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/2300_131720_000032_000000.wav"
    }
  },
  {
    "Name": "2300_131720_000021_000001",
    "TestID": "zeroshot_mos_2300_131720_000021_000001",
    "Text": "When the lights or motors in the circuit are turned on, and a certain definite small portion of the current is diverted to flow through the meter, from the positive plate to the negative plate, the latter increases in weight by receiving a deposit of metallic zinc; the positive plate meantime losing in weight by the metal thus carried away from it.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/2300_131720_000021_000001.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/2300_131720_000021_000001.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/2300_131720_000021_000001.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/2300_131720_000021_000001.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/2300_131720_000021_000001.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/2300_131720_000021_000001.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/2300_131720_000021_000001.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/2300_131720_000021_000001.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/2300_131720_000021_000001.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/2300_131720_000021_000001.wav"
    }
  },
  {
    "Name": "2300_131720_000033_000008",
    "TestID": "zeroshot_mos_2300_131720_000033_000008",
    "Text": "It was at this central station that Lieutenant Sprague began his historic work on the electric motor; and here that another distinguished engineer and inventor, mr h Ward Leonard, installed the meters and became meter man, in order that he might study in every intimate detail the improvements and refinements necessary in that branch of the industry.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/2300_131720_000033_000008.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/2300_131720_000033_000008.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/2300_131720_000033_000008.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/2300_131720_000033_000008.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/2300_131720_000033_000008.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/2300_131720_000033_000008.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/2300_131720_000033_000008.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/2300_131720_000033_000008.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/2300_131720_000033_000008.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/2300_131720_000033_000008.wav"
    }
  },
  {
    "Name": "2300_131720_000005_000005",
    "TestID": "zeroshot_mos_2300_131720_000005_000005",
    "Text": "Its thin wires can be carried cheaply over vast areas, and at each local point of consumption the transformer of size exactly proportioned to its local task takes the high voltage transmission current and lowers its potential at a ratio of twenty or forty to one, for use in distribution and consumption circuits.",
    "Files": {
      "Zeroshot_GT": "audios/ZeroShot/Zeroshot_GT/2300_131720_000005_000005.wav",
      "Zeroshot_AE": "audios/ZeroShot/Zeroshot_AE/2300_131720_000005_000005.wav",
      "Zeroshot_HiFiGAN": "audios/ZeroShot/Zeroshot_HiFiGAN/2300_131720_000005_000005.wav",
      "Zeroshot_MetaStyleSpeech": "audios/ZeroShot/Zeroshot_MetaStyleSpeech/2300_131720_000005_000005.wav",
      "Zeroshot_YourTTS": "audios/ZeroShot/Zeroshot_YourTTS/2300_131720_000005_000005.wav",
      "Zeroshot_FastSpeech2": "audios/ZeroShot/Zeroshot_FastSpeech2/2300_131720_000005_000005.wav",
      "Zeroshot_FastSpeech2_GST": "audios/ZeroShot/Zeroshot_FastSpeech2_GST/2300_131720_000005_000005.wav",
      "Zeroshot_VITS_XVectors": "audios/ZeroShot/Zeroshot_VITS_XVectors/2300_131720_000005_000005.wav",
      "Zeroshot_DiffVoice_ODE_100_TEMP09": "audios/ZeroShot/Zeroshot_DiffVoice_ODE_100_TEMP09/2300_131720_000005_000005.wav",
      "Zeroshot_DiffVoice_Prompt_SDE300_TEMP08": "audios/ZeroShot/Zeroshot_DiffVoice_Prompt_SDE300_TEMP08/2300_131720_000005_000005.wav"
    }
  }
]
}
