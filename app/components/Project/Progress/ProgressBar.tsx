export function ProgressBar({value}:{value:number}){
    return (
        <progress
            className="w-full [&::-webkit-progress-bar]:bg-[#E5E7EB] [&::-webkit-progress-value]:bg-[#D3590B] [&::-webkit-progress-bar]:rounded-[40px] [&::-webkit-progress-bar]:h-[7px] h-max"
            value={value}
            max={100}
          />
    )
}