let selector = document.getElementById('select_1')
let main_1 = document.getElementById('main_1')

selector.addEventListener('change', function(){
    let a = selector.value
    if (a == 'PUBG') {
        main_1.innerHTML =      `
                                <div id="main_1">
                                    <div id="main_2">
                                        <div class="choose">
                                            <select name="" id="select_1">
                                                <option value="">Select</option>
                                                <option value="PUBG">PUBG</option>
                                                <option value="Minecraft">Minecraft</option>
                                                <option value="CS_GO">CS_GO</option>
                                                <option value="Witcher">Witcher</option>
                                            </select>
                                        </div>
                                        <div class="container">
                                            <div class="Logo">
                                                <div class="Logo_info_main">
                                                    <div class="Logo_info">
                                                        <img src="./img/pubg.png" alt="" class="img_1">
                                                        <button class="button_1">Go to Stem</button>
                                                        <button class="button_2">Download on our website</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="block">
                                                <div class="block_1">
                                                    <h2>About game</h2>
                                                    <h3>PlayerUnknown's Battlegrounds (abbreviated as PUBG, also collectively known as PUBG: Battlegrounds) is a Royal Glitter online multiplayer video game developed and published by PUBG Corporation, a subsidiary of Korean publisher Bluehole.</h3>
                                                </div>
                                                <div class="block_2">
                                                    <h2>Plot</h2>
                                                    <h3>PlayerUnknown's Battlegrounds is an action game in which up to 100 players fight in a "battle royale". Players can choose how to enter the match: alone, in pairs, in a trio, or in a squad of four. In either case, the last person or team left alive wins the match.</h3>
                                                </div>
                                                <div class="block_3">
                                                    <h2>Cross-platform</h2>
                                                    <h3>PUBG Lite</h3>
                                                    <h3>It is a version of Battlegrounds that is designed to run the game on weak computers.</h3>
                                                    <h3>PUBG: Mobile</h3>
                                                    <h3>Simplified version for phones</h3>
                                                    <h3>PUBG: New State</h3>
                                                    <h3>Also a mobile version. The game takes place in 2051.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
    } else if (a == 'Minecraft') {
        main_1.innerHTML =      `
                                <div id="main_1">
                                    <div id="main_3">
                                        <div class="choose">
                                            <select name="" id="select_1">
                                                <option value="">Select</option>
                                                <option value="PUBG">PUBG</option>
                                                <option value="Minecraft">Minecraft</option>
                                                <option value="CS_GO">CS_GO</option>
                                                <option value="Witcher">Witcher</option>
                                            </select>
                                        </div>
                                        <div class="container">
                                            <div class="Logo_2">
                                                <div class="Logo_info_main_2">
                                                    <div class="Logo_info">
                                                        <img src="./img/minecraft_PNG39.png" alt="" class="img_1_2">
                                                        <button class="button_1_2">Go to Stem</button>
                                                        <button class="button_2_2">Download on our website</button>
                                                    </div>
                                                </div>
                                                <img src="./img/pngwing 1.png" alt="">
                                            </div>
                                            <div class="block">
                                                <div class="block_1">
                                                    <h2>About game</h2>
                                                    <h3>Minecraft is a sandbox indie computer game created by Swedish programmer Markus Persson and published by his company Mojang AB. Persson published a stable version for Microsoft Windows PC , distributed through the official website. at the end of 2011, </h3>
                                                </div>
                                                <div class="block_2">
                                                    <h2>Plot</h2>
                                                    <h3>The player character appears on the surface of the earth in a random biome - for example, in the desert, mountains, plains, forests, and so on. The game does not have any specific goals or plot - it is based on the fact that the player improvises during the gameplay.</h3>
                                                </div>
                                                <div class="block_3">
                                                    <h2>Cross-platform</h2>
                                                    <h3>On September 20, 2017, the Better Together cross-platform update was released, combining various versions of Minecraft for different devices into a single master version - Bedrock Edition, while the old Java version of the game was subtitled Java Edition.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
    } else if (a == 'CS_GO') {
        main_1.innerHTML =      `
                                <div id="main_1">
                                    <div id="main_4">
                                        <div class="choose">
                                            <select name="" id="select_1">
                                                <option value="">Select</option>
                                                <option value="PUBG">PUBG</option>
                                                <option value="Minecraft">Minecraft</option>
                                                <option value="CS_GO">CS_GO</option>
                                                <option value="Witcher">Witcher</option>
                                            </select>
                                        </div>
                                        <div class="container">
                                            <div class="Logo_3">
                                                <div class="Logo_info_main_3">
                                                    <div class="Logo_info_3">
                                                        <img src="./img/22-222004_csgo-logo-png-picture-black-and-white-download.png" alt="" class="img_1_3">
                                                        <button class="button_1_3">Go to Stem</button>
                                                        <button class="button_2_3">Download on our website</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="block">
                                                <div class="block_1">
                                                    <h2>About game</h2>
                                                    <h3>Counter-Strike: Global Offensive is a multiplayer video game developed by Valve and Hidden Path Entertainment. The release of the game for personal computers on Windows and macOS operating systems,  took place on August 21, 2012.</h3>
                                                </div>
                                                <div class="block_2">
                                                    <h2>Plot</h2>
                                                    <h3>In the series, Counter-Strike: Global Offensive is a 3D multiplayer shooter in which players are divided into two teams and fight against each other. The game features two teams: terrorists and special forces, and also contains several multiplayer game modes.</h3>
                                                </div>
                                                <div class="block_3">
                                                    <h2>eSports</h2>
                                                    <h3>It is an esports discipline. The first tournament was DreamHack Winter 2013, which had a prize pool of $250,000, began to amount to $1,000,000. In 2021, PGL Major Stockholm 2021 was held with a total prize pool of $2,000,000</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>        
                                `
    } else if (a == 'Witcher') {
        main_1.innerHTML =      `
                                <div id="main_1">
                                    <div id="main_5">
                                        <div class="choose">
                                            <select name="" id="select_1">
                                                <option value="">Select</option>
                                                <option value="PUBG">PUBG</option>
                                                <option value="Minecraft">Minecraft</option>
                                                <option value="CS_GO">CS_GO</option>
                                                <option value="Witcher">Witcher</option>
                                            </select>
                                        </div>
                                        <div class="container">
                                            <div class="Logo_4">
                                                <div class="Logo_info_main_3">
                                                    <div class="Logo_info_3">
                                                        <img src="./img/6db48503abb29129a46ff78cfa354925.png" alt="" class="img_1_4">
                                                        <button class="button_1_4">Go to Stem</button>
                                                        <button class="button_2_4">Download on our website</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="block">
                                                <div class="block_1">
                                                    <h2>About game</h2>
                                                    <h3>The Witcher 3: Wild Hunt is an action/RPG video game developed by the Polish studio CD Projekt RED. Released on May 19, 2015 on Windows, PlayStation 4 and Xbox One, it is a sequel to The Witcher (2007) and The Witcher 2: Assassins of Kings (2011) games.</h3>
                                                </div>
                                                <div class="block_2">
                                                    <h2>Plot</h2>
                                                    <h3>The player plays as Geralt of Rivia, a monster hunter working on commission. There are a very large number of different types of monsters in the game. His combat arsenal includes bombs with various effects, a crossbow and two swords.</h3>
                                                </div>
                                                <div class="block_3">
                                                    <h2>Sales</h2>
                                                    <h3>For 2020, the total sales of the game reached 28.3 million copies. Due to the release of the Netflix TV series The Witcher in December 2019, sales of the game increased by 554% compared to December of the previous year. </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
    }
})