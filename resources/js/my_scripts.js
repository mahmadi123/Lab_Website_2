/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle - 
					0 - hide the html tag
					1 - make the html tag visible
			
			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.  
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.  
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
function viewStudentStats(id, toggle){
	if (toggle === 1){
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";

	}
	else if(toggle === 0){
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height = "0px";

	}
}
				
/*
	Home Page: 
		changeColor(color) method
			parameter: 
				color- A css color
				
			purpose: This method will set the html body's background color to the 
					 provided parameter.
*/
function changeColor(color){
	document.body.style.background = color;
}

/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none
			
			purpose: This method will iterate through the stats table and 
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.
						
						2. Update the winner column to the name of the winning team.
						
						3. Keep track of the number of wins/losses for the Buffs.
						
						4. Update the second table to show the total number of wins/losses for the Buffs.
*/
function loadStatsPage(){
	var table = document.getElementById("stats_table");
	var row_counter;
	var col_counter;
	var number_win = 0;
	var number_loss = 0;
	var cu = "Cu boulder";
	for (row_counter = 0; row_counter < table.rows.length; row_counter++)
	{
		var cell_value;
		if (row_counter > 1){
			home = parseInt(table.rows[row_counter].cells[2].innerHTML);
			away = parseInt(table.rows[row_counter].cells[3].innerHTML);
			if (home > away)
			{
				table.rows[row_counter].cells[4].innerHTML = cu;
				number_win++;
			}
			else if (home < away)
			{
				table.rows[row_counter].cells[4].innerHTML = table.rows[row_counter].cells[1].innerHTML;
				number_loss++;

			}
		}
		
	}
	document.getElementById('wins').innerHTML = number_win;
	document.getElementById('losses').innerHTML = number_loss;
}

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none
			
			purpose: This method will populate the dropdown menu to allow the 
					 user to select which player's information to view.
					 
					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the 
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method 
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.
						
					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.
		
		switchPlayers(playerNum) method:
			parameters: 
				playerNum - The index of the football player in the players array.
			
			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.
				
				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards
					
					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/

function loadPlayersPage() {
    players = [{first_name: 'John', last_name: 'Doe'
        },
        {first_name: 'Will', last_name: 'Smith'
        },
        {first_name: 'Samuel', last_name: 'Phillips'
        },
        {first_name: 'Robert', last_name: 'Myers'
        }
    ];
    for (i = 0; i < players.length; i++) {
    	var a = document.createElement('a');
		a.setAttribute('href',"#");
		a.setAttribute('onclick', switchPlayers(i))
		a.innerHTML = players[i].first_name + players[i].last_name+ " ";
		document.getElementById('player_selector').appendChild(a);
        //var a = document.createElement('a');
        //var link = document.createTextNode(players[i].first_name + players[i].last_name);
        //a.appendChild(link);
        //a.title = "This is Link";
        //a.href = "#";
        //a.onclick = switchPlayers(i);
        //document.getElementById("player_selector").appendChild(a);
    }
}	

function switchPlayers(playerNum){
	player = [{p_year: 'Senior', p_major: 'comp sci', g_played: 12, player_img:"../resources/img/player1.jpg",
	p_yards: 45,r_yards: 867,rec_yards: 11}, {p_year: 'Junior', p_major: 'Electrical engineering', g_played: 1, player_img:"../resources/img/player2.jpg",
	p_yards: 23,r_yards: 452,rec_yards: 113}, {p_year: 'Senior', p_major: 'biology', g_played: 123, player_img:"../resources/img/player3.jpg",
	p_yards: 450,r_yards: 8670,rec_yards: 112}, {p_year: 'Freshman', p_major: 'sociology', g_played: 3, player_img:"../resources/img/player4.jpg",
	p_yards: 4,r_yards: 8,rec_yards: 11}]

	document.getElementById('p_year').innerHTML = player[playerNum].p_year;
	document.getElementById('p_major').innerHTML = player[playerNum].p_major;
	document.getElementById('g_played').innerHTML = player[playerNum].g_played;
	document.getElementById('p_yards').innerHTML = player[playerNum].p_yards;
	document.getElementById('r_yards').innerHTML = player[playerNum].r_yards;
	document.getElementById('rec_yards').innerHTML = player[playerNum].rec_yards;
	document.getElementById('player_img').src = player[playerNum].player_img;

	var avg_p_yards = player[playerNum].p_yards/player[playerNum].g_played;
	var avg_r_yards = player[playerNum].r_yards/player[playerNum].g_played;
	var avg_rec_yards = player[playerNum].rec_yards/player[playerNum].g_played;

	document.getElementById('avg_rec_yards').innerHTML = avg_rec_yards;
	document.getElementById('avg_r_yards').innerHTML = avg_r_yards;
	document.getElementById('avg_p_yards').innerHTML = avg_p_yards;


}	

