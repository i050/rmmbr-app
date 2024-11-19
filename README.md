
# Remember - a site to commemorate deceased relatives and fallen soldiers

The "Remember" website is dedicated to commemorating deceased individuals and fallen soldiers, as well as collecting donations for them. The site displays pages related to specific institutions or wars. These pages show updates related to the institution or war, as well as information about people who donated money, categorized by donation levels.


## Project Description

The "Remember" website is dedicated to commemorating deceased individuals, fallen soldiers, and collecting donations for them. The site displays pages related to specific institutions or major events such as wars. I created the pages for these institutions and major events, where important updates are shown, as well as information about people who donated money, categorized by donation levels.

Additionally, the site allows page admins to edit, add, and delete content on these pages, maintaining full control over the information.

Regarding login, there are two options: login via **Google Account** or **Facebook Account**. I developed the login system using Facebook and Google,  After logging in, permission checks are performed to ensure that only page admins can edit, add, or delete content.

but it's important to note that these features are not yet live and are not active in the current stage of the project.

### How to Run the Project

1. **Clone the Repository**
   - First, you need to clone both repositories:
     - [Backend Repository](https://github.com/i050/rmmbr-backend)
     - [Frontend Repository](https://github.com/i050/rmmbr-app)

2. **Install Client Dependencies**
   - After cloning the frontend repository, navigate to the `rmmbr-app` folder and install the dependencies:
     ```bash
     cd rmmbr-app
     npm install
     ```

3. **Install Server Dependencies**
   - Next, navigate to the `rmmbr-backend` folder and install the dependencies:
     ```bash
     cd rmmbr-backend
     npm install
     ```

4. **Run the Project**
   - On the client side, run the server using `npm run dev` (or `npm start` if it's defined in the `package.json`) at `localhost:5173/`:
     ```bash
     cd rmmbr-app
     npm run dev
     ```
   - On the server side, run the server using `node .` (or `npm start` if it's defined in the `package.json`) at `localhost:3000`:
     ```bash
     cd rmmbr-backend
     node .
     ```

Once the servers are running, you can access the site through the browser at `localhost:5173/`.

#### Login
To log in to the site, there are two options:
- Login with **Email Account**
- Login with **Facebook Account**

After logging in, page admins have additional access, which includes the ability to:
- **Add Content**
- **Edit Existing Content**
- **Delete Content**

##### Technologies Used
The project was built using the following technologies and tools:
- **React (JSX)**: A JavaScript library for building interactive user interfaces.
- **Node.js + Express**: Server-side framework for simulating communication and login functions.
- **Facebook Login API**: Allows users to log in to the site with their Facebook account.
- **Email Login**: Allows users to log in to the site using an email account.

###### Contact
If you have any questions or suggestions, you can contact me at the following email address:
[a0504104451@gmail.com](mailto:a0504104451@gmail.com)
[Call me: 051-5821642](tel:+972515821642)

