First start your app by cloning the repository, then install all the dependencies required by typing "npm install" in your terminal of preference in both project folders (You need to be located in the folder of the project! example "C:\user\name\Folder_name\NewProject\app").

Then go to "\NewProject\server\db\pokemondatabase.sql" and "\NewProject\server\db\users.sql" and copy the scripts to create the Pokemon and Users Data Base, run your database of preference and paste both scripts.

Before running the Server and Data Base you need to go to the "index.js" file in "\NewProject\server\db\" and change it so it can access your Data Base, if you skip this step when starting the app you'll notice that no data is provided.

Then run "npx nodemon" in the terminal of the "server" folder to start the Data Base and Server. After that open a new terminal located in the "app" folder and type "npm start" to run your project.

If you followed all the steps correctly, you will visualize a Login page, you need to create an account by clicking the "Sign in" button, since the Users Data Base is empty by default. Once you created your account, you will be redirected to the Login page again, insert both your email and password and that's it! Now you're free to see all the pokemons and even add one of your own!