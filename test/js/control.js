function load_game_from_path(path) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      game = JSON.parse(request.responseText.trim())
      level_gen_program.setValue(game['level_gen_program'], 1);
      visibility_program.setValue(game['visibility_program'], 1);
      player_plan_program.setValue(game['player_plan_program'], 1);
      player_move_program.setValue(game['player_move_program'], 1);
      nature_program.setValue(game['nature_program'], 1);
      goal_program.setValue(game['goal_program'], 1);
    }
  }
  request.open("GET", path, true);
  request.send();
}

load_game_from_path('stored/flag1.json');

file_input = document.getElementById('file_input');
upload_status = document.getElementById('upload_status');
function load_game_from_file() {
  if(file_input.files.length) {
    var reader = new FileReader();
    reader.onload = function(e)
    {
      alert('On loading..');
      upload_status.textContent = e.target.result;
    };
    reader.readAsBinaryString(file.files[0]);
  } else {
    alert('No file selected.');
  }
}
