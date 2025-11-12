import svgPaths from "./svg-0m70sjadp2";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";
import imgButton from "figma:asset/36b814c47eb8aa2e402bc893cc773efc092b920c.png";

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
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[602.81px] px-[16px] py-0 rounded-[20px] top-[95px] w-[124.834px]" data-name="Button">
      <Clock />
      <Text />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute h-[20px] left-[492.3px] top-[104px] w-[20.278px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.p2a54900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[492.3px] top-[104px]">
      <Home />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[527.78px] not-italic text-[#4a5565] text-[20px] top-[104px] w-[57.791px]">Home</p>
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
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[758.95px] px-[16px] py-0 rounded-[20px] top-[96px] w-[144.027px]" data-name="Button">
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
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[947.53px] pl-[16px] pr-0 py-0 rounded-[20px] top-[96px] w-[101.909px]" data-name="Button">
      <Heart />
      <Text2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[165px] left-[-41px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[10px] w-[193.651px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-[123.25px] top-[66px] w-[164.248px]" data-name="Text">
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
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-[1178.7px] px-[8px] py-0 rounded-[20px] top-[90px] w-[97.332px]" data-name="Button">
      <Container1 />
      <ChevronDown />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-41px] top-0">
      <div className="absolute bg-[#e7e1e6] h-[156px] left-[-1.46px] top-0 w-[1348.46px]" />
      <Button />
      <Group />
      <Button1 />
      <Button2 />
      <Container />
      <Text3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[123.25px] not-italic text-[#3d3a3a] text-[25px] top-[111.32px] w-[196.692px]">Smart Transport</p>
      <Button3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Poppins:ExtraBold',sans-serif] leading-[36px] left-0 not-italic text-[#2c084e] text-[35px] text-nowrap top-[-1.78px] whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[20px] text-nowrap top-[-2.11px] whitespace-pre">Get assistance and find answers to common questions</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-0 top-0 w-[1216px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Phone">
          <path d={svgPaths.pe156400} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#2b7fff] items-center justify-center left-[162.67px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] to-[#00b8db] top-[24.89px]" data-name="Container">
      <Phone />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[28px] left-[24.89px] top-[104.89px] w-[339.556px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[170.6px] not-italic text-[#1e2939] text-[18px] text-center text-nowrap top-[-1.22px] translate-x-[-50%] whitespace-pre">Call Support</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24.89px] top-[140.89px] w-[339.556px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center">24/7 Available</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[185.778px] left-0 rounded-[16px] top-0 w-[389.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container3 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Mail">
          <path d={svgPaths.p35493200} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
          <path d={svgPaths.p376b7540} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#00c950] items-center justify-center left-[162.67px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] to-[#00bc7d] top-[24.89px]" data-name="Container">
      <Mail />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[28px] left-[24.89px] top-[104.89px] w-[339.556px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[170.06px] not-italic text-[#1e2939] text-[18px] text-center text-nowrap top-[-1.22px] translate-x-[-50%] whitespace-pre">Email Us</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24.89px] top-[140.89px] w-[339.556px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center">24h Response</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[185.778px] left-[413.33px] rounded-[16px] top-0 w-[389.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container4 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function MessageSquare() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="MessageSquare">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="MessageSquare">
          <path d={svgPaths.p3bd07ec0} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#ad46ff] items-center justify-center left-[162.67px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] to-[#f6339a] top-[24.89px]" data-name="Container">
      <MessageSquare />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[28px] left-[24.89px] top-[104.89px] w-[339.556px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[169.99px] not-italic text-[#1e2939] text-[18px] text-center text-nowrap top-[-1.22px] translate-x-[-50%] whitespace-pre">Live Chat</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24.89px] top-[140.89px] w-[339.556px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center">Mon-Fri 9-5</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[185.778px] left-[826.67px] rounded-[16px] top-0 w-[389.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container5 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[185.778px] left-0 top-[100px] w-[1216px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#2c084e] text-[30px]">Frequently Asked Questions</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[260.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[260.778px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">How do I track a bus in real-time?</p>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.8%_-4.45%_-21.7%_-4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p2bfd0700} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <ChevronDown1 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[28px] py-[4px] relative w-full">
          <Text4 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[85.778px] left-0 rounded-[20px] top-0 w-[1150.22px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[85.778px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[1150.22px]">
        <Button7 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[300.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[300.5px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">How accurate are the bus arrival times?</p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.8%_-4.45%_-21.7%_-4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p2bfd0700} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <ChevronDown2 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
          <Text5 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[85.778px] left-[0.11px] rounded-[20px] top-[101.35px] w-[1150.22px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[85.778px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[1150.22px]">
        <Button8 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[232.903px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[232.903px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Can I save my favorite routes?</p>
      </div>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.8%_-4.45%_-21.7%_-4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p2bfd0700} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <ChevronDown3 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
          <Text6 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[85.778px] left-0 rounded-[20px] top-[203.56px] w-[1150.22px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[85.778px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[1150.22px]">
        <Button9 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[377.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[377.778px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">What should I do if a bus is showing as cancelled?</p>
      </div>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.8%_-4.45%_-21.7%_-4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p2bfd0700} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <ChevronDown4 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[84px] items-center justify-between px-[24px] py-0 relative w-full">
          <Text7 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[85.778px] left-0 rounded-[20px] top-[305.33px] w-[1150.22px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[85.778px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[1150.22px]">
        <Button10 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[391.111px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container10 />
      <Container12 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-[24px] h-[512.875px] items-start left-0 pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[317.78px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container15 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[31.986px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#2c084e] text-[30px]">Contact Support</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[57.778px] left-0 rounded-[20px] top-0 w-[563.111px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-[563.111px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Your Name</p>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[57.778px] left-[587.11px] rounded-[20px] top-0 w-[563.111px]" data-name="Email Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-[563.111px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Email Address</p>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[57.778px] left-0 top-0 w-[1150.22px]" data-name="Container">
      <TextInput />
      <EmailInput />
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="ChevronDown">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.8%_-4.45%_-21.7%_-4.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p2bfd0700} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[1084.11px] pb-0 pt-[8px] px-[8px] rounded-[16px] size-[40px] top-[8.69px]" data-name="Container">
      <ChevronDown5 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[56.889px] left-0 rounded-[20px] top-[81.78px] w-[1150.22px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container18 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[18px] text-black text-nowrap top-[15.61px] whitespace-pre">Select you problem type</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[177.778px] left-0 rounded-[20px] top-[162.67px] w-[1150.22px]" data-name="Text Area">
      <div className="box-border content-stretch flex h-[177.778px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-[1150.22px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">Describe your issue in detail...</p>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#cf9fc8] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip0_3_7847)" id="Send">
          <path d={svgPaths.p2a8e2880} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d={svgPaths.p3287b2c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_7847">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.972px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[101.972px]">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[24px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2.11px] whitespace-pre">Send Message</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center left-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[370.67px] w-[1150.22px]" data-name="Button">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgButton} />
      <Send />
      <Text8 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[426.667px] relative shrink-0 w-full" data-name="Form">
      <Container17 />
      <Dropdown />
      <TextArea />
      <Button11 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-[24px] h-[548.431px] items-start left-0 pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[862.65px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading3 />
      <Form />
    </div>
  );
}

function HelpScreen() {
  return (
    <div className="absolute h-[1411.08px] left-[57px] top-[224px] w-[1216px]" data-name="HelpScreen">
      <Container2 />
      <Container6 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[176px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] box-border content-stretch flex flex-col h-[329px] items-start left-0 pb-0 pt-[0.889px] px-[24.889px] top-[1706px] w-[1347px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[68px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[86px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[68px] w-[86px]" />
    </div>
  );
}

function Text9() {
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

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container23 />
      <Text9 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[48px] left-[65.11px] top-[54.11px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#070e2a] text-[18px] top-[-2.11px] w-[443px]">Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey, and never miss a ride.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[168px] left-[65.89px] top-[1754.89px] w-[592px]" data-name="Container">
      <Container24 />
      <Paragraph7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[690px] top-[1755px] w-[280px]" data-name="Heading 4">
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

function Container26() {
  return (
    <div className="absolute h-[84px] left-[690px] top-[1795px] w-[280px]" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Text10() {
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
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
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
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
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
        <Text12 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[690px] top-[1895px]" data-name="Container">
      <Button15 />
      <Button16 />
      <Button17 />
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

function Container28() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[168px] items-start left-[1001.89px] top-[1754.89px] w-[280px]" data-name="Container">
      <Heading4 />
      <Container28 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[62px] top-[1754.89px]">
      <Container25 />
      <Heading2 />
      <Container26 />
      <Container27 />
      <Container29 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] left-[62px] not-italic text-[#4a5565] text-[20px] top-[1973px] w-[778px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[1706px]">
      <Footer />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-41px] top-0">
      <Group1 />
      <HelpScreen />
      <Group3 />
    </div>
  );
}

export default function HelpAndSupport() {
  return (
    <div className="relative size-full" data-name="Help and Support">
      <Group4 />
    </div>
  );
}