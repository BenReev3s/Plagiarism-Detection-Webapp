# Plag-Checker
After clone or download use "npm i" to download all dependencies

## How the Plagiarism Checker works?

1. The Plagiarism Checker uses a simple UI giving the user a choice to select files or drop and drag them. Once prompted that the files are uploaded, you can proceed to click check to output the similarity. The user must upload more than 1 file.

2. The plagairisim checker will take multiple files and compare a file against the rest. It will output the content of the files and show a rating to the right of it stating the similarity. The rating can be from 0-1.

3. As the files are checked, the files are sent to the Sqlite database. This is so the user can compare newly uplaoded files against previous submissions.

