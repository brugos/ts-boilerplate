import { assert } from "chai";
import chaiHttp from "chai-http";
import { app } from "./index";

chai.use(chaiHttp);

describe("Example Code Spec", () => {
  it("should run mocha", () => {
    assert.equal(true, true);
  });

  it("should get all students record", (done) => {
    chai
      .request(app)
      .get("/hi")
      .end((err, res) => {
        assert.equal(res.status, 200);
        // res.should.have.status(200);
        // res.body.should.be.a("object");
        done();
      });
  });
});
