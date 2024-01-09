import arrow from "./assets/main/arrow.svg"
import download from "./assets/main/download.svg"
import sort from "./assets/main/sort.svg"
import previous from "./assets/main/previous.svg"
import next from "./assets/main/next.svg"
import search from "./assets/header/search.svg"
const Hero = () => {
	return (
		<div className="m-8 flex flex-col gap-8">
			<div className="flex flex-col gap-6">
				<div className="flex justify-between">
					<span className="font-medium text-[20px] leading-[28px] text-[#1A181E]">
						Overview
					</span>
					<button className="bg-white rounded border border-[#D9D9D9] flex items-center text-[#4D4D4D] w-[137px] h-[36px] px-[14px] justify-between">
						<span className="font-normal text-[16px] leading-[24px] ">
							Last Month
						</span>
						<img
							src={arrow}
							width={16}
							height={16}
							alt="Arrow Down"
							className="w-[16px] h-[16px]"
						/>
					</button>
				</div>
				<div className="grid grid-cols-2 gap-5">
					<div className="bg-white p-5 card-shadow rounded-lg flex flex-col gap-4">
						<span className="text-[16px] leading-[24px] text-[#4D4D4D]">
							Online orders
						</span>
						<span className="font-medium text-[32px] leading-[38px] text-[#1A181E]">
							231
						</span>
					</div>
					<div className="bg-white p-5 card-shadow rounded-lg flex flex-col gap-4">
						<span className="text-[16px] leading-[24px] text-[#4D4D4D]">
							Amount Received
						</span>
						<span className="font-medium text-[32px] leading-[38px] text-[#1A181E]">
							₹23,92,312.19
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<span className=" text-[20px] leading-[28px] text-[#1A181E]">
					Transactions | This Month
				</span>
				<div className="p-3 pb-6 bg-white rounded-lg card-shadow flex flex-col gap-3">
					<div className="flex justify-between items-center">
						<div className="relative w-[248px] h-10 px-4 py-2.5 border-[#D9D9D9] border rounded flex gap-2 items-center">
							<img
								src={search}
								width={14}
								height={14}
								alt="Search"
								className="w-[14px] h-[14px] "
							/>
							<input
								className="outline-none w-full text-[#999999] text-[14px] leading-[20px]"
								placeholder="Search by order ID..."
							/>
						</div>
						<div className="flex gap-3">
							<button className="bg-white rounded border border-[#D9D9D9] flex items-center text-[#4D4D4D] px-3 py-2 gap-1.5 h-9">
								<span className="font-normal text-[16px] leading-[24px] ">
									Sort
								</span>
								<img
									src={sort}
									width={16}
									height={16}
									alt="Sort"
									className="w-[16px] h-[16px]"
								/>
							</button>
							<button className="bg-white rounded border border-[#D9D9D9] text-[#4D4D4D] w-9 h-9  p-2">
								<img
									src={download}
									width={20}
									height={20}
									alt="Download"
									className="w-[20px] h-[20px]"
								/>
							</button>
						</div>
					</div>

					<table className=" text-[14px] leading-[20px]">
						<thead className=" font-medium text-[#4D4D4D]">
							<tr className="grid grid-cols-4 items-center px-3 py-2.5 gap-10 bg-[#F2F2F2] rounded ">
								<th className="text-left font-medium">
									Order ID
								</th>
								<th className="text-left font-medium">
									Order Date
								</th>
								<th className="text-right font-medium">
									Order Amount
								</th>
								<th className="text-right font-medium">
									Transaction Fees
								</th>
							</tr>
						</thead>
						<tbody className="font-normal text-[#1A181E]">
							{transactionsWithFees.map((t, index) => {
								return (
									<tr
										key={index}
										className="grid grid-cols-4 items-center px-3 py-3.5 gap-10 border-b border-[#E6E6E6]"
									>
										<td className="text-left font-medium text-[#146EB4]">
											<a href="#">{t.id}</a>
										</td>
										<td className="text-left">{t.date}</td>
										<td className="text-right">
											₹{t.amount}
										</td>
										<td className="text-right">
											₹{t.fees}
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>

					<div className="mx-auto flex gap-6 ">
						<button className="bg-white rounded border border-[#D9D9D9] flex items-center text-[#4D4D4D] p-1.5 pr-3 gap-1.5">
							<img
								src={previous}
								width={18}
								height={18}
								alt="Previous"
								className="w-[18px] h-[18px]"
							/>
							<span className="font-medium text-[14px] leading-[20px] ">
								Previous
							</span>
						</button>
						<div className="flex gap-2 text-[14px] leading-[20px] text-[#4D4D4D] items-center">
							<button className={`py-0.5 rounded`}>
								<span>1</span>
							</button>
							<button disabled className={`py-0.5 rounded`}>
								<span>...</span>
							</button>
							<button
								className={`py-1.5 text-white px-2 rounded bg-[#146EB4]`}
							>
								<span>10</span>
							</button>
							{Array.from(
								{
									length: 8,
								},
								(_, index) => (
									<button
										key={index}
										className={`py-0.5 rounded`}
									>
										<span>{11 + index}</span>
									</button>
								)
							)}
						</div>
						<button className="bg-white rounded border border-[#D9D9D9] flex items-center text-[#4D4D4D] p-1.5 pl-3 gap-1.5">
							<span className="font-medium text-[14px] leading-[20px] ">
								Next
							</span>
							<img
								src={next}
								width={18}
								height={18}
								alt="next"
								className="w-[18px] h-[18px]"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero

const baseTransaction = {
	id: "#281209",
	date: "7 July, 2023",
	amount: 1278.23,
}

const transactions = Array(19).fill({ ...baseTransaction })

// If you want to calculate fees for each transaction, you can use map
const transactionsWithFees = transactions.map((transaction) => ({
	...transaction,
	fees: (transaction.amount * 0.0172).toFixed(0),
}))
