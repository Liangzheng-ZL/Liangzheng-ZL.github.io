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
    "Name": "LJ049-0022",
    "TestID": "ljspeech_mos_LJ049-0022",
    "Text": "The Secret Service believed that it was very doubtful that any President would ride regularly in a vehicle with a fixed top, even though transparent.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ049-0022.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ049-0022.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ049-0022.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ049-0022.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ049-0022.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ049-0022.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ049-0022.wav"
    }
  },
  {
    "Name": "LJ025-0157",
    "TestID": "ljspeech_mos_LJ025-0157",
    "Text": "Under these circumstances, unnatural as they are, with proper management, the bean will thrust forth its radicle and its plumule;",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ025-0157.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ025-0157.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ025-0157.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ025-0157.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ025-0157.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ025-0157.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ025-0157.wav"
    }
  },
  {
    "Name": "LJ042-0219",
    "TestID": "ljspeech_mos_LJ042-0219",
    "Text": "Oswald demonstrated his thinking in connection with his return to the United States by preparing two sets of identical questions of the type which he might have thought",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ042-0219.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ042-0219.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ042-0219.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ042-0219.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ042-0219.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ042-0219.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ042-0219.wav"
    }
  },
  {
    "Name": "LJ032-0164",
    "TestID": "ljspeech_mos_LJ032-0164",
    "Text": "it is not possible to state with scientific certainty that a particular small group of fibers come from a certain piece of clothing",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ032-0164.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ032-0164.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ032-0164.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ032-0164.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ032-0164.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ032-0164.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ032-0164.wav"
    }
  },
  {
    "Name": "LJ019-0169",
    "TestID": "ljspeech_mos_LJ019-0169",
    "Text": "and one or two men were allowed to mend clothes and make shoes. The rules made by the Secretary of State were hung up in conspicuous parts of the prison;",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ019-0169.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ019-0169.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ019-0169.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ019-0169.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ019-0169.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ019-0169.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ019-0169.wav"
    }
  },
  {
    "Name": "LJ034-0123",
    "TestID": "ljspeech_mos_LJ034-0123",
    "Text": "Although Brennan testified that the man in the window was standing when he fired the shots, most probably he was either sitting or kneeling.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ034-0123.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ034-0123.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ034-0123.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ034-0123.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ034-0123.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ034-0123.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ034-0123.wav"
    }
  },
  {
    "Name": "LJ016-0241",
    "TestID": "ljspeech_mos_LJ016-0241",
    "Text": "Calcraft served the city of London till eighteen seventy-four, when he was pensioned at the rate of twenty-five shillings per week.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ016-0241.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ016-0241.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ016-0241.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ016-0241.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ016-0241.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ016-0241.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ016-0241.wav"
    }
  },
  {
    "Name": "LJ008-0181",
    "TestID": "ljspeech_mos_LJ008-0181",
    "Text": "he had his pockets filled with bread and cheese, and it was generally supposed that he had come a long distance to see the fatal show.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ008-0181.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ008-0181.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ008-0181.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ008-0181.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ008-0181.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ008-0181.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ008-0181.wav"
    }
  },
  {
    "Name": "LJ044-0137",
    "TestID": "ljspeech_mos_LJ044-0137",
    "Text": "More seriously, the facts of his defection had become known, leaving him open to almost unanswerable attack by those who opposed his views.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ044-0137.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ044-0137.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ044-0137.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ044-0137.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ044-0137.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ044-0137.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ044-0137.wav"
    }
  },
  {
    "Name": "LJ012-0067",
    "TestID": "ljspeech_mos_LJ012-0067",
    "Text": "But misess Solomons could not resist the temptation to dabble in stolen goods, and she was found shipping watches of the wrong category to New York.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ012-0067.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ012-0067.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ012-0067.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ012-0067.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ012-0067.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ012-0067.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ012-0067.wav"
    }
  },
  {
    "Name": "LJ032-0045",
    "TestID": "ljspeech_mos_LJ032-0045",
    "Text": "This price included nineteen dollars, ninety-five cents for the rifle and the scope, and one dollar, fifty cents for postage and handling.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ032-0045.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ032-0045.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ032-0045.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ032-0045.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ032-0045.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ032-0045.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ032-0045.wav"
    }
  },
  {
    "Name": "LJ047-0093",
    "TestID": "ljspeech_mos_LJ047-0093",
    "Text": "Oswald was arrested and jailed by the New Orleans Police Department for disturbing the peace, in connection with a street fight which broke out when he was accosted",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ047-0093.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ047-0093.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ047-0093.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ047-0093.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ047-0093.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ047-0093.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ047-0093.wav"
    }
  },
  {
    "Name": "LJ021-0115",
    "TestID": "ljspeech_mos_LJ021-0115",
    "Text": "we have reached into the heart of the problem which is to provide such annual earnings for the lowest paid worker as will meet his minimum needs.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ021-0115.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ021-0115.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ021-0115.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ021-0115.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ021-0115.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ021-0115.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ021-0115.wav"
    }
  },
  {
    "Name": "LJ034-0197",
    "TestID": "ljspeech_mos_LJ034-0197",
    "Text": "who was one of the first witnesses to alert the police to the Depository as the source of the shots, as has been discussed in chapter three.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ034-0197.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ034-0197.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ034-0197.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ034-0197.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ034-0197.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ034-0197.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ034-0197.wav"
    }
  },
  {
    "Name": "LJ017-0189",
    "TestID": "ljspeech_mos_LJ017-0189",
    "Text": "who was presently attacked in the same way as the others, but, but, thanks to the prompt administration of remedies, he recovered.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ017-0189.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ017-0189.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ017-0189.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ017-0189.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ017-0189.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ017-0189.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ017-0189.wav"
    }
  },
  {
    "Name": "LJ003-0011",
    "TestID": "ljspeech_mos_LJ003-0011",
    "Text": "that not more than one bottle of wine or one quart of beer could be issued at one time. No account was taken of the amount of liquors admitted in one day,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ003-0011.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ003-0011.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ003-0011.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ003-0011.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ003-0011.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ003-0011.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ003-0011.wav"
    }
  },
  {
    "Name": "LJ014-0306",
    "TestID": "ljspeech_mos_LJ014-0306",
    "Text": "These had been attributed to political action; some thought that the large purchases in foreign grains, effected at losing prices,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ014-0306.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ014-0306.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ014-0306.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ014-0306.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ014-0306.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ014-0306.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ014-0306.wav"
    }
  },
  {
    "Name": "LJ028-0459",
    "TestID": "ljspeech_mos_LJ028-0459",
    "Text": "Its bricks, measuring about thirteen inches square and three inches in thickness, were burned and stamped with the usual short inscription:",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ028-0459.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ028-0459.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ028-0459.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ028-0459.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ028-0459.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ028-0459.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ028-0459.wav"
    }
  },
  {
    "Name": "LJ019-0201",
    "TestID": "ljspeech_mos_LJ019-0201",
    "Text": "to select a sufficiently spacious piece of ground, and erect a prison which from foundations to roofs should be in conformity with the newest ideas.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ019-0201.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ019-0201.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ019-0201.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ019-0201.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ019-0201.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ019-0201.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ019-0201.wav"
    }
  },
  {
    "Name": "LJ008-0121",
    "TestID": "ljspeech_mos_LJ008-0121",
    "Text": "After the construction and action of the machine had been explained, the doctor asked the governor what kind of men he had commanded at Goree,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ008-0121.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ008-0121.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ008-0121.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ008-0121.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ008-0121.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ008-0121.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ008-0121.wav"
    }
  },
  {
    "Name": "LJ005-0248",
    "TestID": "ljspeech_mos_LJ005-0248",
    "Text": "and stated that in his opinion Newgate, as the common jail of Middlesex, was wholly inadequate to the proper confinement of its prisoners.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ005-0248.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ005-0248.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ005-0248.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ005-0248.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ005-0248.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ005-0248.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ005-0248.wav"
    }
  },
  {
    "Name": "LJ004-0036",
    "TestID": "ljspeech_mos_LJ004-0036",
    "Text": "it was hoped that their rulers would hire accommodation in the county prisons, and that the inferior establishments would in course of time disappear.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ004-0036.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ004-0036.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ004-0036.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ004-0036.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ004-0036.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ004-0036.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ004-0036.wav"
    }
  },
  {
    "Name": "LJ033-0152",
    "TestID": "ljspeech_mos_LJ033-0152",
    "Text": "The portion of the palm which was identified was the heel of the right palm, i.e., the area near the wrist, on the little finger side.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ033-0152.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ033-0152.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ033-0152.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ033-0152.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ033-0152.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ033-0152.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ033-0152.wav"
    }
  },
  {
    "Name": "LJ017-0134",
    "TestID": "ljspeech_mos_LJ017-0134",
    "Text": "Within a few weeks occurred the Leeds poisoning case, in which the murderer undoubtedly was inspired by the facts made public at Palmer's trial.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ017-0134.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ017-0134.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ017-0134.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ017-0134.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ017-0134.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ017-0134.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ017-0134.wav"
    }
  },
  {
    "Name": "LJ012-0188",
    "TestID": "ljspeech_mos_LJ012-0188",
    "Text": "Probert was then admitted as a witness, and the case was fully proved against Thurtell, who was hanged in front of Hertford Jail.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ012-0188.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ012-0188.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ012-0188.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ012-0188.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ012-0188.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ012-0188.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ012-0188.wav"
    }
  },
  {
    "Name": "LJ006-0137",
    "TestID": "ljspeech_mos_LJ006-0137",
    "Text": "They were not obliged to attend chapel, and seldom if ever went; \"prisoners,\" said one of them under examination, \"did not like the trouble of going to chapel.\"",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ006-0137.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ006-0137.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ006-0137.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ006-0137.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ006-0137.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ006-0137.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ006-0137.wav"
    }
  },
  {
    "Name": "LJ006-0082",
    "TestID": "ljspeech_mos_LJ006-0082",
    "Text": "and this particular official took excellent care to select as residents for his own ward those most suitable from his own point of view.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ006-0082.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ006-0082.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ006-0082.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ006-0082.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ006-0082.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ006-0082.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ006-0082.wav"
    }
  },
  {
    "Name": "LJ016-0380",
    "TestID": "ljspeech_mos_LJ016-0380",
    "Text": "with hope to the last. There is always the chance of a flaw in the indictment, of a missing witness, or extenuating circumstances.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ016-0380.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ016-0380.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ016-0380.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ016-0380.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ016-0380.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ016-0380.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ016-0380.wav"
    }
  },
  {
    "Name": "LJ028-0145",
    "TestID": "ljspeech_mos_LJ028-0145",
    "Text": "And here I may not omit to tell the use to which the mould dug out of the great moat was turned, nor the manner wherein the wall was wrought.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ028-0145.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ028-0145.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ028-0145.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ028-0145.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ028-0145.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ028-0145.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ028-0145.wav"
    }
  },
  {
    "Name": "LJ041-0070",
    "TestID": "ljspeech_mos_LJ041-0070",
    "Text": "He did not rise above the rank of private first class, even though he had passed a qualifying examination for the rank of corporal.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ041-0070.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ041-0070.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ041-0070.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ041-0070.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ041-0070.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ041-0070.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ041-0070.wav"
    }
  },
  {
    "Name": "LJ018-0215",
    "TestID": "ljspeech_mos_LJ018-0215",
    "Text": "William Roupell was the eldest but illegitimate son of a wealthy man who subsequently married Roupell's mother, and had further legitimate issue.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ018-0215.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ018-0215.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ018-0215.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ018-0215.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ018-0215.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ018-0215.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ018-0215.wav"
    }
  },
  {
    "Name": "LJ016-0137",
    "TestID": "ljspeech_mos_LJ016-0137",
    "Text": "that numbers of men, \"lifers,\" and others with ten, fourteen, or twenty years to do, can be trusted to work out of doors without bolts and bars",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ016-0137.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ016-0137.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ016-0137.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ016-0137.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ016-0137.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ016-0137.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ016-0137.wav"
    }
  },
  {
    "Name": "LJ035-0082",
    "TestID": "ljspeech_mos_LJ035-0082",
    "Text": "The only interval was the time necessary to ride in the elevator from the second to the sixth floor and walk back to the southeast corner.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ035-0082.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ035-0082.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ035-0082.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ035-0082.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ035-0082.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ035-0082.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ035-0082.wav"
    }
  },
  {
    "Name": "LJ045-0194",
    "TestID": "ljspeech_mos_LJ045-0194",
    "Text": "Anyone who was familiar with that area of Dallas would have known that the motorcade would probably pass the Texas School Book Depository to get from Main Street",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ045-0194.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ045-0194.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ045-0194.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ045-0194.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ045-0194.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ045-0194.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ045-0194.wav"
    }
  },
  {
    "Name": "LJ018-0288",
    "TestID": "ljspeech_mos_LJ018-0288",
    "Text": "After this the other conspirators traveled to obtain genuine bills and master the system of the leading houses at home and abroad.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ018-0288.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ018-0288.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ018-0288.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ018-0288.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ018-0288.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ018-0288.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ018-0288.wav"
    }
  },
  {
    "Name": "LJ025-0129",
    "TestID": "ljspeech_mos_LJ025-0129",
    "Text": "On each lobe of the bi-lobed leaf of Venus flytrap are three delicate filaments which stand out at right angles from the surface of the leaf.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ025-0129.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ025-0129.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ025-0129.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ025-0129.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ025-0129.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ025-0129.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ025-0129.wav"
    }
  },
  {
    "Name": "LJ048-0222",
    "TestID": "ljspeech_mos_LJ048-0222",
    "Text": "in Fort Worth, there occurred a breach of discipline by some members of the Secret Service who were officially traveling with the President.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ048-0222.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ048-0222.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ048-0222.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ048-0222.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ048-0222.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ048-0222.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ048-0222.wav"
    }
  },
  {
    "Name": "LJ008-0098",
    "TestID": "ljspeech_mos_LJ008-0098",
    "Text": "One was the \"yeoman of the halter,\" a Newgate official, the executioner's assistant, whom mister J. T. Smith, who was present at the execution,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ008-0098.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ008-0098.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ008-0098.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ008-0098.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ008-0098.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ008-0098.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ008-0098.wav"
    }
  },
  {
    "Name": "LJ028-0416",
    "TestID": "ljspeech_mos_LJ028-0416",
    "Text": "(if man may speak so confidently of His great impenetrable counsels), for an eternal Testimony of His great work in the confusion of Man's pride,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ028-0416.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ028-0416.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ028-0416.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ028-0416.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ028-0416.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ028-0416.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ028-0416.wav"
    }
  },
  {
    "Name": "LJ006-0044",
    "TestID": "ljspeech_mos_LJ006-0044",
    "Text": "the same callous indifference to the moral well-being of the prisoners, the same want of employment and of all disciplinary control.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ006-0044.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ006-0044.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ006-0044.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ006-0044.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ006-0044.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ006-0044.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ006-0044.wav"
    }
  },
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
  },
  {
    "Name": "LJ040-0097",
    "TestID": "ljspeech_mos_LJ040-0097",
    "Text": "Lee was brought up in this atmosphere of constant money problems, and I am sure it had quite an effect on him, and also Robert, end quote.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ040-0097.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ040-0097.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ040-0097.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ040-0097.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ040-0097.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ040-0097.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ040-0097.wav"
    }
  },
  {
    "Name": "LJ037-0249",
    "TestID": "ljspeech_mos_LJ037-0249",
    "Text": "misess Earlene Roberts, the housekeeper at Oswald's roominghouse and the last person known to have seen him before he reached tenth Street and Patton Avenue,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ037-0249.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ037-0249.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ037-0249.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ037-0249.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ037-0249.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ037-0249.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ037-0249.wav"
    }
  },
  {
    "Name": "LJ016-0248",
    "TestID": "ljspeech_mos_LJ016-0248",
    "Text": "Marwood was proud of his calling, and when questioned as to whether his process was satisfactory, replied that he heard \"no complaints.\"",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ016-0248.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ016-0248.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ016-0248.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ016-0248.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ016-0248.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ016-0248.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ016-0248.wav"
    }
  },
  {
    "Name": "LJ014-0029",
    "TestID": "ljspeech_mos_LJ014-0029",
    "Text": "This was Delarue's watch, fully identified as such, which Hocker told his brother Delarue had given him the morning of the murder.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ014-0029.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ014-0029.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ014-0029.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ014-0029.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ014-0029.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ014-0029.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ014-0029.wav"
    }
  },
  {
    "Name": "LJ002-0299",
    "TestID": "ljspeech_mos_LJ002-0299",
    "Text": "and gave the garnish for the common side at that sum, which is five shillings more than mister Neild says was extorted on the common side.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ002-0299.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ002-0299.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ002-0299.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ002-0299.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ002-0299.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ002-0299.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ002-0299.wav"
    }
  },
  {
    "Name": "LJ048-0143",
    "TestID": "ljspeech_mos_LJ048-0143",
    "Text": "the Secret Service did not at the time of the assassination have any established procedure governing its relationships with them.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ048-0143.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ048-0143.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ048-0143.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ048-0143.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ048-0143.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ048-0143.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ048-0143.wav"
    }
  },
  {
    "Name": "LJ001-0173",
    "TestID": "ljspeech_mos_LJ001-0173",
    "Text": "The essential point to be remembered is that the ornament, whatever it is, whether picture or pattern-work, should form part of the page,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ001-0173.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ001-0173.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ001-0173.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ001-0173.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ001-0173.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ001-0173.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ001-0173.wav"
    }
  },
  {
    "Name": "LJ006-0040",
    "TestID": "ljspeech_mos_LJ006-0040",
    "Text": "The fact was that the years as they passed, nearly twenty in all, had worked but little permanent improvement in this detestable prison.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ006-0040.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ006-0040.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ006-0040.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ006-0040.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ006-0040.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ006-0040.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ006-0040.wav"
    }
  },
  {
    "Name": "LJ045-0228",
    "TestID": "ljspeech_mos_LJ045-0228",
    "Text": "On the other hand, he could have traveled some distance with the money he did have and he did return to his room where he obtained his revolver.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ045-0228.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ045-0228.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ045-0228.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ045-0228.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ045-0228.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ045-0228.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ045-0228.wav"
    }
  },
  {
    "Name": "LJ003-0159",
    "TestID": "ljspeech_mos_LJ003-0159",
    "Text": "To constitute this the aristocratic quarter, unwarrantable demands were made upon the space properly allotted to the female felons,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ003-0159.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ003-0159.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ003-0159.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ003-0159.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ003-0159.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ003-0159.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ003-0159.wav"
    }
  },
  {
    "Name": "LJ032-0206",
    "TestID": "ljspeech_mos_LJ032-0206",
    "Text": "After comparing the rifle in the simulated photograph with the rifle in Exhibit Number one thirty-three A, Shaneyfelt testified, quote,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ032-0206.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ032-0206.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ032-0206.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ032-0206.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ032-0206.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ032-0206.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ032-0206.wav"
    }
  },
  {
    "Name": "LJ003-0088",
    "TestID": "ljspeech_mos_LJ003-0088",
    "Text": "in one, for seven years -- that of a man sentenced to death, for whom great interest had been made, but whom it was not thought right to pardon.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ003-0088.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ003-0088.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ003-0088.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ003-0088.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ003-0088.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ003-0088.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ003-0088.wav"
    }
  },
  {
    "Name": "LJ042-0135",
    "TestID": "ljspeech_mos_LJ042-0135",
    "Text": "that he was not yet twenty years old when he went to the Soviet Union with such high hopes and not quite twenty-three when he returned bitterly disappointed.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ042-0135.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ042-0135.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ042-0135.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ042-0135.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ042-0135.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ042-0135.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ042-0135.wav"
    }
  },
  {
    "Name": "LJ049-0196",
    "TestID": "ljspeech_mos_LJ049-0196",
    "Text": "On the other hand, it is urged that all features of the protection of the President and his family should be committed to an elite and independent corps.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ049-0196.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ049-0196.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ049-0196.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ049-0196.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ049-0196.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ049-0196.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ049-0196.wav"
    }
  },
  {
    "Name": "LJ041-0199",
    "TestID": "ljspeech_mos_LJ041-0199",
    "Text": "is shown most clearly by his employment relations after his return from the Soviet Union. Of course, he made his real problems worse to the extent",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ041-0199.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ041-0199.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ041-0199.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ041-0199.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ041-0199.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ041-0199.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ041-0199.wav"
    }
  },
  {
    "Name": "LJ007-0076",
    "TestID": "ljspeech_mos_LJ007-0076",
    "Text": "The lax discipline maintained in Newgate was still further deteriorated by the presence of two other classes of prisoners who ought never to have been inmates of such a jail.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ007-0076.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ007-0076.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ007-0076.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ007-0076.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ007-0076.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ007-0076.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ007-0076.wav"
    }
  },
  {
    "Name": "LJ039-0096",
    "TestID": "ljspeech_mos_LJ039-0096",
    "Text": "This is a definite advantage to the shooter, the vehicle moving directly away from him and the downgrade of the street, and he being in an elevated position",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ039-0096.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ039-0096.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ039-0096.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ039-0096.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ039-0096.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ039-0096.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ039-0096.wav"
    }
  },
  {
    "Name": "LJ044-0135",
    "TestID": "ljspeech_mos_LJ044-0135",
    "Text": "While he had drawn some attention to himself and had actually appeared on two radio programs, he had been attacked by Cuban exiles and arrested,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ044-0135.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ044-0135.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ044-0135.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ044-0135.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ044-0135.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ044-0135.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ044-0135.wav"
    }
  },
  {
    "Name": "LJ045-0090",
    "TestID": "ljspeech_mos_LJ045-0090",
    "Text": "He was very much interested in autobiographical works of outstanding statesmen of the United States, to whom his wife thought he compared himself.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ045-0090.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ045-0090.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ045-0090.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ045-0090.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ045-0090.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ045-0090.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ045-0090.wav"
    }
  },
  {
    "Name": "LJ038-0047",
    "TestID": "ljspeech_mos_LJ038-0047",
    "Text": "Some of the officers saw Oswald strike McDonald with his fist. Most of them heard a click which they assumed to be a click of the hammer of the revolver.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ038-0047.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ038-0047.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ038-0047.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ038-0047.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ038-0047.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ038-0047.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ038-0047.wav"
    }
  },
  {
    "Name": "LJ006-0149",
    "TestID": "ljspeech_mos_LJ006-0149",
    "Text": "The turnkeys left the prisoners very much to themselves, never entering the wards after locking-up time, at dusk, till unlocking next morning,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ006-0149.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ006-0149.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ006-0149.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ006-0149.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ006-0149.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ006-0149.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ006-0149.wav"
    }
  },
  {
    "Name": "LJ015-0266",
    "TestID": "ljspeech_mos_LJ015-0266",
    "Text": "has probably no parallel in the annals of crime. Saward himself is a striking and in some respects an unique figure in criminal history.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ015-0266.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ015-0266.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ015-0266.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ015-0266.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ015-0266.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ015-0266.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ015-0266.wav"
    }
  },
  {
    "Name": "LJ001-0096",
    "TestID": "ljspeech_mos_LJ001-0096",
    "Text": "have now come into general use and are obviously a great improvement on the ordinary \"modern style\" in use in England, which is in fact the Bodoni type",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ001-0096.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ001-0096.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ001-0096.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ001-0096.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ001-0096.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ001-0096.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ001-0096.wav"
    }
  },
  {
    "Name": "LJ031-0165",
    "TestID": "ljspeech_mos_LJ031-0165",
    "Text": "When security arrangements at the airport were complete, the Secret Service made the necessary arrangements for the Vice President to leave the hospital.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ031-0165.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ031-0165.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ031-0165.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ031-0165.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ031-0165.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ031-0165.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ031-0165.wav"
    }
  },
  {
    "Name": "LJ048-0197",
    "TestID": "ljspeech_mos_LJ048-0197",
    "Text": "I then told the officers that their primary duty was traffic and crowd control and that they should be alert for any persons who might attempt to throw anything",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ048-0197.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ048-0197.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ048-0197.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ048-0197.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ048-0197.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ048-0197.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ048-0197.wav"
    }
  },
  {
    "Name": "LJ030-0014",
    "TestID": "ljspeech_mos_LJ030-0014",
    "Text": "quote, that the crowd was about the same as the one which came to see him before but there were one hundred thousand extra people on hand who came to see misess Kennedy.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ030-0014.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ030-0014.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ030-0014.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ030-0014.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ030-0014.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ030-0014.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ030-0014.wav"
    }
  },
  {
    "Name": "LJ034-0072",
    "TestID": "ljspeech_mos_LJ034-0072",
    "Text": "The employees raced the elevators to the first floor. Givens saw Oswald standing at the gate on the fifth floor as the elevator went by.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ034-0072.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ034-0072.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ034-0072.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ034-0072.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ034-0072.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ034-0072.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ034-0072.wav"
    }
  },
  {
    "Name": "LJ029-0197",
    "TestID": "ljspeech_mos_LJ029-0197",
    "Text": "During November the Dallas papers reported frequently on the plans for protecting the President, stressing the thoroughness of the preparations.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ029-0197.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ029-0197.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ029-0197.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ029-0197.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ029-0197.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ029-0197.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ029-0197.wav"
    }
  },
  {
    "Name": "LJ030-0021",
    "TestID": "ljspeech_mos_LJ030-0021",
    "Text": "all one had to do was get a high building someday with a telescopic rifle, and there was nothing anybody could do to defend against such an attempt.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ030-0021.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ030-0021.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ030-0021.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ030-0021.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ030-0021.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ030-0021.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ030-0021.wav"
    }
  },
  {
    "Name": "LJ007-0090",
    "TestID": "ljspeech_mos_LJ007-0090",
    "Text": "Not only did their presence tend greatly to interfere with the discipline of the prison, but their condition was deplorable in the extreme.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ007-0090.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ007-0090.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ007-0090.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ007-0090.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ007-0090.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ007-0090.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ007-0090.wav"
    }
  },
  {
    "Name": "LJ037-0001",
    "TestID": "ljspeech_mos_LJ037-0001",
    "Text": "Report of the President's Commission on the Assassination of President Kennedy. The Warren Commission Report. By The President's Commission on the Assassination of President Kennedy.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ037-0001.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ037-0001.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ037-0001.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ037-0001.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ037-0001.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ037-0001.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ037-0001.wav"
    }
  },
  {
    "Name": "LJ039-0059",
    "TestID": "ljspeech_mos_LJ039-0059",
    "Text": "(three) his experience and practice after leaving the Marine Corps, and (four) the accuracy of the weapon and the quality of the ammunition.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ039-0059.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ039-0059.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ039-0059.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ039-0059.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ039-0059.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ039-0059.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ039-0059.wav"
    }
  },
  {
    "Name": "LJ046-0033",
    "TestID": "ljspeech_mos_LJ046-0033",
    "Text": "The adequacy of existing procedures can fairly be assessed only after full consideration of the difficulty of the protective assignment,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ046-0033.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ046-0033.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ046-0033.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ046-0033.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ046-0033.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ046-0033.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ046-0033.wav"
    }
  },
  {
    "Name": "LJ005-0265",
    "TestID": "ljspeech_mos_LJ005-0265",
    "Text": "It was recommended that the dietaries should be submitted and approved like the rules; that convicted prisoners should not receive any food but the jail allowance;",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ005-0265.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ005-0265.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ005-0265.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ005-0265.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ005-0265.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ005-0265.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ005-0265.wav"
    }
  },
  {
    "Name": "LJ030-0125",
    "TestID": "ljspeech_mos_LJ030-0125",
    "Text": "On several occasions when the Vice President's car was slowed down by the throng, Special Agent Youngblood stepped out to hold the crowd back.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ030-0125.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ030-0125.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ030-0125.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ030-0125.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ030-0125.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ030-0125.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ030-0125.wav"
    }
  },
  {
    "Name": "LJ042-0194",
    "TestID": "ljspeech_mos_LJ042-0194",
    "Text": "they should not be confused with slowness, indecision or fear. Only the intellectually fearless could even be remotely attracted to our doctrine,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ042-0194.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ042-0194.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ042-0194.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ042-0194.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ042-0194.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ042-0194.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ042-0194.wav"
    }
  },
  {
    "Name": "LJ029-0114",
    "TestID": "ljspeech_mos_LJ029-0114",
    "Text": "The route chosen from the airport to Main Street was the normal one, except where Harwood Street was selected as the means of access to Main Street",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ029-0114.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ029-0114.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ029-0114.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ029-0114.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ029-0114.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ029-0114.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ029-0114.wav"
    }
  },
  {
    "Name": "LJ048-0289",
    "TestID": "ljspeech_mos_LJ048-0289",
    "Text": "However, there is no evidence that these men failed to take any action in Dallas within their power that would have averted the tragedy.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ048-0289.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ048-0289.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ048-0289.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ048-0289.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ048-0289.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ048-0289.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ048-0289.wav"
    }
  },
  {
    "Name": "LJ043-0188",
    "TestID": "ljspeech_mos_LJ043-0188",
    "Text": "that he was the leader of a fascist organization, and when I said that even though all of that might be true, just the same he had no right to take his life,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ043-0188.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ043-0188.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ043-0188.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ043-0188.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ043-0188.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ043-0188.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ043-0188.wav"
    }
  },
  {
    "Name": "LJ033-0056",
    "TestID": "ljspeech_mos_LJ033-0056",
    "Text": "While the rifle may have already been disassembled when Oswald arrived home on Thursday, he had ample time that evening to disassemble the rifle",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ033-0056.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ033-0056.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ033-0056.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ033-0056.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ033-0056.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ033-0056.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ033-0056.wav"
    }
  },
  {
    "Name": "LJ019-0241",
    "TestID": "ljspeech_mos_LJ019-0241",
    "Text": "But in the interval very comprehensive and, I think it must be admitted, salutary changes were successively introduced into the management of prisons.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ019-0241.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ019-0241.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ019-0241.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ019-0241.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ019-0241.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ019-0241.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ019-0241.wav"
    }
  },
  {
    "Name": "LJ001-0015",
    "TestID": "ljspeech_mos_LJ001-0015",
    "Text": "the forms of printed letters should be beautiful, and that their arrangement on the page should be reasonable and a help to the shapeliness of the letters themselves.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ001-0015.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ001-0015.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ001-0015.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ001-0015.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ001-0015.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ001-0015.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ001-0015.wav"
    }
  },
  {
    "Name": "LJ045-0178",
    "TestID": "ljspeech_mos_LJ045-0178",
    "Text": "he left his wedding ring in a cup on the dresser in his room. He also left one hundred seventy dollars in a wallet in one of the dresser drawers.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ045-0178.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ045-0178.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ045-0178.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ045-0178.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ045-0178.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ045-0178.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ045-0178.wav"
    }
  },
  {
    "Name": "LJ037-0208",
    "TestID": "ljspeech_mos_LJ037-0208",
    "Text": "nineteen dollars, ninety-five cents, plus one dollar, twenty-seven cents shipping charge, had been collected from the consignee, Hidell.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ037-0208.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ037-0208.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ037-0208.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ037-0208.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ037-0208.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ037-0208.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ037-0208.wav"
    }
  },
  {
    "Name": "LJ040-0018",
    "TestID": "ljspeech_mos_LJ040-0018",
    "Text": "the Commission is not able to reach any definite conclusions as to whether or not he was, quote, sane, unquote, under prevailing legal standards.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ040-0018.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ040-0018.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ040-0018.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ040-0018.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ040-0018.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ040-0018.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ040-0018.wav"
    }
  },
  {
    "Name": "LJ005-0253",
    "TestID": "ljspeech_mos_LJ005-0253",
    "Text": "\"to inquire into and report upon the several jails and houses of correction in the counties, cities, and corporate towns within England and Wales",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ005-0253.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ005-0253.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ005-0253.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ005-0253.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ005-0253.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ005-0253.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ005-0253.wav"
    }
  },
  {
    "Name": "LJ006-0043",
    "TestID": "ljspeech_mos_LJ006-0043",
    "Text": "The disgraceful overcrowding had been partially ended, but the same evils of indiscriminate association were still present; there was the old neglect of decency,",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ006-0043.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ006-0043.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ006-0043.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ006-0043.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ006-0043.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ006-0043.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ006-0043.wav"
    }
  },
  {
    "Name": "LJ008-0182",
    "TestID": "ljspeech_mos_LJ008-0182",
    "Text": "A tremendous crowd assembled when Bellingham was executed in eighteen twelve for the murder of Spencer Percival, at that time prime minister;",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ008-0182.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ008-0182.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ008-0182.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ008-0182.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ008-0182.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ008-0182.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ008-0182.wav"
    }
  },
  {
    "Name": "LJ019-0042",
    "TestID": "ljspeech_mos_LJ019-0042",
    "Text": "These were either satisfied with a makeshift, and modified existing buildings, without close regard to their suitability, or for a long time did nothing at all.",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ019-0042.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ019-0042.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ019-0042.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ019-0042.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ019-0042.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ019-0042.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ019-0042.wav"
    }
  },
  {
    "Name": "LJ032-0012",
    "TestID": "ljspeech_mos_LJ032-0012",
    "Text": "the resistance to arrest and the attempted shooting of another police officer by the man (Lee Harvey Oswald) subsequently accused of assassinating President Kennedy",
    "Files": {
      "LJSpeech_GT": "audios/LJSpeech/LJSpeech_GT/LJ032-0012.wav",
      "LJSpeech_HiFiGAN": "audios/LJSpeech/LJSpeech_HiFiGAN/LJ032-0012.wav",
      "LJSpeech_AE": "audios/LJSpeech/LJSpeech_AE/LJ032-0012.wav",
      "LJSpeech_FastSpeech2": "audios/LJSpeech/LJSpeech_FastSpeech2/LJ032-0012.wav",
      "LJSpeech_Grad_ODE_100_TEMP13": "audios/LJSpeech/LJSpeech_Grad_ODE_100_TEMP13/LJ032-0012.wav",
      "LJSpeech_VITS": "audios/LJSpeech/LJSpeech_VITS/LJ032-0012.wav",
      "LJSpeech_Diff_SDE_100_TEMP09": "audios/LJSpeech/LJSpeech_Diff_SDE_100_TEMP09/LJ032-0012.wav"
    }
  }
]
}
