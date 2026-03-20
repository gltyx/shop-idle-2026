var gamedata = {};
var gamename = "newgame";

function loadLocalStorage(){
	if (typeof(localStorage.newgame) !== "undefined") {
	    console.log('Save game found');
	    var tempgamedata = localStorage.getItem(gamename);
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	} else {
	    console.log('Sorry! No save game');  
	    saveToLocalStorage();
	}
	//console.log(gamedata);

	check_local_storage(gamedata);

	return gamedata;

};

function clearLocalStorage(){
	gamedata = {};
	localStorage.removeItem(gamename);
};

function saveToLocalStorage(){
	localStorage.removeItem(gamename);
	localStorage.setItem(gamename, JSON.stringify(gamedata));
};


function exportLocalStorageToFile(newgame) {
  try {
    const data = localStorage.getItem('newgame');
    if (data === null) {
      alert(`⚠️ 本地存储中未找到键 "${newgame}"`);
      return;
    }

    // ✅ 构造文件内容（保持原始格式，若存的是 JSON 字符串，可选择美化）
    const content = JSON.stringify(JSON.parse(data), null, 2); // 美化输出，可选
    const blob = new Blob([content], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${newgame}.json`; // 文件名建议含扩展名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert(`✅ 已成功导出 "${newgame}.json" 到本地！`);
  } catch (err) {
    alert(`❌ 导出失败：${err.message}`);
  }

}

function check_local_storage(gamedata){

	if(gamedata['exploration'] == undefined)
	{
		var d = new Date();
		var n = d.getTime();

		gamedata['exploration'] = {
			successful_explores: 	0,
			last_checked: 			n,
			current_progress: 		0,
			progress_per_sec: 		0
		}
	}

	if(gamedata['known_locations'] == undefined)
	{
		gamedata['known_locations'] = {};
	}

	if(gamedata['version'] == undefined || gamedata['version'] < 0.1)
	{
		gamedata['version'] = 0.1;
		$.each(gamedata['skills'], function(skill_id, skill_info){
			skill_info['level'] = Math.ceil(skill_info['level'] / 10);
		});
	}
}