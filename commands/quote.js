module.exports = {
	name: 'Quote',
	description: 'Saves a message.',
	keys: ['q', 'quote'],
	required: ["quotes", "updater"],
	execute(message, args, managers = {}) {
		managers.quotes.quote(message, args, managers.updater);
	},
};

