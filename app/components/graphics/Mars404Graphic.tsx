export function Mars404Graphic() {
  return (
    <svg
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="mars-404-graphic"
    >
      {/* === HAZY ORANGE SKY === */}

      {/* Sky gradient layers - dusty atmosphere */}
      <rect x="0" y="0" width="1200" height="200" fill="rgba(217, 119, 6, 0.06)" />
      <rect x="0" y="100" width="1200" height="150" fill="rgba(217, 119, 6, 0.04)" />
      <rect x="0" y="180" width="1200" height="100" fill="rgba(217, 119, 6, 0.03)" />

      {/* === METEORS === */}

      {/* Meteor 1 - top left */}
      <g className="animate-meteor" style={{ animationDelay: "0s" }}>
        <line x1="100" y1="50" x2="130" y2="65" stroke="#d97706" strokeWidth="2" opacity="0.6" />
        <line x1="130" y1="65" x2="145" y2="72" stroke="#d97706" strokeWidth="1.5" opacity="0.4" />
        <line x1="145" y1="72" x2="155" y2="77" stroke="#d97706" strokeWidth="1" opacity="0.2" />
      </g>

      {/* Meteor 2 - center */}
      <g className="animate-meteor-slow" style={{ animationDelay: "2s" }}>
        <line x1="450" y1="30" x2="480" y2="45" stroke="#d97706" strokeWidth="2" opacity="0.5" />
        <line x1="480" y1="45" x2="495" y2="52" stroke="#d97706" strokeWidth="1.5" opacity="0.3" />
        <line x1="495" y1="52" x2="505" y2="57" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      </g>

      {/* Meteor 3 - right side */}
      <g className="animate-meteor-fast" style={{ animationDelay: "1s" }}>
        <line x1="750" y1="80" x2="780" y2="95" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
        <line x1="780" y1="95" x2="795" y2="102" stroke="#d97706" strokeWidth="1" opacity="0.3" />
        <line x1="795" y1="102" x2="802" y2="106" stroke="#d97706" strokeWidth="0.5" opacity="0.15" />
      </g>

      {/* Meteor 4 - small, far left */}
      <g className="animate-meteor-slow" style={{ animationDelay: "4s" }}>
        <line x1="200" y1="100" x2="220" y2="110" stroke="#d97706" strokeWidth="1.5" opacity="0.4" />
        <line x1="220" y1="110" x2="230" y2="115" stroke="#d97706" strokeWidth="1" opacity="0.2" />
      </g>

      {/* Meteor 5 - far right */}
      <g className="animate-meteor" style={{ animationDelay: "3s" }}>
        <line x1="950" y1="40" x2="975" y2="52" stroke="#d97706" strokeWidth="1.5" opacity="0.45" />
        <line x1="975" y1="52" x2="988" y2="59" stroke="#d97706" strokeWidth="1" opacity="0.25" />
      </g>

      {/* === DISTANT MOUNTAIN/HILL === */}

      {/* Single prominent hill on horizon - like in the photo */}
      <path
        d="M650 280 Q750 220 850 280 Q900 260 950 280"
        fill="none"
        stroke="#d97706"
        strokeWidth="1.5"
        opacity="0.15"
      />

      {/* Distant ridge line */}
      <path
        d="M0 290 Q150 285 300 290 Q450 280 600 288 Q700 275 800 285 Q950 278 1100 285 L1200 288"
        fill="none"
        stroke="#d97706"
        strokeWidth="1"
        opacity="0.12"
      />

      {/* === HORIZON === */}
      <line x1="0" y1="300" x2="1200" y2="300" stroke="#d97706" strokeWidth="1" opacity="0.2" />

      {/* === ROCKY PLAIN - MANY SCATTERED ROCKS === */}

      {/* Ground texture - pebbled surface feeling */}
      <path d="M0 320 Q300 318 600 322 Q900 317 1200 320" stroke="#d97706" strokeWidth="1" opacity="0.08" fill="none" />
      <path d="M0 350 Q400 346 800 352 Q1000 348 1200 350" stroke="#d97706" strokeWidth="1" opacity="0.07" fill="none" />
      <path d="M0 400 Q500 394 1000 402 Q1100 398 1200 400" stroke="#d97706" strokeWidth="1" opacity="0.06" fill="none" />
      <path d="M0 480 Q600 472 1200 480" stroke="#d97706" strokeWidth="1" opacity="0.05" fill="none" />

      {/* === FAR DISTANCE ROCKS (tiny, near horizon) === */}

      <ellipse cx="200" cy="310" rx="3" ry="1.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.1" />
      <ellipse cx="280" cy="312" rx="2" ry="1" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.08" />
      <ellipse cx="350" cy="308" rx="4" ry="2" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.1" />
      <ellipse cx="420" cy="311" rx="2.5" ry="1.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.09" />
      <ellipse cx="500" cy="309" rx="3" ry="1.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.1" />
      <ellipse cx="580" cy="312" rx="2" ry="1" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.08" />
      <ellipse cx="680" cy="310" rx="3.5" ry="2" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.1" />
      <ellipse cx="780" cy="311" rx="2" ry="1" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.08" />
      <ellipse cx="880" cy="309" rx="3" ry="1.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.1" />
      <ellipse cx="980" cy="312" rx="2.5" ry="1.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.09" />
      <ellipse cx="1050" cy="310" rx="2" ry="1" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.08" />

      {/* === MID-DISTANCE ROCKS (small) === */}

      <ellipse cx="100" cy="340" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.12" />
      <ellipse cx="180" cy="345" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.11" />
      <ellipse cx="260" cy="338" rx="7" ry="3.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.13" />
      <ellipse cx="340" cy="348" rx="4" ry="2" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.1" />
      <ellipse cx="420" cy="342" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.12" />
      <ellipse cx="520" cy="350" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.11" />
      <ellipse cx="620" cy="340" rx="8" ry="4" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.14" />
      <ellipse cx="720" cy="348" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.11" />
      <ellipse cx="820" cy="342" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.12" />
      <ellipse cx="920" cy="346" rx="7" ry="3.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.13" />
      <ellipse cx="1020" cy="340" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.11" />
      <ellipse cx="1120" cy="345" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.12" />

      {/* === MID-GROUND ROCKS (medium, more detail) === */}

      {/* Row 1 */}
      <ellipse cx="80" cy="390" rx="10" ry="5" fill="white" stroke="#d97706" strokeWidth="1" />
      <ellipse cx="160" cy="400" rx="8" ry="4" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      <ellipse cx="250" cy="385" rx="12" ry="6" fill="white" stroke="#d97706" strokeWidth="1" />
      <ellipse cx="350" cy="395" rx="9" ry="4.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.16" />
      <ellipse cx="450" cy="388" rx="11" ry="5.5" fill="white" stroke="#d97706" strokeWidth="1" />
      <ellipse cx="560" cy="398" rx="8" ry="4" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      <ellipse cx="680" cy="385" rx="13" ry="6.5" fill="white" stroke="#d97706" strokeWidth="1" />
      <ellipse cx="790" cy="392" rx="9" ry="4.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.16" />
      <ellipse cx="900" cy="400" rx="10" ry="5" fill="white" stroke="#d97706" strokeWidth="1" />
      <ellipse cx="1000" cy="388" rx="8" ry="4" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      <ellipse cx="1100" cy="395" rx="11" ry="5.5" fill="white" stroke="#d97706" strokeWidth="1" />

      {/* Row 2 */}
      <ellipse cx="120" cy="440" rx="14" ry="7" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="220" cy="450" rx="10" ry="5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />
      <ellipse cx="320" cy="435" rx="16" ry="8" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="430" cy="448" rx="11" ry="5.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.17" />
      <ellipse cx="550" cy="440" rx="13" ry="6.5" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="670" cy="452" rx="10" ry="5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />
      <ellipse cx="780" cy="438" rx="15" ry="7.5" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="890" cy="445" rx="12" ry="6" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.17" />
      <ellipse cx="1010" cy="450" rx="14" ry="7" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="1130" cy="442" rx="10" ry="5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />

      {/* === 404 TEXT - static, no animation === */}

      <text
        x="600"
        y="420"
        textAnchor="middle"
        fontSize="90"
        fontWeight="900"
        fill="none"
        stroke="#d97706"
        strokeWidth="3"
        fontFamily="Inter, sans-serif"
        letterSpacing="-2"
      >
        404
      </text>

      {/* === CLOSER ROCKS (larger, more prominent) === */}

      {/* Scattered medium rocks */}
      <path
        d="M60 520 Q50 500 75 490 Q105 495 115 515 Q105 535 80 538 Q55 533 60 520 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <path d="M70 500 Q85 497 100 507" stroke="#d97706" strokeWidth="1" opacity="0.2" fill="none" />

      <ellipse cx="200" cy="510" rx="18" ry="10" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="300" cy="525" rx="14" ry="8" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />

      <path
        d="M420 505 Q410 485 440 475 Q475 482 488 505 Q478 530 450 535 Q418 528 420 505 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <path d="M435 488 Q455 484 475 498" stroke="#d97706" strokeWidth="1" opacity="0.2" fill="none" />

      <ellipse cx="580" cy="520" rx="16" ry="9" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="700" cy="508" rx="20" ry="11" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="820" cy="525" rx="15" ry="8" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />

      <path
        d="M940 510 Q930 490 960 480 Q995 487 1008 510 Q998 535 970 540 Q938 533 940 510 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="1.5"
      />

      <ellipse cx="1100" cy="515" rx="17" ry="9" fill="white" stroke="#d97706" strokeWidth="1.5" />

      {/* === FOREGROUND ROCKS (largest, most detail) === */}

      {/* Large rock - left */}
      <path
        d="M30 650 Q5 590 60 560 Q130 570 160 620 Q145 680 90 695 Q25 685 30 650 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
      />
      <path d="M50 580 Q90 572 130 595" stroke="#d97706" strokeWidth="1.5" opacity="0.25" fill="none" />
      <path d="M45 630 Q80 622 120 640" stroke="#d97706" strokeWidth="1" opacity="0.18" fill="none" />
      <ellipse cx="85" cy="610" rx="15" ry="10" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />

      {/* Medium-large rock - left center */}
      <path
        d="M220 620 Q200 580 250 555 Q310 565 335 610 Q318 660 270 670 Q215 658 220 620 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
      />
      <path d="M245 575 Q280 568 315 590" stroke="#d97706" strokeWidth="1.5" opacity="0.25" fill="none" />
      <ellipse cx="275" cy="600" rx="12" ry="8" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />

      {/* Rocks - center */}
      <ellipse cx="420" cy="600" rx="25" ry="14" fill="white" stroke="#d97706" strokeWidth="2" />
      <path d="M405 592 Q420 588 440 596" stroke="#d97706" strokeWidth="1" opacity="0.2" fill="none" />

      <ellipse cx="520" cy="620" rx="20" ry="11" fill="white" stroke="#d97706" strokeWidth="1.5" />
      <ellipse cx="620" cy="595" rx="28" ry="15" fill="white" stroke="#d97706" strokeWidth="2" />
      <path d="M602 588 Q620 583 645 592" stroke="#d97706" strokeWidth="1" opacity="0.2" fill="none" />

      {/* Large rock - right center */}
      <path
        d="M750 610 Q730 565 790 540 Q860 552 890 605 Q870 665 820 680 Q745 665 750 610 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
      />
      <path d="M775 560 Q820 550 865 580" stroke="#d97706" strokeWidth="1.5" opacity="0.25" fill="none" />
      <path d="M765 620 Q810 612 855 630" stroke="#d97706" strokeWidth="1" opacity="0.18" fill="none" />
      <ellipse cx="815" cy="590" rx="18" ry="12" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />

      {/* Large rock - right */}
      <path
        d="M1000 640 Q980 590 1030 560 Q1100 572 1130 625 Q1110 690 1060 700 Q995 688 1000 640 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
      />
      <path d="M1025 580 Q1065 570 1105 598" stroke="#d97706" strokeWidth="1.5" opacity="0.25" fill="none" />
      <ellipse cx="1060" cy="610" rx="16" ry="10" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />

      {/* === IMMEDIATE FOREGROUND (bottom edge rocks) === */}

      <path
        d="M0 750 Q-20 700 40 670 Q100 680 130 730 Q110 790 60 800 L0 800 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2.5"
      />
      <path d="M25 695 Q60 688 100 710" stroke="#d97706" strokeWidth="1.5" opacity="0.3" fill="none" />

      <ellipse cx="200" cy="720" rx="35" ry="20" fill="white" stroke="#d97706" strokeWidth="2" />
      <path d="M175 712 Q200 706 230 718" stroke="#d97706" strokeWidth="1" opacity="0.25" fill="none" />

      <ellipse cx="350" cy="750" rx="28" ry="16" fill="white" stroke="#d97706" strokeWidth="2" />

      <path
        d="M480 730 Q460 690 510 665 Q570 675 595 720 Q575 775 530 785 Q475 772 480 730 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2.5"
      />
      <path d="M500 685 Q540 677 580 700" stroke="#d97706" strokeWidth="1.5" opacity="0.3" fill="none" />
      <ellipse cx="535" cy="715" rx="18" ry="12" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.25" />

      <ellipse cx="700" cy="760" rx="32" ry="18" fill="white" stroke="#d97706" strokeWidth="2" />
      <path d="M678 752 Q700 746 728 758" stroke="#d97706" strokeWidth="1" opacity="0.25" fill="none" />

      <ellipse cx="850" cy="735" rx="25" ry="14" fill="white" stroke="#d97706" strokeWidth="2" />

      <path
        d="M980 750 Q965 710 1010 685 Q1070 695 1095 740 Q1078 795 1035 805 Q972 790 980 750 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2.5"
      />
      <path d="M1000 705 Q1040 697 1075 720" stroke="#d97706" strokeWidth="1.5" opacity="0.3" fill="none" />

      <path
        d="M1140 780 Q1130 745 1160 725 Q1200 732 1200 770 L1200 800 L1140 800 Q1135 795 1140 780 Z"
        fill="white"
        stroke="#d97706"
        strokeWidth="2"
      />

      {/* === SMALL PEBBLES scattered everywhere === */}

      {/* Near foreground pebbles */}
      <ellipse cx="150" cy="680" rx="8" ry="4" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />
      <ellipse cx="280" cy="670" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />
      <ellipse cx="380" cy="690" rx="7" ry="3.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />
      <ellipse cx="450" cy="680" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />
      <ellipse cx="580" cy="670" rx="8" ry="4" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />
      <ellipse cx="680" cy="685" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />
      <ellipse cx="780" cy="678" rx="7" ry="3.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />
      <ellipse cx="900" cy="690" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />
      <ellipse cx="950" cy="680" rx="8" ry="4" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.2" />
      <ellipse cx="1080" cy="675" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.18" />

      {/* Mid pebbles */}
      <ellipse cx="100" cy="570" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      <ellipse cx="180" cy="560" rx="4" ry="2" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.14" />
      <ellipse cx="350" cy="575" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      <ellipse cx="480" cy="565" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.14" />
      <ellipse cx="650" cy="570" rx="4" ry="2" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      <ellipse cx="750" cy="560" rx="6" ry="3" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.14" />
      <ellipse cx="920" cy="575" rx="5" ry="2.5" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.15" />
      <ellipse cx="1050" cy="565" rx="4" ry="2" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.14" />
    </svg>
  );
}
