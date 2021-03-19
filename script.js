let meet = 
   { tim: 3,
    jim: 9,
    randy: 2,
    sandy: 9,
    andy: 0,
    katie: 9,
    laura: 8,
    saajid: 0,
    alex: 0,
    john: 5,
    mr: 4 } 
    
let boss = 'katie'
console.log(outed(meet,boss))
function outed(meet, boss){
    let totalSum = 0
    for (const key in meet) {
        if ( key === boss) {
            totalSum += meet[key] * 2
        } else {
            totalSum += meet[key]
        }
    }
    
    debugger
        let result = Math.round(totalSum / Object.values(meet).length)
        
        if (result <= 5) {
          return 'Get Out Now!'
        } else {
          return 'Nice Work Champ!'
        }
      }