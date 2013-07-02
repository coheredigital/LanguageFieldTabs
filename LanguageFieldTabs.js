$(function(){

	var $langField = $(".Inputfield").has(".LanguageSupport");
	$langField.each(function(){

		var $this = $(this);

		var $langHeader =  $this.children(".ui-widget-header");
		var $langContent =  $this.children(".ui-widget-content");
		var $langSupport = $langContent.children(".LanguageSupport");


		if ( $langSupport.length > 1) { //should avoid applying to single language field like Language "alt" fields


			var fieldID = $this.attr("id"); // we will later combine the input ID with the index to create unique anchors for jqueryui tabs to use
			var i = 0;

			// markup variables
			var LangTabsBox = "<div class='langTabs'><ul></ul></div>";
			


			// add the markup the LangTabs will go inside
			$langContent.append(LangTabsBox);
			var $langTabsBox = $this.find(".langTabs"); 
			var $langTabs = $langTabsBox.children("ul"); 


			$langSupport.each(function(){

				var $this = $(this);


				var label = $this.children(".LanguageSupportLabel").text();
				console.log(label);
				var anchor = fieldID+i;

				var $textarea = $this.find("textarea");
				var $input = $this.find("input");

				var fieldValueClass;

				if ($textarea.length > 0 && $textarea.text()) fieldValue = "";
				else if($input.length > 0 && $input.val()) fieldValue = "";
				else fieldValueClass = "langTabEmpty";
				

				$langTabs.append("<li><a class='"+fieldValueClass+"' href='#"+anchor+"'>"+label+"</a></li>");
				$this.attr("id", anchor).appendTo($langTabsBox);

				i++;
			});

			var $span = $("<span></span>")
				.attr('title', config.LanguageFieldTabs.title)
				.attr('class', 'langTabsToggle ui-icon ui-icon-arrowthickstop-1-s'); 

			$langContent.addClass("langTabsContainer").siblings("label").prepend($span); 

			$langTabsBox.tabs();
		}

		// state toggle button to turn tabs on and off
		// will add class of "langTabsOff" so we can hide the menu markup

		var $langTabsToggle = $langHeader.children(".langTabsToggle");
		$langTabsToggle.toggle(function(){

			$langContent.removeClass("langTabsContainer");
			$this.addClass('langTabsOff');
			$langTabsBox.tabs( "destroy" );
			$(this).attr("title","Collapse Language Tabs").removeClass("ui-icon-arrowthickstop-1-s").addClass("ui-icon-arrowthickstop-1-n");
		}, function(){
			$langContent.addClass("langTabsContainer");
			$this.removeClass('langTabsOff');
			$langTabsBox.tabs();
			$(this).attr("title","Expand Language Tabs").addClass("ui-icon-arrowthickstop-1-s").removeClass("ui-icon-arrowthickstop-1-n");
		});

		$langTabsToggle.mouseout(function(){
			$(this).removeClass("ui-state-active");
		});
	});




}); 
