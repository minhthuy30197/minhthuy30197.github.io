var TYPE_BOARD = ['to_do', 'doing', 'done'];

var DB = {
	getData: function(name) {
		var data;
		if (typeof(Storage) !== "undefined") {
			try {
				data = JSON.parse(localStorage.getItem(name)) || {};
			} catch(error) {
				data = {};
			}

		} else {
			data = {};
			alert('Sorry! No Web Storage support..');
		}
		return data;
	},

	setData: function(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	}
}

var app = {
	add_task: function(e, type, input) {
		var ev = window.event || e;
		if (ev.keyCode === 13) {
			var task = $(input).val();
			if (task.trim() != '') {
				if ((type == "doing" && list_task[type].length >= setup.max_doing) 
				|| (type == "done" && list_task[type].length >= setup.max_done)
				|| (type == "to_do" && list_task[type].length >= setup.max_to_do)) {
					alert('Số lượng công việc ở cột '+type+' đã đạt đến giới hạn.\nĐể thêm công việc, vui lòng xóa bớt hoặc thay đổi trong mục cài đặt.');
				} else {
					this.add_to_list(type, task);
					
					if (typeof list_task[type] == 'undefined') list_task[type] = [];
					list_task[type].push(task);
					DB.setData("listtask", list_task);
					$('#'+type+"_count").text(list_task[type].length);
				}
				$(input).val('');
			} else {
				alert('Vui lòng nhập công việc!');
			}
		} 
	},

	add_to_list: function(type, task) {
		var item = '<li class="list-group-item"> <p class="content">'+task+'</p> <div class="funtion-btn"> <a><span class="glyphicon glyphicon-pencil" onclick="app.change_task(this)"></span></a> <a><span class="glyphicon glyphicon-trash" onclick="app.delete_task(this)"></span></a> </div> </li>';
		$('#'+type).append(item);
	},

	delete_task: function(span) {
		var item = $(span).parent().parent().parent();
		$('#modal_delete').modal();
		$('#confirm_delete').off('click');
		$('#confirm_delete').on('click', function() {
			var type_board = item.parent().attr('id');
			var pos = $('#'+ type_board + ' li').index(item);
			list_task[type_board].splice(pos, 1);
			DB.setData("listtask", list_task);
			item.remove();
			$('#'+type_board+"_count").text(list_task[type_board].length);
			$('#modal_delete').hide();
		})
	},

	change_task: function(span) {
		var item = $(span).parent().parent().parent().find('p');
		$('#task_need_change').val(item.text());
		$('#modal_change').modal();
		$('#change').off('click');
		$('#change').on('click', function() {
			var newTask = $('#task_need_change').val();
			if (newTask.trim() == '') {
				alert('Không thể thay đổi nội dung công việc vì nội dung bạn nhập trống');
			}
			else {
				var type_board = item.parent().parent().attr('id');
				var pos = $('#'+ type_board + ' li').index(item.parent());
				list_task[type_board][pos] = newTask;
				DB.setData("listtask", list_task);
				item.text(newTask);
				$('#modal_delete').hide();
			}
		})
	},

	setup: function() {
		var max_to_do = setup.max_to_do || 10;
		var max_doing = setup.max_doing || 3;
		var max_done = setup.max_done || 10;
		$('#max_to_do').val(max_to_do);
		$('#max_doing').val(max_doing);
		$('#max_done').val(max_done);
		$('#modal_setup').modal();

		$('#setup').off('click');
		$('#setup').on('click', function() {
			setup.max_to_do = $('#max_to_do').val();
			setup.max_doing = $('#max_doing').val();
			setup.max_done = $('#max_done').val();
			DB.setData("setup", setup);
			if (setup.max_to_do < list_task["to_do"].length ||
				setup.max_doing < list_task["doing"].length ||
				setup.max_done < list_task["done"].length) 
				alert('Số lượng công việc ở các cột hiện tại chưa phù hợp với số lượng set up. Vui lòng xóa bớt.');
		});
	}
}

var list_task = DB.getData("listtask");
var setup = DB.getData("setup");

$( function() {
	TYPE_BOARD.forEach(function(type) {
		var list = list_task[type] || [];
		list.forEach(function(task) {
			app.add_to_list(type, task);
		});
		$('#'+type+"_count").text(list.length);
	});

	if (typeof setup.max_to_do == "undefined") setup.max_to_do = 10;
	if (typeof setup.max_doing == "undefined") setup.max_doing = 3;
	if (typeof setup.max_done == "undefined") setup.max_done = 10;
	DB.setData("setup", setup);

	$('.sortedlist').sortable({
		connectWith: '.sortedlist',
		placeholder: 'ui-state-highlight',

		start: function(event,ui) {
			ui.item.oldColumnType = ui.item.parent().attr('id');
			ui.item.oldItemPosition = ui.item.index();
		},

		stop: function(event, ui) {
			var oldColumnType = ui.item.oldColumnType;
			var oldItemPosition = ui.item.oldItemPosition;
			var newColumnType = ui.item.parent().attr('id');
			var newItemPosition = ui.item.index();
			list_task[oldColumnType].splice(oldItemPosition, 1);
			list_task[newColumnType].splice(newItemPosition, 0, ui.item.find('p').text());
			DB.setData("listtask", list_task);
		}
	});
});

