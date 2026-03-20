var available_achievements = {
	/*firewood: {
		name: 	'firewood',
		background_item: 	'firewood',
		amount: 		10,
		amount_facor: 	2,
		item_procs: 	{
			firewood: 	true,
		},
		skill_procs:{

		},
		item_bonus:{
			firewood: 	1,
		},
		skill_bonus:{

		}
	},
	training: {
		name: 	'training',
		background_item: 	'peasant',
		amount: 		10,
		amount_facor: 	2,
		item_procs: 	{
		},
		skill_procs:{
			training: 	true,
		},
		item_bonus:{
		},
		skill_bonus:{
			training: 	5,
		}
	},*/
}

$.each(available_items, function(item_id, item_info){
	if(available_achievements[item_id] == undefined){
		available_achievements[item_id] = {
			name: 	'' + item_info['name'],
			text: 	'收集 ' + item_info['name'],
			background_item: 	item_id + '',
			amount: 		1000,
			amount_facor: 	10,
			item_procs: 	{},
			skill_procs:{},
			item_bonus:{},
			skill_bonus:{}
		};
		available_achievements[item_id]['item_procs'][item_id] = true;
		available_achievements[item_id]['item_bonus'][item_id] = 10;
	}
});

$.each(available_skills, function(skill_id, skill_info){
	if(available_achievements[skill_id] == undefined){
		available_achievements[skill_id] = {
			name: 	'' + skill_id,
			text: 	'使用 ' + skill_id + ' 技能',
			background_item: 	'',
			amount: 		10000,
			amount_facor: 	10,
			item_procs: 	{},
			skill_procs:{},
			item_bonus:{},
			skill_bonus:{}
		};
		available_achievements[skill_id]['skill_procs'][skill_id] = true;
		available_achievements[skill_id]['skill_bonus'][skill_id] = 10;
	}
});

available_achievements = sortObj(available_achievements);

var available_ap_bonusses = {
	chef: {
		name: 	'厨师',
		text: 	'每级烹饪可额外获得25%的熟练度。',
		background_item: 	'hamburger',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			cooking: 	25,
		}
	},
	lumberjack: {
		name: 	'伐木工人',
		text: 	'每升一级可以额外增加25%的木材，木柴和硬木。',
		background_item: 	'lumberjack',
		cost: 			2,
		item_bonus:{
			firewood: 	25,
			lumber: 	25,
			hardwood: 	25
		},
		skill_bonus:{
		}
	},
	haymaker: {
		name: 	'干草机',
		text: 	'每升一级可以额外增加25%的草和干草和沙。',
		background_item: 	'hay',
		cost: 			1,
		item_bonus:{
			grass: 		25,
			hay: 		25,
			sand: 		25,
		},
		skill_bonus:{
		}
	},
	breeder: {
		name: 	'饲养员',
		text: 	'每升一级可以额外增加25%的鸡，公鸡，羊，牛和马。',
		background_item: 	'rooster',
		cost: 			4,
		item_bonus:{
			chicken: 		25,
			rooster: 		25,
			sheep: 			25,
			cow: 			25,
			horse: 			25,
		},
		skill_bonus:{
		}
	},
	weaver: {
		name: 	'编织工',
		text: 	'每升一级可以额外增加25%的布料和皮革。',
		background_item: 	'cloth',
		cost: 			3,
		item_bonus:{
			cloth: 			25,
			leather: 		25,
		},
		skill_bonus:{
		}
	},
	alchemist: {
		name: 	'炼金术士',
		text: 	'每升一级可以额外增加25%的炼金术熟练度。',
		background_item: 	'health_potion',
		cost: 			5,
		item_bonus:{
		},
		skill_bonus:{
			alchemy: 		25
		}
	},
	rocky: {
		name: 	'岩石',
		text: 	'每升一级可以额外增加25%的石头。',
		background_item: 	'stone',
		cost: 			1,
		item_bonus:{
			stone: 		25,
		},
		skill_bonus:{
		}
	},
	miner: {
		name: 	'矿工',
		text: 	'每升一级可以额外增加25%的采矿熟练度和铜矿与铁矿。',
		background_item: 	'miner',
		cost: 			5,
		item_bonus:{
			copper_ore:    25,
			iron_ore:      25,
		},
		skill_bonus:{
			mining: 	25
		}
	},
	fisharman: {
		name: 	'渔夫',
		text: 	'每升一级可以额外增加25%的捕鱼熟练度。',
		background_item: 	'fisherman',
		cost: 			2,
		item_bonus:{
		},
		skill_bonus:{
			fishing: 	25
		}
	},
	farmer: {
		name: 	'农民',
		text: 	'每升一级农场可以额外增加25%的种植熟练度。',
		background_item: 	'farmer',
		cost: 			2,
		item_bonus:{
		},
		skill_bonus:{
			farming: 	25
		}
	},
	hunter: {
		name: 	'猎人',
		text: 	'每升一级可以额外增加25%的打猎熟练度。',
		background_item: 	'hunter',
		cost: 			3,
		item_bonus:{
		},
		skill_bonus:{
			hunting: 	25
		}
	},

}

available_ap_bonusses = sortObj(available_ap_bonusses);