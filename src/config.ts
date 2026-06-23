import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "include_blog_h", //博客主标题
	subtitle: "Welcome！", //博客副标题。可选，在首页会显示为“主标题 - 副标题
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.博客显示语言
	themeColor: {
		//themeColor：hue 表示博客主题色
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		//banner：src：即banner图片，支持http/https URL
		enable: true,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		//favicon：src：即网站图标，支持http/https URL
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	//NavBarConfig 用于配置导航栏链接
	links: [
		//links：即友情链接，这些链接在导航栏上
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	//ProfileConfig 用于配置个人资料区域的链接
	avatar: "assets/images/demo-avatar.png", // avatar：你的头像 Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "include_zl_h", //name：你的名字
	bio: "苍生皆平庸，蝼蚁望晴空，秋去惹惊鸿，冬来归江东。", //bio：个性签名，会显示在头像和名字下方
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam", //你可以前往 icones.js 搜索想要的图标。例如 QQ 可以填写 fa6-brands:qq。
			// Fuwari 默认支持 fa6-brands、fa6-regular、fa6-solid、material-symbols 等类型，必要时也可以在 astro.config.mjs 中继续扩展
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
