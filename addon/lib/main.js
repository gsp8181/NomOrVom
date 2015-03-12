var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
const {Cc,Ci, components} = require("chrome");

pageMod.PageMod({
    include: "https://www.just-eat.co.uk/area/*",
    //include: "http://localhost/*",
	contentStyleFile: [self.data.url("jquery-ui-1.11.4/jquery-ui.min.css"), self.data.url("nomorvom.css")],
    contentScriptOptions: {prefixDataURI: self.data.url("")},
	contentScriptFile: [self.data.url("jquery-2.1.3/jquery-2.1.3.min.js"), self.data.url("jquery-ui-1.11.4/jquery-ui.min.js"), self.data.url("api.js")],
	contentScriptWhen: "ready"
});

/*


	onAttach: function(worker) {
		worker.port.emit("getElements", "");
		worker.port.on("gotElement", function(elementContent) {
			console.log(elementContent);
			let url = "http://api.ratings.food.gov.uk/Regions";
			let request = components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]
			.createInstance(components.interfaces.nsIXMLHttpRequest);
			request.onload = function(aEvent) {
  				window.alert("Response Text: " + aEvent.target.responseText);
			};
			request.onerror = function(aEvent) {
   				window.alert("Error Status: " + aEvent.target.status);
			};
			request.open("GET", url, true);
		});
	}
*/