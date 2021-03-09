const assert = require('assert');
const sinon = require('sinon');

describe('CalculService', () => {

  describe('#additioner', () => {
    it('should add values', () => {
      let result = CalculService.additioner(1, 5);
      assert.equal(result, 6);
    });
  });

  describe('#soustraire', () => {
    it('should add values', () => {
      let result = CalculService.soustraire(10, 4);
      assert.equal(result, 6);
    });
  });

  describe('#multiplication', () => {
    it('should multiplicate values', () => {
      // let result = CalculService.multiplication(10, 4);
      // assert.equal(result, 40);
    });
  });

  describe('#division', () => {
    it('should not div value by 0', () => {
      try {
        let result = CalculService.div(25,0);
      } catch(e) {
        assert(e.message, 'Division par 0 impossible.');
        return;
      }
      assert(false);
    });
  });

  // describe('#pourcentage', () => {
  //   it('should calls div and mul when calculating a percentage', () => {
  //     const spyMul = sinon.spy(CalculService, 'multiplication');
  //     const spyDiv = sinon.spy(CalculService, 'division');
  //     const result = CalculService.pourcentage(10,10);
  //
  //     assert.equal(spyDiv.calledOnce);
  //     assert.equal(spyMul.calledOnce);
  //
  //     assert(spyDiv.calledImmediatelyAfter(spyMul));
  //
  //     CalculService.multiplication.restore();
  //     CalculService.division.restore();
  //   });
  // });

  // describe('#pow', () => {
  //   it('should au carré values', () => {
  //     const spyMul = sinon.spy(CalculService, 'multiplication');
  //     const spyDiv = sinon.spy(CalculService, 'division');
  //     const result = CalculService.pow(5);
  //
  //     assert.equal(spyDiv.callCount,0);
  //
  //     assert(spyMul.calledOnce);
  //     assert(spyMul.calledWith(5,5));
  //
  //     CalculService.multiplication.restore();
  //     CalculService.division.restore();
  //   });
  //});

});
