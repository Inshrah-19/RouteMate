import svgPaths from "./svg-zn3doxlc2c";
import imgContainer from "figma:asset/f846b2791aa5e582a48cd7c426103951f47b8c90.png";
import imgSignupPage from "figma:asset/b90bc31bcff470e02c5a10cec19d4fa4a5c1ceda.png";

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[31.986px] items-start left-0 top-[152px] w-[382.222px]" data-name="Heading 2">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-center text-white">Join RouteMate</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[191.99px] w-[382.222px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[190.89px] not-italic text-[16px] text-center text-nowrap text-white top-[-2.11px] translate-x-[-50%] whitespace-pre">Create your account and start your smart journey</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[165px] left-[95.11px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-42.89px] w-[191px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgContainer} />
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] h-[215.986px] ml-0 mt-0 relative w-[382.222px]" data-name="Container">
      <Heading />
      <Paragraph />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[191.11px] not-italic text-[#c27bb8] text-[40px] text-center text-nowrap top-[96.11px] translate-x-[-50%] whitespace-pre">RouteMate</p>
      <Container />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Full Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[57.778px] left-0 rounded-[20px] top-0 w-[382.222px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-[382.222px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Enter your full name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="User">
          <path d={svgPaths.p27365a00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.778px] items-center left-0 pl-[16px] pr-0 py-0 top-0 w-[36px]" data-name="Container">
      <User />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[57.778px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.778px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Label />
      <Container3 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Email Address</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[57.778px] left-0 rounded-[20px] top-0 w-[382.222px]" data-name="Email Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-[382.222px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Enter your email</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Mail">
          <path d={svgPaths.p10fa180} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d={svgPaths.pb1ea600} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.778px] items-center left-0 pl-[16px] pr-0 py-0 top-0 w-[36px]" data-name="Container">
      <Mail />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[57.778px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.778px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container6 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Password</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[57.778px] left-0 rounded-[20px] top-0 w-[382.222px]" data-name="Password Input">
      <div className="box-border content-stretch flex h-[57.778px] items-center overflow-clip px-[48px] py-[16px] relative rounded-[inherit] w-[382.222px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Lock">
          <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d={svgPaths.p188ca400} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d={svgPaths.p1bf79e00} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex h-[57.778px] items-center left-0 pl-[16px] pr-0 py-0 top-0 w-[36px]" data-name="Container">
      <Lock />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_88)" id="Eye">
          <path d={svgPaths.p3d74ed00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_88">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[57.778px] items-center left-[346.22px] top-0 w-[36px]" data-name="Button">
      <Eye />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[57.778px] relative shrink-0 w-full" data-name="Container">
      <PasswordInput />
      <Container8 />
      <Button />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[89.778px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container9 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b from-[#6412b4] h-[56px] relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[rgba(44,8,78,0.667)] w-full" data-name="Button">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[103px] not-italic text-[24px] text-nowrap text-white top-[13.89px] whitespace-pre">Create Account</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[397.333px] items-start relative shrink-0 w-full" data-name="Form">
      <Container4 />
      <Container7 />
      <Container10 />
      <Button1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[0.889px] left-0 top-[9.56px] w-[382.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9b5691] border-[0.889px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#9b5691] box-border content-stretch flex h-[20px] items-start left-[130.08px] px-[16px] py-0 top-0 w-[122.056px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Or continue as</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Text />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[59.556px] relative rounded-[20px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[111.78px] not-italic text-[20px] text-nowrap text-white top-[16.67px] whitespace-pre">Continue as Guest</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[37.22px] top-[1.24px] w-[221px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Already have an account?</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[24px] left-[258.4px] top-0 w-[49.792px]" data-name="Button">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#ac72a1] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Sign in</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Button3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[135.556px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Button2 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[rgba(100,18,180,0.95)] gap-[32px] h-[878.653px] items-start left-[483px] pb-[0.889px] pt-[32.889px] px-[32.889px] rounded-[24px] to-[rgba(44,8,78,0.95)] top-[36px] w-[448px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(220,252,231,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Group />
      <Form />
      <Container14 />
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="relative size-full" data-name="SignupPage">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[143.46%] left-[0.14%] max-w-none top-[-1.54%] w-full" src={imgSignupPage} />
      </div>
      <Container15 />
    </div>
  );
}