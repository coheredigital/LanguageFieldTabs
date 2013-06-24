$(function(){
	// alert("loaded");
	var $langField = $(".Inputfield > .ui-widget-content").has(".LanguageSupport");
	$langField.each(function(){
		var $this = $(this);
		console.log($this.children(".LanguageSupport").length);
		var $langBox = $this.children(".LanguageSupport");
		if ( $langBox.length > 1) { //should avoid applying to single language field like Languge "alt" fields

			var fieldID = $this.parent(".Inputfield").attr("id");

			// markup variables
			var LangTabsBox = "<div class='langTabs'><ul></ul></div>";
			var i = 0;

			// add the markup the LangTabs will go inside
			$this.append(LangTabsBox);
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

			$this.addClass("LangTabsContainer");

			$langTabsBox.tabs();
		}

	});

});