
// CRUD Operations
use("CrudDb");

// console.log(db);
// db.createCollection("courses");

// db.courses.insertOne({
//   name: "Harry web dev course",
//   Price: 0,
//   assignments: 12,
//   projects: 5,
// });

db.courses.insertMany([
  {
    name: "Harry Web Dev Course",
    Price: 0,
    assignments: 12,
    projects: 5,
  },
  {
    name: "Alice Python Course",
    Price: 25000,
    assignments: 10,
    projects: 4,
  },
  {
    name: "John ReactJS Mastery",
    Price: 20000,
    assignments: 8,
    projects: 6,
  },
  {
    name: "Emma Data Science Pro",
    Price: 25000,
    assignments: 15,
    projects: 7,
  },
  {
    name: "Sophia Machine Learning Basics",
    Price: 30000,
    assignments: 20,
    projects: 8,
  },
  {
    name: "Liam Cloud Computing Essentials",
    Price: 27000,
    assignments: 9,
    projects: 5,
  },
  {
    name: "Noah Full-Stack Development",
    Price: 18000,
    assignments: 12,
    projects: 6,
  },
  {
    name: "Olivia UI/UX Design Fundamentals",
    Price: 12000,
    assignments: 10,
    projects: 3,
  },
  {
    name: "Mia DevOps Crash Course",
    Price: 22000,
    assignments: 14,
    projects: 5,
  },
  {
    name: "Ethan Advanced Java Programming",
    Price: 25000,
    assignments: 18,
    projects: 7,
  },
]);

// READ
let a = db.courses.find({ Price: 25000 }).toArray();
console.log(a.count());

let b = db.courses.findOne({Price: 0});
console.log(b);

// UPDATE
db.courses.updateOne({ Price: 0 }, { $set: { Price: 100 } });

db.courses.updateMany({ Price: 18000 }, { $set: { Price: 15000 } });  

// DELETE
db.courses.deleteOne({ Price: 100 });
db.courses.deleteMany({ Price: 0 });