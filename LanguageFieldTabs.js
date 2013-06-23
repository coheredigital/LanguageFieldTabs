$(function(){
	// alert("loaded");
	var $langField = $(".Inputfield > .ui-widget-content").has(".LanguageSupport");
	$langField.each(function(){
		var $this = $(this);
		var $langBox = $this.children(".LanguageSupport");

		var fieldID = $this.parent(".Inputfield").attr("id");

		// markup variables
		var LangTabsBox = "<div class='langTabs'><ul></ul></div>";
		var i = 0;

		// add the markup the LangTabs will go inside
		$this.prepend(LangTabsBox);
		var $langTabsBox = $this.children(".langTabs"); 
		var $langTabs = $langTabsBox.children("ul"); 


		$langBox.each(function(){

			var $this = $(this);


			var label = $this.children("label").text();
			var anchor = fieldID+i;

			$langTabs.append("<li><a href='#"+anchor+"'>"+label+"</a></li>");
			$this.attr("id", anchor).appendTo($langTabsBox);

			i++;
		});
		$langTabsBox.tabs();
	});

});