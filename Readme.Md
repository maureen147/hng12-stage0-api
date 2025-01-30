# HNG12 Stage 0 API

This is a simple public API built with **Node.js** and **Express** to return basic information in **JSON format**. The API returns:

- Your registered email address
- The current date and time in ISO 8601 format
- Your GitHub repository URL

## Getting Started

### Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)

### Project Setup

#### 1. Clone the Repository (If Pushed to GitHub)
If you have already pushed your project to GitHub, clone it:
```sh
git clone <https://github.com/maureen147/hng12-stage0-api.git>
cd hng12-stage0-api
```
If you haven’t pushed it yet, move to the next step.

#### 2. Initialize a Node.js Project
If you started from scratch, initialize your project:
```sh
npm init -y
```
This will create a `package.json` file.

#### 3. Install Dependencies
Run the following command to install the required packages:
```sh
npm install express cors dotenv
```

### Project Structure
```
📂 hng12-stage0-api
├── 📄 server.js       # Main API file
├── 📄 .env           # Environment variables
├── 📄 package.json   # Project dependencies
├── 📄 README.md      # Documentation
```

### Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT= 6000
EMAIL=your-email@example.com
GITHUB_URL=https://github.com/yourusername/hng12-stage0-api
```

### API Implementation


### Running the Project Locally
1. Start the server:
   npm start

2. Open your browser or **Postman** and visit:
   ```
   http://localhost:6000/
   ```
   You should receive a JSON response similar to:
   ```json
   {
     "email": "your-email@example.com",
     "current_datetime": "2025-01-30T09:30:00Z",
     "github_url": "https://github.com/yourusername/hng12-stage0-api"
   }
   ```

### Deploying the API
To deploy your API, use platforms like:
- [Render](https://render.com/)

After deploying, replace `http://localhost:6000/` with your live URL.

### Conclusion
This API successfully retrieves essential information in JSON format, meeting the HNG12 Stage 0 task requirements. 🚀

---
Made with ❤️ by [maureen attah ]

