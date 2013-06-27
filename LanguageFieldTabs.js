$(function(){
	// alert("loaded");
	var $langField = $(".Inputfield > .ui-widget-content").has(".LanguageSupport");
	$langField.each(function(){
		var $this = $(this);

		// console.log($this.children(".LanguageSupport").length);
 
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

				

				var $textarea = $this.find("textarea");
				var $input = $this.find("input");

				var fieldValueClass;
				if ($textarea.length > 0 && $textarea.text()) {
					fieldValue = "";
					console.log("TEXTAREA: TRUE");
				}
				else if($input.length > 0 && $input.val()){
					fieldValue = "";
					console.log("INPUT: TRUE");
				}
				else{
					console.log("FALSE");
					fieldValueClass = "langTabEmpty";
				}

				$langTabs.append("<li><a class='"+fieldValueClass+"' href='#"+anchor+"'>"+label+"</a></li>");
				$this.attr("id", anchor).appendTo($langTabsBox);

				i++;
			});

			$this.addClass("langTabsContainer").prepend("<span title='Expand Language Tabs' class='langTabsToggle ui-button ui-state-default'><span class='ui-icon ui-icon-arrowstop-1-s'></span></span>");

			$langTabsBox.tabs();
		}

		// state toggle button to turn tabs on and off
		// will add class of "langTabsOff" so we can hide the menu markup

		var $langTabsToggle = $(".langTabsToggle");
		$langTabsToggle.toggle(function(){
			$(this).siblings(".langTabs").addClass('langTabsOff').tabs( "destroy" );
			$(this).attr("title","Collapse Language Tabs").children(".ui-icon").removeClass("ui-icon-arrowstop-1-s").addClass("ui-icon-arrowstop-1-n");
		}, function(){
			$(this).siblings(".langTabs").removeClass('langTabsOff').tabs();
			$(this).attr("title","Expand Language Tabs").children(".ui-icon").addClass("ui-icon-arrowstop-1-s").removeClass("ui-icon-arrowstop-1-n");
		});

		$langTabsToggle.mouseout(function(){
			$(this).removeClass("ui-state-active");
		});
	});




});