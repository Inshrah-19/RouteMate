import svgPaths from "./svg-hri80dsvew";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#2c084e] text-[36px] text-nowrap top-[-1.78px] whitespace-pre">Search Results</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[0.11px] not-italic text-[#040404] text-[24px] top-[-1.89px] w-[379px]">Found 4 buses for your route</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-t from-[#2c084e] from-[15.162%] h-[48px] left-0 rounded-[20px] to-[#6412b4] to-[78.038%] top-0 w-[118.569px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[9.89px] whitespace-pre">All Routes</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#4a5565] h-[48px] left-[130.57px] rounded-[20px] top-0 w-[105.042px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[9.89px] whitespace-pre">AC Only</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#4a5565] h-[48px] left-[247.22px] rounded-[20px] top-[0.22px] w-[127px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[9.89px] whitespace-pre">Green Bus</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#4a5565] h-[48px] left-[386.22px] rounded-[20px] top-[-1.78px] w-[144.083px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(74,85,101,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[23px] not-italic text-[16px] text-nowrap text-white top-[9.89px] whitespace-pre">On-time Only</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[386.22px] top-[-1.78px]">
      <Button3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Group4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[97.778px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[97.778px] items-start pb-[0.889px] pt-[24.889px] px-[24.889px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[51px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[174.54%] left-[-36.76%] max-w-none top-[-33.5%] w-[171.94%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[51px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.22px] not-italic text-[#1e2939] text-[20px] top-[-1.56px] w-[117px]">Bus 12A</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Central Station → Airport</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[176.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative w-[176.083px]">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[64px] relative shrink-0 w-[394px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[64px] items-center relative w-[394px]">
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#754a9e] h-[36px] relative rounded-[2.98262e+07px] shrink-0 w-[84.944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start px-[16px] py-[8px] relative w-[84.944px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[64px] items-center justify-between relative w-full">
          <Container3 />
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.222px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[93.222px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Route Progress</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.556px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[26.556px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-0.44px] not-italic text-[#4a5565] text-[14px] top-[-0.56px] w-[46px]">85%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container9() {
  return <div className="bg-gradient-to-r from-[#00c950] h-[8px] rounded-[2.98262e+07px] shrink-0 to-[#00bc7d] w-full" data-name="Container" />;
}

function Container10() {
  return (
    <div className="bg-gray-200 h-[8px] relative rounded-[2.98262e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[81.944px] py-0 relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4666)" id="Clock">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[86px]">Next: 2:30 PM</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[109.778px]">
        <Clock />
        <Text2 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-green-100 h-[28px] relative rounded-[16px] shrink-0 w-[41.431px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start px-[12px] py-[4px] relative w-[41.431px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">AC</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4674)" id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, #008236)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.861px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.861px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#008236] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Track Live</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#84eea8] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Navigation />
      <Text5 />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Heart">
          <path d={svgPaths.p2ab38500} id="Vector" stroke="var(--stroke-0, #C6005C)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.681px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[55.681px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#c6005c] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Favorite</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e997c6] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[279.11px] pl-0 pr-[0.014px] py-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Heart />
      <Text6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[16px] h-[281.778px] items-start left-0 pb-[0.889px] pt-[24.889px] px-[24.889px] rounded-[16px] top-0 w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container7 />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[51px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[174.54%] left-[-36.76%] max-w-none top-[-33.5%] w-[171.94%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[51px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[-0.22px] not-italic text-[#1e2939] text-[20px] top-[-1.56px] w-[101px]">Bus 45B</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2.11px] w-[174px]">Mall Road → University</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[52px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[52px] items-start relative w-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[64px] relative shrink-0 w-[403px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[64px] items-center relative w-[403px]">
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#fff263] h-[36px] relative rounded-[2.98262e+07px] shrink-0 w-[83.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start px-[16px] py-[8px] relative w-[83.333px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#a65f00] text-[14px] text-nowrap whitespace-pre">Delayed</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[64px] items-center justify-between relative w-full">
          <Container15 />
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.222px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[93.222px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Route Progress</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.556px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[26.556px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-0.44px] not-italic text-[#4a5565] text-[14px] top-[-0.56px] w-[46px]">45%</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container21() {
  return <div className="bg-gradient-to-r from-[#00c950] h-[8px] rounded-[2.98262e+07px] shrink-0 to-[#00bc7d] w-full" data-name="Container" />;
}

function Container22() {
  return (
    <div className="bg-gray-200 h-[8px] relative rounded-[2.98262e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[300.431px] py-0 relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container22 />
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4666)" id="Clock">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[86px]">Next: 2:45 PM</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[109.778px]">
        <Clock1 />
        <Text9 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-green-100 h-[28px] relative rounded-[16px] shrink-0 w-[73.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start px-[12px] py-[4px] relative w-[73.625px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">Non-AC</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4674)" id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, #008236)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.861px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.861px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#008236] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Track Live</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#84eea8] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Navigation1 />
      <Text12 />
    </div>
  );
}

function Heart1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Heart">
          <path d={svgPaths.p2ab38500} id="Vector" stroke="var(--stroke-0, #C6005C)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.681px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[55.681px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#c6005c] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Favorite</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#e997c6] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[279.11px] pl-0 pr-[0.014px] py-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Heart1 />
      <Text13 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[16px] h-[281.778px] items-start left-[620px] pb-[0.889px] pt-[24.889px] px-[24.889px] rounded-[16px] top-0 w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container19 />
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[51px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[174.54%] left-[-36.76%] max-w-none top-[-33.5%] w-[171.94%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[51px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.22px] not-italic text-[#1e2939] text-[20px] top-[-2.33px] w-[108px]">Bus 78C</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Downtown → Hospital</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[52px] relative shrink-0 w-[157.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[52px] items-start relative w-[157.444px]">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[64px] relative shrink-0 w-[237.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[64px] items-center relative w-[237.444px]">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#754a9e] h-[36px] relative rounded-[2.98262e+07px] shrink-0 w-[84.944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start px-[16px] py-[8px] relative w-[84.944px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[64px] items-center justify-between relative w-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.222px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[93.222px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Route Progress</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.556px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[26.556px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-0.44px] not-italic text-[#4a5565] text-[14px] top-[-1.33px] w-[39px]">60%</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container33() {
  return <div className="bg-gradient-to-r from-[#00c950] h-[8px] rounded-[2.98262e+07px] shrink-0 to-[#00bc7d] w-full" data-name="Container" />;
}

function Container34() {
  return (
    <div className="bg-gray-200 h-[8px] relative rounded-[2.98262e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[218.5px] py-0 relative w-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container34 />
    </div>
  );
}

function Clock2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4666)" id="Clock">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[86px]">Next: 3:00 PM</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[109.778px]">
        <Clock2 />
        <Text16 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-green-100 h-[28px] relative rounded-[16px] shrink-0 w-[41.431px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start px-[12px] py-[4px] relative w-[41.431px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">AC</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4674)" id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, #008236)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.861px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.861px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#008236] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Track Live</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#84eea8] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Navigation2 />
      <Text19 />
    </div>
  );
}

function Heart2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Heart">
          <path d={svgPaths.p2ab38500} id="Vector" stroke="var(--stroke-0, #C6005C)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.681px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[55.681px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#c6005c] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Favorite</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#e997c6] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[279.11px] pl-0 pr-[0.014px] py-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Heart2 />
      <Text20 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[16px] h-[281.778px] items-start left-0 pb-[0.889px] pt-[24.889px] px-[24.889px] rounded-[16px] top-[305.78px] w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container31 />
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[51px]" data-name="Container">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[174.54%] left-[-36.76%] max-w-none top-[-33.5%] w-[171.94%]" src={imgContainer} />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[51px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[0.08px] not-italic text-[#1e2939] text-[20px] top-[-2.33px] w-[100px]">Bus 93X</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Tech Park → Shopping Center</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[52px] relative shrink-0 w-[207.819px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[52px] items-start relative w-[207.819px]">
        <Heading5 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[64px] relative shrink-0 w-[392px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[64px] items-center relative w-[392px]">
        <Container40 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#754a9e] h-[36px] relative rounded-[2.98262e+07px] shrink-0 w-[84.944px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-start px-[16px] py-[8px] relative w-[84.944px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">On-time</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[64px] items-center justify-between relative w-full">
          <Container39 />
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.222px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[93.222px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Route Progress</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[37px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37px] relative w-[64px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[37px] not-italic text-[#4a5565] text-[14px] top-[-1.33px] w-[48px]">20%</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Container45() {
  return <div className="bg-gradient-to-r from-[#00c950] h-[8px] rounded-[2.98262e+07px] shrink-0 to-[#00bc7d] w-full" data-name="Container" />;
}

function Container46() {
  return (
    <div className="bg-gray-200 h-[8px] relative rounded-[2.98262e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[436.986px] py-0 relative w-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container46 />
    </div>
  );
}

function Clock3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4666)" id="Clock">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-1px] w-[86px]">Next: 3:15 PM</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[109.778px]">
        <Clock3 />
        <Text23 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="bg-green-100 h-[28px] relative rounded-[16px] shrink-0 w-[41.431px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start px-[12px] py-[4px] relative w-[41.431px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">AC</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Navigation3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_4674)" id="Navigation">
          <path d={svgPaths.p1bd16b80} id="Vector" stroke="var(--stroke-0, #008236)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_4674">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.861px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.861px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#008236] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Track Live</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#84eea8] content-stretch flex gap-[8px] h-[48px] items-center justify-center left-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Navigation3 />
      <Text26 />
    </div>
  );
}

function Heart3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Heart">
          <path d={svgPaths.p2ab38500} id="Vector" stroke="var(--stroke-0, #C6005C)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.681px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[55.681px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#c6005c] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Favorite</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#e997c6] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center left-[279.11px] pl-0 pr-[0.014px] py-0 rounded-[20px] top-0 w-[267.111px]" data-name="Button">
      <Heart3 />
      <Text27 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[16px] h-[281.778px] items-start left-[620px] pb-[0.889px] pt-[24.889px] px-[24.889px] rounded-[16px] top-[305.78px] w-[596px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container43 />
      <Container47 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[587.556px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container26 />
      <Container38 />
      <Container50 />
    </div>
  );
}

function SearchScreen() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[817.333px] items-start left-[56.89px] top-[235.89px] w-[1216px]" data-name="SearchScreen">
      <Container />
      <Container2 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[176px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] box-border content-stretch flex flex-col h-[329px] items-start left-0 pb-0 pt-[0.889px] px-[24.889px] top-[1133px] w-[1330px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[68px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[86px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[68px] w-[86px]" />
    </div>
  );
}

function Text28() {
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

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container55 />
      <Text28 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[48px] left-[65.11px] top-[54.11px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#070e2a] text-[18px] top-[-2.11px] w-[443px]">Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey, and never miss a ride.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[168px] left-[56.89px] top-[1181.89px] w-[592px]" data-name="Container">
      <Container56 />
      <Paragraph5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[681px] top-[1182px] w-[280px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[38.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[97.403px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[47.875px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[84px] left-[681px] top-[1222px] w-[280px]" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[30px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[7px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[24px] text-nowrap top-[-2.11px] whitespace-pre">f</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text29 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.792px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">t</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[50px]">
        <Text30 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.528px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.528px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">in</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text31 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[681px] top-[1322px]" data-name="Container">
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Legal</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.556px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[99.931px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[82.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[168px] items-start left-[992.89px] top-[1181.89px] w-[280px]" data-name="Container">
      <Heading6 />
      <Container60 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[53px] top-[1181.89px]">
      <Container57 />
      <Heading2 />
      <Container58 />
      <Container59 />
      <Container61 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] left-[53px] not-italic text-[#4a5565] text-[20px] top-[1400px] w-[778px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[1133px]">
      <Footer />
      <Group2 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[1462px] left-0 top-0 w-[1330px]" data-name="App">
      <SearchScreen />
      <Group3 />
    </div>
  );
}

function Clock4() {
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

function Text32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Timetable</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[595px] px-[16px] py-0 rounded-[20px] top-[95px] w-[123.125px]" data-name="Button">
      <Clock4 />
      <Text32 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-[486px] size-[20px] top-[104px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M7.5 18.3333V10H12.5V18.3333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[486px] top-[104px]">
      <Home />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[521px] not-italic text-[#4a5565] text-[20px] text-nowrap top-[104px] whitespace-pre">Home</p>
    </div>
  );
}

function Map() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Map">
          <path d={svgPaths.p35d75a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M7.5 2.5V15" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M12.5 5V17.5" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Live Tracking</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[749px] px-[16px] py-0 rounded-[20px] top-[96px] w-[142.056px]" data-name="Button">
      <Map />
      <Text33 />
    </div>
  );
}

function Heart4() {
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

function Text34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[56.514px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Favorites</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[935px] pl-[16px] pr-0 py-0 rounded-[20px] top-[96px]" data-name="Button">
      <Heart4 />
      <Text34 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[165px] left-[-40px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[10px] w-[191px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-[122px] top-[66px] w-[162px]" data-name="Text">
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

function Container63() {
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

function Button24() {
  return (
    <button className="absolute box-border content-stretch cursor-pointer flex gap-[12px] h-[48px] items-center left-[1163px] overflow-visible px-[8px] py-0 rounded-[20px] top-[90px]" data-name="Button">
      <Container63 />
      <ChevronDown />
    </button>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-40px] top-0">
      <div className="absolute bg-[#e7e1e6] h-[156px] left-[-1px] top-0 w-[1330px]" />
      <Button21 />
      <Group />
      <Button22 />
      <Button23 />
      <Container62 />
      <Text35 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[122px] not-italic text-[#3d3a3a] text-[25px] text-nowrap top-[111.32px] whitespace-pre">Smart Transport</p>
      <Button24 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-40px] top-0">
      <App />
      <Group1 />
    </div>
  );
}

export default function SearchResults() {
  return (
    <div className="bg-gradient-to-b from-[#f7eaff] relative size-full to-[#948c99]" data-name="Search Results">
      <Group5 />
    </div>
  );
}