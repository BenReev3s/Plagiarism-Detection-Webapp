# Set Up
After clone or download use "npm i" to download all dependencies
Use npm start to run the app
Go to http://localhost:8080

## How the Plagiarism Checker works?

- Upload 2 file or more
- Hit uplaod to uplaod the files to the database
- Click check so the most recent file is compared against previous files in the database
- See table below file upload to view the similarity score

  ##NOTE
  -Files are stored in SQLite database not on disk
  -The database is created upon initial npm start
  - To reset simply delete ```plagiarism.db```
  
