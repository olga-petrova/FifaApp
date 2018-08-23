Ext.define('FifaApp.view.matches.MatchesViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.matchesviewcontroller',

	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	}
});
