var jsonData = {
    "values" : [
        {
            "key": "Main",
            "option1": "White",
            "option2": "Black",
            "option3": "",
            "desc": "Preferred Side",
            "depth": 0
        },
        {
            "key": "White",
            "option1": "E4",
            "option2": "D4",
            "option3": "Other Openings",
            "desc": "What do you play?",
            "depth": 1
        },
        {
            "key": "E4",
            "option1": "Roy Lopez",
            "option2": "Italian Game",
            "option3": "Scotch",
            "desc": "Which E4 opening?",
            "depth": 2
        },
        {
            "key": "D4",
            "option1": "Queens Gambit",
            "option2": "London",
            "option3": "Hyper Aggressive Gambits",
            "desc": "Which D4 Openings?",
            "depth": 2
        },
        {
            "key": "Other Openings",
            "option1": "Reti",
            "option2": "English",
            "option3": "",
            "desc": "What other white openings?",
            "depth": 2
        },
        {
            "key": "Black",
            "option1": "E4 Defenses",
            "option2": "D4 Defenses",
            "option3": "Other Defenses",
            "desc": "What do you prefer?",
            "depth": 1
        },
        {
            "key": "E4 Defenses",
            "option1": "Sicilian Defense",
            "option2": "Caro-Kann",
            "option3": "E5",
            "desc": "What to play against E4?",
            "depth": 2
        },
        {
            "key": "D4 Defenses",
            "option1": "Kings Indian",
            "option2": "Dutch",
            "option3": "",
            "desc": "What to play against D4?",
            "depth": 2
        },
        {
            "key": "Other Defenses",
            "option1": "Alekhine Defense",
            "option2": "Queens Gambit Declined",
            "option3": "",
            "desc": "Other defenses you play?",
            "depth": 2
        },
        {
            "key": "Roy Lopez",
            "name": "Bobby Fischer",
            "desc": "Bobby Fischer was an American GrandMaster at chess, and was the first player to reach FIDE number one ranked player. He was a prodigy chess player by the age of 13, and played a game that is now called 'The Game of the Century'.",
            "board": "assets/roy_lopez_opening.png",
            "depth": 3
        },
        {
            "key": "Italian Game",
            "name": "Gioachino Greco",
            "desc": "Gioachino Greco was the creator of this type of solid opening for white, and he analyzed this opening in the 1620's. This opening is the most used opening in all of chess, played from the beginner level to the grandmasters.",
            "board": "assets/italian_game_opening.png",
            "depth": 3
        },
        {
            "key": "Scotch",
            "name": "Garry Kasparov",
            "desc": "An outstanding player in recent years, Kasparov holds the record for most consecutive professional tournament victories, as well as having the highest rating until 2013.",
            "board": "assets/scotch_opening.png",
            "depth": 3
        },
        {
            "key": "Queens Gambit",
            "name": "Wilhelm Steinitz",
            "desc": "Steinitz was an Austrian/American chess master, and was the first official World Chess Champion in 1886. He is credited with the positional style of play; utilizing forks and pins.",
            "board": "assets/queens_gambit_opening.png",
            "depth": 3
        },
        {
            "key": "London",
            "name": "Eric Rosen",
            "desc": "YouTube personality and Twitch Streamer, Eric Rosen is known for his in-depth repertoire with the London System. He is most known for his blitz chess games, and commonly tries to 'dirty-flag' people when they are low on time.",
            "board": "assets/london_system_opening.png",
            "depth": 3
        },
        {
            "key": "Reti",
            "name": "Richard Reti",
            "desc": "Richard Reti was one of the principal subjects involving the creation and research of hypermodernism in chess; not taking the center of the board straight away. He is also known for his end game studies. ",
            "board": "assets/reti_opening.png",
            "depth": 3
        },
        {
            "key": "Hyper Aggressive Gambits",
            "name": "Alexandra Botez",
            "desc": "An American-Canadian chess player and Twitch Streamer, Botez is known for her masterful piece play when it comes to chess. So much so, she will sometimes purposefully give up her queen, and still find a way to win the game.",
            "board": "assets/hyper_agg_opening.png",
            "depth": 3
        },
        {
            "key": "English",
            "name": "Howard Staunton",
            "desc": "Howard was an English chess master who was the person who created the standardized chess pieces that we use in competitive play today. Both the English opening and the Staunton Gambit were named after him. ",
            "board": "assets/english_opening.png",
            "depth": 3
        },
        {
            "key": "Sicilian Defense",
            "name": "Magnus Carlsen",
            "desc": "Considered one of the best chess player to have ever played, Magnus holds countless records and currently holds longest unbeaten run in record chess history.",
            "board": "assets/scillian_defense.png",
            "depth": 3
        },
        {
            "key": "Caro-Kann",
            "name": "Aron Nimzowitsch",
            "desc": "Another great chess player who had another key role in the creation of hypermodern openings. He was considered one of the best players by the late 1920's.",
            "board": "assets/caro_kann_defense.png",
            "depth": 3
        },
        {
            "key": "E5",
            "name": "Hikaru Nakamura",
            "desc": "As the youngest person to reach the title of GrandMaster in chess history, Hikaru and Magnus Carlsen are considered head-to-head for number one spot of current day chess. Hikaru is also a large twitch streamer, and partner with the E-sports organization TSM.",
            "board": "assets/e5_defense.png",
            "depth": 3
        },
        {
            "key": "Kings Indian",
            "name": "Ding Liren",
            "desc": "A Chinese grandmaster, he is the highest rated Chinese chess player in history. He had 100-game unbeaten streak up until 2018, where Magnus Carlsen was able to beat his record.",
            "board": "assets/french_defense.png",
            "depth": 3
        },
        {
            "key": "Dutch",
            "name": "Peter Svidler",
            "desc": "Russian Grandmaster, and eight-time Russian Chess Champion, Svidler now is a lead commentator for online chess events around the globe.",
            "board": "assets/dutch_defense.png",
            "depth": 3
        }
        ,
        {
            "key": "Alekhine Defense",
            "name": "Alexander Alekhine",
            "desc": "Considered one of the greatest chess players of all time, Alekhine was the creator of the opening named after him. He is known for the fierce attacking style.",
            "board": "assets/akelhine_defense.png",
            "depth": 3
        },
        {
            "key": "Queens Gambit Declined",
            "name": "Daniel Harrwitz",
            "desc": "A German chess master, who was never really known for his amazing skills. But, we was able to beat many top players using the oldest trick in the book; Queens Gambit Declined, Elephant Gambit. ",
            "board": "assets/Queens_Gambit_Declined_Defense.png",
            "depth": 3
        }
    ]
}