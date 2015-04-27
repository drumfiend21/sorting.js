describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
});

describe('Bubble Sort', function(){
    it('handles a single item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });
});



describe('Bubble Sort', function(){
    it('handles an array with multiple unsorted elements', function(){
        expect( bubbleSort([4,2,3,1]) ).toEqual( [1,2,3,4] );
    });
});

describe('Bubble Sort', function(){
    it('handles an array with multiple unsorted elements', function(){
        expect( bubbleSort([4,2,9,3,1]) ).toEqual( [1,2,3,4,9] );
    });
});


describe('Merge', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1,3,5], [2,4,6]) ).toEqual([1,2,3,4,5,6])
    });
});

describe('Merge', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1,7,9], [3,5]) ).toEqual([1,3,5,7,9])
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
        expect(split([1,2,3,4,5,6]) ).toEqual([ [1,2,3],[4,5,6] ])
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
        expect(split([1,2,3,4,5,6,7]) ).toEqual([ [1,2,3,4],[5,6,7] ])
  });
});

describe('Merge Sort', function(){
    it('is able to sort an array', function(){
        expect(mergeSort( [1,7,9,5,3,2,8,4,6] )).toEqual([1,2,3,4,5,6,7,8,9])
    });
});

describe('Merge Sort', function(){
    it('is able to sort an array', function(){
        expect(mergeSort( [1,7,9,5,3,2,8,4,6,10] )).toEqual([1,2,3,4,5,6,7,8,9,10])
    });
});