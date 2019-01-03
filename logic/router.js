/* initialize router */
/*****************************************/
$(document).ready(function(){

    // 01. load main page
    router_load_main_page();
    
});

/* assemble website */
/*****************************************/
function router_load_main_page()
{
	// 01. empty body
    $("body").empty();

    // 02. load main_page container
    $("body").load("./components/main_page/main_page.html", function(){

    	// 03. load side navigation
        $("#side_nav_container").load("./components/main_page/navigation_bar/navigation_bar.html", function(){
            
        	// 04. load tabs - side nav
        	$("#tabs_container").load("./components/main_page/navigation_bar/tabs/tabs.html", function(){
                
                // 05. load page content
                $("#page_content_container").load("./components/main_page/page_content/page_content.html", function(){

                    // load default article
                    router_navigate(default_page);
                    
                });
	        });
        });
    });
}


/* navigation */
/*****************************************/
function router_navigate(target_page)
{
    // 01. update tab color
    $('.sh_nav_tab').removeClass("w3-indigo");
    $('#'+target_page).addClass("w3-indigo");

    // clear old article
    $("#article_container").empty();

    // load new article
    var page_dir = article_router[target_page];
    $("#article_container").load(page_dir, function(){
        // done
    });
}


