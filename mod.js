Game.Win('Third-party');
if(CaraRefillCheat === undefined) var CaraRefillCheat = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/' + (0 ? 'Beta/' : '') + 'CCSE.js');
CaraRefillCheat.name = 'CaraRefillCheat';
CaraRefillCheat.pic = 'https://plasma4.github.io/cookieclicker/img/sugarLump.png';
CaraRefillCheat.version = '1.0';
CaraRefillCheat.GameVersion = '2.058';

Game.refillLumpTimer = () => {
    Game.lumpRefill = 0;

}

CaraRefillCheat.begin = () => {
    
    CaraRefillCheat.init = () => {
        		Game.customStatsMenu.push(function(){
			CCSE.AppendStatsVersionNumber(CaraRefillCheat.name, CaraRefillCheat.version);
		});
        CCSE.CreateSpecialObject('CaraLumpCheat', 
			function(){return true;}, 
			function(picframe){
				picframe.pic = CaraRefillCheat.pic;
				picframe.frame = 0;
			}, 
			CaraRefillCheat.ToggleSpecialMenu
		);

	    CaraRefillCheat.isLoaded = 1;

        //MIGHT USE THIS LATER
		//Game.customDrawSpecial.push(CaraRefillCheat.update);


    }
    	
	CaraRefillCheat.ToggleSpecialMenu = function(str){
		str = CCSE.SetSpecialMenuImage(str, CaraRefillCheat.pic, 0);
		
		str += '<h3>CARA LUMP REFILL</h3>' + 
			   '<div class="line"></div>' + 
               '<button class="crate enabled" onclick="Game.refillLumpTimer()"></button>';
		
        // id="CaramelizedLumpRefillTimerResetter"

		return str;
	}
	

    CaraRefillCheat.update = () => {}

    Game.registerMod(CaraRefillCheat.name, CaraRefillCheat); 
}

if(!CaraRefillCheat.isLoaded){
	if(CCSE && CCSE.isLoaded){
		CaraRefillCheat.begin();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(CaraRefillCheat.begin);
	}
}
