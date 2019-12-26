# SWENGS-Homework-Part-2

* Subject: SWENGS
* Homework2
* Author: Andreas RAITH
* Topic: Foodproducts

## Requirments
* python 3.8.0 with pip installed
* A Virtual Environment with Django 2.2.6
* A working django project

### Optional:
Use the requriments.txt to resolve the dependencies (after cloning the repo)
````bash
pip install -r requirements.txt
````

## Setup
Clone the git repository and copy the app in the project folder
````bash
git clone <RepositoryLink>
````

Migrate the model changed to the db
````bash
python manage.py makemigrations
python manage.py migrate
````

Create a superuser
````bash
python manage.py createsuperuser
````

Run the server
````bash
python manage.py runserver
````

### Troubleshooting
If django throws the error 'No such table'
See: https://stackoverflow.com/questions/12784835/django-no-such-table
````bash
python manage.py migrate --run-syncdb
````
