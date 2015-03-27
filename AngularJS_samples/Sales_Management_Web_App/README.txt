Sales Management Web Application

To Run:
----------------------------------------

1) Copy the code folder into your webserver directory.If you are using Apache2 place it in /var/www/html/

2) Start the backend server
	$java -jar backend.jar

3) Open the browser and access the code/app directory
	http://localhost/code/app/

(or) You can also straight away run the program in linux, by right clicking the "index.html" inside code/app folder and select "Open with Firefox Web browser"


Work Done:
--------------------------------------------------
	
1. Login Screen
	> Login screen with user name & password text box with login button created.
	> Based on REST response, the user will be redirected to home page on success and on failure, the error msg is shown to the user.
	> Session is maintained.

2. Home Page.
	> User home page with the following charts are created:
		Pie Chart for total sales values for each sales man with a legend for sales men.
		Bar chart for total sales per month.
		List for top 5 sales orders in amount.
		List for top 5 sales men in last 3 months.
	> All Charts are resizable , dragable , movable.
	> There is an option to close chart.
	> User can refresh each charts.
	> A navigation bar with 4 links is created and when user select a link the corresponding chart will be opened.

3. Headers & Footers
	> Footer for all pages with three links: Privacy Policy , Terms of Use & Support are created.
	> On Clicking Privacy Policy or Term of Use, popup window will appear with static data. 
	> On Clicking Support, popup window will appear with Subject text , Details text , send button & close button.
	> Send button will show message with text "Request is sent successfully".
	> Both Send and Close buttons will close popup window.
	> Header for all pages except Login page is developed.
	> Header will display User Name & Logout link.
	> Logout link will reset session id and redirect to login page.

Technologies Used:
---------------------------------
Angular JS
REST
Bootstrap

 
