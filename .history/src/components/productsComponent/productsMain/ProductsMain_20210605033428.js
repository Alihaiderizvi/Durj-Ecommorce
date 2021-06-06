import React from "react";

const ProductsMain = () => {
	return <div className='products__main'></div>;
};

export default ProductsMain;

import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import { SampleBase } from "./sample-base";

export class ResponsivePanel extends SampleBase {
	constructor() {
		super(...arguments);
		this.data = [
			{
				nodeId: "01",
				nodeText: "Installation",
				iconCss: "icon-microchip icon",
			},
			{
				nodeId: "05",
				nodeText: "API Reference",
				iconCss: "icon-code icon",
				nodeChild: [
					{
						nodeId: "05-01",
						nodeText: "Calendar",
						iconCss: "icon-circle-thin icon",
					},
					{
						nodeId: "05-02",
						nodeText: "DatePicker",
						iconCss: "icon-circle-thin icon",
					},
					{
						nodeId: "05-03",
						nodeText: "DateTimePicker",
						iconCss: "icon-circle-thin icon",
					},
					{
						nodeId: "05-04",
						nodeText: "DateRangePicker",
						iconCss: "icon-circle-thin icon",
					},
					{
						nodeId: "05-05",
						nodeText: "TimePicker",
						iconCss: "icon-circle-thin icon",
					},
					{
						nodeId: "05-06",
						nodeText: "SideBar",
						iconCss: "icon-circle-thin icon",
					},
				],
			},
		];
		this.width = "290px";
		this.target = ".main-content";
		this.mediaQuery = "(min-width: 600px)";
		this.fields = {
			dataSource: this.data,
			id: "nodeId",
			text: "nodeText",
			child: "nodeChild",
		};
	}
	render() {
		return (
			<div className='control-section sidebar-tree'>
				<div id='wrapper'>
					<div className='col-lg-12 col-sm-12 col-md-12'>
						<div className='main-header' id='header-section'>
							<ul className='header-list'>
								<li
									className='float-left header-style icon-menu'
									id='hamburger'
									onClick={this.toggleClick.bind(this)}
									ref='sidbarToggle'
								/>
								<li className='float-left header-style nav-pane'>
									<b>Navigation Pane</b>
								</li>
							</ul>
						</div>
						<SidebarComponent
							id='sidebar-treeview'
							ref={(Sidebar) => (this.sidebarobj = Sidebar)}
							width={this.width}
							target={this.target}
							mediaQuery={this.mediaQuery}
						>
							<div className='main-menu'>
								<div className='table-content'>
									<p className='main-menu-header'>TABLE OF CONTENTS</p>
								</div>
								<div>
									<TreeViewComponent
										id='main-treeview'
										fields={this.fields}
										expandOn='Click'
									/>
								</div>
							</div>
						</SidebarComponent>
						<div className='main-content' id='main-text'>
							<div className='sidebar-content'>
								<h2 className='sidebar-heading'>
									{" "}
									Responsive Sidebar With Treeview
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	//toggle the sidebar
	toggleClick() {
		this.sidebarobj.toggle();
	}
}

render(<ResponsivePanel />, document.getElementById("sample"));
