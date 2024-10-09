import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				{/* <Header /> */}
				<div className="flex-1 min-h-0 overflow-auto bg-[#101204]">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
