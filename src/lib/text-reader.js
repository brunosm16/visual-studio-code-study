const fs = require('fs');

const readFile = (filename) => {
	try {
		const dir = `${__dirname}/../files/${filename}`;
		return fs.readFileSync(dir).toString();
	} catch (e) {
		throw new Error(e);
	}
};

const extractWordsFromFile = (file) => {
	const noTabText = file.split('\n');
	const oneLineText = noTabText.join(' ');
	const words = oneLineText.split(' ');
	return words.map((word) => word.trim().toLowerCase());
};

const buildFrequencyMap = (words) => {
	const map = {};

	words.forEach((word) => {
		if (!map[word]) {
			map[word] = 1;
		} else {
			map[word] += 1;
		}
	});

	return map;
};

const findMostFrequentWord = (wordsFrequency) => {
	let mostFrequentWord = null;
	let mostFrequencyCount = -Infinity;

	Object.entries(wordsFrequency).forEach(([value, frequency]) => {
		if (frequency > mostFrequencyCount) {
			mostFrequencyCount = frequency;
			mostFrequentWord = value;
		}
	});

	return mostFrequentWord;
};

const getMostFrequentWord = (filename) => {
	const file = readFile(filename);
	const words = extractWordsFromFile(file);
	const wordsFrequency = buildFrequencyMap(words);
	const word = findMostFrequentWord(wordsFrequency);

	if (!word) {
		throw new Error('Not frequent word found');
	}

	return word;
};

module.exports = { getMostFrequentWord };
