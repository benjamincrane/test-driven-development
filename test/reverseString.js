var expect = require('chai').expect;

describe('#reverseString()', function() {
	it('reverses a string', function() {
		expect(reverseString('Word')).to.equal('droW');
	});
});

// Write the method that will make this test pass.
var reverseString = function(string) {
	reversedString = [];
	for (var i = string.length-1; i >= 0; i--) {
		reversedString.push(string[i]);
	}
	reversedString = reversedString.toString();
	return reversedString.replace(/,/g,"");
}