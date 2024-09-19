// makeTitleOfApp.js

function makeTitleOfApp()
{
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.bottom = '10px';
    titleContainer.style.zIndex = 1;
    ba(titleContainer);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'Topalian JavaScript Piano';
    titleOfApp.href = 'https://github.com/christophertopalian';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleContainer.append(titleOfApp);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

