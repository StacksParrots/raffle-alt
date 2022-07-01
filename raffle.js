const csv=require('csvtojson')
const csvFilePath='users.csv'

const number_of_drawings = 10;


async function myfunction() {
  // console.log('Inside of myfunction');
  return await csv().fromFile(csvFilePath);
}

function start() {
  return myfunction();
}

// Call start
(async() => {
  console.log('\n');

  jsonArray = await start();

  const removedUsers = [];

  for (let i = 1; i <= number_of_drawings; i++) {
    console.log(`\nDrawing #${i}`)
    const randomIndex = Math.floor(Math.random()*jsonArray.length);
    console.log(`Picked: ${jsonArray[randomIndex]['username']}, number of tickets: ${jsonArray[randomIndex]['number_of_tickets']}`);
    jsonArray[randomIndex]['number_of_tickets'] = parseInt(jsonArray[randomIndex]['number_of_tickets']) - 1; // take a ticket
    if (jsonArray[randomIndex]['number_of_tickets'] == 0) { // if has no more tickets, remove from jsonArray (list of users)
      console.log(`Removing ${jsonArray[randomIndex]['username']} because no more tickets left!`);
      removedUsers.push(jsonArray.splice(randomIndex, 1)); // 2nd parameter means remove one item only
    }
  }
    
  console.log('\n');
  console.log(`Users who ran out of tickets:`)
  console.log(removedUsers);
})();