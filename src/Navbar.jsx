import nishyan from "./assets/navbar/nishyan.png"
import wallet from "./assets/navbar/wallet.svg"
import chevronDown from "./assets/navbar/chevronDown.svg"
import { navbarIcons } from "./assets/navbar/index"
import { useState } from "react"

// cursor display
// hover and focus effects
// dummy links and buttons

const Navbar = () => {
	const [activePage] = useState("Payments")

	return (
		<>
			{/* Navbar */}
			<div className="w-[224px] bg-[#1E2640] py-4 px-[10px] flex flex-col gap-4 text-white">
				{/* Nav Top */}
				<div className="grow flex flex-col gap-6 items-center">
					{/* Company Icons */}
					<div className="flex gap-3 items-center mx-2 w-[192px]">
						<div className="w-10 h-10 rounded-[4px] overflow-clip">
							<img
								src={nishyan}
								width={200}
								height={180}
								alt="Nishyan "
								className="w-10 h-10"
							/>
						</div>
						<div className="flex flex-col gap-1 grow">
							<span className="font-medium text-[15px] leading-[22px]">
								Nishyan
							</span>
							<a
								href="#"
								className="font-normal text-[13px] leading-[16px] opacity-80 underline"
							>
								Visit Store
							</a>
						</div>

						<img
							src={chevronDown}
							width={20}
							height={20}
							alt="down"
						/>
					</div>
					{/* Pages */}
					<div className="flex flex-col gap-1 w-full">
						{pages.map((page) => {
							return (
								<button
									key={page.name}
									className={`flex gap-3 py-2 px-4 rounded-[4px] w-full ${
										activePage === page.name
											? "bg-white/10"
											: "opacity-80"
									} hover:opacity-100`}
								>
									<img
										src={page.icon}
										width={20}
										height={20}
										alt={page.name}
										className=""
									/>
									<span className="">{page.name}</span>
								</button>
							)
						})}
					</div>
				</div>
				{/* Nav Button */}
				<div className="w-[192px] mx-auto px-3 py-1.5 bg-[#353C53] rounded-[4px] flex gap-3 items-center">
					<div className="p-1.5 bg-white/10 w-fit h-fit rounded">
						<img
							src={wallet}
							width={24}
							height={24}
							alt="down"
							className="w-6 h-6"
						/>
					</div>
					<div className="flex flex-col gap-0.5 grow">
						<span className="font-normal text-[13px] leading-[16px] opacity-80">
							Available credits
						</span>
						<span className="font-medium text-[16px] leading-[24px]">
							220.10
						</span>
					</div>
				</div>
			</div>
		</>
	)
}
export default Navbar

const pages = [
	{
		name: "Home",
		icon: navbarIcons.home,
	},
	{
		name: "Orders",
		icon: navbarIcons.orders,
	},
	{
		name: "Products",
		icon: navbarIcons.products,
	},
	{
		name: "Delivery",
		icon: navbarIcons.delivery,
	},
	{
		name: "Marketing",
		icon: navbarIcons.marketing,
	},
	{
		name: "Analytics",
		icon: navbarIcons.analytics,
	},
	{
		name: "Payments",
		icon: navbarIcons.payments,
	},
	{
		name: "Tools",
		icon: navbarIcons.tools,
	},
	{
		name: "Discounts",
		icon: navbarIcons.discounts,
	},
	{
		name: "Audience",
		icon: navbarIcons.audience,
	},
	{
		name: "Appearance",
		icon: navbarIcons.appearance,
	},
	{
		name: "Plugins",
		icon: navbarIcons.plugins,
	},
]
