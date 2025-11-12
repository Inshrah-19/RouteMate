import svgPaths from "./svg-o00d5puq8a";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";

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

function Text() {
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
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[605.49px] px-[16px] py-0 rounded-[20px] top-[96px] w-[124.384px]" data-name="Button">
      <Clock />
      <Text />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute h-[20px] left-[495.38px] top-[105px] w-[20.204px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.p2c70aa00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[495.38px] top-[105px]">
      <Home />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[530.74px] not-italic text-[#4a5565] text-[20px] top-[105px] w-[57.583px]">Home</p>
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

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Live Tracking</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[761.07px] px-[16px] py-0 rounded-[20px] top-[97px] w-[143.508px]" data-name="Button">
      <Map />
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

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[948.97px] pl-[16px] pr-0 py-0 rounded-[20px] top-[97px] w-[101.542px]" data-name="Button">
      <Heart />
      <Text2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[165px] left-[-36px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[11px] w-[192.953px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-[127.66px] top-[67px] w-[163.657px]" data-name="Text">
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

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-[1179.3px] px-[8px] py-0 rounded-[20px] top-[91px] w-[96.982px]" data-name="Button">
      <Container1 />
      <ChevronDown />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-36px] top-px">
      <div className="absolute bg-[#e7e1e6] h-[156px] left-[3.4px] top-px w-[1343.6px]" />
      <Button />
      <Group />
      <Button1 />
      <Button2 />
      <Container />
      <Text3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[127.66px] not-italic text-[#3d3a3a] text-[25px] top-[112.32px] w-[195.984px]">Smart Transport</p>
      <Button3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#2c084e] text-[36px] text-nowrap top-[-1.78px] whitespace-pre">Admin Dashboard</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[25px] text-black text-nowrap top-[-2.11px] whitespace-pre">Manage routes, buses, and system operations</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Total Routes</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#1e2939] text-[30px] text-nowrap top-[-1.78px] whitespace-pre">25</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[60px] relative shrink-0 w-[75.361px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[60px] items-start relative w-[75.361px]">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Map1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Map">
          <path d={svgPaths.p26ee5400} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d="M12 4V24" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d="M20 8V28" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-gradient-to-r from-[#6412b4] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px] to-[#2c084e]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[64px]">
        <Map1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-100 h-[113.778px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[113.778px] items-start pb-[0.889px] pt-[24.889px] px-[24.889px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Active Buses</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#1e2939] text-[30px] text-nowrap top-[-1.78px] whitespace-pre">18</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[60px] relative shrink-0 w-[76.653px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[60px] items-start relative w-[76.653px]">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Bus() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Bus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Bus">
          <path d="M10.6667 8V16" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d="M20 8V16" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d="M2.66667 16H28.8" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.pa65f300} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.pe604b00} id="Vector_5" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.p25e9e800} id="Vector_6" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.p11115780} id="Vector_7" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-gradient-to-r from-[#6412b4] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px] to-[#2c084e]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[64px]">
        <Bus />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_2] bg-gray-200 h-[113.778px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[113.778px] items-start pb-[0.889px] pt-[24.889px] px-[24.889px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Total Drivers</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#1e2939] text-[30px] text-nowrap top-[-1.78px] whitespace-pre">32</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[60px] relative shrink-0 w-[76.181px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[60px] items-start relative w-[76.181px]">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Users">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.p1eb5fb00} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-gradient-to-r from-[#6412b4] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px] to-[#2c084e]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[64px]">
        <Users />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_3] bg-gray-100 h-[113.778px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[113.778px] items-start pb-[0.889px] pt-[24.889px] px-[24.889px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">System Uptime</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#1e2939] text-[30px] text-nowrap top-[-1.78px] whitespace-pre">99.8%</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[60px] relative shrink-0 w-[93.069px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[60px] items-start relative w-[93.069px]">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Settings">
          <path d={svgPaths.p34392700} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.p24ce7880} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-gradient-to-r from-[#6412b4] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px] to-[#2c084e]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[64px]">
        <Settings />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_4] bg-gray-200 h-[113.778px] relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[113.778px] items-start pb-[0.889px] pt-[24.889px] px-[24.889px] relative w-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[113.778px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[113.778px] relative w-full">
          <Container6 />
          <Container10 />
          <Container14 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Map2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Map">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Map">
          <path d={svgPaths.p35d75a00} id="Vector" stroke="var(--stroke-0, #6412B4)" strokeWidth="1.66667" />
          <path d="M7.5 2.5V15" id="Vector_2" stroke="var(--stroke-0, #6412B4)" strokeWidth="1.66667" />
          <path d="M12.5 5V17.5" id="Vector_3" stroke="var(--stroke-0, #6412B4)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#6412b4] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Route Management</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[41.778px] relative shrink-0 w-[171.778px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#6412b4] border-[0px_0px_1.778px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[41.778px] items-center pb-[1.778px] pt-0 px-0 relative w-[171.778px]">
        <Map2 />
        <Text4 />
      </div>
    </div>
  );
}

function Bus1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bus">
          <path d="M6.66667 5V10" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M12.5 5V10" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d="M1.66667 10H18" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.pd26ac80} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.p373f0700} id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.p33614680} id="Vector_6" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.p1791ac80} id="Vector_7" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Bus Management</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[41.778px] relative shrink-0 w-[155.056px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.778px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[41.778px] items-center pb-[1.778px] pt-0 px-0 relative w-[155.056px]">
        <Bus1 />
        <Text5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[32px] items-start pb-[0.889px] pl-[32px] pr-0 pt-[24px] relative w-full">
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[60.139px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[60.139px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[20px] text-nowrap whitespace-pre">Routes</p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d="M8 3.33333V12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[74.889px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[74.889px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[33px] leading-[24px] left-[-2.56px] not-italic text-[18px] text-white top-[-1.22px] w-[102px]">Add Route</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-gradient-to-r from-[#641284] h-[48px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#2c084e] w-[146.889px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center pl-[24px] pr-0 py-0 relative w-[146.889px]">
        <Plus />
        <Text6 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[48px] items-center justify-between relative w-full">
          <Heading1 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-start left-0 px-[24px] py-[16px] top-0 w-[215.528px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Route Name</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-start left-[215.53px] px-[24px] py-[16px] top-0 w-[235.847px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Source</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-start left-[451.38px] px-[24px] py-[16px] top-0 w-[205.236px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Destination</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-start left-[656.61px] px-[24px] py-[16px] top-0 w-[288.208px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Timing</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute box-border content-stretch flex h-[52px] items-start left-[944.82px] px-[24px] py-[16px] top-0 w-[203.625px]" data-name="Header Cell">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Actions</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gradient-to-r from-[85.096%] from-[rgba(149,12,151,0.2)] h-[52px] left-0 opacity-95 to-[rgba(49,4,49,0.04)] top-0 w-[1148.44px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-gradient-to-r from-[58.173%] from-[rgba(149,12,151,0.2)] h-[52px] left-0 to-[65.385%] to-[rgba(48,4,49,0.2)] top-0 w-[1148.44px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[64.444px] left-0 top-0 w-[215.528px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] text-nowrap top-[21px] whitespace-pre">R-2</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[64.444px] left-[215.53px] top-0 w-[235.847px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21px] whitespace-pre">Central Station</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[64.444px] left-[451.38px] top-0 w-[205.236px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21px] whitespace-pre">Airport</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[64.444px] left-[656.61px] top-0 w-[288.208px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21px] whitespace-pre">6:00 AM - 10:00 PM</p>
    </div>
  );
}

function Edit() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Edit">
      <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.83%_7.83%_33.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.08%_-7.08%_-9.73%_-9.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2cf25200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Edit />
      </div>
    </div>
  );
}

function Trash() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute bottom-[-0.67px] left-0 right-0 top-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 0.666667H1.33333H12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <path d={svgPaths.p3702cc70} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Trash />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[24px] top-[16px] w-[155.625px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[64.444px] left-[944.82px] top-0 w-[203.625px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[64.444px] left-0 top-0 w-[1148.44px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.889px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[64.444px] left-0 top-0 w-[215.528px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] text-nowrap top-[21.44px] whitespace-pre">R-5</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[64.444px] left-[215.53px] top-0 w-[235.847px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">Mall Road</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[64.444px] left-[451.38px] top-0 w-[205.236px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">Malir</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[64.444px] left-[656.61px] top-0 w-[288.208px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">5:30 AM - 11:00 PM</p>
    </div>
  );
}

function Edit1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Edit">
      <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.83%_7.83%_33.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.08%_-7.08%_-9.73%_-9.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2cf25200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Edit1 />
      </div>
    </div>
  );
}

function Trash1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute bottom-[-0.67px] left-0 right-0 top-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 0.666667H1.33333H12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <path d={svgPaths.p3702cc70} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Trash1 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[24px] top-[16.44px] w-[155.625px]" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[64.444px] left-[944.82px] top-0 w-[203.625px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[64.444px] left-0 top-[59.45px] w-[1148.44px]" data-name="Table Row">
      <div className="h-[64.444px] overflow-clip relative rounded-[inherit] w-[1148.44px]">
        <TableCell5 />
        <TableCell6 />
        <TableCell7 />
        <TableCell8 />
        <TableCell9 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.89px] border-[rgba(243,244,246,0)] border-solid inset-[-0.445px] pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[64.444px] left-0 top-0 w-[215.528px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] text-nowrap top-[21.44px] whitespace-pre">R-1</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[64.444px] left-[215.53px] top-0 w-[235.847px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">Shah Fasial</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[64.444px] left-[451.38px] top-0 w-[205.236px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">University</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[64.444px] left-[656.61px] top-0 w-[288.208px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">1:30 AM - 11:00 PM</p>
    </div>
  );
}

function Edit2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Edit">
      <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.83%_7.83%_33.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.08%_-7.08%_-9.73%_-9.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2cf25200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Edit2 />
      </div>
    </div>
  );
}

function Trash2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute bottom-[-0.67px] left-0 right-0 top-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 0.666667H1.33333H12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <path d={svgPaths.p3702cc70} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Trash2 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[24px] top-[16.44px] w-[155.625px]" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[64.444px] left-[944.82px] top-0 w-[203.625px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[58px] left-[-0.78px] top-[116.89px] w-[1148px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0.89px] border-gray-100 border-solid inset-[-0.445px] pointer-events-none" />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[64.444px] left-0 top-0 w-[215.528px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] text-nowrap top-[21.44px] whitespace-pre">R-5</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[64.444px] left-[215.53px] top-0 w-[235.847px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">Kharadar</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[64.444px] left-[451.38px] top-0 w-[205.236px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">Nipa</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[64.444px] left-[656.61px] top-0 w-[288.208px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">3:30 AM - 12:00 PM</p>
    </div>
  );
}

function Edit3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Edit">
      <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.83%_7.83%_33.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.08%_-7.08%_-9.73%_-9.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2cf25200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Edit3 />
      </div>
    </div>
  );
}

function Trash3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute bottom-[-0.67px] left-0 right-0 top-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 0.666667H1.33333H12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <path d={svgPaths.p3702cc70} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Trash3 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[24px] top-[16.44px] w-[155.625px]" data-name="Container">
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[64.444px] left-[944.82px] top-0 w-[203.625px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[64.444px] left-px top-[227.44px] w-[1148.44px]" data-name="Table Row">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-px top-[227.44px]">
      <TableRow4 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[64.444px] left-0 top-0 w-[215.528px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#1e2939] text-[14px] text-nowrap top-[21.44px] whitespace-pre">R-3</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[64.444px] left-[215.53px] top-0 w-[235.847px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">Burns Road</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[64.444px] left-[451.38px] top-0 w-[205.236px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">Gulshan</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[64.444px] left-[656.61px] top-0 w-[288.208px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] text-nowrap top-[21.44px] whitespace-pre">5:40 AM - 11:30 PM</p>
    </div>
  );
}

function Edit4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Edit">
      <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.83%_7.83%_33.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.08%_-7.08%_-9.73%_-9.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2cf25200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Edit4 />
      </div>
    </div>
  );
}

function Trash4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Trash2">
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute bottom-[-0.67px] left-0 right-0 top-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
            <path d="M0 0.666667H1.33333H12" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <path d={svgPaths.p3702cc70} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute bottom-0 left-[-0.67px] right-[-0.67px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 0V4" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Trash4 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[24px] top-[16.44px] w-[155.625px]" data-name="Container">
      <Button15 />
      <Button16 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[64.444px] left-[944.82px] top-0 w-[203.625px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[64.444px] left-[0.22px] top-[174.78px] w-[1148.44px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0.89px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[128.889px] left-0 top-[52px] w-[1148.44px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <Group4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[180.889px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[337px] relative rounded-[20px] shrink-0 w-[1150px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[337px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[1150px]">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] h-[607px] items-start pb-0 pt-[32px] px-[32px] relative shrink-0 w-[1226px]" data-name="Container">
      <Container21 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#ede9ec] box-border content-stretch flex flex-col gap-[0.889px] h-[541px] items-start p-[0.889px] relative rounded-[16px] shrink-0 w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container20 />
      <Container28 />
    </div>
  );
}

function AdminScreen() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[60px] top-[246px] w-[1216px]" data-name="AdminScreen">
      <Container2 />
      <Container19 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container31() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[249px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[249px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] box-border content-stretch flex flex-col h-[329px] items-start left-0 pb-0 pt-[0.889px] px-[24.889px] top-[1075px] w-[1347px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container32 />
    </div>
  );
}

function Container33() {
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

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container33 />
      <Text7 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[48px] left-[65.11px] top-[54.11px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#070e2a] text-[18px] top-[-2.11px] w-[443px]">Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey, and never miss a ride.</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[168px] left-[61.67px] top-[1123.89px] w-[599.567px]" data-name="Container">
      <Container34 />
      <Paragraph9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[693.76px] top-[1124px] w-[283.579px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[38.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[97.403px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[47.875px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[84px] left-[693.76px] top-[1164px] w-[283.579px]" data-name="Container">
      <Button17 />
      <Button18 />
      <Button19 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.792px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">t</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[50px]">
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[30px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[7px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[24px] text-nowrap top-[-2.11px] whitespace-pre">f</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
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

function Button22() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text10 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[693.76px] top-[1264px]" data-name="Container">
      <Button20 />
      <Button21 />
      <Button22 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Legal</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.556px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[99.931px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[82.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button23 />
      <Button24 />
      <Button25 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[168px] items-start left-[1000.52px] top-[1122.89px] w-[283.579px]" data-name="Container">
      <Heading3 />
      <Container38 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[57.73px] top-[1122.89px]">
      <Container35 />
      <Heading2 />
      <Container36 />
      <Container37 />
      <Container39 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] left-[57.73px] not-italic text-[#4a5565] text-[20px] top-[1342px] w-[787.944px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[1075px]">
      <Footer />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-36px] top-px">
      <Group1 />
      <AdminScreen />
      <Group3 />
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="relative size-full" data-name="Admin Dashboard">
      <Group5 />
    </div>
  );
}