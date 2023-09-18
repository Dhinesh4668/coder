import React from "react";

function article_1() {
	return {
		date: "4 Aprl 2021",
		title: "The Vpn",
		description:
			"Unlock online freedom and security with a VPN. Safeguard your data, access geo-restricted content, and browse anonymously.",
		keywords: [
			"the vpn",
			"dhinesh4668",
			"Dhineshkumar",
			"dhineshkumar thirupathi",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "21 mar 2021",
		title: "The search engine",
		description:
			"Discover the power of search engines. Explore their role in finding information and navigating the vast digital landscape efficiently.",
		keywords: [
			"the vpn",
			"dhinesh4668",
			"Dhineshkumar",
			"dhineshkumar thirupathi",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
