import Immutable from 'immutable';
import mori from 'mori';
// import {PrependTrait} from '../prepend';
// import {createClass, DEPTHS} from '../test/classUtil';
import {Cassowry} from '../src/index';
Cassowry.empty = Cassowry.empty.bind(Cassowry);
Cassowry.prepend = Cassowry.prepend.bind(Cassowry);

// Vector as a class --------------------------------------------------

// var Vector = createClass(PrependTrait)

describe('prepend/unshift comparisons', function() {
	it('immutable-js prepend 1k', function() {
		var list = Immutable.List();
		for (var i = 0; 1024 > i; i++) {
			list = list.unshift(i);
		}
	});

	it('mori vector unshift 1k', function() {
		var list = mori.vector();
		for (var i = 0; 1024 > i; i++) {
			list = mori.concat(mori.vector(i), list);
		}
	});

	// it('eagle prepend 1k', function() {
	// 	var list = Vector.empty();
	//
	// 	for (var i = 0; 1024 > i; i++) {
	// 		list = list.prepend(i, list)
	// 	}
	// })

	it('cassowry prepend 1k', function() {
		var c = Cassowry;
		var list = c.empty();
		var prepend = c.prepend;

		for (var i = 0; 1023 > i; i++) {
			list = prepend(i, list);
		}
	});

	it('native unshift 1k mutating(max possible)', function() {
		var list = [];
		for (var i = 0; 1024 > i; i++) {
			list.unshift(i);
		}
	});

	it('native unshift 1k immutable with es6 spread', function() {
		var list = [];
		for (var i = 0; 1024 > i; i++) {
			list = [i, ...list];
		}
	});
});
