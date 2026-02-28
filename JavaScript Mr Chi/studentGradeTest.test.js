const  {
    inputResults,
    totalPerStudent,
    averagePerStudent,
    position,
    totalPerSubject,
    subjectAverage,
    subjectSummary,
    classSummary,
    hardestAndEasiest
} = require("./studentGrade")


test("totalPerStudent: adds scores correctly for 2 students, 3 subjects", () => {
    let results = [[70, 80, 90], [60, 55, 45]];
    expect(totalPerStudent(results)).toEqual([240, 160]);
});

test("totalPerStudent: returns correct array length", () => {
    let results = [[10, 20], [30, 40], [50, 60]];
    expect(totalPerStudent(results).length).toBe(3);
});

test("totalPerStudent: handles a single student with one subject", () => {
    expect(totalPerStudent([[85]])).toEqual([85]);
});

test("totalPerStudent: handles all zero scores", () => {
    expect(totalPerStudent([[0, 0, 0]])).toEqual([0]);
});

test("totalPerStudent: handles perfect scores of 100", () => {
    expect(totalPerStudent([[100, 100, 100]])).toEqual([300]);
});


test("averagePerStudent: calculates average correctly", () => {
    let avg = averagePerStudent([240, 180], 3);
    expect(avg[0]).toBe(80);
    expect(avg[1]).toBe(60);
});

test("averagePerStudent: average of perfect total is 100", () => {
    expect(averagePerStudent([300], 3)[0]).toBe(100);
});

test("averagePerStudent: average of zero total is 0", () => {
    expect(averagePerStudent([0], 3)[0]).toBe(0);
});

test("averagePerStudent: returns correct array length", () => {
    expect(averagePerStudent([100, 200, 150], 2).length).toBe(3);
});

test("averagePerStudent: decimal averages are correct (150 / 4 = 37.5)", () => {
    expect(averagePerStudent([150], 4)[0]).toBe(37.5);
});



test("position: top scorer gets position 1", () => {
    expect(position([300, 200, 100])[0]).toBe(1);
});

test("position: lowest scorer gets last position", () => {
    expect(position([300, 200, 100])[2]).toBe(3);
});

test("position: middle scorer gets position 2", () => {
    expect(position([300, 200, 100])[1]).toBe(2);
});

test("position: tied scores share the same position", () => {
    let pos = position([200, 200, 100]);
    expect(pos[0]).toBe(1);
    expect(pos[1]).toBe(1);
    expect(pos[2]).toBe(3);
});

test("position: single student is always position 1", () => {
    expect(position([150])[0]).toBe(1);
});

test("position: all students tied — all get position 1", () => {
    expect(position([100, 100, 100])).toEqual([1, 1, 1]);
});

test("position: descending order positions are correct", () => {
    expect(position([90, 80, 70, 60])).toEqual([1, 2, 3, 4]);
});

test("position: ascending order positions are correct", () => {
    expect(position([60, 70, 80, 90])).toEqual([4, 3, 2, 1]);
});


test("totalPerSubject: sums each subject column correctly", () => {
    let results = [[70, 80], [60, 40], [50, 30]];
    expect(totalPerSubject(results, 2)).toEqual([180, 150]);
});

test("totalPerSubject: returns correct length equal to noOfSubjects", () => {
    expect(totalPerSubject([[10, 20, 30]], 3).length).toBe(3);
});

test("totalPerSubject: single student totals match their own scores", () => {
    expect(totalPerSubject([[45, 78, 92]], 3)).toEqual([45, 78, 92]);
});

test("totalPerSubject: all zero scores total to zero", () => {
    expect(totalPerSubject([[0, 0], [0, 0]], 2)).toEqual([0, 0]);
});


test("subjectAverage: calculates subject averages correctly", () => {
    expect(subjectAverage([180, 150], 3)).toEqual([60, 50]);
});

test("subjectAverage: returns correct array length", () => {
    expect(subjectAverage([100, 200, 300], 5).length).toBe(3);
});

test("subjectAverage: average of zero total is 0", () => {
    expect(subjectAverage([0, 0], 4)[0]).toBe(0);
});

test("test the subject average function", () => {
    expect(subjectAverage([100], 3)[0].toFixed(2)).toBe("33.33");
});



test("test the position function", () => {
    let results = [
        [80, 70, 90],   
        [60, 55, 65],   
        [75, 85, 80],   
    ];
    let totals = totalPerStudent(results);
    let pos    = position(totals);

    expect(totals).toEqual([240, 180, 240]);
    expect(pos[0]).toBe(1);
    expect(pos[1]).toBe(3);
    expect(pos[2]).toBe(1);
});

test("test subject totals and averages are correct", () => {
    let results = [
        [80, 70, 90],
        [60, 55, 65],
        [75, 85, 80],
    ];
    let subTotals = totalPerSubject(results, 3);
    let subAvg    = subjectAverage(subTotals, 3);

    expect(subTotals).toEqual([215, 210, 235]);
    expect(subAvg[0].toFixed(2)).toBe("71.67");
    expect(subAvg[2].toFixed(2)).toBe("78.33");
});

