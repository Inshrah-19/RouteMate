import svgPaths from "./svg-yhrj0cgjqb";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#2c084e] text-[36px] text-nowrap top-[-1.78px] whitespace-pre">Settings</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[25px] text-black text-nowrap top-[-2.11px] whitespace-pre">Customize your RouteMate experience</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-0 top-0 w-[1216px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[20px]">Profile Information</p>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="User">
          <path d={svgPaths.p20a41b00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="3.33333" />
          <path d={svgPaths.p17fe7470} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[2.98262e+07px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[80px]">
        <User />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[170.583px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#1e2939] text-[18px] text-nowrap top-[-1.22px] whitespace-pre">Guest Account</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[28px] w-[170.583px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">guestaccount@example.com</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[56px] w-[66.694px]" data-name="Button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Edit Profile</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[77.333px] relative shrink-0 w-[170.583px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[77.333px] relative w-[170.583px]">
        <Heading2 />
        <Paragraph1 />
        <Button />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(243,244,246,0.9)] box-border content-stretch flex flex-col gap-[24px] h-[221.778px] items-start left-0 pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[100px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(237,233,236,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_3_6750)" id="Bell">
          <path d={svgPaths.p1e4b7b80} id="Vector" stroke="var(--stroke-0, #0C084E)" strokeWidth="2" />
          <path d={svgPaths.p146fda80} id="Vector_2" stroke="var(--stroke-0, #0C084E)" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3_6750">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[111.972px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[111.972px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[20px] text-nowrap whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Bell />
      <Text />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Push Notifications</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Receive app notifications on your device</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[1106.22px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return <div className="absolute h-[24px] left-0 rounded-[2.98262e+07px] top-0 w-[44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgb(44, 8, 78) 0%, rgb(44, 8, 78) 100%), linear-gradient(90deg, rgb(229, 231, 235) 0%, rgb(229, 231, 235) 100%)" }} />;
}

function Checkbox() {
  return <div className="absolute left-[-1px] size-px top-[11.5px]" data-name="Checkbox" />;
}

function Label() {
  return (
    <div className="absolute h-[24px] left-[1106.22px] top-[10px] w-[44px]" data-name="Label">
      <Container8 />
      <Checkbox />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1150.22px]" data-name="Container">
      <Container7 />
      <Label />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Bus Arrival Alerts</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Get notified when your bus is approaching</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[1106.22px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return <div className="absolute h-[24px] left-0 rounded-[2.98262e+07px] top-0 w-[44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgb(12, 8, 78) 0%, rgb(12, 8, 78) 100%), linear-gradient(90deg, rgb(229, 231, 235) 0%, rgb(229, 231, 235) 100%)" }} />;
}

function Checkbox1() {
  return <div className="absolute left-[-1px] size-px top-[11.5px]" data-name="Checkbox" />;
}

