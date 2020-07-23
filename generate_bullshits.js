// define sample function to randomly return an item in an array
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

function generateBullshits(options){
    // define things user might want
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
      
    }  
    const phrase = ['很簡單','很容易','很快','很正常']

    // dummy data of req.body
    // const options = {
    //     target : 'engineer'
    // }

    // create a collection to store things user picked up
    let targetName = ''
    let taskFiltered = []
    if (options.target === 'engineer') {
        targetName = '工程師'
        taskFiltered = task.engineer
    }
    if (options.target === 'designer') {
        targetName = '設計師'
        taskFiltered = task.designer
    }
    if (options.target === 'entrepreneur') {
        targetName = '創業家'
        taskFiltered = task.entrepreneur
    }
    
    // return error notice if collection is empty
    if (taskFiltered.length === 0 ) {
        return '你還沒選好要對誰說幹話喔'
    }
    // start generating password
    let bullshits = ''
    const targetFiltered = targetName
    const randomTask = sample(taskFiltered)
    const randomPhrase =  sample(phrase)
    bullshits = `身為一個 ${targetFiltered} ${randomTask} ${randomPhrase} 吧!`

    return bullshits
}

// generateBullshits()
// export generatePassword function for other files to use
module.exports = generateBullshits