# MIT-Team2-CurrencyAnalyzer
Northern Trust - Hackathon 

This Web App was developed using Django Framework and React.Js. The user is expected to select two curencies from the searchable selectors and select an year. A graph will be generated that displays the trend between the two currency values. This graph can be viewed as daily, weekly, monthly, or yearly trend.

PREREQUISITES:
  1. Install Django and Django REST Framework
  2. Install the mentioned react libraries:
    2.1. react-select
    2.2. react-date-picker
    2.3. chart.js
  3. Also ensure you have React.Js and Node.js installed
 
STEPS TO RUN THE WEB APP:
  1. Go to the directory where manage.py is located and run the following commands: 
    1.1 *python manage.py migrate*
    1.2. *python manage.py makemigrations*
    1.3. *python manage.py runsever*
  2. Run the server in 127.0.0.1:8000.
  3. Launch the react app using npm start