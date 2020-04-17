
$(document).ready(function() {
	
	$.ajax({
	
		url: "https://api.github.com/users",
		
	}).then(function(data) {
		
		console.log(data);

		var contents = "";
		$.each(data, function(idx) {
			
			contents +=  "<tr>";
			contents += "<td>" + data[idx].id + "</td>";
			contents += "<td>" + data[idx].login + "</td>";
			contents += "<td class='url' id='url" + idx + "'>" + data[idx].followers_url + "</td>";
			contents += "<td class='num' id='num" + idx + "'> <b>?</b> </td>";
			contents += "<td> <img src='" + data[idx].avatar_url + "' width=50 height=50 /></td>";
			contents += "</tr>";
		});
		
		// console.log(contents);
		$("#usersTable").append(contents);
		
	});
	
});

// click the url, show the number of followers
$(document).ready(function() {

	console.log("Loaded jQuery!");
	
	$(document).on("click", ".url", function(event) {

		var urlid = event.target.id;
		var numid = urlid.replace("url", "num");
		
		var url = event.target.innerText;
		var ajaxRequestUrl = url.substring(0, url.length - 10);
		
		// test script
		console.log("Clicked the url id: " + urlid + " and the related followers id: " + numid);
		console.log(event.target.innerText);
		console.log(ajaxRequestUrl);
		
		$.ajax({
			type: "GET",
			url: ajaxRequestUrl,
			dataType: "json",
			success: function(data) {
						$("#" + numid).html("<b>" + data.followers + "</b>");
					}
		});
	});
	
});

// click the question mark, and get the number of followers
$(document).ready(function() {

	console.log("Loaded jQuery!");
	
	$(document).on("click", ".num", function(event) {

		var numid = event.target.id;
		
		var urlid = numid.replace("num", "url");
		var url = $("#" + urlid).text();
		var ajaxRequestUrl = url.substring(0, url.length - 10);
		
		// test script
		console.log("Clicked the num id: " + numid + " and the related url id: " + urlid);
		console.log(url);
		console.log(ajaxRequestUrl);
		
		$.ajax({
			type: "GET",
			url: ajaxRequestUrl,
			dataType: "json",
			success: function(data) {
					$("#" + numid).html("<b>" + data.followers + "</b>");
				}
			});
	});
	
});