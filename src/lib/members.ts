import type { HibiscusCupStreamer } from "./types/HibiscusCupStreamer.d"
import type { HibiscusCupSponsor } from "./types/HibiscusCupSponsor.d"

/**
 * メイン配信チャンネル
 */
export const HIBISCUS_CUP_MAIN_STREAM_TWITCH_ID = '277818090';

/**
 * 運営
 */
export const HIBISCUS_CUP_SPONSORS: HibiscusCupSponsor[] = [
    { role: '主催', name: 'りえぺこ', twitch: 'riepeko', twitch_id: '277818090', twitter: 'Riepeko_yolo' },
    { role: '企画', name: 'だいん', twitch: '', twitch_id: '', twitter: 'DAiN87006586' }
]

export const HIBISCUS_CUP_STREAMERS: HibiscusCupStreamer[] = [
    { team: '本配信', name: 'りえぺこ', twitch: 'riepeko', twitch_id: '277818090', twitter: 'Riepeko_yolo', archive_ids: [2113280746], digest_ids: [2115205937], clip_ids: [
        "ResoluteTolerantAsparagusSwiftRage-VEiS93wiUTFMyO8T"
    ] },

    { team: 'A', name: 'DEIcecreeeam', twitch: 'deicecreeeam', twitch_id: '234653657', twitter: 'deicecreeeam', archive_ids: [2113281611], digest_ids: [], clip_ids: [
        "TangibleCourteousScorpionKeyboardCat-CPW2vN8RAY1_cS0V",
        "WimpyEnergeticTapirDatSheffy-wLEbWCN9gHD3iIve",
        "DifferentScaryStinkbugKAPOW-TRG9hW_QwJVg4_E4",
        "SnappyMoistPepperoniHotPokket-P8xdgYDHuN9kxRE0",
        "AlluringManlyLobsterPupper-EnBMp9UxeqANRA_r",
        "HyperAverageIcecreamBudBlast-B5leWeeHbnMXEgIc",
        "ElatedGlutenFreeJamTheThing-3MbncHRpDOOEOY-1",
        "ProtectiveNimbleLampNerfBlueBlaster--X4EqWMm8S193-1G",
        "DrabAntsyWalletEagleEye-0cJ8aU41mojzUWw1",
        "DependableProtectiveButterflyTheThing-Nmo8vnDSWN6KTThQ",
        "HyperResourcefulRutabagaOptimizePrime-xCU5-wCKF3Wb5p7R",
        "SpikyGoldenPepperKreygasm-jVrOginQFaPY5rGW",
        "SeductiveMushyTardigradeBigBrother-er2IixirQYME9jgm",
        "ProtectiveOpenJuiceNotATK-bbu2GqQJxm3c-vYQ",
        "TardyLongLadiesGingerPower-pQqf_0A-xkyBN3sk",
        "RudeAbnegateWallabyWOOP-O-cA5l1-hzf8TaJ9",
        "HonestSpineyDragonfruitVoteNay-FAUcDHC-GAisrkJp",
        "HandsomeEnchantingWasabiRickroll-QlYIltZhp2l9eWTK",
        "UgliestPeacefulMelonHeyGirl-V2uxPFXVbKFow4xc",
        "AmazingAliveChoughDxAbomb-tSvmybubaxMWXZgY",
        "UglyMuddyKiwiPJSugar--6K3NX4vy3NCc7Nq",
        "ObeseWrongHorseHumbleLife-deqihuUggh1_OxWo"
    ] },
    { team: 'A', name: '佐藤らむね', twitch: '310ramune', twitch_id: '732964132', twitter: '310ramune', archive_ids: [2113275144], digest_ids: [], clip_ids: [
        "FunnyAnimatedGoshawkDoubleRainbow-elEMEE2BCghzVcj1",
        "HedonisticFrozenYamAMPEnergy-kW273TB4sVsZKell",
        "SuccessfulShortMacaroniPoooound-iIu6Wqdr0FhSrSP5",
        "ShyShortBadgerEleGiggle-rN79qSkYo_fEt_MK",
        "PlayfulPatientClintmullinsMingLee-Wxh6OyBFdF8CaOSH",
        "HardSpinelessTaroBCouch-94_nBXvs9UIMJgQ5",
        "TemperedScaryLouseEagleEye-fC2a3tSI6s7Irs7s",
        "ManlySilkyJellyfishCoolStoryBob-MxI-gYT5NFCvJjvI",
        "ArbitraryKindPuffinBlargNaut-fKKS5YFq4YadIj9t",
        "InexpensiveGoldenBarracudaHoneyBadger-qONhCbFCpLGk_8Vr",
        "FurryTriumphantPresidentWholeWheat-SYrYaBJo6a4jidgH",
        "AbstemiousPiercingShrewHassaanChop-5ow1S4D1v5OS6nEn",
        "ProductiveDignifiedMangoLeeroyJenkins-K-1UX08glbsTibXd",
        "TastyIgnorantFiddleheadsNotLikeThis-1hTMddipgx0IjPhQ",
        "CredulousAgitatedWrenTheRinger-ipcguckS8ibikEbg",
        "ZealousLazyGorillaSoonerLater-qfBbneMm_ED75-Zv",
        "UnsightlyBloodyLarkResidentSleeper-j-ul4zFU2OzFcJ-s",
        "FrailRamshacklePhonePRChase-jgoY-tMXMupgvkmx",
        "EsteemedBovineHareImGlitch--ugaeIAjYdFJPslm",
        "UgliestCrazyAyeayeDeIlluminati-8alM8H_CZTpk85X4",
        "HeadstrongHelplessPuffinCclamChamp-8KYILAlXA1RMs5uI",
        "OriginalGracefulGnatTheThing-3wBiLHe71bdPVCkG",
        "AdorableMoralHareCopyThis-J6REiralNS1XOiNh",
        "VictoriousAdorableDolphinRedCoat-nU-kwVd-V2pfJV7x",
        "MiniaturePowerfulKaleBleedPurple-uy7SDR-Cz5kOtzb_",
        "CrackyHelplessKeyboardAMPEnergy-yKcBVNNILlhyYHwu",
        "SmilingTastyGaurItsBoshyTime-9Y5I5sZIGUU4qT05",
        "TemperedOddPoxPicoMause-PazZzK8jYH5Qqtiz",
        "TriumphantKitschyTomatoItsBoshyTime-vuEgR2ss5IwLOf9H",
        "CautiousPopularWalrusKappaWealth-YpAtuOxQixpZbTcw",
        "ExpensiveArbitraryCoyoteChefFrank-fouW9SgAb2WGhbBl",
        "FastEmpathicCheesecakeDatSheffy-BLaCxU7x3k28zeAr",
        "FilthyDistinctVultureFunRun-3_wcHC4IVmivd24d",
        "BoxyBraveDogPJSugar-CCWTcIN0b1Cjmato",
        "ManlyAggressiveBottleCeilingCat-c7OA6a-HGLnQY0e5",
        "FuriousObeseBatPMSTwin-0FN1kErp5XxKVA59",
        "FamousTrustworthyCakeBCouch-RwPjp0Z_5MEZult8",
        "SpicySpeedySproutDogFace-5Z-KDPTwzV7AsLpx",
        "PopularOilyCrowFailFish-yeY5mo_xhRHYHuSC",
        "GiftedPlumpEggDxCat-KZcYnwonafdb7L8u",
        "DirtyCleanCatLeeroyJenkins-Db2Oyx-0FN1np49y",
        "TenaciousModernCaribouKevinTurtle-Osp_u4rAUZAxtmKj",
        "GleamingSmoggyNoodleKappaClaus-s4u8R2hVpVwlO7ku",
        "FrailLazyTermiteNerfRedBlaster-jVhdXw_aFNsC3Hmu",
        "ArtsyPleasantWallabyMrDestructoid-OI4xcoexnYkaOAac",
        "RelievedTastyPizzaDatBoi-MVGvbwJ6O1Ui36_X",
        "EagerFunnySalmonBloodTrail-kOmJHHBXf3ZlW1gR",
        "ElegantPlumpCrocodileTwitchRaid-z07i8J8Vj3ijQ71a",
        "AdventurousDarlingRamenTheTarFu-4_DhxNLqIEWmC4Uc",
        "SpookyBeautifulBubbleteaDansGame-DR5xijqH7-viijKN",
        "SilkyCloudyWebHumbleLife-HJ3Mo5j_9lqVqoK8",
        "PoisedPlayfulChickenMVGame-6iKToaBx1JTCpdV8",
        "PreciousDarlingChowderTTours-aRDrAAecqjLYWiSp",
        "AmazonianUninterestedCoyoteHoneyBadger-trGb_F0x0L3zuJgg",
        "StylishSpikyAxeVoteNay-sZlsAh6OEDdWZPwZ",
        "LivelyTenaciousConsoleTebowing-2xMLXGn_VLw2LFxf",
        "JazzyFastDotterelJKanStyle-EhtyUuPMMQiAqjoC",
        "RoundSleepyDaikonBibleThump-cMD1-6ISvA93Vr8j",
        "IncredulousTiredSpaghettiKippa-xdw2o8_x1tLXg-Om",
        "SmilingTallUdonKippa-974R9vPrRHgl0JAt",
        "ArborealHealthyRaisinCeilingCat-De-NktpzxnIWD4b-",
        "DreamyAbstemiousGarbageNononoCat-yZ3XLui32kiq9B_d",
        "ProductiveSlipperyStrawberryGOWSkull-qEDEsH9VZLNhXDCL",
        "RockyMotionlessStrawberryDansGame-xXN6MAJg7hQGMcy6",
        "PrettiestEntertainingChamoisStrawBeary-VIN5OJ5-OkXAKB_c",
        "MildTrustworthyAsteriskArgieB8-UFS_MuwD82l6u89N",
        "ShyCorrectMuleCoolStoryBob-aY2QKem2g-8qvyug",
        "DrabAverageScallionRuleFive-Hs0X688nxU6srRV2",
        "JollyLightSrirachaImGlitch-FFob8CNKZX4MNF5m",
        "AssiduousJazzySmoothiePogChamp-qZf2M2JT2HqEVVzN",
        "TrappedSarcasticCiderEagleEye-RWyluCSDtFiAKSh8",
        "SpinelessAmericanAnteaterKevinTurtle-QEa7hVpkflwH2mhp",
        "VivaciousAdventurousSmoothieBatChest-SWKzyPga9YQK9QXI",
        "EntertainingSincereKoupreyBlargNaut-s02HLdvDLaKQzf7v",
        "BlitheAcceptableTortoiseNotATK-nmHMHCH1FijOY4gN",
        "VibrantRudeEndiveKappaPride-jihQ6rBRVmJ-IgGV",
        "AcceptableKawaiiBearUWot-2u-EoMMni1paIyfi",
        "ColorfulUnsightlyEmuKappaWealth-tWzF33wpbVnTEal7",
        "WanderingDependableFloofMikeHogu-8d4Zkj-6VhUGQvdK",
        "SpinelessNaiveBearMau5-4pHmz27cY1xAlzIA",
        "NimbleEvilGullNononoCat-rla8Qn02izNzrgg2",
        "TemperedSmokyNuggetsBrokeBack-3sf8BZVoS39KZmSb",
        "ArbitrarySavageLasagnaPeteZaroll-9vUAfIfZkmJSTa43"
    ] },
    { team: 'A', name: 'ちーちゃんん', twitch: 'chi_chaan', twitch_id: '644642707', twitter: 'chi_chaan_tw', archive_ids: [], digest_ids: [2117188489, 2117190243], clip_ids: [] },

    { team: 'B', name: 'あんぱん', twitch: 'ampm_m', twitch_id: '648357191', twitter: '_ampm_mm', archive_ids: [2113276873], digest_ids: [], clip_ids: [] },
    { team: 'B', name: '御握利もぐ', twitch: 'mogu_vtuber', twitch_id: '776978805', twitter: 'Onigiri_MoguV', archive_ids: [2113282371], digest_ids: [], clip_ids: [
        "PatientAthleticMonkeyGrammarKing-2HzLdgaZcrUwGgLt",
        "SparklingFaithfulYakinikuDerp-pR4sq09G3BAs1mnH",
        "BillowingFunDootMikeHogu-HbF8kn8Snb3dxM6P"
    ] },
    { team: 'B', name: 'るぴぃ', twitch: 'iamrupi', twitch_id: '728189924', twitter: 'iamrupii', archive_ids: [2113279683], digest_ids: [], clip_ids: [
        "TardyBlitheCougarKappa-7zDto9gaP2bGiwsM",
        "UglyFurtiveGazelleStoneLightning-WeNyPx3O12o04hvn",
        "ExquisiteUgliestChickenTBTacoLeft-HpHI-qK_ElbXW-U_"
    ] },

    { team: 'C', name: 'ギルテックス', twitch: 'gilltex', twitch_id: '255849926', twitter: 'GillTeX_Twitch', archive_ids: [2113278662], digest_ids: [], clip_ids: [
        "GiantTenuousCiderNerfBlueBlaster-CIWCYDdMc98kFb4X",
        "MoldyResourcefulYamAMPEnergyCherry-UAi7TqMSo0t6E9E1",
        "DifficultBreakableToothCoolStoryBob-oK786vnQfvgb8M9w",
        "BitterCrispyDurianGingerPower-olsgV-7SYbVX570d",
        "ElatedNimbleCattlePicoMause-C-DWobHLlIPliA62",
        "BlazingHelpfulGuanacoOpieOP-V9PtWjOzqnD7NQrs",
        "RoughEnthusiasticDiscLitty-HBrUe_0F_moalf9R",
        "SoftHelpfulWeaselUncleNox-OMsnLc7q8FIgYoGE",
        "KnottyDiligentMochaM4xHeh-DYPn0GmGhzM1APRY",
        "CrepuscularWiseTurnipChefFrank-_CJ6M-fBK14UvJ5H",
        "BlightedTransparentTireTwitchRPG-hndDyWzlFEwtdu6e"
    ] },
    { team: 'C', name: 'ゲームする女', twitch: 'sumi_oy', twitch_id: '782185458', twitter: 'game_onna', archive_ids: [2113282793], digest_ids: [], clip_ids: [
        "SarcasticDepressedLyrebirdRlyTho-ZdmO23AH-Qx3amao",
        "CloudyInquisitiveGoblinPJSalt-eXD8dl1rjOoEYyu-"
    ] },
    { team: 'C', name: 'みやまるだよ', twitch: 'miyamarumaru', twitch_id: '216686393', twitter: 'Toricha___n', archive_ids: [2113281494], digest_ids: [], clip_ids: [
        "ManlyBrainyDillDoggo-XrlwDJafXuFzfjzS",
        "DeafFaithfulFlamingoPermaSmug-CN3MQhUBDwKHIpLC",
        "SucculentAuspiciousAdminPanicVis-kHxOj6Lf6HLplxlV",
        "UnsightlyCogentShrewDoubleRainbow-25dEa1jXLoWEKXFG",
        "FunnyDreamyPterodactylMrDestructoid-a_WUNEzDvT_KNkog",
        "BigEncouragingStarHoneyBadger-Qlv_rs_HgnVQNM5C"
    ] },

    { team: 'D', name: 'せかめん', twitch: 'sekamenz', twitch_id: '927242788', twitter: 'sekamen_games', archive_ids: [2113281713], digest_ids: [2114996424], clip_ids: [
        "AgileBenevolentWebHotPokket-6fhZqcmcNJa8oO48",
        "PerfectAlivePineappleDatBoi-fmech4lncKb5fnPl"
    ] },
    { team: 'D', name: 'おひつじめぇ', twitch: 'ohitsu_zi', twitch_id: '449244936', twitter: 'ohi_mee', archive_ids: [2113281343, 2113319923, 2113349160], digest_ids: [], clip_ids: [
        // 2113281343に紐づくクリップ
        "FragileGrotesqueGorillaJonCarnage-KlK5jBKk0BK0sMYH",
        "IncredulousHonorableTeaKAPOW-wQlMWMihOmkrDJ42",
        "RenownedGeniusWebAMPTropPunch-JEwHxIvJb0-xMLUO",
        "TardyHealthyButterNinjaGrumpy-at-NKg1WRhTamt6G",
        "WildBoxyReubenCmonBruh-W_ZSUpdDI4zLfHlE",
        "SparklyDistinctBaguetteYouDontSay-lt1pa6-W_7_1f35L",
        "AdorableFurryMartenItsBoshyTime-5uwEt-D-DxIJ5mNF",
        "ClearBombasticWrenchOSkomodo-BZCl6OPd999thaeB",
        "LuckySmokyLarkKAPOW-sgkahuk5CfwdrLiN",
        "ShortBelovedBatBatChest-1ftaB_XsHoOdDUcd",
        "BadCuriousTriangleHassaanChop-osnaICR7q1q91a6m",
        "ImportantInnocentEelChocolateRain-nokapu9vhksL8-sG",
        "NiceFurryCourgetteANELE-VxQu1pyTekUTGTN6",
        "HomelyAthleticBananaWholeWheat-572jDNksQdHdLOQA",
        "BrainyUnsightlyBobaPastaThat-BPTz0b13XsANF1xY",
        // 2113319923に紐づくクリップ
        "RelievedCooperativePandaAllenHuhu--K1YwoOlxsjfqx0N",
        "CrazyAntediluvianPrariedogStinkyCheese-Wljy-TcNYRMz4ve2",
        "PoorLongDogeTTours-qh2lICOSg0FPUlGM",
        "SteamyPoorRuffAMPEnergy-D4JEdmtm2i-9MGgx",
        "PoorSmallCobraCeilingCat-DU8mlsM0Rmch6aGw",
        "KawaiiInspiringBeefCoolStoryBro-4c4pJTC8_9ZW0WGf",
        "CogentJazzyBibimbapPraiseIt-ykqA2lRIxBuQA_tE",
        // 2113349160に紐づくクリップ
        "AlluringCheerfulMangetoutKevinTurtle-MQhnfgHWaMfGCysi",
        "RelievedSassyClintmullinsMikeHogu-WOcKpQSSfK0T_y48",
        "ClearObservantKoalaMingLee-geKg74QmC3w8wk9l",
        "ViscousSucculentStorkCeilingCat-dbmDuGR-6Xt2sluo",
        "BlightedVastFoxVoteYea-V2lh-ym9YP9xdcQ_",
        "VivaciousBreakableLadiesSmoocherZ-J7miwgT9Vcir1CPD",
        "BadTardyIcecreamNerfRedBlaster-CK76Vvfj0bfcY043",
        "PunchyCharmingBaconPupper-qN-fkfOURxFB8dXv",
        "ExquisiteMoldyKathyFunRun-WXm61KxzMTsxirmq",
        "CrispyMoistBeaverUnSane-ksQHK3GylCGlQJBG",
        "DirtyAggressiveDillUWot-Refzgh8vrSx9mkVv"

    ] },
    { team: 'D', name: '桃井メイ', twitch: 'momoimei', twitch_id: '729153714', twitter: 'momoimei', archive_ids: [2113281707], digest_ids: [], clip_ids: [
        "ElegantMildConsolePipeHype-H6ohYPBP6kakc8UG"
    ] },

    { team: 'E', name: '蒼音カノン', twitch: 'aone_kanon', twitch_id: '682441785', twitter: 'aone_kanon', archive_ids: [2113279886], digest_ids: [], clip_ids: [
        "PricklyAnimatedTigerItsBoshyTime-mXU8KOrq3L-tEKY6",
        "GentleSparklingUdonHoneyBadger-yin7hBsWZXU45SEC",
        "GloriousArbitraryBillPanicBasket-m3Hd9CVxJ3MTk_qr",
        "SmallArborealPoxBibleThump-yQu7hvV7Kvnf3-uf",
        "GoldenTiredHamburgerPlanking-f5ROHsDSksV4y7SH",
        "HomelyFuriousWrenFrankerZ-tKGqKk-daI52mmCs",
        "GloriousCredulousCrabMikeHogu-f74rv9OTu4IoIYrd",
        "ThankfulRelentlessSparrowMingLee-A2iC74xHYMAZwKwL",
        "HeartlessAnnoyingPorcupineOSfrog-2MfbHLMBJYwg74sv",
        "SquareExquisiteReubenSoonerLater-ghmbf8F4WZgcivdG",
        "TacitElatedScorpionOneHand-yV1MItrwbVpEOZ5F",
        "ConcernedSingleGrasshopperTTours-USqUKtRtJa11_wMu"
    ] },
    { team: 'E', name: 'あぷべり', twitch: 'appleberry_xx', twitch_id: '617471728', twitter: 'snoopy_gamble', archive_ids: [2113269378], digest_ids: [], clip_ids: [
        "HotVastWoodcockPeteZaroll-vg5rcOzI8VvYqVtT",
        "DirtyPlacidDovePlanking-A9Hv0sBvG2DzYuI9",
        "ResourcefulSpookyBubbleteaThisIsSparta-Sv3o4DShWRjUkdDj",
        "FineDaintyWalrusCopyThis-tnVuvKjsf8RzkFR9",
        "EagerBeautifulTarsierKAPOW-AfTzj34uHxGX2AoH",
        "CrackyElegantDragonfruitNotLikeThis-BHr6zo7BeUZoxxLM"
    ] },
    { team: 'E', name: 'もりんちゅ', twitch: 'morinchuuu', twitch_id: '439505716', twitter: 'morinomorinchu', archive_ids: [2113272539], digest_ids: [], clip_ids: [
        "FrozenPleasantPistachioRlyTho-HnOBVZLR9ozTUqjc"
    ] },

    { team: 'F', name: '和花葉ちる', twitch: 'chilmelphary', twitch_id: '179246347', twitter: 'Chil_Twitch', archive_ids: [2113281103], digest_ids: [], clip_ids: [
        "PunchyPlumpBaboonAliens-ktO4eYylT4NK-luB",
        "AlluringTriumphantReindeerUncleNox-xEzhGcT3UKkZfAFp",
        "HardIncredulousPicklesPartyTime-ZHFPk4k7wfh5tb0n",
        "AgitatedRoughFungusPeteZarollTie-MYEZEFs4EMOoHDDY",
        "PuzzledPoorGoatDatSheffy-fYVuYg-0msVjHu51",
        "AstuteFuriousLorisArsonNoSexy-xTm6xP56LeEYQXIt",
        "RoundIronicAmazonDoritosChip-lL5r-FXOqo1picoT",
        "DullProductivePidgeonBudBlast--9fKTlTXI7pilyro",
        "NeighborlyPluckyCobraFeelsBadMan-_UoWwSgT2F08TRPK",
        "HedonisticAbnegateToadHeyGirl-QjXJOdeh_Pm77sy2",
        "CrazyHealthyDotterelBIRB-oIYySTyYwUMXuNmw",
        "BigLachrymoseAubergineTakeNRG-w2kva8l9wIq4UMFZ",
        "SpookyDeliciousDiscAsianGlow-s6y4sPI_nap3-HvL",
        "EasyAbstemiousMagpieKeepo-FwHmGa7K0L7OCwQQ",
        "ArtisticBlazingWalletUncleNox-AkUN7RbPlxufa3Gp",
        "AuspiciousSucculentGoshawkCoolStoryBro-qwbZ2-o38m02Zpgs",
        "BlindingNiceNightingaleANELE-4Oa5lgFzzOG_Qm4O",
        "AltruisticSaltyCurryDeIlluminati-NAe55Y3PhKV4ae-l",
        "YawningRenownedIcecream4Head-LwMmZU14sukcORYe",
        "FairSwissGalagoPeanutButterJellyTime-_lhy2DPsqo730W72",
        "ModernPlumpKumquatKappaPride-GZG9A7PVADsYGxLi",
        "PrettyIgnorantWitchDendiFace-4hJplmOATXpXwSxq",
        "AlluringDignifiedGnatBibleThump-mQRzSXoVBq2SY66V",
        "BelovedBoredBeeTheThing-2xAlKiRB-_9GMSsd",
        "ZanyBlatantLapwingUnSane-zKN035596hU4T22O",
        "YawningEagerZucchiniKevinTurtle-jvVwEdL5X4HPxtgW",
        "BashfulFilthyPterodactylPJSalt-Xq6uQ3xeYMTRanCI",
        "TolerantFantasticRavenHotPokket-mcMJI_f-tExkD5Lh",
        "TangentialArtsyPigeonKeyboardCat-RnIYMRuyWU_jfrn6",
        "PhilanthropicCuriousPineappleCmonBruh-yMqqjzjYOExftb3G",
        "DependableOpenLegHotPokket-WOVdHE3orkO30FZD",
        "HandsomeTrappedPoultryOSsloth-w-Nox0GAe3pL-1Cg",
        "PunchyResoluteCiderPermaSmug-tytk-sNlFS4EYmcY",
        "AttractiveNicePassionfruitAMPEnergyCherry-0jlVZE9rtmTPc9uo",
        "SwissAlivePeafowlStrawBeary-wGv0m8dQhAW5pH2B",
        "GracefulAdorableDumplingsKappa-JfMLBi8ZVxBE6_JG",
        "GenerousEncouragingLocustNotATK-BWVoGQabCfm7Luj2"
    ] },
    { team: 'F', name: '相生あい', twitch: 'aioi_ai', twitch_id: '133061268', twitter: 'AioiAi_v', archive_ids: [2113216050], digest_ids: [], clip_ids: [
        "AlluringHilariousHippoCoolStoryBro-jyB-LJpyOcf5_iDV",
        "AdorableHumbleFriesSwiftRage-DC5kdRaaVfZNnEWw",
        "VivaciousFrigidReubenFutureMan-J4TR_xRzl6UelzFc",
        "SillyKindStingrayThunBeast-RvcWw6dIkbZVeH8j",
        "ImpartialEnergeticDunlinMVGame-fWA7PwqLwwISv8eC",
        "PerfectJoyousAyeayeWutFace-f6XSkNeV_eCkOorD",
        "SneakyTastyVelociraptorVoteNay-7CaJTOSEYYEzy7qh",
        "UgliestBoldStorkPMSTwin-KWxBosH7iJrY3ScP",
        "BadSuaveHawkJKanStyle-GUt3374I2nqHfigq",
        "TenderBlushingKeyboardLitFam-KDP6s1LwXUu-w8r3",
        "TameJoyousSlothOMGScoots-3mb5173EVGt0g68c",
        "DistinctOpenCheeseThisIsSparta-2JszsAPU8WOPjz8L",
        "TallSullenMangetoutPhilosoraptor-zmcVP0NYoeqCncR7",
        "DirtyTenaciousCatBrainSlug-sc1At3XnTXqzKUNu",
        "TardyAgitatedDotterelANELE-azOqmOu_fQu2eKQV",
        "SassyJazzyWombatPMSTwin-6OkcJmE8aiuGE4VD",
        "AnimatedPlayfulEelBudBlast-6eNQusKvvuGQMliS",
        "RepleteClearSquidStoneLightning-Q3ZQE6XZhQcCKzw2",
        "OnerousPatientDeerTwitchRaid-5MkxIGiZRke29Wxl",
        "FaintOptimisticMeatloafTBCheesePull-XovEftxoC2IsWRX5",
        "ChillyShyWaspPoooound-2OwumZnBQwOs7JHJ",
        "InspiringSmokySnakeGingerPower-cjlsUbxR_FSeTI45",
        "ClumsyFantasticGarageNomNom-VxrOyvUYm-0usWkf",
        "NaiveSingleSkirretPoooound-uncvWcsLi5w1wIHw",
        "ShakingOddCrabsAllenHuhu-4KnMSUoQ-yzIEKmj",
        "DeterminedDependableYakKappa-U1vo9nVbJO_gYHi0",
        "InexpensiveFamousDelicataHoneyBadger-f3V9F4jyYUdTvU70",
        "MoistRichMageSeemsGood-tVz-tK6a4ImQynsS",
        "ScrumptiousPhilanthropicClipzOptimizePrime-Dz1J9Y_CN9gHVYly",
        "DirtyTolerantChoughDAESuppy-5VdZEMqh1HoQWqDs",
        "HonestHandsomeGuanacoSmoocherZ-NiJXTAd0nlLkAdlz",
        "GenerousCoweringTildeThisIsSparta-xpvT3Rfz_XmL0MWs",
        "TalentedGiftedPeachOMGScoots-5negrBiB5JbOgVDi",
        "FaithfulAmazonianChoughTBTacoRight-dEXK_8oo51ImLG-x",
        "DependableTentativeHabaneroPRChase-e60PQcHkr9b_1c4K",
        "TriumphantWimpyPanFunRun-a9z1raMmnH1DbfJ1",
        "CheerfulRefinedOwlMcaT-JXNmhBiV8Nxcxsap",
        "ExpensiveDiligentTardigradePicoMause-FhBseZwFHy-XInsl",
        "SplendidSpeedyFerretAsianGlow-RjBlPFkIw5BpcdJ8",
        "DignifiedTangibleDunlinNononoCat-qN9JaIZvzddfoCTA",
        "SmellyAdventurousLatteMoreCowbell-D3NDrWHnl5jLuhhH",
        "DeliciousSleepyCucumberMrDestructoid-ZUMsp-MkGS3sHVYt",
        "DignifiedSassySalmonLitty-ECCNt9gGJ0N4YOqG",
        "SneakyOpenNeanderthalBleedPurple-QqKBvc9fyo3WYAaW",
        "RelatedBetterBaboonRitzMitz-kDomlEEGD4XOX611",
        "DelightfulSmoggyMagePMSTwin-vP3TH9z6RJBhIRzb",
        "InventiveBloodyGoatHeyGirl-Pv2BUV1v5P09lj_Y",
        "PleasantHonestJalapenoBCouch-VEueQPEW2WcL6SRe",
        "SteamyTubularTermitePJSugar-aJdoz28l70-5HNeK",
        "HonestEmpathicKimchiPermaSmug-Yl0OAil35qGYDh0z",
        "TenaciousHilariousArmadilloSwiftRage-HtZJ8UXNeYrqvbx4",
        "BlushingBrightStingrayMikeHogu-pU3LfuutYVuHh85K",
        "ResourcefulCaringRaisinTriHard-FKI6YFnm3F-SbT0A",
        "ArtsyColdFishOMGScoots-m0IDpIaDLliURWrq",
        "ConsiderateJoyousButterflySmoocherZ-dZCHhUgoYdufh_VO",
        "EmpathicFitNeanderthalM4xHeh-zv4r5HAYlp6ikRyN",
        "SmokyVenomousTarsierLeeroyJenkins-zwQPpdgfq-wI843m",
        "TentativeBoredGoatPanicVis-V3bYQhwkEXcTkp4g",
        "FastPowerfulOrangeTBTacoLeft-z3b4gQTQbp0mQr_u"
    ] },
    { team: 'F', name: 'かきゅう', twitch: 'kakyu_ttv', twitch_id: '520092504', twitter: 'xkakyux', archive_ids: [2113277796], digest_ids: [], clip_ids: [
        "HelplessAffluentTrayDogFace-rfZ-mxQK_IdUTE5x"
    ] },
]

