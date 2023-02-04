//Theme selector:

const LightThemeButton = document.getElementById("LightModeButton");
const NightThemeButton = document.getElementById("NightModeButton");
const AutoThemeButton = document.getElementById("AutoModeButton");
const html = document.documentElement;

function LightModeSelect() {
	LightThemeButton.classList.add("selected")
	NightThemeButton.classList.remove("selected")
	AutoThemeButton.classList.remove("selected")

	html.className = 'LightMode'
}

function NightModeSelect() {
	LightThemeButton.classList.remove("selected")
	NightThemeButton.classList.add("selected")
	AutoThemeButton.classList.remove("selected")

	html.className = 'NightMode'
}

function AutoModeSelect() {
	LightThemeButton.classList.remove("selected")
	NightThemeButton.classList.remove("selected")
	AutoThemeButton.classList.add("selected")

	html.className = 'AutoMode'
}

// Sidebar:

const Sidebar = document.getElementById("mySidebar");
const Body = document.querySelectorAll("body");

function SidebarOpen () {
	Sidebar.classList.remove("close");
	Sidebar.classList.add("open");
}

function SidebarClose () {
	Sidebar.classList.remove("open");
	Sidebar.classList.add("close");
}

function SidebarBut() {
	if (Sidebar.classList.contains("close")) {
		SidebarOpen ();
	} 
	else if (Sidebar.classList.contains("open")) {
		SidebarClose ();
	}
	else {
		Sidebar.classList.add("open");
	}
}

function SidebarForciblyClose() {
	if (Sidebar.classList.contains("open")) {
		SidebarClose ();
	}
}