function Label1() {
  return (
    <div className="absolute h-[24px] left-[1106.22px] top-[10px] w-[44px]" data-name="Label">
      <Container13 />
      <Checkbox1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1150.22px]" data-name="Container">
      <Container12 />
      <Label1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Route Disruptions</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Alerts about delays, cancellations, or route changes</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[1106.22px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-[rgba(255,255,255,0.8)] h-[24px] left-0 rounded-[2.98262e+07px] top-0 w-[44px]" data-name="Container" />;
}

function Checkbox2() {
  return <div className="absolute left-[-1px] size-px top-[11.5px]" data-name="Checkbox" />;
}

function Label2() {
  return (
    <div className="absolute h-[24px] left-[1106.22px] top-[10px] w-[44px]" data-name="Label">
      <Container18 />
      <Checkbox2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1150.22px]" data-name="Container">
      <Container17 />
      <Label2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Weekly Summary</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[14px]">Weekly travel statistics and insights</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-0 top-0 w-[1106.22px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return <div className="absolute h-[24px] left-0 rounded-[2.98262e+07px] top-0 w-[44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgb(12, 8, 78) 0%, rgb(12, 8, 78) 100%), linear-gradient(90deg, rgb(229, 231, 235) 0%, rgb(229, 231, 235) 100%)" }} />;
}

function Checkbox3() {
  return <div className="absolute left-[-1px] size-px top-[11.5px]" data-name="Checkbox" />;
}

function Label3() {
  return (
    <div className="absolute h-[24px] left-[1106.22px] top-[10px] w-[44px]" data-name="Label">
      <Container23 />
      <Checkbox3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1150.22px]" data-name="Container">
      <Container22 />
      <Label3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[248px] items-start relative shrink-0" data-name="Container">
      <Container9 />
      <Container14 />
      <Container19 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(243,244,246,0.9)] box-border content-stretch flex flex-col gap-[24px] h-[365.778px] items-start left-0 pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[353.78px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading3 />
      <Container25 />
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Globe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Globe">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #0C084E)" strokeWidth="2" />
          <path d="M2 12H22" id="Vector_2" stroke="var(--stroke-0, #0C084E)" strokeWidth="2" />
          <path d={svgPaths.p1862f500} id="Vector_3" stroke="var(--stroke-0, #0C084E)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[102.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-start relative w-[102.25px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[20px] text-nowrap whitespace-pre">Preferences</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Globe />
      <Text1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Language</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-89.78px] size-0 top-[-961.33px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-[#ede9ec] h-[48.889px] relative rounded-[20px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(172,114,161,0.79)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[39px] leading-[40px] left-[28.11px] not-italic text-[16px] text-black top-[5.55px] w-[79px]">English</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76.889px] items-start left-0 top-0 w-[563.111px]" data-name="Container">
      <Label4 />
      <Dropdown />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[14px]">Theme</p>
    </div>
  );
}

function ChevronDown() {
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

function Container28() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[509px] pb-0 pt-[8px] px-[8px] rounded-[16px] size-[40px] top-[8.55px]" data-name="Container">
      <ChevronDown />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="bg-[#ede9ec] h-[48.889px] relative rounded-[20px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(172,114,161,0.53)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[39px] leading-[40px] left-[29px] not-italic text-[16px] text-black top-[4.55px] w-[102px]">Light Mode</p>
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[76.889px] items-start left-[587.11px] top-0 w-[563.111px]" data-name="Container">
      <Label5 />
      <Dropdown1 />
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

function Container30() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[499.11px] pb-0 pt-[8px] px-[8px] rounded-[16px] size-[40px] top-[34.55px]" data-name="Container">
      <ChevronDown1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[76.889px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[rgba(243,244,246,0.9)] box-border content-stretch flex flex-col gap-[24px] h-[194.667px] items-start left-0 pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[16px] top-[751.56px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Heading4 />
      <Container31 />
    </div>
  );
}

function LogOut() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="LogOut">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="LogOut">
          <path d={svgPaths.p38966ca0} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d={svgPaths.p14ca9100} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[61.778px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.11px] whitespace-pre">Sign Out</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#6412b4] gap-[12px] h-[56px] items-center left-[1058.22px] pl-[32px] pr-0 py-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#2c084e] top-[978.22px] w-[157.778px]" data-name="Button">
      <LogOut />
      <Text2 />
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="absolute h-[1034.22px] left-[59px] top-[206px] w-[1216px]" data-name="SettingsScreen">
      <Container />
      <Container4 />
      <Container26 />
      <Container32 />
      <Button1 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[1577px] left-[-4px] top-[-2px] w-[1334px]" data-name="App">
      <SettingsScreen />
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

function Text3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Timetable</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[594.25px] px-[16px] py-0 rounded-[20px] top-[93px] w-[123.755px]" data-name="Button">
      <Clock />
      <Text3 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute h-[20px] left-[484.69px] top-[102px] w-[20.102px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Home">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
          <path d={svgPaths.p32a93a00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[484.69px] top-[102px]">
      <Home />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[519.87px] not-italic text-[#4a5565] text-[20px] top-[102px] w-[57.291px]">Home</p>
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

function Text4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Live Tracking</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[749.03px] px-[16px] py-0 rounded-[20px] top-[94px] w-[142.782px]" data-name="Button">
      <Map />
      <Text4 />
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

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.514px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[56.514px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[20px] text-nowrap whitespace-pre">Favorites</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[36px] items-center left-[935.99px] pl-[16px] pr-0 py-0 rounded-[20px] top-[94px] w-[101.028px]" data-name="Button">
      <Heart />
      <Text5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[165px] left-[-44px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[8px] w-[191.977px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-[118.83px] top-[64px] w-[162.828px]" data-name="Text">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2c084e] text-[45px] text-nowrap whitespace-pre">RouteMate</p>
    </div>
  );
}

function User1() {
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

function Container34() {
  return (
    <div className="bg-gradient-to-b from-[#2c084e] from-[22.596%] relative rounded-[2.98262e+07px] shrink-0 size-[48px] to-[#6412b4]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <User1 />
      </div>
    </div>
  );
}

function ChevronDown2() {
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

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-[1165.15px] px-[8px] py-0 rounded-[20px] top-[88px] w-[96.491px]" data-name="Button">
      <Container34 />
      <ChevronDown2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-44px] top-[-2px]">
      <div className="absolute bg-[#e7e1e6] h-[156px] left-[-4.8px] top-[-2px] w-[1336.8px]" />
      <Button2 />
      <Group />
      <Button3 />
      <Button4 />
      <Container33 />
      <Text6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[118.83px] not-italic text-[#3d3a3a] text-[25px] top-[109.32px] w-[194.992px]">Smart Transport</p>
      <Button5 />
    </div>
  );
}

function Container35() {
  return <div className="absolute h-[126px] left-[624.11px] top-[0.11px] w-[280px]" data-name="Container" />;
}

function Container36() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[176px] items-start pb-0 pt-[48px] px-[32px] relative w-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#e7e1e6] box-border content-stretch flex flex-col h-[329px] items-start left-[-2px] pb-0 pt-[0.889px] px-[24.889px] top-[1249px] w-[1332px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-[rgba(220,252,231,0.2)] border-solid inset-0 pointer-events-none" />
      <Container37 />
    </div>
  );
}

function Container38() {
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

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[-20.89px] top-[0.11px] w-[592px]" data-name="Container">
      <Container38 />
      <Text7 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[48px] left-[65.11px] top-[54.11px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#070e2a] text-[18px] top-[-2.11px] w-[443px]">Your intelligent companion for seamless city travel. Track buses in real-time, plan your journey, and never miss a ride.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[168px] left-[75.84px] top-[1296.89px] w-[584.107px]" data-name="Container">
      <Container39 />
      <Paragraph2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[691.63px] top-[1297px] w-[276.267px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[20px] text-black text-nowrap top-[-2.11px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[38.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[97.403px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">{`Help & Support`}</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[47.875px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[84px] left-[691.63px] top-[1337px] w-[276.267px]" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
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

function Button9() {
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

function Button10() {
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

function Button11() {
  return (
    <div className="bg-[#cf9fc8] relative rounded-[20px] shrink-0 size-[50px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[50px]">
        <Text10 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[691.63px] top-[1437px]" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
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

function Button12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[82.556px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[32px] w-[99.931px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Terms of Service</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[64px] w-[82.139px]" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2c084e] text-[14px] text-nowrap whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[168px] items-start left-[999.36px] top-[1296.89px] w-[276.267px]" data-name="Container">
      <Heading6 />
      <Container43 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[72px] top-[1296.89px]">
      <Container40 />
      <Heading5 />
      <Container41 />
      <Container42 />
      <Container44 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[20px] left-[72px] not-italic text-[#4a5565] text-[20px] top-[1515px] w-[767.627px]">© 2025 RouteMate. All rights reserved. Made with ❤️ for smart transportation.</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[-2px] top-[1249px]">
      <Footer />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[-44px] top-[-2px]">
      <App />
      <Group1 />
      <Group3 />
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-gradient-to-b from-54% from-[#f7eaff] relative size-full to-[#948c99]" data-name="Settings">
      <Group4 />
    </div>
  );
}