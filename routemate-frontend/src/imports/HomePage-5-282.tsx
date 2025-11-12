import svgPaths from "./svg-wjwxf1kg3t";
import imgGRoup1 from "figma:asset/7aa059140d8db5394ce4568bc973e4c50e87c9f8.png";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";

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

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[99.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[99.514px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2.11px] whitespace-pre">Search Routes</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#6412b4] from-[13.462%] gap-[8px] h-[58px] items-center left-[959.11px] pl-[32px] pr-0 py-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#2c084e] to-[55.288%] top-[0.13px] w-[205px]" data-name="Button">
      <Search />
      <Text />
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

function MapPin() {
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

function Container() {
  return (
    <div className="absolute h-[57.778px] left-0 top-0 w-[345.583px]" data-name="Container">
      <TextInput />
      <MapPin />
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

function Container1() {
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

function Container2() {
  return (
    <div className="absolute h-[57.778px] left-[723.17px] top-0 w-[219.556px]" data-name="Container">
      <Dropdown />
      <Filter />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[57.778px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container />
      <Container1 />
      <Container2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-[777.11px] not-italic text-[#2c084e] text-[18px] top-[18.13px] w-[147px]">Sort by Time</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#b992de] box-border content-stretch flex flex-col gap-[24px] h-[179.542px] items-start left-0 pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[364px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[364px]">
      <Container4 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Clock">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d="M16 8V16L21.3333 18.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#6412b4] from-[24.038%] items-center justify-center left-[24.89px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] to-[#2c084e] to-[51.923%] top-[24.89px]" data-name="Container">
      <Clock />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-[24.89px] top-[104.89px] w-[236.222px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-1.22px] whitespace-pre">Timetables</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24.89px] top-[140.89px] w-[236.222px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">View all schedules</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] h-[185.778px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container5 />
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Navigation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_3_453)" id="Navigation">
          <path d={svgPaths.p1b8d9800} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_453">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#6412b4] from-[17.308%] items-center justify-center left-[24.89px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] to-[#2c084e] to-[53.846%] top-[24.89px]" data-name="Container">
      <Navigation1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[28px] left-[24.89px] top-[104.89px] w-[236.222px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-1.22px] whitespace-pre">Live Tracking</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24.89px] top-[140.89px] w-[236.222px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Track buses live</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.8)] h-[185.778px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container6 />
      <Heading4 />
      <Paragraph1 />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Heart">
          <path d={svgPaths.p39abe980} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#6412b4] from-[12.5%] items-center justify-center left-[24.89px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] to-[#2c084e] to-[54.327%] top-[24.89px]" data-name="Container">
      <Heart />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28px] left-[24.89px] top-[104.89px] w-[236.222px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-1.22px] whitespace-pre">My Favorites</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24.89px] top-[140.89px] w-[236.222px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Saved routes</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0.8)] h-[185.778px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container7 />
      <Heading5 />
      <Paragraph2 />
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

function Container8() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#6412b4] from-[16.827%] items-center justify-center left-[24.89px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] to-[#2c084e] to-[36.058%] top-[24.89px]" data-name="Container">
      <Users />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[28px] left-[24.89px] top-[104.89px] w-[236.222px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-1.22px] whitespace-pre">Admin Panel</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24.89px] top-[140.89px] w-[236.222px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">System management</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:1_/_4] bg-[rgba(255,255,255,0.8)] h-[185.778px] relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container8 />
      <Heading6 />
      <Paragraph3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[185.778px] left-0 top-[608.53px] w-[1216px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container10() {
  return <div className="absolute h-[381.764px] left-0 top-[912px] w-[1216px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[267.986px] left-0 top-0 w-[1216px]" data-name="Container" />;
}

function ImageWithFallback() {
  return <div className="absolute h-[267.986px] left-0 opacity-30 top-0 w-[1216px]" data-name="ImageWithFallback" />;
}

function Heading() {
  return (
    <div className="h-[60px] relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 not-italic text-[60px] text-nowrap text-white top-[-4.67px] whitespace-pre">Welcome to RouteMate</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-white">Your intelligent companion for seamless city travel</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[107.986px] items-start left-[64px] top-[64px] w-[896px]" data-name="Container">
      <Heading />
      <Paragraph4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-gradient-to-r from-[#6412b4] h-[267.986px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[#2c084e] to-[55.288%] top-[34px] w-[1216px]" data-name="Container">
      <Container11 />
      <ImageWithFallback />
      <Container12 />
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="absolute h-[812px] left-[57px] top-[191px] w-[1216px]" data-name="HomeScreen">
      <Group1 />
      <Container9 />
      <Container10 />
      <Container13 />
      <div className="absolute bottom-0 h-[calc(100%-279px)] left-[1127px] pointer-events-none top-[279px]">
        <div className="bg-[#cf9fc8] rounded-full size-[48px] flex items-center justify-center">
          <span className="font-['Inter:Bold',sans-serif] text-white">?</span>
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[24px]">Why Choose RouteMate?</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[79.78px] not-italic text-[#2c084e] text-[36px] text-center text-nowrap top-[-2.44px] translate-x-[-50%] whitespace-pre">500+</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[18px] text-center">Active Routes</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-0 top-0 w-[159.403px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[79.78px] not-italic text-[#2c084e] text-[36px] text-center text-nowrap top-[-2.44px] translate-x-[-50%] whitespace-pre">200+</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[18px] text-center">Active Buses</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-[208.11px] top-[138.13px] w-[159.403px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[79.28px] not-italic text-[#2c084e] text-[36px] text-center text-nowrap top-[-2.44px] translate-x-[-50%] whitespace-pre">5sec</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[18px] text-center">Refresh Rate</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-[0.11px] top-[138.13px] w-[159.403px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[79.53px] not-italic text-[#2c084e] text-[36px] text-center text-nowrap top-[-2.44px] translate-x-[-50%] whitespace-pre">50K+</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[18px] text-center">Happy Users</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-[183.4px] top-0 w-[159.403px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-[79.96px] not-italic text-[#2c084e] text-[36px] text-center text-nowrap top-[-2.44px] translate-x-[-50%] whitespace-pre">99.9%</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[18px] text-center">Uptime</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-[366.81px] top-0 w-[159.403px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[68px] relative shrink-0 w-[543px]" data-name="Container">
      <Container16 />
      <Container19 />
      <Container22 />
      <Container25 />
      <Container28 />
      <div className="absolute h-[499px] left-[553.11px] shadow-[0px_45px_50px_0px_rgba(0,0,0,0.25)] top-[-111.88px] w-[638px]" data-name="gROUP 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGRoup1} />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[24px] h-[382px] items-start left-[57px] pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[1046px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading7 />
      <Container29 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Poppins:ExtraBold',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[26px] text-white">Popular Routes</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Central Station → Airport</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[0.11px] not-italic text-[#4a5565] text-[14px] top-[-0.88px] w-[151px]">3 buses • 15mins</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[44px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[244px]">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronRight">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-neutral-100 h-[76px] relative rounded-[20px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[76px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container33 />
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Mall Road → University</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[39px] relative shrink-0 w-[203px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[0.11px] not-italic text-[#4a5565] text-[14px] top-[-0.88px] w-[147px]">5 buses • 20 mins</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[44px] relative shrink-0 w-[167.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[167.667px]">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronRight">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-neutral-100 h-[76px] relative rounded-[20px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[76px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container36 />
          <ChevronRight1 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Downtown → Hospital</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[0.11px] not-italic text-[#4a5565] text-[14px] top-[-0.88px] w-[147px]">2 buses • 12 mins</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[44px] relative shrink-0 w-[162.111px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[162.111px]">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChevronRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChevronRight">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-neutral-100 h-[76px] relative rounded-[20px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[76px] items-center justify-between px-[16px] py-0 relative w-full">
          <Container39 />
          <ChevronRight2 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[260px] items-start relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#644f78] from-[65.865%] gap-[24px] h-[382px] items-start left-[57px] pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] to-[#b992de] top-[1485px] w-[1208px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading8 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container43() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[176px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] box-border content-stretch flex flex-col h-[329px] items-start left-0 pb-0 pt-[0.889px] px-[24.889px] top-[1903px] w-[1330px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[68px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[86px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[68px] w-[86px]" />
    </div>
  );
}

function Text1() {
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

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container45 />
      <Text1 />
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

function Container47() {
  return (
    <div className="absolute h-[168px] left-[56.89px] top-[1951.89px] w-[592px]" data-name="Container">
      <Container46 />
      <Paragraph5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[681px] top-[1952px] w-[280px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[38.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[97.403px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[47.875px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[84px] left-[681px] top-[1992px] w-[280px]" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[7px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[24px] text-nowrap top-[-2.11px] whitespace-pre">f</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[5.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[5.792px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">t</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[50px]">
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.528px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[13.528px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5a189a] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">in</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text4 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[681px] top-[2092px]" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Legal</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.556px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[99.931px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[82.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[168px] items-start left-[992.89px] top-[1951.89px] w-[280px]" data-name="Container">
      <Heading9 />
      <Container50 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[53px] top-[1951.89px]">
      <Container47 />
      <Heading3 />
      <Container48 />
      <Container49 />
      <Container51 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] left-[53px] not-italic text-[#4a5565] text-[20px] top-[2170px] w-[778px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[1903px]">
      <Footer />
      <Group2 />
    </div>
  );
}

function Container52() {
  return <div className="h-[15.986px] shrink-0 w-full" data-name="Container" />;
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.333px] h-[68px] items-start left-[123px] top-[66px] w-[162px]" data-name="Container">
      <Container52 />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M7.5 18.3333V10H12.5V18.3333" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#6412b4] gap-[8px] h-[36px] items-center left-[451px] px-[16px] py-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#2c084e] top-[96px] w-[116px]" data-name="Button">
      <Home />
      <Text5 />
    </div>
  );
}

function Clock1() {
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

function Text6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Timetable</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[595px] px-[16px] py-0 rounded-[20px] top-[96px] w-[123.125px]" data-name="Button">
      <Clock1 />
      <Text6 />
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

function Text7() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Live Tracking</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[750px] px-[16px] py-0 rounded-[20px] top-[96px] w-[142.056px]" data-name="Button">
      <Map />
      <Text7 />
    </div>
  );
}

function Heart1() {
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

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[56.514px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Favorites</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[936px] pl-[16px] pr-0 py-0 rounded-[20px] top-[96px] w-[116.514px]" data-name="Button">
      <Heart1 />
      <Text8 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[165px] left-[-39px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[10px] w-[191px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-[123px] top-[66px] w-[162px]" data-name="Text">
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

function Container55() {
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

function Button21() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-[1164px] px-[8px] py-0 rounded-[20px] top-[90px]" data-name="Button">
      <Container55 />
      <ChevronDown />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-39px] top-0">
      <div className="absolute bg-[#e7e1e6] h-[156px] left-0 top-0 w-[1330px]" />
      {[...Array(2).keys()].map((_, i) => (
        <Button17 key={i} />
      ))}
      <Button18 />
      <Button19 />
      <Button20 />
      <Container54 />
      <Text9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[123px] not-italic text-[#3d3a3a] text-[25px] text-nowrap top-[111.32px] whitespace-pre">Smart Transport</p>
      <Button21 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f7eaff] from-[62.5%] h-[2232px] left-0 to-[#948c99] top-0 w-[1330px]" data-name="App">
      <HomeScreen />
      <Container30 />
      <Container41 />
      <Group3 />
      <Container53 />
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[2232px] left-0 top-0 w-[1330px]">
      <App />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame />
    </div>
  );
}

export default function HomePage() {
  return (
    <button className="block cursor-pointer relative size-full" data-name="HomePage">
      <Group4 />
    </button>
  );
}