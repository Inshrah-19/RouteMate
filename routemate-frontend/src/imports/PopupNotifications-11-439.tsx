import svgPaths from "./svg-ylfdzghjz9";

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#9f2d00] text-[16px] text-nowrap top-[-2.11px] whitespace-pre">Bus Update</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#9f2d00] text-[14px] text-nowrap whitespace-pre">Bus 12A is delayed by 5 minutes</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-5.893%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p33e38200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-5.893%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p38fdac00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <X />
      </div>
    </button>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex h-[48px] items-start justify-between ml-0 mt-0 relative w-[230.625px]" data-name="Container">
      <Container />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[23.986px] relative rounded-[16px] shrink-0 w-[90.611px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.986px] items-start px-[12px] py-[4px] relative w-[90.611px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#9f2d00] text-[12px] text-nowrap whitespace-pre">View Details</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <button className="bg-[rgba(255,255,255,0.5)] cursor-pointer h-[23.986px] relative rounded-[16px] shrink-0 w-[65.028px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.986px] items-start px-[12px] py-[4px] relative w-[65.028px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#9f2d00] text-[12px] text-nowrap whitespace-pre">Dismiss</p>
      </div>
    </button>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[8px] h-[23.986px] items-start ml-0 mt-[60px] relative w-[230.625px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function PopupNotifications() {
  return (
    <div className="bg-[#ffd5a0] relative rounded-[20px] size-full" data-name="PopupNotifications">
      <div aria-hidden="true" className="absolute border-[#ffd6a7] border-[0.889px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[0.889px] pt-[16.889px] px-[16.889px] relative size-full">
          <Group />
        </div>
      </div>
    </div>
  );
}