/**
 * チーム情報
 */
export const HIBISCUS_CUP_TEAMS = [
    {
        team: '本配信',
        twitter_link: 'https://twitter.com/Riepeko_yolo/status/1768570506708767059',
        description: ''
    },
    {
        team: 'A', 
        twitter_link: 'https://twitter.com/Riepeko_yolo/status/1768570513839026643',
        description:
            `数々のゲームをクリアしてきているカワ癒しならむねちゃんの多方面な知恵と
ちーちゃんの小悪魔な明るさとノリでチーム雰囲気◎間違い無し!
歴代優勝者だいすさんは
きゃわガールズにタジタジにならず
紳士にエスコートして連続優勝なるか！？✨`,
        
},
    {
        team: 'B', 
        twitter_link: 'https://twitter.com/Riepeko_yolo/status/1768570519996321905',
        description:
            `経験知識豊富なタルコフの姉御、あんぱんさん、「あ、まっずい」でお馴染み最近パートナーにもなったもぐちゃん、おもろかわつよ兼ね備えすぎてる癒しの歌声るぴぃちゃん、全員kappa取得経験有のつよつよガールズチーム!
前回も沢山面白い場面を魅せてくれた御三方🫶
ツッコミもボケもいっぱいな漫才空間が生まれそうな笑いが絶えないチームになりそうです!`
    },
    {
        team: 'C', 
        twitter_link: 'https://twitter.com/Riepeko_yolo/status/1768570526577074236',
        description:
            `今期本格的にタルコフを頑張っている、モデルも活動もパワーアップされた注目の仲良しな、きゃわガールズすみちゃん、みやまるちゃんをタルコフ実況解説で初心者さんの救世主、ギルさんが優しくエスコートしてくれるほっこり元気もらえるチームになる事を期待！前回のコナンくんコスに引き続き、なにかサプライズはあるのか！？注目👀`
    },
    {
        team: 'D', 
        twitter_link: 'https://twitter.com/Riepeko_yolo/status/1768570533560594520',
        description:
            `某大人気ゲームやタルコフの大会、イベントでも大活躍!レッドラン奮闘中のせかめんさんとりえぺこのマブ2人、おもしれぇし、かわえぇ完璧な女おひつじめぇと1億貯めた金策の女王めいくん！色んな角度からの経験知識と戦略で力を合わせて立ち向かうチームワーク◎なチームになりそう!✨`
    },
    {
        team: 'E', 
        twitter_link: 'https://twitter.com/Riepeko_yolo/status/1768570540414107768',
        description:
            `2人をぜひ一緒にと運営陣もチームリベンジに気合いが入る紳士な大会救世主カノンさんとkappa取得奮闘中！いつも一生懸命に楽しんでいるアメリカ在住あぷべりさんチームに、今期初の42Lvを目標に頑張っている絵に歌にゲームに多彩な才能溢れるもりんちゅさんを加えてつよつよさと多彩な魅力で大会を盛り上げてくれるチームと期待✨`
    },
    {
        team: 'F', 
        twitter_link: 'https://twitter.com/Riepeko_yolo/status/1768570547540234553',
        description:
            `りえぺこ的1番混ざりたいかもしれない...🤤
            現地調達タルコフに挑戦しロシア語設定でプレイするほど本当にタルコフ愛溢れるつよつよなちるさん、とある持ち物で前回とっても大会を盛り上げてくれたおもろすぎる人妻あいちゃん、新衣装お披露目がもうすぐ！今期kappa目指して頑張っている戦闘大好きかきゅうさん
            戦闘も知識もかわいさ、おもろさ全てつよつよなタルコフ女子会が見られる幸せ空間チーム！✨`
    },
]