import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";

const items = [
	<SidebarItem>Dashboard</SidebarItem>,
	<SidebarItem>Profile</SidebarItem>,
	<SidebarItem>Settings</SidebarItem>,
];

const ProductsMain = () => {
	return (
		<Sidebar content={items}>
			<YourAppContent />
		</Sidebar>
	);
};

export default ProductsMain;
