var available_actions = {
	pick_parsley:{
		name: 			'采摘西芹',
		unlock_name: 	'种植西芹',
		item_id: 		'parsley',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	pick_mint:{
		name: 			'采摘薄荷',
		unlock_name: 	'种植薄荷',
		item_id: 		'mint',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	pick_sage:{
		name: 			'采摘鼠尾草',
		unlock_name: 	'种植鼠尾草',
		item_id: 		'sage',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	pick_rosemary:{
		name: 			'采摘迷迭香',
		unlock_name: 	'种植迷迭香',
		item_id: 		'rosemary',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	look_for_herbs:{
		name: 			'采药',
		unlock_name: 	'寻找草药',
		item_id: 		'parsley',
		bonus_loot:{
			mint: 		50,
			sage: 		25,
			rosemary: 	12,
		},
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			grass:  	50,
		}
	},
	comb_the_beach:{
		name: 			'梳理海滩',
		bonus_loot:{
			sand: 		100,
			firewood: 	75,
			twine: 		10,
			plank: 		5
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 		'梳理',
		fail_text: 		'comb',
	},
	scrounge_wrecks:{
		name: 			'搜寻沉船',
		unlock_name: 	'建造沙洲',
		bonus_loot:{
			firewood: 	100,
			nails: 		35,
			peasant: 	20,
			plank: 		10,
			cloth: 		10,
			barrel: 	2,
			crate: 		2,
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 	'搜寻',
		fail_text: 		'scrounge',
		upgrade_item: 	'sand',
		unlock_cost:{
			sand:		100,
		}
	},
	build_ship:{
		name: 			'造船',
		unlock_name: 	'建造船坞',
		bonus_loot:{
			ship: 	100,
		},
		chance: 		25,
		skill: 			'制作',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			plank:		10,
			nails: 		20,
			twine: 		10,
			cloth: 		5,
			peasant: 	5,
		},
		unlock_cost:{
			plank:		10,
			nails: 		20,
			twine: 		10,
		}
	},
	build_fishing_ship:{
		name: 			'造渔船',
		unlock_name: 	'建渔场',
		bonus_loot:{
			fishing_ship: 	100,
		},
		chance: 		25,
		skill: 			'制作',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			ship:		1,
			fisherman: 	5,
		},
		unlock_cost:{
			plank:		10,
			nails: 		20,
			twine: 		10,
			fisherman: 	5,
		}
	},
	catch_seafish:{
		name: 			'派出渔船',
		unlock_name: 	'开始派遣渔船',
		bonus_loot:{
			salmon: 		100,
			eel: 			50,
		},
		progress_needed: 1,
		reward_factor: 	10,
		chance: 		25,
		skill: 			'捕鱼',
		action_name: 	'鱼',
		fail_text: 		'fail',
		upgrade_item: 	'fishing_ship',
		unlock_cost:{
			fishing_ship: 	1,
			barrel:  		5,
		}
	},
	ship_goods:{
		name: 			'装运货物',
		unlock_name: 	'建立货物运输系统',
		bonus_loot:{
			treasure: 	100,
		},
		chance: 		25,
		skill: 			'贸易',
		action_name: 	'船',
		fail_text: 		'ship',
		upgrade_item: 	'ship',
		cost:{
			supplies:	5,
		},
		unlock_cost:{
			ship:		1,
			supplies: 	5,
		}
	},
	import_tools:{
		name: 			'导入工具',
		unlock_name: 	'设置工具导入',
		bonus_loot:{
			axe: 		50,
			knife:		50,
			net: 		50,
			pickaxe: 	50,
			pitchfork: 	50,
			plow: 		50,
		},
		chance: 		25,
		skill: 			'贸易',
		action_name: 	'进口',
		fail_text: 		'import',
		upgrade_item: 	'ship',
		cost:{
		},
		unlock_cost:{
			ship:		1,
		}
	},
	import_goods:{
		name: 			'进口货物',
		unlock_name: 	'建立商品进口',
		bonus_loot:{
			lumber: 	50,
			stone: 		50,
			nails:		50,
			flour: 		25,
			iron: 		20,
			meat: 		15,
			cloth: 		10,
			supplies: 	5,
		},
		chance: 		25,
		skill: 			'贸易',
		action_name: 	'进口',
		fail_text: 		'import',
		upgrade_item: 	'ship',
		cost:{
		},
		unlock_cost:{
			ship:		1,
		}
	},
	boil_water:{
		name: 			'煮沸海水',
		unlock_name: 	'开始煮海水',
		bonus_loot:{
			water: 		100,
			salt: 		10,
		},
		chance: 		25,
		reward_factor: 	10,
		passive_factor: 1,
		skill: 			'烹饪',
		action_name: 	'煮',
		fail_text: 		'boil',
		upgrade_item: 	'firewood',
		cost:{
			firewood: 	10,
		},
		unlock_cost:{
			firewood:		100,
		}
	},
	comb_the_shore:{
		name: 			'梳理海岸',
		item_id: 		'water',
		bonus_loot:{
			firewood: 	75,
			twine: 		10,
			barrel: 	0.25
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 		'梳理',
		fail_text: 		'comb',
	},
	save_swimmer:{
		name: 			'拯救游泳者',
		unlock_name: 	'造一只小木筏',
		item_id: 		'peasant',
		chance: 		20,
		skill: 			'游泳',
		action_name: 	'挽救',
		fail_text: 		'save',
		cost:{
			firewood: 		6
		},
		unlock_cost:{
			firewood:		25,
		}
	},
	craft_net:{
		name: 			'制作网',
		unlock_name: 	'学着打一些结',
		item_id: 		'net',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			twine: 		2
		},
		unlock_cost:{
			twine:		1,
		}
	},
	gather_water:{
		name: 			'收集水',
		item_id: 		'water',
		chance: 		25,
		skill: 			'采集',
		action_name: 		'收集',
		fail_text: 		'gather',
	},
	gather_sand:{
		name: 			'收集沙石',
		item_id: 		'sand',
		chance: 		25,
		skill: 			'采集',
		action_name: 		'收集',
		fail_text: 		'gather',
		unlock_cost:{
			water:  	50,
		}
	},
	gather_clay:{
		name: 			'挖粘土',
		unlock_name: 	'寻找粘土',
		item_id: 		'clay',
		bonus_loot: {
			sand: 		25,
			stone: 		10
		},
		chance: 		25,
		skill: 			'采矿',
		action_name: 		'挖掘',
		fail_text: 		'dig',
		unlock_cost:{
			water:  	50,
		}
	},
	catch_fish:{
		name: 			'捕鱼',
		unlock_name: 	'练习钓鱼',
		bonus_loot:{
			perch: 			40,
			trout: 			20,
			salmon: 		10,
			eel: 			5,
		},
		progress_needed: 1,
		chance: 		25,
		skill: 			'捕鱼',
		action_name: 	'鱼',
		fail_text: 		'fail',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			net:  		1,
		}
	},
	roast_perch:{
		name: 			'烟熏鲈鱼',
		unlock_name: 	'练习熏制鲈鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			perch: 		5,
			firewood: 	5
		},
		unlock_cost:{
			perch:  		10,
			firewood: 		10
		}
	},
	grill_trout:{
		name: 			'烟熏鳟鱼',
		unlock_name: 	'练习熏制鳟鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			trout: 		3,
			firewood: 	5
		},
		unlock_cost:{
			trout:  		10,
			firewood: 		10
		}
	},
	
	cook_salmon:{
		name: 			'烟熏鲑鱼',
		unlock_name: 	'练习熏制鲑鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			salmon: 	2,
			firewood: 	2,
		},
		unlock_cost:{
			salmon:  		10,
			firewood: 		10,
		}
	},
	cook_eel:{
		name: 			'烟熏鳗鱼',
		unlock_name: 	'练习熏制鳗鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		reward_factor: 	1,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			eel: 		1,
			firewood: 	2,
		},
		unlock_cost:{
			eel:  			10,
			firewood: 		10,
		}
	},
	catch_perch:{
		name: 			'钓鲈鱼',
		item_id: 		'perch',
		chance: 		25,
		skill: 			'捕鱼',
		action_name: 		'鱼',
		fail_text: 		'fish',
		unlock_cost:{
			water:  	50,
		}
	},
	package_fish:{
		name: 			'包装鱼',
		unlock_name: 	'分类包装鱼',
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'打包',
		action_name: 		'打包',
		fail_text: 		'pack',
		cost:{
			smoked_fish: 	5,
			barrel: 		1,
		},
		unlock_cost:{
			smoked_fish:  	10,
			barrel: 		3,
		}
	},
	pick_apples:{
		name: 			'摘苹果',
		unlock_name: 	'种些苹果树',
		item_id: 		'apple',
		chance: 		10,
		skill: 			'采集',
		action_name: 	'采集',
		fail_text: 		'pick',
		upgrade_item: 	'water',
		unlock_cost:{
			apple: 		10,
			water: 		100,
		}
	},
	chop_wood:{
		name: 			'收集小树',
		unlock_name: 	'找一些小树',
		item_id: 		'lumber',
		bonus_loot:{
			firewood: 	100,
			leaves: 	10,
			hardwood: 	0.01,
		},
		progress_needed: 	1,
		reward_factor: 		5,
		chance: 		5,
		skill: 			'伐木',
		action_name: 	'砍伐',
		fail_text: 		'chop',
	},
	chop_down_tree:{
		name: 			'砍树',
		unlock_name: 	'让伐木工人去工作',
		item_id: 		'lumber',
		bonus_loot:{
			firewood: 	100,
			leaves: 	10,
			hardwood: 	0.001,
		},
		progress_needed: 	1,
		reward_factor: 		100,
		passive_factor: 	10,
		chance: 		5,
		skill: 			'伐木',
		action_name: 		'砍伐',
		fail_text: 		'chop',
		upgrade_item: 		'lumberjack',
		unlock_cost:{
			lumberjack:		1
		}
	},
	chop_hardwood:{
		name: 			'砍硬木',
		unlock_name: 	'搜寻硬木',
		item_id: 		'hardwood',
		chance: 		5,
		skill: 			'伐木',
		action_name: 		'砍伐',
		fail_text: 		'chop',
		upgrade_item: 	'lumberjack',
		cost:{
			axe: 		1
		},
		unlock_cost:{
			lumberjack:		10
		}
	},
	search_for_firewood:{
		name: 			'寻找柴火',
		item_id: 		'firewood',
		chance: 		25,
		skill: 			'采集',
		action_name: 	'搜索',
		fail_text: 		'search',
	},
	scrounge_the_forest:{
		name: 			'探索森林',
		item_id: 		'firewood',
		bonus_loot:{
			water: 		15,
			apple: 		10,
			feather: 	8,
			twine: 		5,
			peasant: 	3,
			axe: 		1,
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 	'探索',
		fail_text: 		'scrounge',
	},
	chop_firewood:{
		name: 			'劈柴',
		unlock_name: 	'劈柴',
		item_id: 		'firewood',
		chance: 		25,
		reward_factor: 	8,
		skill: 			'伐木',
		action_name: 	'砍伐',
		fail_text: 		'chop',
		upgrade_item: 	'lumberjack',
		cost:{
			lumber: 	1
		},
		unlock_cost:{
			axe: 		1,
			lumber: 	10,
		}
	},
	mow_grass:{
		name: 			'割草',
		item_id: 		'grass',
		chance: 		25,
		reward_factor: 	5,
		skill: 			'采集',
		action_name: 	'修剪',
		fail_text: 		'mow',
	},
	dry_grass:{
		name: 			'干草',
		unlock_name: 	'开始晒草',
		item_id: 		'hay',
		chance: 		25,
		reward_factor: 	1,
		skill: 			'采集',
		action_name: 	'晾晒',
		fail_text: 		'dry',
		cost:{
			grass: 		3
		},
		unlock_cost:{
			grass: 		50
		}
	},
	bind_hay:{
		name: 			'捆干草',
		unlock_name: 	'开始捆干草',
		item_id: 		'hay_bale',
		chance: 		25,
		passive_factor: 1,
		skill: 			'采集',
		action_name: 	'捆绑',
		fail_text: 		'bind',
		cost:{
			hay: 		3
		},
		unlock_cost:{
			hay: 		50
		}
	},
	craft_pole:{
		name: 			'制作木棍',
		unlock_name: 	'学习制作木棍',
		item_id: 		'pole',
		chance: 		20,
		reward_factor: 	2,
		skill: 			'制作',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			lumber: 	3
		},
		unlock_cost:{
			lumber:		20,
		}
	},
	saw_planks:{
		name: 			'锯木板',
		unlock_name: 	'学会锯木板',
		item_id: 		'plank',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'锯',
		fail_text: 		'saw',
		cost:{
			lumber: 	3
		},
		unlock_cost:{
			lumber:		50,
		}
	},
	saw_planks_sawmill:{
		name: 			'锯木板',
		unlock_name: 	'建锯木材厂',
		item_id: 		'plank',
		chance: 		20,
		reward_factor: 	10,
		skill: 			'制作',
		action_name: 	'锯',
		fail_text: 		'saw',
		cost:{
			lumber: 	10,
			iron: 		2
		},
		unlock_cost:{
			plank:		50,
			stone: 		50,
			iron: 		10
		}
	},
	craft_crate:{
		name: 			'制作板条箱',
		unlock_name: 	'学习制作板条箱',
		item_id: 		'crate',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			plank: 		2
		},
		unlock_cost:{
			plank:		30,
		}
	},
	craft_barrel:{
		name: 			'制作木桶',
		unlock_name: 	'学习制作木桶',
		item_id: 		'barrel',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			plank: 		2
		},
		unlock_cost:{
			plank:		30,
		}
	},
	
	craft_bed:{
		name: 			'制作床',
		unlock_name: 	'学会制作床铺',
		item_id: 		'bed',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			cloth: 		1,
			pillow: 	1,
			plank: 		4,
		},
		unlock_cost:{
			cloth: 		10,
			pillow: 	10,
			plank: 		40,
			
		}
	},
	craft_cart:{
		name: 			'制作手推车',
		unlock_name: 	'学习制作手推车',
		item_id: 		'cart',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			pole: 		6,
			plank: 		6,
			nails: 		15
		},
		unlock_cost:{
			pole: 		25,
			plank: 		25,
			nails: 		50
		}
	},
	send_supplies:{
		name: 			'送补给品',
		unlock_name: 	'建立补给站',
		item_id: 		'treasure',
		chance: 		20,
		passive_factor: 	5,
		skill: 			'贸易',
		action_name: 		'邮寄',
		fail_text: 		'send',
		upgrade_item: 		'cart',
		cost:{
			supplies: 	5,
		},
		unlock_cost:{
			plank: 		20,
			pole: 		20,
			nails: 		50,
			supplies: 	10,
			peasant: 	10,
		}
	},
	
	dig_hole:{
		name: 			'挖矿',
		item_id: 		'sand',
		bonus_loot:{
			firewood: 	25,
			stone: 		20,
			copper_ore: 	2.5,
			lumber: 	1,
		},
		chance: 		10,
		skill: 			'采矿',
		action_name: 		'挖掘',
		fail_text: 		'dig',
		unlock_cost:{
			coins:		1,
		}
	},
	break_rocks:{
		name: 			'开采碎石',
		unlock_name: 	'开始碎石',
		item_id: 		'stone',
		bonus_loot:{
			copper_ore: 	20,
			iron_ore: 	10,
		},
		chance: 		10,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			pickaxe:		1,
		}
	},
	mine_stone:{
		name: 			'开采矿石',
		unlock_name: 	'建造采石场',
		item_id: 		'stone',
		chance: 		10,
		skill: 			'采矿',
		action_name: 		'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_copper:{
		name: 			'开采铜矿',
		unlock_name: 	'建铜矿',
		item_id: 		'copper_ore',
		chance: 		2.5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_coal:{
		name: 			'开采煤矿',
		unlock_name: 	'建煤矿',
		item_id: 		'coal',
		chance: 		5,
		skill: 			'采矿',
		action_name: 		'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_salt:{
		name: 			'开采盐矿',
		unlock_name: 	'建盐矿',
		item_id: 		'salt',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_iron:{
		name: 			'开采铁矿',
		unlock_name: 	'建铁矿',
		item_id: 		'iron_ore',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_silver:{
		name: 			'开采银矿',
		unlock_name: 	'建银矿',
		item_id: 		'silver_ore',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		20,
			stone:		500,
		}
	},
	mine_gold:{
		name: 			'开采金矿',
		unlock_name: 	'建金矿',
		item_id: 		'gold_ore',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		40,
			stone:		1000,
		}
	},
	tend_vegetable_garden:{
		name: 			'照料蔬菜',
		item_id: 		'lettuce',
		bonus_loot:{
			cucumber: 	50,
			tomato: 	50,
			onion: 		25,
			potato: 	25,
			carrot: 	10
		},
		chance: 		5,
		reward_factor: 	1,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			farmer:		1,
		}
	},
	grow_lettuce:{
		name: 			'种莴苣',
		unlock_name: 	'种植莴苣',
		item_id: 		'lettuce',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_cucumber:{
		name: 			'种黄瓜',
		unlock_name: 	'种植黄瓜',
		item_id: 		'cucumber',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_tomatoes:{
		name: 			'种西红柿',
		unlock_name: 	'种西红柿',
		item_id: 		'tomato',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},

	grow_carrots:{
		name: 			'种胡萝卜',
		unlock_name: 	'种植胡萝卜',
		item_id: 		'carrot',
		chance: 		5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_onions:{
		name: 			'种洋葱',
		unlock_name: 	'种洋葱',
		item_id: 		'onion',
		chance: 		2.5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_potatoes:{
		name: 			'种土豆',
		unlock_name: 	'种土豆',
		item_id: 		'potato',
		chance: 		2.5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_sugarcane:{
		name: 			'种甘蔗',
		item_id: 		'sugarcane',
		chance: 		2.5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		50,
		}
	},
	grow_wheat:{
		name: 			'照料小麦',
		unlock_name: 	'犁麦田',
		item_id: 		'wheat',
		chance: 		5,
		reward_factor: 		50,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		upgrade_item: 		'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	grow_flax:{
		name: 			'照料亚麻',
		unlock_name: 	'犁亚麻田',
		item_id: 		'flax',
		chance: 		5,
		reward_factor: 		50,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		upgrade_item: 		'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	grow_sugarcane:{
		name: 			'照料甘蔗',
		unlock_name: 	'犁甘蔗地',
		item_id: 		'sugarcane',
		chance: 		5,
		reward_factor: 		25,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		upgrade_item: 		'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	clear_the_field:{
		name: 			'清理场地',
		item_id: 		'stone',
		bonus_loot:{
			firewood: 	10,
			grass: 		5,
			wheat: 		1,
		},
		progress_needed: 	1,
		reward_factor: 		5,
		chance: 		5,
		skill: 			'采集',
		action_name: 	'清理',
		fail_text: 		'clear',
	},
	use_the_well:{
		name: 			'使用井',
		unlock_name: 	'打井',
		item_id: 		'water',
		bonus_loot:{
			sand: 		5,
			stone: 		1,
			boots: 		0.1,
		},
		chance: 		5,
		reward_factor: 		10,
		skill: 			'采集',
		action_name: 	'收集',
		fail_text: 		'collect',
		upgrade_item: 	'stone',
		unlock_cost:{
			stone: 		25
		}
	},
	assist_the_farmers:{
		name: 			'帮助农民',
		unlock_name: 	'交朋友',
		item_id: 		'wheat',
		bonus_loot:{
			peasant: 	30,
			pitchfork: 	16,
			sack: 		8,
			plow: 		4,
			knife: 		1,
		},
		chance: 		5,
		skill: 			'魅力',
		action_name: 	'帮助',
		fail_text: 		'assist',
		cost:{
			water: 		10
		},
		unlock_cost:{
			water: 		50
		}
	},
	train_guard:{
		name: 			'列车员',
		unlock_name: 	'设置警卫训练',
		item_id: 		'guard',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			spear: 			2,
			plate_armor: 	1,
			shield: 		1
		},
		unlock_cost:{
			house: 			1,
			peasant: 		10,
			spear: 			10,
			plate_armor: 	10,
			shield: 		10
		}
	},
	train_farmer:{
		name: 			'培训农民',
		unlock_name: 	'开展农民培训',
		item_id: 		'farmer',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			pitchfork: 		1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_fisherman:{
		name: 			'训练渔夫',
		unlock_name: 	'学习训练渔民',
		item_id: 		'fisherman',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			net: 			1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_hunter:{
		name: 			'训练猎人',
		unlock_name: 	'建立猎人训练',
		item_id: 		'hunter',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			bow: 			1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_veteran_hunter:{
		name: 			'训练老猎人',
		unlock_name: 	'建立退伍军人培训',
		item_id: 		'veteran_hunter',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			hunter: 		1,
			spear: 			10
		},
		unlock_cost:{
			hunter: 	10,
			spear: 		100
		}
	},
	
	train_miner:{
		name: 			'训练矿工',
		unlock_name: 	'建立矿工培训',
		item_id: 		'miner',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			pickaxe: 		1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_lumberjack:{
		name: 			'训练伐木工',
		unlock_name: 	'组织伐木工人培训',
		item_id: 		'lumberjack',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			axe: 			1
		},
		unlock_cost:{
			coins: 		1000
		}
	},

	tend_the_field:{
		name: 			'空地',
		unlock_name: 	'种植作物',
		item_id: 		'wheat',
		bonus_loot:{
			flax: 			50,
			sugarcane: 		5,
		},
		chance: 		5,
		reward_factor: 		10,
		skill: 			'农事',
		action_name: 	'种田',
		fail_text: 		'farm',
		upgrade_item: 	'farmer',
		unlock_cost:{
			water: 		100
		}
	},
	tend_large_field:{
		name: 			'照料大片土地',
		unlock_name: 	'犁地',
		item_id: 		'wheat',
		bonus_loot:{
			flax: 			50,
			sugarcane: 		5,
		},
		chance: 		5,
		reward_factor: 		35,
		skill: 			'农事',
		action_name: 	'种田',
		fail_text: 		'farm',
		upgrade_item: 	'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	package_flour:{
		name: 			'包装面粉',
		unlock_name: 	'分类包装面粉',
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'打包',
		action_name: 		'打包',
		fail_text: 		'pack',
		cost:{
			flour: 			15,
			sack: 			1,
		},
		unlock_cost:{
			flour:  		50,
			sack: 			2,
		}
	},
	mill_flour:{
		name: 			'磨面粉',
		unlock_name: 	'建小麦厂',
		item_id: 		'flour',
		chance: 		20,
		skill: 			'研磨',
		action_name: 		'加工',
		fail_text: 		'mill',
		cost:{
			wheat: 	4
		},
		unlock_cost:{
			stone:		100,
		}
	},
	refine_sugar:{
		name: 			'炼糖',
		unlock_name: 	'建糖厂',
		item_id: 		'sugar',
		chance: 		20,
		reward_factor: 	2,
		skill: 			'研磨',
		action_name: 		'加工',
		fail_text: 		'mill',
		cost:{
			sugarcane: 	3
		},
		unlock_cost:{
			stone:		100,
		}
	},
	feed_chickens:{
		name: 			'喂鸡',
		unlock_name: 	'引诱来一些鸡',
		item_id: 		'egg',
		bonus_loot:{
			feather: 	10,
		},
		chance: 		20,
		reward_factor: 	6,
		skill: 			'畜牧业',
		action_name: 		'喂养',
		fail_text: 		'feed',
		cost:{
			wheat: 	4
		},
		unlock_cost:{
			wheat: 		100,
		}
	},
	breed_chickens:{
		name: 			'孵蛋',
		unlock_name: 	'学会养鸡',
		item_id: 		'chicken',
		bonus_loot:{
			feather: 	50,
		},
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 	'繁殖',
		fail_text: 		'breed',
		cost:{
			egg: 	8
		},
		unlock_cost:{
			egg: 		100,
		}
	},
	transmute_stone:{
		name: 			'转化石头',
		unlock_name: 	'学会转化',
		item_id: 		'iron',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'转化',
		fail_text: 		'transmute',
		cost:{
			mint: 		3,
			stone: 		1,
		},
		unlock_cost:{
			mint: 		100,
			stone: 		100,
		}
	},
	transmute_iron:{
		name: 			'转化铁',
		unlock_name: 	'研究转化',
		item_id: 		'gold',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'转化',
		fail_text: 		'transmute',
		cost:{
			mint: 		20,
			iron: 		2,
		},
		unlock_cost:{
			mint: 		100,
			iron: 		100,
		}
	},
	brew_health_potion:{
		name: 			'配制生命药水',
		unlock_name: 	'学习配制生命药水',
		item_id: 		'health_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			parsley: 	5,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			parsley: 	100,
			water: 		100,
			glass: 		10,
		}
	},
	craft_remedy:{
		name: 			'制作补救措施',
		unlock_name: 	'学会制定补救措施',
		item_id: 		'remedy',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			parsley: 	10,
			mint: 		25,
		},
		unlock_cost:{
			parsley: 	100,
			mint: 		100,
		}
	},
	craft_first_aid_kit:{
		name: 			'制作急救箱',
		unlock_name: 	'学会制作急救箱',
		item_id: 		'first_aid_kit',
		chance: 		20,
		skill: 			'炼金',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			bandage: 		4,
			remedy: 		4,
			health_potion: 	6,
			crate: 			1
		},
		unlock_cost:{
			parsley: 	100,
			mint: 		100,
		}
	},
	brew_mana_potion:{
		name: 			'配制法力药水',
		unlock_name: 	'学习配制法力药水',
		item_id: 		'mana_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			sage: 		6,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			sage: 	100,
			water: 		100,
			glass: 		10,
		}
	},
	brew_poison:{
		name: 			'配制毒药',
		unlock_name: 	'学会配制毒药',
		item_id: 		'poison',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			parsley: 	5,
			mint: 		5,
			bone: 		5,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			bone: 		150,
			water: 		100,
			glass: 		10,
		}
	},
	brew_love_potion:{
		name: 			'配制爱情药水',
		unlock_name: 	'学会配制爱情药水',
		item_id: 		'love_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			rosemary: 	8,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			rosemary: 	100,
			water: 		100,
			glass: 		10,
		}
	},
	brew_restore_potion:{
		name: 			'配制恢复药剂',
		unlock_name: 	'学习配制恢复药剂',
		item_id: 		'restore_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			health_potion: 	2,
			mana_potion: 	2,
			glass: 		1,
		},
		unlock_cost:{
			health_potion: 	20,
			mana_potion: 	20,
			glass: 		10,
		}
	},
	
	make_salad:{
		name: 			'做沙拉',
		unlock_name: 	'学习做沙拉',
		item_id: 		'salad',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			lettuce: 	4,
			cucumber: 	1,
			tomato: 	1,
		},
		unlock_cost:{
			lettuce: 	20,
			cucumber: 	10,
			tomato: 	10,
		}
	},
	bake_bread:{
		name: 			'烤面包',
		unlock_name: 	'做一个面包烤炉',
		item_id: 		'bread',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			flour: 		2,
			water: 		2,
			firewood: 	2,
		},
		unlock_cost:{
			stone: 		250,
		}
	},
	make_cucumber_sandwich:{
		name: 			'做黄瓜三明治',
		unlock_name: 	'练习做黄瓜三明治',
		item_id: 		'cucumber_sandwich',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			bread: 		1,
			butter: 	1,
			cucumber: 	2,
		},
		unlock_cost:{
			bread: 		5,
			butter: 	5,
			cucumber: 	10,
		}
	},
	cook_perch_and_potatoes:{
		name: 			'鲈鱼和土豆',
		unlock_name: 	'学习烹饪鲈鱼和土豆',
		item_id: 		'perch_and_potatoes',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			perch: 		10,
			potato: 	1,
			firewood: 	5,
		},
		unlock_cost:{
			perch: 		50,
			potato: 	10,
			salt: 		10,
			parsley: 	10,
			firewood: 	50,
		}
	},
	brew_mint_tea:{
		name: 			'泡薄荷茶',
		unlock_name: 	'学习泡薄荷茶',
		item_id: 		'mint_tea',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			mint: 		3,
			water: 		5,
			glass: 		1,
			firewood: 	2,
		},
		unlock_cost:{
			mint: 		50,
			water: 		100,
			glass: 		10,
			firewood: 	50,
		}
	},
	bake_fries:{
		name: 			'烤薯条',
		unlock_name: 	'学习烤薯条',
		item_id: 		'fries',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			potato:		2,
			salt: 		1,
			firewood: 	5
		},
		unlock_cost:{
			potato:		10,
			salt: 		10,
			firewood: 	50
		}
	},
	bake_apple_pie:{
		name: 			'烤苹果派',
		unlock_name: 	'学会烤苹果派',
		item_id: 		'apple_pie',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			egg:		3,
			flour: 		10,
			apple: 		10,
			sugar: 		2,
			firewood: 	5
		},
		unlock_cost:{
			egg:		10,
			flour: 		20,
			apple: 		50,
			sugar: 		10,
			firewood: 	50
		}
	},
	build_wall:{
		name: 			'筑墙',
		unlock_name: 	'学习砌筑',
		item_id: 		'wall',
		chance: 		20,
		skill: 			'建筑',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			brick: 		8,
		},
		unlock_cost:{
			brick: 		25,
		}
	},
	build_house:{
		name: 			'盖房子',
		unlock_name: 	'开工学习建设',
		item_id: 		'house',
		chance: 		20,
		skill: 			'建筑',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			glass: 		3,
			plank: 		5,
			shingle: 	5,
			wall: 		4,
		},
		unlock_cost:{
			glass: 		10,
			plank: 		20,
			shingle: 	20,
			wall: 		10,
		}
	},
	attract_peasant:{
		name: 			'吸引新村民',
		unlock_name: 	'扩大村庄',
		bonus_loot:{
			fisherman: 	60,
			hunter: 	50,
			farmer: 	50,
			lumberjack: 50,
			miner: 		50,
			thief: 		20,
			guard: 		20,
			cowboy: 	20,
		},
		chance: 		20,
		skill: 			'魅力',
		action_name: 	'吸引',
		fail_text: 		'attract',
		upgrade_item: 	'house',
		unlock_cost:{
			house: 			5,
		}
	},
	train_thief:{
		name: 			'训练窃贼',
		unlock_name: 	'建立一个盗贼公会',
		item_id: 		'thief',
		chance: 		20,
		skill: 			'招募',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			cloak: 				1,
			peasant: 			1,
			sinister_dagger: 	1,
		},
		unlock_cost:{
			house: 				1,
			cloak: 				10,
			peasant: 			10,
			sinister_dagger: 	10,
		}
	},
	patrol_village:{
		name: 			'巡逻村庄',
		unlock_name: 	'开始巡逻',
		bonus_loot:{
			thief: 			20,
		},
		chance: 		25,
		skill: 			'偷窃',
		action_name: 	'偷',
		fail_text: 		'failed',
		upgrade_item: 	'guard',
		unlock_cost:{
			guard:  		1,
		}
	},
	employ_thieves:{
		name: 			'雇佣小偷',
		unlock_name: 	'派小偷出去',
		bonus_loot:{
			silver_ring: 		20,
			gold_ring: 			10,
			supplies: 			5,
			treasure: 			1,
		},
		chance: 		25,
		skill: 			'偷窃',
		action_name: 	'偷',
		fail_text: 		'failed',
		upgrade_item: 	'thief',
		unlock_cost:{
			thief:  		1,
		}
	},
	train_cowboy:{
		name: 			'训练牛仔',
		unlock_name: 	'学会训练牛仔',
		item_id: 		'cowboy',
		chance: 		20,
		skill: 			'招募',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			boots: 				1,
			horse: 				1,
			peasant: 			1,
			saddle: 			1,
		},
		unlock_cost:{
			boots: 				10,
			horse: 				10,
			peasant: 			10,
			saddle: 			10,
		}
	},
	sell_herd:{
		name: 			'卖牛群',
		unlock_name: 	'采用牛仔',
		item_id: 		'treasure',
		chance: 		20,
		skill: 			'贸易',
		action_name: 	'贸易',
		fail_text: 		'trade',
		upgrade_item: 		'cowboy',
		cost:{
			cow: 				30,
		},
		unlock_cost:{
			cowboy: 			2,
		}
	},
	chisel_brick:{
		name: 			'凿砖',
		unlock_name: 	'练习切碎砖块',
		item_id: 		'brick',
		chance: 		20,
		skill: 			'建筑',
		action_name: 	'凿',
		fail_text: 		'chisel',
		cost:{
			stone: 		7,
		},
		unlock_cost:{
			stone: 		100,
		},
	},
	build_tollbridge:{
		name: 			'收取通行费',
		unlock_name: 	'修建收费站',
		bonus_loot:{
			apple: 			30,
			bread: 			20,
			twine: 			20,
			barrel: 		15,
			net: 			10,
			cloth: 			10,
			nails: 			10,
			supplies: 		1,
		},
		chance: 		20,
		skill: 			'魅力',
		action_name: 	'收集',
		fail_text: 		'collect',
		cost:{
			peasant: 	1,
		},
		unlock_cost:{
			brick: 		100,
		},
	},
	bake_brick:{
		name: 			'烧砖',
		unlock_name: 	'造砖炉',
		item_id: 		'brick',
		chance: 		20,
		skill: 			'制陶',
		action_name: 	'烘烤',
		fail_text: 		'bake',
		cost:{
			clay: 		3,
			firewood:	3,
		},
		unlock_cost:{
			stone: 		50,
		},
	},
	bake_shingle:{
		name: 			'烧瓦',
		unlock_name: 	'造瓦炉',
		item_id: 		'shingle',
		chance: 		20,
		skill: 			'制陶',
		action_name: 	'烘烤',
		fail_text: 		'bake',
		cost:{
			clay: 		3,
			firewood:	3,
		},
		unlock_cost:{
			stone: 		50,
		},
	},
	craft_charcoal:{
		name: 			'点燃篝火',
		unlock_name: 		'生火',
		item_id: 		'coal',
		bonus_loot:{
			peasant: 		10,
		},
		chance: 		20,
		reward_factor: 		2,
		skill: 			'点火',
		action_name: 		'点燃',
		fail_text: 		'burn',
		cost:{
			firewood:	10,
		},
		unlock_cost:{
			firewood: 	10,
		},
	},
	smelt_copper:{
		name: 			'炼铜',
		unlock_name: 		'造一个小炉子',
		item_id: 		'copper',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			copper_ore:	1,
			firewood: 	2
		},
		unlock_cost:{
			stone:		10,
		},
	},
	smelt_silver:{
		name: 			'炼银',
		unlock_name: 		'造银炉',
		item_id: 		'silver',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			silver_ore:	1,
			coal: 		5
		},
		unlock_cost:{
			stone:		250,
		},
	},
	smelt_gold:{
		name: 			'炼金',
		unlock_name: 		'筑金炉',
		item_id: 		'gold',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			gold_ore:	1,
			coal: 		10
		},
		unlock_cost:{
			stone:		1000,
		},
	},
	smelt_glass:{
		name: 			'吹制玻璃',
		unlock_name: 		'学会吹玻璃',
		item_id: 		'glass',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			sand:		8,
			firewood: 	2
		},
		unlock_cost:{
			sand:		80,
			firewood: 	20,
		},
	},
	smelt_iron:{
		name: 			'炼铁',
		unlock_name: 		'建一座大熔炉',
		item_id: 		'iron',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			iron_ore:	1,
			coal: 		1
		},
		unlock_cost:{
			stone:		100,
		},
	},
	craft_copper_pot:{
		name: 			'精巧的铜壶',
		unlock_name: 	'学习制作铜壶',
		item_id: 		'copper_pot',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			copper:		2,
		},
		unlock_cost:{
			copper:		20,
			coal: 		20
		}
	},
	craft_knife:{
		name: 			'精巧的刀',
		unlock_name: 	'学习制作刀具',
		item_id: 		'knife',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		1,
			lumber: 	1,
			stone: 		2
		},
		unlock_cost:{
			iron:		10,
			lumber: 	10
		}
	},
	craft_sinister_dagger:{
		name: 			'制造邪恶匕首',
		unlock_name: 	'学会制造邪恶匕首',
		item_id: 		'sinister_dagger',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			knife:		1,
			poison: 	2
		},
		unlock_cost:{
			knife:		10,
			poison: 	10
		}
	},
	
	craft_arrow:{
		name: 			'精巧的箭',
		unlock_name: 	'开始射箭',
		item_id: 		'arrow',
		chance: 		20,
		skill: 			'射箭',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			feather:		1,
			firewood: 		1
		},
		unlock_cost:{
			feather:		1,
			firewood: 		5
		}
	},
	craft_bone_arrow:{
		name: 			'精巧的骨箭',
		unlock_name: 	'开始射出骨箭',
		item_id: 		'arrow',
		chance: 		20,
		reward_factor: 	6,
		skill: 			'射箭',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			feather:		1,
			firewood: 		1,
			bone: 			1
		},
		unlock_cost:{
			bone: 			10
		}
	},
	craft_bow:{
		name: 			'精巧的弓',
		unlock_name: 	'学习制作弓箭',
		item_id: 		'bow',
		chance: 		20,
		skill: 			'射箭',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			arrow:			5,
			lumber: 		1,
			twine: 			1
		},
		unlock_cost:{
			lumber: 		3,
			twine: 			3
		}
	},
	
	craft_silver_ring:{
		name: 			'精巧的银戒指',
		unlock_name: 	'练习锻造银戒指',
		item_id: 		'silver_ring',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			silver:		2,
			coal: 		2
		},
		unlock_cost:{
			silver:		5,
			coal: 		200
		}
	},
	craft_gold_ring:{
		name: 			'精巧的金戒指',
		unlock_name: 	'练习锻造金戒指',
		item_id: 		'gold_ring',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			gold:		2,
			coal: 		5
		},
		unlock_cost:{
			gold:		5,
			coal: 		400
		}
	},
	
	craft_nails:{
		name: 			'精巧的钉子',
		unlock_name: 	'练习锻造钉子',
		item_id: 		'nails',
		chance: 		20,
		reward_factor: 	15,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		1,
		},
		unlock_cost:{
			iron:		3,
		}
	},
	
	craft_shield:{
		name: 			'精巧的盾',
		unlock_name: 	'学习制作盾牌',
		item_id: 		'shield',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			iron:		1,
			plank: 		2
		},
		unlock_cost:{
			iron:		2,
			plank: 		4
		}
	},
	craft_plate_armor:{
		name: 			'精巧的板甲',
		unlock_name: 	'学习制作板甲',
		item_id: 		'plate_armor',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			leather: 	2
		},
		unlock_cost:{
			iron:		3,
			leather: 	1
		}
	},
	
	craft_plow:{
		name: 			'精巧的犁',
		unlock_name: 	'学习制作犁',
		item_id: 		'plow',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		1,
			plank: 		1,
			nails: 		5
		},
		unlock_cost:{
			iron:		5,
			plank: 		5,
			nails: 		25
		}
	},
	craft_axe:{
		name: 			'精巧的斧子',
		unlock_name: 	'学习制作斧头',
		item_id: 		'axe',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		2
		}
	},
	craft_pitchfork:{
		name: 			'精巧的干草叉',
		unlock_name: 	'学习制作干草叉',
		item_id: 		'pitchfork',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		2
		}
	},
	craft_pickaxe:{
		name: 			'精巧的镐',
		unlock_name: 	'学习制作镐',
		item_id: 		'pickaxe',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			copper:		3,
			lumber: 	1
		},
		unlock_cost:{
			copper:		2,
			lumber: 	1
		}
	},
	craft_iron_pickaxe:{
		name: 			'精巧的镐',
		unlock_name: 	'学习制作铁镐',
		item_id: 		'pickaxe',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		1
		}
	},
	craft_spear:{
		name: 			'精巧的矛',
		unlock_name: 	'学习制造长矛',
		item_id: 		'spear',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		2
		}
	},
	craft_bone_spear:{
		name: 			'精巧的骨矛',
		unlock_name: 	'学习制作骨矛',
		item_id: 		'spear',
		chance: 		20,
		skill: 			'狩猎',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			bone:		3,
			lumber: 	2
		},
		unlock_cost:{
			bone:		30,
			lumber: 	20
		}
	},
	
	milk_cows:{
		name: 			'奶牛',
		unlock_name: 	'开始挤奶',
		item_id: 		'milk',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 		'挤奶',
		fail_text: 		'milk',
		upgrade_item: 		'cow',
		unlock_cost:{
			cow:		5,
		}
	},
	churn_butter:{
		name: 			'搅拌黄油',
		unlock_name: 		'开始搅拌黄油',
		item_id: 		'butter',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'搅拌',
		fail_text: 		'churn',
		cost:{
			milk: 		3,
		},
		unlock_cost:{
			lumber:		5,
			milk: 		25,
		}
	},
	make_cheese:{
		name: 			'做奶酪',
		unlock_name: 		'造奶酪',
		item_id: 		'cheese',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			milk: 		10,
			rennet: 	1,
			salt: 		1,
		},
		unlock_cost:{
			lumber:		5,
			cloth: 		1,
			milk: 		25,
		}
	},
	breed_sheep:{
		name: 			'养羊',
		unlock_name: 	'学会饲养绵羊',
		item_id: 		'sheep',
		chance: 		20,
		reward_factor: 	2,
		skill: 			'畜牧业',
		action_name: 		'繁殖',
		fail_text: 		'breed',
		cost:{
			hay_bale:		3,
		},
		unlock_cost:{
			sheep:			2,
			hay_bale: 		20,
		}
	},
	shear_sheep:{
		name: 			'剪羊毛',
		unlock_name: 	'开始放羊',
		item_id: 		'wool',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 	'剪',
		fail_text: 		'shear',
		upgrade_item: 	'sheep',
		unlock_cost:{
			sheep:		5,
		}
	},
	breed_cows:{
		name: 			'养牛',
		unlock_name: 	'学会饲养奶牛',
		item_id: 		'cow',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 		'繁殖',
		fail_text: 		'breed',
		cost:{
			hay_bale:		2,
		},
		unlock_cost:{
			cow:			2,
			hay_bale: 		30,
		}
	},
	breed_horses:{
		name: 			'种马',
		unlock_name: 	'学会养马',
		item_id: 		'horse',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 		'繁殖',
		fail_text: 		'breed',
		cost:{
			carrot:		5,
			hay_bale:	3,
		},
		unlock_cost:{
			carrot:		100,
			horse:		2,
			hay_bale: 	40
		}
	},
	
	knit_cloth:{
		name: 			'针织布',
		unlock_name: 	'学习织布',
		item_id: 		'cloth',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'编织',
		fail_text: 		'knit',
		cost:{
			wool:		3,
		},
		unlock_cost:{
			wool: 		15,
		}
	},
	weave_cloth:{
		name: 			'织麻布',
		unlock_name: 	'学会把麻编织成布',
		item_id: 		'cloth',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'编织',
		fail_text: 		'weave',
		cost:{
			twine:		3,
		},
		unlock_cost:{
			twine: 		15,
		}
	},
	wind_twine:{
		name: 			'纺线',
		unlock_name: 	'开始纺线',
		item_id: 		'twine',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'纺线',
		fail_text: 		'wind',
		reward_factor: 	3,
		cost:{
			flax:		10,
		},
		unlock_cost:{
			flax: 		100,
			stone: 		100
		}
	},
	weave_bandage:{
		name: 			'制作绷带',
		unlock_name: 	'学习制作绷带',
		item_id: 		'bandage',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'编织',
		fail_text: 		'weave',
		cost:{
			cloth:		3,
			parsley: 	10
		},
		unlock_cost:{
			cloth: 		15,
			parsley: 	30
		}
	},
	sew_sack:{
		name: 			'缝麻袋',
		unlock_name: 	'学习缝麻袋',
		item_id: 		'sack',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'缝纫',
		fail_text: 		'sew',
		cost:{
			cloth:		1,
		},
		unlock_cost:{
			cloth: 		5,
		}
	},
	sew_pillow:{
		name: 			'缝枕头',
		unlock_name: 	'学习缝枕头',
		item_id: 		'pillow',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'缝纫',
		fail_text: 		'sew',
		cost:{
			sack:		1,
			feather: 	10,
		},
		unlock_cost:{
			sack: 		10,
			feather: 	100
		}
	},
	sew_cloak:{
		name: 			'缝斗篷',
		unlock_name: 	'学习缝斗篷',
		item_id: 		'cloak',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'缝纫',
		fail_text: 		'sew',
		cost:{
			cloth:		6,
		},
		unlock_cost:{
			cloth: 		25,
		}
	},
	
	tan_leather:{
		name: 			'棕褐色皮革',
		unlock_name: 	'学习晒皮革',
		item_id: 		'leather',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'晒制',
		fail_text: 		'tan',
		cost:{
			hide:		3,
		},
		unlock_cost:{
			hide: 		15,
		}
	},
	craft_boots:{
		name: 			'精巧的靴',
		unlock_name: 	'学习制作靴子',
		item_id: 		'boots',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			leather:		3,
			cloth: 			1
		},
		unlock_cost:{
			leather:		10,
			cloth: 			5
		}
	},
	craft_saddle:{
		name: 			'精巧的马鞍',
		unlock_name: 	'学习制作马鞍',
		item_id: 		'saddle',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			leather:		3,
			iron: 			3
		},
		unlock_cost:{
			leather:		15,
			iron: 			15
		}
	},
	hunt_wild_sheep:{
		name: 			'捕捉野生牲畜',
		unlock_name: 	'寻找一些野生牲畜',
		bonus_loot:{
			sheep: 		25,
			cow: 		10,
			horse: 		1,
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'hunt',
		cost:{
			hay:		3,
		},
		unlock_cost:{
			hay:		100,
		}
	},
	hunt_wolf:{
		name: 			'猎狼',
		unlock_name: 	'开始引诱狼',
		item_id: 		'hide',
		bonus_loot:{
			bone: 		25,
			meat: 		10,
		},
		chance: 		20,
		reward_factor: 	3,
		skill: 			'狩猎',
		action_name: 	'打猎',
		fail_text: 		'hunt',
		upgrade_item: 	'hunter',
		cost:{
			arrow: 		1,
			meat:		1,
		},
		unlock_cost:{
			hunter: 	1,
			meat: 		10,
		}
	},
	hunt_wild_animals:{
		name: 			'猎杀野生动物',
		type: 			'combat',
		action_name: 	'猎杀',
		possible_monsters:{
			0:{
				chance: 	1000,
				monsters:{
				}
			},
			1:{
				chance: 	20,
				monsters:{
					m_hunter:{
						min: 	1,
						max: 	1,
					}
				}
			},
			2:{
				chance: 	25,
				monsters:{
					m_robin: 	{
						min: 	1,
						max: 	1,
					},
				}
			},
			3:{
				chance: 	2,
				monsters:{
					m_brown_bear: 	{
						min: 	1,
						max: 	1,
					},
				}
			},
			4:{
				chance: 	25,
				monsters:{
					m_roe: 	{
						min: 	1,
						max: 	1,
					},
				}
			},
			5:{
				chance: 	100,
				monsters:{
					m_squirrel: 	{
						min: 	3,
						max: 	8,
					},
				}
			},
			
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	hunt_birds:{
		name: 			'猎鸟',
		unlock_name: 	'指派一个猎人去寻找鸟',
		item_id: 		'feather',
		bonus_loot:{
			egg: 		5,
			hay: 		5,
			meat: 		1,
		},
		chance: 		20,
		reward_factor: 		4,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'hunt',
		upgrade_item: 		'hunter',
		cost:{
			arrow:		1,
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	hunt_rabbits:{
		name: 			'猎兔',
		unlock_name: 	'指派一个猎人去寻找兔子',
		bonus_loot:{
			hide: 		100,
			meat: 		1,
			bone: 		1,
		},
		chance: 		20,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'miss',
		upgrade_item: 	'hunter',
		cost:{
			arrow:		1,
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	hunt_boars:{
		name: 			'猎猪',
		unlock_name: 	'指派一名猎人寻找野猪',
		item_id: 		'meat',
		bonus_loot:{
			hide: 		50,
			bone: 		10,
		},
		chance: 		20,
		reward_factor: 	4,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'hunt',
		upgrade_item: 	'hunter',
		cost:{
			spear:		1,
		},
		unlock_cost:{
			hunter: 	1,
			spear: 		10,
		}
	},
	hunt_deer:{
		name: 			'猎鹿',
		unlock_name: 	'指派一个猎人去寻找鹿',
		bonus_loot:{
			meat: 		100,
			hide: 		50,
			bone: 		20,
		},
		chance: 		20,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'miss',
		upgrade_item: 	'hunter',
		cost:{
			arrow:		1,
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	butcher_chickens:{
		name: 			'杀鸡',
		unlock_name: 	'开始杀鸡',
		item_id: 		'meat',
		bonus_loot:{
			feather: 	100,
			bone: 		50
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'屠宰',
		action_name: 	'屠宰',
		fail_text: 		'butcher',
		upgrade_item: 	'knife',
		cost:{
			chicken: 	1,
		},
		unlock_cost:{
			chicken: 	50,
			knife: 		1
		}
	},
	butcher_sheep:{
		name: 			'杀羊',
		unlock_name: 	'开始屠宰绵羊',
		item_id: 		'meat',
		bonus_loot:{
			bone: 		10
		},
		chance: 		20,
		reward_factor: 	3,
		skill: 			'屠宰',
		action_name: 		'屠宰',
		fail_text: 		'butcher',
		cost:{
			sheep: 		1,
		},
		unlock_cost:{
			sheep: 		10,
		}
	},
	butcher_cow:{
		name: 			'杀牛',
		unlock_name: 	'开始屠宰奶牛',
		item_id: 		'meat',
		chance: 		20,
		bonus_loot:{
			hide: 		100,
			rennet: 	20,
			bone: 		10
		},
		reward_factor: 	3,
		skill: 			'屠宰',
		action_name: 		'屠宰',
		fail_text: 		'butcher',
		cost:{
			cow: 		1,
		},
		unlock_cost:{
			cow: 		10,
		}
	},
	package_meat:{
		name: 			'包装肉',
		unlock_name: 	'分类包装肉类',
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'打包',
		action_name: 		'打包',
		fail_text: 		'pack',
		cost:{
			meat: 			12,
			crate: 			1,
		},
		unlock_cost:{
			meat:  			40,
			crate: 			3,
		}
	},
	cook_onion_rings:{
		name: 			'煮洋葱圈',
		unlock_name: 	'学习烹饪洋葱圈',
		item_id: 		'onion_rings',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			flour:  	1,
			onion: 		2,
			firewood: 	1
		},
		unlock_cost:{
			flour:  	10,
			onion: 		10,
			firewood: 	10
		}
	},
	cook_tomato_soup:{
		name: 			'煮番茄汤',
		unlock_name: 	'学做西红柿汤',
		item_id: 		'tomato_soup',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			tomato:  	10,
			meat: 		1,
			firewood: 	3
		},
		unlock_cost:{
			tomato:  	20,
			meat: 		2,
			firewood: 	5
		}
	},
	cook_hamburger:{
		name: 			'制作汉堡包',
		unlock_name: 	'学习制作汉堡包',
		item_id: 		'hamburger',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			bread:  	1,
			salad: 		1,
			meat: 		1,
			onion: 		1,
			firewood: 	5
		},
		unlock_cost:{
			bread:  	10,
			salad: 		10,
			meat: 		10,
			onion: 		10,
			firewood: 	50
		}
	},
	cook_steak:{
		name: 			'制作牛排',
		unlock_name: 	'学习制作牛排',
		item_id: 		'steak',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			meat: 		1,
			firewood: 	10
		},
		unlock_cost:{
			meat: 		10,
			firewood: 	100
		}
	},
	cook_steak_dinner:{
		name: 			'做牛排晚餐',
		unlock_name: 	'学习制作牛排晚餐',
		item_id: 		'steak_dinner',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			steak: 		3,
			fries: 		4,
			salad: 		5,
		},
		unlock_cost:{
			steak: 		30,
			fries: 		40,
			salad: 		50,
		}
	},
	serve_three_course_dinner:{
		name: 			'三道菜晚餐',
		unlock_name: 		'开始供应三道菜的晚餐',
		item_id: 		'treasure',
		chance: 		20,
		skill: 			'接待',
		action_name: 		'接待',
		fail_text: 		'serve',
		cost:{
			tomato_soup: 		2,
			steak_dinner: 		2,
			apple_pie: 		2,
		},
		unlock_cost:{
			tomato_soup: 		5,
			steak_dinner: 		5,
			apple_pie: 		5,
		}
	},
	serve_high_tea:{
		name: 			'茶点',
		unlock_name: 		'开始供应茶点',
		item_id: 		'treasure',
		chance: 		20,
		skill: 			'接待',
		action_name: 		'接待',
		fail_text: 		'serve',
		cost:{
			cucumber_sandwich: 		20,
			mint_tea: 				20,
		},
		unlock_cost:{
			cucumber_sandwich: 		50,
			mint_tea: 				50,
		}
	},
}

var available_skills = {};

$.each(available_actions, function(action_id, action_info){
	if(available_skills[action_info['skill']] == undefined && action_info['item_id'] != undefined)
	{
		available_skills[action_info['skill']] = {
			item_id: action_info['item_id']
		};
	}
});