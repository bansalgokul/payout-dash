import help from "./assets/header/help.svg"
import search from "./assets/header/search.svg"
import menu from "./assets/header/menu.svg"
import group from "./assets/header/group.svg"

const Header = () => {
	return (
		<div className="px-8 py-3 bg-white border-b-[#D9D9D9] flex gap-4 items-center justify-between">
			<div className="flex items-center gap-4">
				<span className="text-[#1A181E]  text-[15px] leading-[22px]">
					Payments
				</span>
				<div className="flex gap-1.5 items-center">
					<img
						src={help}
						width={14}
						height={14}
						alt="Help"
						className="w-[14px] h-[14px]"
					/>
					<span className="text-[#4D4D4D]  text-[12px] leading-[16px]">
						How it works
					</span>
				</div>
			</div>

			<div className="relative w-[400px] px-4 py-[9px] bg-[#F2F2F2] rounded-md flex gap-2 items-center">
				<img
					src={search}
					width={16}
					height={16}
					alt="Help"
					className="w-[16px] h-[16px] cursor-pointer"
				/>
				<input
					className=" bg-[#F2F2F2] outline-none w-full text-[#808080] text-[15px] leading-[22px]"
					placeholder="Search features, tutorials, etc."
				/>
			</div>

			<div className="flex items-center justify-end gap-3">
				<button className="w-[40px] h-[40px] rounded-full p-[10px] bg-[#E6E6E6]">
					<img
						src={group}
						width={20}
						height={20}
						alt="Group"
						className="w-[20px] h-[20px] "
					/>
				</button>
				<button>
					<img
						src={menu}
						width={40}
						height={40}
						alt="Menu"
						className="w-[40px] h-[40px] "
					/>
				</button>
			</div>
		</div>
	)
}
export default Header
