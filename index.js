module.exports = function stvl(value, fallbackValue) {
	return (typeof value === 'string') ? value : fallbackValue;
};
