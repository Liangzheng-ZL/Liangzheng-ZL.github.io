var TestConfig = {
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
  "MaxTestsPerRun": 10,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": 
[
  {
    "Name": "short edit, 0",
    "TestID": "edit_mos_short_0",
    "Text": "In the modern community there is also a more frequent attendance at large gatherings of people to <b><u>whom one's everyday life</u></b> is unknown; in such places as churches, theaters, ballrooms, hotels, parks, shops, and the like.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00000.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00000.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00000.wav"
    }
  },
  {
    "Name": "mid edit, 0",
    "TestID": "edit_mos_mid_0",
    "Text": "In the modern community there is also a more frequent attendance at large gatherings of people <b><u>to whom one's everyday life is unknown</u></b>; in such places as churches, theaters, ballrooms, hotels, parks, shops, and the like.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00000.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00000.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00000.wav"
    }
  },
  {
    "Name": "long edit, 0",
    "TestID": "edit_mos_long_0",
    "Text": "In the modern community <b><u>there is also a more frequent attendance at large</u></b> gatherings of people to whom one's everyday life is unknown; in such places as churches, theaters, ballrooms, hotels, parks, shops, and the like.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00000.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00000.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00000.wav"
    }
  },
  {
    "Name": "short edit, 1",
    "TestID": "edit_mos_short_1",
    "Text": "To <b><u>live</u></b>, to err, to fall, to triumph, to recreate life out of life!",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00001.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00001.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00001.wav"
    }
  },
  {
    "Name": "mid edit, 1",
    "TestID": "edit_mos_mid_1",
    "Text": "<b><u>To live</u></b>, to err, to fall, to triumph, to recreate life out of life!",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00001.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00001.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00001.wav"
    }
  },
  {
    "Name": "long edit, 1",
    "TestID": "edit_mos_long_1",
    "Text": "To live, to err, to fall, <b><u>to triumph, to recreate life</u></b> out of life!",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00001.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00001.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00001.wav"
    }
  },
  {
    "Name": "short edit, 2",
    "TestID": "edit_mos_short_2",
    "Text": "Recovering his recollection on the instant, instead of sounding an alarm, which might prove fatal <b><u>to himself</u></b>, he remained stationary, an attentive observer of the other's motions.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00002.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00002.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00002.wav"
    }
  },
  {
    "Name": "mid edit, 2",
    "TestID": "edit_mos_mid_2",
    "Text": "Recovering his recollection on <b><u>the instant, instead of</u></b> sounding an alarm, which might prove fatal to himself, he remained stationary, an attentive observer of the other's motions.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00002.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00002.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00002.wav"
    }
  },
  {
    "Name": "long edit, 2",
    "TestID": "edit_mos_long_2",
    "Text": "Recovering his recollection on the <b><u>instant, instead of sounding an alarm, which</u></b> might prove fatal to himself, he remained stationary, an attentive observer of the other's motions.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00002.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00002.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00002.wav"
    }
  },
  {
    "Name": "short edit, 3",
    "TestID": "edit_mos_short_3",
    "Text": "Ruth was glad to hear that Philip had made a push <b><u>into the</u></b> world, and she was sure that his talent and courage would make a way for him. She should pray for his success at any rate, and especially that the Indians, in St. Louis, would not take his scalp.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00003.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00003.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00003.wav"
    }
  },
  {
    "Name": "mid edit, 3",
    "TestID": "edit_mos_mid_3",
    "Text": "Ruth was glad to hear that Philip had made a push into the world, and she was sure that his talent and courage would make a way for him. She should pray for his success at any rate, and especially that the Indians, in St. <b><u>Louis, would not</u></b> take his scalp.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00003.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00003.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00003.wav"
    }
  },
  {
    "Name": "long edit, 3",
    "TestID": "edit_mos_long_3",
    "Text": "Ruth was <b><u>glad to hear that Philip had made a push into</u></b> the world, and she was sure that his talent and courage would make a way for him. She should pray for his success at any rate, and especially that the Indians, in St. Louis, would not take his scalp.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00003.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00003.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00003.wav"
    }
  },
  {
    "Name": "short edit, 4",
    "TestID": "edit_mos_short_4",
    "Text": "Miss Taylor was <b><u>soon starving for</u></b> human companionship, for the lighter touches of life and some of its warmth and laughter.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00004.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00004.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00004.wav"
    }
  },
  {
    "Name": "mid edit, 4",
    "TestID": "edit_mos_mid_4",
    "Text": "Miss Taylor was <b><u>soon starving for human companionship</u></b>, for the lighter touches of life and some of its warmth and laughter.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00004.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00004.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00004.wav"
    }
  },
  {
    "Name": "long edit, 4",
    "TestID": "edit_mos_long_4",
    "Text": "Miss Taylor was soon starving for human companionship, for the lighter <b><u>touches of life and some of its warmth</u></b> and laughter.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00004.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00004.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00004.wav"
    }
  },
  {
    "Name": "short edit, 5",
    "TestID": "edit_mos_short_5",
    "Text": "I wanted nothing more than to see my <b><u>country again</u></b>, my friends, my modest quarters by the Botanical Gardens, my dearly beloved collections!",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00005.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00005.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00005.wav"
    }
  },
  {
    "Name": "mid edit, 5",
    "TestID": "edit_mos_mid_5",
    "Text": "I wanted nothing more than to see my country <b><u>again, my friends, my modest</u></b> quarters by the Botanical Gardens, my dearly beloved collections!",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00005.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00005.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00005.wav"
    }
  },
  {
    "Name": "long edit, 5",
    "TestID": "edit_mos_long_5",
    "Text": "I wanted nothing more than to see my country again, my friends, my modest quarters <b><u>by the Botanical Gardens, my dearly</u></b> beloved collections!",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00005.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00005.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00005.wav"
    }
  },
  {
    "Name": "short edit, 6",
    "TestID": "edit_mos_short_6",
    "Text": "He was going to leave the room--she followed him, and cried, \"But, my Lord, <b><u>how</u></b> shall I see again the unhappy object of my treachery?",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00006.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00006.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00006.wav"
    }
  },
  {
    "Name": "mid edit, 6",
    "TestID": "edit_mos_mid_6",
    "Text": "He was going to leave the room--she followed him, and cried, \"But, my Lord, <b><u>how shall I</u></b> see again the unhappy object of my treachery?",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00006.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00006.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00006.wav"
    }
  },
  {
    "Name": "long edit, 6",
    "TestID": "edit_mos_long_6",
    "Text": "He was going to leave the room--she followed <b><u>him, and cried, \"But, my Lord, how shall I</u></b> see again the unhappy object of my treachery?",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00006.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00006.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00006.wav"
    }
  },
  {
    "Name": "short edit, 7",
    "TestID": "edit_mos_short_7",
    "Text": "My friend did not appear to be depressed by his failure, but shrugged <b><u>his shoulders</u></b> in half humorous resignation.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00007.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00007.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00007.wav"
    }
  },
  {
    "Name": "mid edit, 7",
    "TestID": "edit_mos_mid_7",
    "Text": "My friend did not appear <b><u>to be depressed by his</u></b> failure, but shrugged his shoulders in half humorous resignation.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00007.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00007.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00007.wav"
    }
  },
  {
    "Name": "long edit, 7",
    "TestID": "edit_mos_long_7",
    "Text": "My friend did not appear to be <b><u>depressed by his failure, but shrugged his shoulders in half humorous</u></b> resignation.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00007.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00007.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00007.wav"
    }
  },
  {
    "Name": "short edit, 8",
    "TestID": "edit_mos_short_8",
    "Text": "Guided <b><u>by you</u></b>, how we might stroll towards death, Our only music one another's breath, Through gardens intimate with hollyhocks, Where silent poppies burn between the rocks, By pools where birches bend to confidants Above green waters scummed with lily-plants.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00008.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00008.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00008.wav"
    }
  },
  {
    "Name": "mid edit, 8",
    "TestID": "edit_mos_mid_8",
    "Text": "Guided <b><u>by you, how we might</u></b> stroll towards death, Our only music one another's breath, Through gardens intimate with hollyhocks, Where silent poppies burn between the rocks, By pools where birches bend to confidants Above green waters scummed with lily-plants.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00008.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00008.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00008.wav"
    }
  },
  {
    "Name": "long edit, 8",
    "TestID": "edit_mos_long_8",
    "Text": "Guided by you, how we might stroll towards death, Our only music one another's breath, Through <b><u>gardens intimate with hollyhocks, Where</u></b> silent poppies burn between the rocks, By pools where birches bend to confidants Above green waters scummed with lily-plants.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00008.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00008.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00008.wav"
    }
  },
  {
    "Name": "short edit, 9",
    "TestID": "edit_mos_short_9",
    "Text": "They were afraid to appeal for justice to the laws, lest thereby they should only publish their daughter's disgrace; besides, though well born they were poor, and had not the means of commanding influence and favour; and above all, they knew not the name <b><u>of their injurer</u></b>, or of whom or what to complain but their luckless stars.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00009.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00009.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00009.wav"
    }
  },
  {
    "Name": "mid edit, 9",
    "TestID": "edit_mos_mid_9",
    "Text": "They were afraid to appeal for justice to the laws, lest thereby they should only publish their daughter's disgrace; besides, though well born they were poor, and had not the means of commanding influence and favour; and above all, they knew not the name <b><u>of their injurer, or of</u></b> whom or what to complain but their luckless stars.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00009.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00009.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00009.wav"
    }
  },
  {
    "Name": "long edit, 9",
    "TestID": "edit_mos_long_9",
    "Text": "They were afraid to appeal <b><u>for justice to the laws, lest thereby</u></b> they should only publish their daughter's disgrace; besides, though well born they were poor, and had not the means of commanding influence and favour; and above all, they knew not the name of their injurer, or of whom or what to complain but their luckless stars.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00009.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00009.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00009.wav"
    }
  },
  {
    "Name": "short edit, 10",
    "TestID": "edit_mos_short_10",
    "Text": "Does the Eagle know what is in the pit? Or wilt thou go ask the Mole: Can Wisdom be put in a <b><u>silver rod</u></b>? Or Love in a golden bowl?",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00010.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00010.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00010.wav"
    }
  },
  {
    "Name": "mid edit, 10",
    "TestID": "edit_mos_mid_10",
    "Text": "Does the Eagle know what is in the pit? Or wilt thou go ask the Mole: Can Wisdom be put in a <b><u>silver rod? Or Love</u></b> in a golden bowl?",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00010.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00010.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00010.wav"
    }
  },
  {
    "Name": "long edit, 10",
    "TestID": "edit_mos_long_10",
    "Text": "Does the Eagle know what is in the pit? Or wilt thou go ask <b><u>the Mole: Can Wisdom be</u></b> put in a silver rod? Or Love in a golden bowl?",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00010.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00010.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00010.wav"
    }
  },
  {
    "Name": "short edit, 11",
    "TestID": "edit_mos_short_11",
    "Text": "Montalais agile as a deer, Athenais eager as a young wolf, bounded through the dry grass, and, now and then, some bold Acteon might, by the aid <b><u>of the faint</u></b> light, have perceived their straight and well-formed limbs somewhat displayed beneath the heavy folds of their satin petticoats.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00011.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00011.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00011.wav"
    }
  },
  {
    "Name": "mid edit, 11",
    "TestID": "edit_mos_mid_11",
    "Text": "Montalais agile as a deer, Athenais eager as a young wolf, bounded through the dry grass, and, now and then, some bold Acteon might, <b><u>by the aid of the faint light</u></b>, have perceived their straight and well-formed limbs somewhat displayed beneath the heavy folds of their satin petticoats.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00011.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00011.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00011.wav"
    }
  },
  {
    "Name": "long edit, 11",
    "TestID": "edit_mos_long_11",
    "Text": "Montalais agile as a deer, Athenais eager as a young wolf, bounded through the dry <b><u>grass, and, now and then, some bold</u></b> Acteon might, by the aid of the faint light, have perceived their straight and well-formed limbs somewhat displayed beneath the heavy folds of their satin petticoats.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00011.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00011.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00011.wav"
    }
  },
  {
    "Name": "short edit, 12",
    "TestID": "edit_mos_short_12",
    "Text": "Roerer took down Luther's lectures and this manuscript <b><u>has been preserved</u></b> to the present day, in a copy which contains also additions by Veit Dietrich and by Cruciger, friends of Roerer's, who with him attended Luther's lectures.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00012.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00012.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00012.wav"
    }
  },
  {
    "Name": "mid edit, 12",
    "TestID": "edit_mos_mid_12",
    "Text": "Roerer took down Luther's lectures and this manuscript has been preserved to the present day, in a copy which contains also additions by Veit Dietrich and by Cruciger, friends of Roerer's, <b><u>who with him</u></b> attended Luther's lectures.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00012.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00012.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00012.wav"
    }
  },
  {
    "Name": "long edit, 12",
    "TestID": "edit_mos_long_12",
    "Text": "Roerer took down Luther's lectures and this manuscript has been preserved to the present day, in a copy which contains also additions by Veit Dietrich and by Cruciger, <b><u>friends of Roerer's, who with him</u></b> attended Luther's lectures.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00012.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00012.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00012.wav"
    }
  },
  {
    "Name": "short edit, 13",
    "TestID": "edit_mos_short_13",
    "Text": "Gradually I knew I was mastering him--then <b><u>all was blank</u></b>.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00013.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00013.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00013.wav"
    }
  },
  {
    "Name": "mid edit, 13",
    "TestID": "edit_mos_mid_13",
    "Text": "Gradually I knew I was <b><u>mastering him--then all was blank</u></b>.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00013.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00013.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00013.wav"
    }
  },
  {
    "Name": "long edit, 13",
    "TestID": "edit_mos_long_13",
    "Text": "Gradually I knew I was <b><u>mastering him--then all was</u></b> blank.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00013.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00013.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00013.wav"
    }
  },
  {
    "Name": "short edit, 14",
    "TestID": "edit_mos_short_14",
    "Text": "Then, in their hasty departure, the soldiers disposed of <b><u>everything</u></b> outside of actual necessities in the way of accouterment and camp equipage.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00014.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00014.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00014.wav"
    }
  },
  {
    "Name": "mid edit, 14",
    "TestID": "edit_mos_mid_14",
    "Text": "Then, in their hasty departure, the soldiers disposed of <b><u>everything outside of</u></b> actual necessities in the way of accouterment and camp equipage.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00014.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00014.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00014.wav"
    }
  },
  {
    "Name": "long edit, 14",
    "TestID": "edit_mos_long_14",
    "Text": "Then, in their hasty departure, <b><u>the soldiers disposed of everything outside of</u></b> actual necessities in the way of accouterment and camp equipage.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00014.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00014.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00014.wav"
    }
  },
  {
    "Name": "short edit, 15",
    "TestID": "edit_mos_short_15",
    "Text": "\"My dear Sir,\" I should <b><u>reply</u></b> (or Madam), \"you have come to the right shop.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00015.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00015.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00015.wav"
    }
  },
  {
    "Name": "mid edit, 15",
    "TestID": "edit_mos_mid_15",
    "Text": "\"My dear Sir,\" I should <b><u>reply (or Madam</u></b>), \"you have come to the right shop.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00015.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00015.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00015.wav"
    }
  },
  {
    "Name": "long edit, 15",
    "TestID": "edit_mos_long_15",
    "Text": "\"My dear Sir,\" I should reply (<b><u>or Madam), \"you have come to the right shop.</u></b>",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00015.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00015.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00015.wav"
    }
  },
  {
    "Name": "short edit, 16",
    "TestID": "edit_mos_short_16",
    "Text": "He spoke French perfectly, I have been told, when need was; but delighted <b><u>usually in</u></b> talking the broadest Yorkshire.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00016.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00016.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00016.wav"
    }
  },
  {
    "Name": "mid edit, 16",
    "TestID": "edit_mos_mid_16",
    "Text": "He spoke French perfectly, I have been told, when need was; but delighted <b><u>usually in talking the</u></b> broadest Yorkshire.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00016.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00016.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00016.wav"
    }
  },
  {
    "Name": "long edit, 16",
    "TestID": "edit_mos_long_16",
    "Text": "He spoke French <b><u>perfectly, I have been told, when need</u></b> was; but delighted usually in talking the broadest Yorkshire.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00016.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00016.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00016.wav"
    }
  },
  {
    "Name": "short edit, 17",
    "TestID": "edit_mos_short_17",
    "Text": "You have the white of foaming water, of buildings and clouds, brought out brilliantly from a white ground; and though part of the subject is in deep shadow the eye at <b><u>once</u></b> catches the one black point admitted in front.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00017.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00017.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00017.wav"
    }
  },
  {
    "Name": "mid edit, 17",
    "TestID": "edit_mos_mid_17",
    "Text": "You have the white of foaming water, of buildings and clouds, brought out brilliantly from a white ground; and though part of the subject is in deep shadow the eye at <b><u>once catches</u></b> the one black point admitted in front.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00017.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00017.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00017.wav"
    }
  },
  {
    "Name": "long edit, 17",
    "TestID": "edit_mos_long_17",
    "Text": "You have the white of foaming water, of buildings and clouds, brought out brilliantly from a white ground; and though part of the <b><u>subject is in deep shadow the eye</u></b> at once catches the one black point admitted in front.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00017.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00017.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00017.wav"
    }
  },
  {
    "Name": "short edit, 18",
    "TestID": "edit_mos_short_18",
    "Text": "When all of them, both those who show themselves <b><u>in the sky</u></b>, and those who retire from view, had come into being, the Creator addressed them thus:--'Gods, sons of gods, my works, if I will, are indissoluble.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00018.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00018.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00018.wav"
    }
  },
  {
    "Name": "mid edit, 18",
    "TestID": "edit_mos_mid_18",
    "Text": "When all of them, both those who show themselves <b><u>in the sky, and those who</u></b> retire from view, had come into being, the Creator addressed them thus:--'Gods, sons of gods, my works, if I will, are indissoluble.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00018.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00018.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00018.wav"
    }
  },
  {
    "Name": "long edit, 18",
    "TestID": "edit_mos_long_18",
    "Text": "When all of them, both those who show themselves in the sky, <b><u>and those who retire from view, had</u></b> come into being, the Creator addressed them thus:--'Gods, sons of gods, my works, if I will, are indissoluble.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00018.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00018.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00018.wav"
    }
  },
  {
    "Name": "short edit, 19",
    "TestID": "edit_mos_short_19",
    "Text": "I remained there alone for many hours, but I must <b><u>acknowledge that</u></b> before I left the chambers I had gradually brought myself to look at the matter in another light.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00019.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00019.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00019.wav"
    }
  },
  {
    "Name": "mid edit, 19",
    "TestID": "edit_mos_mid_19",
    "Text": "I remained there alone for many hours, but I must <b><u>acknowledge that before I</u></b> left the chambers I had gradually brought myself to look at the matter in another light.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00019.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00019.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00019.wav"
    }
  },
  {
    "Name": "long edit, 19",
    "TestID": "edit_mos_long_19",
    "Text": "I remained there alone for many <b><u>hours, but I must acknowledge that before I left</u></b> the chambers I had gradually brought myself to look at the matter in another light.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00019.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00019.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00019.wav"
    }
  },
  {
    "Name": "short edit, 20",
    "TestID": "edit_mos_short_20",
    "Text": "In a few moments he heard the cherries dropping smartly into the pail, and he began <b><u>to swing</u></b> his scythe with that long, even stroke that few American boys ever learn.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00020.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00020.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00020.wav"
    }
  },
  {
    "Name": "mid edit, 20",
    "TestID": "edit_mos_mid_20",
    "Text": "In a few moments he heard the cherries dropping smartly into the pail, and he began <b><u>to swing his scythe</u></b> with that long, even stroke that few American boys ever learn.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00020.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00020.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00020.wav"
    }
  },
  {
    "Name": "long edit, 20",
    "TestID": "edit_mos_long_20",
    "Text": "In a few moments he heard <b><u>the cherries dropping smartly into the pail</u></b>, and he began to swing his scythe with that long, even stroke that few American boys ever learn.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00020.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00020.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00020.wav"
    }
  },
  {
    "Name": "short edit, 21",
    "TestID": "edit_mos_short_21",
    "Text": "The instruments, the tools, our guns, are clashing and clanking violently in their collisions with each other; the nails of my boots cling tenaciously to a plate of iron let into <b><u>the timbers</u></b>, and I cannot draw my foot away from the spot.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00021.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00021.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00021.wav"
    }
  },
  {
    "Name": "mid edit, 21",
    "TestID": "edit_mos_mid_21",
    "Text": "The instruments, the tools, our guns, are clashing and clanking violently in their collisions with each other; the nails of my boots cling tenaciously to a plate of iron let into <b><u>the timbers, and I cannot</u></b> draw my foot away from the spot.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00021.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00021.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00021.wav"
    }
  },
  {
    "Name": "long edit, 21",
    "TestID": "edit_mos_long_21",
    "Text": "The <b><u>instruments, the tools, our guns, are clashing</u></b> and clanking violently in their collisions with each other; the nails of my boots cling tenaciously to a plate of iron let into the timbers, and I cannot draw my foot away from the spot.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00021.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00021.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00021.wav"
    }
  },
  {
    "Name": "short edit, 22",
    "TestID": "edit_mos_short_22",
    "Text": "She brings down her bonnet and <b><u>shawl by</u></b> stealth, and before the chaise comes to the door she sends Mary out into the garden with her sister, under pretense of showing her a bird's nest which is not there, trusting to her sister's skill in diverting the child's mind, and amusing her with something else in the garden, until the chaise has gone.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00022.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00022.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00022.wav"
    }
  },
  {
    "Name": "mid edit, 22",
    "TestID": "edit_mos_mid_22",
    "Text": "She brings down her bonnet and <b><u>shawl by stealth</u></b>, and before the chaise comes to the door she sends Mary out into the garden with her sister, under pretense of showing her a bird's nest which is not there, trusting to her sister's skill in diverting the child's mind, and amusing her with something else in the garden, until the chaise has gone.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00022.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00022.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00022.wav"
    }
  },
  {
    "Name": "long edit, 22",
    "TestID": "edit_mos_long_22",
    "Text": "She brings down her bonnet and shawl by stealth, and before the chaise comes to the door she sends Mary out into the garden with her sister, under pretense of showing her a bird's nest which is not there, trusting to her sister's skill in diverting the child's mind, and amusing her <b><u>with something else in the garden, until the chaise has</u></b> gone.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00022.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00022.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00022.wav"
    }
  },
  {
    "Name": "short edit, 23",
    "TestID": "edit_mos_short_23",
    "Text": "She was up and dressed, and this moment coming down, <b><u>and would be very</u></b> happy to see Miss Brandon, if she would step into the drawing-room.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00023.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00023.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00023.wav"
    }
  },
  {
    "Name": "mid edit, 23",
    "TestID": "edit_mos_mid_23",
    "Text": "She was up and dressed, and this moment coming down, <b><u>and would be very happy</u></b> to see Miss Brandon, if she would step into the drawing-room.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00023.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00023.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00023.wav"
    }
  },
  {
    "Name": "long edit, 23",
    "TestID": "edit_mos_long_23",
    "Text": "She was up and <b><u>dressed, and this moment coming down</u></b>, and would be very happy to see Miss Brandon, if she would step into the drawing-room.",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00023.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00023.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00023.wav"
    }
  },
  {
    "Name": "short edit, 24",
    "TestID": "edit_mos_short_24",
    "Text": "\"If the prosecution were withdrawn and the <b><u>case settled</u></b> with the victim of the forged check, then the young man would be allowed his freedom. But under the circumstances I doubt if such an arrangement could be made.\"",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/short/00024.wav",
      "Edit_GT": "audios/Editing/Edit_GT/short/00024.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/short/00024.wav"
    }
  },
  {
    "Name": "mid edit, 24",
    "TestID": "edit_mos_mid_24",
    "Text": "\"If the prosecution were withdrawn <b><u>and the case settled</u></b> with the victim of the forged check, then the young man would be allowed his freedom. But under the circumstances I doubt if such an arrangement could be made.\"",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/mid/00024.wav",
      "Edit_GT": "audios/Editing/Edit_GT/mid/00024.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/mid/00024.wav"
    }
  },
  {
    "Name": "long edit, 24",
    "TestID": "edit_mos_long_24",
    "Text": "\"If the prosecution were withdrawn and the case <b><u>settled with the victim of the forged check</u></b>, then the young man would be allowed his freedom. But under the circumstances I doubt if such an arrangement could be made.\"",
    "Files": {
      "Edit_DiffVoice_SDE_300_Concat": "audios/Editing/Edit_DiffVoice_SDE_300_Concat/long/00024.wav",
      "Edit_GT": "audios/Editing/Edit_GT/long/00024.wav",
      "Edit_RetrieverTTS": "audios/Editing/Edit_RetrieverTTS/long/00024.wav"
    }
  }
]
}
