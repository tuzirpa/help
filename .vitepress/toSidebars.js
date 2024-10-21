const path = require("path");
const fs = require("fs");

function stringToMd(str) {
	// {} 花括号
	// [] 方括号
	// () 括号
	// # 标题
	// + 加号
	// - 减号
	// * 星号
	// _ 下划线
	// ` 反引号
	// < 箭头
	// > 箭头
	if (!str) {
		return "";
	}
	str = str.replace(/([\{\}\[\]\(\)<>\`\+\-\*\_\#])/g, "\\$1"); // 转义 {{}}')
	return str.replace(/\n/g, "<br/>");
}

function getInputMdContent(inputs) {
	if (Object.keys(inputs).length === 0) {
		return;
	}
	let inputsTables = ` | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | \n`;
	inputsTables += ` | ------------- | ------------- | ------------- | ------------- |\n`;
	for (const key in inputs) {
		if (Object.prototype.hasOwnProperty.call(inputs, key)) {
			const input = inputs[key];
			inputsTables += ` | ${key} | ${input.addConfig.label} | ${
				input.type
			} | ${stringToMd(input.addConfig.placeholder)} |\n`;
		}
	}
	return inputsTables;
}

function getOutputMdContent(outputs) {
	if (Object.keys(outputs).length === 0) {
		return;
	}
	let tables = ` | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | \n`;
	tables += ` | ------------- | ------------- | ------------- | ------------- |\n`;
	for (const key in outputs) {
		if (Object.prototype.hasOwnProperty.call(outputs, key)) {
			const input = outputs[key];
			tables += ` | ${key} | ${input.addConfig.label} | ${
				input.type
			} | ${stringToMd(input.addConfig.placeholder)} |\n`;
		}
	}
	return tables;
}

/**
 * 获取指令 markdown 内容
 * @param {*} item
 * @returns
 */
function getDirectiveMdContent(item) {
	const config = item.config;
	const inputsTables = getInputMdContent(config.inputs);
	const outputsTables = getOutputMdContent(config.outputs);
	const mdContent = `\
# 指令名称：${config.displayName}
## 指令说明：${stringToMd(config.comment)}
## 指令输入：

${inputsTables ?? "#### 没有输入参数"}

## 指令输出：

${outputsTables ?? "#### 没有输出参数"}
	`;

	return mdContent;
}

/**
 * 指令转换侧边栏
 * @param item {name: string, remark: string, localFile: string, children: Array<any>}
 * @returns
 */
function toSidebars(item) {
	if (!item) return {};
	if (!item.children) {
		// 说明是叶子节点，直接返回侧边栏项,自动生成 md文件
		//这边需要导入js文件，解析指令内容
		const itemModule = require(path.join(baseDir, item.localFile));
		console.log(itemModule);
		const config = itemModule.config;
		const mdContent = getDirectiveMdContent(itemModule);
		// 写入md文件
		fs.writeFileSync(
			path.join(
				mdDirectiveBaseDir,
				`${item.localFile.substring(1).replace(".js", "")}.md`
			),
			mdContent
		);
		const cItem = {
			text: config.displayName,
			collapsed: false,
			link: item.localFile.substring(1).replace(".js", ""),
		};
		return cItem;
	}
	var sidebar = {};

	sidebar.text = item.name;
	sidebar.base = item.base;
	sidebar.collapsed = false;
	item.children.forEach(function (child) {
		const childSidebar = toSidebars(child);
		if (childSidebar) {
			sidebar.items = sidebar.items || [];
			sidebar.items.push(childSidebar);
		}
	});
	return sidebar;
}

const baseDir = "C:\\Users\\lwd\\AppData\\Roaming\\tuzi_rpa\\userApp\\system";
const mdBaseDir = "E:\\project_tuzirobot\\tuzi_robot_help";
const mdDirectiveBaseDir = path.join(mdBaseDir, "src", "directive");
const dirctiveJson = require(path.join(baseDir, "directive.json"));

const root = {
	name: "指令",
	base: "/directive",
	text: "指令参考",
	children: dirctiveJson,
};
const items = toSidebars(root);
console.log(JSON.stringify(items, null, 2));
fs.writeFileSync(
	path.join(mdBaseDir, ".vitepress", "directives.json"),
	JSON.stringify(items, null, 2)
);
