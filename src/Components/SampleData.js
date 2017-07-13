
let SampleData = {
  Users: [
    { id: 0, userName: null, account: null },
    { id: 1, userName: 'andrew', account: 'admin' },
    { id: 2, userName: 'brian', account: 'user' },
    { id: 3, userName: 'adam', account: 'admin' },
    { id: 4, userName: 'riley', account: 'user' },
    { id: 5, userName: 'gina', account: 'user' }
  ],
  Logs: [
    { id: 0, userId: 0, startTime: null, finishTime: null, totalTime: null, activity: null, description: null, finished: null},
    { id: 1, userId: 1, startTime: new Date(2017, 6, 10, 15, 33), finishTime: new Date(2017, 6, 10, 17, 33), totalTime: null, activity: 'Skiing', description: 'Play time', finished: false },
    { id: 2, userId: 3, startTime: new Date(2017, 6, 9, 15, 33), finishTime: new Date(2017, 6, 9, 17, 33), totalTime: 105, activity: 'Managing', description: 'All work', finished: true },
    { id: 3, userId: 1, startTime: new Date(2017, 5, 8, 15, 33), finishTime: new Date(2017, 5, 8, 17, 33), totalTime: 51, activity: 'Climbing', description: 'Play time', finished: true },
    { id: 4, userId: 4, startTime: new Date(2017, 6, 10, 18, 33), finishTime: new Date(2017, 6, 10, 17, 33), totalTime: null, activity: 'Writing', description: 'Hard at Work', finished: false },
    { id: 5, userId: 1, startTime: new Date(2017, 12, 3, 15, 33), finishTime: new Date(2017, 12, 3, 17, 35), totalTime: 16, activity: 'Surfing', description: 'Break time', finished: true },
    { id: 6, userId: 5, startTime: new Date(2017, 4, 8, 15, 33), finishTime: new Date(2017, 4, 8, 17, 33), totalTime: null, activity: null, description: null, finished: false },
    { id: 7, userId: 1, startTime: new Date(2017, 2, 2, 15, 33), finishTime: new Date(2017, 2, 2, 17, 33), totalTime: 57, activity: 'Coding', description: 'Work time', finished: true },
    { id: 8, userId: 3, startTime: new Date(2017, 6, 5, 15, 33), finishTime: new Date(2017, 6, 5, 17, 33), totalTime: 347, activity: 'Emailing', description: 'Emails suck', finished: true },
    { id: 9, userId: 3, startTime: new Date(2017, 3, 21, 15, 33), finishTime: new Date(2017, 3, 21, 17, 33), totalTime: 62, activity: 'Facebooking', description: 'Break time', finished: true },
    { id: 10, userId: 4, startTime: new Date(2017, 5, 30, 15, 33), finishTime: new Date(2017, 5, 30, 17, 33), totalTime: null, activity: null, description: null, finished: false },
  ]
}

export default SampleData
