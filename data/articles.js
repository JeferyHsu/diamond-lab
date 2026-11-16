/* 資料層：新增文章請遵守 AGENTS.md 的 schema；不需更動 HTML。 */
window.BASEBALL_ARTICLES = [
  {
    id: 'baseball-rules', category: '基礎規則', level: '入門', readTime: 6,
    title: '9 局看懂棒球：比賽規則入門',
    description: '從攻守交換、出局數到得分方式，用最短的時間理解一場棒球賽。',
    icon: '⚾', accent: 'mint', tags: ['規則','入門','九局'],
    summary: '棒球由兩隊輪流攻守，進攻方想辦法繞過一、二、三壘返回本壘得分；守備方則設法取得三個出局數。',
    sections: [
      { heading: '棒球怎麼分勝負？', paragraphs: ['正規棒球比賽通常以九局為基礎，每局分上、下半局。客隊先進攻（上半局），主隊後進攻（下半局）。', '攻守雙方每半局在三個出局數後交換；球員成功依序踏過一壘、二壘、三壘並返回本壘，進攻方可得到一分。'] },
      { heading: '三種常見出局方式', bullets: ['三振：打者累積三個好球，且符合三振判定。','接殺：打出的飛球在落地前被合法接住。','封殺／觸殺：守備員持球在規則允許的情況下使跑者出局。'] },
      { heading: '好球與壞球', paragraphs: ['投手將球投向打者。一般而言，三個好球判定三振；四個壞球使打者獲得保送上一壘。好球帶、揮棒與界外球等細節會影響好壞球判定。'] },
      { heading: '看球小技巧', callout: '先看記分板上的局數（INNING）、出局數（OUT）與壘包狀況，再注意好球數（S）與壞球數（B），大部分比賽情境就能掌握。' }
    ]
  },
  {
    id: 'field-positions', category: '基礎規則', level: '入門', readTime: 5,
    title: '九個守備位置一次認識',
    description: '投手、捕手、內野與外野，每個位置都在守什麼？',
    icon: '◇', accent: 'blue', tags: ['守備','位置','內野'],
    summary: '常見的棒球守備配置包含九名球員：投手、捕手、四名內野手與三名外野手。',
    sections: [
      {heading:'九個位置與代號', bullets:['1 投手（P）：負責投球並參與守備。','2 捕手（C）：接捕投球、協助指揮守備。','3 一壘手（1B）：防守一壘附近。','4 二壘手（2B）：防守一、二壘間。','5 三壘手（3B）：防守三壘附近。','6 游擊手（SS）：防守二、三壘間。','7 左外野手（LF）：守左外野。','8 中外野手（CF）：守中外野。','9 右外野手（RF）：守右外野。']},
      {heading:'為什麼位置代號不是順時針？', paragraphs:['守備位置編號是記錄比賽守備動作的慣用方式。例如「6-4-3 雙殺」通常指游擊手傳二壘手，再傳一壘手完成雙殺。']},
      {heading:'觀賽重點', callout:'觀察打者擊出滾地球時，游擊手與二壘手如何互相補位；這是理解內野合作的好起點。'}
    ]
  },
  {
    id: 'batting-average', category: '數據指標', level: '入門', readTime: 4,
    title: '打擊率 AVG 是什麼？',
    description: '從安打數與打數理解最常看到的打擊成績。',
    icon: '↗', accent: 'mint', tags: ['AVG','打擊率','打擊'],
    summary: '打擊率（AVG）衡量打者每個正式打數擊出安打的比例，但不包含所有打席。',
    sections: [
      {heading:'計算公式', formula:'AVG = H ÷ AB', paragraphs:['H 是安打數（Hits）；AB 是打數（At Bats）。例如 100 個打數、30 支安打，打擊率就是 .300。']},
      {heading:'打數與打席的差別', paragraphs:['打席（PA）是打者完成一次打擊機會的統計單位；打數（AB）排除部分情況，例如保送、觸身球、犧牲觸擊與犧牲飛球。因為分母不同，AVG 並不能完整反映選球能力。']},
      {heading:'如何解讀？', callout:'AVG .300 代表大約每 10 個正式打數有 3 支安打；不能解讀成每 10 次打席一定有 3 支安打。'}
    ]
  },
  {
    id: 'obp-slg-ops', category: '數據指標', level: '進階', readTime: 7,
    title: '一次搞懂 OBP、SLG 與 OPS',
    description: '上壘率、長打率與攻擊指數，各自在看什麼？',
    icon: '▥', accent: 'orange', tags: ['OBP','SLG','OPS'],
    summary: 'OBP 著重上壘能力，SLG 反映安打帶來的壘打數，OPS 則直接將兩者相加。',
    sections: [
      {heading:'上壘率 OBP', formula:'OBP = (H + BB + HBP) ÷ (AB + BB + HBP + SF)', paragraphs:['H 是安打、BB 是四壞保送、HBP 是觸身球、SF 是犧牲飛球。此處採用常見標準統計公式；特殊記錄情況仍以賽事官方統計為準。']},
      {heading:'長打率 SLG', formula:'SLG = TB ÷ AB', paragraphs:['TB 是壘打數：一壘安打 ×1、二壘安打 ×2、三壘安打 ×3、全壘打 ×4。長打率不是機率，因此可能超過 1.000。']},
      {heading:'攻擊指數 OPS', formula:'OPS = OBP + SLG', paragraphs:['OPS 把上壘率與長打率相加，容易比較球員整體打擊表現，但兩項指標直接相加並非完美的得分價值模型。']},
      {heading:'馬上試算', callout:'前往「數據實驗室」，輸入你的打擊紀錄，就能同時計算 AVG、OBP、SLG 與 OPS。'}
    ]
  },
  {
    id: 'pitching-era-whip', category: '數據指標', level: '進階', readTime: 6,
    title: '投手數據 ERA 與 WHIP',
    description: '了解投手防止失分與控制上壘的能力。',
    icon: '◎', accent: 'blue', tags: ['ERA','WHIP','投手'],
    summary: 'ERA 衡量平均每九局自責失分；WHIP 則衡量每局被安打與四壞保送的平均總量。',
    sections: [
      {heading:'防禦率 ERA', formula:'ERA = ER × 9 ÷ IP', paragraphs:['ER 是自責分，IP 是投球局數。注意紀錄上的 5.1 局代表 5 局又 1 個出局數，實際計算是 5 + 1/3 局，而不是 5.1 局。']},
      {heading:'每局被上壘率 WHIP', formula:'WHIP = (BB + H) ÷ IP', paragraphs:['BB 是四壞保送，H 是被安打數。這裡 WHIP 的分子不包含觸身球。']},
      {heading:'不要只看一個數字', callout:'ERA 也受到守備、球場和比賽情境影響；分析投手時可搭配三振率、保送率及其他進階指標。'}
    ]
  },
  {
    id: 'reading-scoreboard', category: '觀賽指南', level: '入門', readTime: 4,
    title: '記分板上的縮寫怎麼看？',
    description: 'R、H、E、B、S、O 到底代表什麼？',
    icon: '▦', accent: 'orange', tags: ['記分板','觀賽','縮寫'],
    summary: '先認識記分板，觀賽時就能迅速掌握得分、安打、失誤與球數。',
    sections: [
      {heading:'最重要的六個縮寫', bullets:['R（Runs）：得分。','H（Hits）：安打。','E（Errors）：失誤。','B（Balls）：壞球數。','S（Strikes）：好球數。','O（Outs）：出局數。']},
      {heading:'比分怎麼讀？', paragraphs:['球隊每一局的得分一般依序排列，右側會顯示累計 R、H、E。由當前半局與壘包提示，可以知道哪一隊正在進攻。']},
      {heading:'補充知識', callout:'安打比對手多，不代表得分一定較高；棒球比賽以得分決定勝負。'}
    ]
  },
  {
    id: 'batter-approach', category: '觀賽指南', level: '進階', readTime: 5,
    title: '球數領先與打擊策略',
    description: '為什麼 3-0 與 0-2 球數，打者的策略可能完全不同？',
    icon: '⌁', accent: 'mint', tags: ['打擊','策略','球數'],
    summary: '球數會影響投打雙方承擔風險的方式，但真正的策略仍取決於球員能力與比賽情境。',
    sections: [
      {heading:'打者球數領先', paragraphs:['當球數來到 3 壞 0 好時，投手可能更需要投進好球帶。部分打者會選擇等待更適合出棒的球，但不代表一定不揮棒。']},
      {heading:'投手球數領先', paragraphs:['當球數來到 0 壞 2 好時，投手可能嘗試讓打者追打好球帶外的球；打者則通常需要擴大保護範圍。']},
      {heading:'觀賽練習', callout:'下一次看比賽，留意 2-0、0-2 和滿球數時的配球差異，再觀察打者是否改變揮棒策略。'}
    ]
  },
  {
    id: 'baseball-glossary', category: '棒球術語', level: '入門', readTime: 5,
    title: '新手常見棒球術語小字典',
    description: '雙殺、滿壘、盜壘、再見安打等常見名詞整理。',
    icon: 'Aa', accent: 'blue', tags: ['術語','新手','字典'],
    summary: '把轉播常出現的詞彙一次記起來，減少看球時的理解門檻。',
    sections: [
      {heading:'進攻常見術語', bullets:['滿壘：一、二、三壘上都有跑者。','盜壘：跑者趁守備方投球等時機嘗試進到下一個壘包。','再見安打：在主隊最後進攻機會中，以安打打下立即結束比賽的致勝分。']},
      {heading:'守備常見術語', bullets:['雙殺（Double Play）：同一個連續守備動作取得兩個出局數。','觸殺（Tag Out）：守備球員持球或以持球手套觸及符合出局條件的跑者。','封殺（Force Out）：跑者因打者成為跑者而被迫前進時，守備方依規則在相關壘包完成出局。']},
      {heading:'建議學習順序', callout:'先掌握「滿壘、封殺、雙殺」，再學盜壘與進階紀錄，比較容易理解比賽中的攻守選擇。'}
    ]
  }
];
