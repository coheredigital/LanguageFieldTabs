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
				// console.log(label);
				var anchor = fieldID+i;

				var $textarea = $this.find("textarea");
				var $input = $this.find("input");
				var $textareaInline = $this.find("div[contenteditable]"); 
				var fieldValueClass = 'langTabEmpty';

				if($textarea.length > 0) { 
					if($textarea.text().length > 0) fieldValueClass = '';

				} else if($textareaInline.length > 0) { 
					if($textareaInline.text().length > 0) fieldValueClass = '';

				} else if($input.length > 0 && $input.eq(0).val().length > 0) {
					if($input.attr('name').indexOf('_pw_page_name') === 0) {
						// defer to the "active" checkbox in determining whether it shows empty class or not
						var $checkbox = $input.next('label').children('input[type=checkbox]'); 	
						if(!$checkbox.size() || $checkbox.is(":checked")) fieldValueClass = '';
					} else {
						fieldValueClass = '';
					}
				}
				
				$langTabs.append("<li><a class='"+fieldValueClass+"' href='#"+anchor+"'>"+label+"</a></li>");
				$this.attr("id", anchor).appendTo($langTabsBox);

				i++;
			});

			var $span = $("<span></span>")
				.attr('title', config.LanguageFieldTabs.title)
				.attr('class', 'langTabsToggle ui-icon ui-icon-arrowthickstop-1-s'); 

			$langContent.addClass("langTabsContainer").siblings("label").prepend($span); 

			$langTabsBox.tabs({ active: config.LanguageFieldTabs.activeTab });
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
