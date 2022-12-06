let data = {
	username: "colinaut", // No leading @ here
	homeLabel: "colinaut.com",
	homeUrl: "https://www.colinaut.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/2`;

module.exports = data;