### Create Dataset
- download https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/
- store the folder in the top-level of the project

### Run Modelling-Process
- run: mvn clean install
- run: open the Training.java-class and run it manually (e.g. Play-Button)
- check if the model-folder has been created with 2 files in it: foodclassifier-0002.params and synset.txt

### Run Programm
- run: mvn spring-boot:run
- go to http://localhost:8080
- upload food-picture and check, if classification works
