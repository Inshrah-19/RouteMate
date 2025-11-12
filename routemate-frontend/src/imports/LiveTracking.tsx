import svgPaths from "./svg-3d3bprwipr";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";
import imgContainer1 from "figma:asset/5259f1bca7c8438293ee5308a365096aa1a07164.png";

function Map() {
  return (
    <div className="absolute h-[18.057px] left-[747.7px] top-[92.99px] w-[18.483px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Map">
          <path d={svgPaths.p1f133400} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M6.93128 2.25714V13.5429" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M11.5521 4.51429V15.8" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[18.057px] items-start left-[776.35px] top-[92.99px] w-[75.833px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Live Tracking</p>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_477)" id="Clock">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_477">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Timetable</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32.503px] items-center left-[573.95px] px-[16px] py-0 rounded-[20px] top-[88.48px] w-[116.781px]" data-name="Button">
      <Clock />
      <Text1 />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Heart">
          <path d={svgPaths.p193c2780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[56.514px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Favorites</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[32.503px] items-center left-[888.76px] pl-[16px] pr-0 py-0 rounded-[20px] top-[86.67px] w-[110.51px]" data-name="Button">
      <Heart />
      <Text2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[148.971px] left-[-36px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[9.03px] w-[181.158px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[24.076px] items-start left-[117.65px] top-[59.59px] w-[153.653px]" data-name="Text">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2c084e] text-[45px] text-nowrap whitespace-pre">RouteMate</p>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="User">
          <path d={svgPaths.p23e99000} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gradient-to-b from-[#2c084e] from-[22.596%] relative rounded-[2.98262e+07px] shrink-0 size-[48px] to-[#6412b4]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <User />
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronDown">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[43.337px] items-center left-[1139px] px-[8px] py-0 rounded-[20px] top-[79.5px] w-[91.053px]" data-name="Button">
      <Container1 />
      <ChevronDown />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-36px] top-0">
      <div className="absolute bg-[#e7e1e6] h-[141.848px] left-[0.65px] top-0 w-[1309.35px]" />
      <div className="absolute bg-gradient-to-b from-[#7031ad] from-[13.942%] h-[34.309px] left-[731.99px] rounded-[50px] to-[#2e1447] to-[53.365%] top-[84.87px] w-[144.168px]" />
      <Map />
      <Text />
      <Button />
      <Button1 />
      <Container />
      <Text3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[14.788px] leading-[16px] left-[117.97px] not-italic text-[#3d3a3a] text-[25px] top-[100.4px] w-[276.115px]">Smart Transport</p>
      <Button2 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-[468px] size-[20px] top-[92px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M7.5 18.3333V10H12.5V18.3333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return <div className="h-[139px] shrink-0 w-[1233px]" data-name="Container" />;
}

function ImageWithFallback() {
  return <div className="absolute h-[718.162px] left-[1.2px] top-[1.2px] w-[797.606px]" data-name="ImageWithFallback" />;
}

function Container3() {
  return (
    <div className="absolute bg-[#e7000b] left-0 rounded-[4.02653e+07px] size-[15.994px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4.02653e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[23.981px] left-0 rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[19.99px] w-[52.875px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute h-[43.969px] left-[50.79px] top-[152.8px] w-[52.875px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#e7000b] left-0 rounded-[4.02653e+07px] size-[15.994px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4.02653e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[23.981px] left-0 rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[19.99px] w-[55.294px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute h-[43.969px] left-[665.8px] top-[482.8px] w-[55.294px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[36.8px] top-[152.8px]">
      <div className="absolute inset-[24.06%_13.89%_34.16%_4.61%]" data-name="Vector">
        <div className="absolute inset-[-0.95%_-0.21%_-0.89%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 653 306">
            <path d={svgPaths.p2a12c340} id="Vector" opacity="0.796299" stroke="var(--stroke-0, #2C084E)" strokeDasharray="15 10" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.06%_64.04%_62.01%_4.61%]" data-name="Vector">
        <div className="absolute inset-[-2.85%_-0.54%_-2.68%_-0.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 253 106">
            <path d={svgPaths.p27f2a620} id="Vector" opacity="0.9" stroke="var(--stroke-0, #2C084E)" strokeWidth="6" />
          </svg>
        </div>
      </div>
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(240,253,250,0.2)] h-[718.162px] left-[1.2px] to-[rgba(0,0,0,0)] top-[1.2px] w-[797.606px]" data-name="Container">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.18668092787265778)+(var(--transform-inner-height)*0.9824205636978149)))] items-center justify-center left-[389.8px] top-[277.8px] w-[calc(1px*((var(--transform-inner-height)*0.18668092787265778)+(var(--transform-inner-width)*0.9824205636978149)))]" style={{ "--transform-inner-width": "38.25", "--transform-inner-height": "38.515625" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.759deg]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <rect x="2" y="8" width="34" height="18" rx="3" stroke="var(--stroke-0, #2C084E)" strokeWidth="2" />
            <circle cx="10" cy="29" r="2" fill="var(--stroke-0, #2C084E)" />
            <circle cx="28" cy="29" r="2" fill="var(--stroke-0, #2C084E)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[19px] leading-[20px] left-[359.8px] not-italic text-[#2c084e] text-[12px] top-[339.8px] w-[75px]">Clifton</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[19px] leading-[20px] left-[458.8px] not-italic text-[#2c084e] text-[12px] top-[391.8px] w-[75px]">Airport</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[19px] leading-[20px] left-[590.8px] not-italic text-[#2c084e] text-[12px] top-[463.8px] w-[75px]">University</p>
      <Group6 />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[35.8px] not-italic text-[#2c084e] text-[12px] text-nowrap top-[188.8px] whitespace-pre">Saddar</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[164.8px] not-italic text-[#2c084e] text-[12px] text-nowrap top-[236.8px] whitespace-pre">Parking</p>
    </div>
  );
}

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[16.502px]" data-name="RefreshCw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_3_7109)" id="RefreshCw">
          <path d={svgPaths.p3e5b8640} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.37513" />
          <path d={svgPaths.p3e278780} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.37513" />
          <path d={svgPaths.p37913100} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.37513" />
        </g>
        <defs>
          <clipPath id="clip0_3_7109">
            <rect fill="white" height="16.5015" width="16.5015" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[153.225px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.006px] items-start relative w-[153.225px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Updates every 5 seconds</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex gap-[7.734px] h-[20.006px] items-center pr-0 py-0 relative shrink-0 w-full" data-name="Container">
      <RefreshCw />
      <Text4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#299dd3] box-border content-stretch flex flex-col h-[36px] items-start left-[18px] pb-0 pt-[7.987px] px-[12px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[643px] w-[255px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[720.562px] left-0 rounded-[16px] top-[0.01px] w-[800.006px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgContainer1} />
      <div className="h-[720.562px] overflow-clip relative rounded-[inherit] w-[800.006px]">
        <ImageWithFallback />
        <Container9 />
        <Container11 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(203,251,241,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[20.4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">R-2</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-gradient-to-b from-25% from-[#2c084e] h-[32px] relative rounded-[16px] shrink-0 to-[#6412b4] w-[53px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start pb-0 pt-[5.194px] px-[12px] relative w-[53px]">
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[19.2px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">ETA 12:30PM</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-gradient-to-b from-[#2c084e] from-[40.385%] h-[32px] relative rounded-[4.02653e+07px] shrink-0 to-[#6412b4] w-[110px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start pb-0 pt-[6.394px] px-[12px] relative w-[110px]">
        <Text6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[15.994px] h-[31.969px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20.006px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 bg-clip-text bg-gradient-to-b font-['Inter:Bold',sans-serif] font-bold from-[#2e1447] from-[13.942%] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] to-[#7031ad] to-[88.462%]" style={{ WebkitTextFillColor: "transparent" }}>
        Current Location
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[23.981px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute bg-clip-text bg-gradient-to-b font-['Inter:Medium',sans-serif] font-medium from-[#2e1447] from-[13.942%] leading-[24px] left-0 not-italic text-[16px] text-nowrap to-[#7031ad] to-[88.462%] top-[-1.8px] whitespace-pre" style={{ WebkitTextFillColor: "transparent" }}>
        Near Clifton Stop
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#ece3f5] h-[79.969px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.994px] h-[79.969px] items-start pb-0 pt-[15.994px] px-[15.994px] relative w-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20.006px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Next Stop</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[23.981px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1.8px] whitespace-pre">{`Airport `}</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#8d4fab] h-[79.969px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.994px] h-[79.969px] items-start pb-0 pt-[15.994px] px-[15.994px] relative w-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[15.994px] left-[12px] top-[12px] w-[134.794px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[67.87px] not-italic text-[#2c084e] text-[12px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Speed</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[23.981px] left-[12px] top-[27.99px] w-[134.794px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[66.9px] not-italic text-[#2c084e] text-[16px] text-center text-nowrap top-[-1.8px] translate-x-[-50%] whitespace-pre">45 km/h</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#bfa7cb] h-[63.975px] left-0 rounded-[20px] top-0 w-[158.794px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[15.994px] left-[12px] top-[12px] w-[134.812px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[68.29px] not-italic text-[#2c084e] text-[12px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Distance</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[23.981px] left-[12px] top-[27.99px] w-[134.812px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[67.95px] not-italic text-[#2c084e] text-[16px] text-center text-nowrap top-[-1.8px] translate-x-[-50%] whitespace-pre">2.7km</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#ece3f5] h-[63.975px] left-[174.79px] rounded-[20px] top-0 w-[158.812px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[63.975px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[15.994px] h-[255.9px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container21 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#fbf8fd] h-[354.262px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(203,251,241,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.994px] h-[354.262px] items-start pb-[1.2px] pt-[25.2px] px-[25.2px] relative w-full">
          <Container15 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.981px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#2c084e] text-[18px] text-nowrap top-[-1.8px] whitespace-pre">Route Progress</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7119)" id="MapPin">
          <path d={svgPaths.p1dcccf40} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
          <path d={svgPaths.p35bc5a00} id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
        </g>
        <defs>
          <clipPath id="clip0_3_7119">
            <rect fill="white" height="15.9937" width="15.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-gradient-to-r from-21% from-[#9449b4] relative rounded-[4.02653e+07px] shrink-0 size-[31.988px] to-61% to-[#b040c2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.019px] py-0 relative size-[31.988px]">
        <MapPin />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[43.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.006px] items-start relative w-[43.031px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e2939] text-[14px] text-nowrap whitespace-pre">Saddar</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[87.019px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[31.988px] items-center relative w-[87.019px]">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[28.481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[28.481px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1e2939] text-[12px] text-nowrap top-[-1.2px] whitespace-pre">12:15</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[31.988px] items-center justify-between relative w-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function MapPin1() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7119)" id="MapPin">
          <path d={svgPaths.p1dcccf40} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
          <path d={svgPaths.p35bc5a00} id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
        </g>
        <defs>
          <clipPath id="clip0_3_7119">
            <rect fill="white" height="15.9937" width="15.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-gradient-to-r from-[#9449b4] from-[20.673%] relative rounded-[4.02653e+07px] shrink-0 size-[31.988px] to-[#b040c2] to-[60.577%]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.019px] py-0 relative size-[31.988px]">
        <MapPin1 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[45.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.006px] items-start relative w-[45.844px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e2939] text-[14px] text-nowrap whitespace-pre">Parking</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[89.831px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[31.988px] items-center relative w-[89.831px]">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[28.481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[28.481px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1e2939] text-[12px] text-nowrap top-[-1.2px] whitespace-pre">12:20</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[31.988px] items-center justify-between relative w-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function MapPin2() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7119)" id="MapPin">
          <path d={svgPaths.p1dcccf40} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
          <path d={svgPaths.p35bc5a00} id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
        </g>
        <defs>
          <clipPath id="clip0_3_7119">
            <rect fill="white" height="15.9937" width="15.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-gradient-to-r from-[#9449b4] from-[20.673%] relative rounded-[4.02653e+07px] shrink-0 size-[31.988px] to-[#b040c2] to-[61.058%]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.019px] py-0 relative size-[31.988px]">
        <MapPin2 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[69.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.006px] items-start relative w-[69.281px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e2939] text-[14px] text-nowrap whitespace-pre">Green road</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[113.269px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[31.988px] items-center relative w-[113.269px]">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[28.481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[28.481px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1e2939] text-[12px] text-nowrap top-[-1.2px] whitespace-pre">12:25</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[31.988px] items-center justify-between relative w-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function MapPin3() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7119)" id="MapPin">
          <path d={svgPaths.p1dcccf40} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
          <path d={svgPaths.p35bc5a00} id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeWidth="1.33281" />
        </g>
        <defs>
          <clipPath id="clip0_3_7119">
            <rect fill="white" height="15.9937" width="15.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[rgba(171,51,222,0.72)] relative rounded-[4.02653e+07px] shrink-0 size-[31.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.019px] py-0 relative size-[31.988px]">
        <MapPin3 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[72.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.006px] items-start relative w-[72.994px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#75428d] text-[14px] text-nowrap whitespace-pre">Clifton</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[32px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[244px]">
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[28.481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[28.481px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1e2939] text-[12px] text-nowrap top-[-1.2px] whitespace-pre">12:30</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[31.988px] items-center justify-between relative w-full">
          <Container46 />
          <Container48 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function MapPin4() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7123)" id="MapPin">
          <path d={svgPaths.p1dcccf40} id="Vector" stroke="var(--stroke-0, #C75AEB)" strokeWidth="1.33281" />
          <path d={svgPaths.p35bc5a00} id="Vector_2" stroke="var(--stroke-0, #C75AEB)" strokeWidth="1.33281" />
        </g>
        <defs>
          <clipPath id="clip0_3_7123">
            <rect fill="white" height="15.9937" width="15.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#d3bbde] relative rounded-[4.02653e+07px] shrink-0 size-[31.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.019px] py-0 relative size-[31.988px]">
        <MapPin4 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[37px] relative shrink-0 to-[64.904%] to-[rgba(153,153,153,0)] w-[35px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[37px] items-start relative w-[35px]">
        <Container51 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[31.988px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[31.988px] items-center relative">
        <Container52 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e2939] text-[14px] text-nowrap whitespace-pre">Airport</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[28.481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[28.481px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1e2939] text-[12px] text-nowrap top-[-1.2px] whitespace-pre">12:35</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[31.988px] items-center justify-between relative w-full">
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function MapPin5() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_7123)" id="MapPin">
          <path d={svgPaths.p1dcccf40} id="Vector" stroke="var(--stroke-0, #C75AEB)" strokeWidth="1.33281" />
          <path d={svgPaths.p35bc5a00} id="Vector_2" stroke="var(--stroke-0, #C75AEB)" strokeWidth="1.33281" />
        </g>
        <defs>
          <clipPath id="clip0_3_7123">
            <rect fill="white" height="15.9937" width="15.9937" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#d3bbde] relative rounded-[4.02653e+07px] shrink-0 size-[31.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.019px] py-0 relative size-[31.988px]">
        <MapPin5 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[52.013px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.006px] items-start relative w-[52.013px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1e2939] text-[14px] text-nowrap whitespace-pre">University</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[31.988px] items-center relative w-[96px]">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[28.481px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[28.481px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1e2939] text-[12px] text-nowrap top-[-1.2px] whitespace-pre">12:40</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[31.988px] items-center justify-between relative w-full">
          <Container58 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[251.925px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container40 />
      <Container45 />
      <Container50 />
      <Container55 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#fbf8fd] box-border content-stretch flex flex-col gap-[15.994px] h-[342.3px] items-start pb-[1.2px] pt-[25.2px] px-[25.2px] relative rounded-[16px] shrink-0 w-[384px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.2px] border-[rgba(203,251,241,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading2 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[24px] h-[720.562px] items-start left-[831.99px] top-0 w-[384px]" data-name="Container">
      <Container30 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[720.562px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container63 />
    </div>
  );
}

function TrackingScreen() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.988px] h-[1005.26px] items-start left-[42px] top-[360px]" data-name="TrackingScreen">
      <Container2 />
      <Container64 />
    </div>
  );
}

function Container65() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container66() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[176px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] bottom-[0.18%] box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[0.889px] px-[24.889px] right-0 top-[76.49%]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[68px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[86px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[68px] w-[86px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[97.028px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[97.028px]">
        <p className="bg-clip-text font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[35px] text-[rgba(0,0,0,0)] text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(44, 8, 78) 35.577%, rgb(100, 18, 180) 100%)" }}>
          RouteMate
        </p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container68 />
      <Text7 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[65.11px] top-[54.11px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#070e2a] text-[18px] top-[-2.11px] w-[443px]">Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey, and never miss a ride.</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute inset-[79.96%_51.21%_8.13%_4.28%]" data-name="Container">
      <Container69 />
      <Paragraph />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute inset-[79.97%_27.74%_18.33%_51.2%]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[38.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[97.403px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[47.875px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute inset-[82.8%_27.74%_11.24%_51.2%]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[7px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[24px] text-nowrap top-[-2.11px] whitespace-pre">f</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.792px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">t</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[50px]">
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.528px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.528px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">in</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text10 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex gap-[16px] inset-[89.89%_35.54%_6.56%_51.2%] items-start" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Legal</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.556px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[99.931px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[82.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[79.96%_4.29%_8.13%_74.65%] items-start" data-name="Container">
      <Heading4 />
      <Container73 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[79.96%_4.29%_3.16%_3.98%]">
      <Container70 />
      <Heading3 />
      <Container71 />
      <Container72 />
      <Container74 />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[95.43%_37.52%_3.16%_3.98%] leading-[20px] not-italic text-[#4a5565] text-[20px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[0.18%] contents left-0 right-0 top-[76.49%]">
      <Footer />
      <Group1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#2c084e] text-[35px] text-nowrap top-[-2.4px] whitespace-pre">Live Tracking</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[23.981px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[22px] text-black text-nowrap top-[-1.8px] whitespace-pre">Real-time bus location and route progress</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.988px] h-[56.688px] items-start left-[59px] top-[177px] w-[657.961px]" data-name="Container">
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[59px] top-[177px]">
      <Container75 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-[177px]">
      <TrackingScreen />
      <Group3 />
      <Group />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.3283576965332031)+(var(--transform-inner-height)*0.9445534348487854)))] items-center justify-center left-[276px] top-[813px] w-[calc(1px*((var(--transform-inner-height)*0.3283576965332031)+(var(--transform-inner-width)*0.9445534348487854)))]" style={{ "--transform-inner-width": "75", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[340.831deg]">
          <p className="font-['Inter:Bold',sans-serif] font-bold h-[19px] leading-[20px] not-italic relative text-[#2c084e] text-[12px] w-[75px]">Green road</p>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white opacity-[0.935] relative rounded-[4.02653e+07px] shrink-0 size-[7.987px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[7.987px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[77.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20.006px] items-start relative w-[77.531px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Live tracking</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[36px] relative rounded-[4.02653e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.987px] h-[36px] items-center pl-[15.994px] pr-0 py-0 relative w-[150px]">
        <Container76 />
        <Text11 />
      </div>
    </div>
  );
}

function RefreshCw1() {
  return (
    <div className="h-[19.988px] overflow-clip relative shrink-0 w-full" data-name="RefreshCw">
      <div className="absolute inset-[16.67%_4.17%_58.33%_70.83%]" data-name="Vector">
        <div className="absolute bottom-[-16.67%] left-0 right-[-16.67%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d="M4.99687 0V4.99687H0" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeWidth="1.66562" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_70.83%_16.67%_4.17%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-16.67%] right-0 top-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3271aa00} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeWidth="1.66562" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.51%_4.17%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-3.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
            <path d={svgPaths.p39880200} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeWidth="1.66562" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[43.987px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[43.987px]">
        <RefreshCw1 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex gap-[15.994px] h-[43.987px] items-center left-[1069px] top-[177px] w-[185.475px]" data-name="Container">
      <Container77 />
      <Button12 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-[177px]">
      <Group4 />
      <Container78 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#2c084e] text-[24px]">Plan Your Journey</p>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.875 13.875" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[99.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[99.514px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2.11px] whitespace-pre">Search Routes</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#6412b4] from-[13.462%] gap-[8px] h-[58px] items-center left-[959.11px] pl-[32px] pr-0 py-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#2c084e] to-[55.288%] top-[0.13px] w-[205px]" data-name="Button">
      <Search />
      <Text12 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[57.778px] left-0 rounded-[20px] top-0 w-[345.583px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-[345.583px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">From (Source location)</p>
      </div>
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function MapPin6() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[18.89px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_434)" id="MapPin">
          <path d={svgPaths.p399b3500} id="Vector" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_434">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[57.778px] left-0 top-0 w-[345.583px]" data-name="Container">
      <TextInput />
      <MapPin6 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[57.778px] left-0 rounded-[20px] top-0 w-[345.583px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-[345.583px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">To (Destination)</p>
      </div>
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[18.89px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_464)" id="Navigation">
          <path d={svgPaths.p3b004e00} id="Vector" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_464">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[57.778px] left-[361.58px] top-0 w-[345.583px]" data-name="Container">
      <TextInput1 />
      <Navigation />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-white h-[56.889px] left-0 rounded-[20px] top-0 w-[219.556px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[18.89px]" data-name="Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_456)" id="Filter">
          <path d={svgPaths.p3bb38a00} id="Vector" stroke="var(--stroke-0, #2C084E)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_456">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[57.778px] left-[723.17px] top-0 w-[219.556px]" data-name="Container">
      <Dropdown />
      <Filter />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[57.778px] relative shrink-0 w-full" data-name="Container">
      <Button13 />
      <Container79 />
      <Container80 />
      <Container81 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-[777.11px] not-italic text-[#2c084e] text-[18px] top-[18.13px] w-[147px]">Sort by Time</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute bg-[#b992de] box-border content-stretch flex flex-col gap-[24px] h-[179.542px] items-start left-[43px] pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[270px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container82 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[-36px] top-0">
      <Group2 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[19.183px] leading-[20px] left-[494px] not-italic text-[#4a5565] text-[20px] top-[93px] w-[126.443px]">Home</p>
      <Home />
      <Group5 />
      <Container83 />
    </div>
  );
}

export default function LiveTracking() {
  return (
    <div className="relative size-full" data-name="Live Tracking">
      <Group7 />
    </div>
  );
}