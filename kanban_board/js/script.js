var TYPE_BOARD = ['to_do', 'doing', 'done'];

var DB = {
	getData: function() {
		var data;
		if (typeof(Storage) !== "undefined") {
			try {
				data = JSON.parse(localStorage.getItem("listtask")) || {};
			} catch(error) {
				data = {};
			}

		} else {
			data = {};
			alert('Sorry! No Web Storage support..');
		}
		return data;
	},

	setData: function(data) {
		localStorage.setItem("listtask", JSON.stringify(data));
	}
}

var app = {
	add_task: function(e, type, input) {
		var ev = window.event || e;
		if (ev.keyCode === 13) {
			var task = $(input).val();
			if (task.trim() != '') {
				this.add_to_list(type, task);
				$(input).val('');
				if (typeof list_task[type] == 'undefined') list_task[type] = [];
				list_task[type].push(task);
				DB.setData(list_task);
			} else {
				alert('Vui lòng nhập công việc!')
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
		$('#confirm_delete').on('click', function() {
			item.remove();
			$('#modal_delete').hide();
		})
	},

	change_task: function(span) {
		var item = $(span).parent().parent().parent().find('p');
		$('#task_need_change').val(item.text());
		$('#modal_change').modal();
		$('#change').on('click', function() {
			var newTask = $('#task_need_change').val();
			if (newTask.trim() == '') {
				alert('Không thể thay đổi nội dung công việc vì nội dung bạn nhập trống');
			}
			else {
				item.text(newTask);
				$('.error').text('');
				$('#modal_delete').hide();
			}
		})
	}
}

var list_task = DB.getData();

$( function() {
	TYPE_BOARD.forEach(function(type) {
		var list = list_task[type] || [];
		list.forEach(function(task) {
			app.add_to_list(type, task);
		});
	});

	$( ".sortedlist" ).sortable({
		connectWith: ".sortedlist",
		placeholder: "ui-state-highlight"
	});
} );

