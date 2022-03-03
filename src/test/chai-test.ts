import chai from "chai";
const expect = chai.expect;
import { getWorkers } from "../services/WorkerService";

describe("Worker List", () => {
  it("should check worker list ", async () => {
    let result = await getWorkers();
    expect(result).to.be.a('object');
  });
});


