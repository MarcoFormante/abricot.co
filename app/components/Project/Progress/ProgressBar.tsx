export function ProgressBar({value}:{value:number}){
    return (
        <progress
            className="w-full [&::-webkit-progress-bar]:bg-[#E5E7EB] [&::-webkit-progress-value]:bg-[#D3590B] h-[7px] [&::-moz-progress-bar]:bg-[#D3590B] appearance-none [&::-moz-progress-bar]:rounded-[40px] [&::-moz-progress-bar]:h-[7px] [&::-moz-progress-value]:h-[7px]  [&::-webkit-progress-bar]:rounded-[40px] [&::-webkit-progress-bar]:h-[7px]"
            value={value}
            max={100}
          />
    )
}