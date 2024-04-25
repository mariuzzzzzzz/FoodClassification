### Create Dataset
- download https://vision.cs.utexas.edu/projects/finegrained/utzap50k/#:~:text=ut%2Dzap50k%2Dimages%2Dsquare.zip
- store the folder in the top-level of the project
- run: Create Small Dataset.ipynb in a jupyter notebook


### Run Modelling-Process
- run: mvn clean install
- run: open the Training.java-class and run it manually


### Run Programm
- run: mvn spring-boot:run
- go to http://localhost:8080
- upload shoe-picture and check, if the classification works
