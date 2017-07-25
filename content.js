window.onload=function(){

		 window.setInterval(
		 
			function(){	
			

					var actualCode = '(' + function() {
						// All code is executed in a local scope.
						// For example, the following does NOT overwrite the global `alert` method
						window.isEnterKey = function(evt){
							
							return evt.keyCode === 13;
						
						}
						
						
						
					} + ')();';
					var script = document.createElement('script');
					script.textContent = actualCode;
					(document.head||document.documentElement).appendChild(script);
					script.remove();			
					
					
				
			},
			3000
		 );
		 
	 
	 
}

